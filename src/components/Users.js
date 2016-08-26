import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

const Users = ({users}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Users</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            {users.map((user) =>
                                <tr key={user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Users;