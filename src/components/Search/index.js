import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
// Components
import TInput from '../Shared/TInput';
import HistoryList from '../../components/HistoryList';
const { width, height } = Dimensions.get("window");

const Search = () => {
    return (
        <View style={styles.main_container}>
            <TInput placeholder="Search" />
            <Text style={styles.history_head}>Search history:</Text>
            <HistoryList />
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        width: width/1.1,
        marginTop: 10
    },
    history_head: {
        fontWeight: 'bold',
        color: 'white',
        marginTop: 18
    }
});

export default Search;
