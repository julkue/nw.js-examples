// Show developer tools
nw.Window.get().showDevTools();

// Hide developer tools on page leave
window.onunload = () => {
    nw.Window.get().closeDevTools();
};
