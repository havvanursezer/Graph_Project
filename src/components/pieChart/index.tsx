import React from 'react';
import {width} from '../../ui/size';
import {PieChart as PieChartRN} from 'react-native-chart-kit';
import Text from '../text';
import { PieChartProps } from '../../type';
import { generalStyle } from '../../ui/style';
import Colors from '../../ui/colors';

export default function PieChart({data, title}: PieChartProps) {
  const pieChartData = [
    {
      name: 'Efficiency',
      population: data.totalEfficiency,
      color: Colors.gold,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Quality',
      population: data.totalQuality,
      color: Colors.lightPink,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Sold',
      population: data.totalSold,
      color: Colors.softPink,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <>
      <Text style={generalStyle.graphTitle} tx={title} />
      <PieChartRN
        data={pieChartData}
        width={width * 0.9}
        height={width * 0.4}
        chartConfig={{
          backgroundColor: Colors.pieBackgroundColor,
          backgroundGradientFrom:Colors.pieBackgroundColor,
          backgroundGradientTo: Colors.pieBackgroundColor,
          decimalPlaces: 2,
          color: (opacity = 1) => Colors.pieBackgroundColor,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </>
  );
}
