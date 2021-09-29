//initialize count as 0 listen for clicks on increment button increment the count variable when the button is clicked change the count-el in html to reflect the new count

//to get count display line from html
//camelCase
let countEl=document.getElementById('count-el') //specifying id to grab the element
let count=0

function countClicks (){
    console.log("The button was clicked")
    count+=1
    //we will change count from intial display to new value 
    //to get element text or content inside tag use inner html
    countEl.innerHTML=count
    console.log(count)
}
//to call function again and again : just write function name whereever you want to call function
//count_clicks()
//getElementById,log,innerHTML these all are functions or methods hooked on objects (document , countEl)

//Create a function save(), which logs out the count when it is called
//Save the number of people who have entered into subways at each departures
function saveCount(){
    console.log(count)
    let prevEnt=document.getElementById("prev-count")
   // prevEnt.innerHTML+=count+" - " //5-7-8-9
   prevEnt.textContent+=count+" - "
   countEl.textContent=0
   count=0
}
//here yow will see that space after - is getting ignored.So let's search for something to make spaces effective.
//use textContent as it 
//node means html element or document or etc.
/*
textContent returns the text inside the node, i.e., the Node.nodeValue.
For other node types, textContent returns the concatenation of the textContent of every child node, excluding comments and processing instructions. (This is an empty string if the node has no children.)
Setting textContent on a node removes all of the node's children and replaces them with a single text node with the given string value.
textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements and spaces aren't human readable.
textContent returns every element in the node. In contrast, innerText is aware of styling and won’t return the text of “hidden” elements.
Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)*/
