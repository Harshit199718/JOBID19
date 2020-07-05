import React, { Component } from "react";
import "./universities.styles.scss";
import Axios from "axios";

export class Universities extends Component {
    state={
        top_universities:[]
    }

    componentDidMount(){
        Axios.get("https://x7x9vgmde3.execute-api.ap-southeast-1.amazonaws.com/api/analytics")
        .then(res => {
            const {top_universities} = res.data.data
            this.setState({
                top_universities
            })
        })
      }
  render() {
      const {top_universities} = this.state
    return (
      <div className="universities">
        <div className="sections_header">
          <h1>Top 5 Universities</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>

        <div className="top-universities_container">
            {
                top_universities.map((university, i) =>{

                    return(<div className="first-university_container university">
                        <div className="first number">
                            <p>{`${i<9?'0':''} ${i+1}`}</p>
                        </div>
                        <p>{university.university}</p>
                        <div className='total'>
                            <p>{university.total}</p>
                        </div>
                    </div>)
                })
            }

            {/* <div className="first-university_container university">
                <div className="first number">
                    <p>01</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='total'>
                    <p>305</p>
                </div>
            </div>

            <div className="first-university_container university">
                <div className="first number">
                    <p>01</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='total'>
                    <p>305</p>
                </div>
            </div>

            <div className="first-university_container university">
                <div className="first number">
                    <p>01</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='total'>
                    <p>305</p>
                </div>
            </div>

            <div className="first-university_container university">
                <div className="first number">
                    <p>01</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='total'>
                    <p>305</p>
                </div>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Universities;
