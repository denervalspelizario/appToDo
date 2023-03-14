import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, View, FlatList, Keyboard } from 'react-native';
import Login from './src/components/Login';
import Task from './src/components/Task'; // importando tarefas
import firebase from './src/services/FirebaseConnection'; // importando os dados do firebase


/*
  Obs paras criar tarefa precisa criar databse la no firebase
      após logado na conta onde esta criado o login
      realtime > create database > teste mode 
      após criado va em regras linhas read e write tira o 'now < 516156161'  e adiciona true nos 2
*/


export default function App() {

  const [user, setUser] = useState(null) // state user usada para controlar o login e logout se inicia null
  const [newTask, setNewTask] = useState('') // state inicia vazia
  const [task, setTask] = useState([]) // state que vai armazenar as tasks(tarefas) como é uma array de objetos(vai ter a key e a tarefa)
                                       // ela tem que iniciar vazia []

  function adicaoTask(){ // funcao pra adicao de tarefas 
    
    if(newTask === ''){ // se newTask estiver vazia(state que recebe o dado input)
      return;
    } else {

      let tarefas = firebase.database().ref('tarefas').child(user) // variavel recebe uma criacao de um FILHO tarefas(la do database) 
                                                                   //linkado com o state user( user recebeu a id do usuario no database)  

      let chave = tarefas.push().key   // variavel recebe uma adicao ao FILHO tarefas(la no database) uma key unica   
                                       // ou seja primeiro linka o user a tarefas e depois cria uma CHAVE UNICA a cada tarefa                                                        

      tarefas.child(chave).set({  //em tarefas recebe um filho key de numero unico e adiciona  
        
        nome: newTask   // além da key adiciona 'nome :' que recebe a state newTask( que é o dado digitado la no input)
        // ou seja use > cria um filho tarefas > filho tarefa recebe key unica > alem da key o filho tarefas recebe nome: dado do input(newTask) 
      })
      .then(() =>{ // deu certo foi criado tudo

        const data ={      // esse objeto serve para manter a tarefa ja digitada em conjunto com a nova tarefa adicionanda
          key: chave,      // ou seja dado que ja existe + dado digtado agora leia abaixo
          nome: newTask,
        }

        setTask(oldTasks => [...oldTasks, data])  
        // state task(dado la do input) recebe  as tarefas que ja temos(o spread operator ...oldTasks) e adicionando 
       // a MAIS o data ou seja oldtask = ...oldTask(tarefas ja passadas) + const data(contem nova key(linha 32) e o o dado que tiver em newTask)  
      })

      Keyboard.dismiss() // garante que o teclado vai fechar ou seja apos operacaod e adicaod e tarefa ele fecha
      setNewTask('') // limpa a state newTask limpando o input

    }

  }

  

  function deleteTask(key){ // funcao para deletar a tarefa - tem como parametro a key é por ela que vamos deletar

    console.log(key)

  }

  function editarTask(data){  // funcao para editar a tarefa - tem como parametro a key é por ela que vamos editar

    console.log("Item clicado ", data)

  }

  




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

          <TouchableOpacity style={styles.btnAdd} onPress={adicaoTask}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList

          data={task} // base de dados que a flatlista vai receber

          keyExtractor={(item) => item.key} //linkando o id da lista task a lista do flatlist
          
          renderItem={ ({ item }) => ( // vai rederizar ou seja mostrar item(que recebeu base de dados do tasks(ver linha 52) ) 
            
            <Task data={item} deleteItem={deleteTask} editarItem={editarTask}/> // data recebe todos os dados atravez de item(ler linha 48 e 44) e será rpassado via props  
                                                        // component Task que tera toda a estrutura pra mostrar o dado
            )}                                          // pelo deleteItem passando a funcao de deletartask para o componente Task para usar la
                                                        // pelo editarItem passando a funcao de editartask  para o componente Task para usar la
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
    backgroundColor: '#00BFFF',

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
    borderColor: '#ccc',
    height: 45
  },
  btnAdd: {
    backgroundColor: '#4169E1',
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
