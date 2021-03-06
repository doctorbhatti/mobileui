/*Only needed for the controls*/
phone = document.getElementById("phone_1"),
iframe = document.getElementById("frame_1");


/*View*/
function updateView(view) {
  if (view) {
    phone.className = "phone view_" + view;
  }
}

/*Controls*/
function updateIframe() {

  // preload iphone width and height
  phone.style.width = "375px";
  phone.style.height = "667px";
  
  /*Idea by /u/aerosole*/
  document.getElementById("wrapper").style.perspective = (
    document.getElementById("iframePerspective").checked ? "1300px" : "none"
  );
}
updateIframe();

document.getElementById('addXframe').addEventListener('change', function(){
  if (this.checked) {
    addXframe();
    document.getElementById('frame_1').src = document.getElementById('frame_1').src
    console.log("Checkbox is checked..");
  } else {
    remXframe();
    document.getElementById('frame_1').src = document.getElementById('frame_1').src
    console.log("Checkbox is not checked..");
  }
})
/*Events*/
document.getElementById("controls").addEventListener("change", function() {
  updateIframe();
});

document.getElementById("views").addEventListener("click", function(evt) {
  updateView(evt.target.value);
});

document.getElementById("phones").addEventListener("click", function(evt) {

  if(evt.target.value == 1){
    // iphone 6
    width = 375;
    height = 667; 
  }

  if(evt.target.value == 2){
    // samsung
    width = 400;
    height = 640; 
  }

  if(evt.target.value == 3){
    // microsoft
    width = 320;
    height = 480;  
  }

  if(evt.target.value == 4){
    // htc
    width = 360;
    height = 640; 
  }

  if(evt.target.value == 5){
    // ipad mini
    width = 768;
    height = 1024; 
  }
  
  if(evt.target.value == 6){
    //poco x3
    width = 290;
    height = 624; 
  }
  
  if(evt.target.value == 7){
    // iphone 12 mini
    width = 242.645669291;
    height = 497.007874016; 
  }

    phone.style.width = `${width}px`;
    phone.style.height = `${height}px`; 

});

 iframe = document.getElementById('frame_1');

  if (iframe.attachEvent){
      iframe.attachEvent("onload", function(){
          afterLoading();
      });
  } else {
      iframe.onload = function(){
          afterLoading();
      };
  }

function afterLoading(){
    setTimeout(function() {
        phone.className = "phone view_1 ";
        setTimeout(function() {
            // do second thing
            phone.className = "phone view_2";
        }, 1000);
    }, 000);


}
function addXframe(){
  document.getElementById("frame_1").setAttribute("is" , "x-frame-bypass");
}
function remXframe(){
  document.getElementById("frame_1").removeAttribute("is" ,"x-frame-bypass");
}
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('main').addEventListener('click', closeNav);
function getMovieURL(){
  var request = new XMLHttpRequest();
request.open("GET", "urls.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}
}