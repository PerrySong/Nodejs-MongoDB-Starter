import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/index';
import _ from 'lodash';

class Userpage extends Component {

    componentDidMount() {
        // console.log("Checkpoint1")
        console.log(this.props.match.params); //{userid: "user-405wf8ujokteaed"}
        const { userId } = this.props.match.params;
        this.props.getUser(userId);
    }

    render() {
        const user = this.props.post;
        if (!user) {
            return (
                <div> 
                    Loading...
                </div>
            )
        }
        return (
            <div>
                <Link to="/"> Back to Homepage </Link>
                <h3>Repos for {user.username}</h3>
                <p>
                    {_.map(user.repos, repo => {
                        return (
                            <li key={repo.name}>{repo.name}</li>
                        );
            
                    })}
                </p>
            </div>
            
        );
    }
}


function mapStateToProps({ posts }, ownProps ) {
    //ownProps is the component that will be sent to this.props
    //by returning this, we only return a single post that we went to fetch
    // console.log({posts})
    // console.log(ownProps.match.params.userid);
    console.log(posts[ownProps.match.params.userId]);
    return { post : posts[ownProps.match.params.userId]};
}

export default connect(mapStateToProps, {getUser})(Userpage);