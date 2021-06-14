import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, StatusBar } from 'react-native';
// Components
import  Header  from '../components/Header';
import Search from '../components/Search';
import RepoList from '../components/RepoList';
import Logo from '../components/Logo/Logo';

const { width, height } = Dimensions.get("window");

export const MainPage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.top_content}>
                <View style={styles.top_text}>
                    <View style={styles.with_logo}>
                        <View style={styles.logo}>
                            <Logo />
                        </View>
                        <Header  
                            companyName="equestum"
                            companyRespons="web development company"
                        />   
                    </View>
                    <View style={styles.with_app_name}>
                        <Text style={styles.app_name}>Github users search app</Text>
                    </View>
                    <View style={styles.divider}></View>
                </View>  
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
        flexDirection: 'row',
        alignItems:'center'
    },
    logo: {
        marginTop: height / 20,
        marginRight: width / 20
    },
    with_logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: width / 20,
    },
    with_app_name:{
        width: width,
        alignItems: 'center',
        marginBottom: 20
    },
    app_name:{
        fontSize: 18,
        color: '#fbf5c9',
    },
    top_text:{
        flexDirection: 'column',
        marginRight: 20
    },
    divider: {
        height: 1,
        width: width / 1.1,
        backgroundColor: '#deb887',
        marginLeft:"auto",
        marginRight: 7
    },
    main_content:{
        flex: 2,
        marginTop: height / 15,
        // backgroundColor: 'green',
        width: width,
        alignItems: 'center'
    },
    bottom_content: {
        flex: 3
    }
})