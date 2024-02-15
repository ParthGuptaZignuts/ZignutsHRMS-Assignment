// function navbar
function toggleNavLinks() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  // selling changes 
  var tabs = document.querySelectorAll(".tab2");
  // Add click event listener to each tab
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      // Add active class to the clicked tab
      tab.classList.add("active");
    });
  });
  
  var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  
    // tabing section 
  var Chairdiv = document.getElementById("Chair");
  var Bedsdiv = document.getElementById("Beds");
  var Sofadiv = document.getElementById("Sofa");
  var Lampdiv = document.getElementById("Lamp");
  
  var Chairli = document.getElementById("Chairli");
  var Bedsli = document.getElementById("Bedsli");
  var Sofali = document.getElementById("Sofali");
  var Lampli = document.getElementById("Lampli");
  
  Chairdiv.style.display = "block";
  Bedsdiv.style.display = "none";
  Sofadiv.style.display = "none";
  Lampdiv.style.display = "none";
  
  function openChair() {
  Chairdiv.style.display = "block";
  Bedsdiv.style.display = "none";
  Sofadiv.style.display = "none";
  Lampdiv.style.display = "none";
  }
  
  function openBeds() {
  Chairdiv.style.display = "none";
  Bedsdiv.style.display = "block";
  Sofadiv.style.display = "none";
  Lampdiv.style.display = "none";
  }
  
  function openSofa() {
  Chairdiv.style.display = "none";
  Bedsdiv.style.display = "none";
  Sofadiv.style.display = "block";
  Lampdiv.style.display = "none";
  }
  
  function openLamp() {
  Chairdiv.style.display = "none";
  Bedsdiv.style.display = "none";
  Sofadiv.style.display = "none";
  Lampdiv.style.display = "block";
  }
  
  
  
    