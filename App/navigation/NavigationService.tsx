import * as React from 'react';
import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';
export type RootStackParamList = {
  Home: string;
  name: string;
};
// NavigationContainer is referred here - Check NavigationStack
export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
