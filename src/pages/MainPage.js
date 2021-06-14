import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
// Components
import  Header  from '../components/Header';
import Search from '../components/Search';
import RepoList from '../components/RepoList';

const { width, height } = Dimensions.get("window");

export const MainPage = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.top_content}>
                <Header  
                    companyName="equestum"
                    companyRespons="web development company"
                    appName="Github search app"
                />                
                <View style={styles.divider}></View>
            </View>
            
            <View style={styles.main_content}>
                <Search />
            </View>
            <View style={styles.bottom_content}>
                <RepoList  />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#404040',
        // display: 'flex',
        alignItems: 'center',
    },
    top_content: {
        flex: 1,
        alignItems:'center'
    },
    divider: {
        height: 1,
        width: width / 1.1,
        backgroundColor: '#deb887'
    },
    main_content:{
        flex: 2,
        // backgroundColor: 'green',
        width: width,
        alignItems: 'center'
    },
    bottom_content: {
        flex: 3
    }
})