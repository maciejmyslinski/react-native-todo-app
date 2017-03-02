import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TaskList from './TaskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <TaskList />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
