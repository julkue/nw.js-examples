// Create an empty context menu
let menu = new nw.Menu();

// Add some items
menu.append(new nw.MenuItem({
    label: "Item A"
}));
menu.append(new nw.MenuItem({
    label: "Item B"
}));
menu.append(new nw.MenuItem({
    type: "separator"
}));
menu.append(new nw.MenuItem({
    label: "Item C"
}));

document.querySelector(".sandbox").addEventListener("contextmenu", (event) => {
    event.preventDefault();
    menu.popup(event.x, event.y);
    return false;
});
