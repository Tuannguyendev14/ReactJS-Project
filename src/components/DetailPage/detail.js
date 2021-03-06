import React, { Component, Fragment } from 'react';
import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import Join from './../Joinpage/join';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Detail extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onReadPost(id);
        }
    }

    render() {
        var { post, match, profile } = this.props;

        var elmTaskForm = match ? <Join post={post} match={match} /> : '';

        var name = profile.firstName + profile.lastName;

        const links = post.postedBy === name ?
            <Fragment>
                <Link to={`/update/${post.id}/edit`} className="site-btn" style={{ marginLeft: '20px' }} >Update</Link>
            </Fragment>
            :
            <Fragment>
                <Link type="buttom" className="site-btn" style={{ marginLeft: '20px' }} data-toggle="modal" data-target="#myModal">JOIN NOW</Link>
            </Fragment>
            ;

        return (
            <div>
                <Header />
                {/* Page info */}
                <div className="page-top-info">
                    <div className="container">
                        <center>
                            <h1 style={{color:'#fd05e8'}}> {post.event_name}  </h1>
                        </center>
                    </div>
                </div>

                <section className="product-section">
                    <div className="row">
                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-1"></div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" style={{ width: '750px', height: '550px' }} src={post.event_image || 'https://via.placeholder.com/400x350'} alt="ok" />
                            </div>
                        </div>
                        <div className="col-xs-0 col-sm-0 col-md-0 col-lg-1" />
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5  product-details  ">
                            <h3 className="p-price">{post.startDay} -> {post.endDay}</h3>
                            <h3 className="p-stock">Time : <span>{post.startTime} -> {post.endTime}</span></h3>
                            <h3 className="p-stock">Take place: <span>{post.venue} </span></h3>
                            <h3 className="p-stock">Posted at: <span>{moment(post.createdAt).calendar()} </span></h3>
                            <div id="accordion" className="accordion-area">
                                <div className="panel">
                                    <div className="panel-header" id="headingOne">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse1"
                                            aria-expanded="false" aria-controls="collapse1">Organizer / Group</button>
                                    </div>
                                    <div id="collapse1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="panel-body">
                                            <h4>Name :{post.user_name}</h4>
                                            <h4>Phone number : {post.phone_number}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingTwo">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2">Members </button>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="panel-body">
                                            <h4>Number of participants: {post.nu_participant}</h4>
                                            <h4>Nguyen Huu Tuan (Leader)</h4>
                                            <h4>Nguyen Thanh Vi</h4>
                                            <h4>Nguyen Huu Tung</h4>
                                            <h4>Hoang Thi Thuong</h4>
                                            <h4>Ngo Thi Tra Giang</h4>
                                            <h4>Tran Van Tai</h4>
                                            <h4>Nguyen Huu Dat  </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingThree">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3">Description</button>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion">
                                        <div className="panel-body">
                                            <h4> Event's description </h4>
                                            <h4>{post.description}</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="news-content">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-linkedin"></i>
                                <i className="fa fa-youtube"></i>
                                <i className="fa fa-whatsapp"></i>
                                <Link to={`/`} className="site-btn" style={{ marginLeft: '20px' }} >Back</Link>

                                {links}

                                {elmTaskForm}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReadPost: (id) => {
            dispatch(actions.actReadPostRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);