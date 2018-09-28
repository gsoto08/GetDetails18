import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    const { id, name } = this.state.data;
    return (
      <Link className="white-text" to={`/getdata/${id}`}>
        <div className="card-panel blue-grey">{name}</div>
      </Link>
    );
  }
}
