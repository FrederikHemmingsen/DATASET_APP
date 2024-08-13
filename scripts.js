let currentSlide = 0;
const datasets = [
    {
        src: 'https://demo.nira.app/a/e0UBPCOHQXSGlOtvXLDTpQ/2',
        headline: 'P3 Concrete Factory',
        info: {
            flightHeight: '10m',
            gsd: '0.043 cm/pixel',
            camera: 'GS120',
            speed: '3 m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/4dd8140e-9496-47c2-b525-9a6e59c8b8ed?shareKey=SVoo14tw9vXjvOn-92kTZTpFgllAj7fDZ94nfPu2WFk',
        headline: 'P5 Airport Ortho',
        info: {
            flightHeight: '60m',
            gsd: '0.259 cm/pixel',
            camera: 'P5 80mm',
            speed: '15m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/162172a0-1c03-4e0f-bf43-7e65b9d2f7de?shareKey=SVoo14tw9vXjvOn-92kTZTpFgllAj7fDZ94nfPu2WFk',
        headline: 'P5 Airport Pointcloud',
        info: {
            flightHeight: '60m',
            gsd: '0.259 cm/pixel',
            camera: 'P5 80mm',
            speed: '15m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/bc54dfcc-b242-49d9-8ad4-97056b513382?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'P5 Open-pit mine Ortho',
        info: {
            flightHeight: '120m',
            gsd: '1.183 cm/pixel',
            camera: 'P5 35mm',
            speed: '15m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/63aa4e7a-e284-4171-8511-5144078b9fa0?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'P5 Open-pit mine Pointcloud',
        info: {
            flightHeight: '120m',
            gsd: '1.183 cm/pixel',
            camera: 'P5 35mm',
            speed: '15m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/view/cff08841-b4bb-493e-a949-cc89a1ba9471?shareKey=FsirdLJgMdtOZ3NqdMkWauGuvfSZebQ-e3a7TjgpR8I',
        headline: 'P5 Railway Pointcloud',
        info: {
            flightHeight: '60m',
            gsd: '0.259 cm/pixel',
            camera: 'P5 80mm',
            speed: '22m m/s'
        }
    },
    {
        src: 'https://app.surveytransfer.net/file/5d1c9468-1584-47be-b29b-a66fb9045fd4?shareKey=hPrbRaZihAOKNxOsngU95QUEBaboQw77nMY3biUBqxw',
        headline: 'P3 - Sommerland Fyn Ortho',
        info: {
            flightHeight: '60m',
            gsd: '0.259 cm/pixel',
            camera: 'P5 80mm',
            speed: '4m m/s'
        }
    },
    {
        src: 'https://strrd.maps.arcgis.com/apps/instant/3dviewer/index.html?appid=d9a1dd6c8f754b5db853e120d7084d85',
        headline: 'PAS880 Dover City',
        info: {
            flightHeight: '',
            gsd: '',
            camera: '',
            speed: ''
        }
    },
    {
        src: 'https://www.arcgis.com/apps/webappviewer3d/index.html?id=a3ed3789ac054bf4b3b4baaaa427a8da',
        headline: 'PAS880 Seattle City',
        info: {
            flightHeight: '',
            gsd: '',
            camera: '',
            speed: ''
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









