function getElementValueByIdInt(elementId) {
  const elementInt = parseInt(document.getElementById(elementId).innerText);
  return elementInt;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = value;
  }
}

// Handling heart icon interaction
function incrementHeartCount() {
  const currentHeartCount = getElementValueByIdInt("heartCount");
  setElementValueById("heartCount", currentHeartCount + 1);
}
