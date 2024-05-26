var box = document.getElementsByClassName("box");
var img = document.getElementsByTagName("img");
var currentImage;


var level = localStorage.getItem("level");
var image = document.getElementsByClassName("completeImage")[0];
var iteration = 0;
if (level == "easy") {
    UpdateImage(4);
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
    UpdateImage(9);
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
    UpdateImage(16);
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



function UpdateImage(iteration) {
    var content = document.getElementsByClassName("container")[0];
    for (let i = 1; i <= iteration; i++) {
        content.innerHTML += `
        <img src="./images/hard/image_part_00${i}.jpg" alt="" style="width: 150px;height: 150px;" draggable="true">`

    }
}






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

    })
});