console.group("Initial Checks");
var debugConsole = document.getElementById("debugconsole").textContent;
debugConsole = debugConsole + "\n";
const link = document.createElement("link");
const bmbarNote = document.createElement("p");
const resWarn = document.createElement("p");
const runningBrowserString = document.getElementById("runningbrowserstring");
const div = document.getElementById("unsupportedremove");
var enableJS = true;
console.group("Navigator Information");
console.groupCollapsed();
console.log(window.navigator);
console.groupEnd();
function sysCheck() {
  const browsers = ["MSIE", "Firefox", "Safari", "Chrome", "OPR", "Edg"];
  const userAgent = navigator.userAgent;
  const userAgentData = navigator.userAgentData;
  var index = browsers.length - 1;
  var browserStr = "Undetected";
  var os = "Undetected";
  while (index > -1 && userAgent.indexOf(browsers[index]) == -1) { //Loop through possible UA strings to detect client browser
    index--;
  }
  if (index > -1) browserStr = browsers[index];
  if (userAgentData != undefined) os = userAgentData.platform; //Use userAgentData to find client. operating system.
  else {
    const oses = ["X11", "Windows", "Mac", "Linux"];
    var osIndex = oses.length - 1;
    while (osIndex > -1 && userAgent.indexOf(oses[osIndex]) == -1) { //Loop through possible UA strings to detect client operating system, this only triggers if the userAgentData method is unsupported.
      osIndex--;
    }
    if (osIndex > -1) os = oses[osIndex];
    if (os == "X11") os = "Unix";
  }
  //Normalize UA strings
  if (browserStr == "Edg") browserStr = "Edge";
  else if (browserStr == "OPR") browserStr = "Opera";
  else if (browserStr == "MSIE") browserStr = "Internet Explorer";
  runningBrowserString.textContent = browserStr + " running on " + os;
  console.log(browserStr + " running on " + os);
  console.log("User Agent String: " + userAgent);
  const unsupportedString = document.createElement("p");
  unsupportedString.style.position = "absolute";
  unsupportedString.style.fontSize = "25px";
  unsupportedString.style.fontFamily = "courier";
  unsupportedString.style.top = "22vw";
  unsupportedString.style.left = "11vw";
  unsupportedString.style.display = "none";
  document.body.style.background = "url(./img/background.jpg)";
  document.body.appendChild(unsupportedString);
  if (browserStr == "Internet Explorer") { //IE is not supported at all, and support is not planned.
    const html = document.getElementById("unsupportedremove");
    document.body.removeChild(html);
    unsupportedString.textContent = "The browser you are using, " + browserStr + ", is not supported. Please use a different browser.";
    unsupportedString.style.display = "block";
    enableJS = false;
    throw ("Detected browser is unsupported, JavaScript will not be used past this point.");
  } else if (browserStr == "Chrome") { //Chrome is supported, but it is recommended to disable the bookmarks bar.
    width = "1903";
    console.log("User is using either Chrome or a Chromium-based browser, width will be 1903, and displaying bookmarks bar notice.");
    debugConsole = debugConsole + "User is using either Chrome or a Chromium-based browser, width will be 1903, and displaying bookmarks bar notice." + "\n";
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: If you cannot see the build string in the bottom left, you may need to disable the bookmarks bar to see everything correctly.";
    document.body.appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else if (browserStr == "Firefox") { //Firefox is supported without issues.
    console.log("User is using Firefox, width will be 1920.");
    debugConsole = debugConsole + ("User is using Firefox, width will be 1920." + "\n");
    width = "1920";
    const bs = document.getElementById("buildstring").style;
    const bobs = document.getElementById("basedonbuildstring").style;
    const rbs = document.getElementById("runningbrowserstring").style;
    const sb = document.getElementById("startbutton").style;
    const wsb = document.getElementById("wipesavebutton").style;
    const usb = document.getElementById("upgradebutton").style;
    const rtsb = document.getElementById("shopreturnbutton").style;
    bs.top = "48vw";
    bobs.top = "48vw";
    rbs.top = "48vw";
    sb.top = "45.5vw";
    wsb.top = "45.5vw";
    usb.top = "45.5vw";
    rtsb.top = "45.5vw";
    document.getElementById("titlescreen").style.display = "block";
  } else if (browserStr == "Opera") { //Opera is supported, but shop and stat panel borders cannot be drawn.
    width = "1903";
    console.log("User is using Opera, width will be 1903, and game borders will not be drawn.");
    debugConsole = debugConsole + "User is using Opera, width will be 1903, and game borders will not be drawn." + "\n";
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: Opera does not support the way in-game borders are drawn.";
    document.body.appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else if (browserStr == "Edge") { //Edge is supported, but toLocaleString will not be utilized, and shop and stat panel borders cannot be drawn.
    width = "1897";
    console.log("User is using Edge, width will be 1897, numbers will not be formatted, and game borders will not be drawn.");
    debugConsole = debugConsole + "User is using Edge, width will be 1897, numbers will not be formatted, and game borders will not be drawn." + "\n";
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: Edge does not support the number formatting system this game uses, and the way in-game borders are drawn.";
    document.body.appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else {
    width = "1920";
    document.getElementById("titlescreen").style.display = "block";
  }
  resolutionCheck(enableJS, width);
}
function resolutionCheck(enableJS, width) { //There are currently only two supported resolutions, 1920x1080, and 1366x768. A different stylesheet is loaded based on browser width. It is recommended that you play the game in a maximized browser window at default zoom (100%).
  console.log(enableJS, width);
  var curStySht = "";
  const head = document.head;
  const body = document.body;
  link.rel = "stylesheet";
  link.type = "text/css";
  if ($(window).width() > "1366" && $(window).width() <= width) {
    link.href = "./css/style1920x1080.css";
    curStySht = "1920x1080";
    head.appendChild(link);
  } else if ($(window).width() >= "1366" && $(window).width() <= "1366") {
    link.href = "./css/style1366x768.css";
    curStySht = "1366x768";
    head.appendChild(link);
  }
  if ($(window).width() > width || $(window).width() < "1366" || $(window).width() > "1366" && $(window).width() < width) {
    link.href = "./css/style1366x768.css";
    curStySht = "Fallback";
    console.warn("User has an unsupported window width. The window or zoom size may have changed, or their resolution is lower than supported. Using fallback for now.");
    debugConsole = debugConsole + "WARN: User has an unsupported window width. The window or zoom size may have changed, or their resolution is lower than supported. Using fallback for now." + "\n";
    resWarn.style.position = "static";
    resWarn.style.fontSize = "13px";
    resWarn.textContent = "Your current browser width (" + $(window).width() + "px) is unsupported! This may be caused by an unmaximized browser window, zoomed in/zoomed out browser window, or your screen resolution.";
    resWarn.style.display = "block";
    head.appendChild(link);
    body.appendChild(resWarn);
  }
  if (curStySht != "Fallback") {
    console.log("Using stylesheet " + curStySht);
    debugConsole = debugConsole + "Using stylesheet " + curStySht + "\n";
  } else {
    console.log("Using fallback sheet, detected resolution is currently " + $(window).width() + "x" + $(window).height());
    debugConsole = debugConsole + "Using fallback sheet, detacted resolution is currently " + $(window).width() + "x" + $(window).height() + "\n";
  }
  if (enableJS) {
    try {
      script();
    } catch (error) {
      errorHandler(error)
    }
  } else div.appendChild(resWarn);
}
