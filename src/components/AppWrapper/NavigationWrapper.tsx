import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProps } from '../../type';

export default function NavigationWrapper({children}: NavigationProps) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
