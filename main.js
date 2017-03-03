import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import TaskList from './TaskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 40,
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
        {
          task: 'Another todo',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskList
          todos={this.state.todos}
        />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
