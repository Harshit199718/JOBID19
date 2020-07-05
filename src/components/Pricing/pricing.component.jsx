import React, { Component } from "react";
import './pricing.styles.scss'
import Axios from "axios";

export class Pricing extends Component {

  state={
    prices: []
  }

  componentDidMount(){
    Axios.get("https://x7x9vgmde3.execute-api.ap-southeast-1.amazonaws.com/api/pricing")
    .then(res =>{
      this.setState({
        prices: res.data.data
      })
    })
  }
  render() {
    const {prices} = this.state
    console.log(prices)
    return (
      <div className="pricing">
        <div className="sections_header">
          <h1>Pricing</h1>
          <p>
            One of our jobs has some kind of flexibility option - such as
            telecommuting a part-time shedule or a flexible or flextime shedule
          </p>
        </div>
        <div className="pricing-cards_container">
          {
            prices.map(price =>{
              return(<div className="card">
                  <h5>{price.title} </h5>
                  <h1 style={price.price.toLowerCase() !== "Free"?{fontSize:'3vw'}:{}}>{price.price}</h1>
                  {
                    price.description.map(feature=>{
                    return (<p> {feature}</p>)
                    })
                  } 

                  <button>JOIN</button>
              </div>)
            })
          }

            {/* <div className="card">
                <h5>ECONOMY PLAN</h5>
                <h1><sup>$</sup>500<sub>/ mon</sub></h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>

                <button>JOIN</button>
            </div>

            <div className="card">
                <h5>EXECUTIVE PLAN</h5>
                <h1><sup>$</sup>420<sub>/ mon</sub></h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>

                <button>JOIN</button>
            </div> */}
        </div>
      </div>
    );
  }
}

export default Pricing;
