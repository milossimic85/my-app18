import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import PlayerDetail from "../../components/players/PlayerDetail";

const ShowDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.playerData.name}</title>
      </Head>
      <PlayerDetail
        name={props.playerData.name}
        image={props.playerData.image}
        age={props.playerData.age}
        team={props.playerData.team}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://milos85:0628145401@cluster0.kguzqz1.mongodb.net/playersretryWrites=true&w=majority"
  );
  const db = client.db();

  const playersCollection = db.collection("players");

  const players = await playersCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: players.map((player) => ({
      params: { playerId: player._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const playerId = context.params.playerId;
  const client = await MongoClient.connect(
    "mongodb+srv://milos85:0628145401@cluster0.kguzqz1.mongodb.net/playersretryWrites=true&w=majority"
  );
  const db = client.db();

  const playersCollection = db.collection("players");

  const selectedPlayer = await playersCollection.findOne({
    _id: ObjectId(playerId),
  });
  client.close();

  return {
    props: {
      playerData: {
        image: selectedPlayer.image,
        id: selectedPlayer._id.toString(),
        name: selectedPlayer.name,
        age: selectedPlayer.age,
        team: selectedPlayer.team,
      },
    },
  };
}

export default ShowDetailPage;
