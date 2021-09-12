console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//I understand this is VERY messy, figured I'd leave it so you can see the struggle.
let basket =[]; //global variable set to empty

function addItem( item ){  //function with a string 'item'
  //Why is item as parameter still showing blue? 
  console.log('in addItem', item );
  basket.push( item );  //add item to basket array
  return true;
}

addItem( 'Thing 1');
console.log(addItem('thing 2')); //returns true 
console.log(`basket contains: ${basket}`); //one things 
console.log('adding things', addItem('thing 3')); //returns (added another things)
console.log(`basket now holds: ${basket}`); // array in basket

function listItems(){
  for( taco of basket){
  } //loop
  return basket; 
}//function
console.log('In the basket we have:', listItems());

console.log(addItem('more things'));
console.log(listItems());


function empty(){
  basket = [];
  return 'empty';
}
console.log('Now to empty the basket!');
console.log(empty()); //empty the basket 

console.log(listItems()); //basket array is empty 

console.log(addItem('something new')); // added something new
console.log(listItems()); //listed array 'something new"

const maxItems = 5; //global constant variable set to 5

function isFull( ){ // did not add to additem successfully. 
  console.log('in isFull');
    if (basket < maxItems){
      return false;
    } // end false 
  else {
    return true;
  } // end isFull 
} // end function 


