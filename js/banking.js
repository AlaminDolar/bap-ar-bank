// handle deposit btn 
document.getElementById('depositBtn').addEventListener('click',function(){
    // get user deposit
  const depositInputField =  document.getElementById('depositInput');
  const depositamount = depositInputField.value;
//   console.log(depositamount);
  depositInputField.value='';
//   add deposit ammount
 
const displayamount = document.getElementById('depositamount');
displayamount.innerText=depositamount;

})