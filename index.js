// alert("working")


function openPopup() {

    var popupUrl = "popup.html";
    

    var popupWidth = 500;
    var popupHeight = 800;


    var leftPosition = (window.screen.width - popupWidth) / 2;
    var topPosition = (window.screen.height - popupHeight) / 2;


    var popupOptions = "width=" + popupWidth + ",height=" + popupHeight + ",top=" + topPosition + ",left=" + leftPosition;


    window.open(popupUrl, "_blank", popupOptions);
}


var popupButton = document.getElementById("popupButton");


popupButton.addEventListener("click", openPopup);
