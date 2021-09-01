import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./src/assets/icons/logo.png')} />
        <Text style={styles.logoText}>Productbox</Text>
      </View>

      {/* social buttons */}
      <View style={styles.socialButtonsContainer}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('10'),
    backgroundColor: 'red',
  },

  logoContainer: {
    height: hp(20),
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    marginTop: hp(1),
    fontSize: wp(5),
    fontWeight: '500',
    color: 'blue',
  },

  socialButtonsContainer: {},
});
