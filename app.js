// // // var a = document.getElementById("box");

// // // function shape(cls){
// // //     console.log("button click")
// // //     a.className = cls;
// // // }
// // // var parent = document.getElementById("parent");

// // // var a = parent.getElementsByTagName("P")
// // // console.log(a);




// // var min =0
// // var sec =0
// // var miliSec =0
// // var displayMin = document.getElementById("displayMin");
// // var displaySec = document.getElementById("displaySec");
// // var displayMiliSec = document.getElementById("displayMiliEc");

// // var interval;

// // function timer(){
// //    miliSec++;
// //    if(miliSec = 10)
// //     sec = 0;
// //     min = 0; 
// // };


// // function startTimer(){
// //     interval =
// //      setInterval(function
// // (){  
// //    timer();
// // },100);
// // };

// // function pauseTimer(){
// //     clearInterval
// //     (interval);
// // }

// // function resetTimer(){
// //     pauseTimer();
// //     min = 0;
// //     sec = 0;
// //     milisec = 0;
// //     displayMiliSec .innerHTML = Milisec

// //     displaySec .innerHTML = Sec
    
// //     displayMin .innerHTML = Min
// // }
// var inp = document.getElementById("input");
// var main = document.getElementById("main");
// console.log(input);
//   function  add(){
//       console.log(input.value);
//       if(input.value == ""){
//          alert("plaese enter todo");
//       }else{
             
//     li = document.createElement("Button");
//     li = document.createTextNode("EDIT TODO");
//     li.appendChild(aditBtnText);
//     editBtn.appendChild(editBtnText);
//     editBtn.setAttribute("onlick", "edittodo()");
//     li.appendChild(editBtn);
//     main.appensChild(li);
//     input.value = "";
    
//       }
//    }
//    function ediTtodo(elament){
//       var newValue = prompt ("Enter update valur");
//       console.log(elament.perentNode.firstChild.nodeValue);
//       element.perentNode.firstChild.nodeValue = newValue;

//    }
var questions = [
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ];
  
  var questionR = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var indexNum = 0;
  var marks = 0;  
  
  function showQuestion() {
    questionR.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML=''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      
      </button>
  </div>`
    }
  }
  showQuestion();
  
  function nextQuestion() {
    indexNum++;
    showQuestion();
  }
  
  function checkAns(a, b) {
    if (a == b) {
      marks++;
      console.log(marks)
    }
    if(indexNum + 1 == questions.length) {
      alert("Your Result" + marks)
    }else{
    nextQuestion();
    }
  }


   














