const photoContainer = document.getElementById("photo-container1");

let content="";

for(let i=0; i<15; i++){
        content += getPhotoElement(i+1);
}

photoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="imgmusica/photo_${photo_id}.jpg"/>
    </a>`; 

} 