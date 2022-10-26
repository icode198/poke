import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncerSearch } from '../hooks/useDebouncerSearch';

interface Props {
  style?: StyleProp<ViewStyle>,
  onDebounce?: (value:string) => void,
}

export const SearchInput = ({style, onDebounce}:Props) => {

  const [textValue, setTextValue] = useState('');

  const { debouncerText } = useDebouncerSearch(textValue);

  useEffect(() => {
    //console.log("D", debouncerText);
    onDebounce!(debouncerText);
  }, [debouncerText])

  //console.log("T", textValue);

  return (
    <View style={{...styles.container, ...style as any}}>
      <View style={styles.textInputContainer}>
        <Icon
          color='#065A9C'
          style={{marginHorizontal: 20}}
          name='search-outline'
          size={25}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor='#696869'
          placeholder='Search pokemon by name or id...'
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'grey',
  },
  textInputContainer: {
    flexDirection: 'row',
    //marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 15,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    color: '#065A9C',
    fontSize: 15,
    fontFamily: 'FingerPaint-Regular'
  }

})
