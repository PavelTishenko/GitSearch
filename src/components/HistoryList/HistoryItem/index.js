import React from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    StyleSheet,
} from 'react-native';

const HistoryItem = ({item}) => {
    return(
        <View style={styles.content_wrapper}>
            <Text style={styles.content_text}>{item.item}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content_wrapper:{
        marginBottom: 5
    },
    content_text: {
        color: 'white'
    }

});

export default HistoryItem;
