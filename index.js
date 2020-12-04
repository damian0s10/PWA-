// Register service worker to control making site work offline
window.onload = () => {
    "use strict";
    if('serviceWorker' in navigator) {
        navigator.serviceWorker
                .register('./sw.js')
                .then(function() { console.log('Service Worker Registered'); });
    }
};
function notifyMe() {
    console.log("Powiadomienie");
    // Sprawdzamy czy przeglądarka obsługuje powiadomienia.
    if (!("Notification" in window)) {
      alert("Ta przeglądarka nie obsługuje powiadomień");
    }
  
    // Sprawdźmy czy uprawnienia dla powiadomienia zostały nadane
    else if (Notification.permission === "granted") {
      // jeżeli są tworzymy powiadomienie
      var notification = new Notification("hello world!");
    }
  
    // W innym przypadku tworzymy zapytanie o uprawnienia
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        //Jeżeli użytkownik zaakceptuje tworzymy powiadomienie
        if (permission === "granted") {
          var notification = new Notification("hello world!");
        }
      });
    }
  
   
  }