let frameCount = 0;
const frameRefresh = 60;
let lastRefresh = performance.now();
let text = "0 FPS";


function drawFrame(){
    let canvas = document.getElementById("bg-text");

    // Updating canvas size will clear its content
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let width = canvas.width;
    let height = canvas.height;

    let ctx = canvas.getContext("2d");
    
    // ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    // ctx.fillRect(0, 0, width, height);
    
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, width * 0.05, height * 0.9);
}

export default function countFrame(){
    frameCount += 1;
    if(frameCount > frameRefresh){
        frameCount = 0;
        let currentTime = performance.now();
        // console.log(currentTime);
        let elapsedTime = (currentTime - lastRefresh) * 0.001;
        let framesPerSecond = (frameRefresh)/(elapsedTime);
        lastRefresh = currentTime;

        text = `${framesPerSecond.toPrecision(4)} FPS`;
        // console.log(text);

        drawFrame();
    }
    
    requestAnimationFrame(countFrame);
}


window.addEventListener('resize', 
    () => {
        drawFrame();
    }
);
