import React, { Component } from "react";
import "./queries.styles.scss";
import Vector3 from "../../assets/assets/Vector3.png";

export class Queries extends Component {
  render() {
    return (
      <div className="queries_container">
        <div className="query">
          <div className="query-img_container">
            <img src={Vector3} alt="" />
            <h5>Online Job Fair</h5>
          </div>
          <div className="query-text_container">
            <h5>Want to join your <br/> favourite Software Company?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              similique ratione! Reprehenderit quam maxime est facilis. Expedita
              ex, harum sed officiis perspiciatis temporibus reiciendis deleniti
              aliquid aut earum, ab eius! Sed ducimus modi mollitia voluptatum
              odio dolor corrupti non velit sequi dignissimos reiciendis ipsam
              cupiditate illum accusamus assumenda, nesciunt error tenetur ea
              asperiores nisi molestias magni iste? Soluta sed corporis, quaerat
              necessitatibus dolores?
            </p>
          </div>
        </div>

        <div className="query">
          <div className="query-text_container">
            <h5>Looking for a  <br/> super-star for your team?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              similique ratione! Reprehenderit quam maxime est facilis. Expedita
              ex, harum sed officiis perspiciatis temporibus reiciendis deleniti
              aliquid aut earum, ab eius! Sed ducimus modi mollitia voluptatum
              odio dolor corrupti non velit sequi dignissimos reiciendis ipsam
              cupiditate illum accusamus assumenda, nesciunt error tenetur ea
              asperiores nisi molestias magni iste? Soluta sed corporis, quaerat
              necessitatibus dolores?
            </p>
          </div>
          <div className="query-img_container">
            <img src={Vector3} alt="" />
            <h5>Recruitment Portal</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Queries;
