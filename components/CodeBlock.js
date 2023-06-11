import React from 'react'
import { Tab } from "@headlessui/react";

const CodeBlock = () => {
  const tabs = [
    {
      name: "Tailwind",
      panel: ""
    },
    {
      name: "CSS",
      panel: ""
    },
    {
      name: "Material UI",
      panel: ""
    },
    {
      name: "Chakra UI",
      panel: ""
    }
  ];

  return (
    <div className="bg-[#0D1B2A] h-64 rounded-[20px]">
      <Tab.Group>
        <Tab.List className="border-b-2 border-white border-opacity-20">
          {tabs.map((tab, index) => (
            <Tab key={index} className="outline-none text-sm translate-y-[1.8px]">
              {({ selected }) => (
                <button className={`${selected ? 'text-white border-b-2 border-sky-600' : 'text-slate-400'}  p-2 min-w-[100px] outline-none`}>{tab.name}</button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, index) => (
            <Tab.Panel key={index} className="p-4">{tab.panel}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default CodeBlock
