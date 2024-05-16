const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
 

 setTimeout(() => {
  loader.style.display = "none";
}, 3000);
})

/*schedule*/

const planConent = document.querySelector('.hiking-plan-content');

$(".option").on("click", function() {
  $(".option").removeClass("active");
  $(this).addClass("active");
  var type = $(this).data("option");
  setTimeout(function() {
    if (type === "day") {
      $(".time").attr('class', 'time day');
      planConent.innerHTML="hike adventure in the forrest, forest bathing or as its called 'Shinrin-yoku' in Japanese a football match is included too!";
    } else if (type === "night") {
      $(".time").attr('class', 'time night');
      planConent.innerHTML="break from reality with night sky wander, with a chance to fly lanterns";
    } else if (type === "dusk") {
      $(".time").attr('class', 'time dusk');
      planConent.innerHTML="watching the sunset in nature is always the best remedy for all life problems";
    } else if (type === "sunset") {
      $(".time").attr('class', 'time sunset');
      planConent.innerHTML="time for grill and have deep conversations and bonding";
    } 
  }, 500);
});
//    ʕ ᵔᴥᵔ ʔ  <-- a koala
/*date*/

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

