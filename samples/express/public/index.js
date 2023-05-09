const API_KEY = "d88b57d2-843a-4692-b975-27088c9a1915";
const EXTERNAL_ID = newGuid();

function initializeRows() {
  let storyRow = new Storyteller.RowView("storyteller-row", [], true);
}

(function () {
  ready(function () {
    Storyteller.sharedInstance
      .initialize(API_KEY, {
        externalId: EXTERNAL_ID,
      })
      .then(function () {
        initialized = true;
        initializeRows();
      })
      .catch((e) => {
        console.warn(e);
        error = true;
      });

    addResetUserDataHandler();
  });

  function ready(fn) {
    if (
      document.attachEvent
        ? document.readyState === "complete"
        : document.readyState !== "loading"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
})();

function addResetUserDataHandler() {
  function onClick(element, handler) {
    if (element.addEventListener) {
      element.addEventListener("click", handler, false);
    } else {
      element.attachEvent("onclick", handler);
    }
  }

  onClick(document.getElementById("reset-user-data"), function () {
    Storyteller.sharedInstance.setUserDetails({ externalId: newGuid() });
    location.reload();
  });
}

function newGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
