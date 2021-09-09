console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[]; //global variable set to empty

function addItem(item){  //function with a string 'item'
  basket.push('item');  //add item to basket array
  return true;
}
console.log(addItem('item'));
console.log(`basket contains: ${basket}`);




function listItems(){
  for ( let i = 0; i <= basket.length; i++){
    console.log(basket[i]);
  }
}
console.log('In the basket we have:', listItems());




function empty(){
  basket = [];
  return 'empty';
}
console.log(empty());