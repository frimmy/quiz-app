$(function(){
	// var questions = [];
	
	var score = 0;
	var current_question = 1;
	// cache callable ids
	var $questionSpace = ('div#questionSpace');
	var $quoteSpace = $('div#quoteSpace');
	var $choiceSpace = $('ul#choiceSpace');

	var $quest_0 = {
		quote: "\'This morning I saw a youtube video with a puppy riding a motorcycle. So my bar for stunning is pretty high.\'", 
		choices: ["Leslie", "Tom", "Ann","Gary"], 
		correct_choice: 1,
		correct:0 };

	var $quest_1 = {
		quote: "\'Leslie, I typed your symptoms into the thing up here and it says you could have network connectivity problems.\'",
		choices: ["Andy", "April", "Leslie","Ron"],
		correct_choice: 0,
		correct:0};

	var $quest_2 = {
		quote: "\'I'm a simple man. I like pretty, dark-haired women and breakfast food.\'",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct_choice: 2,
		correct:0};

	var $quest_3 = {
		quote: "\'My mom's Puerto Rican. That's why I'm so lively and colorful.\'",
		choices: ["Ann", "Tom", "Andy","April"],
		correct_choice: 3,
		correct:0};


	var $quest_4 = {
		quote: "\'My parents had it amended. I don't get anything until I'm 50, which is a waste because I'm going to be a billionaire in Costa Rica by then. Eatin' dolphin and hangin' out with lady singers.\'",
		choices: ["Jean Ralphio", "Tom", "Ron","Chris"],
		correct_choice: 0,
		correct:0};

	var $questions = [$quest_0, $quest_1, $quest_2, $quest_3, $quest_4];

	// function for queuing questions to iterate through
	var createQuestion = function($question) {
		// sets correct choice
		// console.log($question);
		this.correct_choice = $question.correct_choice;

		// populate quote
		$quoteSpace.text($question.quote);
		
		//populate choices
		for (var i = $question.choices.length - 1; i >= 0; i--) {
			$choiceSpace.append(
				'<li>'+ $question.choices[i] + '</li>'
			);
		}

		$($questionSpace).fadeIn('slow');

	};

	createQuestion($questions[0]);
});