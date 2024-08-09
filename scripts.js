let currentSlide = 0;
const datasets = [
    {
        src: 'https://demo.nira.app/a/e0UBPCOHQXSGlOtvXLDTpQ/2',
        headline: 'Dataset 1',
        info: {
            flightHeight: '10m',
            gsd: '0.043 cm/pixel',
            camera: 'GS120',
            speed: '3 m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/59c4e795-d3a9-41cb-ac92-baf27e661191?shareKey=SVoo14tw9vXjvOn-92kTZTpFgllAj7fDZ94nfPu2WFk',
        headline: 'Dataset 2',
        info: {
            flightHeight: '?m',
            gsd: '? cm/pixel',
            camera: 'P5 80mm',
            speed: '15m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/5d1c9468-1584-47be-b29b-a66fb9045fd4?shareKey=hPrbRaZihAOKNxOsngU95QUEBaboQw77nMY3biUBqxw',
        headline: 'Dataset 3',
        info: {
            flightHeight: '60m',
            gsd: '0.259 cm/pixel',
            camera: 'P5 80mm',
            speed: '15m m/s'
        }
    }
];

function changeSlide(n) {
    currentSlide = (currentSlide + n + datasets.length) % datasets.length;
    updateFullScreenContent();
    updatePicker();
}

function updateFullScreenContent() {
    const iframe = document.getElementById('fullscreen-iframe');
    iframe.src = datasets[currentSlide].src;

    // Update the info bullets
    document.getElementById('flight-height').innerText = datasets[currentSlide].info.flightHeight;
    document.getElementById('gsd').innerText = datasets[currentSlide].info.gsd;
    document.getElementById('camera').innerText = datasets[currentSlide].info.camera;
    document.getElementById('speed').innerText = datasets[currentSlide].info.speed;
}

function selectDataset() {
    const picker = document.getElementById('dataset-picker');
    currentSlide = parseInt(picker.value, 10);
    updateFullScreenContent();
}

function updatePicker() {
    const picker = document.getElementById('dataset-picker');
    picker.value = currentSlide;
}

document.addEventListener('DOMContentLoaded', () => {
    updateFullScreenContent();
    updatePicker();
});







// dataset picker from here

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.e-button');
  const list = document.querySelector('.e-list');
  const links = document.querySelectorAll('.e-list li a');

  button.addEventListener('click', function () {
    if (button.classList.contains('open')) {
      list.style.display = 'none';
      button.classList.remove('open');
    } else {
      button.classList.add('open');
      list.style.display = 'block';
    }
  });

  // Close the dropdown when a dataset is selected
  links.forEach(link => {
    link.addEventListener('click', function () {
      list.style.display = 'none';
      button.classList.remove('open');
    });
  });
});

function selectDataset(index) {
  // Your existing selectDataset logic to update the iframe and dataset info
  const picker = document.getElementById('dataset-picker');
  currentSlide = index;
  updateFullScreenContent();
  updatePicker(); // Update the picker if needed
}









