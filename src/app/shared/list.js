import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const List = ({props}) => {
  return (
    <FlatList
      data={props}
      renderItem={({item}) => (
        <TouchableOpacity>
          <Text>Hello!</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default List;
