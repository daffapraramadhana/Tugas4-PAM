import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
//screen Import
import Home from '../screens/Home';
import Select from "../screens/Select";

const Tab=createBottomTabNavigator();

const NavBar = () =>{
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {position: 'absolute'},
                tabBarStyle: {height:70},
                tabBarInactiveTintColor: "#C4C4C4",
                tabBarActiveTintColor: "#C789DF",
            }}>
            <Tab.Screen 
                name="Ambil Gambar"
                component={Home}
                options={{
                    tabBarStyle:({color, size}) =>(
                        <Icon name='camera' size={20} />
                    )
                }}
            />
            <Tab.Screen 
                name="Pilih Gambar"
                component={Select}
                options={{
                    tabBarStyle:({color, size}) =>(
                        <Icon name='image' size={20} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default NavBar;