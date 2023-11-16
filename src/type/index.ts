import { en } from "../lang/en";

export type DailyDataType = {
  [date: string]: number;
};


export type LineGraphProps = {
  data: number[];
  labels: string[];
  title: keyof typeof en;
}

export type GeneralGraphicsProps = {
  efficiencyTotals?: DailyDataType;
  soldTotals?: DailyDataType;
  qualityTotals?: DailyDataType;
}

export type RenderDataType = {
  data?: DailyDataType;
  title: keyof typeof en;
};

export type NavigationProps = {
  children: React.ReactNode;
}

export type SafeAreaProps = {
  children: React.ReactNode;
}

export type ScrollViewProps = {
  children: React.ReactNode;
}

export type BestSellersProps = {
  dateList: DropdownItem[];
  locationList: DropdownItem[];
  selectedDate?: string;
  setSelectedDate: (params: string)=> void;
  selectedLocation?: string;
  setSelectedLocation: (params: string)=> void;
  onFilter:()=> void;
  filteredData: any;
}

export type DropdownItem = {
  label: string; value: string
}

export type DropdownProps = {
  dateList:DropdownItem[];
  placeholder: string;
  value?: string;
  setValue: (params: string)=> void;
}

export type ComparisonProps = {
  locationList: DropdownItem[];
  selectedLocationTwo?: string;
  setSelectedLocationTwo:(params: string)=> void;
  selectedLocation?: string;
  setSelectedLocation: (params: string)=> void;
  onFilter:()=> void;
  locationOneData:any;
  locationTwoData:any;
}

export type PieChartProps = {
  data: any;
  title: string;
}