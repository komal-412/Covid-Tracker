import "./Journal.css";
import { useEffect, useState } from "react"; 
import NewsContent from './JournalComponents/NewsContent/NewsContent';
import axios from "axios";
import JournalFooter from "./JournalComponents/JournalFooter/JournalFooter"
import apikey from "./apikey"


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
   //console.log(newsArray);
  useEffect(() => {
    newsApi();
  },[newsResults, loadMore]);


  return (
    <div className="Journal" id="#home">
     
     {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          
        />
      )}
      
     <JournalFooter />
    </div>
  );
}

export default Journal;
