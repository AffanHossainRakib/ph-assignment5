// Common functions start
function getElementValueByIdInt(elementId) {
  const elementInt = parseInt(document.getElementById(elementId).innerText);
  return elementInt;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Common functions end

// Handling heart icon interaction
const heartButtons = document.querySelectorAll(".cardHeart");
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentHeartCount = getElementValueByIdInt("globalHeartCount");
    setElementValueById("globalHeartCount", currentHeartCount + 1);
  });
});

// Handling copy button interaction
const copyButtons = document.querySelectorAll(".copyButton");
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentGlobalCopyCount = getElementValueByIdInt("globalCopyCount");
    setElementValueById("globalCopyCount", currentGlobalCopyCount + 1);

    const parent2 = button.parentElement.parentElement; // Going two steps back
    const phoneNumber = parent2.querySelector(".cardPhoneNumber").innerText;
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert("Phone number copied to clipboard: " + phoneNumber);
    });
  });
});
