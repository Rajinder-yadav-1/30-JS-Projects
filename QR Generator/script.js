var inputText = document.querySelector("#text");
var srcImage = document.querySelector(".srcImage");
var button = document.querySelector(".btn");
var imgBox = document.querySelector(".imgBox")
const blurInElements = document.querySelectorAll('.blur-in');


button.addEventListener("click", () => {
if(inputText.value.length > 0){
    srcImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value 
    imgBox.classList.add("show-img")
    
}else{
inputText.classList.add("error")
setInterval(() => {
    inputText.classList.remove("error")
}, 1000);
}
 
 
});




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

blurInElements.forEach(element => {
  observer.observe(element);
});

