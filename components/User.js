import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const User = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User</Text>
      <Button
        title="post"
        onPress={() => {
          navigation.navigate('Post');
        }}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
