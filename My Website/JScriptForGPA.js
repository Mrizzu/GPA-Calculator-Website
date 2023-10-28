function show_result(){
    document.querySelector(".error").innerHTML = ""
    let fourone = document.querySelector("#fourone").value;
    let fourtwo = document.querySelector("#fourtwo").value;
    let fiveone = document.querySelector("#fiveone").value;
    let fivetwo = document.querySelector("#fivetwo").value;
    let sixone = document.querySelector("#sixone").value;
    let sixtwo = document.querySelector("#sixtwo").value;

    let to = parseFloat(fourone) + parseFloat(fourtwo) + parseFloat(fiveone) + parseFloat(fivetwo) + parseFloat(sixone) + parseFloat(sixtwo);
    let per = ((to*100)/24).toFixed(2);
    let gra = ((to/6)).toFixed(2);
    if(to > 24){
        document.querySelector(".error").innerHTML = "เกรดแต่ละเทอมไม่สามารถเกิน 4 ได้!"
        document.querySelector(".per").innerHTML = "ERROR"
        document.querySelector(".gra").innerHTML = "ERROR"
    }
    else{
        document.querySelector(".per").innerHTML = per;
        document.querySelector(".gra").innerHTML = gra;
    }
}