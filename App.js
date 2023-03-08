import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Login from './src/components/Login'


export default function App() {

  const [user, setUser] = useState(null) // state user usada para controlar o login e logout se inicia null

  if( !user){ // se user tiver algum dado ou seja está logado retorna componente Login

    return <Login/>

  } else {
   
    return (
      <SafeAreaView style={styles.container}>
  
        <Text>Tela de Tarefas</Text>
  
      </SafeAreaView>
    );
  }


  }


 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
});
