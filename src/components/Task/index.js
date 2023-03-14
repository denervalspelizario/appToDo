import React from 'react'; 
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'; 
import { FontAwesome5 } from '@expo/vector-icons'; 



export default function Task({data, deleteItem, editarItem}){ // acessando atravez de props o data = base de dados da variavel tasks 
                                                             // acessando funcao deletaTask atravez da props deleteItem(ver linha 20 de app.js)    
                                                              // acessando funcao editarTask atravez da props editarItem                     
  return(
    <View style={styles.containerTask}>
        <TouchableOpacity 
            style={styles.btnTrash}
             onPress={() => deleteItem(data.key)} // ao clicar chama a funcao anonima que recebe deleteitem(props de funcao deletaTask) 
                                                  // que seu parametro vai ser a data.key( data props da variavel task)
        >
          <FontAwesome5 name="trash-alt" size={20} color="#FFF" />
        </TouchableOpacity> 

        <View>
          <TouchableWithoutFeedback  // botao sem  nenhuma identidade visual
              style={styles.btnNome} 
              onPress={() => editarItem(data)} // ao clicar chama a funcao anonima que recebe editarItem(props de funcao editarTask) 
                                               // que seu parametro vai ser a data( data props da variavel task)   
            > 
            <Text style={styles.textNome}>
              {data.nome}
            </Text>
          </TouchableWithoutFeedback>
        </View>



    </View>

  )

}

const styles = StyleSheet.create({
  containerTask: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4169E1',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10
  },
  btnTrash: {
    marginRight: 10
  },
  btnNome: {
    paddingRight: 10,
    

  },
  textNome:{
    color: '#FFF',
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 16
  }
  
});