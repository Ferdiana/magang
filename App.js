import { Card, Chip, Text} from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function HomeScreen() {
  
  return (

    
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.headercontainer}>
        <Text h3>
          Hi There! 
        </Text>
        <Ionicons name="cart-outline" size={30} />
        
      </View>
        <Text style={styles.headercontainer1}>
          Omagaaa
        </Text>
      <View style={styles.chipcontainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <Chip
              title="Outlined Chip"
              containerStyle={{marginRight: 10}}
              onPress={() => console.log('Icon chip was pressed!')}
              onFocus={() => this.onFocus ()}
            />
        <Chip
              title="Outlined Chip"
              type="outline"
              containerStyle={{marginRight: 10}}
            />
        <Chip
              title="Outlined Chip"
              type="outline"
              containerStyle={{marginRight: 10}}
            />
        <Chip
              title="Outlined Chip"
              type="outline"
              containerStyle={{marginRight: 10}}
            />    
        </ScrollView>          
      </View>

     </SafeAreaView>

      <ScrollView>
      <View >
        <Card>
          <View style={styles.container1}>
            <Image source={require('./assets/cat.png')} style={styles.image}/>
            <Text>aaaaa</Text>
          </View>
        </Card>

        <Card>
          <View style={styles.container1}>
            <Image source={require('./assets/cat.png')} style={styles.image}/>
            <Text>aaaaa</Text>
          </View>
        </Card>

        <Card>
          <View style={styles.container1}>
            <Image source={require('./assets/cat.png')} style={styles.image}/>
            <Text>aaaaa</Text>
          </View>
        </Card>

        <Card>
          <View style={styles.container1}>
            <Image source={require('./assets/cat.png')} style={styles.image}/>
            <Text>aaaaa</Text>
          </View>
        </Card>
      </View>
      </ScrollView>

    </View>

    
  );
  
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },

  container1: {
    flexDirection: 'row',
  },

  chipcontainer: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 0,
  },

  chip: {
    marginRight: 10,
  },

  headertext: {
    
  },

  headercontainer: {
    flexDirection: 'row',
    margin: 20,
    marginBottom: 0,
    justifyContent: 'space-between'
  },

  headercontainer1: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
    justifyContent: 'space-between',
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },

  text: {
    textAlign: 'left',
  },

 
});
