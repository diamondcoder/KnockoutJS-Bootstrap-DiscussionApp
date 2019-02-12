///<reference path = "C:\Users\idawebqueen\source\repos\kuchacha\kuchacha\Scripts\knockout-3.4.2.debug.js" />


function Task(data) {
    this.title = ko.observable(data.title);
    this.completed = ko.observable(data.completed);
}

function TaskListViewModel() {


    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function () {
        return ko.utils.arrayFilter(self.tasks(), function (task) { return !task.completed() });
    });
    
    $.getJSON("https://jsonplaceholder.typicode.com/todos", function (allData) {
        var mappedTasks = $.map(allData, function (item) { return new Task(item) });
        self.tasks(mappedTasks);
    });
    
    // Operations
    self.addTask = function () {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function (task) { self.tasks.remove(task) };
}

ko.applyBindings(new TaskListViewModel());