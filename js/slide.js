$(document).ready(function(){
    var slidingDiv = document.getElementById("slidingDiv");
    var getProjectLink = document.getElementById("projectsLink");
    var slider = false;

    getProjectLink.onclick = function(){
        if(!slider){
            $(slidingDiv).slideDown();
            slider = true;
        } else {
            $(slidingDiv).slideUp();
            slider = false;
        }
    }
});