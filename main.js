
console.log("Are we still connected?")
//=========================================================================

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  //  INPUT: Blank html document
  var answerBoxEl = document.querySelector('#inject-html .answer-box');
  answerBoxEl.innerHTML = "<h2>This is how JS in the DOM works!!</h2>";
  // OUTPUT: Inserted html string
})

//==========================================================================

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  // INPUT: html string
  var answerPTagWithValue = document.querySelector('#compoundInvestment');
  var newNumber = parseInt(answerPTagWithValue.innerHTML);
  newNumber *= 2;
  answerPTagWithValue.innerHTML = newNumber;
  //  OUTPUT: Modified html string onclick
})

//===========================================================================

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  // INPUT: Styling string
  var answerBlackDot = document.querySelector("#circle-bw");
    if (answerBlackDot.style.background === "rgb(255, 255, 255)") {
      answerBlackDot.style = "background: rgb(0, 0, 0)";
    } else {
      answerBlackDot.style = "background: rgb(255, 255, 255)";
    }
    // OUTPUT: Styling string - modified
})

//==========================================================================

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  // INPUT: String of styles
  var elem1 = document.querySelector('.circle-red');
  var initialInput = window.getComputedStyle(elem1);
  var heightNumberString = initialInput.height.slice(0, -2);
  var widthNumberString = initialInput.width.slice(0, -2);
  var heightNumber = parseInt(initialInput.height);
  var widthNumber = parseInt(initialInput.width);
  //
  if (heightNumber <= 320) {
    elem1.style.height = heightNumber * 2 + 1 + 'px';
    elem1.style.width = widthNumber * 2 + 1 + 'px';
  } else {
    elem1.style.height = "40" + 'px';
    elem1.style.width = "40" + 'px';
  }
//  OUTPUT: Manipulated elements in DOM
})

//=========================================================================

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  // INPUT: List of elements
  var activeListEl = document.querySelector('#user-list');
  var listItemElements_ALL_LIs = document.querySelectorAll('#user-list li');
  for(var i = 0; i < listItemElements_ALL_LIs.length; i += 1){
    var listItemElement_LI = listItemElements_ALL_LIs[i]
    if(listItemElement_LI.classList.contains('active') === false){
       activeListEl.removeChild(listItemElement_LI)
    }
    // OUTPUT: List elements that do not have the 'important' class
  }
})

//==========================================================================

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  // // var squareSwap = document.querySelectorAll("#reverse-squares span")
  // var black = "background: rgb(52, 73, 94) none repeat scroll 0% 0% / auto padding-box border-box"
  // var purple =  "background: rgb(142, 68, 173) none repeat scroll 0% 0% / auto padding-box border-box"
  // var red =  "background: rgb(211, 84, 0) none repeat scroll 0% 0% / auto padding-box border-box"
  // var spanElements = document.getElementsByTagName("span")
  // var newArrayHolder = []




    var kids = document.getElementById('squaresReverse').children;
    console.log([kids])
    for(var i = 0; i < 1; i++){
      if (kids[i].className === 'square s3'){
        kids[i].className = 'square s2';
        kids[i].innerHTML = '7';
        kids[i + 1].className = 'square s1';
        kids[i + 1].innerHTML = '6';
        kids[i + 2].className = 'square s2';
        kids[i + 2].innerHTML = '5';
        kids[i + 3].className = 'square s1';
        kids[i + 3].innerHTML = '4';
        kids[i + 4].className = 'square s1';
        kids[i + 4].innerHTML = '3';
        kids[i + 5].className = 'square s1';
        kids[i + 5].innerHTML = '2';
        kids[i + 6].className = 'square s3';
        kids[i + 6].innerHTML = '1';
      } else {
        kids[i].className = 'square s3',
        kids[i].innerHTML = '1';
        kids[i + 1].className = 'square s1';
        kids[i + 1].innerHTML = '2';
        kids[i + 2].className = 'square s1';
        kids[i + 2].innerHTML = '3';
        kids[i + 3].className = 'square s1';
        kids[i + 3].innerHTML = '4';
        kids[i + 4].className = 'square s2';
        kids[i + 4].innerHTML = '5';
        kids[i + 5].className = 'square s1';
        kids[i + 5].innerHTML = '6';
        kids[i + 6].className = 'square s2';
        kids[i + 6].innerHTML = '7';
      }


  }

  // for ( var i = 0; i < spanElements.length; i += 1) {
    // var computedStyling = window.getComputedStyle(spanElements)
    // console.log(computedStyling.backgroundColor[i])


    // if () {}
    // console.log(spanElements[i])
    // var colorCubes = computedStyling.background
    // console.log(colorCubes.style[i] = black)
    // newArrayHolder +=


  // }
    // console.log(computedStyling.style = black)
    // console.log(colorCubes.style = black)
  // var computedStyling = window.getComputedStyle(spanElements[i])
  // for ( var i = 0; i < spanElements.length; i += 1) {
  // console.log(window.getComputedStyle(squareSwap))
    // console.log(computedStyling.background)
    // squareSwap.style = "background: rgb(52, 73, 94) none repeat scroll 0% 0% / auto padding-box border-box"
    // squareSwap.innerHTML = "7"

    // newArrayHolder.push(squareSwap)

    // console.log(newArrayHolder)




})
























document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
