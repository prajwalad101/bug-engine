import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

import { AiOutlineDown } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDropdown({ isAdmin }) {
  const { data: session } = useSession();

  const user = session.user;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center gap-2 ">
        <Menu.Button className="inline-flex justify-center w-full rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <div className="flex items-center gap-2">
            <div className="rounded-full shadow-md overflow-y-hidden overflow-x-hidden w-[35px] h-[35px]">
              <Image
                src={user.image}
                alt="user profile"
                width={35}
                height={35}
              />
            </div>
            <AiOutlineDown className="mr-1" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className=" bg-gray-50 text-gray-700
                      block px-4 py-2 text-sm
                    "
              >
                Logged in as {isAdmin ? "admin" : user.role}
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className=" bg-gray-50 text-gray-700
                  block px-4 py-2 text-sm
                "
              >
                {user.email}
              </a>
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
