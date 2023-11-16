import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import data from '../../../JSON/data';
import {en} from '../../lang/en';
import {DropdownItem} from '../../type';
import BestSellersComponent from './BestSellersComponent';

export default function BestSellersContainer() {
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedLocation, setSelectedLocation] = useState<string>();
  const [dateList, setDateList] = useState<DropdownItem[]>([]);
  const [locationList, setLocationList] = useState<DropdownItem[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>();

  useEffect(() => {
    let allBeerBrands: any[] = [];

    data.data.forEach(dayData => {
      dayData.locations.forEach(location => {
        location.sold.forEach(item => {
          allBeerBrands.push({
            name: item.name,
            sold: item.sold,
            efficiency: item.efficiency,
            quality: item.quality,
          });
        });
      });
    });

    allBeerBrands.sort((a, b) => b.sold - a.sold);

    const top5BeerBrands = allBeerBrands.slice(0, 5);

    console.log(
      'En Yüksek 5 Sold Değerine Sahip Bira Markaları:',
      top5BeerBrands,
    );
    setFilteredData(top5BeerBrands);
  }, []);

  useEffect(() => {
    const dateListTemp: DropdownItem[] = [];
    data.data.forEach((dayData, index) => {
      const date = `${dayData.year}-${dayData.month}-${dayData.day}`;

      if (!dateListTemp.find(item => item.value === date)) {
        dateListTemp.push({label: date, value: index.toString()});
      }
    });
    setDateList(dateListTemp);
  }, []);

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

  const onFilter = () => {
    if (selectedDate !== undefined && selectedLocation !== undefined) {
      const date = dateList[parseInt(selectedDate)].label;
      const location = locationList[parseInt(selectedLocation)].label;

      let filteredData: any[] = [];

      data.data.forEach(dayData => {
        if (
          dayData.year === parseInt(date.substring(0, 4)) &&
          dayData.month === parseInt(date.substring(5, 7)) &&
          dayData.day === parseInt(date.substring(8, 10))
        ) {
          dayData.locations.forEach(item => {
            if (item.name === location) {
              console.log('girdiii3');

              filteredData = item.sold;
            }
          });
        }
      });
      const top5SoldData = filteredData
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 5);
      setFilteredData(top5SoldData);
    } else {
      Alert.alert(en.alertMessage);
    }
  };

  return (
    <BestSellersComponent
      dateList={dateList}
      locationList={locationList}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
      onFilter={onFilter}
      filteredData={filteredData}
    />
  );
}
