import Link from "next/link";
import React, { FC, ReactNode } from "react";

type MenuItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
};
const MenuItem: FC<MenuItemProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </Link>
    </li>
  );
};

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="text-center py-3">Nawasena</div>
          <ul className="space-y-2 font-medium text-white">
            <MenuItem label="Users" href="/users" icon={<UserIcon />} />
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

const UserIcon = () => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User / User_02">
        <path
          id="Vector"
          d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default MainLayout;
