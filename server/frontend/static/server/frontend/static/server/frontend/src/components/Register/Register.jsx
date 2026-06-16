import React, { useState } from 'react';

const Register = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
