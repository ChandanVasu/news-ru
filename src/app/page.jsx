import React from "react";
import TopBlog from "../components/topBlog";
import Header from "@/components/header";
import CategoryList from "@/components/categoryList";
import ListBlog from "@/components/listBlog";


export default function Home() {
  return (
    <div className="max-w-[640px] m-auto min-h-screen bg-white">
      <header className="shadow-header">
        <Header></Header>
      </header>
      <div className="pb-4">
        <TopBlog></TopBlog>
        <CategoryList currentCategory={0}></CategoryList>
        <ListBlog></ListBlog>
      </div>
    </div>
  );
}
