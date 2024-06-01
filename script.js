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



function UpdateImage(iteration,level,array) {
  let randomImagePiece = GenerateRandomImages(array)
  let random =GenrateRandomRounds(1,6);
console.log(randomImagePiece);
    var content = document.getElementsByClassName("container")[0];
    for (let i = 0; i < iteration; i++) {
      console.log(randomImagePiece[i]);
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
    console.log(e);
    e.addEventListener("dragstart", (a) => {
        console.log(a.target, "target");
        currentImage = a.target;
    })
})

Array.from(box).forEach(element => {

    element.addEventListener("dragenter", (e) => {
        e.preventDefault();
        console.log("enter");
        element.append(currentImage);

    })

    element.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("hovering");
    })

    element.addEventListener("drop", (x) => {
        x.preventDefault()
        console.log("drop");
        element.append(currentImage);
        element.style.border = "none"
        document.getElementById("extraBox1").style.border = "1px solid red"
        document.getElementById("extraBox2").style.border = "1px solid red"


    })
});


const timer =  document.getElementById("timer");
let time = 200;
const timeout =setInterval(() => {
  
  timer.innerText = time--;
  if(time==0)
    {
      clearInterval(timeout);
      document.body.innerText = "Time Out, Play again!!!"
    }
}, 1000);