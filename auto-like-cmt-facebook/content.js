var timePerLikeComment = Math.floor(Math.random() * 600001) + 600000;    // 10'-20' per like & comment

// Get current day of week
var daysOfWeek = ["chủ nhật", "thứ 2", "thứ 3", "thứ 4", "thứ 5", "thứ 6", "thứ 7"];
var currentDay = new Date().getDay();

// Get name
var fullName = document.querySelector('h3._52jd').innerText;
var names = fullName.split(" ");
var name = names[names.length - 1];

// Generate messages
var messages = ["Tương tác với mình nhé <3",
                "Chúc bạn ngày mớt tốt lành <3",
                "Thấy bài này thì phải like ngay!",
                "Ngày mới vui vẻ và làm việc hiệu quả nha!",
                "Cuộc sống là cho đi! Mình cùng trao đi nhiều giá trị hơn nữa nhé!",
                `Tương tác là sợ dây gắn kết chúng ta lại với nhau. Chúc ${name} một ngày mới tốt lành và công việc thuận lợi nha!`,
                `Mong hôm nay ${name} sẽ gặp nhiều thuận lợi nha!`,
                `Nâng cao sức khỏe bằng thể dục mỗi buổi sáng, nâng cao tình bạn bằng cách qua tường nhau mỗi ngày nha ${name}!`,
                `Ngày hôm nay khó khăn. Ngày mai còn khó khăn hơn. Nhưng ngày kia sẽ là ngày tuyệt vời. Cố gắng lên nhé ${name}!`,
                `Lâu lắm rồi ko thấy bài của ${name} trên bảng tin của mình nhỉ?`,
                `Tuần mới thắng lợi nhé ${name}! Ghé thăm tường Thoa với nha <3`,
                `Một lời chào sớm mai cho ngày dài hạnh phúc. Ngày mới full năng lượng nha ${name} <3`,
                `Một nụ cười bằng 10 thang thuốc bổ vậy nên cứ cười thật nhiều cho đời thêm vui và sức khỏe dồi dạo nha ${name}`,
                `Nhờ auto tương tác mình mới lại thấy được bài của ${name} đó, lâu ghê ha?`,
                `Cứ thấy ${name} đăng bài là mình nhào vô liền, ahihi!`,
                `Chúc ${name} ${daysOfWeek[currentDay]} vui vẻ nhé <3`];

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
    // Get comment input text
    var input = document.getElementsByName("comment_text")[0];
    // Get submit button
    var submit = document.querySelector('button[type="submit"]');
    submit.disabled = false;
    var randomMessageIndex = Math.floor(Math.random() * messages.length);
    input.value = messages[randomMessageIndex];
    
    setTimeout(function(){
        submit.click();
    
        window.location.href = "https://m.facebook.com/";
    }, timePerLikeComment);
}else{
    window.location.href = "https://m.facebook.com/";
}