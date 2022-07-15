let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};


ScrollReveal({
   //reset: true,
   distance: '60px',
   duration: 2500,
   delay: 200,
  });

  ScrollReveal().reveal('.hero-title h1', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.hero-title p', { delay: 700, origin: 'left' });
  ScrollReveal().reveal('.btn', { delay: 800, origin: 'left'});
  ScrollReveal().reveal('.about-title h1, .platform-title h1, .comment-title h1, .subscribe-title h1', { delay: 400, origin: 'bottom'});
  ScrollReveal().reveal('.about-title p, .platform-title p, .comment-title p, .subscribe-title p', { delay: 600, origin: 'bottom'});
  ScrollReveal().reveal('.about-container, .comment-container, .subscribe-search', { delay: 800, origin: 'bottom' });
  ScrollReveal().reveal('.hero-img, #slidy-container', { delay: 800, origin: 'bottom', interval: 200 });

var timeOnSlide = 3, 		
timeBetweenSlides = 1,
animationstring = 'animation',
animation = false,
keyframeprefix = '',
domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
pfx  = '',
  slidy = document.getElementById("slidy"); 
  if (slidy.style.animationName !== undefined) 
    { animation = true; } 
  if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
      if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }
  if( animation === false ) {
  
  } 
  else {
    var images = slidy.getElementsByTagName("img"),
        firstImg = images[0], 
        imgWrap = firstImg.cloneNode(false);  
    slidy.appendChild(imgWrap); 
    var imgCount = images.length, 
        totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), 
        slideRatio = (timeOnSlide / totalTime)*100,
        moveRatio = (timeBetweenSlides / totalTime)*100, 
        basePercentage = 100/imgCount, 
        position = 0,
        css = document.createElement("style"); 
    css.type = "text/css";
    css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; 
    css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
    css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
    for (i=0;i<(imgCount-1); i++) { 
      position+= slideRatio; 
      css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
      position += moveRatio; 
      css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
  }
    css.innerHTML += "}\n";
    css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; 
  document.body.appendChild(css);
  }

