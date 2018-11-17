import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './static/css/welcome.css';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getAllUsers} from '../actions/index';

class Homepage extends Component {
  constructor() {
    super();
   
    }

  componentDidMount() {
    this.props.getAllUsers();    
  }

  renderUsers() {
    return _.map(this.props.posts, post => {
      return (
          <li key={post.username} className="list-group-item"> 
                {post.username}
          </li>
      );
  })
}
  render() {
    return (
      <div>
        <h3>Users on Showcase</h3>
          <ul className="list-group">
              {this.renderUsers()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts};
}
export default connect(mapStateToProps, {getAllUsers})(Homepage);