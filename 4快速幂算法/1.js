function fastPow(x,n){
    if(n == 0){
    return 1;
    }
    else if(n % 2 == 1){
    return fastPow(x,n-1) * x;
    }
    else{
    var r = fastPow(x,n/2);
    return r * r;
    }
     
    }
     
    console.log(fastPow(2,100)); // 2的100次方
    // console.log(Math.pow(2,100));