jQuery(document).ready(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let language = urlParams.get('language') || "it-IT";
    
    const navigatorLanguage = navigator.language || navigator.userLanguage;
    if (navigatorLanguage.indexOf("es") > -1) {
       language = "es-ES";
    }

    const itTranslation = {
        "title": "Matrimonio Luca & Karen | 11 marzo 2023",
        "msg1": "Siamo lieti di invitarvi al<br>nostro matrimonio"
    };
    const esTranslation = {
        "title": "Boda Luca & Karen | 11 marzo 2023",
        "msg1": "Anhelamos contar con su presencia<br>para celebrar nuestra hermosa unión"
    };

    const translator = new Translator();
    translator.add('it-IT', itTranslation).add('es-ES', esTranslation).translatePageTo(language);
    
    jQuery(".flag").click((event) => {
        const flag = event.currentTarget;
        language = flag.dataset.language;
        
        if(['it-IT', 'es-ES'].indexOf(language) > -1) {
            translator.translatePageTo(language);
        }
    });

    const sakura = new Sakura('body', {
        colors: [{
                gradientColorStart: 'rgba(98, 76, 171, 0.9)',
                gradientColorEnd: 'rgba(218, 197, 221, 0.9)',
                gradientColorDegree: 120
            },
            {
                gradientColorStart: 'rgba(219, 144, 219, 0.9)',
                gradientColorEnd: 'rgba(231, 160, 229, 0.9)',
                gradientColorDegree: 120
            },
            {
                gradientColorStart: 'rgba(98, 76, 171, 0.9)',
                gradientColorEnd: 'rgba(218, 197, 221, 0.9)',
                gradientColorDegree: 120
            },
        ],
    });

    const eventConfig = {
        name: "Luca & Karen",
        startDate: "2023-03-11",
        icsFile: "https://earltp.github.io/lk-wedding/data/Luca&Karen.ics",
        options: ['Apple', 'Google', 'iCal'],
        hideIconButton: true,
        hideBackground: true,
        listStyle:"overlay"
    };

    jQuery('#saveBtn').click((event) => {
        window.atcb_action(eventConfig, event.currentTarget)
    });
    
    jQuery('.map-link').click((event) => {
        const link = event.currentTarget;
        let address = encodeURIComponent(link.dataset.address);
        if ((navigator.platform.indexOf('iPhone') != -1) || (navigator.platform.indexOf('iPad') != -1) || (navigator.platform.indexOf('iPod') != -1)){/* if we're on iOS, open in Apple Maps */
            window.open('http://maps.apple.com/?q=' + address);
        } else { /* else use Google */
            window.open('https://maps.google.com/maps?q=' + address);
        }
    });
});
