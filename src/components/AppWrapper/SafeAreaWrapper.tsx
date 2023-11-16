import React from 'react';
import {SafeAreaView} from 'react-native';
import { SafeAreaProps } from '../../type';
import {appStyle} from '../../ui/style';

export default function SafeAreaWrapper({children}: SafeAreaProps) {
  return <SafeAreaView style={appStyle.safeArea}>{children}</SafeAreaView>;
}
