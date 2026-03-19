import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../utils/images';
import { rf, rh, rw } from '../utils/responsive';
import CustomButton from '../components/CustomButton';
import ReportTable from '../components/ReportTable';
import { SafeAreaView } from 'react-native-safe-area-context';

const Reports = () => {
  const b = ['1D', '1W', '1M', '3M', '12M', 'YTD'];
  const [tag, setTag] = useState('1D');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.headerView}>
        <Image
          source={images.menu}
          style={styles.menuImage}
          resizeMode="contain"
        />

        <Text style={styles.headerText}>Reports</Text>

        <Image
          source={images.notificationBall}
          style={styles.notificationBall}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.UP43023KBView}>
        <Text style={styles.UP43023KBText}>All Vessel</Text>
        <Image source={images.vector} style={styles.vectorImage} />
      </TouchableOpacity>

      <View style={styles.tagView}>
        {b.map(i => {
          return (
            <TouchableOpacity
              style={[
                styles.tagInnerView,
                {
                  backgroundColor: tag === i ? '#005EFF' : '#EEEEEE',
                },
              ]}
              onPress={() => setTag(i)}
            >
              <Text
                style={[
                  styles.tagText,
                  {
                    color: tag === i ? '#FFFFFF' : '#000000',
                    fontWeight: tag === i ? 700 : 500,
                  },
                ]}
              >
                {i}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.buttonsView}>
        <CustomButton
          title="Risk"
          style={styles.customButtonStyle}
          source={images.vector}
        />
        <CustomButton
          title="Type"
          style={styles.customButtonStyle}
          source={images.vector}
        />
        <CustomButton
          title="Not Reported"
          style={[
            styles.customButtonStyle,
            {
              backgroundColor: '#F08400',
              borderWidth: 0,
            },
          ]}
          textStyle={styles.customButtonTextStyle}
        />
      </View>
      <ReportTable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerView: {
    marginTop: rh(11),
    flexDirection: 'row',
    marginHorizontal: rw(25),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: rf(24),
    textAlign: 'center',
    fontWeight: 500,
  },
  notificationBall: {
    width: rw(22),
    height: rh(26),
    marginVertical: rh(3),
    marginHorizontal: rw(5),
  },
  menuImage: {
    width: rw(28),
    height: rh(22),
    marginVertical: rh(5),
    marginHorizontal: rw(2),
  },
  UP43023KBView: {
    marginTop: rh(6),
    marginHorizontal: rw(115),
    borderColor: '#005EFF',
    borderRadius: rw(100),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rh(17),
  },
  UP43023KBText: {
    fontSize: rf(12),
    fontWeight: 500,
    marginRight: rw(8),
    textAlign: 'center',
  },
  vectorImage: { width: rw(10), height: rh(6) },
  tagView: {
    flexDirection: 'row',
    marginHorizontal: rw(56),
    marginTop: rh(16),
    justifyContent: 'space-between',
    gap: rw(7),
  },
  tagInnerView: {
    borderRadius: rw(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tagText: {
    marginVertical: rh(13),
    marginHorizontal: rw(9),
    fontSize: rf(12),
    // fontWeight: 700,
  },
  buttonsView: {
    marginHorizontal: rw(25),
    marginTop: rh(15),
    flexDirection: 'row',
    gap: rw(7),
    justifyContent: 'space-between',
  },
  customButtonStyle: { borderRadius: rw(8) },
  customButtonTextStyle: { color: '#FFFFFF' },
});

export default Reports;
