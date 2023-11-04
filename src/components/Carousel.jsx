import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    
    const[num,setNum] = useState(0)

    const handleLeft = () => {
        if(num > 0){
            setNum(num - 1)
        }
        else{
            setNum(0)
        }
    }

    const handleRight = () => {
        if(num < images.length - 1){
            setNum(num + 1)
        }
        else{
            setNum(0)
        }
    }

    return(
        <div className="container">
                <div className="left-arrow flex arrow" onClick={handleLeft}><ArrowBackIosIcon /></div>
                <div className="title box">{images[num].title}</div>
                <img src={images[num].img} alt="" />
                <div className="subtitle box">{images[num].subtitle}</div>
                <div className="right-arrow flex arrow" onClick={handleRight}><ArrowForwardIosIcon /></div>
            </div>
    )
}

export default Carousel;