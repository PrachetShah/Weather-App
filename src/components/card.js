import React from "react";
import { MdLocationOn } from "react-icons/md";

function Card({ props }) {
  const { temp, target, weather, video, location } = props;
  console.log(temp, target, weather, video, location);
  return (
    <div className={`${target} container`}>
      <p className="temperature text-4xl font-semibold">{temp}</p>
      <p className="weather font-normal text-xl">{weather}</p>
      <img alt={weather} src={video} className="video"></img>
      <div className="place font-normal text-xl flex text-ellipsis">
        <MdLocationOn className="m-1" />
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Card;
