import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5', // e.g., '#171717'
  },
};
function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
