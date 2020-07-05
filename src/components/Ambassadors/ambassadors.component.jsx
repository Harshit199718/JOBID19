import React, { Component } from "react";
import './ambassadors.styles.scss'

export class Ambassadors extends Component {
  render() {
    return (
      <div className="ambassadors">
        <div className="sections_header">
          <h1>Top 10 Ambassadors</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>

        <div className="ranks_container">
            <div className="ranks">
                <div className="circle"></div>
                <h2 className="rank">Rank 2</h2>
                <h5>Samaria Liaqat</h5>
                <h5>Helped 41 People</h5>
            </div>

            <div className="ranks">
                <div className="circle"></div>
                <h2 className="rank">Rank 2</h2>
                <h5>Samaria Liaqat</h5>
                <h5>Helped 41 People</h5>
            </div>

            <div className="ranks">
                <div className="circle"></div>
                <h2 className="rank">Rank 2</h2>
                <h5>Samaria Liaqat</h5>
                <h5>Helped 41 People</h5>
            </div>
        </div>

        <div className="arrow_container">
            <div className="left_arrow arrow">
                <i className="fa fa-angle-left"></i>
            </div>
            <div className="right_arrow arrow">
                <i className="fa fa-angle-right"></i>
            </div>
        </div>
      </div>
    );
  }
}

export default Ambassadors;
