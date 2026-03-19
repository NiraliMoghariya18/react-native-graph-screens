import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
} from 'react-native';
import { rf, rh, rw } from '../utils/responsive';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  source?: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton = ({ title, style, source, textStyle }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {source && <Image source={source} style={styles.vectorImage} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    gap: rw(5),
    paddingVertical: rh(8),
    paddingHorizontal: rw(12),
  },
  vectorImage: {
    width: rw(10),
    height: rh(6),
    marginRight: rw(10),
  },
  text: {
    fontSize: rf(13),
    fontWeight: 600,
    textAlign: 'center',
    flex: 1,
    // marginLeft: rw(10),
  },
});

export default CustomButton;
