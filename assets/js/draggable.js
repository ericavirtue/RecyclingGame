$( init );
 
function init() {
  $('.makeMeDraggable').draggable();
  $('#makeMeDroppable').droppable( {
    //accept:".recyclable",
    drop: handleDropEvent
  } );
}
 
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  if (draggable.hasClass("recyclable")){
  draggable.hide(1000,function () {
   alert("Thanks for saving the environment!");
   });
   } else {
   alert("This is not recyclable!");}

  
  
}
