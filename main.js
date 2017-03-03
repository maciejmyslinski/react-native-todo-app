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
    this.onAddStarted = () => {
      console.log('on add started');
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskList
          onAddStarted={this.onAddStarted}
          todos={this.state.todos}
        />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
