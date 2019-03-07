//USER INTERFACE LOGIC
$(document).ready(function(){
    $("button#sbutton5").hide();
    $("button#sbutton1").click(function(){
        event.preventDefault();
        $("div#languageshow1").hide();
        $("div#languageshow2").show();
        var l1 = $("input:radio[name=question1]:checked").val();
        compare (l1,e,f,g,h,i);
    });
    $("button#sbutton2").click(function(){
        event.preventDefault();
        $("div#languageshow2").hide();
        $("div#languageshow3").show();
        var l2 = $("input:radio[name=question2]:checked").val();
        compare (l2,e,f,g,h,i);
    });
    $("button#sbutton3").click(function(){
        event.preventDefault();
        $("div#languageshow3").hide();
        $("div#languageshow4").show();
        var l3 = $("input:radio[name=question3]:checked").val();
        compare (l3,e,f,g,h,i);
    });
    $("button#sbutton4").click(function(){
        event.preventDefault();
        $("div#languageshow4").hide();
        $("div#languageshow5").show();
        $("button#sbutton5").show();
        var l4 = $("input:radio[name=question4]:checked").val();
        compare (l4,e,f,g,h,i);
    });
    $("form#languageform").submit(function(){
        event.preventDefault();
        var l5 = $("input:radio[name=question5]:checked").val();
        compare (l5,v,w,x,y,z);
    });
    
$("button#ebutton1").click(function(){
  $("div.cultureshow1").submit(function(event){
  event.preventDefault();
  $("div.cultureshow2").show();
  $("div.cultureshow1").hide();
});
});
$("button#ebutton2").click(function(){
  $("div.cultureshow2").submit(function(event){
  event.preventDefault();
  $("div.cultureshow3").show();
  $("div.cultureshow2").hide();
});
});
$("button#ebutton3").click(function(){
  $("div.cultureshow3").submit(function(event){
  event.preventDefault();
  $("div.cultureshow4").show();
  $("div.cultureshow3").hide();
});
});
$("button#fbutton1").click(function(){
  $("div.financeshow1").submit(function(event){
  event.preventDefault();
  $("div.financeshow2").show();
  $("div.financeshow1").hide();
});
});
$("button#fbutton2").click(function(){
  $("div.financeshow2").submit(function(event){
  event.preventDefault();
  $("div.financeshow3").show();
  $("div.financeshow2").hide();
});
});
$("button#fbutton3").click(function(){
  $("div.financeshow3").submit(function(event){
  event.preventDefault();
  $("div.financeshow4").show();
  $("div.financeshow3").hide();
});
});
$("button#fbutton4").click(function(){
  $("div.financeshow4").submit(function(event){
  event.preventDefault();
  $("div.financeshow5").show();
  $("div.financeshow4").hide();
});
});
$("button#tbutton1").click(function(){
  $("div.temperamentshow1").submit(function(event){
  event.preventDefault();
  $("div.temperamentshow2").show();
  $("div.temperamentshow1").hide();
});
});
$("button#tbutton2").click(function(){
  $("div.temperamentshow2").submit(function(event){
  event.preventDefault();
  $("div.temperamentshow3").show();
  $("div.temperamentshow2").hide();
});
});
$("button#tbutton3").click(function(){
  $("div.temperamentshow3").submit(function(event){
  event.preventDefault();
  $("div.temperamentshow4").show();
  $("div.temperamentshow3").hide();
});
});
$("button#tbutton4").click(function(){
  $("div.temperamentshow4").submit(function(event){
  event.preventDefault();
  $("div.temperamentshow5").show();
  $("div.temperamentshow4").hide();
});
});
$("button#kbutton1").click(function(){
  $("div.knowyoushow1").submit(function(event){
  event.preventDefault();
  $("div.knowyoushow2").show();
  $("div.knowyoushow1").hide();
});
});
$("button#kbutton2").click(function(){
  $("div.knowyoushow2").submit(function(event){
  event.preventDefault();
  $("div.knowyoushow3").show();
  $("div.knowyoushow2").hide();
});
});
$("button#kbutton3").click(function(){
  $("div.knowyoushow3").submit(function(event){
  event.preventDefault();
  $("div.knowyoushow4").show();
  $("div.knowyoushow3").hide();
});
});
$("button#kbutton4").click(function(){
  $("div.knowyoushow4").submit(function(event){
  event.preventDefault();
  $("div.knowyoushow5").show();
  $("div.knowyoushow4").hide();
});
});
$("button#pbutton1").click(function(){
  $("div.personalityshow1").submit(function(event){
  event.preventDefault();
  $("div.personalityshow2").show();
  $("div.personalityshow1").hide();
});
});
$("button#pbutton2").click(function(){
  $("div.personalityshow2").submit(function(event){
  event.preventDefault();
  $("div.personalityshow3").show();
  $("div.personalityshow2").hide();
});
});
$("button#pbutton3").click(function(){
  $("div.personalityshow3").submit(function(event){
  event.preventDefault();
  $("div.personalityshow4").show();
  $("div.personalityshow3").hide();
});
});
$("button#pbutton4").click(function(){
  $("div.personalityshow4").submit(function(event){
  event.preventDefault();
  $("div.personalityshow5").show();
  $("div.personalityshow4").hide();
});
});


//BUSINESS LOGIC
var e = "wordsofaffirmation";
var f = "qualitytime";
var g = "physicaltouch";
var h = "receivinggifts";
var i = "service";

function compare (u,v,w,x,y,z) {
    var escore = 0;
var fscore = 0;
var gscore = 0;
var hscore = 0;
var iscore = 0;
    if (u == v){
        var yo = score (escore);
        alert(yo);
    }else if (u == w){
        score (fscore);
    }else if (u == x){
        score (gscore);
    }else if (u == y){
        score (hscore);
    }else if (u == z){
        score(iscore);
    }
}

function score (xy) {
    return xy + 20;
}
