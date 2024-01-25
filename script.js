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
