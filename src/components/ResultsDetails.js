import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultDetails = ({ result }) => {
    return <View style={styles.container}>
        <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Rating {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default ResultDetails;