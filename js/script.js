jQuery(document).ready(() => {
    const sakura = new Sakura('body');

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