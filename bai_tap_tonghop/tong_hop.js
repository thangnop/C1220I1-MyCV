function Count(){

    let loai1 = +document.getElementById("gia_tri").value;
    let loai2 = +document.getElementById("so_1").value;
    let loai3 = +document.getElementById("so_2").value;
    var Tien = 0;
    Tien = loai3 * (loai1/loai2);
    if(Number.isInteger(Tien) == false){
        Tien = Tien.toFixed(2);}
    if (Tien < 0) {
        Tien = 'Error';
    }

    document.getElementById("Ketqua").value=Tien;
}
function Nhiet_Do(){

    let Do1 = +document.getElementById("do_1").value;
    let Do2 = +document.getElementById("do_2").value;
    let Do3 = +document.getElementById("do_3").value;
    var result = 0;
    result = Do3 * (Do1/Do2);
    if(Number.isInteger(result) == false){
        result = result.toFixed(2);}

    document.getElementById("Nhiet_do").value=result;
}function SpeedAll(){

    let S1 = +document.getElementById("speed_1").value;
    let S2 = +document.getElementById("speed_2").value;
    let S3 = +document.getElementById("speed_3").value;
    var result = 0;
    result = S3 * (S1/S2);
    if(Number.isInteger(result) == false){
        result = result.toFixed(2);}
    if (result < 0) {
        result = 'Error';
    }

    document.getElementById("Speed").value=result;
}
function HeavyAll(){

    let H1 = +document.getElementById("heavy_1").value;
    let H2 = +document.getElementById("heavy_2").value;
    let H3 = +document.getElementById("heavy_3").value;
    var result = 0;
    result = H3 * (H1/H2);
    if(Number.isInteger(result) == false){
        result = result.toFixed(2);}
    if (result < 0) {
        result = 'Error';
    }

    document.getElementById("Heavy").value=result;
}function SoundAll(){

    let A1 = +document.getElementById("sound_1").value;
    let A2 = +document.getElementById("sound_2").value;
    let A3 = +document.getElementById("sound_3").value;
    var result = 0;
    result = A3 * (A1/A2);
    if(Number.isInteger(result) == false){
        result = result.toFixed(2);}
    if (result < 0) {
        result = 'Error';
    }

    document.getElementById("Sound").value=result;
}
