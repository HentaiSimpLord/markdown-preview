import "../styles/editor.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/inputSlice";
import { useSelector } from "react-redux";

const Editor = () => {
  const dispatch = useDispatch();
  const initialMarkdownText = useSelector((state) => state.input.value);

  const handleChange = (event) => {
    dispatch(setInput(event.target.value));
  };

  return (
    <div className="container">
      <toolbar className="toolbar">Editor</toolbar>
      <textarea id="editor" onChange={handleChange}>
        {initialMarkdownText}
      </textarea>
    </div>
  );
};

export default Editor;
