function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
  }
  
  function removeClassSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.remove('open');
    content.classList.remove('open');
  }
  
  function clickOutside(event) {
    var sidebar = document.getElementById('sidebar');
    var header = document.getElementById('header');
    if (!sidebar.contains(event.target) && !header.contains(event.target)) {
      removeClassSidebar();
    }
  }
  
  document.addEventListener('click', clickOutside);
  