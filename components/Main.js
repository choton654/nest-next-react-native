import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

// function Button({ text, onPress }) {
//   return (
//     <Text
//       style={{
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: "black",
//         color: "white",
//         margin: 20,
//       }}
//       onPress={onPress}
//     >
//       {text}
//     </Text>
//   );
// }

function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main! 🏋️‍♀️</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

export default Main;

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
