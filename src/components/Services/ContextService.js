import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [news,setNews]= useState([])

  useEffect(() => {
    getUsers();
    getArticles();
  }, []);

  const getArticles = async () => {
    axios
      .get("https://607d8e4f184368001769df54.mockapi.io/article")
      .then((response) => {
        setArticles(response.data)
        console.log(articles)
      })
      .catch((error) => console.log(error));
  };

  const getUsers = async()=>{
    axios
    .get("https://607d8e4f184368001769df54.mockapi.io/users")
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => alert(error));
  }

  function deleteNews(id) {
    axios
      .delete(`https://607d8e4f184368001769df54.mockapi.io/article/${id}`)
      .then((response) => {
        console.log("DETELED");
      });

    setNews(news.filter((newsData) => newsData.Id !== id));
  }

  const postNews = async (NewsToPost) => {
    axios
      .post("https://607d8e4f184368001769df54.mockapi.io/article/", NewsToPost)
      .then((response) => {
        setNews([...news, response.data]);
      })
      .catch((err) => window.alert(err));
  };

  const fetchSingleNews = async (id) => {
    const res = await axios.get(
      `https://607d8e4f184368001769df54.mockapi.io/article/${id}`
    );
    const dataGot = res.data;

    return dataGot;
  };

  function editNews(id, updatedNews) {
    axios.put(
      `https://607d8e4f184368001769df54.mockapi.io/article/${id}`,
      updatedNews
    );
  }

  return (
    <NewsContext.Provider
      value={{ articles, postNews, deleteNews, editNews, fetchSingleNews,users }}
    >
      {/* <UpdateNewsContext.Provider> */}

      {children}
      {/* </UpdateNewsContext.Provider> */}
    </NewsContext.Provider>
  );
};
