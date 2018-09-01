// JavaScript Document


document.getElementById("tagline").innerHTML = tagline;
document.getElementById("gender").innerHTML = gender;
document.getElementById("city").innerHTML = city;
document.getElementById("state").innerHTML = state;
document.getElementById("country").innerHTML = country;
// Display Name
document.getElementById("displayname").innerHTML = DisplayName;
document.getElementById("extendednetwork").innerHTML = DisplayName;
document.getElementById("details-name").innerHTML = DisplayName;
document.getElementById("interests-name").innerHTML = DisplayName;
document.getElementById("highlight-name").innerHTML = DisplayName;
document.getElementById("blurbs-name").innerHTML = DisplayName;
document.getElementById("contact-name").innerHTML = DisplayName;
document.getElementsByClassName("displayname").innerHTML = DisplayName;
// Mood
document.getElementById("mood").innerHTML = mood;
// Friends
document.getElementById("friend1").innerHTML = friend1;
document.getElementById("friend2").innerHTML = friend2;
document.getElementById("friend3").innerHTML = friend3;
document.getElementById("friend4").innerHTML = friend4;
document.getElementById("friend5").innerHTML = friend5;
document.getElementById("friend6").innerHTML = friend6;
document.getElementById("friend7").innerHTML = friend7;
document.getElementById("friend8").innerHTML = friend8;

$('.profile-pic').css("background-image", "url(profile/img/"+profile+".jpg)");
$('.top-8 .friend:nth-of-type(1) .friend__photo').css("background-image", "url(profile/img/"+friend1+".jpg)");
$('.top-8 .friend:nth-of-type(2) .friend__photo').css("background-image", "url(profile/img/"+friend2+".jpg)");
$('.top-8 .friend:nth-of-type(3) .friend__photo').css("background-image", "url(profile/img/"+friend3+".jpg)");
$('.top-8 .friend:nth-of-type(4) .friend__photo').css("background-image", "url(profile/img/"+friend4+".jpg)");
$('.top-8 .friend:nth-of-type(5) .friend__photo').css("background-image", "url(profile/img/"+friend5+".jpg)");
$('.top-8 .friend:nth-of-type(6) .friend__photo').css("background-image", "url(profile/img/"+friend6+".jpg)");
$('.top-8 .friend:nth-of-type(7) .friend__photo').css("background-image", "url(profile/img/"+friend7+".jpg)");
$('.top-8 .friend:nth-of-type(8) .friend__photo').css("background-image", "url(profile/img/"+friend8+".jpg)");

