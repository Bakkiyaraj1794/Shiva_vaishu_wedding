
(function ($) {
    "use strict";
      $('.sakura-falling').sakura('start', {
        blowAnimations: [
            'blow-soft-left'
        
        ],                   // Horizontal movement animation names
        className: 'sakura', // Class name to use
        fallSpeed: 2.5,        // Factor for petal fall speed
        maxSize: 12,         // Maximum petal size
        minSize: 9,          // Minimum petal size
        newOn: 250,          // Interval after which a new petal is added
        
    });

})(jQuery);

// Set the date we're counting down to
var countDownDate = new Date("Aug 21, 2025 09:01:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = `
    <div class='container'>
      <div class='block'>${days}<span>Days,</span></div>
      <div class='block'>${hours}<span>Hours,</span></div>
      <div class='block'>${minutes}<span>Minutes,</span></div>
      <div class='block'>${seconds}<span>Seconds.</span></div>
    </div>
  `;
  
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Wedding Completed !!";
        // document.getElementById("time").innerHTML = " See The best Captured Moments ";
        // document.getElementById("time").href = "https://photos.app.goo.gl/Wn9PRK7FMpxBKF5s6/";
        // document.getElementById("time").target = "_blank";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

/**************************
  COUNTDOWN COMPONENT
 **************************/
Vue.component('countdown', {
  template: `
  <section class="countdown">
    <div v-show="!expired" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.weeks }}</p>
        <p class="label">weeks</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.days }}</p>
        <p class="label">days</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.hours }}</p>
        <p class="label">hours</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.minutes }}</p>
        <p class="label">minutes</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.seconds }}</p>
        <p class="label">seconds</p>
      </div>
      <p class="text">The big day approaches...</p>
    </div>
    <div v-show="expired" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">Today's the day!</p>
        <p class="label">We can't wait to see you!</p>
      </div>
    </div>
  </section>
`,
  
 data() {
   return{
     deadline: 'Feb 14 2022 16:40:00',
     weeks: 'OH',
     days: 'HI',
     hours: 'TH',
     minutes: 'ER',
     seconds: 'E!',
     expired: false 
   };
 },
  
 computed: {
   theTime(){
     var ctx = this,
         countDownDate = new Date(ctx.deadline).getTime();
         
     // Countdown loop    
     var x =  setInterval(function(){
       
       // Difference between the 2 dates
       var countDownDate = new Date(ctx.deadline).getTime(),
           now = new Date().getTime(),
           diff = countDownDate - now,

           // Time conversion to days, hours, minutes and seconds
           tweeks = Math.floor(diff / (1000 * 7 * 24 * 60 * 60)),
           tdays = Math.floor((diff % (1000 * 7 * 24 * 60 * 60)) / (1000 * 60 * 60 * 24)),
           thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
           tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
           tseconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       // Keep 2 digits
       ctx.weeks = (tweeks < 10) ? '0' + tweeks : tweeks;
       ctx.days = (tdays < 10) ? '0' + tdays : tdays;
       ctx.hours = (thours < 10) ? '0' + thours : thours;
       ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
       ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

       // Check for time expiration
       if(diff < 0){
         clearInterval(x);
         ctx.expired = true;
       }
     }, 1000);
     
     // Return data
     return {
       weeks: ctx.weeks,
       days: ctx.days,
       hours: ctx.hours,
       minutes: ctx.minutes,
       seconds: ctx.seconds
     };
   }
 }
});
