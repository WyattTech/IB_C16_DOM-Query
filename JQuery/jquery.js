//Create a button
$("<button />").attr("id", "btn1").appendTo("body").text("Click the Button!");

//Button Click Event with an alert
$("#btn1").on("click", function () {
  alert("All limitations are self-imposed");
});

//Created mouseover event and mouseout event
$(".div1").css("background-color", "white");

$(".div1").mouseover(function () {
  const bgcArr = [
    "#808000",
    "#008000",
    "#008000",
    "#FF7F50",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
  ];
  const randomColor = bgcArr[Math.floor(Math.random() * bgcArr.length)];
  $(".div1").css("background-color", randomColor);
});

$(document).on("mouseout", function () {
  $(".div1").css("background-color", "white"); //Color is not changing back to white???
});

//Put some text in a paragraph
$("<p />").attr("id", "para1").appendTo(".div1").text("Change is Good!");
$("#para1").on("click", function () {
    const bgcArr = [
        "#808000",
        "#008000",
        "#008000",
        "#FF7F50",
        "#9FE2BF",
        "#40E0D0",
        "#6495ED",
      ];
      const randomColor = bgcArr[Math.floor(Math.random() * bgcArr.length)];
  $("#para1").css("color", randomColor);
});

//Create a button
$("<button />").attr("id", "btn2").appendTo("body").text("Push the Button!");

//Button Click Event with an alert
$("#btn2").on("click", function () {
    $('<div />').attr("id", "div2").appendTo("#btn2")
  $('<span />').appendTo("#div2").text(' Viva la April!');

});
//Create button, ul, li and click event to add objects from an array 
$('#btn3').on("click", function() {
    const friends = ["Charlie", "Sally", "Linus", "Pig-Pen", "Lucy", "Peppermint Patty", "Snoopy", "Snoopy", "Woodstock", "Franklin", "Marcie" ];
    for(let i = 0; i < friends.length; i++) {
     let name = friends[i];
     $('<li />').appendTo('#list').text(name);
 
    }

  }); 