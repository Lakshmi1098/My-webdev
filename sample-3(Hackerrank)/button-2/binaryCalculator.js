var res=document.getElementById('res');
var zero=document.getElementById('btn0');
var one=document.getElementById('btn1');
var clr=document.getElementById('btnClr');
var eq=document.getElementById('btnEql');
var add=document.getElementById('btnSum');
var sub=document.getElementById('btnSub');
var mul=document.getElementById('btnMul');
var div=document.getElementById('btnDiv');

zero.onclick = () =>{res.innerHTML +='0'};
one.onclick = () =>{res.innerHTML +='1'};
clr.onclick = () =>{res.value=' '};
eq.onclick = () =>{
        var equ=res.innerHTML;
        equ=equ.split(/(\+ | - | \* | \/)/);
        var o1=parseInt(equ[0],2);
        var op=eq1[1];
        var o2=parseInt(equ[2],2);
        let result;

        switch(op){
                case '+':  result=o1+o2;
                break;
                case '-':  result=o1-o2;
                break;
                case '*':  result=o1*o2;
                break;
                case '/':  result=o1/o2;
                break;
        }
        res.innerHTML = result.toString(2);
};
add.onclick = () =>{res.innerHTML +='+'};
sub.onclick = () =>{res.innerHTML +='-'};
mul.onclick = () =>{res.innerHTML +='*'};
div.onclick = () =>{res.innerHTML +='/'};