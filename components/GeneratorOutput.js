import React, { useState } from 'react'
import { Lightbulb, LightbulbFill } from "react-bootstrap-icons";


const GeneratorOutput = () => {
  const [lightSource, setLightSource] = useState(0);

  const handleLightSource = (number) => {
    setLightSource(number);
  }

  const lights = [
    {
      name: "top-left",
      classes: "rotate-[135deg] left-2 top-2",
    },
    {
      name: "top-right",
      classes: "-rotate-[135deg] right-2 top-2",
    },
    {
      name: "bottom-left",
      classes: "rotate-45 left-2 bottom-2",
    },
    {
      name: "bottom-right",
      classes: "-rotate-45 right-2 bottom-2",
    },
  ]

  return (
    <div>
      {lights.map((light, index) => (
        <button type="button" className={`absolute ${light.classes}`} onClick={() => handleLightSource(index)}>
          {(index === lightSource)
            ? <LightbulbFill className="text-slate-500 text-amber-500" />
            : <Lightbulb className="text-slate-400" />}
        </button>
      ))}
      <div className="w-40 h-40 bg-primary my-20 m-auto neumorphism-ui rounded-[20px]"></div>
    </div>
  )
}

export default GeneratorOutput
