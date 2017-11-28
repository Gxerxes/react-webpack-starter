import React from 'react';
import Footer from './footer';
import UserName from './userName';
import SubmitButton from './submitButton';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => {
    return (
     <div>
        <h1>Hello, {formatName(user)}!</h1>
        <UserName />
        <SubmitButton />
        <Footer />
      </div>
   )
};

export default Home;