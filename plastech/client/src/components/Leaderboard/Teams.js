import React from "react";
import './Board.css'
import { motion } from 'framer-motion';

//Icons
import { ReactComponent as TrophyIcon } from "../../icons/trophy.svg";

const profileAnimate = {
  initial: {opacity: 0, x: -100},
  in: {opacity: 1, x: 0},
  out: {opacity: 0, x: -100}
}

const winnerAnimate = {
  initial: {opacity: 0, y: -100},
  in: {opacity: 1, y: 0},
  out: {opacity: 0, y: -100},
}

const colorsHex = {"red": "#fab3a7", "green": "#b6e6bd", "blue": "#b6d7f0", "yellow": "#f8f1ae"};
// const colorsRGBA = {"red": {'r': 250, 'b': 179,'g': 167},
//                   "green": {'r': 182,'b': 230,'g': 189},
//                   "blue": {'r': 182,'b': 215,'g': 240},
//                   "yellow": {'r': 248,'b': 241,'g': 174}}

function Teams({ Data }) {
  return (
    <div id="leaderboard">
      {OrganizeTeams(Data)}
    </div>
  );
};

function OrganizeTeams(teamsArray) {
  isSorted(teamsArray);

  return (
    <div>
      {
        // data.map iterates through every element in data and performs the inner arrow function on it
        // using the .map() syntax, you can separate every element into the actual element (value) and it's index
        // the arrow function uses value, index pair to return jsx that shows/lists every profile's content
        teamsArray.map((eachTeam, index) => (
          index === 0 ?
            <motion.div className="profile"
              key={ eachTeam.id }
              style={{ background: `linear-gradient(${colorsHex[String(eachTeam.team).toLowerCase()]}, 75%, #f0fff0)` }} /**#f0fff0 */
              variants={ winnerAnimate }
              initial="initial"
              animate="in"
              end="out"
              transition={{ delay: 1.5, default: { duration: 1 } }}
              default="default"
            >
              <div className="item" style={{ paddingRight: 0 }}>
                <h3 className="text-dark">1</h3>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <TrophyIcon />
              </div>

              <div className="item">
                <h3 className="text-dark">{ eachTeam.team }</h3>
              </div>

              <div className="item points">
                <h3 className="text-dark">{ eachTeam.point }</h3>
              </div>
            </motion.div>

          :

            <motion.div className="profile"
              key={ eachTeam.id }
              style={{ background: `linear-gradient(${colorsHex[String(eachTeam.team).toLowerCase()]}, 75%, #f0fff0)` }}
              variants={ profileAnimate }
              initial="initial"
              animate="in"
              end="out"
              transition={{ delay: index * 0.23 }}
            >
              <div className="item">
                <h3 className="text-dark">{ index + 1 }</h3>
              </div>

              <div className="item">
                <h3 className="text-dark">{ eachTeam.team }</h3>
              </div>

              <div className="item points">
                <h3 className="text-dark">{ eachTeam.point }</h3>
              </div>
            </motion.div>
        ))
      }
    </div>
  );
};

//Checks if array is sorted; if not, sorts array
function isSorted(teamsArray) {
  for (let index = 0; index < teamsArray.length - 1; index++) {
    const highPoints = teamsArray[index].point;
    const lowPoints = teamsArray[index + 1].point;
    if (lowPoints > highPoints) {
      sortTeams(teamsArray)
      return;
    }
  }
};

//Sort function uses bubble sort (for convenience) <-- change later if necessary
function sortTeams(teamsArray) {
  for(let i = 0; i < teamsArray.length; i++){

    // Last i elements are already in place 
    for(let j = 0; j < ( teamsArray.length - i - 1 ); j++){

      // Checking if the item at present iteration
      // is greater than the next iteration
      if(teamsArray[j].point < teamsArray[j+1].point){
         
        // If the condition is true then swap them
        let temp = teamsArray[j]
        teamsArray[j] = teamsArray[j + 1]
        teamsArray[j+1] = temp
      }
    }
  }
};

//Exports
export default Teams;