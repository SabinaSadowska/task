import React from "react";
import users from "./users.css";

class Users extends React.Component {
  state = {
    data: [],
    dictionary: {},
  };

  fetchData(url, stateProp) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ [stateProp]: data }));
  }

  componentDidMount() {
    this.fetchData(
      "https://my-json-server.typicode.com/xtrack/recruitment/users",
      "data"
    );

    this.fetchData(
      "https://my-json-server.typicode.com/xtrack/recruitment/dictionary",
      "dictionary"
    );

    /*  fetch("https://my-json-server.typicode.com/xtrack/recruitment/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));

    fetch("https://my-json-server.typicode.com/xtrack/recruitment/dictionary")
      .then((response) => response.json())
      .then((data) => this.setState({ dictionary: data })); */
  }

  render() {
    const { data, dictionary } = this.state;

    return (
      <div>
        <select name="choice">
          <option value="attitude">Attitude</option>
          <option value="relation">Relation </option>
          <option value="lastName">LastName</option>
        </select>
        {dictionary.attitude &&
          dictionary.relation &&
          data.map(({ firstName, lastName, attitude, relation, id }) => (
            <div key={id} className="user">
              <p id="text">{firstName}</p>
              <p id="text">{lastName}</p>
              <p id="text">{dictionary.attitude[[attitude]]}</p>
              <p id="text">{dictionary.relation[[relation]]}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default Users;
