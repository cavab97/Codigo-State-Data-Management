import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Button from '../../../../components/Button/button';
import {MainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {RadioButton} from '../../../../components/Ratio';
import {AlcoholCategory} from '../../../../helpers/enum';
import {postRatioUpdate} from '../../../../redux/Post/Reducer';

export function SelectionFour({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedExposureValue, setSelectedExposureValue] = useState<
    boolean | null
  >(null);
  const [selectedSmokeValue, setSelectedSmokeValue] = useState<boolean | null>(
    null,
  );
  const [selectedAcoholValue, setSelectedAcoholValue] =
    useState<AlcoholCategory | null>(null);
  const dispatch = useDispatch();

  const optionsExposure = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];
  const optionsSmoke = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];
  const optionsAcohol = [
    {label: AlcoholCategory.Minimal, value: AlcoholCategory.Minimal},
    {label: AlcoholCategory.Moderate, value: AlcoholCategory.Moderate},
    {label: AlcoholCategory.Heavy, value: AlcoholCategory.Heavy},
  ];
  if (!data || !data.screenFourAddedData) {
    return (
      <View>
        <Text> Loading...</Text>
      </View>
    ); // Show loading if the data is undefined
  }
  if (!Array.isArray(data.screenFourAddedData)) {
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
      <View style={{alignSelf: 'flex-start'}}>
        <Text
          adjustsFontSizeToFit={true}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          Is your daily exposure to sun is limited?
          <Text style={{color: 'red'}}>*</Text>
        </Text>

        <View style={styles.container}>
          <RadioButton
            options={optionsExposure}
            selectedValue={selectedExposureValue}
            onValueChange={(value: any) => {
              const updatedUserHabits = {
                is_daily_exposure: value,
                is_smoke: selectedSmokeValue,
                alcohol: selectedAcoholValue,
              };

              dispatch(postRatioUpdate(updatedUserHabits));
              setSelectedExposureValue(value);
            }}
          />
        </View>
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Text
          adjustsFontSizeToFit={true}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          Do you current smoke (tobacco or marijuana)?
          <Text style={{color: 'red'}}>*</Text>
        </Text>

        <View style={styles.container}>
          <RadioButton
            options={optionsSmoke}
            selectedValue={selectedSmokeValue}
            onValueChange={(value: any) => {
              const updatedUserHabits = {
                is_daily_exposure: selectedExposureValue,
                is_smoke: value,
                alcohol: selectedAcoholValue,
              };

              dispatch(postRatioUpdate(updatedUserHabits));
              setSelectedSmokeValue(value);
            }}
          />
        </View>
      </View>

      <View style={{alignSelf: 'flex-start'}}>
        <Text
          adjustsFontSizeToFit={true}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          Is your daily exposure to sun is limited?
          <Text style={{color: 'red'}}>*</Text>
        </Text>

        <View style={styles.container}>
          <RadioButton
            options={optionsAcohol}
            selectedValue={selectedAcoholValue}
            onValueChange={(value: any) => {
              const updatedUserHabits = {
                is_daily_exposure: selectedExposureValue,
                is_smoke: selectedSmokeValue,
                alcohol: value,
              };

              dispatch(postRatioUpdate(updatedUserHabits));
              setSelectedAcoholValue(value);
            }}
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
        <Button
          $onPress={() =>
            console.log(
              'health_concerns :' + JSON.stringify(data.screenOneAddedData),
              'diets :' + JSON.stringify(data.screenTwoAddedData),
              'health_concerns :' + JSON.stringify(data.screenFourAddedData),
              'allergies :' + JSON.stringify(data.screenThreeAddedData),
            )
          }
          $brColor={MainColour(true).secondaryColour}
          $btrRadius={'10'}
          $btlRadius={'10'}
          $bbrRadius={'10'}
          $bblRadius={'10'}>
          <Text
            style={{fontWeight: 'bold', fontSize: matrix.moderateScale(20)}}>
            Get my personlized vitamin
          </Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
