// react
import React from 'react';

// firebase configuration
import { auth } from '../../common/firebaseConfig';

const withAuth = (Component) => (props) => {
  const user = auth.currentUser;
  console.log('User:', user);

  if (!user) props.history.push('/login');
  return <Component {...props} />;
};

export default withAuth;
