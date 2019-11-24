import React, { Fragment } from 'react';
import Footer from './components/Footer/Footer';

export default ({ children }) => {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
};
