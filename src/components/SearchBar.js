import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            placeholder="Search..."
            style={styles.inputStyles}
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmitted}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15
    },
    inputStyles: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;