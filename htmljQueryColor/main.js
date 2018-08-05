$(function(sentences) {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend
  /*
  search tag <p> and </p>
  fetch the string between <p> and </p>
  split the string to arrWords,
  join arrWords by '<span>'
  set the random color for each <span> pair (using the random function to determine the colors)
  */
  let arrWords = sentences.split('');
  let tagWords ='<span>'+ arrWords.join('<span>')+'<span>';



  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  $('span').each(function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    $(this).css('color','rgb(+red+'+','+green+','+blue+')');
  });


});