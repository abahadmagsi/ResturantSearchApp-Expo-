import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, FlatList, ScrollView } from 'react-native'
import yelpApi from '../api/yelpApi'
const ResultShowScreen = ({ navigation, route }) => {
    const [result, setResult] = useState(null)
    const id = route.params.id


    const getResult = async (id) => {
        const response = await yelpApi.get(`/${id}`)
        setResult(response.data)
    }


    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null;
    }
    return <View style={styles.container}>

        <Text style={styles.name}>{result.name}</Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Text style={styles.closed}>{result.is_closed ? 'Closed' : 'Open'}</Text>
            <Text style={styles.phone}>Phone {result.display_phone}</Text>



            {
                result.photos.map((imgSrc, ind) => {
                    return <Image source={{ uri: imgSrc }} style={styles.imgStyle} key={ind} />
                })
            }

            <Text style={styles.review}>{result.review_count} Review {result.rating} / 10</Text>
            {
                result.location.display_address.map((add, ind) => {
                    return <Text style={styles.add} key={ind}> Address : {add}</Text>
                })
            }
        </ScrollView>
        {/* <FlatList
            showsHorizontalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image source={{ uri: item }} style={styles.imgStyle} />
            }}
        /> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    imgStyle: {
        width: '100%',
        height: 200,
        flex: 1,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 8,
        alignSelf: 'center',

    },
    name: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    closed: {
        color: 'grey',
        fontSize: 20,
        alignSelf: 'center',

    },
    phone: {
        color: 'grey',
        fontSize: 20,
        alignSelf: 'center',

    },
    review: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'grey',
        alignSelf: 'center',

    },
    add: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',

    }
})

export default ResultShowScreen