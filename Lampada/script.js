const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');
const consertar = document.querySelector('#consertar');

function isLampBroken(){
return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
   if(!isLampBroken()){
      lamp.src = './img/ligada.jpg'
   }
   
}

function lampOff(){
   if(!isLampBroken()){
      lamp.src = './img/desligada.jpg'
   }
   
}

function lampBroken(){
   lamp.src = './img/quebrada.jpg'
}

function conserte(){
   if(isLampBroken()){
      lamp.src = './img/desligada.jpg';
   }
   
}

consertar.addEventListener('click', conserte);
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);