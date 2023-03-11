import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';  



export default function Task({data}){ // acessando atravez de props o data = base de dados da variavel tasks 
                                                                          
  return(
    <View style={styles.container}>
        <Text>
            {data.key} {data.nome} 
        </Text> 
      
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});