import React, { Component } from "react";
import "./latest-news.styles.scss";

export class LatestNews extends Component {
  render() {
    return (
      <div className="latest-news">
        <div className="sections_header">
          <h1>Latest News</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>

        <div className="latest-news-cards_container">
          <div className="news-card">
            <div className="greyback"></div>
            <h5 className="news-date">February 19, 2020</h5>
            <h5 className="news-query">Where does it come from?</h5>
            <p className="news">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="read-more_container">
                <div className="arrow">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
          </div>

          <div className="news-card">
            <div className="greyback"></div>
            <h5 className="news-date">February 19, 2020</h5>
            <h5 className="news-query">Where does it come from?</h5>
            <p className="news">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="read-more_container">
                <div className="arrow">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
          </div>

          <div className="news-card">
            <div className="greyback"></div>
            <h5 className="news-date">February 19, 2020</h5>
            <h5 className="news-query">Where does it come from?</h5>
            <p className="news">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="read-more_container">
                <div className="arrow">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestNews;
