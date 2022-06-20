let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    renderItem()
    
});


const numItemsToGenerate = 1;

let imageElement = document.querySelector("#unsplash-image");
let imageLink = document.querySelector("#image-link");
let url = `https://source.unsplash.com/random/1600x900/?`
let baseURL = `https://source.unsplash.com/random/1600x900/?`
let colorName = ''

function renderItem(){
    
    if(colorName!==''){url = url + colorName}
    else{url = baseURL}

    fetch(url).then((response) => {   
            imageElement.src=response.url;
            imageLink.setAttribute("href", response.url);
        }) 
      }
    
      for(let i=0;i<numItemsToGenerate;i++){
        renderItem();
};

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    lockOpacity: true,
    theme: 'nano', // or 'monolith', or 'nano'
    default: "",
    swatches: [
        'rgba(255, 0, 0, 1)',
        'rgba(255, 120, 0, 1)',
        'rgba(255, 210, 0, 1)',
        'rgba(0, 172, 38, 1)',
        'rgba(0, 59, 172, 1)',
        'rgba(102, 0, 172, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(255, 255, 255, 1)'
    ],

    components: {

        // Main components
        palette:false,
        preview: false,
        opacity: false,
        hue: false,

        // Input / output Options
        interaction: {

            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color, source, instance) => {
    rgbaColor = color.toRGBA().toString(0);
    switch (rgbaColor) {
        case 'rgba(255, 0, 0, 1)':
            colorName = 'red';
            break;
        case 'rgba(255, 120, 0, 1)':
            colorName = 'orange';
            break;
        case 'rgba(255, 210, 0, 1)':
            colorName = 'yellow';
            break;
        case 'rgba(0, 172, 38, 1)':
            colorName = 'green';
            break;
        case 'rgba(0, 59, 172, 1)':
            colorName = 'blue';
            break;
        case 'rgba(102, 0, 172, 1)':
            colorName = 'purple';
            break;
        case 'rgba(0, 0, 0, 1)':
            colorName = 'black';
            break;
        case 'rgba(255, 255, 255, 1)':
            colorName = 'white';
            break;
    }
}).on('clear', instance => {
    colorName ='';
}).on('save', (color, instance) => {
    pickr.hide();
});