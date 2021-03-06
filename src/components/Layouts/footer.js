import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* Footer section */}
                <section className="footer-section">
                    <div className="container">
                        <div className="footer-logo text-center">
                            <h2 style={{ fontWeight: 'bold', fontSize: '37px', color: 'white' }}>Let's join hands together, to end extreme poverty!</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget">
                                    <h2>About us</h2>
                                    <div className="con-info">
                                        <p>Da Nang Volunteering </p>
                                    </div>
                                    <div className="con-info">
                                        <span>Phone.</span>
                                        <p>+53 345 7953 32453</p>
                                    </div>
                                    <div className="con-info">
                                        <span>Fax.</span>
                                        <p>304.535.2667</p>
                                    </div>
                                    <div className="con-info">
                                        <span>Email.</span>
                                        <p>tuan.nguyen@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <h2>Contact</h2>
                                    <ul>
                                        <li><a href="/fff" >About Us</a></li>
                                        <li><a href="/fff">Track Orders</a></li>
                                        <li><a href="/fff" >Returns</a></li>
                                        <li><a href="/fff" >Jobs</a></li>
                                        <li><a href="/fff">Shipping</a></li>
                                        <li><a href="/fff" >Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <h2>News</h2>
                                    <div className="fw-latest-post-widget">
                                        <div className="lp-item">
                                            <div className="lp-content">
                                                <p>
                                                    How to donate clothers
                                        <span>Oct 21, 2018</span>
                                                    <a href="/fff" className="readmore">Read More</a><br />
                                                    Trends this year
                                        <span>Oct 21, 2018</span>
                                                    <a href="/fff" className="readmore">Read More</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget">
                                    <h2>Address</h2>
                                    <div className="con-info">
                                        <span>C.</span>
                                        <p>Your Company Ltd </p>
                                    </div>
                                    <div className="con-info">
                                        <span>B.</span>
                                        <p>1481 Creekside Lane Avila Beach, CA 93424, P.O. BOX 68 </p>
                                    </div>
                                    <div className="con-info">
                                        <span>T.</span>
                                        <p>+53 345 7953 32453</p>
                                    </div>
                                    <div className="con-info">
                                        <span>E.</span>
                                        <p>office@youremail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-links-warp">
                        <div className="container">
                            <div className="social-links">
                                <a href="/kk" className="instagram"><i className="fa fa-instagram" /><span>instagram</span></a>
                                <a href="/kk" className="google-plus"><i className="fa fa-google-plus" /><span>g+plus</span></a>
                                <a href="/kk" className="pinterest"><i className="fa fa-pinterest" /><span>pinterest</span></a>
                                <a href="/kk" className="facebook"><i className="fa fa-facebook" /><span>facebook</span></a>
                                <a href="/kk" className="twitter"><i className="fa fa-twitter" /><span>twitter</span></a>
                                <a href="/kk" className="youtube"><i className="fa fa-youtube" /><span>youtube</span></a>
                                <a href="/kk" className="tumblr"><i className="fa fa-tumblr-square" /><span>tumblr</span></a>
                            </div>
                            <p className="text-white text-center mt-5">Created by Nguyen Huu Tuan | Student at Passerelles Numeriques Viet Nam
                    <i className="fa fa-heart-o" aria-hidden="true" />   </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}