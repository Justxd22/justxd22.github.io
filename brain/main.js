var loadingTimer = 3700;
var bodyTimer = loadingTimer + 4000;
const loadingAnim = document.getElementById("loading");
const thebody = document.getElementById("thebody");

main();

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Function to start everything */
async function main(){
  console.log("Started main");
  while(true){
    if(loadingTimer > 0){
      await sleep(1000);
      loadingTimer -= 1000;
      bodyTimer -= 1000;
      console.log("Load timer is:", loadingTimer);
    }
    else if (bodyTimer >0){
      loadingAnim.style.opacity = "0";
      await sleep(1000);
      bodyTimer -= 1000;
      console.log("body time is:", bodyTimer);
    }

    else{
      console.log("body time finished:", bodyTimer);
      thebody.style.opacity = "1";
      thebody.style.display = "block";
      startTyping();
      particlesJS.load('particles-js', 'brain/particlesjs.json', function() {console.log('particles.js loaded - callback');});
      break
    } 
  }
}

