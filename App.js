import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
        paddingTop: 20
    },
    bgimage: {
      flex: 1,
        width: null
    }
});