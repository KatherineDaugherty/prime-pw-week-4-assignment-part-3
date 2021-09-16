console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[]; //Create a global variable named basket and set it to an empty array.
const maxItems = 5; //global constant variable set to 5

function addItem( item ){ //Create a function called addItem. It should:
//take an input parameter for a string item
//  if (isFull()) {
//    console.log('basket is FULL');
//  } else{
    console.log('let us ADD some...', item + ' to the basket' );
    basket.push( item ); //add the new item to the global array basket.
    }
//  }

addItem( 'Tea');
addItem('Water'); 
console.log(`basket contains: ${basket}`); //logs the list of items
addItem('Coffee');
console.log(`basket now holds: ${basket}`); // array in basket

console.log('NEXT SECTION --------------------');

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line
function listItems (){
  for( let item of basket){
    console.log('for loop', item);
} //end loop
}// end function

listItems();
addItem('Pinneapple Juice');
listItems();

function empty(){
  basket = [];
  console.log('The basket has been EMPTIED');
  return 'empty';
}
console.log('Now to empty the basket!');
console.log(empty()); //empty the basket 
listItems(); //basket array is empty 
addItem('something new'); // added something new
listItems(); //listed array 'something new"

function isFull( ){ 
  console.log('basket is full according to function isFUll');
return basket.length >= maxItems;
}


//   if (basket < maxItems){
//     return false;
//  } // end false 
// else {
//       return true;
//  } // end isFull 
//} // end function 
