const canvas = new fabric.Canvas('canvas', {
    width: 500,
    height: 500,
    backgroundColor: 'red',
})
const circle = new fabric.Circle('circle', {
    top: 50,
    left: 20,
    backgroundColor: 'blue'
})
canvas.renderAll();