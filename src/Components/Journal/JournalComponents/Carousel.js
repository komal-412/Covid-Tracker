import React, {useState} from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function FixedCarousel({newsArray}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
        return (
            <div style={{ position: "fixed", height: "100vh", width: "40vw", left: "57vw", margin: "20px" }}>
                        <div >  
                            <h3 style={{color: "black", textAlign: "center", margin: "20px"}}>Stay Updated!</h3>
                        <Carousel>  
                            {
                                newsArray.map((newsItem) => (
                                    <Carousel.Item  >  
                                    <img    
                                    style={{height: "80vh"}}
                                    alt={newsItem.title}
                                    src={
                                      newsItem.urlToImage
                                        ? newsItem.urlToImage
                                        : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
                                    }  />  
                                        <Carousel.Caption>  
                                        <h3> {newsItem.title}</h3>  
                                        </Carousel.Caption>  
                                    </Carousel.Item  >  
                                ))
                            }
                        
                        </Carousel>

                    </div>
                    </div>
    )
}

export default FixedCarousel
    