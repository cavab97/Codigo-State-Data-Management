import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../../components/Button/button';
import {MainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import CheckBox from '@react-native-community/checkbox';
import {ICategory} from '../../../../model/data';
import {postDietAdd, postDietReset} from '../../../../redux/Post/Reducer';
import {SELECTION_THREE} from '../../../../navigation/Constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Tooltip from 'react-native-walkthrough-tooltip';

export function SelectionTwo({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);
  const [toolTipVisible, setToolTipVisible] = useState(Number);

  const dispatch = useDispatch();

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
        <View>
          {data.screenTwoStaticData.map((IDiet: ICategory, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 8,
                }}>
                <CheckBox
                  disabled={false}
                  value={data.screenTwoAddedData.some(
                    addedData => IDiet.id === addedData.id,
                  )}
                  onValueChange={() => {
                    const indexToRemove = data.screenTwoAddedData.findIndex(
                      item => item.id === IDiet.id,
                    );
                    if (indexToRemove !== -1) {
                      const newData = [...data.screenTwoAddedData];
                      newData.splice(indexToRemove, 1);
                      dispatch(postDietReset(newData));
                    } else {
                      dispatch(postDietAdd(IDiet));
                    }
                  }}
                />
                <Text>{IDiet.name} </Text>
                <Tooltip
                  topAdjustment={-20}
                  isVisible={toolTipVisible == IDiet.id}
                  content={<Text>{IDiet.tool_tip}</Text>}
                  placement="right"
                  onClose={() => setToolTipVisible(-1)} // Close the tooltip
                >
                  <TouchableOpacity onPress={() => setToolTipVisible(IDiet.id)}>
                    <Icon name="exclamation" size={15} color="grey" />
                  </TouchableOpacity>
                </Tooltip>
              </View>
            );
          })}
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
          <Button
            $brColor={MainColour(true).secondaryColour}
            $width={'30%'}
            $onPress={() => navigation.navigate(SELECTION_THREE)}>
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
