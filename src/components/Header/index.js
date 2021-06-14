import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const Header = ({companyName, companyRespons, appName}) => {
    const upperCaseName = companyName.toUpperCase();
    const companyHeader = upperCaseName.charAt(0).toLowerCase() + upperCaseName.slice(1);
    console.log(companyHeader)
    return (
        <View style={styles.main_wrapper}>
            <Text style={styles.text_header}>
                {companyHeader}
            </Text>
            <Text style={styles.text}>
                {companyRespons}
            </Text>
            <Text style={styles.text}>
                 {appName}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main_wrapper:{
        alignItems: 'center'
    },
    text_header:{
        marginTop: height / 17,
        fontSize: 30,
        fontWeight: '500',
        color: '#deb887',
        marginBottom: 2
    },
    text: {
        color: '#deb887',
    }

});

export default Header;
