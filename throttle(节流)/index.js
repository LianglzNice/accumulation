let timer = true;
let throttle = (time) => {
    if(!timer) return;
    timer = false;

    setTimeout(() => {
        console.log('ok ok');
        timer = true;
    }, time)
}

setInterval(() => {
    console.log('1');
    throttle(2000);
}, 200);