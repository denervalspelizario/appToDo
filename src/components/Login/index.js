import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Image, View  } from 'react-native';
import ToDoImage from '../../../assets/todoimage.png'
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../services/FirebaseConnection';  // importando o firebase


export default function Login() { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');    
  const [type, setType] = useState('login'); // state valor inicial 'login'
 
  function handleLogin(){

    if(type === 'login'){

      //login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user)
      })

    } else {

      // cadastrar

    }

  }


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
            maxLength={120}
        />
    </View>
    
    <View style={styles.formInput}>
        <FontAwesome name="lock" size={24} color="#FFF" />
        <TextInput 
            placeholder='Sua senha'
            style={styles.input}
            value={password} 
            secureTextEntry={true}
            onChange={(text) => setPassword(text)}
            maxLength={12}
        />
    </View>
    

    <TouchableOpacity
        style={styles.handleLogin}
        onPress={handleLogin}

    
    >
        <Text style={styles.textLogin}>

          {type === 'login' ?  // state se inicia com valor login(linha 11)
            'Acessar'          // 
            : 
            'Cadastrar'
          } 

        </Text>
    </TouchableOpacity>


    <TouchableOpacity
        style={styles.handleSign}
        onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}  // ao clicar dispara a funcao anonima que pega a state type e verifica se tem valor de 'login'
                                                                                   // se tiver altera a state type para 'cadastrar'  senao recebe valor 'login' 
                                                                                  // como altera o state type tb em cadeia altera o texto dos botoes(ler linha 63 e 81)
                                                                                  // pois os textos dos botaoes estao vinculados a ao conteudo do state type 
    >                                                                                   
        <Text style={styles.textCadastro}>

        {type === 'login' ?  // state se inicia com valor login(linha 11)
            'Criar uma conta'          // 
            : 
            'Já possuo um a conta'
          } 

        </Text>
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
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogin: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  logoContainer: {
    marginBottom: 15,
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
    marginTop: 100,
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
