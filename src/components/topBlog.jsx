"use client";
import React, { useEffect, useState, useRef } from "react";

const TopBlog = () => {
  const [post, setPost] = useState([]);
  const containerRef = useRef(null);

  const fetchGames = async () => {
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
            pageSize: 8,
            domainTag: "64305d92ef8e434ebab283ae6747745a",
          }),
          cache: "force-cache",
        }
      );
      const data = await response.json();
      setPost(data.result);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || post.length === 0) return;

    const postWidth = container.querySelector("div").offsetWidth;
    const clientWidth = container.clientWidth;

    const scrollOnePost = () => {
      if (container.scrollLeft + clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += postWidth;
      }
    };

    const scrollInterval = setInterval(scrollOnePost, 3000);

    return () => clearInterval(scrollInterval);
  }, [post]);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-hidden select-none p-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {post.map((item) => (
        <div
          key={item.taskId}
          className="flex-shrink-0 relative overflow-hidden rounded-md"
        >
          <h1 className="absolute bottom-5 left-5 text-white font-bold text-xl">
            {item.title}
          </h1>
          <img
            src={item.imgUrl}
            alt={item.title}
            className="h-[170px] w-[350px] sm:h-{270px} sm:w-[550px] rounded-md transition-border duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default TopBlog;
