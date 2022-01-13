const form = document.querySelector('.form-wrapper');
const genOutput = document.querySelector('.output');
const userNum = document.querySelector('#num');
const resetBtn = document.querySelector('#reset-btn');
const dataCaution = document.querySelector('#data-caution'); 

var msg = '';

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    
    var userInput = Number(userNum.value);
    var by = 1;
    if (typeof userInput === 'number'){

        while (userInput <= 12, by <= 10 ) {
            msg += userInput + ` x ${by} = ` + (userInput * by + '<br />');
       
            by++;
        }
        
    }else if(typeof userInput !== typeof Number()){
        dataCaution.textContent = 'pls enter a valid number';
    }
    
    
    if (evt.target.tagName === 'SPAN'){
        console.log('cancel button clicked');
    }
    

    genOutput.innerHTML = msg;

    resetBtn.addEventListener('click', ()=>{
        genOutput.innerHTML = '';
    });
    
}, true);


// toggle page color mode
document.addEventListener('dblclick',()=>{
    console.log('you double cli');
}, false);


