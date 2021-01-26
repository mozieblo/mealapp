import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { CATEGORIES } from '../data/dummy-data';

interface ICategoryMealScreen {
    navigation: NavigationScreenProp<any, any>
}

const CategoryMealScreen = (props: ICategoryMealScreen) => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat: any) => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>Hello it is a Category Meal SCREEN!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="Go to Meal Details Screen"
                onPress={() => {
                    props.navigation.navigate({routeName: 'MealDetails'})
                }}
            />
            <Button
                title="GO BACK"
                onPress={() => {
                    props.navigation.goBack();
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

export default CategoryMealScreen;