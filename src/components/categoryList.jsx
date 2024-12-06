"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categoryNameMapping } from "@/models/translations";

const categoryList = ({ currentCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategoryList = async () => {
    try {
      const response = await fetch(
        "https://cpapi.exploitresource.com/station/content_station/top_type_list/v1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            languageCode: "ru",
            domainTag: "64305d92ef8e434ebab283ae6747745a",
          }),
          cache: "force-cache",
        }
      );
      const data = await response.json();
      setCategoryList(data.result);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  if (!currentCategory) {
    currentCategory = 0;
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <div className="px-4 flex overflow-x-auto gap-2">
      {categoryList.map((category, index) => (
        <div key={index}>
          <Link href={"/"}>
            <p
              className={`px-3 py-1 mb-3 hover:bg-slate-500 hover:text-white   rounded-lg ${
                category.id === currentCategory
                  ? "bg-red-800 text-white hover:bg-red-800"
                  : "bg-gray-200"
              }`}
            >
              {categoryNameMapping[category.name] || category.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default categoryList;
