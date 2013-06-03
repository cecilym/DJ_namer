// JavaScript Document
$(document).ready(function() {
  var firstLetter;
  var picked1;
  var day;
  var month1;
  var month2;
  var monthInt1;
  var monthInt2;
  var monthPickedName;

  $("#submitDay").click(function(e) {
    
    e.preventDefault();
    
    var nameParts = ["ill", "Kill", "Gold", "Sex", "Money", "Filth", "Neon", "Bass",                  "Funk", "Tiger", "Wolf", "Panty", "Dub", "Glitter", "Star",                  "Plundr", "Snarky", "Pink", "Light", "lazer", "SleezEe", "x",
                  "Hero", "Kidd", "whip", "luvv", "gunn","trap", "dapz", "Sleepy",
                  "flip","blurr","fractal","push","nu","faux","Ancient","nama",                  "harmonik"];
    var conjunctions = [" ", "", ".", "_", "$", "-", "*", "/", "\\"];
    var namePartsMonth1 = ["flex", "funk"];
    var namePartsMonth2 = ["tek", "bit", "fresh", "K", "Nasty", "Money",                          "Soul","grime", "chip", "D"];
  
    
    firstLetter = $("#nameIn").val();//.charAt(0);//.toUpperCase();
    console.log(firstLetter);
    day = $("#date").val().charAt(-1);
    month1 = $("#date").val().charAt(5);
    month2 = $("#date").val().charAt(6);
    dayInt = parseInt(day, 0);
    monthInt1 = parseInt(month1, 0);
    monthInt2 = parseInt(month2, 0);
    
    var lucky = Math.floor(Math.random()*8);
    namePartsMonth2[3] = firstLetter;
    
    if ((dayInt == monthInt2) || (lucky == 7)) {
      monthPickedName = Math.floor(Math.random() * nameParts.length);
    } else if (monthInt1 == 0) {
      monthPickedName = namePartsMonth2[monthInt2];
    } else {
      monthPickedName = namePartsMonth1[monthInt1];
    };
        
    var i = Math.floor(Math.random() * nameParts.length);
    var j = Math.floor(Math.random() * conjunctions.length);
    var k = Math.floor(Math.random() * 4);
    
    picked1 = nameParts[i];
    
    console.log(picked1);
    console.log(nameParts[i]);
    console.log(monthPickedName);
    console.log(conjunctions[j]);
    console.log(k);
    
    if (k == 1) {
      picked1 = picked1.toUpperCase();
      monthPickedName = monthPickedName.toUpperCase();
    } else if (k == 2) {
      picked1 = picked1.toLowerCase();
      monthPickedName = monthPickedName.toLowerCase();  
    };
    
    pickedAll = picked1 + conjunctions[j] + monthPickedName;
    $("#1st").replaceWith(pickedAll);
        
  });
});























