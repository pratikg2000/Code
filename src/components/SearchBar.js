import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search repositories..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={() => onSearch(query)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});

export default SearchBar;
