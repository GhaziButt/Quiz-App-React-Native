import React , {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, Button} from 'react-native';

const QuestionBox = ({question , options, selected}) => {
 
   const [answer , setAnswer] = useState(options);

return(

<View>

  <View style = {styles.questionBox}>
        <Text style = {styles.paragraph}>{question}</Text>
  </View>
  
  <View>
      {answer.map ((text , index) => (
      
           <ScrollView style = {styles.scrollviewItem}>
              <Button
                 key = {index}
                 style = {styles.ansButton}
                 onPress = { () => {
                 setAnswer([text])
                 selected(text);
                 }
                 }
                 title= {text}
              />
           </ScrollView>
      ))}
  </View>

</View>  

    );
  };



export default QuestionBox;










const styles = StyleSheet.create({
 

  
  paragraph: {
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  ansButton : {
  position: 'relative',
  padding: 10,
  backgroundColor: 'rgb(250, 151, 37)',
  display: 'inline-block',
  margin: 10,
  outline: 'none',
  border: 'none',
  fontSize: 3,
  color:' rgb(255, 255, 255)',
  fontWeight: 'bold',
  borderRadius: 2,
  cursor: 'pointer',
},

scrollviewItem: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'orange',
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: '50%',
    borderRadius: 10

  },

 

  questionBox : {
  position: 'relative',
  border: 'rgba(0, 0, 0, 0.2)',
  marginTop: 25,
  padding: 15,
  boxSizing: 'border-box',
  backgroundColor: 'rgb(250, 250, 250)',
  },
  
  
  });

