$(document).ready(function() {

var imageLoader = document.getElementById('filePhoto');
    if(imageLoader!=null){
	imageLoader.addEventListener('change', handleImage, false);
    } 
function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
     $('.upload img').attr('src',event.target.result);
    }
   reader.readAsDataURL(e.target.files[0]);
}
});
