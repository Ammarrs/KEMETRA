var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = function () {
  mobileMenu.classList.toggle("hidden");
};

var ambientBtns = document.querySelectorAll(".ambient");
var ambientLabels = document.querySelectorAll(".ambient-label");

function toggleAmbient() {
  var state = ambientLabels[0].textContent;
  if (state == "Ambient OFF") {
    ambientLabels[0].textContent = "Ambient ON";
    ambientLabels[1].textContent = "Ambient ON";
  } else {
    ambientLabels[0].textContent = "Ambient OFF";
    ambientLabels[1].textContent = "Ambient OFF";
  }
}

for (var i = 0; i < ambientBtns.length; i++) {
  ambientBtns[i].onclick = toggleAmbient;
}

var showBtns = document.querySelectorAll("[data-toggle]");

for (var j = 0; j < showBtns.length; j++) {
  showBtns[j].onclick = function () {
    var input = document.getElementById(this.getAttribute("data-toggle"));
    if (input.type == "password") {
      input.type = "text";
      this.textContent = "Hide";
    } else {
      input.type = "password";
      this.textContent = "Show";
    }
  };
}

document.oncontextmenu = function () {
  return false;
};

document.ondragstart = function () {
  return false;
};

document.oncopy = function (e) {
  var tag = e.target.tagName;
  if (tag != "INPUT" && tag != "TEXTAREA") {
    e.preventDefault();
  }
};

document.oncut = function (e) {
  var tag = e.target.tagName;
  if (tag != "INPUT" && tag != "TEXTAREA") {
    e.preventDefault();
  }
};

document.onselectstart = function (e) {
  var tag = e.target.tagName;
  if (tag != "INPUT" && tag != "TEXTAREA") {
    e.preventDefault();
  }
};

document.onkeydown = function (e) {
  var key = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && (key == "c" || key == "x" || key == "u" || key == "p" || key == "s")) {
    var tag = e.target.tagName;
    if (!(key == "c" && (tag == "INPUT" || tag == "TEXTAREA"))) {
      e.preventDefault();
    }
  }
};

var form = document.getElementById("signupForm");

form.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("fullName");
  var email = document.getElementById("email");
  var pass = document.getElementById("password");
  var pass2 = document.getElementById("confirmPassword");

  if (name.value == "") {
    name.setCustomValidity("Please enter your full name.");
  } else {
    name.setCustomValidity("");
  }

  if (email.value == "") {
    email.setCustomValidity("Please enter your email address.");
  } else {
    email.setCustomValidity("");
  }

  if (pass.value.length > 0 && pass.value.length < 12) {
    pass.setCustomValidity("Use at least 12 characters.");
  } else {
    pass.setCustomValidity("");
  }

  if (pass2.value != "" && pass2.value != pass.value) {
    pass2.setCustomValidity("Passwords do not match.");
  } else {
    pass2.setCustomValidity("");
  }

  if (form.reportValidity()) {
    var btn = form.querySelector("button[type=submit]");
    btn.textContent = "Creating account...";
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = "Create Account";
      btn.disabled = false;
    }, 2000);
  }
};
