import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moment from 'moment';

import HomeScreen from './screens/HomeScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen name="Statistics" component={StatisticsScreen} options={{title: moment(new Date()).format('MMM DD, YYYY')}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {

  return <AppContainer />;

}

