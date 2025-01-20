import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../../components/Button/button';
import {MainColour} from '../../../helpers/colors';
import {matrix} from '../../../helpers';
function SelectionOne({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D3F3E6',
        justifyContent: 'space-evenly',
        paddingHorizontal: matrix.horizontalScale(20),
      }}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(30),
          alignSelf: 'flex-start',
        }}>
        Select the top health concerns.
        <Text style={{color: 'red'}}>*</Text>
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(30),
          alignSelf: 'flex-start',
        }}>
        (upto 5)
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(18),
          alignSelf: 'flex-start',
        }}>
        Hello, we are here to make your life healthier and happier
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(18),
          alignSelf: 'flex-start',
          color: 'grey',
        }}>
        We will ask couple of quetions to better userstand your vitamin need.
      </Text>
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
          <Button $width={'30'}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: matrix.moderateScale(20),
                color: MainColour(true).secondaryColour,
              }}>
              Back
            </Text>
          </Button>
          <Button $brColor={MainColour(true).secondaryColour} $width={'30'}>
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

export default SelectionOne;
