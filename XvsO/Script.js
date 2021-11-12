let x=1;
let k=[2,2,2,2,2,2,2,2,2];
let t=0;
function game(n){
    t++;
    let index;
    switch(n){
        case 1: index=document.getElementById('demo1'); k[0]=x; break;
        case 2: index=document.getElementById('demo2'); k[1]=x; break;
        case 3: index=document.getElementById('demo3'); k[2]=x; break;
        case 4: index=document.getElementById('demo4'); k[3]=x; break;
        case 5: index=document.getElementById('demo5'); k[4]=x; break;
        case 6: index=document.getElementById('demo6'); k[5]=x; break;
        case 7: index=document.getElementById('demo7'); k[6]=x; break;
        case 8: index=document.getElementById('demo8'); k[7]=x; break;
        case 9: index=document.getElementById('demo9'); k[8]=x; break;
    }
    if(x==1){
        index.innerHTML = "<h1>X</h1>";
        x=0;
    }else
    if(x==0){
        index.innerHTML = "<h1>O</h1>";
        x=1;
    }
    if( 
    (k[0]==k[1] && k[1]==k[2] && k[2]==1) || 
    (k[3]==k[4] && k[4]==k[5] && k[5]==1) || 
    (k[6]==k[7] && k[7]==k[8] && k[8]==1) ||
    (k[0]==k[3] && k[3]==k[6] && k[6]==1) ||
    (k[1]==k[4] && k[4]==k[7] && k[7]==1) ||
    (k[2]==k[5] && k[5]==k[8] && k[8]==1) ||
    (k[0]==k[4] && k[4]==k[8] && k[8]==1) ||
    (k[2]==k[4] && k[4]==k[6] && k[6]==1)){
        x=2;
        document.getElementById('win').style.display = 'block';
    }else
    if( 
    (k[0]==k[1] && k[1]==k[2] && k[2]==0) || 
    (k[3]==k[4] && k[4]==k[5] && k[5]==0) || 
    (k[6]==k[7] && k[7]==k[8] && k[8]==0) ||
    (k[0]==k[3] && k[3]==k[6] && k[6]==0) ||
    (k[1]==k[4] && k[4]==k[7] && k[7]==0) ||
    (k[2]==k[5] && k[5]==k[8] && k[8]==0) ||
    (k[0]==k[4] && k[4]==k[8] && k[8]==0) ||
    (k[2]==k[4] && k[4]==k[6] && k[6]==0)){
        x=2;
        document.getElementById('winh1').innerHTML = "O WIN"
        document.getElementById('win').style.display = 'block';
    }else
    if(t==9){
        document.getElementById('winh1').innerHTML = "DRAW"
        document.getElementById('win').style.display = 'block';       
    }
}

function cleaR(){
    x=1;
    k=[2,2,2,2,2,2,2,2,2];
    document.getElementById('demo1').innerHTML = "";
    document.getElementById('demo2').innerHTML = "";
    document.getElementById('demo3').innerHTML = "";
    document.getElementById('demo4').innerHTML = "";
    document.getElementById('demo5').innerHTML = "";
    document.getElementById('demo6').innerHTML = "";
    document.getElementById('demo7').innerHTML = "";
    document.getElementById('demo8').innerHTML = "";
    document.getElementById('demo9').innerHTML = "";
    document.getElementById('win').innerHTML = "";
}