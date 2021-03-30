import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
      padding: 15
  }
});

export default PickerItem;