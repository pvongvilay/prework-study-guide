var topics = ['HTML', 'CSS', 'Git','JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
console.log(topics);
var topic = "HTML";
function listTopic() {
  for (var x=0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}
function selectTopic() {
  if (randomTopic ==='HTML') {
    console.log("Let's study HMTL!");
  } else if (randomTopic ==='CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Lets Study Git!");    
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log ('Please try again!');
  }
}
console.log('Here are the topics we learned through Prework');
listTopic();
console.log('Which topic should we study first?')
selectTopic();