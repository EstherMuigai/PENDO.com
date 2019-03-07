var email=''
var password=''
var fistname=''
var lastname=''
var questionids=[]
var answers=[]

$(document).ready(function(){
  $("#wrap").hide();
  $("#login").click(function(){/// Listen for click and get iput values of email and password
    email=$("#p1email").val()
    welcome()
  })
  $("#signup").click(function(){

    firstname=$("#name1").val()
    alert(firstname)
    lastname=$("#name2").val()
    alert(lastname)
  })
  $("#trial").click(function(){
    getvalues();
  })
})
function welcome(){
  $("#wrap").show();
  $("#introduction").hide();
  alert(email)
  $("#displayemail").text(email)
}
