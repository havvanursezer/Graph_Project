import React from 'react';
import {ScrollView} from 'react-native';
import {ScrollViewProps} from '../../type';
import { appStyle } from '../../ui/style';

export default function ScrollViewWrapper({children}: ScrollViewProps) {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={appStyle.scroll}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
