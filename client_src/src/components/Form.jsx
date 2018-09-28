import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  addInfo(newInfo) {
    axios
      .request({
        method: "post",
        url: "https://intense-shore-92758.herokuapp.com/api/persondetails",
        data: newInfo
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
    console.log(newInfo);
  }

  onSubmit(event) {
    const newInfo = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      message: this.refs.message.value
    };
    this.addInfo(newInfo);
    event.preventDefault();
  }

  render() {
    const styles = {
      margin: "auto"
    };
    return (
      <div className="container" style={styles}>
        <h3>Leave Details</h3>
        <form
          className="card-panel blue-grey"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="phone" ref="phone" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input-field">
            <input type="text" name="message" ref="message" />
            <label htmlFor="message">Message</label>
          </div>
          <input type="submit" value="submit" className="btn teal lighten-1" />
        </form>
      </div>
    );
  }
}
