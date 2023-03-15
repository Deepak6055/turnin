import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const MyImagePicker = () => {
  const [image, setImage] = useState(null);

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.uri) {
        setImage(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
