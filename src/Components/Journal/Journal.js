import "./Journal.css";
import { useEffect, useState } from "react"; 
import NewsContent from './JournalComponents/NewsContent/NewsContent';
import axios from "axios";
import JournalFooter from "./JournalComponents/JournalFooter/JournalFooter"
import Carousel from './JournalComponents/Carousel'
import apikey from "./apikey"


function Journal() {
  //const [category,setCategory]= useState("covid");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore, setLoadMore] = useState(20);
  

  const newsApi=async () => {
    try {
        
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?q=covid&country=in&apiKey=${apikey}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch(error){
      console.log(error);
    }
  };
   //console.log(newsArray);
  useEffect(() => {
    newsApi();
  },[newsResults, loadMore]);


  return (
    <div className="news">
      <div className="Journal" id="#home">
     
     {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
    </div>
    {newsResults && (
    <Carousel
    newsArray={newsArray}
    newsResults={newsResults}
    />
    )}
    </div>
    
  );
}

export default Journal;
