import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../utils/images';
import { rf, rh, rw } from '../utils/responsive';
import moment from 'moment';

const ReportTable = () => {
  const [id, setId] = useState<number>();
  const tableData = [
    {
      id: 1,
      type: 'Positive Findings',
      risk: 'High',
      vessel: 'KW05BJP BOB SHIP',
      imageUri: images.arrow,
      date: '2024-01-14T04:00:00.719Z',
    },
    {
      id: 2,
      type: 'Unsafe Act',
      risk: 'Medium',
      vessel: 'KW05BJP BOB SHIP',
      imageUri: images.arrow,
      date: '2024-01-14T11:01:50.719Z',
    },
    {
      id: 3,
      type: 'Positive Findings',
      risk: 'Low',
      vessel: 'KW05BJP BOB SHIP',
      imageUri: images.arrow,
      date: '2024-01-14T11:01:50.719Z',
    },
  ];

  return (
    <View style={styles.tableContainer}>
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.headerText, { flex: 0.1 }]}></Text>
        <Text style={[styles.headerText, { flex: 0.2 }]}>Type</Text>
        <Text style={[styles.headerText, { flex: 0.2 }]}>Vessel</Text>
        <Text style={[styles.headerText, { flex: 0.2 }]}>Risk</Text>
        <Text style={[styles.headerText, { flex: 0.3 }]}>Date</Text>
        <Text style={[styles.headerText, { flex: 0 }]}>Action</Text>
      </View>

      {tableData.map((item, index) => {
        const image = id === item.id ? images.orangeSave : images.save;

        function bgcolor() {
          if (item.risk == 'High') {
            return '#ED1C24';
          } else if (item.risk == 'Medium') {
            return '#F08400';
          } else if (item.risk == 'Low') {
            return '#3FB475';
          }
        }

        return (
          <View
            key={item.id}
            style={[
              styles.row,
              index === tableData.length - 1 && styles.lastRow,
            ]}
          >
            <TouchableOpacity
              style={{ flex: 0.1 }}
              onPress={() => setId(item.id)}
            >
              <Image source={image} />
            </TouchableOpacity>
            <Text style={[styles.cell, { flex: 0.2 }]}>{item.type}</Text>
            <Text style={[styles.cell, { flex: 0.2, color: '#999999' }]}>
              {item.vessel}
            </Text>
            <View style={{ flex: 0.2 }}>
              <View
                style={{
                  backgroundColor: bgcolor(),
                  alignSelf: 'center',
                  borderRadius: rw(5),
                  padding: rh(3),
                }}
              >
                <Text style={[styles.cell, { color: '#FFFFFF' }]}>
                  {item.risk}
                </Text>
              </View>
            </View>

            <View style={[{ flex: 0.3 }]}>
              <Text style={[styles.cell]}>
                {moment(item.date).format('DD/MM/YYYY')}
              </Text>
              <Text style={[styles.cell, { color: '#999999' }]}>
                {moment(item.date).format('h:mma IST')}
              </Text>
            </View>
            <View style={[styles.imageCell, { flex: 0 }]}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: rw(15),
                  paddingVertical: rh(13),
                  backgroundColor: '#DFEBFF',
                  borderRadius: rw(24),
                }}
              >
                <Image
                  source={item.imageUri}
                  style={{
                    width: rw(5),
                    height: rh(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      <TouchableOpacity>
        <Text
          style={{
            marginTop: rh(24),
            marginBottom: rh(19),
            textDecorationLine: 'underline',
            textAlign: 'center',
            fontSize: rf(14),
            fontWeight: 700,
          }}
        >
          View More
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginHorizontal: rw(14),
    marginTop: rh(15),
    backgroundColor: '#FFFFFF',
    borderRadius: rw(8),
    paddingHorizontal: rw(10),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rh(10),
    borderBottomWidth: 0.5,
    borderBottomColor: '#B1B1B1',
  },
  header: {
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#707071',
    fontSize: rf(10),
    textAlign: 'center',
  },

  lastRow: {
    borderBottomWidth: 0,
  },
  cell: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: rf(12),
  },
  imageCell: {
    alignItems: 'center',
  },
});

export default ReportTable;
