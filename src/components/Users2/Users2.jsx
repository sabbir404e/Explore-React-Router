import React, { use } from 'react';

const Users2 = ({userPromise}) => {

    const users = use(userPromise);
    console.log(users);
    return (
        <div>
            <h2>This is users 2 page</h2>
        </div>
    );
};

export default Users2;