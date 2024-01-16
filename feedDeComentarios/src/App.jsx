import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  function handleSubmit(ev) {
    ev.preventDefault();

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
        />
        <label htmlFor="content">Comentário:</label>

        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
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
