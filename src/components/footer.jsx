import React from "react";
import { RussianTextMapping } from "@/models/translations";
import Link from "next/link";

const footer = () => {
  return (
    <div className="max-w-[640px] m-auto p-5  bg-white ">
      <footer className="">
        <div className="flex justify-between">
            <h1 className="text-xl font-bold">{RussianTextMapping["News Portal"]}</h1>
          <ul className="space-y-2 text-end">
            <li>
              <Link
                href="/pages/about"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {RussianTextMapping["About"]}
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {RussianTextMapping["Contact"]}
              </Link>
            </li>
            <li>
              <Link
                href="/pages/terms"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {RussianTextMapping["Terms of Service"]}
              </Link>
            </li>
            <li>
              <Link
                href="/pages/privacy"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {RussianTextMapping["Privacy Policy"]}
              </Link>
            </li>
            <li>
              <Link
                href="/pages/cookies"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {RussianTextMapping["Cookie Policy"]}
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          © 2024 {RussianTextMapping['News Portal']}. {RussianTextMapping['All rights reserved']}.
        </p>
      </footer>
    </div>
  );
};

export default footer;
