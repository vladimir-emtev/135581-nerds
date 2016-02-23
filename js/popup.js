var writeUs = document.querySelector(".write-us")
var popup = document.querySelector(".modal-block");
var close = document.querySelector(".modal-block-close");
            
writeUs.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-block-show");
});
            
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-block-show");
});