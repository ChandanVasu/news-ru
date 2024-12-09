import React from "react";
import TopBlog from "../components/topBlog";
import Header from "@/components/header";
import CategoryList from "@/components/categoryList";
import ListBlog from "@/components/listBlog";
import ArticleTop from "@/models/ad/TopArt";
import MidArticle from "@/models/ad/MidArt";
import WebTop from "@/models/ad/WebTop";


export default function Home() {
  return (
    <div className="max-w-[640px] m-auto min-h-screen bg-white">
      <header className="shadow-header">
        <Header></Header>
      </header>
      <div className="pb-4">
        <WebTop></WebTop>
        <TopBlog></TopBlog>
        <ArticleTop></ArticleTop>
        <CategoryList currentCategory={0}></CategoryList>
        <MidArticle></MidArticle>
        <ListBlog></ListBlog>
      </div>
    </div>
  );
}
