// JavaScript Document
var flag = false;
var flag1 = false;
function validate()
{
var s = form1.upwd.value;
var repwd1 = /^\w{6,8}$/; // matches any alphanumeric characters of min 6 and max 8
if ( !repwd1.test(s) )
{
alert("enter a alphanumeric set of min 6 or max 8 chars");
form1.upwd.value="";
}
else
flag = true;
}
function check()
{
if ( form1.upwd.value != form1.cpwd.value )
{
alert("password doesn't match")
form1.cpwd.value="";
}
else
flag1 = true;
}

function v_mail()
{
var x=form1.e_id.value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}

function z_check()
{
var x=form1.zip_code.value;
if(x.length!=6)
alert("Enter 6 digit zipcode");
}
function p_check()
{
var x=form1.ph_no.value;
if(x.length!=10)
alert("Enter 10 digit phone number");
}

function submit()
{
var errmsg="";
valid=true;
if(document.form1.u_name.value=="")
{
errmsg+="enter user name\n";
valid=false;
}
if(form1.addr.value==" ")
{
errmsg+="enter address\n";
valid=false;
}
alert(errmsg);
}