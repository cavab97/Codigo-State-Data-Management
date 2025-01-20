import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedRoutes from './ProtectedRoutes';
import {enableScreens} from 'react-native-screens';
import AuthRoutes from './AuthRoutes';
import {navigationRef} from './NavigationService';

enableScreens();

function Navigators() {
  const authState = useSelector(state => state.auth);
  const {loading, error, data} = authState;
  return (
    <NavigationContainer ref={navigationRef}>
      {data === null ? (
        <AuthRoutes loading={loading} data={data} error={error} />
      ) : (
        <ProtectedRoutes />
      )}
    </NavigationContainer>
  );
}

export default Navigators;
