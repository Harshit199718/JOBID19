import React, { Component } from 'react'
import './footer.styles.scss'

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
                <div className="wave wave-4"></div>
                <div className="wave wave-5"></div>
                <div className="footer-section">
                    <h5><a href="#">Imported Links</a></h5>
                    <p>Online Job Fairs</p>
                    <p>Our Solutions</p>
                    <p>Top 5 Universities</p>
                    <p>Our Top 10 Ambassadors</p>
                </div>
                <div className="footer-section">
                    <h5><a href="#">Contact Us</a></h5>
                    <p>Phone: 123 - 456 - 7870</p>
                    <p>Emai: info@JOBID19.com</p>
                    <br/>
                    <p>Lorem Ipsum is simply <br/>dummy text of the printing</p>
                </div>
                <div className="footer-section">
                    <h5><a href="#">Social Links</a></h5>
                    <div className="icons">
                        <div className="icon">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="icon">
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="icon">
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
