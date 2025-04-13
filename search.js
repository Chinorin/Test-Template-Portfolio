function searchInPage() {
    const searchText = document.getElementById("searchText").value.trim();

    const context = document.body;
    const instance = new Mark(context);

    instance.unmark({
        done: function () {
            instance.mark(searchText);
        }
    });
    //instance.unmark();
    //instance.mark(searchText);
    return false; 
}