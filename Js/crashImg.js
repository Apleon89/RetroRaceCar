class CrashImg {





    
    drawCrashImg=()=>{
        context.fillStyle ='#c71f05';
        context.fillRect(0,0,canvas.width,canvas.height);

    }

    
    crashImgAppear=()=>{
        let crashCounter = 0;
                    let crashInterval = setInterval(()=>{
                        
                        if(crashCounter > 1){
                            clearInterval(crashInterval)
                        }
                        crashCounter++
                    }, 1000);
    }
}