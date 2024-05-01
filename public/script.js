var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  region: "",
  notifications: [],
  privacy: [],
};

// Push account ID to CleverTap account array

clevertap.account.push({ id: "Z44-Z4K-K65Z" });

// Set privacy options for CleverTap

clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: false });

(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;

  // Set the source of the script to the CleverTap library

  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";

  // Insert the script element into the DOM

  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form values

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    // Log the form values

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DOB:", dob);

    //Validate the Phone Number

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
      "Property 1": "Value 1", // string property
      "Property 2": 123, // integer property
      "Property 3": 45.67, // float property
      "Property 4": new Date(), // date-time property
    };

    try {
      // call the CleverTap function
      clevertap.event.push("Event button clicked", eventProperties);

      console.log("Event pushed to CleverTap");
    } catch (error) {
      console.error("Error pushing event to CleverTap:", error);
    }
  });

//  ------------------------------------------------------------------------------------------------

// UI Scripts for the main page

var mainTexts = [
  "Be yourself; everyone else is already taken. ",
  "You only live once, but if you do it right, once is enough. ",
  "Be the change that you wish to see in the world.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ",
  "In three words I can sum up everything I've learned about life: it goes on.",
];

var subTexts = [
  "- Oscar Wilde",
  "- Mae West",
  "- Mahatma Gandhi",
  "- Albert Einstein",
  "- Robert Frost",
];

var mainTextElement = document.getElementById("mainText");
var subTextElement = document.getElementById("subText");

// Get the index from localStorage, or default to 0 if it's not set
var index = parseInt(localStorage.getItem("index")) || 0;

function updateText() {
  mainTextElement.textContent = mainTexts[index];
  subTextElement.textContent = subTexts[index];

  // Add the fade-in class to the elements
  mainTextElement.classList.add("fade-in");
  subTextElement.classList.add("fade-in");

  // Increment the index and store it in localStorage
  index = (index + 1) % mainTexts.length;
  localStorage.setItem("index", index);
}

// Update the text immediately when the page loads
updateText();
