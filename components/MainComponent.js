import React, {Component} from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import Directory from './DirectoryComponent';
import {Text, View, Platform} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';


const DirectoryNavigator = createStackNavigator(
    {
        Directory: {screen:Directory},
        CampsiteInfo: {screen:CampsiteInfo},
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                color: '#fff'
            }
        }
    }
)
    
      
const HomeNavigator = createStackNavigator(
    {
        Home: {screen:Home},
       
    },
    {
       
        navigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                color: '#fff'
            }
        }
    }
)
const AboutNavigator = createStackNavigator(
    {
        About: {screen:About},
       
    },
    {
       
        navigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                color: '#fff'
            }
        }
    }
)
const ContactNavigator = createStackNavigator(
    {
        Contact: {screen:Contact},
       
    },
    {
       
        navigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                color: '#fff'
            }
        }
    }
)
     
const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator},
        Contact:{ screen:ContactNavigator},
        About:{screen: AboutNavigator}
    },
    {
        drawerBackgroundColor:'#CEC8FF'
    }
);
       


class Main extends Component{


render(){
  return (
      <View style={{
          flex:1,
          paddingTop: Platform.Os === 'ios' ? 0 : Expo.Constants.statusBarHeight
          }}>
    <MainNavigator/>
     </View>
  )
}
}

export default Main;