import React from 'react';

import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#f7f7f7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fafafa',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05a5d1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
});

class TaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      task: '',
    };

    this.onChange = (text) => {
      this.task = text;
    };

    this.onAddPressed = () => {
      this.props.onAdd(this.task);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableHighlight>
        <TextInput />
        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text style={styles.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default TaskForm;
