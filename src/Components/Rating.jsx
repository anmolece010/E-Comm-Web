import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating1 = ({ rating, onClick }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ cursor: "pointer" }} onClick={() => onClick(i)}>
          {rating > i ? <StarIcon /> : <StarBorderIcon />}
        </span>
      ))}
      {/* <StarBorderIcon /> */}
    </div>
  );
};

export default Rating1;
