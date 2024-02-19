function rd(n) {
    var t = Math.random();
    var range = 1;
    for(var i = 1; i <= n; i++) range *= 10;

    var num = Math.floor(t * range).toString();

    while(num.length < n)
        num = '0' + num;
    return num;
}

function reveal() {
    console.log(rd(3));
}