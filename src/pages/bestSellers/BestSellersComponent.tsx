import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {DropDown, ScrollViewWrapper, Text} from '../../components';
import {en} from '../../lang/en';
import {BestSellersProps} from '../../type';
import {generalStyle} from '../../ui/style';

export default function BestSellersComponent({
  dateList,
  selectedDate,
  selectedLocation,
  setSelectedDate,
  setSelectedLocation,
  locationList,
  onFilter,
  filteredData,
}: BestSellersProps) {
  const renderItemCard = ({item}:{item:any}) => {
    console.log(item);
    return (
      <View style={generalStyle.listItem}>
        <Text tx={item.name} />
        <Text tx={item.sold} />
      </View>
    );
  };

  return (
    <ScrollViewWrapper>
      <View style={generalStyle.container}>
        <View style={generalStyle.rowSelect}>
          <DropDown
            value={selectedDate}
            setValue={setSelectedDate}
            dateList={dateList}
            placeholder={en.dateSelect}
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
        <FlatList
          data={filteredData}
          renderItem={renderItemCard}
          scrollEnabled={false}
          contentContainerStyle={{
            gap: 10,
          }}
        />
      </View>
    </ScrollViewWrapper>
  );
}
