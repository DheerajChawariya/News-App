import { useEffect } from "react";
import { useState } from "react"; 
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=90aef252c2214d33907a3c31b23e1c36`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

  }, [category])
  return (
    <div>
      <h2 className="text-center"> Latest <span className="badge bg-danger">News</span></h2>
      {
        articles.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
