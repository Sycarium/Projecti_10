const englishDict = {
  "home.h3": "Home",
  "about.p.1":
    "This is a collection of AI generated Voices for the use of various programs and software, such as our text-to-voice app.",
  "about.p.2":
    "Text-to-voice software using custom voices downloadable from the site. Compatible with taken pictures, websites, Microsoft Word, PowerPoint ect. (introduces the app and its download)",
  "about.p.3":
    "Databank of voices AI generated from voice samples of various high tier voice actors. (this is the introduction to the downloads of voices)",
  "about.label.1":
    " As AI technology advances we are left with the question: How will our future AI Overlords match their expectations of supremacy? Will they at least sound better than the rest of humanity? To answer this question we have created a database for collecting the best of human voices and used an AI algorithm to combine them into a voice applications and other AI's can use. In modern age where voices are born and lost forever, this is the absolute minimun we can do to preserve our humanity in a vocal form.",
};

const elements = document.querySelectorAll("[data-i18n]");

const replaceText = (element) => {
  const key = element.getAttribute("data-i18n");
  element.innerText = englishDict[key] || key;
};

translatePage = () => {
  elements.forEach((element) => replaceText(element));
};
