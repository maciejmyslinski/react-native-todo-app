import React from 'react';

import {
  Text,
  View,
  ListView,
} from 'react-native';

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };

    this.renderRow = todo => <Text>{todo.task}</Text>;
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: React.PropTypes
    .arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;
