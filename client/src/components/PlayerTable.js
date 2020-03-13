import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";

class PlayerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.__isMounted = true;
    axios.get("http://localhost:5000/api/players").then(({ data }) => {
      if (this.__isMounted) {
        this.setState({ players: data });
      }
    });
  }

  componentWillUnmount() {
    // to prevent updating unmounted component
    this.__isMounted = false;
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Search</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {this.state.players.map(p => (
            <tr key={p.id}>
              <th scope="row">{p.searches}</th>
              <td>{p.name}</td>
              <td>{p.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default PlayerTable;
