// datasets.js
const datasets = [
    {
        id: 'concrete-factory',
        src: 'https://demo.nira.app/a/e0UBPCOHQXSGlOtvXLDTpQ/2',
        headline: 'Concrete Factory',
        type: 'p3',
        info: {
            partnerInfo: 'NIRA',
            flightHeight: '10m',
            gsd: '0.04 cm',
            camera: 'GS120',
            speed: '3 m/s'
        },
        text: "This concrete inspection was flow with the Phase One P3 combined with the IXMGS120 and the DJI M300. We executed an automated flight mission with Drone Harmony which took around 30 minutes to Capture. This data was then processed in Pix4d to give a final model which you can see hosted here in NIRA",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: ""
    },

    {
        id: 'Faxe-Mining-80mm',
        src: 'https://app.surveytransfer.net/file/7b5c865e-1341-4daf-9dba-1b5b4330511b?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'Faxe Mining Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '15 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro in partnership with Spectrofly. We flew 60m above our take off altitude. The mine depth was a maximum of 50m giving varied GSD across this model. All of this data was captured in a single flight of around 45 minutes and combined in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/vtYsx0iuOpY"
    },

    {
        id: 'Airport-Ortho',
        src: 'https://app.surveytransfer.net/file/444ab3ae-a82f-4d33-99c9-d195150763d4?shareKey=Y4Te9HYhBGSgVE9XneCmx8cdBfIn9la42R6c4IGXDqI',
        headline: 'Airport Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro. We flew 60m above the UAS test centre in Odense, Denmark. The purpose of this dataset was to show the extreme accuracy of the P5 system when paired with the Trinity Pro. In this example we managed to achieve an absolute accuracy of 0.5cm. All of this data was captured in a single flight of around 45 minutes and combined in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "https://www.phaseone.com/2024/09/19/bringing-fixed-wing-vtol-uavs-to-a-new-accuracy-frontier-from-cm-to-mm/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/R5hf-4IKiUw?si=nSW5tQOzbi6G2YIk"
    },
    {
        id: 'Railway-BE',
        src: 'https://app.surveytransfer.net/file/63496f53-3c27-4bee-ba82-b23f3020a02e?shareKey=7Q3xbQrmbqMnPGWMkxKjOSpEA48QKizmTkjc1VnfBog',
        headline: 'Railway BE Ortho',
        type: 'p5',
        info: {
            partnerInfo: 'PIX4D',
            flightHeight: '60m',
            gsd: '0.25 cm',
            camera: 'P5 80mm',
            speed: '15 m/s'
        },
        text: "This data was captured with the Phase One P5 80mm on the Quantum Systems Trinity Pro in partnership with Infrabel. We flew 60m above the rail, covering 2km in 6 minutes showing a very high efficiency of the P5. This was then processed in Pix4D to give this result. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: "https://www.youtube.com/embed/0Jg3VgNvVMI"
    },
    {
        id: 'Danish-Rail',
        src: 'https://app.gnextlabs.com/embedded/viewer/6c07d6547c6005c2a6e5837ece57661a',
        headline: 'Danish Rail Mesh',
        type: 'p3',
        info: {
            partnerInfo: 'GNEXT',
            flightHeight: '25m',
            gsd: '0.11 cm',
            camera: 'P3 80mm',
            speed: '3 m/s'
        },
        text: "This rail inspection was flow with the Phase One P3 combined with the IXMGS120 and the DJI M350. We flew a manual mission using automated distance triggering on the P3 capturing 2 different angles of the rail. (Note only one side of the rail was captured) which took around 10 minutes to capture. The IIQs were then uploaded directly to Gnext which processed this model in their cloudbased software. ",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: ""
    },
    {
        id: 'Cell-Tower',
        src: 'https://demo.nira.app/a/qwPQTi3uRwqNDZi_tPuzFA/1',
        headline: 'Cell Tower',
        type: 'p3',
        info: {
            partnerInfo: 'NIRA',
            flightHeight: '7m',
            gsd: '0.03 cm',
            camera: 'P3 80mm',
            speed: '3 m/s'
        },
        text: "This cell tower inspection was flow with the Phase One P3 combined with the IXMGS120 and the DJI M350. We executed an automated flight mission with Drone Harmony which took around 30 minutes to Capture and combined this with some manual flying to complete this. For this example we took many more images than would be traditionally needed to ensure we could make the best possible model. This data was then processed by NIRA and hosted on their platform.",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "",
        youtubeUrl: ""
    },
    {
        id: 'Town-Roof',
        src: 'https://app.surveytransfer.net/file/c839b3f4-7b01-49b3-b7a3-9d2220a84d99?shareKey=O_e4duaB9cvPEVvF-lvBLC_PZG-q_lvtLSkTpkGORGw',
        headline: 'Town Roof inspection',
        type: 'p5',
        info: {
            partnerInfo: 'Drone Institute',
            flightHeight: '90m',
            gsd: '0.38 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "Dronestitute’s hail damage detection system was put to the test in Aurora, Colorado, where the Trinity Pro and P5 camera flew over 110 acres of urban terrain. Led by team members Nick, Andrew, and Byron, the mission demonstrated how effectively the Trinity Pro and P5 could handle real-world conditions while delivering actionable results.",
        downloadUrl: "https://www.phaseone.com/access-phase-one-datasets-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        caseStoryUrl: "https://www.phaseone.com/2024/12/17/revolutionizing-hail-damage-detection-how-dronestitute-leverages-trinity-pro-and-phase-one-p5/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/HkCy7SDwwBI"
    }

    ,
    {
        id: 'Dickson-Airfield',
        src: 'https://app.surveytransfer.net/view/02a6aa2b-743c-4c44-8440-73c90a4768ce?shareKey=EEksdo1Dhe8lc-KYS8kFlwAuv3O0E3MTrO3vVJG5Zuo',
        headline: 'P5 Dickson Airfield',
        type: 'hidden',
        info: {
            partnerInfo: 'DOT',
            flightHeight: '70m',
            gsd: '0.3 cm',
            camera: 'P5 80mm',
            speed: '18 m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Infrabel',
        src: 'https://app.surveytransfer.net/file/ab42958b-aea5-4dfc-ba01-9292babcdbf8?shareKey=liEYEIzLrI6g3l8aMSTXz5tdkie-vfRLUUxQustXWLg',
        headline: 'P3 Infrabel',
        type: 'hidden',
        info: {
            partnerInfo: 'Infrabel',
            flightHeight: '25m',
            gsd: '0.1 cm',
            camera: 'P3 80mm',
            speed: '5 m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Easteregg-Hunt',
        src: 'https://app.surveytransfer.net/file/5d1c9468-1584-47be-b29b-a66fb9045fd4?shareKey=hPrbRaZihAOKNxOsngU95QUEBaboQw77nMY3biUBqxw',
        headline: 'P3 Easteregg Hunt',
        type: 'hidden',
        info: {
            partnerInfo: 'Fyns Sommerland',
            flightHeight: '60m',
            gsd: '0.26 cm',
            camera: 'P3 80mm',
            speed: '5m m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'P3-Faxe',
        src: 'https://app.surveytransfer.net/view/a5f72c5b-6c42-4865-abd6-165edf61e718?shareKey=w1UJ5ZjvXoZD9ANHTh7nuhjDlu4FvQO6E1ixpFJSbq4',
        headline: 'P5 Faxe 80 + 35',
        type: 'hidden',
        info: {
            partnerInfo: 'Spektrofly',
            flightHeight: '120m',
            gsd: '1.18 cm',
            camera: 'P5 35mm',
            speed: '18m m/s'
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'Power Line',
        src: 'Tools/Gallery/Power/powergeneric.html',
        headline: 'Powerline',
        type: 'hidden',
        info: {
            partnerInfo: '',
            flightHeight: '',
            gsd: '',
            camera: '',
            speed: ''
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }
    ,
    {
        id: 'dynamic-house',
        src: 'Tools/BAF/DynamicRange/house.html',
        headline: 'Dynamic Range',
        type: 'toolbox',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '60',
            gsd: '0.25 cm',
            camera: 'GS120',
            speed: '0 m/s'
        },
        text: "The Phase One camera, combined with IIQ files, is the perfect solution for drone photography in demanding lighting conditions. Its exceptional dynamic range ensures critical details are preserved in both shadows and highlights, even when capturing images against the sun or in high-contrast environments. This capability is vital for professionals who rely on accurate and usable data for analysis, mapping, and inspection. With Phase One, you get unmatched image quality and post-processing flexibility, making it the ideal choice for aerial photography where precision matters most.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/solutions/geospatial-solutions/uav-payloads/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/afKahiF7mL4"
    }
    ,
    {
        id: 'dynamic-house_p5',
        src: 'Tools/BAF/DynamicRange/house.html',
        headline: 'Dynamic Range',
        type: 'hidden',
        info: {
            partnerInfo: 'Phase One',
            flightHeight: '60',
            gsd: '0.25 cm',
            camera: 'GS120',
            speed: '0 m/s'
        },
        text: "The Phase One camera, combined with IIQ files, is the perfect solution for drone photography in demanding lighting conditions. Its exceptional dynamic range ensures critical details are preserved in both shadows and highlights, even when capturing images against the sun or in high-contrast environments. This capability is vital for professionals who rely on accurate and usable data for analysis, mapping, and inspection. With Phase One, you get unmatched image quality and post-processing flexibility, making it the ideal choice for aerial photography where precision matters most.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/solutions/geospatial-solutions/uav-payloads/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/afKahiF7mL4"
    }
    ,
    {
        id: 'Pas880-Ljubljana',
        src: 'https://www.arcgis.com/home/webscene/viewer.html?disableFeatures=im-shading&webscene=68fe59a173784eabb94752f237684259',
        headline: 'Ljubljana',
        type: 'PAS',
        info: {
            partnerInfo: 'Flycom Technologies',
            flightHeight: '1400',
            gsd: '5 cm',
            camera: 'PAS 880',
            speed: '60 m/s'
        },
        text: "Slovenia’s Surveying and Mapping Authority (GURS) partnered with Flycom Technologies and Phase One in 2023 to create 3D city models of Ljubljana, Bled, and Murska Sobota. Using the PAS 880i Oblique Camera System, high-resolution oblique and nadir images were captured efficiently, covering 176 km² in total. These images enabled the generation of orthophotos, 3D meshes, and digital surface models, essential for urban planning, disaster response, and infrastructure inspection. The detailed imagery also captured vertical surfaces, such as buildings and cliffs, enhancing analysis capabilities. This project demonstrates the potential of advanced 3D data in streamlining government operations and decision-making processes.",
        downloadUrl: "",
        caseStoryUrl: "https://www.phaseone.com/inspiration/revolutionizing-slovenian-urban-planning/?utm_source=datasetviewer&utm_medium=website&utm_campaign=GEO_Datasetviewer",
        youtubeUrl: "https://www.youtube.com/embed/SVBfK1TS9Go"
    },
    {
        id: 'MIO',
        src: 'Tools/Gallery/Tuscan/tuscan.html',
        headline: 'MIO',
        type: 'hidden',
        info: {
            partnerInfo: '',
            flightHeight: '',
            gsd: '',
            camera: '',
            speed: ''
        },
        text: "",
        downloadUrl: "",
        caseStoryUrl: "",
        youtubeUrl: ""
    }



];




