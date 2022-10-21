import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./PlayerForm.module.css";
const PlayerForm = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const inputImageRef = useRef();
  const inputTeamRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const namer = inputNameRef.current.value;
    const age = inputAgeRef.current.value;
    const image = inputImageRef.current.value;
    const team = inputTeamRef.current.value;

    const enteredData = {
      name: namer,
      age: age,
      image: image,
      team: team,
    };

    props.addNewPlayer(enteredData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Players Name</label>
          <input type="text" required ref={inputNameRef}></input>
        </div>
        <div className={classes.control}>
          <label>Players Age</label>
          <input type="number" ref={inputAgeRef}></input>
        </div>
        <div className={classes.control}>
          <label>Players image</label>
          <input type="url" ref={inputImageRef}></input>
        </div>
        <div className={classes.control}>
          <label>Players team</label>
          <input type="text" ref={inputTeamRef}></input>
        </div>
        <div className={classes.actions}>
          <button>Add New Player</button>
        </div>
      </form>
    </Card>
  );
};

export default PlayerForm;
