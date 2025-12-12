"use client";

import Header from "@/components/home/Header";
import NewsGrid from "@/components/news/NewsGrid";
import { arabicNewsData } from "../../../data/mockData";
import { useState } from "react";
import Button from "@/components/common/Button";

function News() {
  const newsData = arabicNewsData;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearch = () => {
    console.log("Search clicked", {
      searchTerm,
      selectedCategory,
      selectedDate,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Header
        img="/backimage.svg"
        title="Islamic Medical Association"
        description="Tel: 07 735 734"
        logo="/logo.svg"
      />
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mt-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white w-full">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder={"ابحث هنا..."}
              className="p-2 border-2 border-secondary font-bold rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <select
              className="p-2 border-2 border-secondary font-bold text-secondary rounded-md w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>الفئة</option>
              <option>تكنولوجيا</option>
              <option>اقتصاد</option>
            </select>
            <select
              className="p-2 border-2 border-secondary font-bold text-secondary rounded-md w-full"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option>التاريخ</option>
              <option>اليوم</option>
              <option>الأسبوع الماضي</option>
            </select>
          </div>
          <Button text="Search" onClick={handleSearch} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-5xl px-4 mb-9">
        <NewsGrid newsData={newsData} showButton={false} />
      </div>
    </div>
  );
}

export default News;
