import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Completed from './components/Completed';
import Upcoming from './components/Upcoming';
import newEvent from './components/newEvent';


const initialLayout = { width: Dimensions.get('window').width };

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Upcoming' },
    { key: 'second', title: 'Completed' },
    { key: 'third', title: '+' },
  ]);

  const renderScene = SceneMap({
    first: Completed,
    second: Upcoming,
    third: newEvent,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});