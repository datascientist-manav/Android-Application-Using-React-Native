/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import  {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Divider from 'react-native-divider';

const App = ({children, title})= Node => {
  const [employee,setEmployee] = useState({});
  useEffect(()=>{
    async function getData(){
      const data = await axios.get("http://aamras.com/dummy/EmployeeDetails.json").then(response=>{
        return(
          setEmployee(response.data)
        )
      })
    }
    getData();
  })
  return (
    <View>
      {
        employee.employess.map(employ=>{
          return(
            <View style={{display:'flex',flexDirection:'column'}}>
              <TextInput style={{textAlign:'left',marginTop:3}}>{employ.name}</TextInput>
              <TextInput style={{textAlign:'left',marginTop:3}}>{employ.age}</TextInput>
              <TextInput style={{textAlign:'left',marginTop:3}}>{employ.salary}</TextInput>
              <Divider borderColor="#fff" color="#fff" orientation="center"></Divider>;
            </View>
          )
        }

        )

      }

    </View>
  );
};


export default App;
