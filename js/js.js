// document.querySelector('#secret_number').textContent=32;
// document.querySelector('#number_input').value=34;
// document.querySelector('.result').textContent="Yes , you Win";
// document.querySelector('.score').textContent=34;
// document.querySelector('.high_score').textContent=34;
// console.log(Math.trunc(Math.random()*20)+1);
let secret_number=(Math.trunc(Math.random() * 20)+1);
let oprtunity=10;
let score=0;
console.log(secret_number);
document.querySelector('#check_btn').addEventListener('click',function(){
    let number=Number(document.querySelector('#number_input').value);
    if(number>secret_number){
        document.querySelector('.result').textContent=" ⬆ Greater than secret number";
        oprtunity--;
        if(oprtunity<1){
            document.querySelector('.oportunity').textContent=0;
            document.querySelector('.result').textContent="You Lose the game😥"
            document.querySelector('#secret_number').style.backgroundColor='red';
            document.querySelector('#secret_number').textContent=secret_number;
        }else{
            document.querySelector('.oportunity').textContent=oprtunity;
        }
    }
    else if(number<secret_number){
        document.querySelector('.result').textContent=" ⬇ Less than secret number";
        oprtunity--;
        if(oprtunity<1){
            document.querySelector('.oportunity').textContent=0;
            document.querySelector('.result').textContent="You Lose the game😥"
            document.querySelector('#secret_number').style.backgroundColor='red';
            document.querySelector('#secret_number').textContent=secret_number;
        }else{
            document.querySelector('.oportunity').textContent=oprtunity;
        }    }
    else if(number===secret_number){
        document.querySelector('.result').textContent="You win ✌😎🎉🏆";
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('#secret_number').textContent=number;
        document.querySelector('#secret_number').style.backgroundColor='white';

        score=score+10+oprtunity;
        document.querySelector('.score').textContent=score;
        document.querySelector('#check_btn').disabled=true;

    }

    if(!number){
        document.querySelector('.result').textContent="Enter a Number please"
    }

});

document.querySelector('#again_btn').addEventListener('click',function(){
    secret_number=(Math.trunc(Math.random() * 20)+1);
    console.log(secret_number);
    oprtunity=10;
   document.querySelector('body').style.backgroundColor='#008b8b';
   document.querySelector('#number_input').value='';
   document.querySelector('.result').textContent="Start Guessing...";
   document.querySelector('.oportunity').textContent=10;
   document.querySelector('#secret_number').style.backgroundColor='#5f9ea0';
   document.querySelector('#secret_number').textContent='?';
   document.querySelector('#check_btn').disabled=false;

});