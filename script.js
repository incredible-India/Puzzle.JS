var box = document.getElementsByClassName("box");
var img = document.getElementsByTagName("img");
var currentImage;


var level = localStorage.getItem("level");
var image = document.getElementsByClassName("completeImage")[0];
var iteration = 0;
if (level == "easy") {
  UpdateImage(4,"easy",[1,2,3,4]);
  // var content = document.getElementsByClassName("container")[0];
  // for (let i = 1; i <= 4; i++) {
  //     content.innerHTML += `
  //     <img src="./images/easy/round-1/image_part_00${i}.jpg" alt="" style="width: 150px;height: 150px;" draggable="true">`

  // }
    image.innerHTML = `<div class="row">
    <div class="box"></div>
    <div class="box"></div>
</div>
  <div class="row">
    <div class="box"></div>
    <div class="box"></div>
  </div>`
}
else if (level == "medium") {
    UpdateImage(9,"medium",[1,2,3,4,5,6,7,8,9]);
    image.innerHTML = `<div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
      <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>

      <div class="row">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>`
}
else {
    UpdateImage(16,"hard",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    image.innerHTML = `
    <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>
          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>

          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </div>`

}


var randomimg;
function UpdateImage(iteration,level,array) {
  let randomImagePiece = GenerateRandomImages(array)
  let random =GenrateRandomRounds(1,6);
  randomimg=random;
// console.log(randomImagePiece);
    var content = document.getElementsByClassName("container")[0];
    for (let i = 0; i < iteration; i++) {
      // console.log(randomImagePiece[i]);
     
        content.innerHTML += `
        <img src="./images/${level}/round-${random}/image_part_00${randomImagePiece[i]}.jpg" alt="" style="width: 150px;height: 150px;" draggable="true">`

    }
}

function GenrateRandomRounds(min,max){
  return Math.floor(Math.random()*(max-min)) + min;
}


function GenerateRandomImages(array){
  for(let i = array.length-1;i>0;i--)
    {
      const j = Math.floor(Math.random()*(i+1));
      [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}

 


// drag and drop fn for image
Array.from(img).forEach(e => {
    // console.log(e);
    e.addEventListener("dragstart", (a) => {
        // console.log(a.target, "target");
        currentImage = a.target;
    })
})

Array.from(box).forEach(element => {

    element.addEventListener("dragenter", (e) => {
        e.preventDefault();
        // console.log("enter");
        element.append(currentImage);

    })

    element.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log("hovering");
    })

    element.addEventListener("drop", (x) => {
        x.preventDefault()
        // console.log("drop");
        element.append(currentImage);
        element.style.border = "none"
        document.getElementById("extraBox1").style.border = "1px solid red"
        document.getElementById("extraBox2").style.border = "1px solid red"
        CheckPAttern();

    })
});


//to show popup
var popup = document.getElementById("popup");

var replay = document.getElementById("replay");

replay.addEventListener("click", ()=>{
  location.reload();
})

const timer =  document.getElementById("timer");
var time;
if (level == "easy"){
  time = 20;
}
else if(level == "medium"){
  time = 100;
}
else{
  time = 180;
}

const timeout =setInterval(() => {
  
  timer.innerText = time--;
  if(time==0)
    {
      clearInterval(timeout);
      popup.style.display = "block";
    }
}, 1000);

var hint = document.getElementsByClassName("hintImg")[0];
if(level == "easy"){
  hint.style.display = "none";
}


//for displaying hint
document.addEventListener('DOMContentLoaded', (event) => {
  const modalBox = document.getElementById('modalBox');
  const openModal = document.getElementById('openModal');
  const closeModal = document.querySelector('.close');

  // openModal.onclick = function() {
  //     modalBox.style.display = "block";
  // }

  closeModal.onclick = function() {
      modalBox.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modalBox) {
          modalBox.style.display = "none";
      }
  }
});

var chance = 0;
var hintImage = document.getElementById("hintImage");
var hintText = document.getElementById("hintText");
hint.addEventListener("click", (e)=>{
  chance++;
  if(level == "medium" && chance == 1){
    modalBox.style.display = "block";
    hintText.innerText =`You have ${chance - 1} chances left to open this image`
  }
  if(level == "hard" && chance <= 2){
    modalBox.style.display = "block";
    hintText.innerText =`You have ${2-chance} chances left to open this image`
  }

  hintImage.setAttribute( "src", `./images/${level}/round-${randomimg}/${level}-${randomimg}.jpg`)
})

//function to check the pattherns in the box
function CheckPAttern(){
  //checking the image inside the box..
  Array.from(box).forEach(e=>{
    //console.log(e.childNodes[0].src.tostring);
  })
}

