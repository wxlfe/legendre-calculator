const inputBox1 = $("#input-box-1");
const inputBox2 = $("#input-box-2");

$(document).ready(function(){
    $("input").on("input",function(){
        $("#output").text(legendre(+inputBox1.val(), +inputBox2.val()));
    })
})

function legendre(a, p){
    let exp = ((p) - 1) / 2;

    a = a % p;

    if (a % p === 0) {
        return 0;
    } else if (a === -1) {
        return (-1) ** exp;
    } else if (Math.sqrt(a) % 1 === 0 || a === 1) {
        return 1;
    } else if (a === 2) {
        return (-1) ** (((p * p) - 1) / 8)
    } else if (a % 2 === 0) {
        return legendre(a / 2, p) * legendre(2, p);
    } else {
        if ((a ** exp) % p === 1){
            return (a ** exp) % p;
        } else {
            return -1;
        }
    }
}