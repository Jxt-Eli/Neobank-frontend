import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import RootNavigator from './RootNavigator';

export default function App() {
  
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
};

