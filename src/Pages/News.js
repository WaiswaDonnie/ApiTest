import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField';
import ArticleCard from "../components/ArticleCard";
import { NewsContext } from "../components/Services/ContextService";
import '../App.css'
function News() {
  const { users,articles } = useContext(NewsContext);

  return (
    <div className="newsContainer" style={{ marginTop: "100px" }}>

   {
     articles.map((article)=>(
       <ArticleCard
       key={article.id}
       article ={article}
       />
     ))
   }
   
     
 
 
    </div>
  );
}

export default News;
