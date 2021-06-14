import React from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';
// redux
import { useSelector } from 'react-redux';
//components
import RepoCard from './RepoCard';

const RepoList = () => {
    const data = useSelector(state => state.data)
    
    if(data.length > 1){
        console.log(data);
    return(
        <View>
            <FlatList 
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={(item, index) => {
                    return (
                        <RepoCard item={item} index={index}/>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* {data.map((item, index) => {
                return (
                    <RepoCard />
                )
            })} */}
           {!data && <ActivityIndicator size="large" color="#deb887" />}
        </View>
    )
    } else return (
        <View>
            {/* TODO PRELOADER NEED */}
            <Text>You need to type name of user</Text>
        </View>
    );
}

export default RepoList;

