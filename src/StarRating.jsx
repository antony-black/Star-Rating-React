import React from "react";
import { useState } from "react";
import {FaStar} from "react-icons/fa";
import "./index.scss";

export default function StarRating() {
  const [selectedStar, setSelectedStar] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(null);

  const isActive = (index) => {
    return index <= (selectedStar || hoveredStar) ? "active" : "inactive";
  }

  const createStars = () => {
    const stars = [...Array(10)].map((_,index) => {
      index += 1;
      return <FaStar 
      key={index}
      className={isActive(index)}
      onClick={() => setSelectedStar(index)}
      onMouseOver={() => setHoveredStar(index)}
      onMouseLeave={() => setHoveredStar(selectedStar)}
      size={40}
    />
    });

    return stars;
  }

  return <div className="main-container">
    {createStars()}
  </div>;
}

















// export default function StarRating({stars = 10}) {
//   const [selectedStar, setSlectedStar] = useState(0);
//   const [hoveredStar, sethoveredStar] = useState(0);

//   const handleStarClick = (index) => {
//     setSlectedStar(index);
//   }
//   const handleStarHover = (index) => {
//     sethoveredStar(index);
//   }
//   const handleMouseLeave = () => {
//     sethoveredStar(selectedStar);
//   }

  // return <div className="main-container">
    // {
    //   [...Array(stars)].map((_, index) => {
    //     index += 1;
    //     return <FaStar
    //       key={index}
    //       className={
    //         index <= (selectedStar || hoveredStar) ? "active" : " inactive"
    //       }
    //       onClick={() => handleStarClick(index)}
    //       onMouseMove={() => handleStarHover(index)}
    //       onMouseLeave={handleMouseLeave}
    //       size={40}
    //     />
    //   })
    // }
  // </div>;
// }
