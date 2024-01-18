import { useRef } from "react";
import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  function handleSubmit(ev) {
    ev.preventDefault();

    if (author === "") {
      inputRef.current.focus();
      return;
    } else if (content === "") {
      inputRef2.current.focus();
      return;
    }
    const newComment = {
      id: Math.floor(Math.random() * 10000000),
      email: author,
      Comment: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);
    console.log(newComment);

    setAuthor("");
    setContent("");
  }

  return (
    <div id="app">
      <h2>Feed de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email:</label>
        <input
          type="email"
          id="author"
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
          ref={inputRef}
        />
        <label htmlFor="content">Comentário:</label>

        <textarea
          id="content"
          cols="30"
          rows="6"
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          ref={inputRef2}
        ></textarea>
        <button type="subit">Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length === 0 ? (
          <p>adicione um comentário!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.email}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.Comment}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default App;
