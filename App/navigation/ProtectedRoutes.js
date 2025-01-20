import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ABOUT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, POST_ROUTE} from './Constants';
import HomeContainer from '../screens/Home/home.container';
import AboutContainer from '../screens/About/about.container';
import LoginContainer from '../screens/Auth/Login/login.container';

const Drawer = createDrawerNavigator();

function ProtectedRoutes() {
  return (
    <Drawer.Navigator initialRouteName={HOME_ROUTE}>
      <Drawer.Screen
        name={HOME_ROUTE}
        component={HomeContainer}
        options={{drawerLabel: 'Home'}}
      />

      <Drawer.Screen
        name={ABOUT_ROUTE}
        component={AboutContainer}
        options={{drawerLabel: 'About'}}
      />
    </Drawer.Navigator>
  );
}

export default ProtectedRoutes;
