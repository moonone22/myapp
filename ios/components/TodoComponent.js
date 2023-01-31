import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCountry} from '../../App';
import TodoList from './TodoList';

const TodoComponent = ({i, setTodoContent, todosContent}) => {
  const [todos, setTodos] = useState([]);
  const {days, setDays} = useCountry();

  const daysTextVal = todos.map(i => {
    return i.textValue;
  });

  useEffect(() => {
    var _ = require('lodash');

    var person = days[i];
    var prop = {name: daysTextVal};

    _.merge(person, prop);
    days[i] = person;
  }, [todos, days, daysTextVal, i]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <>
      <Text style={styles.appTitle}>{i}</Text>
      <View style={styles.card}>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onAddTodo={addTodo}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  scroll: {
    flex: 1,
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default TodoComponent;
