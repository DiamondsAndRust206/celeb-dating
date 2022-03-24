    function match() {
      if ($("select#gender").val() === "female" && $("select#hobby").val() === "cooking" && $("select#eye-color").val() === "blue") {
        alert("You get to date Gordon Ramsay!");
      }
  }

$(document).ready(function() {
  $("form#celeb-dating").submit(function(event) {
    const gender = $("select#gender").val();
    const hobby = $("select#hobby").val();
    const eyeColor = $("select#eye-color").val();
    match();

    event.preventDefault();
  });
});



// if (userinput#gender === male && userinput#hobby === basketball && userinput#eye-color === brown) {
//   alert("Congrats! You get to date Angelina Jolie");

//   else {
//     alert("You've got no date!")
//   }

// }
