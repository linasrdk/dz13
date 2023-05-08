$('#m-square').click(function (e) { 
  e.preventDefault();
  let box = $('#box');
  box.animate({
    left: 200
  })
  box.animate({
    top:200
  })
  box.animate({
    left: 0
  })
  box.animate({
    top: 0
  })
});

$('#m-triangle').on('click', function(){
$('#box').animate({
left: 200
});
$('#box').animate({
top: 100,
left: 100
});
$('#box').animate({
left: 0,
top: 0
});
});

let i = true;
$('#animate').click(function () {
  let box = $('#box');

  if (i) {
    box.animate({
      left: 0,
      width: '400px',
      height: '400px',
      opacity:0.1
    })
    i = false;
  } else {
    box.animate({
      left: 0,
      width: '100px',
      height: '100px',
      opacity:1
    })
    i = true;
  }
});

