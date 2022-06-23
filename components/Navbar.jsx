import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          {/* menu navbar mobile */}
          <div className="w-3/12 lg:hidden">
            <button
              onClick={() => {
                setOffcanvas(!offcanvas);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className=" flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                  E
                </div>
                epictetus
              </a>
            </Link>
          </div>

          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* button nav mobile */}
          <div
            className={`lg:w-7/12 fixed lg:static lg:bg-none w-full h-full bg-gradient-to-b from-gray-600 to-gray-900 top-0 ${
              offcanvas ? "left-0" : "-left-full"
            } p-10 lg:p-0 transition-all`}
          >
            <ul className="lg:space-x-14 flex lg:items-center lg:flex-row flex-col space-y-4 lg:space-y-0">
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => {
                  setOffcanvas(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">UI Design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Front-End</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back-End</a>
                </Link>
              </li>
              <li className="relative">
                <a
                  className="hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute rounded-md bg-gray-800 w-[200px] shadow-2xl mt-4">
                    {dropdownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0 "
                      >
                        <a
                          href={href}
                          className="bg-gray-800 px-6 py-3 flex hover:bg-gray-700/60"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 w-full lg:static lg:px-0 lg:top-0 absolute left-0 transition-all px-10 ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <button
              className="absolute top-3 right-12 lg:hidden"
              onClick={() => {
                setSearch(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input
              className="bg-gray-700 py-3 px-6 w-full lg:rounded-full bg-search pl-12"
              placeholder="search"
              type="text"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
