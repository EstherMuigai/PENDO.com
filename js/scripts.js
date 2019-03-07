$(document).ready(function(){
  $("form#personafrm").submit(function(event){
    event.preventDefault();

    var Q1 = parseInt($("input:radio[name=question1]:checked").val());
    var Q2 = parseInt($("input:radio[name=question2]:checked").val());
    var Q3 = parseInt($("input:radio[name=question3]:checked").val());
    var Q4 = parseInt($("input:radio[name=question4]:checked").val());
    var Q5 = parseInt($("input:radio[name=question5]:checked").val());
    var totalQ1 =
    var totalQ2 =
    var totalQ3 =
    var totalQ4 =
    var totalQ5 = 

    var name=$("input#studentsname").val();
    $("#marks").text ("Hello "+name+" "+",you scored "+ total + "%");
    grades(total);
  });
