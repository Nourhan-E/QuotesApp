
var QuotName =[
    { Name:"--Nelson Mandela",
      Quote:'“Resentment is like drinking poison and waiting for your enemies to die.”'
    },
    { Name:"--Wayne Gretzy",
      Quote:"“You miss 100% of the shots you don't take.”"
    },
    { Name:"--Epictetus",
      Quote:"“It's not what happens to you, but how you react to it that matters.”"
    },
    { Name:"--Frank Sinatra",
      Quote:'“The best revenge is massive success.”'
    },
    { Name:"--Elbert Hubbard",
      Quote:'“Do not take life too seriously. You will not get out alive.”'
    },
    { Name:"--Oscar Wilde ",
      Quote:'“Be yourself; everyone else is already taken.”'
    },
    { Name:"--Mae West ",
     Quote:'“You only live once, but if you do it right, once is enough.”'
    },
    { Name:"--Mahatma Gandhi ",
     Quote:'“Be the change that you wish to see in the world.”'
    },
    { Name:"--Mahatma Gandhi ",
     Quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.” '
    }
    

]
   
var QuoteInput= document.getElementById("outputQuote");
var NameInput=document.getElementById("outputName");
 
 function randomQuote(){
   var num = Math.floor(Math.random() * QuotName.length )
   QuoteInput.innerHTML=QuotName[num].Quote;
  NameInput.innerHTML=QuotName[num].Name;  
 }
//  randomQuote()


 
























// var text=["Resentment is like drinking poison and waiting for your enemies to die.","You miss 100% of the shots you don't take.","It's not what happens to you, but how you react to it that matters.","The best revenge is massive success."];
// var userName =["--Nelson Mandela","--Wayne Gretzy","--Epictetus","--Frank Sinatra"];

