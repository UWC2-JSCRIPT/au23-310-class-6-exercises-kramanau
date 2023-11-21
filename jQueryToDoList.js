$(document).ready(function(){
/**
 * Toggles "done" class on <li> element
 */
  $('li').on('click', function(e){
    $(this).toggleClass('done');
  });
/**
 * Delete element when delete link clicked
 */
  $('.delete').on('click', async function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
      $(this).remove();
    });
  });

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  const newLi = $('<li>');
  const newSpan = $('<span>');
  newSpan.text(text);
  newLi.append(newSpan);
  newLi.on('click', function(e){
    $(this).toggleClass('done');
  });
  const delButton = $('<a>');
  delButton.text('Delete');
  delButton.addClass('delete');
  delButton.on('click', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
      $(this).remove();
    });
  });
  newLi.append(delButton);

  $('.today-list').append(newLi);
  // rest here...
};

// add listener for add
$('.add-item').on('click', addListItem);
});