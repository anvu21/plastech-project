import React, { Fragment, useEffect, useState } from "react";

const ListTeam = () => {
  let team = FetchTeamData();

  return (
    <Fragment>
      {" "}
      <table class="table mt-3 text-center">
        <thead>
          <tr>
            <th>Team</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody>

          {team.map((team) => (
            <tr key={team.id}>
              <td>{team.team}</td>
              {/* <td>{team.unit}</td> */}
              <td>{team.point}</td>
              <td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};


const FetchTeamData = () => {
  const [team, setteam] = useState([]);

  const getteam = async () => {
    try {
      const response = await fetch("/team");
      const jsonData = await response.json();

      setteam(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getteam();
  }, []);

  console.log(team);

  return (team);
}

//<Editteam todo={todo} />
export default ListTeam;
export {FetchTeamData};