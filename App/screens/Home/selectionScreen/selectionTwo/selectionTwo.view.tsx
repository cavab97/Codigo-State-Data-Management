import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../../../components/Button/button';
import {MainColour, SelectMainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {HealthConcernModel} from '../../../../model/data';
import Icon from 'react-native-vector-icons/Feather';
import {showMessage} from 'react-native-flash-message';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {useDispatch} from 'react-redux';
import {postHealthyAdd} from '../../../../redux/Post/Actions';
import {postAdd, postReset} from '../../../../redux/Post/Reducer';

function SelectionOne({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);

  if (!data || !data.screenOneAddedData) {
    return (
      <View>
        <Text> Loading...</Text>
      </View>
    ); // Show loading if the data is undefined
  }
  if (!Array.isArray(data.screenOneAddedData)) {
    return (
      <View>
        <Text>Error: data.screenOneAddedData is not an array</Text>
      </View>
    );
  }
  const [selectHealthData, setSelectHealthData] = useState<
    HealthConcernModel[]
  >(data.screenOneAddedData || []);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the data from the JSON file to state
    console.log(`healtyConcern${JSON.stringify(data.screenOneAddedData)}`);
  }, [selectHealthData]);

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

export default SelectionOne;
