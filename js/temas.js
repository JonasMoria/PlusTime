
let btnLight = document.getElementById('btnLight');
let btnDark = document.getElementById('btnDark');

btnLight.addEventListener('click', function () {

    document.body.style.backgroundColor = "aliceblue";
    let txtData = document.getElementById("data");
    txtData.style.color = "black";
    let txtClima = document.getElementById("clima");
    txtClima.style.color = "black";

    let boxPrev1 = document.getElementById("boxPrev1").style;
    let boxPrev2 = document.getElementById("boxPrev2").style;
    let boxPrev3 = document.getElementById("boxPrev3").style;
    let boxPrev4 = document.getElementById("boxPrev4").style;
    boxPrev1.backgroundColor = "CadetBlue";
    boxPrev2.backgroundColor = "CadetBlue";
    boxPrev3.backgroundColor = "CadetBlue";
    boxPrev4.backgroundColor = "CadetBlue";
});

btnDark.addEventListener('click', function () {

    document.body.style.backgroundColor = "rgb(5, 10, 30)";
    let txtData = document.getElementById("data");
    txtData.style.color = "white";
    let txtClima = document.getElementById("clima");
    txtClima.style.color = "white";

    let boxPrev1 = document.getElementById("boxPrev1").style;
    let boxPrev2 = document.getElementById("boxPrev2").style;
    let boxPrev3 = document.getElementById("boxPrev3").style;
    let boxPrev4 = document.getElementById("boxPrev4").style;
    boxPrev1.backgroundColor = "#191970";
    boxPrev2.backgroundColor = "#191970";
    boxPrev3.backgroundColor = "#191970";
    boxPrev4.backgroundColor = "#191970";
});




