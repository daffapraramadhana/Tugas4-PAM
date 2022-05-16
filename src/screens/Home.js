import React from 'react';
import {
    SafeAreaView,
    View,
    Platform,
    StatusBar,
    Button,
    Image,
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const Home = () =>{
    const [ImageCam,setImageCam] = React.useState(null);

    const openCamera=(props)=>{
    
        const option = {
            mediaType : 'photo',
            quality : 1,
            includeExtra:true,
            saveToPhotos:true,
        }
        launchCamera (option,(res)=>{
            if(res.didCancel){
                console.log("Pengambilan gambar di cancel")
            }
            else if(res.errorCode){
                console.log(res.errorMessage)
            }
            else{
                const data = res.assets[0]
                setImageCam(data)
            }
        })
    }

    return(
        <SafeAreaView>
                <View style={{
                    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0,
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    {ImageCam===null
                        ? <Button title='Click to Take a Picture' onPress={openCamera} />
                        : <Image source={{uri:ImageCam}} style={{flex:1}} />
                    }
                </View>
        </SafeAreaView>
    );
};

export default Home;