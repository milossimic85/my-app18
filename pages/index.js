import Head from "next/head";
import { MongoClient } from "mongodb";
import PlayerList from "../components/players/PlayerList";
import { Fragment } from "react";
const DUMMY_Players = [
  {
    id: "m1",
    name: "Cristiano Ronaldo",
    image:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    age: 37,
    team: "Munchester United",
  },
  {
    id: "m2",
    name: "Lionell Messi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    age: 35,
    team: "PSG",
  },
];
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Football Players</title>
        <meta name="description" content="Browser a football players"></meta>
      </Head>
      <PlayerList players={props.playersAll} />
    </Fragment>
  );
};

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://milos85:0628145401@cluster0.kguzqz1.mongodb.net/playersretryWrites=true&w=majority"
  );
  const db = client.db();

  const playersCollection = db.collection("players");

  const players = await playersCollection.find().toArray();

  client.close();

  return {
    props: {
      playersAll: players.map((player) => ({
        name: player.name,
        image: player.image,
        age: player.age,
        team: player.team,
        id: player._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
