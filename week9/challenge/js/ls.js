async function completeTask(evt) {

    document.getElementById(evt.currentTarget.myParam).classList.add("completed");
    document.getElementById("iconFor"+evt.currentTarget.myParam).innerText = "✔️";
    var entries = await getEntries();
    
    var stutus = entries.findIndex(entry => entry.id === evt.currentTarget.myParam);
    entries[stutus].completed = true

  
    localStorage.setItem('testC', JSON.stringify(entries));
}

async function deleteTask(evt) {
    document.getElementById(evt.currentTarget.myParam).remove();

    var entries = await getEntries();
    
    var deleteable = entries.find(entry => entry.id === evt.currentTarget.myParam);


    var updatedTasks = entries.filter(entry => entry !== deleteable);

    localStorage.setItem('testC', JSON.stringify(updatedTasks));
}

async function saveEntry(entry) {

    var entries = await getEntries();

    var todoEntry = new TodoItem(entry);

    displayEntry(todoEntry, "all");
    entries.push(todoEntry);
    console.log(entries);

    localStorage.setItem('testC', JSON.stringify(entries));
}

async function getEntries() {
    var entries = await JSON.parse(localStorage.getItem('testC'));
    if (entries !== null) {
        return entries;
    } else {
        entries = [];
        return entries;
    }
}