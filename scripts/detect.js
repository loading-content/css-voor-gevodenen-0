about = document.getElementById("yes");
devise = document.getElementById("device");

btn = document.getElementById('btn');
btn.addEventListener('click', butt);

function butt() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    about.style.color = 'red';
    devise.innerHTML = devise.innerHTML + "not mobile" + " device";
  }
  else{
    about.style.color = 'blue';
    devise.innerHTML = devise.innerHTML + "not mobile" + " device";
  }
}
