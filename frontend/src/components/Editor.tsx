
import React, { useRef, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RGA } from '../crdt/rga';
import { connectSocket, sendOp } from '../services/socket';
import { saveFile } from '../services/save';

const rga = new RGA();

function Editor() {
  const editorRef = useRef<ReactQuill>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    connectSocket((remoteOp) => {
      rga.apply(remoteOp);
      setText(rga.getVisibleText());
    });
  }, []);

  const handleChange = (val: string) => {
    const plain = val.replace(/<\/?[^>]+(>|$)/g, '');
    const id = 'user-' + Math.random().toString(36).substring(2);
    const parentId = rga.getState().at(-1)?.id ?? null;
    rga.insertAfter(parentId, plain.slice(-1), id);
   sendOp({ id, value: plain.slice(-1), parentId, visible: true });
    setText(rga.getVisibleText());
  };

  const handleSave = () => {
    saveFile(text);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>✏️ Collaborative Editor</h2>
      <ReactQuill
        ref={editorRef}
        value={text}
        onChange={handleChange}
        theme="snow"
        style={{ height: 300, marginBottom: 20 }}
      />
      <button onClick={handleSave}>💾 Save</button>
    </div>
  );
}

export default Editor;
