const photoContainer = document.getElementById("photo-container2");

let content="";

for(let i=0; i<15; i++){
        content += getPhotoElement(i+1);
}

photoContainer2.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="imgcocteles/photo_${photo_id}.jpg"/>
    </a>`; 

} 