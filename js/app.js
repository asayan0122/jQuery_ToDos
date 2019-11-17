$(function() {
  $(".todo_reg_btn").on("click", function(e) {
    e.preventDefault();
 
    var todolist =
      '<div class="cards js-list">' +
      $(".js_val_task").val() +
      "<br>" +
      $(".js_val_details").val() +
      "<br>" +
      $(".js_val_limit").val() +
      "<br>" +
      '<button type="button" class="btn btn-outline-secondary js-click-done">完了</button></div>';
    $(".js_todo_list").append(todolist);
    $(".js_val_task").val("");
    $(".js_val_details").val("");
    $(".js_val_limit").val("");
    $(".js_modal_close").modal("hide");

    //削除
    $(document).on("click", ".js-click-done", function() {
      $(this)
        .closest(".js-list")
        .fadeOut("slow", function() {
          this.remove();
        });
    });
  });

  //タスクの移動
  Sortable.create(task_list, {
    sort: 1,
    group: {
      name: "todo_lists",
      pull: true,
      put: true
    },
    animation: 50
  });
  Sortable.create(progress, {
    sort: 1,
    group: {
      name: "todo_lists",
      pull: true,
      put: true
    },
    animation: 50
  });
  Sortable.create(conplete, {
    sort: 1,
    group: {
      name: "todo_lists",
      pull: true,
      put: true
    },
    animation: 50
  });
});
