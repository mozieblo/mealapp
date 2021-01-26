import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';

interface ICategoriesScreen {
    navigation: NavigationScreenProp<any, any>
}

const CategoriesScreen = (props: ICategoriesScreen) => {
    const renderGridItems = (dataItem: any) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeal',
                        params: {
                            categoryId: dataItem.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>
                        {dataItem.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderGridItems}
                numColumns={2}
            />
            <Button
                title="Go to Category Meal"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeal'
                    })
                }}
            />
        </View>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'NEW TITLE',
    headerStyle: {
        background: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintStyle: Platform.OS === 'android' ? 'white' : Colors.primatyColor
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        justifyContent: 'space-between',
        width: 150,
        height: 150,
        margin: 15
    }
})

export default CategoriesScreen;