import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React from "react";
import PlayerItem from "./PlayerItem";

const PlayerList = (props) => {
  return (
    <ul>
      {props.players.map((player) => (
        <PlayerItem
          key={player.id}
          id={player.id}
          name={player.name}
          age={player.age}
          image={player.image}
          team={player.team}
        />
      ))}
    </ul>
  );
};

export default PlayerList;
