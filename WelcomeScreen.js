import { Component } from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={emailId:'', password:''}
    }

userLogIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(()=>{
        return Alert.alert("Successfully Logged In")
    })
    .catch((error)=>{
        var errorCode= error.code
        var errorMessage= error.message
        return Alert.alert(errorMessage)
    })
}

userSignUp=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then((response)=>{
        return Alert.alert("User Added Successfully")
    })
    .catch((error)=>{
        var errorCode= error.code
        var errorMessage= error.message
        return Alert.alert(errorMessage)
    })
}

render(){
    return(
        <View style={styles.container}>
        <View style={styles.profileContainer}>
        <SantaClaus/>
        <Text style={styles.text}>Book Santa</Text>
        </View>    
        <View style={styles.buttonContainer}>
        <TextInput 
        style={styles.loginBox}
        placeholder="example@santa.com"
        placeholderTextColor="#ffff"
        keyboardType='email-adress'
        onChangeText={(text)=>{
            this.setState({
                emailId:text
            })
        }}
        />
        <TextInput 
        style={styles.loginBox}
        placeholder="password"
        secureTextEntry={true}
        placeholderTextColor="#ffff"
        keyboardType='email-adress'
        onChangeText={(text)=>{
            this.setState({
                password:text
            })
        }}
        />
        <TouchableOpacity style={[styles.button, {marginBottom:20, marginTop:20}]} 
        onPress={()=>{
            this.userLogIn(this.state.emailId, this.state.password)
        }}
        >
        <Text style={styles.buttonText}>
        LogIn
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={()=>{
            this.userSignUp(this.state.emailId, this.state.password)
        }}
        >
        <Text style={styles.buttonText}>
        SignIn
        </Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
}