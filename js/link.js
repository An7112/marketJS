

var data = [
    {
        link: "/app.html",
        name: "Home page",
        icon: '<span class="material-symbols-outlined">home</span>'
    },
    {
        link: "/pages/collection/collection.html",
        name: "collection",
        icon: '<span class="material-symbols-outlined">category</span>'
    },
    {
        link: "/pages/profile/profile.html",
        name: "profile",
        icon: '<span class="material-symbols-outlined">person</span>'
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