import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("8th line==>", toggle);
    document.body.style.backgroundColor = toggle ? "white" : "black";
  }, [toggle]);

  const toggleTheme = () => {
    console.log("16th line==>", toggle);
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}>click</button>
    </div>
  );
}
