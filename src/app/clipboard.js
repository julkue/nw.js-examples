// Get clipboard component
const clipboard = nw.Clipboard.get();

// Show clipboard content on button click
document.querySelector("button").addEventListener("click", () => {
    const clipboardContent = clipboard.get("text");
    document.querySelector("[data-clipboard]").innerHTML = clipboardContent;
});
