import React, { useState } from 'react'

const ShapeSelector = () => {
  const [selected, setSelected] = useState(0);
  const shapes = [
    {
      name: "",
      icon: <img src="/shape-icons/icon1.svg" className="w-10 text-inherit" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon2.svg" className="w-10 text-inherit" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon3.svg" className="w-10 text-inherit" />
    },
    {
      name: "",
      icon: <img src="/shape-icons/icon4.svg" className="w-10 text-inherit" />
    }
  ];

  const handleShapeClick = (key) => {
    setSelected(key);
  }

  return (
    <div className="flex items-center text-sm space-x-4">
      <div className="text-slate-600 whitespace-nowrap">Select Shape</div>
      <div className="bg-slate-200 flex items-center rounded-full w-full p-1 text-sm space-x-2">
        {shapes.map((shape, index) => (
          <button 
            key={index}
            type="button" 
            className={`${(index === selected) ? 'bg-sky-600' : 'hover:bg-slate-200'} w-full py-3 px-4 rounded-full flex justify-center`}
            onClick={() => handleShapeClick(index)}
          >{shape.icon}</button>
        ))}
      </div>
    </div>
  )
}

export default ShapeSelector
