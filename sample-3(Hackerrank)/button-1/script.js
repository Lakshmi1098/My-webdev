const ids=[1,2,3,6,9,8,7,4]
let bt=[1,2,3,6,9,8,7,4];
let bt5=document.getElementById("btn5");

bt5.onclick= function(){
    bt.unshift(bt.pop());
    for(var i=0; i<=7;i++){
        document.getElementById("btn" + ids[i]).innerHTML = bt[i];
    }
}