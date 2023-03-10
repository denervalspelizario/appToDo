import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Login from './src/components/Login'


export default function App() {

  const [user, setUser] = useState(null) // state user usada para controlar o login e logout se inicia null

  if( !user){ // se user tiver algum dado ou seja está logado retorna componente Login

    return <Login changeStatus={ (user) => setUser(user) } // atravez de changestatus(uma especie de props) eu acesso o user(dado de login) 
                                                            //que esta logado la da tela de login e repassa a state user daqui da screen app
            />

  } else {
   
    return (
      <SafeAreaView style={styles.container}>
  
        <Text>Boa Tarde {user}</Text>
  
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
