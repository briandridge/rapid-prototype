var db = require('./models');

var square_list = [
{
question: "What is Superman's guilty pleasure?",
answer: "Ben Affleck",
},
{
question: "I'm sorry I couldn't finish my homework...",
answer: "the dog ate my laptop!",
},
{
question: "I get by with a little help from _________.",
answer: "John Cena!",
}
];

db.Square.create(square_list, function(err, cards){
	if (err) {
  	console.log(err);
  	return;
	}
	console.log("created", square_list.length, "squares");
});