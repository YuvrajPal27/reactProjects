import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-white rounded-2xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-red-500 "
            onClick={() => {setColor("red")}}
            >
              red
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-blue-500 "
            onClick={() => {setColor("blue")}}
            >
              blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-green-500 "
            onClick={() => {setColor("green")}}
            >
              green
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-yellow-500 "
            onClick={() => {setColor("yellow")}}
            >
              yellow
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm bg-pink-500 "
            onClick={() => {setColor("pink")}}
            >
              pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
