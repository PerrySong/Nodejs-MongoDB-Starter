import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../actions/index';
import Repos from '../Repos';
import About from '../../components/About';
import Profile_Menu from '../../components/ProfileMenu';
import _ from 'lodash';

class Userpage extends Component {

    componentDidMount() {
        // console.log("Checkpoint1")
        // console.log(this.props.match.params); //{userid: "user-405wf8ujokteaed"}
        const { userId } = this.props.match.params;
        this.props.getUser(userId);

    }

    toHomepage = () => {
        <Link to="/"> Back to Homepage </Link>
    }

    render() {
        const user = this.props.post;
        console.log(user);

        if (!user) {
            return (
                <div> 
                    Loading...
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.toHomepage} type="button" className="btn btn-primary"> Back to Homepage </button>
                <About data={user}/>
                <Profile_Menu/>
                <Repos data={user}/>
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