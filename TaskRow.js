import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f7f7f7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#eaeaea',
    padding: 5,
  },
});

const TaskRow = (props) => {
  const onDonePressed = () => {
    props.onDone(props.todo);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
      >{props.todo.task}</Text>

      <TouchableHighlight
        style={styles.doneButton}
        onPress={onDonePressed}
      >
        <Text>Done</Text>
      </TouchableHighlight>
    </View>
  );
};

TaskRow.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;
