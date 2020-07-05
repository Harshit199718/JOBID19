import React, { Component } from "react";
import './registered-users.styles.scss'
import Axios from "axios";

export class RegisteredUsers extends Component {
  state={
    total_recruiters:0,
    total_candidates:0,
  }

  componentDidMount(){
    Axios.get("https://x7x9vgmde3.execute-api.ap-southeast-1.amazonaws.com/api/analytics")
    .then(res => {
      const {total_recruiters, total_candidates} = res.data.data
      this.setState({
        total_recruiters:total_recruiters.total,
        total_candidates: total_candidates.total 
      })
    })
  }
  render() {
    const {total_candidates,total_recruiters} = this.state
    return (
      <div className="registered-users">
        <div className="sections_header">
          <h1>Let's talk numbers</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>
        <div className="total-users">
            <div className="registered-candidates users">
                <h1>{total_candidates.toString()} </h1>
                <h5>Registered <br/> Candidates</h5>
            </div>
            <div className="registered-candidates users">
                <h1>{total_recruiters.toString()} </h1>
                <h5>Registered <br/> Recruiteres</h5>
            </div>
        </div>
      </div>
    );
  }
}

export default RegisteredUsers;
