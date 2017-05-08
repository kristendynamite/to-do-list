//Business Logic
function Tasks(toDo) {
  this.toDo = toDo;
}

//User Interface Logic
$(function() {
  $("form#form-to-do").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-to-do").val();

    var newTasks = new Tasks(userInput);

    $("ul#hidden-list").append("<li><span class='Tasks'>" + newTasks.toDo + "</span></li>");


    $("ul#hidden-list").on("click", "li", function() {
      $(this).show();
      $(this).hide();
    });

    $("input#new-to-do").val("");
  });
});
