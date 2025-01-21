import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../components/Button/button';
import {MainColour} from '../../helpers/colors';
import {matrix} from '../../helpers';
import {SELECTION_ONE} from '../../navigation/Constants';
function HomeView({navigation}: any) {
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
        Welcome to DailyVita
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(18),
          alignSelf: 'flex-start',
        }}>
        Hello, we are here to make your life healthier and happier
      </Text>

      <Image
        source={require('../../assets/images/introImage.png')}
        resizeMode="contain"
        style={{
          width: matrix.horizontalScale(250),
          height: matrix.verticalScale(250),
        }}
        borderRadius={10}
      />
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
        <Button
          $onPress={() => navigation.navigate(SELECTION_ONE)}
          $brColor={MainColour(true).secondaryColour}
          $btrRadius={'10'}
          $btlRadius={'10'}
          $bbrRadius={'10'}
          $bblRadius={'10'}>
          <Text
            style={{fontWeight: 'bold', fontSize: matrix.moderateScale(20)}}>
            Get Started
          </Text>
        </Button>
      </View>
    </View>
  );
}

export default HomeView;
