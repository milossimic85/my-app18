import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React from "react";

const PlayerDetail = (props) => {
  return (
    <section>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.team}</div>
    </section>
  );
};

export default PlayerDetail;
