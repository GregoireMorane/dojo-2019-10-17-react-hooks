import React from "react";

const Articles = ({ articles, deleteArticle }) => {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          {article.title}
          <button onClick={() => deleteArticle(article.id)}>
            click to delete arcticle
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
