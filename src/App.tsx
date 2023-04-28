import "./styles.css";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
import { useCallback, useState } from "react";
export default function App() {
  const [show, setShow] = useState(false);
  const handleToggleParagraph = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  console.log("Main");
  return (
    <div className="App">
      <Paragraph show={show} />
      <Button onClick={handleToggleParagraph} title="toggle" />
    </div>
  );
}
