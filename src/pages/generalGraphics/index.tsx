import React, {useEffect, useState} from 'react';
import GeneralGraphicsComponent from './GeneralGraphicsComponent';
import {DailyDataType} from '../../type';
import data from '../../../JSON/data';

export default function GeneralGraphicsContainer() {
  const [efficiencyTotals, setEfficiencyTotals] = useState<
    DailyDataType | undefined
  >();
  const [soldTotals, setSoldTotals] = useState<DailyDataType | undefined>();
  const [qualityTotals, setQualityTotals] = useState<
    DailyDataType | undefined
  >();

  useEffect(() => {
    const efficiencyTotal: DailyDataType = {};

    const soldTotal: DailyDataType = {};

    const qualityTotal: DailyDataType = {};

    data.data.forEach(dayData => {
      const dateKey = `${dayData.year}-${dayData.month}-${dayData.day}`;

      if (!efficiencyTotal[dateKey]) {
        efficiencyTotal[dateKey] = 0;
      }

      if (!soldTotal[dateKey]) {
        soldTotal[dateKey] = 0;
      }

      if (!qualityTotal[dateKey]) {
        qualityTotal[dateKey] = 0;
      }

      dayData.locations.forEach(location => {
        location.sold.forEach(beer => {
          efficiencyTotal[dateKey] += beer.efficiency;
          soldTotal[dateKey] += beer.sold;

          qualityTotal[dateKey] += beer.quality;
        });
      });
      setEfficiencyTotals(efficiencyTotal);
      setSoldTotals(soldTotal);
      setQualityTotals(qualityTotal);
    });
  }, []);

  return (
    <GeneralGraphicsComponent
      efficiencyTotals={efficiencyTotals}
      soldTotals={soldTotals}
      qualityTotals={qualityTotals}
    />
  );
}
