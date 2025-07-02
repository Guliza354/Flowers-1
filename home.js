const buttons = document.querySelectorAll(".order-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      window.location.href = "pages/Kartochka/kartochka.html";
    });
  });

 document.getElementById('forum').addEventListener('click', function () {
    window.location.href = 'pages/Forum/forum.html'; // путь к странице форума
  });

document.getElementById('otzuf').addEventListener('click', function (){
  window.location.href = 'pages/Otzuf/otzuf.html'
});

document.getElementById('akcia').addEventListener('click', function () {
  window.location.href = 'pages/Akcia/akcia.html'
});

document.getElementById('new').addEventListener('click', function(){
  window.location.href = 'pages/New/new.html'
})

document.getElementById('info').addEventListener('click', function(){
  window.location.href = 'pages/Info/info.html'
})