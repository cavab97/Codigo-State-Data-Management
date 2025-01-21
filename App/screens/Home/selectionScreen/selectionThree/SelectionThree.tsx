import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from '../../../../components/Button/button';
import {MainColour, SelectMainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {postAllergeiesAdd} from '../../../../redux/Post/Reducer';
import {SELECTION_FOUR} from '../../../../navigation/Constants';

export function SelectionThree({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);
  const [searchTerm, setSearchTerm] = useState<any>(undefined);

  const [typing, setTyping] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [substringBack, setSubstringBack] = useState('');

  const [filteredData, setFilteredData] = useState(data.screenThreeStaticData);

  const textInputRef = useRef<TextInput>(null);
  const [isDeletePressed, setIsDeletePressed] = useState(false);
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
  const handleSelectionChange = (event: any) => {
    const {selection} = event.nativeEvent;
    if (!isDeletePressed) {
      setCursorPosition(selection.start); // Update cursor position state
    }
  };
  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Backspace') {
      setIsDeletePressed(true);
    }
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);

    const substringBack = (searchTerm || '').slice(cursorPosition, text.length);
    const substringFront = (text || '').slice(0, cursorPosition);
    if (typing != substringFront) {
      setTyping(substringFront);
      const filtered = data.screenThreeStaticData.filter((item: any) =>
        item.name.toLowerCase().includes(substringFront.toLowerCase()),
      );
      if (filtered.length == 0) {
        const newItem = {name: text.toString() || '', id: Math.random()};

        setFilteredData([newItem]);
      } else {
        setFilteredData(filtered);
      }
    }
  };

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
      <View
        style={{
          justifyContent: 'space-between',
          height: '60%',
        }}>
        <Text
          adjustsFontSizeToFit={true}
          style={{
            fontWeight: 'bold',
            fontSize: matrix.moderateScale(25),
            alignSelf: 'flex-start',
          }}>
          Write any specific allergeies or sensitivity towards specific things.
          (optional)
        </Text>

        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              borderWidth: 0.5,
              borderColor: 'grey',
            }}>
            {data.screenThreeAddedData.map((item, index) => {
              return (
                <Button
                  key={index}
                  $disabbled={true}
                  $borderColor={SelectMainColour(true).borderColor}
                  $brColor={SelectMainColour(true).backgroundColour}
                  $alignItems={'flex-start'}
                  $width={'auto'}
                  $btrRadius={'20'}
                  $btlRadius={'20'}
                  $bbrRadius={'20'}
                  $bblRadius={'20'}
                  $marginRight="2"
                  $marginTop="5">
                  <Text style={{color: SelectMainColour(true).textColour}}>
                    {item.name}
                  </Text>
                </Button>
              );
            })}

            <TextInput
              style={styles.searchInput}
              placeholder="search"
              value={searchTerm}
              onChangeText={handleSearch}
              onKeyPress={handleKeyPress}
              onSelectionChange={handleSelectionChange} // Track cursor position
              selection={
                cursorPosition == -1
                  ? undefined
                  : {start: cursorPosition, end: cursorPosition}
              }
              ref={textInputRef} // Assign ref to the TextInput
            />
          </View>

          <FlatList
            data={filteredData}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              // Check if the item exists in screenThreeAddedData
              const itemExists = data.screenThreeAddedData.some(
                data => data.name === item.name,
              );
              if (itemExists) {
                return null;
              }
              return (
                !itemExists && (
                  <Button
                    key={item.name}
                    $onPress={() => {
                      dispatch(postAllergeiesAdd(item));
                    }}
                    $padding="10"
                    $width="100%"
                    $disabbled={itemExists}
                    $brColor={SelectMainColour(false).backgroundColour}
                    $alignItems={'flex-start'}
                    $alignSelf={'flex-start'}
                    $brWidth="0">
                    <Text style={{color: SelectMainColour(false).textColour}}>
                      {item.name}
                    </Text>
                  </Button>
                )
              );
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
            $onPress={() => navigation.navigate(SELECTION_FOUR)}>
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
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: 10,
    borderRadius: 5,
    width: '20%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
