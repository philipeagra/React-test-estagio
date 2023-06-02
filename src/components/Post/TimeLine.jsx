import { useState } from "react";
import ButtonCreat from "../ButtonCreat";
import styles from "./styles.module.css";
import { LuEdit } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";

const TimeLine = () => {
  console.log("Você irá criar um post!");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [posts, setPosts] = useState([]);

  const createPost = (event) => {
    alert("Esta função irá criar um novo post na timeline!");
    event.preventDefault();
    var date = new Date();
    const post = { title, body, date };
    setPosts([post, ...posts]); // Adiciona o post ao array de posts
    setTitle("");
    setBody("");
  };

  const differenceInMinutes = (date1, date2) => {
    var differenceValue = (date1.getTime() - date2.getTime()) / 1000;
    differenceValue /= 60;
    var result = "";
    const diff = Math.abs(Math.round(differenceValue));
    if (diff === 0) result = "Postado neste minuto";
    else result = `Postado à ${diff} minutos`;
    return result;
  };

  const deletePost = (post) => {
    alert("Este botão irá deletar o post selecionado!");
    const arr = posts.filter((p) => p.date.getTime() !== post.date.getTime());
    setPosts(arr);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.titlePage}>Whats on your mind?</h3>
      <form className={styles.form} onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Digite o título..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="Digite o conteúdo..."
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </div>
        <ButtonCreat />
      </form>

      <div className="timeline">
        {posts.map((post, index) => (
          <>
            <div key={index} className={styles.post}>
              <div className={styles.titlePost}>
                <h3>{post.title}</h3>
                <ul className={styles.iconsTile}>
                  <button
                    onClick={() =>
                      alert("Este botão irá editar o post selicionado!")
                    }
                  >
                    <LuEdit />
                  </button>
                  <button
                    className={styles.buttonPost}
                    onClick={() => deletePost(post)}
                  >
                    <BiEdit />
                  </button>
                </ul>
              </div>

              <div className={styles.date}>
                <span>@PhilipeAg</span>
                <span>{differenceInMinutes(new Date(), post.date)}</span> &nbsp;
              </div>
              <div className={styles.posted}>
                <p>{post.body}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
