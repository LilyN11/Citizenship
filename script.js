//This function is for the flashcards for the Covid-19 page
document.addEventListener('DOMContentLoaded', function() {
    let flash = document.querySelectorAll('.flastext');
    let answer = document.querySelectorAll('.answer');
    let question = document.querySelectorAll('.question');
    for (let i = 0; i < flash.length; i++) {
        flash[i].addEventListener('click', function() {
            if (answer[i].style.visibility == "visible") {
                flash[i].style.backgroundColor = "lightblue";
                answer[i].style.visibility = "hidden";
                question[i].style.visibility = "visible";
            } else {
                flash[i].style.backgroundColor = "lavender";
                answer[i].style.visibility = "visible";
                question[i].style.visibility = "hidden";
            }
        })
    }
});

// Functions for the matching game
document.addEventListener('DOMContentLoaded', function() {

    let start = document.querySelectorAll('.start')
    let answer = document.querySelectorAll('.ans');
    let question = document.querySelectorAll('.quest');
    var clicked = [];
    for (var i = 0; i < answer.length; i++) {
        answer[i].disabled = true;
        question[i].disabled = true;
    }
    for (var i = 0; i < start.length; i++) {
        start[i].addEventListener('click', function() {
            for (var i = 0; i < answer.length; i++) {
                answer[i].style.visibility = "visible";
                question[i].style.visibility = "visible";
                answer[i].disabled = false;
                question[i].disabled = false;
            }
        })
    }
    //for when cards match
    function matched() {
        clicked[0].style.backgroundColor = "green";
        clicked[1].style.backgroundColor = "green";
    }
    //for when cards don't match
    function unmatched() {
        clicked[0].style.backgroundColor = "red";
        clicked[1].style.backgroundColor = "red";
    }

    //I assigned each of my cards a "name" so they could be matched
    var rightorwrong = function() {
        clicked.push(this);
        var len = clicked.length;
        if (len == 2) {
            var string1 = String(clicked[1].getAttribute("name"));
            var string2 = String(clicked[0].getAttribute("name"));
            var n = string1.localeCompare(string2);
            if (n == 0) {
                matched();
                clicked = [];
            } else {
                unmatched();
                clicked = [];
            }
        };
    }

    for (var i = 0; i < answer.length; i++) {
        answer[i].addEventListener("click", rightorwrong);
        question[i].addEventListener("click", rightorwrong);
    };

});

//Revealing the english for the audio
document.addEventListener('DOMContentLoaded', function() {
    let english = document.querySelectorAll('.english');
    let button = document.querySelectorAll('.but');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            english[i].style.visibility = "visible";
        })
    }
});

//The making of the practice test
document.addEventListener('DOMContentLoaded', function() {
    var randomnum = [];
     let testquestions = document.querySelectorAll(".tquestions");
    let realanswer = document.querySelectorAll(".realanswer");
    let testanswers = document.querySelectorAll(".tanswer");
    let answers = document.getElementsByTagName("input");
    function checking() {
        var values = [];
        for (var i = 0; i < testquestions.length; i++) {
            values.push(answers[i].value)
            if (values[i] == myarray[randomnum[i]].response) {
                answers[i].style.backgroundColor = 'green';
                realanswer[i].innerHTML = "Correct!";
            } else {
                answers[i].style.backgroundColor = 'red';
                realanswer[i].innerHTML = myarray[randomnum[i]].response;
            }
            
        }
    }
    //Generating an array of 10 random numbers from 1 to 33
    while (randomnum.length < 10) {
        var random_number = Math.floor(Math.random() * (32) + 1);
        //This if statement checks if the new generated number was already in the array 
        if (randomnum.indexOf(random_number) == -1) {
            randomnum.push(random_number);
        }
    }

   
    //I am replacing all my src links with the src link names I kept in my data.js file
    function myFunction(arr) {
        for (var i = 0; i < testquestions.length; i++) {
            testquestions[i].src = arr[randomnum[i]].question;
        };
    }
    myFunction(myarray);


document.getElementById("banana").addEventListener("click", checking)
});