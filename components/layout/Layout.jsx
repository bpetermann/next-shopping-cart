import React from 'react';
import MainHeader from './MainHeader';

const Layout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
