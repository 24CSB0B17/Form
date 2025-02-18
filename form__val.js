



function resetform(){
    alert("Are you sure you want to reset? All entered data will be erased.");
    document.getElementById("fillform").reset();
    document.getElementById("error1").textContent="";


}


function validatefirstname() {
    const fn = document.getElementById("firstname").value;
    const errormsg = document.getElementById("ef");
    errormsg.textContent = "";
    if (fn.trim().length < 1) {
        errormsg.textContent = "The first name must be at least 1 letter.";
    }
    else if (fn.length > 20) {
        errormsg.textContent = "The first name should be a maximum of 20 letters.";
    }
   
}
function validatelastname() {
    const ln = document.getElementById("lastname").value;
    const errorln = document.getElementById("el");
    errorln.textContent = "";
    if (ln.trim().length < 1) {
        errorln.textContent = "The first name must be at least 1 letter.";
    }
    else if (ln.length > 20) {
        errorln.textContent = "The first name should be a maximum of 20 letters.";
    }
   
}
function validateage(){
    const nu=document.getElementById("age").value;
    const errormsg=document.getElementById("ea");
    if(nu.trim()===""){
      errormsg.textContent="Please enter your correct age";
      return;
    }
    if (nu < 18) {
        errormsg.textContent = "Age must be above 18";
    }
    else if (nu > 120) {
        errormsg.textContent = " Age must be below  120";
    }
}
function valiemail(){
    const em=document.getElementById("email");
    const error=document.getElementById("ee");


    if(!/^[A-Za-z]+$/.test(em)){
        error.textContent="Please check email address and retype correctly";
    }
    else if(em.length <1){
        error.textContent="Enter valid one";
    }
    else if(em.length()>20){
        error.textContent="Your email address is too lengthy";
    }
}
function valimob(){
    const num=document.getElementById("mobile").value;
    const error=document.getElementById("em");
    if(!/^[A-Za-z]+$/.test(num)){
        error.textContent="Your mobile number contains alphabets. Please enter valid mobile number";
    }
}
function valp1(){
    const num=document.getElementById("pincode1").value;
    const error=document.getElementById("ep1");
    if(num>999999){
        error.textContent="Please check your pincode of temporary address, it is too large";
    }
    else if(num<0){
        error.textContent="Please check your pincode of temporary address, it is too small";
    }
}
function valp2(){
    const num=document.getElementById("pincode2").value;
    const error=document.getElementById("ep2");
    if(num>999999){
        error.textContent="Please check your pincode of temporary address, it is too large";
    }
    else if(num<0){
        error.textContent="Please check your pincode of temporary address, it is too small";
    }
}
function valexp(){
    const num=document.getElementById("exp").value;
    const error=document.getElementById("ee1");
    if(num>30){
        error.textContent="It is time to retire ";
    }
    else if(num<0){
        error.textContent=" Please enter valid experience";
    }
}
function valans(){
    const num=document.getElementById("va");
    const error=document.getElementById("ev");
    if(va!=17){
        error.textContent=" Please retry, the captcha is wrong!!";
    }
}
function vala1(){
    const t=document.getElementById("tempa").value;
    const error=document.getElementById("eta");
    if(t.trim()===""){
        error.textContent="Please enter your address";
    }
}
function vala2(){
    const t=document.getElementById("pera").value;
    const error=document.getElementById("epera");
    if(t.trim()===""){
        error.textContent="Please enter your address";
    }
}
function valpr(){
    const t=document.getElementById("proof").value;
    const error=document.getElementById("epr");
    if(t.trim()=="-"){
        error.textContent="Please select your proof of identity";
    }
}


function vform(){
    validatefirstname();
    validatelastname();
    validateage();
    valiemail();
    valimob();
  vala1();
  vala2();
    valp1();
    valexp()
    valp2();
    valpr();
    valans();
}





