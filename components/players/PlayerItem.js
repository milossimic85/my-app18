import { Router, useRouter } from "next/router";
import React from "react";
import classes from "./PlayerItem.module.css";

const PlayerItem = (props) => {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/" + props.id);
  };
  return (
    <div className={classes.item}>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>{props.name}</div>
      <div>
        <button onClick={showDetailHandler}>Show Details</button>
      </div>
    </div>
  );
};

export default PlayerItem;
