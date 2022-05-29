//изменение цвета заголовка
i=0;
dt=new Array("#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
function cl() // эта функция будет менять цвет текста
{document.getElementById("web").style.color=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl()",1000);}
setTimeout("cl()",1000);
//анимации надписи текста
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10);
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 150 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  

  
    // валидация формы обратного звонка
    function Form(){
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    }
    //jquery carousel
    $(document).ready(function(){  
      $('#js-carousel-1,#js-carousel-2').owlCarousel({ 
        loop: true,  
      autoplay: true,  
       autoplayTimeout: 4000,  
        autoplaySpeed: 1000,  
         autoplayHoverPause: true,  
          slideTransition: 'linear',  
           items: 1,   
           nav: false,  
           dots: false,   
            responsive: {    
               600: {       
                 items: 1  
                 }   
               }
              });
       });