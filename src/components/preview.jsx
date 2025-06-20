import React from "react";
import { useSelector } from "react-redux";
import "../styles/preview.scss";
import { marked } from "marked";

const Preview = () => {
  const inputText = useSelector((state) => marked(state.input.value));

  return (
    <div id="preview" className="container">
      <toolbar className="toolbar">Previewer</toolbar>
      <div
        dangerouslySetInnerHTML={{ __html: inputText }}
        className="markdown-container"
      ></div>
      {/* <div>{inputText}</div> */}
    </div>
  );
};

export default Preview;
