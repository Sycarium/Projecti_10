// "data-i18n tag": "english translation"
const englishDict = {
  "information.h3": "Information",
};

const elements = document.querySelectorAll("[data-i18n]");

const replaceText = (element) => {
  const key = element.getAttribute("data-i18n");
  element.innerText = englishDict[key] || key;
};

translatePage = () => {
  elements.forEach((element) => replaceText(element));
};
