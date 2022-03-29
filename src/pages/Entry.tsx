import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EntryScreenProps} from 'types/types';

function Entry({navigation}: EntryScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>Entry</Text>
      </View>
    </SafeAreaView>
  );
}

export default Entry;
