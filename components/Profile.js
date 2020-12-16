import { CommonActions, useLinkTo } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
function Button({ text, onPress }) {
  return (
    <Text
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'black',
        color: 'white',
        margin: 20,
      }}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}

function Profile({ navigation }) {
  const linkTo = useLinkTo();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile! 🏋️‍♀️</Text>
      <Button
        text="👈 Go back"
        onPress={() => {
          navigation.dispatch(CommonActions.goBack());
        }}
      />
      {/* <Button
        text="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});
