import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../../components/Button/button';
import {MainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import CheckBox from '@react-native-community/checkbox';

export function SelectionThree({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  if (!data || !data.screenTwoAddedData) {
    return (
      <View>
        <Text> Loading...</Text>
      </View>
    ); // Show loading if the data is undefined
  }
  if (!Array.isArray(data.screenTwoAddedData)) {
    return (
      <View>
        <Text>Error: data.screenOneAddedData is not an array</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        overflow: 'scroll',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D3F3E6',
        justifyContent: 'space-around',
        paddingHorizontal: matrix.horizontalScale(20),
      }}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <View>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          Select the diets you follow.
          <Text style={{color: 'red'}}>*</Text>
        </Text>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'yellow',
            alignItems: 'center',
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>Do you like React Native?</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          height: '15%',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Button $width={'30%'} $onPress={() => navigation.pop()}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: matrix.moderateScale(20),
                color: MainColour(true).secondaryColour,
              }}>
              Back
            </Text>
          </Button>
          <Button $brColor={MainColour(true).secondaryColour} $width={'30%'}>
            <Text
              style={{fontWeight: 'bold', fontSize: matrix.moderateScale(20)}}>
              Next
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
