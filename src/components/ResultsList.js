import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultsDetails'


const ResultsList = ({ tittle, results, navigation }) => {

    if (!results.length) {
        return null;
    }


    return <View style={styles.container}>
        <Text style={styles.tittleStyle}>{tittle}</Text>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', { id: item.id })}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>)
            }}
        />

    </View>
}


const styles = StyleSheet.create({
    tittleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5

    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList;