import React from 'react';
import {SafeAreaWrapper} from './src/components';
import { TabNavigationContainer } from './src/pages';

export default function App() {
  return (
    <SafeAreaWrapper>
      <TabNavigationContainer />
    </SafeAreaWrapper>
  );
}
