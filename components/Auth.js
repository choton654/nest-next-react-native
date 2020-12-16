import { useLinkTo } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';

const AuthScreen = ({ navigation }) => {
  const linkTo = useLinkTo();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Auth Screen</Text>
      <Link style={{ color: 'green', fontSize: 20 }} to="/Auth/Post">
        Click me to open post :)
      </Link>

      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Home', { screen: 'Profile' });
        }}
      />
    </View>
  );
};

export default AuthScreen;

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
