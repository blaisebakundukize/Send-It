// User interface Controller
var UIController = (function () {
  var DOMStrings = {
    login: "#login",
    register: "#register",
    tabContentLogin: "#sign-in",
    tabContentRegister: "#sign-up",
    btnSubmitLogin: "#btn-login",
    btnSubmitRegister: "#btn-register",
    checkboxAdmin: "#checkbox-admin"
  };

  return {
    getDOMString: function () {
      return DOMStrings;
    }
  }

})();

// Global Controller
var Controller = (function (UICrtl) {
  var setupEventListeners = function () {
    var DOMs = UICrtl.getDOMString();
    var registerTabBtn = document.querySelector(DOMs.register);
    registerTabBtn.classList.add("active");
    var loginTabBtn = document.querySelector(DOMs.login);
    var tabContentLogin = document.querySelector(DOMs.tabContentLogin);
    var tabContentRegister = document.querySelector(DOMs.tabContentRegister);

    var checkboxAdmin = document.querySelector(DOMs.checkboxAdmin);
    loginTabBtn.addEventListener("click", function () {
      displayBlock(tabContentRegister, registerTabBtn, tabContentLogin, loginTabBtn);
    });

    registerTabBtn.addEventListener("click", function () {
      displayBlock(tabContentLogin, loginTabBtn, tabContentRegister, registerTabBtn);
    });

    document.querySelector(DOMs.btnSubmitRegister).addEventListener("click", () => {
      // After verify user input values, redirect to the next page
      window.location.href = "./ui/quote.html"
    });

    document.querySelector(DOMs.btnSubmitLogin).addEventListener("click", () => {
      // After verify user input values, redirect to the next page
      if (checkboxAdmin.checked) {
        checkboxAdmin.checked = false;
        window.location.href = "./ui/admin.html"
      } else {
        window.location.href = "./ui/quote.html"
      }

    });
  };

  var displayBlock = (eltDisplayNone, eltRemoveCls, eltDisplayBloc, eltAddCls) => {
    eltDisplayNone.style.display = "none";
    eltRemoveCls.classList.remove("active");
    eltDisplayBloc.style.display = "block";
    eltAddCls.classList.add("active");
  };

  return {
    init: function () {
      return setupEventListeners();
    }
  };

})(UIController);

Controller.init();