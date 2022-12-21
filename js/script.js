$("table tbody tr  td").on("click", function () {
  $("#myModal").modal("show");
  $("#num1").val($(this).closest("tr").children()[0].textContent);
  $("#num2").val($(this).closest("tr").children()[1].textContent);
});
