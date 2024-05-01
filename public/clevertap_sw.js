importScripts(
  "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js"
);

self.addEventListener("push", function (event) {
  console.log("Push event received", event);

  var data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = {
        title: "Default Title",
        body: "Default body text",
      };
    }
  }

  var title = data.title || "Default Title";
  var options = {
    body: data.body || "Default body text",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
