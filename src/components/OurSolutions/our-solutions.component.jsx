import React, { Component } from "react";
import './our-solutions.styles.scss'
import Vector2 from '../../assets/assets/Vector2.png'

export class OurSolutions extends Component {
  render() {
    return (
      <div className="our-solutions">
        <div className="sections_header">
          <h1>Our Solutions</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>
        <div className="online-job-and-recruitment">
            <div className="online-job_container solutions">
                <img src={Vector2} alt=""/>
                <h1>Online <br/> Job Fair</h1>
            </div>
            <div className="recruitment_container solutions">
                <img src={Vector2} alt=""/>
                <h1>Recruitment <br/> Portal</h1>
            </div>

        </div>
      </div>
    );
  }
}

export default OurSolutions;
