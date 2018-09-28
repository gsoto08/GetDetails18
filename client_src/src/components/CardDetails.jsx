import React from "react";
import axios from "axios";

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentDidMount() {
    let cardID = this.props.match.params.id;
    axios
      .get(
        `https://intense-shore-92758.herokuapp.com/api/persondetails/${cardID}`
      )
      .then(res => {
        const details = res.data;
        this.setState({ details });
        console.log(this.state.details);
      })
      .catch(err => console.log(err));
  }

  onDelete() {
    let detailsID = this.state.details.id;
    axios
      .delete(
        `https://intense-shore-92758.herokuapp.com/api/persondetails/${detailsID}`
      )
      .then(res => {
        window.location = "https://intense-shore-92758.herokuapp.com/getdata";
      })
      .catch(err => console.log(err));
  }

  render() {
    const styles = {
      borderColor: "#26A69A"
    };

    const { name, email, phone, message } = this.state.details;

    return (
      <div className="container">
        <h3>Personal Details</h3>
        <hr />
        <ul
          style={styles}
          className="collection z-depth-4 left-align white-text with-header"
        >
          <li style={styles} className="blue-grey collection-header">
            <h4>{name}</h4>
          </li>
          <li style={styles} className="blue-grey collection-item">
            Email: {email}
          </li>
          <li style={styles} className="blue-grey collection-item">
            Phone: {phone}
          </li>
          <li style={styles} className="blue-grey collection-item">
            Message: {message}
          </li>
        </ul>
        <br />
        <button onClick={this.onDelete.bind(this)} className="btn red darken-2">
          Delete
        </button>
      </div>
    );
  }
}
