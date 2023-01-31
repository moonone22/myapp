// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    if (newTodoItem === '') {
      alert('입력해주세요');
      return;
    }
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.button}>
        <Icon name="plus" size={30} color="#3143e8" onPress={addTodoHandler} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
