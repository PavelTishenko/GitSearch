import React, { useEffect, useState } from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    StyleSheet,
    FlatList,
} from 'react-native';
// Components
import HistoryItem from './HistoryItem';
// redux
import { useSelector, useDispatch } from 'react-redux';
import {setHistoryData} from '../../redux/actions';
//  AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");

const HistoryList = ({}) => {
    const dispatch = useDispatch();
    const [history, setHistory] = useState([]);
    const historyData = useSelector(state => state.typedNames);

    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('history');
            if(data !== null){
                dispatch(setHistoryData(JSON.parse(data)));
                setHistory(JSON.parse(data));
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, [historyData]);
   
    return (
        <FlatList 
            data={history}
            renderItem={(item, index) => {
                return(
                    <HistoryItem item={item} index={index}/>
                    // <Text>1</Text>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            scrollEnabled={false}
        />
    );
}

const styles = StyleSheet.create({
    list:{
        marginTop: 10,
    }
});

export default HistoryList;
