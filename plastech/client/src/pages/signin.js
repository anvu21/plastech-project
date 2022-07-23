import React, { Fragment,useState } from "react";
import AnimatedPage from "../components/AnimatedPage.js";

// import GoogleLogin from "react-google-login";
//import ListFood from "./components/ListFood";
import ListTeam from "../components/ListTeams.js";

//client\src\components\ListFood.js
const Signin = () => {
  const [inputs, setInputs] = useState({
    team: "red",
    point: ""
  });
  const { team, point } = inputs;
  //const onChange=(e) =>setInputs({...inputs,team: e.target.value,});
 // const onChangePoint=(e) =>setInputs({...inputs,team: e.target.value,});
 const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { team, point };
      console.log(body)
      const response = await fetch("/team/:id", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //const parseRespond = await response.json();
      //console.log(parseRespond)
       window.location = "/Signin";
    } catch (err) {
      console.error(err.message);
    }
  };




  const onSuccess = response => {
    console.log('SUCCESS', response);
  };
  const onFailure = response => {
    console.log('FAILED', response);
  };

  return (
    <AnimatedPage>
      <Fragment>
        <h1>Google Login</h1>
          <div>
          </div>
          <h2 className="title">Add Point to team</h2>

          <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            
          <select value={team} name="team" onChange={(e) => onChange(e)} className="foodinput">
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
          </select>
          <input
            type="number"
            name="point"
            value={point}
            placeholder="point"
            onChange={(e) => onChange(e)}
            className="pointInput"
          />
          <button className="addbutton">Add</button>
        </form>
        <div className="container">
        <ListTeam />
        </div>
      </Fragment>
    </AnimatedPage>
  );
};
  
export default Signin