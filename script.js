const form = document.querySelector('.form-wrapper');
const genOutput = document.querySelector('.output');
const userNum = document.querySelector('#num');
const resetBtn = document.querySelector('#reset-btn');

var msg = '';

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();

    var i = userNum.value;
    var by = 1;
    
    while (i <= 12, by <= 12 ) {
        msg += i + ` x ${by} = ` + (i * by + '<br />');
   
        by++;
    }

    genOutput.innerHTML = msg;

    resetBtn.addEventListener('click', ()=>{
        genOutput.innerHTML = '';
    });
    
});




