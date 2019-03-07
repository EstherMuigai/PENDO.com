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