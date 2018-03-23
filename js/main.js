
$(document).ready(function () {
    //global variables
    //question data
    let questions = [
        {
            "questions": "Where is the location of the famous Old Faithful Hot Fountain ?",
            "answers": ["Acadia", "Yellowstone", "Redwood"],
            "correctAnswer": "Yellowstone",
        },
        {
            "questions": "The park’s Jewel-like lakes, blue and white glaciers, and naked granite pinnaclesWhere",
            "answers": ["Grand-Teton", "Sequoia", "Olymic"],
            "correctAnswer": "Grand-Teton",
        },
        {
            "questions": "Where is Cadillac Mountain ?",
            "answers": ["Zion", "Yosemite", "Acadia"],
            "correctAnswer": "Acadia",
        },
        {
            "questions": "The Park contains 150 lakes and 450 miles of streams ?",
            "answers": ["Rocky-Mountain", "Badlands", "Denali"],
            "correctAnswer": "Rocky-Mountain",
        },
        {
            "questions": "No roads cross through the park, which contains three distinct ecosystems.",
            "answers": ["Arches", "Glacier", "Olympic"],
            "correctAnswer": "Olympic",
        },
    ];

    //functions
    var timeIntv = 15000;
    var timeCnt;
    function startGame() {
        $('.js-corret-counts').text('Correct Answers:' + 0);
        $('.js-incorret-counts').text('Incorrect Answers:' + 0);
        $('.js-unanswer-counts').text('Unanswered:' + 0);

        $('.js-questions').empty();
        $('.js-time-remaining').text('Time Remaining: ' + (timeIntv) / 1000);
        //populate questions
        for (var i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].questions + '</p>');
            //loop through answeres
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('.js-questions').append('<input type="radio" id="XYZ' + j + '" name="ABC' + i + '"   value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + '</input>');
            }
            $('.js-questions').append('<br><hr>');
        }
    }


    var stopGame = function () {
        var correctCnt = 0;
        var incorrectCnt = 0;
        var unanswerCnt = 0;

        //Compute correct answers
        for (var i = 0; i < questions.length; i++) {
            if ($('input[name="ABC' + i + '"]').is(':checked')) {
                if (questions[i].correctAnswer == $('input[name=ABC' + i + ']:checked').val()) {
                    correctCnt++;
                }
                else {
                    incorrectCnt++;
                }
            }
            else {
                unanswerCnt++;
            }
        }

        $('.js-corret-counts').text('Correct Answers:' + correctCnt);
        $('.js-incorret-counts').text('Incorrect Answers:' + incorrectCnt);
        $('.js-unanswer-counts').text('Unanswered:' + unanswerCnt);
    }

    //events
    //click start button will start the game
    var counter;
    $('.js-start').on('click', function () {
        //execute instructions
        setTimeout(function () { stopGame(); }, timeIntv);
        //setInterval(function () { displayTime(); }, 500);
        var count = timeIntv/1000;
        counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        //timer runs out to end game and show score
        function timer() {
            count = count - 1;
            if (count < 0) {
                clearInterval(counter);
                //counter ended, do something here
                return;
            }

            //Do code for showing the number of seconds here
            $('.js-time-remaining').text('Time Remaining: ' + count);
        }

        startGame();
    })

    //click stop button to see score
    $('.js-stop').on('click', function () {
        var correctCnt = 0;
        var incorrectCnt = 0;
        var unanswerCnt = 0;
        clearInterval(counter);
        $('.js-time-remaining').text('Time Remaining: ' + 0);

        //Compute correct answers
        for (var i = 0; i < questions.length; i++) {
            if ($('input[name="ABC' + i + '"]').is(':checked')) {
                if (questions[i].correctAnswer == $('input[name=ABC' + i + ']:checked').val()) {
                    correctCnt++;
                }
                else {
                    incorrectCnt++;
                }
            }
            else {
                unanswerCnt++;
            }
        }

        $('.js-corret-counts').text('Correct Answers:' + correctCnt);
        $('.js-incorret-counts').text('Incorrect Answers:' + incorrectCnt);
        $('.js-unanswer-counts').text('Unanswered:' + unanswerCnt);
    })

    

});