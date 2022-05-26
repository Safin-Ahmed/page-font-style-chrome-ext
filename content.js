chrome.runtime.sendMessage({ todo: "showPageAction" });
chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.todo == "changeColor") {
    const addColor = req.clickedColor;
    console.log(addColor);
    document.querySelector("div.scaffold").style.color = `${addColor}`;
  }
});
