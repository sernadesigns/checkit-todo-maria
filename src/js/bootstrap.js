(function() {
	var todosModel = new checkit.TodosModel();

	var todoModel = new checkit.TodoModel();
	todoModel.setContent('dinner date with Maria');
	todosModel.add(todoModel);

	var todoModel = new checkit.TodoModel();
	todoModel.setContent('buy flowers');
	todosModel.add(todoModel);

	var todoModel = new checkit.TodoModel();
	todoModel.setContent('take a shower');
	todosModel.add(todoModel);

	var view = new checkit.TodosListView(todosModel);
	document.body.appendChild(view.build());
}());