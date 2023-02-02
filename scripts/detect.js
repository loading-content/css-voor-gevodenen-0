if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.write("mobile");
}
else{
  document.write("not mobile");
  about = document.getElementById("yes");
  about.style.color = 'blue';
}

var btn = document.getElementById('btn')

btn.addEventListener('click', function(){
   alert('hello');
});
