function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


/*setting minimum dates for check-in and check-out fields dynamically*/

 var currentDateTime = new Date();
 var year = currentDateTime.getFullYear();
 var month = (currentDateTime.getMonth() + 1);
 var date = (currentDateTime.getDate() + 1);

 if(date <10){
   date ='0' + date;
 }

 if(month < 10){
   month = '0' + month;
 }

 var dateTomorrow = year + "-" +month +"-" + date;
 var CheckinElem = document.querySelector("#checkin-date");
 var CheckoutElem = document.querySelector("#checkout-date");

 CheckinElem.setAttribute("min",dateTomorrow);

 CheckinElem.onchange = function(){
   checkoutElem.setAttribute("min",this.value);
 }

 /*opening and closing booking form*/ 

 function openForm(){
   document.getElementById("booking").style.display ="block";
 }

 function closeForm(){
  document.getElementById("booking").style.display ="none";
}


/* Sendin email */



