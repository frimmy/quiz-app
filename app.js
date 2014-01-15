$(function(){
	// var questions = [];
	
	var score = 0;
	var current_question = 1;
	// cache callable ids
	var $questionSpace = $('#questionSpace');
	var $quoteSpace = $('div#quoteSpace');
	var $choiceSpaces = $('ul#choiceSpace').children();
	var $choiceConfirms = $('.choicespace-buttons');
	var $submitModal = $('#myModal');

	var $quest1 = {
		quote: "\'This morning I saw a youtube video with a puppy riding a motorcycle. So my bar for stunning is pretty high.\'", 
		choices: ["Leslie", "Tom", "Ann","Gary"], 
		correct_choice: 1,
		correct:0,
		youTubeLink: '' };

	var $quest2 = {
		quote: "\'Leslie, I typed your symptoms into the thing up here and it says you could have network connectivity problems.\'",
		choices: ["Andy", "April", "Leslie","Ron"],
		correct_choice: 0,
		correct:0,
		youTubeLink: ''};

	
	var $quest3 = {
		quote: "\'I'm a simple man. I like pretty, dark-haired women and breakfast food.\'",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct_choice: 2,
		correct:0,
		youTubeLink: ''};

	var $quest4 = {
		quote: "\'My mom's Puerto Rican. That's why I'm so lively and colorful.\'",
		choices: ["Ann", "Tom", "Andy","April"],
		correct_choice: 3,
		correct:0,
		youTubeLink: ''};


	var $quest5 = {
		quote: "\'My parents had it amended. I don't get anything until I'm 50, which is a waste because I'm going to be a billionaire in Costa Rica by then. Eatin' dolphin and hangin' out with lady singers.\'",
		choices: ["Jean Ralphio", "Tom", "Ron","Chris"],
		correct_choice: 0,
		correct:0,
		youTubeLink: ''};

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
			}
		};

	/*functions*/
	
	function nextQuest() {
				
		if($questions.current_question < 4) {
			
			//increment the current question to queue the next question
			$questions.current_question +=1;

			//populate the next question
			$questionSpace.fadeOut(function() {
				$choiceSpaces.removeClass('choiceSpace-selected');
				createQuestion($questions.currentQuestion());
				console.log("called the creatQuestion");
				
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

			$questions.current_question = curr_quest;
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
		$questionSpace.fadeIn();

	}
	
	//function called to check if confirmed submitted 
	function checkQuote (question, val) {
		// alert(question.correct_choice);
		
		alert(question.correct_choice == val);
		console.log(question,question.correct_choice);
	}

	//function called to close the submit modal
	$('#confirm').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$submitModal.modal('hide').on('hidden.bs.modal', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('#modalVids').modal('show');

		});


	});

	/*start quiz, fade out Cast pic*/
	$('button#start').on('click', function(event) {

		event.preventDefault();

		$('img, #start').fadeOut(function(){
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
		checkQuote($questions.currentQuestion(),$(this).val());
		console.log("called checkQuote fun");
	});

	
});