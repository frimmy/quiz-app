$(function(){
	// var questions = [];
	
	var score = 0;
	var current_question = 1;
	// cache callable ids
	var $questionSpace = ('div#questionSpace');
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
			current_question: 1,
			correct_questions: 0,
			total_questions: function() {
				return this.quest_array.length;
			},
			nextQuest : function () {
				// takes array and moves to next question
								
				if (this.current_question < 5) {
					createQuestion(this.quest_array[this.current_question-1]);
				}
				
				this.current_question += 1;
			}
		};

	// function for creating questions to iterate through
	function createQuestion($question) {
		// sets correct choice
		console.log($question);
		this.correct_choice = $question.correct_choice;

		// populate quote
		$quoteSpace.text($question.quote);
		
		//populate choices
		for (var i = $question.choices.length - 1; i >= 0; i--) {
			$choiceSpaces.eq(i).text($question.choices[i]);
		}

		$($questionSpace).fadeIn('slow');

	}

	
	var testCreateQuest = setInterval(function() {
			$questions.nextQuest();
			$($questionSpace).fadeOut('slow');
		},2000);

	for (var i = 0; i < $questions.quest_array.length; i++) {
		testCreateQuest();

	}
	
});