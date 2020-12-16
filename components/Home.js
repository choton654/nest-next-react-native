import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen 🥳</Text>
      <Link style={{ color: 'green', fontSize: 20 }} to="/Auth/User">
        Click me to open user :)
      </Link>

      <Button
        title="Main"
        onPress={() => {
          navigation.navigate('Main');
        }}
      />
    </View>
  );
}

export default HomeScreen;

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
