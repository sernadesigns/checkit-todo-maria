(function() {
	var model = new checkit.TodosModel();

	var view = new checkit.TodosInputView(model);
	document.body.appendChild(view.build());

	var view = new checkit.TodosListView(model);
	document.body.appendChild(view.build());
}());