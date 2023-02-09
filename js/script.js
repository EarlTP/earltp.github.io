jQuery(document).ready(() => {
//const sakura = new Sakura('body');

    const config = {
    name: "Ciao",
    startDate: "2023-02-11",
        icsFile:"/data/Luca&Karen.ics",
        options: ['Apple','Google','iCal'],
    };
  jQuery('#saveBtn').click((event) => {
    window.atcb_action(config, event.currentTarget)
  });
})