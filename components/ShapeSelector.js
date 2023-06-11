import React, { useState } from 'react'

const ShapeSelector = () => {
  const [selected, setSelected] = useState(0);
  const shapes = [
    {
      name: "",
      icon: <img src="/shape-icons/icon1.svg" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon2.svg" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon3.svg" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon4.svg" />
    }
  ];

  return (
    <div className="bg-white flex items-center rounded-full p-1 text-sm space-x-2">
      {shapes.map((shape, index) => (
        <button type="button" className={`${(index === selected) ? 'bg-sky-600 text-white' : ''} w-full py-3 px-6 rounded-full flex justify-center hover:bg-slate-200`}>{shape.icon}</button>
      ))}
    </div>
  )
}

export default ShapeSelector
