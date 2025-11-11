import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

export default function App() {
  
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};

