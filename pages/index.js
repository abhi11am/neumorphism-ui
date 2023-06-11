import CodeBlock from "@/components/CodeBlock";
import ShapeSelector from "@/components/ShapeSelector";

export default function Home() {
  return (
    <div className="h-full flex items-center space-x-4 justify-center">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-40 h-40 bg-primary my-20 m-auto neumorphism-ui rounded-lg"></div>
      </div>
      <div className="w-1/2">
        <div className="space-y-4">
          <ShapeSelector />
          <CodeBlock />
        </div>
      </div>
    </div>
  )
}
