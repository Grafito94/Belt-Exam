var removeElement = document.querySelector("footer");



function iAccept(){
    removeElement.remove();
}

function alertCar(){
    alert("Your Cart is empty!");

}



function changeImg(){

    var changeImage = document.getElementById("img");
    if(changeImage.src === "http://127.0.0.1:5500/images/succulents-1.jpg"){
        changeImage.src = "images/succulents-2.jpg";
    }else{
        changeImage.src = "images/succulents-1.jpg";
    }
    console.log(changeImage.src);
}