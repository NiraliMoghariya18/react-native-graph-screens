import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { images } from '../utils/images';
import { rh, rw } from '../utils/responsive';

const CustomTabBar = ({ state, navigation, props }: any) => {
  return (
    <View style={styles.tabContainer}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          // width: rw(100),
          // height: rh(66),
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: rh(20),
          marginHorizontal: rw(13),
          borderRadius: rw(50),
          flexDirection: 'row',
        }}
      >
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          let iconSource;

          if (route.name === 'Home') {
            iconSource = images.home;
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={[
                styles.tabButton,
                { backgroundColor: isFocused ? '#005EFF' : '#FFFFFF' },
              ]}
            >
              <Image
                source={iconSource}
                style={{
                  width: rw(18),
                  height: rh(18),
                  tintColor: isFocused ? '#FFFFFF' : '#767676',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',

    borderTopWidth: 0,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 0,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rw(999),
    marginVertical: rw(8),
    marginHorizontal: rw(21),
    width: rh(51),
    height: rh(51),
  },
});

export default CustomTabBar;
