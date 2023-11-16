import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineGraphProps} from '../../type';
import Colors from '../../ui/colors';
import {height, width} from '../../ui/size';
import { generalStyle } from '../../ui/style';
import Text from '../text';

export default function LineGraph({data, labels, title}: LineGraphProps) {
  return (
    <View style={generalStyle.lineGraphContainer} >
      <Text tx={title} styles={generalStyle.graphTitle} />
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={(width * 0.9)-10} // from react-native
        height={height * 0.2}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: Colors.softGrey,
          backgroundGradientFrom: Colors.white,
          backgroundGradientTo: Colors.white,
          color: (opacity = 1) => Colors.pink,
          labelColor: (opacity = 1) => Colors.pink,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            strokeWidth: '2',
            stroke: Colors.gold,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    </View>
  );
}
