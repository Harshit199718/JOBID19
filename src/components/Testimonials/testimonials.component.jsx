import React, { Component } from "react";
import "./testimonials.styles.scss";
import Axios from "axios";

export class Testimonials extends Component {

  state={
    top_referrers:[],
    move: 0
  }

  componentDidMount(){
    Axios.get("https://x7x9vgmde3.execute-api.ap-southeast-1.amazonaws.com/api/analytics")
    .then(res => {
      this.setState({
        top_referrers: res.data.data.top_referrers
      })
    })
  }
  render() {
    const {top_referrers,move} = this.state
    console.log(top_referrers)
    return (
      <div className="testimonials">
        <div className="sections_header">
          <h1>Testimonials</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>
        {
          top_referrers.filter((val, key)=> key == move).map((referrer,i,arr) =>{
            return(<div className="testimonial-card">
              <div className="testimonial-grey-back">
                <i className="fa fa-angle-left" onClick={() => (move> 0)&&this.setState({move: this.state.move - 1})}></i>
                <div className="grey-circle">
                  <img src={referrer.profile_picture} alt=""/>
                </div>
                <i className="fa fa-angle-right" onClick={() => ((move)<(top_referrers.length -1))&&this.setState({move: this.state.move + 1})}></i>
              </div>
              <i className="fa fa-quote-left"></i>
              <p className="testimonial-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui odio,
                omnis ullam beatae inventore quis!
              </p>
              <h2>{referrer.fullname} </h2>
            </div>)
          })
        }

      </div>
    );
  }
}

export default Testimonials;
