///<reference path = "C:\Users\idawebqueen\source\repos\kuchacha\kuchacha\Scripts\knockout-3.4.2.debug.js" />
    var viewModel = {
        shouldShowMessage: ko.observable(true) // Message initially visible
};
// viewModel.shouldShowMessage(false); // ... now it's hidden
//viewModel.shouldShowMessage(true); // ... now it's visible again
ko.applyBindings(viewModel);