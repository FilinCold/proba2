import React, {useEffect, useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {logDOM} from "@testing-library/react";

const AddArticles = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })
  const [data, setData] = useState([])
  let changeEditorState = (editorState) => {
    setEditorState(editorState);
  }
  // let itemsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

  const showData = () => {
    const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // const dataText = convertFromRaw(editorState.getCurrentContent());
    setData(() => {
        return [...data, dataText]
    });

    // if(data.length) {
    //   console.log(1)
    //   localStorage.setItem('items', JSON.stringify(data))
    // }
  }

  useEffect(() => {
    if(data.length) {
      localStorage.setItem('items', JSON.stringify(data))
    }
    let d
    if(JSON.parse(localStorage.getItem('items')) !== null) {
      d = JSON.parse(localStorage.getItem('items'))
      console.log(d.join(''))
    }
  })
  return (
    <div className='wrapper__post'>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeEditorState}
      />
      <button onClick={showData}>Add</button>
      <div dangerouslySetInnerHTML={data ? {__html: data.join('')} : null}>

      </div>
    </div>
  )
}


export default AddArticles;