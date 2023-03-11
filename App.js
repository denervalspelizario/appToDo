import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Login from './src/components/Login';
import Task from './src/components/Task'; // importando tarefas


let tasks = [ // sera como basde de dados
  {key: '1', nome: 'Comprar hot dog para jantar'},
  {key: '2', nome: 'Buscar roupa lavanderia'}
]


export default function App() {

  const [user, setUser] = useState(null) // state user usada para controlar o login e logout se inicia null
  const [newTask, setNewTask] = useState('') // state inicia vazia

  if( !user){ // se user tiver algum dado ou seja está logado retorna componente Login

    return <Login changeStatus={ (user) => setUser(user) } // atravez de changestatus(uma especie de props) eu acesso o user(dado de login) 
                                                            //que esta logado la da tela de login e repassa para state user daqui da screen app
            />

  } else {
   
    return (
      <SafeAreaView style={styles.container}>
  
        <View style={styles.containerTask}>
          <TextInput
            style={styles.input}
            placeholder='O que vai fazer hoje'
            value={newTask}
            onChangeText={(text) => setNewTask(text)} // state newTask recebendo dado do input
          />

          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList

          data={tasks} // base de dados que a flatlista vai receber

          keyExtractor={(item) => item.key} //linkando o id da lista task a lista do flatlist
          
          renderItem={ ({ item }) => ( // vai rederizar ou seja mostrar item(que recebeu base de dados do tasks(ver linha 44) ) 
            
            <Task data={item}/> // data recebe todos os dados atravez de item(ler linha 48 e 44) e será rpassado via props  
                                // component Task que tera toda a estrutura pra mostrar o dado
            )}
        />
  
      </SafeAreaView>
    );
  }


  }


 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',

  },
  containerTask: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45
  },
  btnAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFF',
    fontSize: 22
  }
});
