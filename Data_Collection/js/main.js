
//Data Collection (asking questions)




//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');


var user = {message:"",counter:0};



var questionsToAsk = [

     {"question":"what's your name?", "answer":""},
     {"question":"how old are you?", "answer":""},
     {"question":"what's your job title?", "answer":""},
     {"question":"how old are you?", "answer":""},
     {"question":"where do you live?","answer":""}


];



function chatbotSendMessage(messageText){


    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
    chatContainer.appendChild(messageElement);

     //scroll to last message
     chatContainer.scrollTop = chatContainer.scrollHeight;
    
}



function sendMessage(messageText){

     var messageElement = document.createElement('div');
     messageElement.classList.add('w-50');
     messageElement.classList.add('float-right');
     messageElement.classList.add('shadow-sm');
     messageElement.style.margin ="10px";
     messageElement.style.padding ="5px";

     messageElement.innerHTML = "<span>You: </span>"+
     "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

     messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
   
     chatContainer.appendChild(messageElement);

     //scroll to last message
      chatContainer.scrollTop = chatContainer.scrollHeight;
   

}




// chat asks questions
function askQuestion(){

   
     if(questionsToAsk.length > user.counter){
          setTimeout(function(){

               chatbotSendMessage(questionsToAsk[user.counter].question);
               user.counter++;
          },1000);
 
         
     console.log(questionsToAsk[user.counter-1]);
     }
  
}









sendBtn.addEventListener('click', function(e){

    if(textbox.value == ""){
     alert('Please type in a message');

    }else{
         
     let messageText = textbox.value.trim();   
     user.message = messageText;
     sendMessage(messageText); 
     textbox.value = "";  
     
    //store user's answer to coresponding question 
    questionsToAsk[user.counter-1].answer = user.message;

    
    //ask next question
     askQuestion();
     
   


    }
});



textbox.addEventListener('keypress',function(e){

     //if user hits the enter button on keyborad (13)
      if(e.which == 13){
          if(textbox.value == ""){
               alert('Please type in a message');
          
              }else{
                   
               let messageText = textbox.value.trim();
               user.message = messageText;
               sendMessage(messageText); 
               textbox.value = "";  
               
               questionsToAsk[user.counter-1].answer = user.message;
              
                askQuestion();
                
             
              }


      }


});


askQuestion();


 




