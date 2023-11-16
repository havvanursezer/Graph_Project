import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DropDown, ScrollViewWrapper, Text} from '../../components';
import PieChart from '../../components/pieChart';
import {en} from '../../lang/en';
import {ComparisonProps} from '../../type';
import {generalStyle} from '../../ui/style';

export default function LocationComparisonChartsComponent({
  selectedLocation,
  selectedLocationTwo,
  setSelectedLocationTwo,
  setSelectedLocation,
  locationList,
  onFilter,
  locationOneData,
  locationTwoData,
}: ComparisonProps) {
  const labelOne = locationList[selectedLocation]?.label;
  const labelTwo = locationList[selectedLocationTwo]?.label;

  return (
    <ScrollViewWrapper>
      <View style={generalStyle.container}>
        <View style={generalStyle.rowSelect}>
          <DropDown
            value={selectedLocationTwo}
            setValue={setSelectedLocationTwo}
            dateList={locationList}
            placeholder={en.locationSelect}
            key="1"
          />
          <DropDown
            value={selectedLocation}
            setValue={setSelectedLocation}
            dateList={locationList}
            placeholder={en.locationSelect}
            key="2"
          />
        </View>
        <TouchableOpacity style={generalStyle.button} onPress={onFilter}>
          <Text tx="seeButton" styles={generalStyle.whiteText} />
        </TouchableOpacity>
        <View style={generalStyle.chartRow}>
          {locationOneData && (
            <PieChart title={labelOne} data={locationOneData} />
          )}
          {locationTwoData && (
            <PieChart title={labelTwo} data={locationTwoData} />
          )}
        </View>
      </View>
    </ScrollViewWrapper>
  );
}
