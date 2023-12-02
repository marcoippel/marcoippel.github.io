const kura_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const kura_tm_my_load = () => {
  kura_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
};

// Cursor
export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }
  if (myCursor.length) {
    if (document.body) {
      let o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)");
      }),
        document.body.addEventListener(
          "mouseenter",
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll("a");
            e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
};

// Audio
export const audioSoundAndOpen = () => {
  var audio1 = document.querySelectorAll("#audio1");
  var audio2 = document.querySelectorAll("#audio2");
  var hamburgers = document.querySelectorAll(".trigger .hamburger");
  // console.log(audio2);
  hamburgers.forEach((hamburger) => {
    hamburger.addEventListener("click", function () {
      var element = this;

      if (element.classList.contains("is-active")) {
        audio1[0].play();
      } else {
        audio2[0].play();
      }
      return false;
    });
  });
};

// Toggle
export const openNav = (toggle) => {
  const navItems = document.querySelectorAll("#anchor_nav> li");
  if (navItems) {
    navItems.forEach((nav) => {
      toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
    });
  }
};

// Stick top
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".kura_tm_topbar");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 50) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

const kura_tm_data_images = () => {
  let d = document.querySelectorAll("[data-img-url");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-img-url"
    )})`;
  }
};

export const dataImage = () => {
  kura_tm_data_images();
};

// Skill progress
export const activeSkillProgress = () => {
  const boxes = document.querySelectorAll(".bar");
  const triggerBottom = (window.innerHeight / 5) * 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });
};

// WOW Js
export const wowJsAnimation = () => {
  let WOW = require("wowjs");
  new WOW.WOW().init();
};

// jarallax
export const jarallaxContent = () => {
  let { jarallax, jarallaxVideo } = require("jarallax");
  jarallaxVideo();
  jarallax(document.querySelectorAll(".jarallax"), {
    // speed: 0,
    // videoSrc: "https://www.youtube.com/watch?v=7e90gBu4pas",
  });
};

// Modal
export function kura_tm_service_popup() {
  let modalBox = document.querySelector(".kura_tm_modalbox");
  let buttons = document.querySelectorAll(
    " .services> ul> li> a,.kura_tm_full_link_"
  );
  let closePopup = modalBox.getElementsByClassName("close")[0];
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let element = e.target.parentElement;
      let elImage = element.getElementsByClassName("image_")[0];
      elImage = elImage.currentSrc
        ? elImage.currentSrc
        : elImage.getAttribute("data-img-url");
      let title = element.getElementsByClassName("span")[0].innerText;
      let date =
        element.getElementsByClassName("date")[0] &&
        element.getElementsByClassName("date")[0].innerText;
      let parentLi = element.parentElement;
      let description =
        parentLi.getElementsByClassName("description")[0].innerHTML;
      let news_popup_informations = modalBox.getElementsByClassName(
        "news_popup_informations"
      )[0];
      // Image
      news_popup_informations.innerHTML = `<div class="image"><img src="img/thumbs/4-2.jpg" alt=""><div class="main" data-img-url=${elImage} ></div></div>`;
      kura_tm_data_images();

      // title
      let divTitle = document.createElement("div");
      divTitle.classList.add("details");
      divTitle.innerHTML = `${
        date ? `<span>${date}</span>` : ""
      } <h3>${title}</h3>`;
      news_popup_informations.appendChild(divTitle);

      // text
      let divText = document.createElement("div");
      divText.innerHTML = description;
      divText.classList.add("text");
      news_popup_informations.appendChild(divText);
      // popup open
      modalBox.classList.add("opened");
      return false;
    });
  });
  closePopup.addEventListener("click", () => {
    modalBox.classList.remove("opened");
    modalBox.getElementsByClassName("news_popup_informations")[0].innerHTML =
      "";
    return false;
  });
}

// A tag

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};
