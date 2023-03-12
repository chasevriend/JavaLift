// data structures
let myEntries = [];
let myPRs = [];

//class to create new Entries (objects)
class Entry {
    constructor(date, bw, diet, exercise) {
        this.date = date;
        this.bw = bw;
        this.diet = diet;
        this.exercise = exercise;
    }
}

//class to create new PRs (objects)
class PR{
    constructor(date2, exercise2, weight, reps) {
        this.date2 = date2;
        this.exercise2 = exercise2;
        this.weight = weight;
        this.reps = reps;
    }
}

//get entries from local storage
if(window.localStorage.getItem("entries") === null) {
    myEntries = [];
} else {
    const entriesFromStorage = JSON.parse(window.localStorage.getItem("entries"));
    myEntries = entriesFromStorage;
}

//get PRs from local storage
if(window.localStorage.getItem("PRs") === null) {
    myPRs = [];
} else {
    const prsFromStorage = JSON.parse(window.localStorage.getItem("PRs"));
    myPRs = prsFromStorage;
}

//recieve data from inputs 
//recieves input for date for entries
document.getElementById("date").addEventListener("change", function() {
    entryDate = this.value;
    date = entryDate
})

//recieves input for diet
function dietYN() {
    let entryDiet = document.getElementById("diet");
    if(entryDiet.checked === true) {
        diet = "😎";
    } else if(entryDiet.checked === false) {
        diet = "😡";
    }
}

dietYN();

// recieves input for exercise
function exerciseYN() {
    let entryExercise = document.getElementById("exercise");
    if(entryExercise.checked === true) {
        exercise = "😎";
    } else if(entryExercise.checked === false) {
        exercise = "😡";
    }
}

exerciseYN();

// onclick post entry button 
function addEntry() {
    let bw = document.getElementById("weight").value;

    //recieves input for diet
    function dietYN() {
        let entryDiet = document.getElementById("diet");
        if(entryDiet.checked === true) {
            diet = "😎";
        } else if(entryDiet.checked === false) {
            diet = "😡";
        }
    }

    //recieves input for exercise
    function exerciseYN() {
        let entryExercise = document.getElementById("exercise");
        if(entryExercise.checked === true) {
            exercise = "😎";
        } else if(entryExercise.checked === false) {
            exercise = "😡";
        }
    }

    //call functions 
    dietYN();
    exerciseYN();

    //creates the new Entry Object
    const entry = new Entry(date, bw, diet, exercise);

    //pushes the new entry into our array of current entries
    myEntries.push(entry);

    //displays entries 
    showEntries();
}

//creates table rows and displays data
function showEntries() {
    //save to local storage
    window.localStorage.setItem("entries", JSON.stringify(myEntries));

    //determine weight Lost 
    let last = myEntries[myEntries.length - 1].bw
    const weightLostEl = document.getElementById("weightLostEl");
    weightLostEl.innerHTML = 230 - last + "lbs";

    // call functions
    dietYN();
    exerciseYN();
    
    //identify the table body
    const entryList = document.querySelector(".table-body");
    entryList.textContent="";
    for(let i = 0; i < myEntries.length; i++) {
        const entryRow = document.createElement("tr");
        entryRow.classList.add("active-row");
        entryList.appendChild(entryRow);
        //for date
        const dataDate = document.createElement("td");
        dataDate.textContent = myEntries[i].date;
        entryRow.appendChild(dataDate);

        //for weight
        const dataBW = document.createElement("td");
        dataBW.textContent = myEntries[i].bw
        entryRow.appendChild(dataBW);

        //for diet
        const dataDiet = document.createElement("td");
        dataDiet.textContent = myEntries[i].diet;
        entryRow.appendChild(dataDiet);

        //for exercise
        const dataExercise = document.createElement("td");
        dataExercise.textContent = myEntries[i].exercise
        entryRow.appendChild(dataExercise);
    }
}
showEntries();

//recieved input for date for PRs
document.getElementById("date-el").addEventListener("change", function() {
    prDate = this.value;
    date2 = prDate;
})

// onclick post PR button 
function addPR() {
    //recieve inputs 
    let exerciseEl = document.getElementById("exercise-el").value;
    let weight = document.getElementById("weight-el").value;
    let reps = document.getElementById("reps-el").value;

    //recieved input for date for PRs
    document.getElementById("date-el").addEventListener("change", function() {
        prDate = this.value;
        date2 = prDate;
    })

    //convert exercise input into a string 
    let exercise2 = exerciseEl.toString();
    //creates the new PR Object
    const newPR = new PR(date2, exercise2, weight, reps);

    //pushes the new PR into our array of current PRs
    myPRs.push(newPR);
    
    //displays PRS
    showPRs();
}

//show PRs
function showPRs() {
    //save to local storage
    window.localStorage.setItem("PRs", JSON.stringify(myPRs));

    //identify the table body
    const prList = document.querySelector(".table-body2");
    prList.textContent="";
    for(let i = 0; i < myPRs.length; i++) {
        const prRow = document.createElement("tr");
        prRow.classList.add("active-row");
        prList.appendChild(prRow);
        //for date
        const prDate = document.createElement("td");
        prDate.textContent = myPRs[i].date2;
        prRow.appendChild(prDate);

        //for weight
        const prExercise = document.createElement("td");
        prExercise.textContent = myPRs[i].exercise2;
        prRow.appendChild(prExercise);

        //for diet
        const prWeight = document.createElement("td");
        prWeight.textContent = myPRs[i].weight;
        prRow.appendChild(prWeight);

        //for exercise
        const prReps = document.createElement("td");
        prReps.textContent = myPRs[i].reps;
        prRow.appendChild(prReps);
    }
}
showPRs();

// console.log(myPRs);
// console.log(myEntries);

//to remove local storage and restart
// localStorage.clear();
