"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const ListBlog = () => {
  const [post, setPost] = useState([]);
  const [postLimit, setPostLimit] = useState(8);

  const fetchListBlog = async () => {
    try {
      const response = await fetch(
        "https://cpapi.exploitresource.com/station/content_station/rec/v1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            languageCode: "ru",
            pageIndex: 1,
            oneTypeIds: [0],
            pageSize: 100, // Fetch a larger batch to support dynamic loading
          }),
          cache: "force-cache",
        }
      );
      const data = await response.json();
      setPost(data.result);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    fetchListBlog();
  }, []);

  const truncateTitle = (title, value) => {
    if (!title) return "No Title";
    return title.length > value ? title.slice(0, value) + "..." : title;
  };

  // Handle scroll to load more posts
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottom = document.documentElement.scrollHeight;

    if (scrollPosition >= bottom - 200) {
      // Trigger when near bottom of the page
      setPostLimit((prevLimit) => prevLimit + 8); // Increase post limit by 8
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 mt-4 space-y-4">
      {post.slice(0, postLimit).map((item, index) => (
        <React.Fragment key={index}>
          <div className="mb-4">
            <Link
              href={{
                pathname: `/blog/${item.taskId}`,
                query: { lan: "ru", typesource: item.source },
              }}
            >
              <div className="flex gap-2 shadow-box justify-between items-center px-2 rounded-md py-2">
                <div className="h-full w-[20%]">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full md:h-full object-fill rounded-lg h-[80px]"
                  />
                </div>
                <div className="w-[80%]">
                  <h2 className="md:text-lg text-base font-normal">
                    {truncateTitle(item.title, 40)}
                  </h2>
                  <p className="text-gray-500 md:text-base text-sm">
                    {truncateTitle(item.content, 60)}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Show image after every 3 posts */}
          {(index + 1) % 3 === 0 && (
            <div className="w-full flex justify-center mt-4">
              <img
                src="https://sohpi.s3.ap-south-1.amazonaws.com/cee988ce-99d8-4d24-a472-28f5dfe3a0ad"
                alt="Sponsored"
                className="rounded-lg w-[400px] h-[250px] object-fill md:w-[600px] "
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListBlog;
