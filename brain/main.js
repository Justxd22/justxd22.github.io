var loadingTimer = 3700;
var bodyTimer = loadingTimer + 1300;
const loadingAnim = document.getElementById("loading");
const thebody = document.getElementById("thebody");
var fdiop = 0;
main();

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Function to start everything */
async function main(){
  console.log("Started main");
  while(true){
    if(loadingTimer > 0){
      await sleep(100);
      loadingTimer -= 100;
      bodyTimer -= 100;
      console.log("Load timer is:", loadingTimer);
    }
    else if (bodyTimer > 0){
      fade(loadingAnim, "fadeOut");
      await sleep(100);
      bodyTimer -= 100;
      console.log("body time is:", bodyTimer);
    }

    else{
      console.log("body time finished:", bodyTimer);
      thebody.style.display = "block";
      loadingAnim.style.display = "none";
      while(true){
        await sleep(100);
        if (thebody.style.opacity < 1){fade(thebody, "fadeIn");}
        else if (thebody.style.opacity >= 1){console.log('done fadding'); break}
        else{console.log('something is wrong?', opacity); break}
      }
      startTyping();
      particlesJS.load('particles-js', 'brain/particlesjs.json');
      console.log('particles.js loaded - callback');
      break
    }
  }
}


async function fade(element, fadeDir){
  var ele = element;
  function setOpacity(value){ele.style.opacity = value;}


  if(fadeDir == "fadeIn"){
    var opacity = ele.style.opacity;
    if (fdiop < 1){
      //ele.style.display = "block";
      fdiop += 1*10/100;
      setOpacity(fdiop);
      console.log('fadding In opacity: ', fdiop);
    }
  }

  else if(fadeDir == "fadeOut"){
    var opacity = ele.style.opacity;
    if (opacity > 0){
      opacity -= 1*10/100;
      setOpacity(opacity);
      console.log('fadding out opacity: ', opacity);
      return
    }
    console.log('opacity is zero:', opacity);
  }
  else{console.log('please specify fadeIn or fadeOut');}



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
}
