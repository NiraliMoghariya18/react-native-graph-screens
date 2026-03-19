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
import { images } from '../utils/images';
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
    justifyContent: 'center',
    gap: rw(5),
    borderWidth: 1,
    flex: 1,
  },
  vectorImage: { width: rw(10), height: rh(6) },
  text: {
    fontSize: rf(13),
    fontWeight: 600,
    marginVertical: rh(8),
  },
});

export default CustomButton;
