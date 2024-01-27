/* learning_course_section starts */

let learning_course_boxes = document.querySelector(".learning_course_boxes");
let boxInfo = {
  boxImgs: [
    "./images/ios.webp",
    "./images/react.webp",
    "./images/phyton.webp",
    "./images/adv phyton.webp",
    "./images/adv cybersecurity.webp",
    "./images/tot.webp",
    "./images/blockchain.webp",
    "./images/devops.webp",
    "./images/security.webp",
  ],
  boxNames: [
    "iOS Development",
    "React",
    "Intro to Python",
    "Advanced Python",
    "Advanced Cybersecurity Course",
    "ToT - Training of Trainers",
    "Blockchain",
    "DevOps",
    "Information Security Governance",
  ],
  registationInfos: "რეგისტრაცია დასრულებულია",
  courseDetailImg: "./images/arrow.png",
  courseDetailInfo: "კურსის დეტალები",
};

createLearningBox = (num) => {
  for (let i = 0; i < num; i++) {
    let learning_box = document.createElement("div");
    learning_course_boxes.appendChild(learning_box);
    learning_box.classList.add("learning_box");

    let boxImg = document.createElement("img");
    boxImg.src = boxInfo.boxImgs[i];
    learning_box.appendChild(boxImg);

    let boxName = document.createElement("h6");
    boxName.innerHTML = boxInfo.boxNames[i];
    learning_box.appendChild(boxName);

    let registationInfo = document.createElement("p");
    registationInfo.innerHTML = boxInfo.registationInfos;
    learning_box.appendChild(registationInfo);

    let detailInfoBox = document.createElement("div");
    learning_box.appendChild(detailInfoBox);

    let detailInfoArrow = document.createElement("img");
    detailInfoArrow.src = boxInfo.courseDetailImg;
    detailInfoBox.appendChild(detailInfoArrow);

    let detailInfo = document.createElement("span");
    detailInfo.innerHTML = boxInfo.courseDetailInfo;
    detailInfoBox.appendChild(detailInfo);
  }
};
createLearningBox(9);

/* project_partners_section starts */

document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".slider");
  let currentSlideIndex = 0;

  showSlide = (index) => {
    let transformValue = -index * 100 + "%";
    slider.style.transform = "translateX(" + transformValue + ")";
  };

  nextSlide = () => {
    setTimeout(function () {
      currentSlideIndex++;
      if (currentSlideIndex > slider.children.length - 1) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    }, 500);
  };

  prevSlide = () => {
    setTimeout(function () {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = slider.children.length - 1;
      }
      showSlide(currentSlideIndex);
    }, 500);
  };
  setActiveSlide = (newIndex) => {
    let slide = document.querySelector(".slider .slide");

    slide.classList.add("out");

    setTimeout(function () {
      currentSlideIndex = newIndex;
      showSlide(newIndex);
      setActiveBullet();

      slide.classList.remove("out");
    }, 500);
  };

  let nextButton = document.querySelector(".nextArrow");
  nextButton.addEventListener("click", nextSlide);

  let prevButton = document.querySelector(".prevArrow");
  prevButton.addEventListener("click", prevSlide);

  createBullets = () => {
    let slide = document.querySelectorAll(".slide");
    let project_partners_info = document.querySelector(".project_partners");
    let bullets = document.createElement("div");
    bullets.className = "bullets";
    project_partners_info.appendChild(bullets);

    for (let i = 0; i < slide.length; i++) {
      let bullet = document.createElement("button");
      bullet.className = "bullet";
      bullets.appendChild(bullet);
    }

    setActiveBullet();
  };

  setActiveBullet = () => {
    let bullets = document.querySelectorAll(
      ".project_partners .bullets .bullet"
    );
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");
      bullets[i].addEventListener("click", function () {
        setActiveSlide(i);
      });
    }

    bullets[currentSlideIndex].classList.add("active");
  };
  createBullets();
  setInterval(nextSlide, 3000);
});

/* faq_section starts */

let questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    toggleAnswer(questions[i]);
    questions[i].lastElementChild.classList.toggle("rotate");
  });
}
toggleAnswer = (question) => {
  let answer = question.nextElementSibling;

  let allAnswers = document.querySelectorAll(".answer");

  for (let i = 0; i < allAnswers.length; i++) {
    if (allAnswers[i] !== answer) {
      allAnswers[i].style.display = "none";
      allAnswers[i].previousElementSibling.lastElementChild.style.rotate =
        "0deg";
    }
  }

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    answer.previousElementSibling.lastElementChild.style.rotate = "180deg";
  } else {
    answer.style.display = "none";
    answer.previousElementSibling.lastElementChild.style.rotate = "0deg";
  }
};
