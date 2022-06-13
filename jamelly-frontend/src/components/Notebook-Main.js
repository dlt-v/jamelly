import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote, token }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });

  //   fetch("http://127.0.0.1:8000/notesnippets/", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Token ${token}`
  //   },

  //   body: JSON.stringify({
  //     id: activeNote.id,
  //     content: activeNote.body,
  //     created_at: activeNote.lastModified,
  //     owner_id: token,
  //     title: activeNote.title
  //     }),
  // }); 

  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
