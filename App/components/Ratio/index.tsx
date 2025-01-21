import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const RadioButton = ({options, selectedValue, onValueChange}: any) => {
  return (
    <View>
      {options.map(
        (
          option: {
            value: any;
            label: any;
          },
          index: React.Key | null | undefined,
        ) => (
          <TouchableOpacity
            key={index}
            style={styles.radioContainer}
            onPress={() => onValueChange(option.value)}>
            <View style={styles.outerCircle}>
              {selectedValue === option.value && (
                <View style={styles.innerCircle} />
              )}
            </View>
            <Text style={styles.radioText}>{option.label}</Text>
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  radioText: {
    fontSize: 16,
  },
});
