const photoContainer = document.getElementById("photo-container3");

let content="";

for(let i=0; i<8; i++){
        content += getPhotoElement(i+1);
}

photoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="imgdeporte/photo_${photo_id}.jpg"/>
    </a>`; 

} 