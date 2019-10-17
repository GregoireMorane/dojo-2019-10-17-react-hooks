import React, { useState, useEffect } from "react";
import "./App.css";

import { fetchArticles } from "./queries";
import Articles from "./Articles";
import Temperature from "./Temperature";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [hasErrorOccured, setHasErrorOccured] = useState(false);

  const deleteArticle = id => {
    setArticles(articles.filter(article => article.id !== id));
  };

  useEffect(() => {
    const _fetchArticles = async () => {
      try {
        setArticles(await fetchArticles());
      } catch (error) {
        setHasErrorOccured(true);
      }
    };
    _fetchArticles();
  }, []);

  return [articles, hasErrorOccured, deleteArticle];
};

const App = () => {
  const [articles, hasErrorOccuredAboutArticles, deleteArticle] = useArticles();

  return (
    <>
      <Temperature />
      {hasErrorOccuredAboutArticles ? (
        "An error has occured. Please reload the page."
      ) : (
        <Articles articles={articles} deleteArticle={deleteArticle} />
      )}
    </>
  );
};

export default App;
