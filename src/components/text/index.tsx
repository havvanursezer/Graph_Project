import {StyleProp, Text as TextRN, TextStyle} from 'react-native';
import React from 'react';
import {en} from '../../lang/en';

type textProps = {
  tx: keyof typeof en;
  styles?: StyleProp<TextStyle>;
};

export default function Text({tx, styles}: textProps) {
  return <TextRN style={styles}>{en[tx] ? en[tx] : tx}</TextRN>;
}
