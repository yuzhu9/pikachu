const string =`
/*接下来，我要画一只可爱的小动物，猜猜是什么*/
.wrapper {
    position: relative;
    height: 100%;    
}
.nose {    
    position: absolute;
    left: 50%;
    border-radius: 50%;
    border: 15px solid;
    border-color: #000 transparent transparent transparent;
    top: 200px;
    margin-left: -15px;
}
.eyes {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: 1px solid #000;
    background: #2e2e2e;
    position: absolute;
    top: 170px;
}
.eyes::after {
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    left: 10px;
    top: 4px;
    background: #fff;
}
.eyes.left {
    left: 50%;
    margin-left: -149px;    
}
.eyes.right {
    right: 50%;
    margin-right: -149px;    
}
@keyframes turneyes {
    0% {
        transform: translateX(0) translateY(0)
    }
    50% {
        transform: translateX(10px) translateY(0)
    }
    100% {
        transform: translateX(10px) translateY(10px)
    }
}
.upperLip {
    position: absolute;
    width: 84px;
    height: 28px;
    border: 3px solid;
    background: #ffe600;
    top: 230px;    
    z-index: 2;
}
.upperLip.left {
    left: 50%;
    margin-left: -82px;
    border-bottom-left-radius: 50px 25px;
    border-color: transparent transparent #000 #000;
    transform: rotate(-20deg)
}
.upperLip.right {
    right: 50%;
    margin-right: -82px;
    border-bottom-right-radius: 50px 25px;
    border-color: transparent black black transparent;
    transform: rotate(20deg);
}
.lowerLipWrapper {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 240px;
    width: 160px;
    height: 170px;    
    margin-left: -80px;
    z-index: 1;
          
}
.lowerLip {
    overflow: hidden;
    position: absolute;
    bottom: 0;    
    border-radius: 50%;    
    width: 160px;
    height: 650px; 
    border: 3px solid #000;   
    background: #9b000a;
    
}
.lowerLip::after {
    content: '';
    display: block;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 504px;
    left: 4px;
    border-radius: 50%;
    background: #ff485f;
    z-index: 0;    
}
.cheek {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3px solid #000;
    background: #f00;    
    position: absolute;
    top: 280px;   
}
.cheek.left {
    left: 50%;
    margin-left: -210px;    
}
.cheek.right {
    right: 50%;
    margin-right: -210px;
}
.eyes::after {
    animation: turneyes 1s infinite linear alternate;
}
/*  搞定啦！这只皮卡丘送给你 =￣ω￣=  */
`
export default string