import React, { Component } from "react"
// import keys from './../components/global';
import { StyleSheet, Text, View, ScrollView, Picker, TouchableOpacity, Image, AsyncStorage } from "react-native";
// import { Notifications } from "expo";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import * as Permissions from "expo-permissions";
import { Button } from 'react-native';
// import { StackActions, NavigationActions } from 'react-navigation';
// import Axios from "axios";




export default class newEvent extends Component {
    constructor() {

        super();
        this.state = {

        }


    }




    render() {
        return (

            <Text style={{ color: "black" }}>New event</Text>
        );
    }


}

// Estilos de DetalleCancelación
const styles = StyleSheet.create({

    area: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },


});
