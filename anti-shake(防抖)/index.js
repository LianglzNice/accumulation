let timeout = null;
let keydown = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('输入完成！');
    }, 1000)
}