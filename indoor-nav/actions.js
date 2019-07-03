function insertText(){
    let txt = document.querySelector('#create-text');
    let col = document.querySelector('#create-text-color');
    let siz = document.querySelector('#create-text-size');
    canvas.add(
        new fabric.Text(txt.value, {
            fill: col.value,
            fontSize: siz.value
        })
    );
    txt.value = '';
}

function insertShape(){
    let choice = document.forms[0].primitive;
    console.log(choice.value)
    switch(choice.value){
        case 'square':
            canvas.add(new fabric.Rect({ width: 40, height: 40, fill: 'red'}));
            break;
        case 'triangle':
            canvas.add(new fabric.Triangle({ width: 40, height: 40, fill: 'green'}));
            break;
        case 'circle':
            canvas.add(new fabric.Circle({ radius: 20, fill: 'blue'}));
        default:
            break;
    }
}

function insertPictogram(){
    let choice = document.forms[1].pictogram;
    switch(choice.value){
        case 'desk':
            canvas.add(new fabric.Rect({ width: 40, height: 40, fill: 'red'}));
            break;
        case 'chair':
            new fabric.Image.fromURL('./img/picto-chair.png', img => {
                img.set('scaleX', 0.5);
                img.set('scaleY', 0.5);
                canvas.add(img)
            });
            break;
        case 'door':
            canvas.add(new fabric.Circle({ radius: 20, fill: 'blue'}));
        default:
            break;
    }
}

function setBackgroundBrightness(slider){
    canvas.set('backgroundColor', `rgb(${slider.value}, ${slider.value}, ${slider.value})`);
    canvas.renderAll();
}

function toggleModal(modalSelector, onOffBoolean){
    // console.log(event);
    
    let dim = document.querySelector('.dim-overlay');
    dim.style.display = onOffBoolean ? 'block' : 'none';

    let modal = document.querySelector(modalSelector);
    modal.style.display = onOffBoolean ? 'block' : 'none';

}

function onModalOpen(modalSelector, data){
    modal = document.querySelector(modalSelector);
    modal.querySelector('#resource-name').innerText = data[0].toUpperCase() + data.substr(1);
}