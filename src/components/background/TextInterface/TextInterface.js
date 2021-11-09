import { getCSS } from '../../other_functions/cssFunctions.js';

let frameCount = 0;
const frameRefresh = 60;
let lastRefresh = performance.now();
let text = "0 FPS";

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const textFontSize = parseInt(getCSS('--background-scene-text-interface'), 10);
console.log(textFontSize);

function drawFrame(){
    let canvas = document.getElementById("bg-text");

    // Updating canvas size will clear its content
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;


    // golden ratio for text size: 1.618
    // text is: "XX.XX FPS"
    // So we have 9 characters, will round it to 10 for some extra space
    // given font size Y, height will be Y * 1.618 and width will be 10 * Y
    // margins of 10% in all sides
    //  80    1     =>   X = 5/4     of the proportions above
    // 100    X
    // Therefore 
    canvas.width = convertRemToPixels(textFontSize) * 6 * 1.25;
    canvas.height = convertRemToPixels(textFontSize) * 1.618 * 1.25;

    let width = canvas.width;
    let height = canvas.height;

    let ctx = canvas.getContext("2d");
    
    // ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    // ctx.fillRect(0, 0, width, height);

    
    ctx.font = `${textFontSize}rem Arial`;
    ctx.fillStyle = "red";
    // ctx.textAlign = "right";
    ctx.fillText(text, width * 0.05, height * 0.9);
    // ctx.fillText(text, width * 0.1, height * 0.8);
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

        // "XX.XX FPS" or even "XXX.X FPS" = 4 digits
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
