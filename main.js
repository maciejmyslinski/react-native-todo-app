import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

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
      this.nav.push({
        name: 'taskform',
      });
    };

    this.onCancel = () => {
      this.nav.pop();
    };

    this.onAdd = (task) => {
      this.state.todos.push({ task });
      this.setState({ todos: this.state.todos });
      this.nav.pop();
    };

    this.onDone = (todo) => {
      const filteredTodos =
      this.state.todos.filter(filterTodo =>
        filterTodo !== todo);
      this.setState({ todos: filteredTodos });
    };

    this.renderScene = (route) => {
      switch (route.name) {
        case 'taskform':
          return (
            <TaskForm
              onCancel={this.onCancel}
              onAdd={this.onAdd}
            />
          );
        default:
          return (
            <TaskList
              onAddStarted={this.onAddStarted}
              todos={this.state.todos}
              onDone={this.onDone}
            />
          );
      }
    };

    this.configureScene = () => Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav;
          })}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
