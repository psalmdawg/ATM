console.log('The ATOM ATM')


//keep track of balance
// SAVINGS BALANCE
var checking = 0;
var savings = 0;





checkingDeposit.addEventListener('click', function() {

  if (parseInt(checkingAmount.value) < 0) { console.log('No negative deposits thieving git')}
  else {
 checking += parseInt(checkingAmount.value);
 document.getElementById("balance1").innerHTML = "$" + checking;}
if(checking <= 0) {
 document.getElementById('balance1').style.backgroundColor = 'red'}
 else {
   document.getElementById('balance1').style.backgroundColor = 'linen'
    }
  })

checkingWithdraw.addEventListener('click', function() {
  if (checking >= parseInt(checkingAmount.value) )
  {checking -= parseInt(checkingAmount.value)}

  else if (checking + savings >= parseInt(checkingAmount.value))

  {parseInt((checkingAmount.value) -= checking),
    savings -= parseInt(checkingAmount.value), checking = 0}

else if (checking + savings < parseInt(checkingAmount.value))
          {console.log('You cannot afford this transaction.')}
else {}
  document.getElementById("balance1").innerHTML = "$" + checking;
  document.getElementById("balance2").innerHTML = "$" + savings;

if(checking <= 0) {

  document.getElementById('balance1').style.backgroundColor = 'red'}
  else {
    document.getElementById('balance1').style.backgroundColor = 'gray'
    }
  })


savingsDeposit.addEventListener('click', function() {
  if (parseInt(savingsAmount.value) < 0) { console.log('No negative deposits ')}
  else if(checking < savingsAmount.value ) {} else { (savings += parseInt(savingsAmount.value));
    checking -= parseInt(savingsAmount.value);
      document.getElementById("balance2").innerHTML = "$" + savings;
      document.getElementById("balance1").innerHTML = "$" + checking;

    if(savings <= 0) {
      document.getElementById('balance2').style.backgroundColor = 'red'}
      else {document.getElementById('balance2').style.backgroundColor = 'linen'
        }}})

savingsWithdraw.addEventListener('click', function() {

if (savings < savingsAmount.value  ) {}
else {

savings -= parseInt(savingsAmount.value);
checking += parseInt(savingsAmount.value);
  document.getElementById("balance2").innerHTML = "$" + savings;
  document.getElementById("balance1").innerHTML = "$" + checking;}

if(savings <= 0) {
  document.getElementById('balance2').style.backgroundColor = 'red'}
  else {
    document.getElementById('balance2').style.backgroundColor = 'linen'
  }})


// function dollars(){
// savings *= 1.05
//   console.log(document.getElementById("balance2").innerHTML = "$" + savings);
// };


var interest =  setInterval(function(){ if(savings > 0){savings *=1.08}
document.getElementById("balance2").innerHTML = "$" + Math.floor(savings)}, 1000);

// function (interest


//
//
// var i = 1
// 5
//   var timer = setInterval(function() { alert(i++) }, 2000)
//







//
// if(checking <= 0) {
//
// document.getElementById('balance1').style.bgcolor = 'red'}
// else {
//   document.getElementById('id1').style.color = 'gray'
// }











//
// else if (checking - parseInt(checkingWithdraw.value) < 0 )
//   && (checking + savings > parseInt(checkingWithdraw.value) )
//
//
//
//




//
//
//
// function display() {
//   console.log('function is working, savings are: $' + savings)
// }
//
//
//
//
//
// function mi (input){
// 	checking += input;
//   console.log('current $' + checking);
//   }
// function mo(withdraw) {
// 	checking -= withdraw;
//   console.log('current $' + checking);
//   }
// function ts(transfer) {
//
// 	//takes money from current into savings
//
// 	current -= transfer;
// 	savings += transfer
// 	console.log('Savings $' + savings)
// 	console.log('current $' + checking)
// }
// function ws(transfer) {
// 	savings -= transfer;
// 	current += transfer;
// 	console.log('Savings $' + savings)
// 	console.log('current $' + checking)
// }
//
//
//
//
//
// //KEITHS
//
// // var balance = function(){
// //   document.getElementById('savBalance').innerHTML = currentAccount;
// //   document.getElementById('intBalance').innerHTML = interestAccount;
// // }
// //
// // checkingDeposit.addEventListener('click',function(){
// //   //check for input variable to be a number first
// //   if(amountSav.value.match(numericExpression)){
// //       currentAccount = currentAccount + parseInt(amountSav.value);
// //   }
// //
// //   balance();
// // });
//
// //Keiths^^
// // document.getElementById("balance2").innerHTML = "$" + savings;
