class CrashImg {

    constructor(){
        this.x = -600;
        this.y = 0;
        this.w = 600;
        this.h = 600;
    }




    
    drawCrashImg=()=>{
        context.fillStyle ='#c71f05';
        context.fillRect(this.x , this.y ,this.w ,this.h);

    }

    
}