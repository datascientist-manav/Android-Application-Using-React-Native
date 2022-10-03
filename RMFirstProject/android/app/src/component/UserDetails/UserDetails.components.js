
import {View,Text,StyleSheet} from "react-native";
import React, { useState } from "react";
import Divider from 'react-native-divider';
const UserDetails = ({route,navigation})=>{
    const usersdata = route.params.state;
    const [listData,setListData] = useState([usersdata]);
    
    return (
        <View>
            <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Regestration Successful</Text>
            <Text style={{color:"grey",fontSize:8}}>Your Details are Submitted successfully</Text>
            <View style={styles.attributes}>
            <Text style={{maxWidth:20}}>Name</Text>
            <Text style={{maxWidth:10}}>BirthDay</Text>
            <Text style={{maxWidth:30}}>Email Id</Text>
            </View>
            <View>
                {
                listData.map(list => {
                    return(
                        // here we will divide the data fields using a divider
                        // i have flex through row and so first divider will divide each data vertically 
                        // and then after it will divide horizontally

                <View style={styles.containerMargin}>
                 <View style={styles.datacontainer}>
                    <View style={{maxWidth:20}}>
                     <Text>{list.usersdata.userdata.username}</Text>
                    </View>
                    <Divider borderColor="#fff" color="#fff" orientation="center"></Divider>;
                    <View style={styles.birthdate}>
                    <Text>{list.usersdata.userdata.month}"\"{list.usersdata.userdata.day}"\"{list.usersdata.userdata.year}</Text>
                    </View>
                    <Divider borderColor="#fff" color="#fff" orientation="center"></Divider>;
                    <View style={{maxWidth:30}}>
                    <Text>{list.usersdata.userdata.useremail}</Text>
                    </View>
                    
                </View>
                <Divider borderColor="#fff" color="#fff" orientation="center"></Divider>;
                </View>
                    )
                })
            }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    datacontainer:{
        display:"flex",
        flexDirection:"row",
        maxWidth:50,
    },
    attributes:{
        display:"flex",
        flexDirection:"row",
        maxWidth:50,

    },
    birthdate:{
        textAlign:"center",
        fontSize:6,
        fontWeight:"bold",
        maxWidth:10,


    },
    containerMargin:{
        borderWidth:10,
        borderColor:"black",
        borderStyle:"solid",
        maxHeight:120,
        maxWidth:50,
    }

})

export  default UserDetails;