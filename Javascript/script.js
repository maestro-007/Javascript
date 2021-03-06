/*var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job= job
}

Person.prototype.calculateAge = function(){
    console.log(2020-this.yearOfBirth);
}

var ali = new Person('Ali', 1991, 'Developer');
var yula = new Person('Yula', 1992, 'Artist');

ali.calculateAge();
yula.calculateAge();
console.log(ali, yula);

var obj1 = {
    name: 'ali',
    age : 30
};
var obj2 = obj1;
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);

var years = [1991, 2004, 1964, 1946, 1984];

function arrayCalc(arr, fn){
    var arrRes =[];
    for (i=0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el){
    return 2020-el;
}

function isOfAge(el){
    return el>=18;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);
var fullAges = arrayCalc(ages,isOfAge);
console.log(fullAges);

function interview(job){            
    var a = 'What do you teach ';
    var b = 'Can you explain UX, ';
    var c = 'What do you do ';
    return function(name){
        if (job === 'teacher'){
            console.log(a + name + '?')
        }
        else if(job === 'designer'){
            console.log(b + name + '?')
        }
        else 
        console.log(c + name + '?')
    }
}

var findjob = interview('teacher');
findjob('Ali');

interview('teacher')('Ali');
interview('designer')('Assaad');
interview('')('Fawzi');




--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for(i=0; i<this.answers.length; i++){
            console.log(i + '.' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if (ans === this.correct)
        {
            console.log('Correct!');
            sc = callback(true);
        }
        else{
            console.log('Wrong Answer, please try again.');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Which football team is the strongest in the world?',
                        ['Brasil', 'Argentina', 'Germany', 'France', 'Italy'],
                        2);
    
    var q2 = new Question('Who is the smartest person in the world?',
                        ['Assaad', 'Ali', 'Fawzi'],
                        1);
    
    var q3 = new Question('Are religions Stupid?',
                        ['Yes', 'No'],
                        0);
    
    var questions = [q1, q2, q3];

    function score (){
            var sc = 0;
            return function (correct){
             if(correct){
                sc++;
             }
             return sc;
            }
    }
    

    var keepScore = score();
    
    function nextQuestion () {
        var n = Math.floor(Math.random()*questions.length);
    
        questions[n].displayQuestion();
    
        var answer = prompt('Please write the number of the correct answer.');
    
        if (answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();


})();





