var canvas = new fabric.Canvas('canv', {
    width: 1280,
    height: 768,
    backgroundColor: 'black',
    selectionColor: 'rgba(0, 255, 100, 0.7)',
    selectionLineWidth: 2,
    selectionLineColor: 'cyan'
  });

var rect = new fabric.Rect({ width: 80, height: 80, left: 400, top: 300, fill: 'purple'/*, opacity: 0.7*/ });
var circ = new fabric.Circle({ radius: 40, fill: 'green', left: 600, top: 300 });

// var rzRect = new fabric.Image;

canvas.add(rect);
canvas.add(circ);

let tempEventContainer = undefined;

canvas.on('mouse:dblclick', options => {
  if(options.target){
    console.log('CLICKED:', options.target)
    toggleModal('.reservation-modal', true);
    onModalOpen('.reservation-modal', tempEventContainer);
  }
})
canvas.on('mouse:over', function(e) {
  if(e.target){
    tempEventContainer = e.target.fill;
    console.log(tempEventContainer);
    
    e.target.set('fill', 'red');
    canvas.renderAll();
  }
});
canvas.on('mouse:out', function(e) {
  if(e.target){
    e.target.set('fill', tempEventContainer);
    canvas.renderAll();
  }
});