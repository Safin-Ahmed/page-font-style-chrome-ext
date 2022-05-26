let color = document.getElementById("fontColor").value;
["click", "change", "paste", "keyup"].forEach((ev) => {
  document.getElementById("fontColor").addEventListener(ev, () => {
    color = document.getElementById("fontColor").value;
  });
});

document.getElementById("btnChange").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      todo: "changeColor",
      clickedColor: color,
    });
  });
});
