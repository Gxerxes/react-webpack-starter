import React from 'react';
import Footer from './footer';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => {
    return (
     <div>
        <h1>Hello, {formatName(user)}!</h1>
        <Footer />
      </div>
   )
};

export default Home;