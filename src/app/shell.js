const input = document.querySelector("input[type='file']");

input.addEventListener("change", () => {
    // Get the native path of the file selected by user
    const file = input.value;

    // Open the file in the native explorer using the shell API
    nw.Shell.showItemInFolder(file);
});
