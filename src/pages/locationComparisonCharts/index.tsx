import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import data from '../../../JSON/data';
import {en} from '../../lang/en';
import {DropdownItem} from '../../type';
import LocationComparisonChartsComponent from './LocationComparisonChartsComponent';

export default function LocationComparisonChartsContainer() {
  const [locationList, setLocationList] = useState<DropdownItem[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>();
  const [selectedLocationTwo, setSelectedLocationTwo] = useState<string>();
  const [locationOneData, setLocationOneData] = useState();
  const [locationTwoData, setLocationTwoData] = useState();

  useEffect(() => {
    const locationNameList: string[] = [];

    data.data.forEach(dayData => {
      dayData.locations.forEach(location => {
        const locationName = location.name;

        if (!locationNameList.includes(locationName)) {
          locationNameList.push(locationName);
        }
      });
    });

    const formattedLocationList: DropdownItem[] = locationNameList.map(
      (name, index) => ({
        label: name,
        value: index.toString(),
      }),
    );
    setLocationList(formattedLocationList);
  }, []);

  function getTotalDataForLocation(selectedLocation, setLocationData) {
    let totalData = {
      totalEfficiency: 0,
      totalQuality: 0,
      totalSold: 0,
    };

    data.data.forEach(dayData => {
      dayData.locations.forEach(location => {
        if (location.name === selectedLocation) {
          location.sold.forEach(item => {
            totalData.totalEfficiency += parseInt(item.efficiency);
            totalData.totalQuality += parseInt(item.quality);
            totalData.totalSold += parseInt(item.sold);
          });
        }
      });
    });

    setLocationData(totalData);
  }

  const onFilter = () => {
    if (selectedLocation !== undefined && selectedLocationTwo !== undefined) {
      getTotalDataForLocation(
        locationList[parseInt(selectedLocation)].label,
        setLocationOneData,
      );
      getTotalDataForLocation(
        locationList[parseInt(selectedLocationTwo)].label,
        setLocationTwoData,
      );
    } else {
      Alert.alert(en.alertMessage);
    }
  };

  return (
    <LocationComparisonChartsComponent
      locationList={locationList}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      selectedLocationTwo={selectedLocationTwo}
      setSelectedLocationTwo={setSelectedLocationTwo}
      onFilter={onFilter}
      locationOneData={locationOneData}
      locationTwoData={locationTwoData}
    />
  );
}
