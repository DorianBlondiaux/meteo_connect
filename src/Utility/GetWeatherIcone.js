let codeTranslate = new Map();
const nameIcone = [ '🌞', '☁️' , '🌞', '🌨️', '⛈️'];
//Clear
codeTranslate.set(0, nameIcone[0]);

//Cloudy
codeTranslate.set(1, nameIcone[1]);
codeTranslate.set(2, nameIcone[1]);
codeTranslate.set(3, nameIcone[1]);
codeTranslate.set(45, nameIcone[1]);
codeTranslate.set(48, nameIcone[1]);

//Rainy
codeTranslate.set(51, nameIcone[2]);
codeTranslate.set(53, nameIcone[2]);
codeTranslate.set(55, nameIcone[2]);
codeTranslate.set(56, nameIcone[2]);
codeTranslate.set(57, nameIcone[2]);
codeTranslate.set(61, nameIcone[2]);
codeTranslate.set(63, nameIcone[2]);
codeTranslate.set(65, nameIcone[2]);
codeTranslate.set(66, nameIcone[2]);
codeTranslate.set(67, nameIcone[2]);
codeTranslate.set(80, nameIcone[2]);
codeTranslate.set(81, nameIcone[2]);
codeTranslate.set(82, nameIcone[2]);

//Snowy
codeTranslate.set(73, nameIcone[3]);
codeTranslate.set(71, nameIcone[3]);
codeTranslate.set(75, nameIcone[3]);
codeTranslate.set(77, nameIcone[3]);
codeTranslate.set(85, nameIcone[3]);
codeTranslate.set(86, nameIcone[3]);

//Thunder
codeTranslate.set(95, nameIcone[4]);
codeTranslate.set(96, nameIcone[4]);
codeTranslate.set(99, nameIcone[4]);

//Take a weathercode as parameter and return the associate icone file name
function getWeatherIcone(code){
    return codeTranslate.get(Number(code));
}

export default getWeatherIcone;