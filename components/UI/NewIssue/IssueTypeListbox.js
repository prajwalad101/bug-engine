import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { BiChevronDown } from "react-icons/bi";

export default function IssueTypeListbox({
  issueTypes,
  issueType,
  setIssueType,
}) {
  return (
    <Listbox value={issueType} onChange={setIssueType}>
      <Listbox.Button className="border-b-2 pr-5 mb-2 font-lato flex">
        {issueType.name}
        {<BiChevronDown size={23} className="mt-[1px]" />}
      </Listbox.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options>
          {issueTypes.map((type) => (
            <Listbox.Option
              key={type.id}
              value={type}
              disabled={type.unavailable}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={`${
                    active
                      ? " hover:cursor-pointer text-gray-500"
                      : "bg-white text-black"
                  } font-lato`}
                >
                  {type.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
