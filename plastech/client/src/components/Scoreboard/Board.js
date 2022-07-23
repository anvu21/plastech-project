import React, {useState} from "react";
import Teams from "./Teams.js"
import { Leaderboard } from "../Database/Database.js";
import './Board.css'

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    // console.log(e.target)
    setPeriod(e.target.dataset.id)
  }


  return (
    <div className="board">
      <h1 className="leaderboard">Scoreboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id="7">7 days</button>
        <button onClick={handleClick} data-id="30">30 days</button>
        <button onClick={handleClick} data-id="0">All Time</button>
        <button>Test</button>
      </div>

      <Teams Leaderboard={between(Leaderboard, period)}></Teams>
    </div>
  )
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);
    if (parseInt(between) === 0) return val;
    return previous <= userDate && today >= userDate;
  })

  //sort in ascending order
  return filter.sort((a,b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    }
    else {
      return b.score - a.score;
    }
  })
}