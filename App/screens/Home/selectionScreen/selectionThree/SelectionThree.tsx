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
import {MainColour} from '../../../../helpers/colors';
import {matrix} from '../../../../helpers';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {Input} from 'antd-mobile';

export function SelectionThree({navigation}: any) {
  const data = useSelector((state: RootState) => state.post);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data.screenThreeStaticData);
  const textInputRef = useRef<TextInput>(null);

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
  const handleSearch = (text: string) => {
    setSearchTerm(text);

    const filtered = data.screenThreeStaticData.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredData(filtered);
  };
  const activatePlaceholder = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
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
      <View>
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
          <TextInput
            style={styles.searchInput}
            placeholder="Search here.."
            value={searchTerm}
            onChangeText={handleSearch}
            ref={textInputRef} // Assign ref to the TextInput
          />

          <FlatList
            data={filteredData}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
              </View>
            )}
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
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    width: '20%',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
