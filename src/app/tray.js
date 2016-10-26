// Create a menu for the tray icon
let menu = new nw.Menu();
menu.append(new nw.MenuItem({
    type: "checkbox",
    label: "Option 1"
}));
menu.append(new nw.MenuItem({
    type: "checkbox",
    label: "Option 2"
}));

// Create a tray icon
let tray = new nw.Tray({
    title: "Tray",
    tooltip: "nw.js-examples",
    icon: "assets/icon.png",
    menu: menu
});

// Remove tray icon on page leave
window.onunload = () => {
    tray.remove();
    tray = null;
};
