import Head from "next/head";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import PlayerForm from "../../components/players/PlayerForm";

const NewFootbalPlayerPage = () => {
  const router = useRouter();
  async function addHandler(enteredData) {
    const response = await fetch("/api/new-player", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New player</title>
      </Head>
      <PlayerForm addNewPlayer={addHandler} />
    </Fragment>
  );
};

export default NewFootbalPlayerPage;
