var box = document.getElementsByClassName("box");
var img = document.getElementsByTagName("img");
var currentImage;

Array.from(img).forEach(e =>{
    console.log(e);
    e.addEventListener("dragstart",(a)=>{
        console.log(a.target, "target");
        currentImage = a.target;
    })
})

Array.from(box).forEach(element => {

    element.addEventListener("dragenter",(e)=>{
e.preventDefault();
console.log("enter");
element.append(currentImage);

    })

    element.addEventListener("dragover",(e)=>{
        e.preventDefault();
        console.log("hovering");
    })

    element.addEventListener("drop",(x)=>{
        x.preventDefault()
        console.log("drop");
        element.append(currentImage);
        element.style.border ="none"
        
    })
});
