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

    $(".Tasks").last().click(function() {
      $("#hidden-list").show();
      $(".toDo").text(newTasks.toDo);
    });

    $("input#new-to-do").val("");
  });
});
