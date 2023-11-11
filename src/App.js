/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
//import * as ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import camera from './Components/Camera';
// import ChooseFromGallery from './Components/ChooseFromGallery';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const isdarkMode = useColorScheme() === 'dark';
  const [imageSource, setImageSource] = useState(null);

  const launchCameraHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Response = ', response);
        setImageSource({uri: response.assets[0].uri});
      }
    });
  };

  const chooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Response = ', response);
        setImageSource({uri: response.assets[0].uri});
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={isdarkMode ? Colors.light : Colors.dark} />
      <View>
        {imageSource && (
          <Image
            source={imageSource}
            style={{
              width: 350,
              height: 350,
              borderRadius: 11750,
              marginBottom: 20,
            }}
          />
        )}
      </View>
      <View style={{flexDirection: 'row', marginBottom: -100}}>
        <Button title="Launch Camera" onPress={launchCameraHandler} />
        <Text> </Text>
        <Button title="Choose Photo" onPress={chooseImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
