import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IFavoritesScreenScreen {

}

const FavoritesScreen = (props: IFavoritesScreenScreen) => {
    return (
        <View style={styles.screen}>
            <Text>Hello it is a Favorites SCREEN!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;