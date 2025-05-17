function Editor() {
  return (
    <div style={{ padding: 40 }}>
      <h1>✅ The Editor is rendering!</h1>
      <textarea placeholder="Start typing..." rows={10} cols={60} />
      <br />
      <button>💾 Save</button>
    </div>
  );
}

export default Editor;
