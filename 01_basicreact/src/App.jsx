import { useState } from "react";

function App() {
  const [count, Sethehe] = useState(0);

  const hwhw = () => {
    Sethehe(count + 1);
  };

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-8 rounded-md">
        Using Tailwind-css
      </h1>
    </>
  );
}

export default App;
