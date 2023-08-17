import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchResult(){
    return(
        <View style={styles.container}>
            <Text>Search Result</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1
    }
})