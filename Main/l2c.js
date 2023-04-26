// random window alert for correct
function CorrectAnswer(max) {
    var correct = ["Correct! ✅","Yay! 🎉", "Right! 🔥", "You're on a roll! 🚀"]
    var num = Math.floor(Math.random() * max);
    var ay = correct[num]
    return ay
  }

// random window alert for wrong
function WrongAnswer(max) {
    var wrong = ["Try again! ❌", "Incorrect! ❌", "Wrong ❌ Try the hint!"]
    var num = Math.floor(Math.random() * max);
    var ay = wrong[num]
    return ay
  }

// first question
function submitQuestion1(){
    var answer = document.getElementById("q1").value;
    if(answer == "# i love coding" || answer == "#i love coding" || answer == "#I love coding" || answer == "# I love coding" || answer == "#I love coding " || answer == "# I love coding "){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// first hint
function getHint1(){
    window.alert("You could Arrays or String Slicers.")
}

// second questions
function submitQuestion2(){
    var answer1 = document.getElementById("q2").value;
    if(answer1 == "202"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// second hint
function getHint2(){
    window.alert("You'll need to iterate through a String and cast a variable from a character to an integer.")
}

//third question
function submitQuestion3(){
    var answer = document.getElementById("q3").value;
    if(answer == "2"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// third hint
function getHint3(){
    window.alert("You'll need to iterate through the string, and keep a running tally everytime you come across the character.")
}

// fourth question
function submitQuestion4(){
    var answer = document.getElementById("q4").value;
    if(answer == "L27"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// fourth hint
function getHint4(){
    window.alert("Take note of how the string is set up - it will always follow the pattern of direction and distance. Both direction and distance are singular characters. Also, make sure your answer consists of both the direction, and distance. For example, your answer should be structured as 'R45'.")
}

// fifth question 
function submitQuestion5(){
    var answer = document.getElementById("q5").value;
    if(answer == "(-10, 10)" || answer == "(-10,10)" || answer == "-10, 10" || answer == "-10,10"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// fifth hint
function getHint5(){
    window.alert("Each movement you do will effect either the x-coordinate or y-coordinate. Keep a running tally of each.")
}

// sixth question
function submitQuestion6(){
    var answer = document.getElementById("q6").value;
    if(answer == "-84"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// sixth hint
function getHint6(){
    window.alert("I read in a text file of the strings. I also used a global integer variable, and a local integer variable in my method.")
}
