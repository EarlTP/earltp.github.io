jQuery(document).ready(() => {
    const sakura = new Sakura('body', {
      colors: [
          {
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

    const config = {
        name: "Luca & Karen",
        startDate: "2023-03-11",
        icsFile:"https://earltp.github.io/lk-wedding/data/Luca&Karen.ics",
        options: ['Apple','Google','iCal'],
    };
  jQuery('#saveBtn').click((event) => {
    window.atcb_action(config, event.currentTarget)
  });
})