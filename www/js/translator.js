// "data-i18n tag": "english translation"
const englishDict = {
  "information.h3": "Information",
  "download.h3.1": "First two weeks for free!",
  "download.p.1":
    "Download now and you will get AI Voice Banks for first two weeks without any costs. This is how you are able to get used to our program in peace. With the free trialperiod we believe that we are able to make your experiance better. We guarantee that every single person has enough time to learn to use AI Voice Banks in peace.",
  "download.h3.2": "To who this program is meant?",
  "download.p.2":
    "This program is meant for everyone, but to those few, whose life situation is so bad that you have diagnosed a illness, like 'als', our program could be life changing. The greatest thing in our product is that you dont need vision anymore to read, nowadays you are able to hear it. You can also choose which voice you want to be hearing. ",
  "download.h3.3": "Download",
  "contact.h3.1": "We appreciate your feedback",
  "contact.p.1":
    "We prioritize the development of our product primarily and aim to direct the product as user-like as possible. In order to achieve our goals, we need your help. The feedback we receive is constantly aimed at improving the usability of our product and that it is",
  "contact.h3.2": "Contact us",
  "contact.p.2":
    "Elias Westerling - email: elias.westerling@gmail.com, Miika Oja-Kaukola - email: miika.oja-kaukola@gmail.com, Tuomas Thuren - email: tuoms.thuren@gmail.com, Mattias Thuren - email: mattias.thuren@gmail.com, Matias Nuotio - email: matias.nuotio@gmail.com, Olli-Pekka Miesvirta - email: olli-pekka.miesvirta@gmail.com",
  "contact.h3.3": "Feedback",
  "contact.label.1": "Email",
  "contact.label.2": "Message",
  "contact.a.1": "Send",
  "nav.li.1": "Information",
  "nav.li.2": "Pricing",
  "nav.li.3": "Contact",
};

const elements = document.querySelectorAll("[data-i18n]");

const replaceText = (element) => {
  const key = element.getAttribute("data-i18n");
  element.innerText = englishDict[key] || key;
};

translatePage = () => {
  elements.forEach((element) => replaceText(element));
};
