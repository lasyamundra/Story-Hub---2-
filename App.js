import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#00B8C0'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'black', fontSize: 16, fontWeight: 700 },
          }}
        />
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'WriteStory') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'ReadStory') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
  },
});
