import React from 'react';
import Footer from './footer';
import UserName from './userName';
import SubmitButton from './submitButton';

const formatName = user => `${user.firstName} ${user.lastName}`;

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
}

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => {
    return (
     <div style={styles.base}>
     DMViewer
        {/* <h1>Hello, {formatName(user)}!</h1>
        <UserName />
        <SubmitButton />
        <Footer /> */}
      </div>
   )
};

export default Home;