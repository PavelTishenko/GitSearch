import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';


const Logo = () => {
    return(
        <Image style={styles.logo} source={require('../../../Images/Logo.png')} />
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 100
    }

});

export default Logo;