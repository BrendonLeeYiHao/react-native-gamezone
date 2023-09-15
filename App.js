import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
// import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './screens/reviewDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/about';


const getFonts = () => Font.loadAsync({
    'inconsolata-regular': require('./assets/fonts/Inconsolata_Condensed-Regular.ttf')
  })


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() =>{
    getFonts().then(() => setFontsLoaded(true))
  }, []);
  // const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  if(fontsLoaded){
    return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName='Home'>
      //     <Stack.Group screenOptions={{headerStyle: {backgroundColor: 'lightblue', height: 80}}}>
      //       <Stack.Screen name='Home' component={Home} options={{title: 'GameZone'}}/>
      //       <Stack.Screen name='ReviewDetails' component={ReviewDetails}/>
      //     </Stack.Group>
      //   </Stack.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Group screenOptions={{headerStyle: {backgroundColor: 'lightblue'}}}>
            <Drawer.Screen name='Home' component={Home} options={{title: 'GameZone'}}/>
            <Drawer.Screen name='ReviewDetails' component={ReviewDetails}/>
            <Drawer.Screen name='About' component={About}/>
          </Drawer.Group>
        </Drawer.Navigator>
      </NavigationContainer>
      // <Navigator/>
    );
  }

}

