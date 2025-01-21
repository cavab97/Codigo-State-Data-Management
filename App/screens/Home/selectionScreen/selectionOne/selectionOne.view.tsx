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

  const renderItem = ({item, drag, isActive}: any) => {
    console.log(`item${JSON.stringify(item)}`);
    return (
      <ScaleDecorator>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: '#E9FAF3',
            padding: 5,
            marginBottom: 5,
            borderRadius: 10,
          }}
          onLongPress={drag}>
          <Button
            $disabbled={true}
            $borderColor={SelectMainColour(true).borderColor}
            $brColor={SelectMainColour(true).backgroundColour}
            $alignItems={'center'}
            $width={'auto'}
            $btrRadius={'20'}
            $btlRadius={'20'}
            $bbrRadius={'20'}
            $bblRadius={'20'}>
            <Text style={{color: SelectMainColour(true).textColour}}>
              {item.name}
            </Text>
          </Button>
          <Icon name="menu" size={25} color="grey" />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

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
          Select the top health concerns.
          <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          (upto 5)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.screenOneStaticData.map(
            (healthConcernData: HealthConcernModel, index: number) => {
              const isSelected = data.screenOneAddedData.some(
                item => item.id === healthConcernData.id,
              );

              return (
                <Button
                  $borderColor={SelectMainColour(isSelected).borderColor}
                  $brColor={SelectMainColour(isSelected).backgroundColour}
                  $alignItems={'center'}
                  $width={'auto'}
                  $brWidth={'0.5'}
                  $marginRight={'15'}
                  $marginTop={'5'}
                  $btrRadius={'15'}
                  $btlRadius={'15'}
                  $bbrRadius={'15'}
                  $bblRadius={'15'}
                  $onPress={() => {
                    if (!data.screenOneAddedData.includes(healthConcernData)) {
                      if (data.screenOneAddedData.length < 5) {
                        dispatch(postAdd(healthConcernData));
                      } else {
                        showMessage({
                          message: 'Reached Maximun.',
                          type: 'danger',
                        });
                      }
                    } else {
                      const indexToRemove = data.screenOneAddedData.findIndex(
                        item => item.id === healthConcernData.id,
                      );
                      if (indexToRemove !== -1) {
                        const newData = [...data.screenOneAddedData];
                        newData.splice(indexToRemove, 1);
                        dispatch(postReset(newData));
                      }
                    }
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontWeight: 'bold',
                      fontSize: matrix.moderateScale(12),
                      color: SelectMainColour(isSelected).textColour,
                    }}>
                    {healthConcernData.name}
                  </Text>
                </Button>
              );
            },
          )}
        </View>
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
          }}>
          Prioritize
        </Text>

        <View style={{flex: 0, height: 300, backgroundColor: 'purple'}}>
          <DraggableFlatList
            dragItemOverflow={true}
            containerStyle={{backgroundColor: 'yellow', flex: 0}}
            data={data.screenOneAddedData}
            onDragEnd={({data}) => dispatch(postReset(data))}
            keyExtractor={(item, index) => `draggable-item-${item.name}`}
            renderItem={renderItem}
          />
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

export default SelectionOne;
