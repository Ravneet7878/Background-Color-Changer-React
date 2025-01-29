import { useState } from "react"

function App() {
  let [color, set_color] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-6">
        <div className="flex flex-wrap justify-center text-3xl gap-3 bg-white px-4 py-4 rounded-3xl">
          <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => set_color("red")}>Red</button>
          <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => set_color("green")}>Green</button>
          <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => set_color("blue")}>Blue</button>
          <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "magenta"}} onClick={() => set_color("magenta")}>Magenta</button>
          <button className="outline-none px-4 rounded-3xl text-white shadow-lg" style={{backgroundColor: "orange"}} onClick={() => set_color("orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App