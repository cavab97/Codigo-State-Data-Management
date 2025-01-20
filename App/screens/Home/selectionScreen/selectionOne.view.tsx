import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../../../components/Button/button';
import {MainColour, SelectMainColour} from '../../../helpers/colors';
import {matrix} from '../../../helpers';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {HealthConcernModel} from '../../../model/data';
function SelectionOne({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);

  useEffect(() => {
    // Set the data from the JSON file to state
    console.log(`healtyConcern${data.screenOneStaticData}`);
  }, []);

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
            (healthConcernData: HealthConcernModel) => {
              return (
                <Button
                  $borderColor={SelectMainColour(false).borderColor}
                  $alignItems={'center'}
                  $width={'auto'}
                  $brWidth={'0.5'}
                  $marginRight={'15'}
                  $marginTop={'5'}
                  $btrRadius={'15'}
                  $btlRadius={'15'}
                  $bbrRadius={'15'}
                  $bblRadius={'15'}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontWeight: 'bold',
                      fontSize: matrix.moderateScale(12),
                      color: SelectMainColour(false).textColour,
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
        <View></View>
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
