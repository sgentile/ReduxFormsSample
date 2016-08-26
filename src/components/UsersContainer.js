import React, {Component} from 'react';
import { connect } from 'react-redux';

import {addUser, getAllUsers} from '../actions';

import Users from './Users';
import AddUserForm from './AddUserForm';

class UsersContainer extends Component{

    render(){
        return (
            <div>
                <Users users={this.props.users}/>
                <AddUserForm addUser={this.props.addUser} />
            </div>
        );
    }
}

// Determine which state to map into container's props
function select(state){
    return {
        users: state.usersState.users
    };
}

export default connect(
    select, {
        getAllUsers,
        addUser
    } // comma delimited list of actionCreators
)(UsersContainer);
