import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IFilterScreen {

}

const FilterScreen = (props: IFilterScreen) => {
    return (
        <View style={styles.screen}>
            <Text>Hello it is a FILTER SCREEN!</Text>
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

export default FilterScreen;