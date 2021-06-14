import React, {useState, useEffect, useCallback} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    StyleSheet,
    TextInput
} from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadData, writeName } from '../../../redux/actions';
// service
import { getUserData } from '../../../services';
// lodash
import { debounce } from 'lodash';
//  AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const TInput = ({placeholder}) => {
    const dispatch = useDispatch();
    const historyData = useSelector(state => state.typedNames);
    const savedData = useSelector(state => state.savedHistory);
    const [name, setName] = useState('');
    const saveData = async (value) => {
        try {
            const val = JSON.stringify(value);
            console.log('Save data');
            await AsyncStorage.setItem('history', val);
        } catch (error) {
            console.log(error);
        }
    };
    const onDataGet = (text) => {
        dispatch(writeName(text));
        setName(text);
        if(text.length > 1) {
            getUserData(text)
            .then(res => {
                dispatch(loadData(res.data));  
            })
        }
    };
    useEffect(() => {
        historyData.length && saveData([...savedData, ...historyData]);
    },[name]);
    const handler = useCallback(debounce(onDataGet, 2000 ), []);
    return(
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={text => {
                handler(text)
            }}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        height: 30,
        
    }
});

export default TInput;
