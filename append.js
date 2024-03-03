function appendScr() {
  const body = document.body;
  const filePath = "./js/main.js";
  const filePath2 = "./js/syscheck.js";
  const script = document.createElement("script");
  const script2 = document.createElement("script");
  script.src = filePath
  script2.src = filePath2;
  body.appendChild(script2);
  body.appendChild(script);
}