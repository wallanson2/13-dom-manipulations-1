
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
  //  INPUT: A div of objects with properties
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
      //  OUTPUT:  Modified properties
  }
})



//======================================================================

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  //  INPUT: A list with strings

  var backwardsStrings = document.getElementById('tasks').children;
  for ( var i = 0; i < backwardsStrings.length; i += 1) {
    var splitStrg = backwardsStrings[i].innerHTML.split('').reverse().join('')
    backwardsStrings[i].innerHTML = splitStrg
  }
  //  OUTPUT: Modified list -- backwards strings
})

//========================================================================

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   //  INPUT:
 // console.log(imgFolder)
  //
  // var imgFolder = document.getElementById('city-img')
  // // var scrAtt = imgFolder.getAttribute('src')
  // var imgEl = imgFolder.getAttribute('src')
  // imgEl = "/Users/homeBase1/TIY/assignments/assignment-13-dom-manipulations/images"
  // console.log([imgEl])
  //
  // // for (var i = 0; i <
  // // imgFolder.src = "./images"
  // imgFolder.src =

    // console.log(images)

  // for (var i = 0; i < 10; i += 1) {
  //   document.getElementById('city-img').src = '"./images/city-photo-"[i]".jpg"'
  //
  // }
  //  var picSlideShow = document.getElementById('cityBox')
  //  var imgStyles = window.getComputedStyle('images')
  //  console.log([picSlideShow])
  // var imgArray = [
  //   'images/city-photo-1.jpg',
  //   'images/city-photo-2.jpg',
  //   'images/city-photo-3.jpg',
  //   'images/city-photo-4.jpg',
  //   'images/city-photo-5.jpg',
  //   'images/city-photo-6.jpg',
  //   'images/city-photo-7.jpg',
  //   'images/city-photo-8.jpg',
  //   'images/city-photo-9.jpg',
  //   'images/city-photo-10.jpg'
  // ]





  // counter = 0
  // if (counter < 10) {
  //     document.getElementById('city-img')
  //     // var = imgArray[counter];
  // //     console.log(imgArray[counter])
  //     counter = counter + 1
  // //
  // }
  //
  // console.log(counter)
    // } else {
    //   document.getElementById('city-img').src = imgArray[2]



  //  var imgFileLength = window.images.length
  //  console.log(imgFileLength)
  //  for ( var i = 0; i < imgfileLength; i += 1) {
    // var imagesLength = document.getElementById('city-img').src
  // if( document.getElementById('city-img').src === './images/city-photo-1.jpg') {
    // console.log(imagesLength)

    // document.getElementById('city-img').src = './images/city-photo-2.jpg';
  // }
    //  imgArray.push(document.images[i])
    //  console.log(imgArray)
  //  }

  // picSlideShow.innerHTML = " <img id="city-img" class="exercise-item" src="./images/city-photo-2.jpg">";
    // picSlideShow.innerHTML = 'src='./images/city-photo-2.jpg''
    // for (var i = 0; i < 10) {}
  // var imgArray = document.getElementById(images)
  // function addimage() {
  //          var img = document.createElement("img");
  //          img.src = "/Users/homeBase1/TIY/assignments/assignment-13-dom-manipulations/images/city-photo-2.jpg";
  //          //optionally set a css class on the image
  //          var class_name = "foo";
  //          img.setAttribute("class", class_name);
  //
  //          document.body.appendChild(img);
  //        }

//========================  good code =============================
    // document.getElementById('city-img').src = "./images/city-photo-2.jpg"
//================================================================
    // imgEl.innerHTML = "src = ./images/city-photo-2.jpg"


})























//====================================================================
