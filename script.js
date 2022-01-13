const form = document.querySelector('.form-wrapper');
const genOutput = document.querySelector('.output');
const userNum = document.querySelector('#num');
const resetBtn = document.querySelector('#reset-btn');
 



form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    
    var msg = '';
    var userInput = Number(userNum.value);
    var by = 1;
    if (typeof userInput === 'number'){
        while (userInput <= 12, by <= 100 ) {
            msg += userInput + ` x ${by} = ` + (userInput * by + '<br />');
       
            by++;
        }   
    }    

    genOutput.innerHTML = msg;

    resetBtn.addEventListener('click', ()=>{
        genOutput.innerHTML = '';
    });
    
}, false);


