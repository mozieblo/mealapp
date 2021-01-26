import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationScreenProp} from "react-navigation";

interface IMealDetailsScreen {
    navigation: NavigationScreenProp<any, any>
}

const MealDetailsScreen = (props: IMealDetailsScreen) => {
    return (
        <View style={styles.screen}>
            <Text>Hello it is a MEAL DETAILS SCREEN!</Text>
            <Button
                title="GO BACK TO START"
                onPress={() => {
                    props.navigation.popToTop('Categories')
                }}
            />
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

export default MealDetailsScreen;