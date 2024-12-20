"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CategoryMid from "@/models/ad/CategoryMid";

const ListBlog = ({ category }) => {
  // Correctly destructure category from props
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
            domainTag: "64305d92ef8e434ebab283ae6747745a",
            oneTypeIds: [category || 0],
            pageSize: 40,
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
  }, [category]); // Ensure refetch if category changes

  const truncateTitle = (title, value) => {
    if (!title) return "No Title";
    return title.length > value ? title.slice(0, value) + "..." : title;
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottom = document.documentElement.scrollHeight;

    if (scrollPosition >= bottom - 200) {
      setPostLimit((prevLimit) => prevLimit + 8);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
                pathname: `/articles/${item.taskId}`,
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

          {(index + 1) % 3 === 0 && (
            <div className="w-full flex justify-center mt-4">
              <CategoryMid />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListBlog;
