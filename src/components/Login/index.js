import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Image, View  } from 'react-native';
import ToDoImage from '../../../assets/todoimage.png'
import { FontAwesome } from '@expo/vector-icons';


export default function Login() { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');    
 
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.logoContainer}>
        <Image 
            source={ToDoImage}
            style={styles.imageLogin}
        />  
        <Text style={styles.textImg}>
            To Do App
        </Text>
    </View>  
    
    <View style={styles.formInput}>
        <FontAwesome name="user" size={24} color="#FFF" />
        <TextInput 
            placeholder='Seu email'
            style={styles.input}
            value={email} // value de input atrelado a state email ou seja oq tiver dentro de state email vai estar dentro do input
            onChange={(text) => setEmail(text)} // funcao que usuario ao digitar no input o dado é repassado a state email
        />
    </View>
    
    <View style={styles.formInput}>
        <FontAwesome name="lock" size={24} color="#FFF" />
        <TextInput 
            placeholder='Sua senha'
            style={styles.input}
            value={password} 
            onChange={(text) => setPassword(text)}
        />
    </View>
    

    <TouchableOpacity
        style={styles.handleLogin}
    
    >
        <Text style={styles.textLogin}>Acessar</Text>
    </TouchableOpacity>


    <TouchableOpacity
        style={styles.handleSign}
    
    >
        <Text style={styles.textCadastro}>Criar uma conta</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#00BFFF',
    paddingHorizontal: 10,
    paddingTop: '40%',
    alignItems: 'center'
  },
  imageLogin: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  logoContainer: {
    marginBottom: 20,
  },
  textImg: {
    textAlign: 'center',
    color: '#FFF',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  formInput: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'left',
  },
  handleLogin: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  textLogin: {
    color: '#00BFFF',
    fontWeight: 'bold'
  },
  handleSign: {
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: '25%',
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  textCadastro: {
    color: '#FFF'
  }



});
