import React from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get("window");

const RepoCard = ({item, index}) => {
    return(
        <View style={styles.card_container}>
            <View style={styles.card_content}>
                <Text style={styles.content_text_bold}>{item.item.name}</Text>
                <Text style={styles.content_language}>
                    Language:
                    <Text style={styles.content_text_bold}> {item.item.language}</Text>
                </Text>
                <Text style={styles.content_text}>{item.item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: width / 1.1,
        height: 'auto',
        marginBottom: 15,
        borderRadius: 10
    },
    card_content:{
        alignItems:'flex-start',
        width: '100%',
        marginLeft: 5,
        flexWrap: 'nowrap',
        padding: 10 
    },
    content_text: {
        padding: 3
    },
    content_text_bold: {
        padding: 3,
        fontWeight: 'bold'
    },
    content_language: {
        padding: 3
    }

});

export default RepoCard;
