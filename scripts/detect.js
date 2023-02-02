about = document.getElementById("yes");
devise = document.getElementById("device");
ss = document.getElementById("sss");

btn = document.getElementById('btn');
btn.addEventListener('click', butt);

function butt() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    ss.style.background = 'radial-gradient(circle, red, black';
    devise.innerHTML = "youre on a: mobile device";
  }
  else{
    ss.style.background = 'radial-gradient(circle, blue, pink';
    devise.innerHTML = "youre on a: not mobile device";
  }
}
