window.addEventListener('load', () => {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDesc = document.getElementById('temperatura-desc');

    let cidade = document.getElementById('cidade');
    let ventoVelo = document.getElementById('vento-velo');

    let umidade = document.getElementById('umidade');



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(local => {

            lon = local.coords.longitude;
            lat = local.coords.latitude;

            //Localização Do Dispositivo    
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&appid=5628ed5a449005a474a9b422879ca95b`;
            console.log(url)

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data);
                    let temp = Math.round(data.main.temp) - 273;
                    console.log(temp);
                    temperaturaValor.textContent = `${temp} °C`;

                    console.log(data.weather[0].description);
                    var clima = data.weather[0].main;

                    //Tradução
                    if (clima === "Clouds") { clima = "Nublado" }
                    if (clima === "Rain") { clima = "Chuva" }
                    if (clima === "Snow") { clima = "Neve" }
                    if (clima === "Clear") { clima = "Limpo" }
                    if (clima === "Drizzle") { clima = "Chuvisco" }

                    temperaturaDesc.textContent = clima.toUpperCase()
                    cidade.textContent = data.name + ", " + data.sys.country;

                    var vento = (data.wind.speed) * 3.6;
                    ventoVelo.textContent = vento.toFixed(2) + " km/h";

                    umidade.textContent = data.main.humidity + "%";

                })
                .catch(error => {
                    console.log(error);
                });
        });

    }
});