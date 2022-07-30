// Xoá bỏ hành vi mặc định của trình duyệt trên thẻ HTML

aElements = document.querySelectorAll('a');

for (var i = 0; i<aElements.length; ++i){
    aElements[i].onclick = function(e){
        // Nếu href không bắt đầu với chuỗi trong startsWith thì ko thực hiện
        if(!e.target.href.startsWith('https://vi-vn.facebook.com/')){
            // Loại bỏ hành vi mặc định của trình duyệt
            e.preventDefault();
        }
    }    
}

// Loại bỏ hành vi khi nhấn chuột ra khỏi vùng ô tìm kiếm của thẻ input
ulElement = document.querySelector('ul');

// Loại bỏ mặc định của thẻ ul
// onmousedown là khi dùng tay nhấn chuột xuống và chưa thả ra
ulElement.onmousedown = function(e){
    e.preventDefault();
}

// click vào thẻ li trong thẻ ul 
ulElement.onclick = function(e){
    console.log(e.target);
}

// Xử lí sự kiện nổi bọt
document.querySelector('div').onclick = function(){
    console.log('text');
}

document.querySelector('button').onclick = function(e){
    // Dừng sự kiện nổi bọt
    e.stopPropagation();
    console.log('click');
}