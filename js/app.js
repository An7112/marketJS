function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
  }

  const main = document.getElementById("slideshow")
  let slideIndex = 1;
  const slideImg = [
      {
          slide: '/media/banner/banner1.jpg'
      },
      {
          slide: '/media/banner/banner2.jpg'
      },
      {
          slide: '/media/banner/banner3.jpg'
      }
  ]
  
  main.innerHTML = slideImg.map((ele, index) => (
      `
          <div class="mySlides fade">
              <img src="${ele.slide}" alt="" style="width:100%">
          </div>
     `
  )).join('')
  
  function plusS(slide) {
      plusSlides({
          n: slide
      })
  }
  function current(slide) {
      currentSlide({
          n: slide
      })
  }
  
  showSlides(slideIndex);
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      console.log(Object.keys(slides))
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
  
  