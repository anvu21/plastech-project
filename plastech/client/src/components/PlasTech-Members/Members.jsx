import React from "react";
import { motion } from 'framer-motion';

//Components
import './Members.css';
import { memberData } from "./MemberData";

//Images/fonts/icons
import EmptyProfilePic from '../../images/Profile_Placeholder.png';

const profileAnimate = {
  initial: {opacity: 0, x: -100},
  in: {opacity: 1, x: 0},
  out: {opacity: 0, x: -100}
}

function DisplayMembers() {

  return (
    <div className="member-profiles">
      {
        // data.map iterates through every element in data and performs the inner arrow function on it
        // using the .map() syntax, you can separate every element into the actual element (value) and it's index
        // the arrow function uses value, index pair to return jsx that shows/lists every profile's content
        memberData.map((eachMember, index) => (
            <motion.div className="member-profile"
              key={ eachMember.name }
              variants={ profileAnimate }
              initial="initial"
              animate="in"
              end="out"
              transition={{ delay: index * 0.1 }}
            >
              {eachMember.img !== "" ?
                <img src={eachMember.img} alt={EmptyProfilePic} />
                :
                <img src={EmptyProfilePic} alt="No Profile Pic"></img>
              }

              <div className="profile-item">
                <h5>{ eachMember.name }</h5>
              </div>

              <div className="profile-item">
                <h6>{ `${eachMember.major} '${String(eachMember.classYear).slice(2, 4)}` }</h6>
              </div>
            </motion.div>
        ))
      }
    </div>
  );
}

//Exports
export default DisplayMembers;