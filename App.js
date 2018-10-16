import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.body}>
            <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
                    <View style={styles.infoArea}>
                        <View style={styles.area}>
                            <Text style={styles.areaTitulo}>Meta</Text>
                            <Text style={styles.areaDado}>2000ml</Text>
                        </View>

                        <View style={styles.area}>
                            <Text style={styles.areaTitulo}>Consumido</Text>
                            <Text style={styles.areaDado}>500ml</Text>
                        </View>

                        <View style={styles.area}>
                            <Text style={styles.areaTitulo}>Status</Text>
                            <Text style={styles.areaDado}>Horrivel</Text>
                        </View>
                </View>
                <View styles={styles.pctArea}>
                    <Text style={styles.pctText}>25%</Text>
                </View>
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
    },
    infoArea: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 70
    },
    area: {
      flex: 1,
      alignItems: 'center'
    },
    areaTitulo: {
      color: '#45b2fc'
    },
    areaDado: {
        color: '#2b4274',
        fontSize: 15,
        fontWeight: 'bold'
    },
    pctArea: {
        marginTop: 100,
        alignItems: 'center'
    },
    pctText: {
        fontSize: 70,
        color: '#FFFFFF',
        backgroundColor: 'transparent'
    }
});