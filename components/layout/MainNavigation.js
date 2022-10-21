import React from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Footbal players</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All footbals players</Link>
          </li>
          <li>
            <Link href="/new-footbal-player">New footbal player</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
