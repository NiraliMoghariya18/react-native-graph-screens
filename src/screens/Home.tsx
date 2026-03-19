import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { rf, rh, rw } from '../utils/responsive';
import { images } from '../utils/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { barData, stackData } from '../utils/dummyData';

const LegendComponent = ({
  color,
  label,
}: {
  color: string;
  label: string;
}) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendColorBox, { backgroundColor: color }]} />
    <Text style={styles.legendLabel}>{label}</Text>
  </View>
);

const Home = ({ navigation }: any) => {
  const tags = ['Reports', 'Trainings', 'Performance'];
  const time = ['1D', '1M', '3M', '6M', '12M', 'YTD'];
  const [category, setCategory] = useState<string>('Reports');
  const [tag, setTag] = useState('1D');

  const pointerLabelComponent = (item: any) => {
    console.log(item);

    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          elevation: 5,
          width: rw(150),
        }}
      >
        <Text style={{ color: '#000000' }}>{`Value: ${
          item[0].stacks.map((i: any) => i.value) || 'N/A'
        }`}</Text>
        <Text style={{ color: '#000000' }}>{`Label: ${
          item[0]?.label || 'N/A'
        }`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.headerView}>
        <Image source={images.menu} style={styles.menu} resizeMode="contain" />

        <Text style={styles.headerText}>Shiparc.AI</Text>

        <Image
          source={images.notificationBall}
          style={styles.notificationBall}
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <View style={styles.textView}>
          <Text style={styles.shipWorksText}>
            Shipworksz Marine services LLC
          </Text>
        </View>
        <TouchableOpacity style={styles.UP43023KBView}>
          <Text style={styles.UP43023KBText}>UP43023KB</Text>
          <Image source={images.vector} style={styles.vectorImage} />
        </TouchableOpacity>
        <View style={styles.categoryView}>
          {tags.map(i => {
            return (
              <>
                <TouchableOpacity
                  style={[
                    styles.categoryTextView,
                    {
                      backgroundColor: category === i ? '#005EFF' : '#FFFFFF',
                    },
                  ]}
                  onPress={() => setCategory(i)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      {
                        color: category === i ? '#FFFFFF' : '#727373',
                      },
                    ]}
                  >
                    {i}
                  </Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
        <View style={styles.tagView}>
          {time.map(i => {
            const isSelected = tag === i;
            return (
              <TouchableOpacity
                style={[
                  styles.tagInnerView,
                  {
                    backgroundColor: isSelected ? '#005EFF' : '#FFFFFF',
                  },
                ]}
                onPress={() => setTag(i)}
              >
                <Text
                  style={[
                    styles.tagText,
                    {
                      color: isSelected ? '#FFFFFF' : '#000000',
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: isSelected ? 13 : 12,
                    },
                  ]}
                >
                  {i}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.reportsView}>
          <View style={styles.reportsImageView}>
            <Image
              source={images.report}
              style={styles.reportImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.reportText}>
            Total Reports: <Text style={{ color: '#357BF3' }}>29</Text>
          </Text>
        </View>
        <View style={styles.barChartView}>
          <BarChart
            width={360}
            rotateLabel
            barWidth={7}
            // onPress={(item, index) => {
            //   console.log('Pressed: ', item, index);
            // }}
            spacing={15}
            noOfSections={4}
            barBorderRadius={5}
            stackData={stackData}
            yAxisThickness={0}
            xAxisThickness={0}
            xAxisLabelTextStyle={{
              color: '#757575',
              fontSize: rf(10),
              transform: [{ rotate: '240deg' }],
              width: rw(27),
            }}
            height={200}
            // renderTooltip={pointerLabelComponent}
            initialSpacing={10}
            showVerticalLines={false}
            dashWidth={0}
            pointerConfig={{
              pointerLabelComponent: pointerLabelComponent,
            }}
          />

          <View style={styles.legendContainer}>
            {barData.map((item, index) => (
              <LegendComponent
                key={index}
                color={item.frontColor}
                label={item.label}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.reportsButtonView}
          onPress={() => navigation.navigate('Reports')}
        >
          <Text style={styles.reportsText}>View Reports</Text>
        </TouchableOpacity>
      </ScrollView>
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
  menu: {
    width: rw(28),
    height: rh(22),
    marginVertical: rh(5),
    marginHorizontal: rw(2),
  },
  headerText: {
    fontSize: rf(24),
    color: '#005EFF',
    textAlign: 'center',
    fontWeight: 500,
  },
  notificationBall: {
    width: rw(22),
    height: rh(26),
    marginVertical: rh(3),
    marginHorizontal: rw(5),
  },
  textView: {
    marginTop: rh(7),
    backgroundColor: '#FFFFFF',
    borderRadius: rw(8),
    alignItems: 'center',
    marginHorizontal: rw(59),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shipWorksText: {
    fontSize: rf(14),
    fontWeight: 500,
    marginHorizontal: rw(19),
    marginVertical: rh(5),
  },
  UP43023KBView: {
    marginTop: rh(18),
    marginHorizontal: rw(115),
    borderColor: '#005EFF',
    borderRadius: rw(100),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rw(29),
    paddingVertical: rh(15),
  },
  UP43023KBText: {
    fontSize: rf(12),
    fontWeight: 500,
    marginRight: rw(9),
    textAlign: 'center',
  },
  vectorImage: { width: rw(10), height: rh(6) },
  categoryView: {
    flexDirection: 'row',
    marginHorizontal: rw(36),
    justifyContent: 'space-between',
    marginTop: rh(11),
    backgroundColor: '#FFFFFF',
    borderRadius: rw(8),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    // flex: 1,
    // justifyContent: 'center',
  },
  categoryTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rw(8),
  },
  categoryText: {
    flexDirection: 'row',
    marginVertical: rh(8),
    marginHorizontal: rw(12),
    fontWeight: 600,
    fontSize: rf(13),
  },
  tagView: {
    flexDirection: 'row',
    marginHorizontal: rw(56),
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: rh(15),
    justifyContent: 'center',
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
    marginVertical: rh(10),
    marginHorizontal: rw(10),
    fontSize: rf(12),
  },
  reportsView: {
    marginTop: rh(19),
    marginHorizontal: rw(24),
    flexDirection: 'row',
    alignItems: 'center',
    gap: rw(7),
  },
  reportsImageView: {
    backgroundColor: '#AFE4FC',
    borderRadius: rw(50),
  },
  reportImage: { width: rw(12), height: rh(14), margin: rw(7) },
  reportText: { fontSize: rf(16), fontWeight: 600 },
  barChartView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: rw(10),
    borderColor: '#2344F1',
    backgroundColor: '#E0ECFF',
    marginHorizontal: rw(21),
    marginTop: rh(17),
    width: rw(333),
    height: rh(326),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rw(20),
  },
  reportsButtonView: {
    marginTop: rh(13),
    backgroundColor: '#005EFF14',
    marginHorizontal: rw(24),
    borderRadius: rw(8),
    marginBottom: rh(17),
  },
  reportsText: {
    fontSize: rf(12),
    fontWeight: 600,
    color: '#005EFF',
    textAlign: 'center',
    marginVertical: rh(12),
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rh(20),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: rw(3),
  },
  legendColorBox: {
    width: rw(8),
    height: rw(8),
    borderRadius: 2,
    marginRight: rw(4),
  },
  legendLabel: {
    fontSize: rf(7),
    fontWeight: 500,
  },
});

export default Home;
