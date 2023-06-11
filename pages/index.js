import CodeBlock from "@/components/CodeBlock";
import GeneratorOutput from "@/components/GeneratorOutput";
import ShapeSelector from "@/components/ShapeSelector";

export default function Home() {
  return (
    <div className="h-full space-y-16">
      <div className="">
        <div className="w-3/5 space-y-2">
          <h1 className="text-2xl text-slate-800 font-bold">Neumorphism Generator</h1>
          <p clasName="text-slate-600">Effortlessly create stunning neumorphic designs for Tailwind, CSS, Material UI, and Chakra UI. Customize properties and preview in real-time, and generate code snippets for easy implementation. Elevate your web projects with the elegance and depth of neumorphic design. Try it now!</p>
          <div className="w-fit py-2 px-4 text-sm font-medium bg-rose-200 text-rose-600 rounded-full">Neumorphism-based UI components are on the way!</div>
        </div>
        <div className=""></div>
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <div className="w-5/12 flex items-center justify-center relative">
          <GeneratorOutput />
        </div>
        <div className="w-7/12">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-[20px] h-48">
              <ShapeSelector />
            </div>
            <CodeBlock />
          </div>
        </div>
      </div>
    </div>
  )
}
