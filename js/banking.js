// handle deposit btn 
document.getElementById('depositBtn').addEventListener('click',function(){
    // get user deposit
  const depositInputField =  document.getElementById('depositInput');
  const depositamount = depositInputField.value;
//   console.log(depositamount);
  depositInputField.value='';
//   add deposit ammount
 
const displayamount = document.getElementById('depositamount');
const previousDepositAmount = displayamount.innerText;
const newDepsoitToatal= parseFloat(previousDepositAmount) +parseFloat(depositamount) ;
displayamount.innerText=newDepsoitToatal;

// update account blance
const Blance = document.getElementById('blanceAmount');
const previousBlance = Blance.innerText;

// console.log(previousBlance);
const newBlance = parseFloat(previousBlance)+parseFloat(depositamount);
Blance.innerText= newBlance;

})

// handle withdraw event handler