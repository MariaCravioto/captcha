function checkform(theform){
var why = "";

if(theform.input.value == ""){
why += "No valido, /n intente de nuevo";
}
if(theform.input.value != ""){
if(ValidCaptcha(theform.input.value) == false){
why += "No valido, /n intente de nuevo";
}
}
if(why != ""){
alert(why);
return false;
}
}

//Generates the captcha function
var a = Math.ceil(Math.random() * 9)+ '';
var b = Math.ceil(Math.random() * 9)+ '';
var c = Math.ceil(Math.random() * 9)+ '';
var d = Math.ceil(Math.random() * 9)+ '';
var e = Math.ceil(Math.random() * 9)+ '';

var code = a + b + c + d + e;
document.getElementById("txtCaptcha").value = code;
document.getElementById("captcha").innerHTML = code;

// Validate the Entered input aganist the generated security code function
function ValidCaptcha(){
var txt1 = removeSpaces(document.getElementById('txtCaptcha').value);
var txt2 = removeSpaces(document.getElementById('input').value);
if (txt1 == txt2){
return true;
}else{
return false;
}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string){
return string.split(' ').join('');
}
