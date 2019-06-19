var canvas = new fabric.Canvas('canv', {
    width: 800,
    height: 600,
    backgroundColor: 'black',
    selectionColor: 'rgba(0, 255, 100, 0.7)',
    selectionLineWidth: 2,
    selectionLineColor: 'cyan'
  });

var rect = new fabric.Rect({ width: 40, height: 40, left: 400, top: 300, fill: 'red'/*, opacity: 0.7*/ });

// var rzRect = new fabric.Image;

canvas.add(rect);