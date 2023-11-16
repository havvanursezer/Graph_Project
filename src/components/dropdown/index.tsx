import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from '../../type';
import {dropdownStyle} from '../../ui/style';

export default function DropDown({
  dateList,
  placeholder,
  value,
  setValue,
}: DropdownProps) {
  return (
    <Dropdown
      style={dropdownStyle.dropdown}
      placeholderStyle={dropdownStyle.placeholderStyle}
      selectedTextStyle={dropdownStyle.selectedTextStyle}
      data={dateList}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
}
