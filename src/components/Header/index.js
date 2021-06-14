import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get("window");

const Header = ({companyName, companyRespons, appName}) => {
    const upperCaseName = companyName.toUpperCase();
    return (
        <View style={styles.main_wrapper}>
            <Text style={styles.text_header}>
                {/* <Text style={styles.first_latter}>r</Text> */}
                <Image source={require("../../../Images/req.png")} />
            </Text>
            <Text style={styles.text}>
                {companyRespons}
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    main_wrapper:{
        alignItems: 'center'
    },
    text_header:{
        marginTop: height / 12,
        width: width / 2.2
        // fontSize: 30,
        // fontWeight: '500',
        // color: '#deb887',
        // marginBottom: 1
    },
    text: {
        color: '#fbf5c9',
    },
    first_latter:{
        fontSize: 40
    }

});

export default Header;
