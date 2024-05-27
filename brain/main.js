var loadingTimer = 4500;
var bodyTimer = loadingTimer + 1300;
const loadingAnim = document.getElementById("loading");
const thebody = document.getElementById("thebody");
const partii = document.getElementById("particles-js");
// var fdiop = 0;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}



function showBOd(){
  console.log("body time finished:", bodyTimer);
  thebody.style.display = "block";
  loadingAnim.style.display = "none";
  startTyping();
  particlesJS.load('particles-js', 'brain/particlesjs.json');
  partii.style.display = "block";
  console.log('particles.js loaded - callback');
}

/* Function to start everything */
function main(){
  console.log("Started main");
  setTimeout(showBOd, bodyTimer);
}


// async function fade(element, fadeDir){
//   var ele = element;
//   function setOpacity(value){ele.style.opacity = value;}


//   if(fadeDir == "fadeIn"){
//     var opacity = ele.style.opacity;
//     if (fdiop < 1){
//       //ele.style.display = "block";
//       fdiop += 1*10/100;
//       setOpacity(fdiop);
//       console.log('fadding In opacity: ', fdiop);
//     }
//   }

//   else if(fadeDir == "fadeOut"){
//     var opacity = ele.style.opacity;
//     if (opacity > 0){
//       opacity -= 1*10/100;
//       setOpacity(opacity);
//       console.log('fadding out opacity: ', opacity);
//       return
//     }
//     console.log('opacity is zero:', opacity);
//   }
//   else{console.log('please specify fadeIn or fadeOut');}



  // var fadeTime = 1000;
  // while(true){
  //   await sleep(100);
  //   fadeTime -= 100;
    //  if(fadeDir == "fadeIn"){
    //    opacity += 1*10/100;
    //    setOpacity(opacity);
    //    console.log('fadding In opacity: ', opacity);
    //  }
    //  else if(fadeDir == "fadeOut"){
    //    opacity -= 1*10/100;
    //    setOpacity(opacity);
    //    console.log('fadding out opacity: ', opacity);
    //  }
    //  if(fadeTime <= 0){
    //    if(fadeDir == "fadeOut"){ele.style.display = "none";}
  //     break
    //  }
  // }
// }
