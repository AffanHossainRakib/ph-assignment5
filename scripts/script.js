// Common functions start
function getElementValueByIdInt(elementId) {
  const elementInt = parseInt(document.getElementById(elementId).innerText);
  return elementInt;
}

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function updateCallHistoryUI() {
  const callHistoryContainer = document.querySelector(".callHistoryContainer");
  callHistoryContainer.innerHTML = ""; // Clear existing logs

  callHistory.forEach((log) => {
    const logElement = document.createElement("div");
    logElement.className =
      "flex justify-between items-center p-4 m-2 shadow-sm  rounded-3xl bg-[#ebf5ef]";
    logElement.innerHTML = `
          <div>
            <h3 class="text-[#111111] inter-font font-semibold text-lg">${log.mainHeader}</h3>
            <p class="text-[#5C5C5C] hind-madurai-font font-normal text-lg ">${log.number}</p>
          </div>
          <div>
            <p class="font-normal text-lg hind-madurai-font text-[#111111]">${log.time}</p>
          </div>
        `;
    callHistoryContainer.appendChild(logElement);
  });
}
// Common functions end

// Global Data
const callHistory = [];

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

// Handling call button interaction
const callButtons = document.querySelectorAll(".callButton");
callButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentGlobalCoinCount = getElementValueByIdInt("globalCoinCount");
    if (currentGlobalCoinCount < 20) {
      alert(
        "You do not have sufficient coins to make calls, please refresh the page."
      );
      return;
    }

    const parent2 = button.parentElement.parentElement; // Going two steps back
    const callLog = {
      mainHeader: parent2.querySelector(".cardMainHeader").innerText,
      number: parent2.querySelector(".cardPhoneNumber").innerText,
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(callLog);
    alert(`Calling ${callLog.mainHeader} at ${callLog.number}`);
    setElementValueById("globalCoinCount", currentGlobalCoinCount - 20);

    // Update call history UI
    updateCallHistoryUI();
  });
});

// Clearing Call History
const clearHistoryButton = document.getElementById("callHistoryClearButton");
clearHistoryButton.addEventListener("click", () => {
  callHistory.length = 0; // Clear the call history array
  updateCallHistoryUI(); // Update the UI
});
