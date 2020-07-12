import React , {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, Button} from 'react-native';

const Result = ({score , playAgain}) => {
  console.log(score)
return(
  <View>
  <View>
  <Text style ={styles.title}> you scored {score} / 5 correct answers </Text>
  </View>

     <View style = {styles.playButt}>
      <Button title = "Play Again"
        
        onPress={playAgain}
        color='green'
      />
     </View> 

     
     <View style = {styles.playButt1}>
      <Button title = "Quit"
        
        onPress={playAgain}
        color='green'
      />
     </View>

  </View>
)
}

export default Result;




const styles = StyleSheet.create({
 

  title : {
   margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 

playButt : {
  flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'orange',
    alignSelf: "center",
    padding: 10,
    margin: 370,
    width: '50%',
    borderRadius: 10

},

playButt1 : {
  flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'orange',
    alignSelf: "center",
    padding: 10,
    margin: 300,
    width: '50%',
    borderRadius: 10

},

});

