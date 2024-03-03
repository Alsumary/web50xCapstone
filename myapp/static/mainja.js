document.addEventListener("DOMContentLoaded", function() {
  // Get the element you want to show/hide
  var elementToToggler = document.getElementById("loader");
  var elementToToggle = document.getElementById("openloader");
  var navbar = document.getElementById("nav");
  // Use setTimeout to hide the element after a delay (e.g., 5 seconds)
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        elementToToggle.style.visibility = "hidden";
        elementToToggler.style.visibility = "visible";
        
      } else{
        elementToToggle.style.visibility = "visible";
        elementToToggler.style.display = "none";
        navbar.style.position = "sticky"
      }
    }
  



  const shareInput = document.getElementById("shareInput"),
        shareCopy = document.getElementById("shareCopy");
    // const scrollTop = indow.pageYOffset || document.documentElement.scrollTop;

    shareCopy.onclick = ()=>{
      shareInput.select(); //select input value
      document.execCommand('copy')
    }
});

const image_input = document.getElementById('uploadlogo');
var uploaded_image = "";
image_input.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", function(){
    uploaded_image = reader.result;
    document.querySelector('#newavatar').style.backgroundImage = `url(${uploaded_image})`;
  })
  reader.readAsDataURL(this.files[0]);
})

