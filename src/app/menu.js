// Create an empty menubar
let menu = new nw.Menu({
    type: "menubar"
});

// Create a submenu as the 2nd level menu
let submenu = new nw.Menu();
submenu.append(new nw.MenuItem({
    label: "Item A"
}));
submenu.append(new nw.MenuItem({
    label: "Item B"
}));

// Create and append the 1st level menu to the menubar
menu.append(new nw.MenuItem({
    label: "First Menu",
    submenu: submenu
}));

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;

// Remove menu on page leave
window.onunload = () => {
    nw.Window.get().menu = null;
};
