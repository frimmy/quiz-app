$(function(){
	// var questions = [];
	
	var score = 0;
	var current_question = 1;
	// cache callable ids
	var $questionSpace = $('#questionSpace');
	var $quoteSpace = $('div#quoteSpace');
	var $choiceSpaces = $('ul#choiceSpace').children();

	var $quest1 = {
		quote: "\'This morning I saw a youtube video with a puppy riding a motorcycle. So my bar for stunning is pretty high.\'", 
		choices: ["Leslie", "Tom", "Ann","Gary"], 
		correct_choice: 1,
		correct:0 };

	var $quest2 = {
		quote: "\'Leslie, I typed your symptoms into the thing up here and it says you could have network connectivity problems.\'",
		choices: ["Andy", "April", "Leslie","Ron"],
		correct_choice: 0,
		correct:0};

	
	var $quest3 = {
		quote: "\'I'm a simple man. I like pretty, dark-haired women and breakfast food.\'",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct_choice: 2,
		correct:0};

	var $quest4 = {
		quote: "\'My mom's Puerto Rican. That's why I'm so lively and colorful.\'",
		choices: ["Ann", "Tom", "Andy","April"],
		correct_choice: 3,
		correct:0};


	var $quest5 = {
		quote: "\'My parents had it amended. I don't get anything until I'm 50, which is a waste because I'm going to be a billionaire in Costa Rica by then. Eatin' dolphin and hangin' out with lady singers.\'",
		choices: ["Jean Ralphio", "Tom", "Ron","Chris"],
		correct_choice: 0,
		correct:0};

	var $questions = {
			quest_array: [$quest1, $quest2, $quest3, $quest4, $quest5],
			current_question: 0,
			correct_questions: 0,
			total_questions: function() {
				return this.quest_array.length;
			}
		};

	/*functions*/
	
	function nextQuest() {
		var curr_quest = $questions.current_question;
		
		if(curr_quest < 5) {
			curr_quest += 1;

			// $quoteSpace.fadeOut('fast');
			// $choiceSpaces.fadeOut('fast');
			
			$questionSpace.fadeOut(function() {
				$choiceSpaces.removeClass('choiceSpace-hovered');
				createQuestion($questions.quest_array[curr_quest - 1]);
				console.log("called the creatQuestiohn");

			});
			

			$questions.current_question +=1;
		}

		
	}

	function prevQuest() {
		var curr_quest = $questions.current_question;
		
		if(curr_quest > 1) {
			curr_quest -= 1;
			
			$questionSpace.fadeOut(function() {
				$choiceSpaces.removeClass('choiceSpace-hovered');
				createQuestion($questions.quest_array[curr_quest - 1]);

			});

			$questions.current_question = curr_quest;
		}

	}

	// function for creating questions to iterate through
	function createQuestion(question) {
		// sets correct choice
			// $questionSpace.fadeOut(function(){console.log("Faded Out");});

			/*console.log(question);*/
			this.correct_choice = question.correct_choice;

			
			// populate quote
			$quoteSpace.text(question.quote);
			
			//populate choices
			for (var i = question.choices.length - 1; i >= 0; i--) {
				$choiceSpaces.eq(i).text(question.choices[i]);
			}

			$questionSpace.fadeIn(function(){console.log("Faded In");});	
		}
		
	
	/*start quiz, fade out Cast pic*/
	$('button#start').on('click', function(event) {

		event.preventDefault();

		$('img, #start').fadeOut(function(){
			$('.nav-btns, #quiz').removeClass('main-hidden').fadeIn();
			console.log("removed classes");
			// $('#quiz').f		
		});
		nextQuest();	
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
		$choiceSpaces.removeClass('choiceSpace-hovered');
		$(this).addClass('choiceSpace-hovered');
		console.log($(this)+"clicked");
	});

	
	/*Modal for submit button*/
	
});