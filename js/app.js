$(function(){
	
	var score = 0;
	var current_question = 1;
	var guess;
	// cache callable ids
	var $questionSpace = $('#questionSpace');
	var $quoteSpace = $('div#quoteSpace');
	var $choiceSpaces = $('ul#choiceSpace').children();
	var $choiceConfirms = $('.choicespace-buttons');
	var $submitModal = $('#myModal');
	var $questionStatus = $('#questStatus');
	var $video = document.getElementById('fittedVid');
	
	// var questions = [];
	function Question(quote,choices,correct_choice,vidFile){
		this.quote = quote;
		this.choices = choices;
		this.vidFile = vidFile;
		this.correctChoice = this.choices[correct_choice];
		this.answer = function(guess) {
			/*sets the answered var to True, 
			returns result of guess*/
			this.answered = true;
			if (guess == correct_choice) {
				this.status = "Correct!";
			}
			return guess == correct_choice;
		};

		//function called to check if confirmed submitted 
		this.checkQuote = function() {
	
			//checks against the global variable guess!
			if (!this.answered) {
				$('#modalVidsLabel').text(this.answer(guess)? "Correct!" : "Incorrect");
				$('#modalVidsLabelAnswer').text("Answer "+ this.correctChoice);
				
				if (this.answer(guess)){
					$questions.correct_questions+=1;
				}
			}
		};
		this.answered = false;
		this.status = "Incorrect";
	}

	var $quest1 = new Question("\'Zerts’ are what I call desserts. ‘Trée-trées’" + 
		" are entrées. I call sandwiches ‘sammies’, ‘sandoozles’ or " + 
		" ‘Adam Sandlers’. Air conditioners are ‘cool blasterz’ with a ‘z’." + 
		" I don’t know where that came from. I call cakes ‘big ole cookies’. I " +
		" call noodles ‘long-ass rice’. Fried chicken is ‘fry-fry chicky-chick’. " + 
		" Chicken parm is ‘chicky-chicky-parm-parm’. Chicken cacciatore? ‘Chicky-cacc’. " + 
		" I call eggs ‘pre-birds’, or ‘future birds’. Root beer is ‘super water’." + 
		" Tortillas are ‘bean blankets’. And I call forks ‘food rakes.\'",
		["Leslie", "Tom", "Ann","Gary"],
		1,
		"video/Parks and Recreation - Tom explains Apps and Zerts.mp4");
	
	var $quest2 = new Question("\'Leslie, I typed your symptoms into the thing up" + 
		"here and it says you could have network connectivity problems.\'",
		["Andy", "April", "Leslie","Ron"],
		0,
		'video/Parks and Recreation- You could have network connectivity problems.mp4');

	
	var $quest3 = new Question("\'I'm a simple man. I like pretty, dark-haired " + "women and breakfast food.\'",
	["Leslie", "Tom", "Ron","Chris"],
	2,
	'video/Ron Swansons a simpleman.mp4');

	var $quest4 = new Question("\'My mom's Puerto Rican. That's why I'm so lively" + 
		"and colorful.\'",
		["Ann", "Tom", "Andy","April"],
		3,
		'video/Parks and Recreation - April- Im so lively and colorful.mp4');


	var $quest5 = new Question("\'Yesterday if you would’ve asked me, I would’ve said no. But thank God my grandfather just died so I am A-FLUUUUSHED WITH CAAAAASH!\'",
		["Jean Ralphio", "Tom", "Ron","Chris"],
		0,
		'video/Jean-Ralphio - Flushed With Cash.mp4');

	var $questions = {
			quest_array: [$quest1, $quest2, $quest3, $quest4, $quest5],
			current_question: 0,
			correct_questions: 0,
			total_questions: function() {
				return this.quest_array.length;
			},
			currentQuestion: function() {
				return this.quest_array[this.current_question];
			},
			currentQuestionCount: function() {
				return this.current_question + 1;
			},
			currentQuestionVid: function(){
				return this.quest_array[this.current_question].vidFile;
			},
			currentQuestionAnswered: function(){
				return this.quest_array[this.current_question].answered;
			},
			currentQuestionAnswer: function(){
				return this.quest_array[this.current_question].correctChoice;
			}
		};

	/*functions for generating next/previous questions*/
	
	function nextQuest() {
				
		if($questions.current_question < 4) {
			
			//increment the current question to queue the next question
			$questions.current_question +=1;

			//populate the next question
			$questionSpace.fadeOut(function() {
				$choiceSpaces.removeClass('choiceSpace-selected');
				createQuestion($questions.currentQuestion());				
			});		
		}
	}

	function prevQuest() {
				
		if($questions.current_question > 0) {
			//decrement the current question to queue the previous question
			$questions.current_question -= 1;
			
			//populate the previous question
			$questionSpace.fadeOut(function() {
				$choiceSpaces.removeClass('choiceSpace-selected');
				createQuestion($questions.currentQuestion());

			});

			
		}
	}

	// function for creating questions to iterate through
	function createQuestion(question) {
		// populate quote
		$quoteSpace.text(question.quote);
		
		//populate choices
		for (var i = question.choices.length - 1; i >= 0; i--) {
			$choiceSpaces.eq(i).text(question.choices[i]);
		}

		$('#quest_num').text('Question ' + $questions.currentQuestionCount() + " of 5" );

		//To-Do: If Question has been answered, populate status of question status as Correct or Incorrect
		$questionStatus.text(question.answered? question.status:"");
		$questionSpace.fadeIn();

	}
	
	

	//submit modal function calls
	$('#confirm').on('click', function(event) {
		event.preventDefault();
		/*sets a temporary variable to interact with current question object*/
		var confirmQuestion = $questions.currentQuestion();

		confirmQuestion.checkQuote();

		$submitModal.modal('hide').on('hidden.bs.modal', function(event) {
			event.preventDefault();
			console.log("called the weird modal hide func");
			/* When the modal closes, opens the video modal and
			sets the video src file to the current question's video file*/
			$video.src = confirmQuestion.vidFile;
			
			/*Play vid on opening the modalVids*/
			$video.play();
		});
		$('#modalVids').modal('show').on('hidden.bs.modal', function(event) {
				event.preventDefault();
				
				/*pause the video file on modal close*/
				$video.pause();
				console.log('paused a vid');
				/*To-Do: Update Answered Status after a user has answered a question*/
				$questionStatus.text(confirmQuestion.status).fadeIn('slow');
			});
	});

	/*start quiz, fade out Cast pic*/
	$('button#start').on('click', function(event) {

		event.preventDefault();

		$('img, #start').fadeOut('slow',function(){
			$('.nav-btns, #quiz').removeClass('main-hidden').fadeIn();
			console.log("removed classes");
			// $('#quiz').f		
		});
		createQuestion($questions.currentQuestion());	
		console.log($questions.current_question);
		});


	/*nav buttons to queue questions*/
	$('button#nextQuest, button#prevQuest').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */

		if(this.id === "prevQuest"){
			console.log(this.id);
			prevQuest();
		} else if (this.id === "nextQuest") {
			console.log(this.id);
			nextQuest();
		}

	});

	/* highlight effects for choice selection*/
	$choiceSpaces.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$choiceSpaces.removeClass('choiceSpace-selected');
		$(this).addClass('choiceSpace-selected');
		console.log('added choiceSpace-selected class');
		//sets the global variable guess when user clicks a choice
		guess = $(this).val();
	});

	
});