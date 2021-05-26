import "./Journal.css";
import { useEffect, useState } from "react"; 
import NewsContent from './JournalComponents/NewsContent/NewsContent';
import axios from "axios";
import apikey from "./apikey"
import React from "react";


function Journal() {
  //const [category,setCategory]= useState("covid");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore, setLoadMore] = useState(20);


  const newsApi=async () => {
    try {
        
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=24a39dc59a3b45bc8ad1e2cafdcb27e5`
      );
      setNewsArray(news.data.articles);
       setNewsResults(news.data.totalResults);
       
      

    } catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  },[newsResults, loadMore]);


  return (
    <div className="Journal">
    <div class="navbar">
      <h2>Stay Updated</h2>
    </div>
    <div class="main">
    {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          
        />
      )}
    </div>
</div>
  );
}

export default Journal;


{/*  */}
