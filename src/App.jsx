import { useRef } from "react";
import Card from "./Card";

const App = () => {
  const data = [
    {
      title: "REACT",
      cat: `import React from "react"; 
      function App() {
        return <div>Hello World</div>;
      }
      ReactDOM.render(<App />, document.getElementById("root"));`,
    },
    {
      title: "SCSS",
      cat: `.rect { 
   background: linear-gradient(
       -119deg, $gray 0%, $dark-gray 100%
       );
      }`,
    },
    {
      title: "JS",
      cat: `var colors = 
 ["#74B087", "#DE7300", "#74B087"]; 
      function animate() {
         console.log(colors)
    }`,
    },
  ];


  const ref = useRef(null);

  return (
    <div>
      <div className="background h-screen w-screen flex justify-center items-center relative bg-black">
        <h1 className="text-[12vw] font-bold opacity-30 text-zinc-500">
          HTMX.
        </h1>
      </div>

      <div
        ref={ref}
        className="foreground h-screen w-screen overflow-hidden absolute top-0 p-5 flex gap-4"
      >
        {data.map((data, index) => (
          <Card data={data} key={index} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default App;
