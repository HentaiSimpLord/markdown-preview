import React from "react";
import { marked } from "marked";
import { useSelector } from "react-redux";
import "../styles/preview.scss";

const Preview = () => {
  const inputText = useSelector((state) => state.input.value);
  const test = marked("#this is an h1");

  // const markedInputText = marked(inputText);

  return (
    <div id="preview" className="container">
      <toolbar className="toolbar">Previewer</toolbar>
      <div
        dangerouslySetInnerHTML={{ __html: marked(inputText) }}
        className="markdown-container"
      ></div>
      {/* <div>{inputText}</div> */}
    </div>
  );
};

export default Preview;
