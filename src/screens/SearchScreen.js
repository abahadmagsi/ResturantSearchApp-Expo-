import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'



const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();


    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }



    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <SearchBar
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmitted={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList tittle="Cost Effective" results={filterResultsByPrice('$')} navigation={navigation} />
            <ResultsList tittle="Big Pricier" results={filterResultsByPrice('$$')} navigation={navigation} />
            <ResultsList tittle="Big Spender" results={filterResultsByPrice('$$$')} navigation={navigation} />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen