/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FormLabel,
   FormInput, 
   FormValidationMessage,
   Button,
   SearchBar,
   Avatar,
   Input,
   } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  
  
  
}
  from 'react-native';

  

class Dashboard extends Component {
      constructor(props){
      super(props);
      this.state={
        result:1,
      }
    }
    onVisitor = () => {
      this.setState({
        result:1 
      })
    }
    onGuest = () => {
      this.setState({
        result:2
      })
    }
    onStaff = () => {
      this.setState({
        result:3 
      })
    }
    onEvents = () => {
      this.setState({
        result:4 
      })
    }
    
    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <View>
            <TouchableOpacity style={styles.button} >
              <Image
                source={require('../../../assets/home.png')} style={styles.menuimg} />
              <Text style={styles.menufont}>Home</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
              <Image source={require("../../../assets/report.png")} style={styles.menuimg} />
              <Text style={styles.menufont}>Report</Text>
            </TouchableOpacity></View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
              <Image source={require("../../../assets/residents.png")} style={styles.menuimg} />
              <Text style={styles.menufont}>Residents</Text>
            </TouchableOpacity>
          </View>
          <View><TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
            <Image source={require("../../../assets/document.png")} style={styles.menuimg} />
            <Text style={styles.menufont}>Document</Text>
          </TouchableOpacity></View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
              <Image source={require("../../../assets/services.png")} style={styles.menuimg} />
              <Text style={styles.menufont}>Other </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { alert("you clicked me") }}>
              <Image source={require("../../../assets/support.png")} style={styles.menuimg} />
              <Text style={styles.menufont}>Support</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ebutton}>
            
            <Button
                 title='EXIT'
                
                 backgroundColor='#1eb20e'
                  />
          </View>
        </View>
       
        <View style={styles.right}>
          <View style={styles.topmenu}>

            <View><TouchableOpacity style={styles.rbutton} onPress={this.onVisitor}>

              <Text style={styles.rfont}>Visitor <Text style={styles.rsfont}>Entry</Text></Text>


            </TouchableOpacity>
            </View>
            <View><TouchableOpacity style={styles.rbutton} onPress={this.onGuest}>

              <Text style={styles.rfont}>Guest <Text style={styles.rsfont}>Entry</Text></Text>
            </TouchableOpacity></View>
            <View><TouchableOpacity style={styles.rbutton} onPress={this.onStaff}>

              <Text style={styles.rfont}>Staff <Text style={styles.rsfont}>Entry</Text></Text>
            </TouchableOpacity></View>
            <View><TouchableOpacity style={styles.rbutton} onPress={this.onEvents}>

              <Text style={styles.rfont}>Events <Text style={styles.rsfont}>Entry</Text></Text>
            </TouchableOpacity></View>
          </View>

{this.state.result===1&&

          <View style={styles.formmain}>
            <View style={styles.lformstyle}>
            <View >
            <Text style={styles.form1}>Visitors Entry</Text>
              <FormLabel>Name</FormLabel>
              <FormInput onChangeText={() => { alert("you clicked me") }}/>
              
              <FormLabel>Contact No</FormLabel>
              <FormInput onChangeText={() => { alert("you clicked me") }}/>
              <FormLabel>Vehicle No</FormLabel>
              <FormInput onChangeText={() => { alert("you clicked me") }}/>
              <FormLabel>Purpose</FormLabel>
              <FormInput onChangeText={() => { alert("you clicked me") }}/>
              
              <FormLabel>Appartment No</FormLabel>
              <FormInput onChangeText={() => { alert("you clicked me") }}/>
              <Button
               title='SUBMIT' />
            </View>
            </View>
            <View style={styles.rformstyle}>
            
            <TouchableOpacity onPress={() => { alert("you clicked me") }}>
              <Image source={require("../../../assets/camera.png")} style={styles.cameraimg} />
            </TouchableOpacity></View>
          </View>
}
{this.state.result===2&&
            <View style={styles.formmain}>
              <View style={styles.lformstyle}>
                <View>
                  <Text style={styles.form1}>Guest Details</Text>
                  <SearchBar
                    round
                    searchIcon={{ size: 24 }}
                    clearIcon={{ color: '#9f9fa0' }}
                    placeholder='Search here' />
                </View>
                
              </View>
              <View style={styles.rformstyle}>



                <View style={styles.avtarstyle}>
                  <Avatar
                    xlarge
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
                </View>
                <View >
                  <Text style={styles.avatartext}>Name : johne</Text>
                  <Text style={styles.avatartext}>Mob No</Text>
                  <Text style={styles.avatartext}>Vehicle No</Text>
                  <Text style={styles.avatartext}>Appartment No</Text>
                  <Text style={styles.avatartext}>Resident Name</Text>
                  <Text style={styles.avatartext}>Purpose</Text>
                <View style={styles.codestyle}>
                  <View><Text style={styles.avatartext}>Enter your code</Text></View>
                  <View>
                    <TextInput style={styles.codeinput} />
                  </View>
                </View>
                <View style={styles.ebutton}>
            
            <Button
                 title='Check in'
                
                 backgroundColor='#1eb20e'
                  />
          </View>
              </View>

              </View>
            </View>
    }
{this.state.result===3&&
          <View style={styles.formmain}>
            <View style={styles.lformstyle}>
              <View>
                <Text style={styles.form1}>Staf Details</Text>
                <SearchBar
                  round
                  searchIcon={{ size: 24 }}
                  clearIcon={{ color: '#9f9fa0' }}
                  placeholder='Search here' />
              </View>
            </View>
            <View style={styles.rformstyle}>
              <View style={styles.avtarstyle}>
                <Avatar
                  xlarge
                  rounded
                  source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
              <View >
                <Text style={styles.avatartext}>Name : johne</Text>
                <Text style={styles.avatartext}>Mob No</Text>
                
                <Text style={styles.avatartext}>Appartment No</Text>
                <Text style={styles.avatartext}>Resident Name</Text>
                <Text style={styles.avatartext}>Job title</Text>
                <Text style={styles.avatartext}>Agency Name</Text>
                <Text style={styles.avatartext}>Punching Time</Text>
                <View style={styles.ebutton}>

                  <Button
                    title='punch Out'

                    backgroundColor='#1eb20e'
                  />
                </View>
              </View>

            </View>
          </View>
}
{this.state.result===4&& 
  <View style={styles.formmain}>
  <View style={styles.lformstyle}>
    <View>
      <Text style={styles.form1}>Today's Events</Text>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        clearIcon={{ color: '#9f9fa0' }}
        placeholder='Search here' />
    </View>
  </View>
  <View style={styles.rformstyle}>
    <View style={styles.avtarstyle}>
      <Avatar
        xlarge
        
        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    </View>
    <View >
      <Text style={styles.avatartext}>Resident Name : johne</Text>
      <Text style={styles.avatartext}>Venue:</Text>
      
      <Text style={styles.avatartext}>Timing:</Text>
      <Text style={styles.avatartext}>Resident Name:</Text>
                <View>
                  <View style={styles.eventstyle}>
                    <View><Text style={styles.avatartext}>Guest Name:</Text></View>
                    <View>
                      <TextInput style={styles.codeinput1} />
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.eventstyle}>
                    <View><Text style={styles.avatartext}>Contact No : </Text></View>
                    <View>
                      <TextInput style={styles.codeinput1} />
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.eventstyle}>
                    <View><Text style={styles.avatartext}>Vehicle No  : </Text></View>
                    <View>
                      <TextInput style={styles.codeinput1} />
                    </View>
                  </View>
                </View>
              </View>
      <View style={styles.ebutton}>

        <Button
          title='Check In'
          titleStyle={{ fontWeight: "700" }}
          backgroundColor='#1eb20e'
        />
      </View>
    </View>

  </View>
}



        </View>
      </View>

    );
  }
}
export default Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#efeff2',

  },
  codeinput1:{
    height: 30,
    borderColor: 'gray', 
    borderWidth: 1,
    width:200,
    borderRadius:5
  },
  codeinput:{
     height: 40,
     borderColor: 'gray', 
     borderWidth: 1,
     width:100,
     borderRadius:5
    
  },
  eventstyle:{
    flex:1,
    flexDirection:'row',
    padding:"5%",
    
  },
  codestyle:{
    flex:1,
    flexDirection:'row',
    marginLeft:"5%",
    marginTop:"2%"
  },
  avatartext:{
    fontSize:20,
    
    marginLeft:"10%",
    padding:5
  },
  avtarstyle:{
    alignItems:'center',
    marginTop:"5%"
  },
  form1:{
    fontSize:20,
    alignItems:'center',
    fontWeight:'bold',
    marginLeft:"30%",
    marginTop:"3%",
    marginBottom:"3%"
  },
  cameraimg:{
    height:'60%',
    width:'60%',
    alignItems:'center',
    marginLeft:80,
    marginTop:80
  },
  rformstyle:{
   
    height:'95%',
    width:'48%',
    borderColor: '#454547',
    borderRadius:20,
    marginRight:10,
    marginBottom:40,
    borderWidth:1,
    marginLeft:10,
  },
  lformstyle:{
    
    height:'95%',
    width:'48%',
    borderColor: '#454547',
    borderRadius:20,
    marginLeft:10,
    marginBottom:40,
    borderWidth:1,
  },
  formmain: {
    flexDirection: 'row',
    borderColor: '#2f2f30',
    height:'80%',
    width:'100%',
    borderRadius:5,
    alignItems:'center'
  },
  rbutton: {
    backgroundColor: '#3c3c3d',
    borderRadius: 5,
    //padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    padding: 5,
    height: 100,
    width: 150,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    alignItems: "center"


  },
  topmenu: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ebutton: {

    marginBottom: 20,
    marginLeft:10,
    marginLeft: 10,
    marginTop: 20,
    height:"30%",
    width:"80%",
    padding:10



  },
  rfont: {
    color: '#f9fafc',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  rsfont: {
    color: '#f9fafc',
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20

  },

  menufont: {
    color: '#f9fafc',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#3c3c3d',
    borderRadius: 20,
    //padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    marginLeft: 40,
    marginTop:5
  },
  left: {
    backgroundColor: '#3c3c3d',
    width: '20%',
    alignItems: 'flex-start',
    height: '100%',
    
  },
  right: {
    backgroundColor: '#f7f8f9',
    height: '100%',
    width: '80%',

  },
  menuimg: {
    height: 50,
    width: 50,
    marginLeft: 10
  },
  exitimg: {
    height: 70,
    width: 70,
    marginLeft: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 });
