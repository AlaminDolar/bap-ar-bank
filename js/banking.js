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
document.getElementById('withdrawBtn').addEventListener('click',function(){
  // console.log('withdraw button clicked');

  // get withdraw input

  const withdrawInputField = document.getElementById('withdraw-total');
   const withdrawAmount= withdrawInputField.value;        /new blance/
 
  //  clear input
  withdrawInputField.value='';

  // add total withdraw in withdraw box
  const DisplaywithdrawTotal = document.getElementById('withdraw-blance');
previousWithdrawAmoubt = DisplaywithdrawTotal.innerText;

const newWithdawTotal = parseFloat(previousWithdrawAmoubt)+parseFloat(withdrawAmount);
DisplaywithdrawTotal.innerText=newWithdawTotal;

  // update blance By withdraw

  const taotalblance = document.getElementById('blanceAmount');
  
  const pBlance = taotalblance.innerText;
 

  newWblance = parseFloat(pBlance) - parseFloat(withdrawAmount);
  taotalblance.innerText=newWblance;






  




})