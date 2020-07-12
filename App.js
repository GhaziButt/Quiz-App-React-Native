import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';

import quizService from './quizService';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';





class App extends React.Component {
 
 
  state = {
    questionBank:[],
    score : 0,
    responses : 0,
    currentState: 'FirstScreen',
  };

  
    getQuestions = () => {
     quizService().then(question =>{
       this.setState({
         questionBank : question
       });
     });
   };

   computeAnswer= (answer , correctAnswer ) => {
     if (answer === correctAnswer){
        this.setState({
         score : this.state.score +1
        });
     }
     this.setState({
         responses : this.state.responses < 5 ? this.state.responses +1 :5
        });
   }

   playAgain = () => {
      this.getQuestions();
      this.setState({
          score :0,
          responses:0,
      });
   }
   

   componentDidMount(){
     this.getQuestions();
   } 
  


  render(){
             
             
             
              const QuizScreen = (

                                     <View>
                                           <View style={styles.container}>
                                          
                                          </View>  
          
                                                     { this.state.responses < 5  &&

                                                <View style = {styles.box}>

           

                                            <ScrollView>
                                                     {this.state.questionBank.length > 0   &&   
                                                      this.state.questionBank.map(
                                                 ({question , answers , correct , questionID}) =>                
                                                <QuestionBox 
                                                   question = {question} 
                                                   options={answers} 
                                                  key={questionID}
                                                  selected={answer => this.computeAnswer(answer , correct)}
                                               />  
                                               ) 
                                            } 
                                           </ScrollView>

                                        <View>
                                            <Text style = {styles.paragraph}> {this.state.score} / 5 </Text>
                                        </View>

                       
                       
                                         <View style = {styles.nxtbBtn}>
                        
                                           <Button 
                                             title= "Next"
                                             onPress = {() => {
                    
                                                  this.setState({
                                                    questionBank : []
                                              });

                                              this.getQuestions()
                                               }
                                              }
                                              />
                        
                                          </View>  
                        
                        
               </View>

          }

            <View>
                  
          
                    {this.state.responses === 5 ?  ( <Result score={this.state.score}  playAgain = {this.playAgain}/>  )    :null }
           </View>

    </View>

              );

    const FirstScreen = (
   <View style = {styles.main}>
      <View>
          <Text style = {styles.monologue}> Quiz It! </Text>
      </View>

      <View style = {styles.start}>  
            

          <Button title = "Enter" 
                  onPress = {() => { this.setState({currentState : QuizScreen});}}
                  color = 'Black'
          />

          
      </View>
    </View>  

  );

  return(
     this.currentState ==='FirstScreen'? FirstScreen : QuizScreen
     
     
  );
}
}

export default App;






const styles = StyleSheet.create({

  main:{
  backgroundColor:'Black',
  },

   paragraph: {
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
     
    flex: 1,
    padding: 24,
    alignItems: "center",
    
  },

  nxtbBtn :{
    marginTop : 70,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'purple',
    alignSelf: "flex-end",
    padding: 10,
    margin: 5,
    width: '20%',
    borderRadius: 60
  },

  box: {
     
    marginTop : 40,

  },

  start : {
flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'orange',
    alignSelf: "center",
    padding: 0,
    margin: 350,
    width: '30%',
    borderRadius: 10
  
  },

  monologue : {
     
  backgroundColor: 'rgba(0, 0, 0, 1)',
  color: 'rgb(255, 255, 255)',
  padding: 2,
  fontSize: 55,
  borderRadius: 1,
  
  margin:40,
  justifyContent : 'center',
  },

  
 

 
  
  
});


