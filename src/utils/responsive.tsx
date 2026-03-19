import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const rf = (size: number) => RFValue(size, 861);
export const rw = (value: number) => {
  return widthPercentageToDP((value * 100) / 375);
};
export const rh = (value: number) => {
  return heightPercentageToDP((value * 100) / 861);
};
