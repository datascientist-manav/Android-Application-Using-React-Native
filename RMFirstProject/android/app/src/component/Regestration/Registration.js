import {View,Text,StyleSheet, TextInput, Button} from "react-native";
import React, { useState } from "react";
import UserDetails from "../UserDetails/UserDetails.components";

const Registration = ({navigation})=>{
    const [name,setName] = useState();
    const [dob,setDob] = useState();
    const [email,setEmail] = useState();
    const [data,setData] = useState({userdata:{useremail:"",username:"",month:"",day:"",year:""}});
    const[month,setMonth] = useState();
    const[day,setDay] = useState();
    const[year,setYear] = useState();
    
    const handleSubmit = ()=>{
        setData({...data,userdata:{
            useremail:email,
            username:name,
            month:month,
            day:day,
            year:year
        }})
        navigation.navigate("UserDetails",{state:`${data}`});
    }
    return(
        <View style={styles.mainContainer}>
            <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Welcome User</Text>
            <Text style={{color:"grey",fontSize:8}}>Please enter your details.</Text>
            <View>
            <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Name</Text>
            <TextInput value={name} onChangeText={(actualData)=>{
                setName(actualData);
            }} style={styles.inputStyle} autoCapitalize="none" autoCorrect= {false}/>
            </View>
            <View>
            <View>
            <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Birth Date</Text>
            </View>
            <View style={styles.dobStyle}>
            <TextInput value={month} onChangeText={(actualData)=>{setMonth(actualData)}} style={styles.inputStyle}/>
            <TextInput value={day} onChangeText={(actualData) =>{setDay(actualData)}} style={styles.inputStyle}/>
            <TextInput value={year} onChangeText={(actualData)=>{setYear(actualData)}} style={styles.inputStyle}/>
            </View>
            </View>
            <View>
            <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Email Id</Text>
            <TextInput value={email} onChangeText={(actualData)=>{
                setEmail(actualData);
            }} keyboardType="email-address" style={styles.inputStyle} autoCapitalize="none" autoCorrect= {false} />
            </View>
            <View>
            <Button onPress={handleSubmit} title="Submit" style={styles.buttonStyle} accessibilityLabel="Submit the details"/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle:{
        borderWidth:1,
        borderColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius:1,
        fontFamily: "regular",
        fontSize:18,
        marginTop:10,
    },
    buttonStyle:{
        borderWidth:1,
        borderColor: "black",
        color:"orange",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius:1,
        fontFamily: "regular",
        fontSize:18,
        textAlign:"center",
        marginTop:10,


    },
    dobStyle:{
        display:"flex",
        flexDirection:"row",
        maxWidth:100,
    }

})
export default Registration;