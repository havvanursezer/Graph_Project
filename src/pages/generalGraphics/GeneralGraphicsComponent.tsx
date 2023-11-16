import React from 'react';
import {View} from 'react-native';
import {GeneralGraphicsProps, RenderDataType} from '../../type';
import styles from '../../ui/style/generalStyle';
import {ScrollViewWrapper, LineGraph} from '../../components';

export default function GeneralGraphicsComponent({
  efficiencyTotals,
  soldTotals,
  qualityTotals,
}: GeneralGraphicsProps) {
  const RenderData = ({data, title}: RenderDataType) => {
    return (
      <>
        {data !== undefined && (
          <LineGraph
            title={title}
            data={Object.values(data)}
            labels={Object.keys(data)}
          />
        )}
      </>
    );
  };

  return (
    <ScrollViewWrapper>
      <View style={styles.container}>
        <RenderData data={efficiencyTotals} title="efficiencyGraphTitle" />
        <RenderData data={qualityTotals} title="qualityGraphTitle" />
        <RenderData data={soldTotals} title="soldGraphTitle" />
      </View>
    </ScrollViewWrapper>
  );
}
