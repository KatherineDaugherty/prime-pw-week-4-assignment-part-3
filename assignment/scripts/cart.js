console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[]; //global variable set to empty

function addItem(item){  //function with a string 'item'
  basket.push('things');  //add item to basket array
  return true;
}
console.log(addItem()); //returns true 
console.log(`basket contains: ${basket}`); //one things 
console.log('adding things', addItem([])); //returns (added another things)
console.log(`basket now holds ${basket}`); // array in basket

function listItems(){
  for( taco of basket){
  } //loop
  return basket; 
}//function
console.log('In the basket we have:', listItems());



function empty(){
  basket = [];
  return 'empty';
}
console.log(empty()); //empty the basket 

console.log(listItems()); //basket array is empty 

console.log(addItem()); // added things
console.log(listItems()); //listed array 'things'


const maxItems = 5; //const max = 5 

//function isFull(){
//  for (taco for maxItems){
//    maxItems < 
//  }
//}