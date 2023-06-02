// var data = [
//     {
//         link: "page1.html",
//         name: "collection",
//         icon: '<span class="material-symbols-outlined">category</span>'
//     },
//     {
//         link: "page2.html",
//         name: "profile",
//         icon: '<span class="material-symbols-outlined">person</span>'
//     },
//     {
//         link: "page3.html",
//         name: "create",
//         icon: '<span class="material-symbols-outlined">new_window</span>'
//     },
//     {
//         link: "page4.html",
//         name: "history",
//         icon: '<span class="material-symbols-outlined">manage_search</span>'
//     },
// ];

// var sidebar = document.getElementById("sidebar");
// var wrapper = document.createElement("div");
// wrapper.className = 'class-nav-links';
// for (var i = 0; i < data.length; i++) {
//     var link = document.createElement("a");
//     link.className = 'nav-link';
//     link.href = data[i].link;
//     link.innerHTML = `<div class='class-nav-link'>${data[i].icon} <span>${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)}</span></div>`;
//     wrapper.appendChild(link);
// }
// sidebar.appendChild(wrapper);

// // Mặc định active thẻ a đầu tiên (page1.html)
// // Hay nói đúng hơn là thẻ nav-link đầu tiên tìm thấy.
// var firstLink = document.querySelector('.nav-link');
// firstLink.classList.add('active');

// // Hiển thị nội dung của page1.html khi trang vừa được mở
// var defaultContentUrl = firstLink.href;
// var xhr = new XMLHttpRequest();
// xhr.open('GET', defaultContentUrl, true);
// xhr.send();

// var navLinks = document.getElementsByClassName("nav-link");
// for (var i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener("click", function (event) {
//         // event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
//         for (var j = 0; j < navLinks.length; j++) {
//             navLinks[j].classList.remove("active");
//         }
//         this.classList.add("active");
        
//         var url = this.href;
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 var content = document.querySelector('.content');
//                 content.innerHTML = xhr.responseText;
//             }
//         };
//         xhr.send();
//     });
// }


var data = [
    {
        link: "page1.html",
        name: "collection",
        icon: '<span class="material-symbols-outlined">category</span>'
    },
    {
        link: "page2.html",
        name: "profile",
        icon: '<span class="material-symbols-outlined">person</span>'
    },
    {
        link: "page3.html",
        name: "create",
        icon: '<span class="material-symbols-outlined">new_window</span>'
    },
    {
        link: "page4.html",
        name: "history",
        icon: '<span class="material-symbols-outlined">manage_search</span>'
    },
];

var sidebar = document.getElementById("sidebar");
var wrapper = document.createElement("div");
wrapper.className = 'class-nav-links';
for (var i = 0; i < data.length; i++) {
    var link = document.createElement("a");
    link.className = 'nav-link';
    link.href = data[i].link;
    link.innerHTML = `<div class='class-nav-link'>${data[i].icon} <span>${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)}</span></div>`;
    wrapper.appendChild(link);

    // Kiểm tra nếu URL trùng khớp với liên kết, thì kích hoạt lớp active
    if (window.location.href.indexOf(data[i].link) > -1) {
        link.classList.add('active');
    }
}

sidebar.appendChild(wrapper);