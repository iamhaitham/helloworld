import { useState } from "react";
import StyledParagraph from "./components/StyledParagraph.jsx";
import { CustomButton } from "./components/CustomButton.jsx";

const App = () => {
  const [isParagraphRendered, setIsParagraphRendered] = useState(true);

  const [paragraphStyle, setParagraphStyle] = useState({
    color: "black",
    fontSize: "30px",
    fontWeight: "700"
  });

  const changeColor = () => {
    setParagraphStyle({
      ...paragraphStyle,
      color: paragraphStyle.color == "black" ? "black" : "red"
    });
  };

  const toggleParagraph = () => {
    setIsParagraphRendered(!isParagraphRendered);
  };

  return (
    <>
      { 
        isParagraphRendered && 
        <StyledParagraph 
          paragraphContent="Hello World"
          paragraphStyle={ paragraphStyle }
        />
      }

      <CustomButton
        buttonContent="Change Color"
        handleClick={ changeColor }
      />

      <CustomButton
        buttonContent="Toggle Paragraph"
        handleClick={ toggleParagraph }
      />
    </>
  );
}

export default App;
