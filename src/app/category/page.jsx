import React from "react";
import TopBlog from "@/components/topBlog";
import Header from "@/components/header";
import CategoryList from "@/components/categoryList";
import ListBlog from "@/components/listBlog";

export default function Home(context) {
  const params = context.searchParams;

  const id = params.id;

  return (
    <div className="max-w-[640px] m-auto min-h-screen bg-white">
      <header className="shadow-header">
        <Header></Header>
      </header>
      <div className="">
        <TopBlog></TopBlog>
        <CategoryList currentCategory={id}></CategoryList>
        <ListBlog category={id}></ListBlog>
      </div>
    </div>
  );
}
