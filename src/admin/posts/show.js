import React, { Component } from 'react';
import Aside from './../layout/aside'
import Header from './../layout/header'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import moment from 'moment';

class showPost extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onReadPost(id);
            console.log('ok');
        }
    }

    render() {

        var { post } = this.props;

        return (
            <div>
                <section id="container">
                    <Header />
                    <Aside />
                </section>
                <section id="main-content">
                    <section className="wrapper">
                        <div className="container ">
                            <center> <div className="page-header">
                                <h1 style={{ fontFamily: ' time new roman', color: 'blue' }}> {post.event_name} </h1>
                            </div></center>
                            <div className="row">
                                <div className="  col-sm-3  "></div>
                                <div className="col-md-7">

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>User name:</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.user_name} </h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Phone number</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.phone_number}</h3>
                                            <h3> </h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Image</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <img src={post.event_image} alt="d" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Start day</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.startDay}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Start time</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.startTime}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>End day</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.endDay}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>End time</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3> {post.endTime}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Nu_participant</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.nu_participant}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Venue</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.venue}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Description</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.description}</h3>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Created at</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {moment(post.createdAt).calendar()}</h3>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-4">
                                            <h3>Posted by</h3>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                            <h3 className="form-control-static"> {post.postedBy}</h3>

                                        </div>
                                    </div>

                                    <br /><br />
                                    <div className="row">
                                        <div className=" col-sm-1 "></div>
                                        <div className=" col-sm-2 ">
                                            <Link to="/posts">
                                                <button className="btn btn-primary btn-lg btn-block" type="button"> <span
                                                    className="glyphicon glyphicon-backward"> Back</span> </button>
                                            </Link>
                                        </div>
                                        <div className="  col-sm-2 ">
                                            <Link to={`/post/${post.id}/edit`}>
                                                <button className="btn btn-success btn-lg btn-block" type="button" value="Reset"> <span
                                                    className="glyphicon glyphicon-edit">Edit</span></button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="  col-sm-1  " />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReadPost: (id) => {
            dispatch(actions.actReadPostRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showPost);