import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  Layout,
  SlideOutLeft,
} from 'react-native-reanimated';

type Todo = {
  id: number;
  text: string;
};

export const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, text: 'Initial Todo 1'},
    {id: 2, text: 'Initial Todo 2'},
  ]);
  const [text, setText] = useState<string>('');

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (text?.trim()) {
      setTodos([...todos, {id: todos?.length + 1, text}]);
      setText('');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps={'always'}>
      <Text style={styles.header}>Your To Do's</Text>
      <View style={styles.separator} />
      <TextInput
        style={styles.todoInput}
        blurOnSubmit={false}
        placeholder={'Add ToDo'}
        placeholderTextColor={'#444'}
        value={text}
        onChangeText={setText}
        onSubmitEditing={addTodo}
      />
      <View style={styles.separator} />
      {todos.map((todo, index) => (
        <Animated.View
          key={todo.id}
          style={styles.todo}
          entering={FadeInDown}
          layout={Layout.easing(Easing.bounce).delay(index * 100)}
          exiting={SlideOutLeft}>
          <Text style={styles.todoText}>{todo.text}</Text>
          <Text onPress={() => removeTodo(todo?.id)}>{'✅'}</Text>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1.2,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#444',
    marginTop: 10,
  },
  todo: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#444',
    borderRadius: 4,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ccc',
  },
  todoInput: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
    backgroundColor: '#111b',
    borderRadius: 4,
    marginTop: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
});
