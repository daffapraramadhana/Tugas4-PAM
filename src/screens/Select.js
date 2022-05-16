import React from 'react';
import {
    SafeAreaView,
    Platform,
    StatusBar,
    Text,
    View,
} from 'react-native';

const Select =()=>{
    return(
        <SafeAreaView>
            <View style={{height:Platform.OS==='android'?StatusBar.currentHeight:0}} />
            <Text>Pilih Gambar</Text>
        </SafeAreaView>
    );
};

export default Select;