import React from 'react';
import { Render } from 'react-dom';
import UserList from './UserList';

var users = [
    { name: 'James' },
    { name: 'Danielle' },
    { name: 'Lucy' },
    { name: 'Ernst' }
];

Render(<UserList users={users} />, document.getElementById('main'));