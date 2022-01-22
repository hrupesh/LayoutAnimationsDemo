import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Animated, {
  FlipInXUp,
  FlipOutXDown
} from 'react-native-reanimated';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
      <View style={styles.counterContainer}>
        <Animated.View
          key={count}
          style={styles.counterFlip}
          entering={FlipInXUp.springify()}
          exiting={FlipOutXDown.springify()}>
          <Text style={styles.counterText}>{count}</Text>
        </Animated.View>
        <TouchableOpacity
          style={[styles.button, styles.subBtn]}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>{'-'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.addBtn]}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>{'+'}</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  counterContainer: {
    height: 100,
    backgroundColor: '#EEE',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 8,
    overflow: 'hidden',
    paddingVertical: 8,
  },
  counterText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 54,
    letterSpacing: 2,
    lineHeight: 64,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#111',
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subBtn: {left: 6},
  addBtn: {right: 6},
  btnText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 54,
    lineHeight: 56,
  },
  counterFlip: {
    backgroundColor: '#000',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    borderRadius: 6,
  },
});
