import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Post = ({ navigation }) => {
  // const [data, setdata] = useState();
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/post')
  //     .then(res => res.json())
  //     .then(data => setdata(data));
  // }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post</Text>
      <Button
        title="Auth"
        onPress={() => {
          navigation.navigate('Auth');
        }}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
