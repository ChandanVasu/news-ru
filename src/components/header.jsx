import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <div className="h-14 px-4 py-2 flex justify-between items-center ">
      <div>
        <Link href={"/"}>
          <h1 className="text-xl font-bold">Новостной портал</h1>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default header;
