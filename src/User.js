import React from 'react';

function User({ user }) {

    // props 검증 메서드
    // if (!user) {
    //     return null;
    // }

    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    )
}

export default User;