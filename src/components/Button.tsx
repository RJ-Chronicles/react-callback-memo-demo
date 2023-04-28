import React from "react";
interface BTNProps {
  onClick: () => void;
  title: string;
}
const Button = (props: BTNProps) => {
  console.log("Button");
  const handleTogglePara = () => {
    props.onClick();
  };

  return (
    <>
      <button onClick={handleTogglePara}>{props.title}</button>
    </>
  );
};

export default React.memo(Button);
