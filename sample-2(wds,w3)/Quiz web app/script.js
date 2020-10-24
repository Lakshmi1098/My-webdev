const que=document.getElementById('qet');
const ans=document.getElementById('answ');
const start=document.getElementById('strt');
const  next=document.getElementById('nxt');
const intr=document.getElementById('inst');
const qcon=document.getElementById("que-con");
const ibtn=document.getElementById('ibutton');
let index, shuffled;
let countr=0;

start.addEventListener("click",startInst);
next.addEventListener("click",() =>{
    index++;
    startNext();
});

function startInst(){
    start.classList.add('hide');
    intr.classList.remove('hide');
}

ibtn.addEventListener("click",startGame);

function startGame(){
    countr=0;
    intr.classList.add('hide');
    shuffled=questions.sort(() => Math.random() - 0.5);
    index=0;
    qcon.classList.remove('hide');
    startNext();
}

function startNext(){
     resets();
    showq(shuffled[index])
}

function showq(e){
    que.innerText = e.quest;
    e.answers.forEach(ele => {
        const button=document.createElement('button');
        button.innerText=ele.text;
        button.classList.add('ans-btn');
        if(ele.correct){
            button.dataset.correct = ele.correct;
        }
        button.addEventListener("click",selans)
        ans.appendChild(button);
    })
}

function resets(){
    next.classList.add('hide');
    while(ans.firstChild){
        ans.removeChild(ans.firstChild)
    }
}

function selans(a) {
    const selbtn = a.target
    const correct = selbtn.dataset.correct
    setStatus(document.body, correct)
    Array.from(ans.children).forEach(button => {
      setStatus(button, button.dataset.correct)
    })
    if (shuffled.length > index + 1) {
      next.classList.remove('hide')
    }
     else {
      start.innerText = 'Restart'
      start.classList.remove('hide')
    }
    if(selbtn.dataset= correct){
        countr++;
    }
    document.getElementById(ctr).innerHTML=countr;
}
  
  function setStatus(element, correct) {
    clearStatus(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

//give question here //
const questions=[
    {
        quest : " What is 2+2  ?",
        answers : [
            {text:'4', correct:true},
            {text:'22', correct:false},
            {text:'2', correct:false},
            {text:'3', correct: false}
        ]
    },

    {
        quest: "How many alphabets are there in English ?",
        answers:[
            {text: '80', correct: false},
            {text: '56', correct: false},
            {text: '26', correct: true},
            {text: '20', correct: false}
        ]
    },

    {
        quest: "What is chemical formula for water ?",
        answers:[
            {text: 'CO2', correct: false},
            {text: 'N2O', correct: false},
            {text: 'H2O', correct: true},
            {text: 'NH3', correct: false},
        ]
    }
]