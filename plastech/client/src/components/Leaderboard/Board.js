import React from "react";

//Styling
import './Board.css';

//Components
import Teams from "./Teams.js";
import { FetchTeamData } from "../ListTeams.js";
import AnimatedPage from "../AnimatedPage";

//--------FOR TESTING ONLY------------//
// const teamsArray = [{ id: 1, team: "red", point: 85 }, { id: 4, team: "green", point: 27 }, { id: 2, team: "blue", point: 23 }, { id: 3, team: "yellow", point: 4 }]


export default function Board() {
  const teamsArray = FetchTeamData();

  return (
    <AnimatedPage>
      <main>
        <div className="board">
          <div className="title">Leaderboard</div>
          <Teams Data={teamsArray}></Teams>
        </div>
      </main>
    </AnimatedPage>
  );
};