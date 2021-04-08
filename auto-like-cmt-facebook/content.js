var timePerLikeComment = Math.floor(Math.random() * 120001) + 300000;    // 5'-7' per like & comment
var message = "Comment để kiểm tra công cụ";

var currentLocation = window.location.href;
if(currentLocation == "https://m.facebook.com/"){
    
    var posts = document.getElementsByClassName("_15ko"); // Get Like button
    for(var i=0; i<posts.length; i++) 
    { 
        if(!posts[i].classList.contains("_77la")) // Get Unlike button
        { 
            posts[i].click();
            break;
        } 
    }

    var getPostLink = document.getElementsByClassName('_26yo')[0].href;
    window.location.href = getPostLink;
}else if(document.getElementsByName("comment_text")[0] != undefined){
    var input = document.getElementsByName("comment_text")[0];
    var submit = document.querySelector('button[type="submit"]');
    submit.disabled = false;
    input.value = message;
    
    setTimeout(function(){
        submit.click();
    
        window.location.href = "https://m.facebook.com/";
    }, timePerLikeComment);
}else{
    window.location.href = "https://m.facebook.com/";
}