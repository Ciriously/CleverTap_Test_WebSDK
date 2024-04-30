var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  region: "",
  notifications: [],
  privacy: [],
};

clevertap.account.push({ id: "Z44-Z4K-K65Z" });
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: false });

(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DOB:", dob);

    var phoneRegex = /^\+\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be formatted as +[country code][number]");
      return;
    }

    clevertap.onUserLogin.push({
      Site: {
        Name: name,
        Email: email,
        Phone: phone,
        DOB: new Date(dob),
      },
    });

    console.log("Data sent to CleverTap");
  });

document
  .getElementById("profilePush")
  .addEventListener("click", function (event) {
    // get the values of the name, email, and phone fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    // check the format of the phone number
    var phoneRegex = /^\+\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be formatted as +[country code][number]");
      return;
    }

    try {
      // call the CleverTap function
      clevertap.profile.push({
        Site: {
          Name: name,
          Email: email,
          Phone: phone,
          DOB: new Date(dob),
        },
      });

      console.log("Profile data pushed to CleverTap");
    } catch (error) {
      console.error("Error pushing profile data to CleverTap:", error);
    }
  });

document
  .getElementById("askForPush")
  .addEventListener("click", function (event) {
    try {
      // call the CleverTap function
      clevertap.notifications.push({
        titleText: "Would you like to receive Push Notifications?",
        bodyText:
          "We promise to only send you relevant content and give you updates on your transactions",
        okButtonText: "Sign me up!",
        rejectButtonText: "No thanks",
        askAgainTimeInSeconds: 5,
        okButtonColor: "#f28046",
      });

      console.log("Push notification request sent to CleverTap");
    } catch (error) {
      console.error(
        "Error sending push notification request to CleverTap:",
        error
      );
    }
  });

document
  .getElementById("eventButton")
  .addEventListener("click", function (event) {
    // define the event properties
    var eventProperties = {
      property1: "value1", // string property
      property2: 123, // integer property
      property3: 123.45, // float property
      property4: new Date(), // date-time property
    };

    try {
      // call the CleverTap function
      clevertap.event.push("eventName", eventProperties);

      console.log("Event pushed to CleverTap");
    } catch (error) {
      console.error("Error pushing event to CleverTap:", error);
    }
  });
