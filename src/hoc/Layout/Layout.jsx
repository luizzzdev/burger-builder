import React, { useState } from 'react';
import { Aux } from '../Aux/Aux';
import classes from './Layout.module.css';
import { Toolbar } from '../../components/Navigation/Toolbar/Toolbar';
import { SideDrawer } from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  const [isSideDrawerOpen, setSideDrawerHandler] = useState(false);

  return (
    <Aux>
      <SideDrawer
        show={isSideDrawerOpen}
        closed={() => setSideDrawerHandler(false)}
      />
      <Toolbar openMenu={() => setSideDrawerHandler(true)} />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
