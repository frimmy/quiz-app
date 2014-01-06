$(function(){
	// var questions = [];
	var questions = [quest_0, quest_1, quest_2, quest_3, quest_4];
	var score = 0;
	var current_question = 1;
	
	var quest_0 = {
		quote: "This morning I saw a youtube video with a puppy riding a motorcycle. So my bar for stunning is pretty high.", 
		choices: ["Leslie", "Tom", "Ann","Gary"], 
		correct_choice: this.choices[1],		
		correct:0 };

	var quest_1 = {
		quote: "Leslie, I typed your symptoms into the thing up here and it says you could have network connectivity problems.",
		choices: ["Andy", "April", "Leslie","Ron"],
		correct_choice: this.choices[0],
		correct:0};

	var quest_2 = {
		quote: "I'm a simple man. I like pretty, dark-haired women and breakfast food.",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct_choice: this.choices[2],
		correct:0};

	var quest_3 = {
		quote: "The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct_choice: this.choices[2],
		correct:0};


	var quest_4 = {
		quote: "The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
		choices: ["Leslie", "Tom", "Ron","Chris"],
		correct:0};


	// function for queuing questions to iterate through
	var generateQuestion = function(question) {
		$('div#questionSpace').append()
	}

});
