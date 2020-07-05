import React, { Component } from "react";
import "./online-job-fair.styles.scss";
import girl1 from '../../assets/assets/avatars/girl1.png'
import boy2 from '../../assets/assets/avatars/boy2.png'

export class OnlineJobFair extends Component {
  render() {
    return (
      <div className="online-job-fair sections">
        <div className="sections_header">
          <h1>Online Job Fair</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>
        <div className="img-more-info_container">
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
            </div>
            <div className="img-more-info">
                <div className="img_container">
                    <img src={girl1} alt=""/>
                    <img src={boy2} alt=""/>
                </div>
                <div className="more-info_container">
                    <h5 className="more-info_header">One Clout</h5>
                    <h5 className="more-info_text">More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5>
                </div>
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

export default OnlineJobFair;
