import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Todos} from './Todos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Todos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
