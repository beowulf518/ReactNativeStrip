import React from 'react';
import Stripe from 'react-native-stripe-api';
import {Alert, StyleSheet, TextInput,Text, View, Button } from 'react-native';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cardnumber:"",
      exp_month:"",
      exp_year:"",
      cvc:""
    }
    this.onPayment = this.onPayment.bind(this);
  }
   onPayment() {
    // var card = await stripe.createToken(information);
    // var token = card.id;

     // // send token to backend for processing

      const apiKey = 'pk_test_T1xC3nIT3uLzkGTJYko4Y73p';
      const client = new Stripe(apiKey);

     client.createToken({
       number: '4242424242424242',
       exp_month: '09', 
       exp_year: '18', 
       cvc: '111'
    }).then((x)=>{
      console.log(x.id);
      alert('Token ID:'+x.id);
      
    }).catch((e)=>{
      console.log(e);
    });
    }

  
  
  render() {
    
    return (
      <View style={styles.container}>
          <TextInput style={styles.ramInput}
            onChangeText ={(cardnumber)=>this.setState({cardnumber})} 
            value='4242424242424242'
            placeholder=''
          
             />
             <TextInput style={styles.ramInput}
            onChangeText ={(expmonth)=>this.setState({expmonth})} 
            value='09'
            placeholder=''
          
             />
             <TextInput style={styles.ramInput}
            onChangeText ={(exp_year)=>this.setState({exp_year})} 
            value='18'
            placeholder=''
          
             />
             <TextInput style={styles.ramInput}
            onChangeText ={(cvc)=>this.setState({cvc})} 
            value='111'
            placeholder=''
          
             />
             
          

        <Button 
          onPress = {this.onPayment}
          title = "add card"
          color = "red"
        />

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ramInput:{
    height:50,
    width:300,
    alignSelf:"center",
    backgroundColor:"cyan",
    marginTop:10
  }
});
