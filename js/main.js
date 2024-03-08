/*
Coin Clicker Update 6 Codename "Abundance"
Build 4.5 Abundance Beta
*/

/* Spoilers ahead! */

//Any code that is commented out does not get used, but is planned to be utilized in the near future.

//Loading screen
const loadingScreen = document.getElementById("loadingscreen");
const hiddenWhileLoading = document.getElementById("hideloading");

const eElement = document.createElement("p");
function errorHandler(error) {
  bmbarNote.style.display = "none";
  eElement.textContent = `Error in script: ${error}`;
  eElement.style.position = "fixed";
  eElement.style.top = "-0.5vw";
  eElement.style.fontSize = "15px";
  eElement.style.display = "block";
  console.error(error);
  debugConsole += `${error}\n`;
  document.body.appendChild(eElement);
}

console.group("Initial Checks");
var debugConsole = document.getElementById("debugconsole").textContent;
debugConsole += "\n";
const link = document.createElement("link");
const bmbarNote = document.createElement("p");
const resWarn = document.createElement("p");
const runningBrowserString = document.getElementById("runningbrowserstring");
const jsFailStr = document.getElementById("jsfail");
jsFailStr.style.display = "none";
sysCheck();

function sysCheck() {
  const browsers = ["MSIE", "Firefox", "Safari", "Chrome", "OPR", "Edg"];
  const userAgent = navigator.userAgent;
  const userAgentData = navigator.userAgentData;
  var index = browsers.length - 1;
  var browserStr = "Undetected";
  var os = "Undetected";
  while (index > -1 && userAgent.indexOf(browsers[index]) == -1)  //Loop through possible UA strings to detect client browser
    index--;
  if (index > -1) browserStr = browsers[index];
  if (userAgentData != undefined) os = userAgentData.platform; //Use userAgentData to find client operating system.
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
  runningBrowserString.textContent = `${browserStr} running on ${os}`;
  console.log(`${browserStr} running on ${os}`);
  debugConsole += `${browserStr} running on ${os}\n`;
  if (browserStr == "Chrome") { //Chrome is supported, but it is recommended to disable the bookmarks bar.
    width = "1903";
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: If you cannot see the build string in the bottom left, you may need to disable the bookmarks bar to see everything correctly.";
    document.getElementById("hideloading").appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else if (browserStr == "Firefox") { //Firefox is supported without issues.
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
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: Opera does not support the way in-game borders are drawn.";
    document.body.appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else if (browserStr == "Edge") { //Edge is supported, but toLocaleString will not be utilized, and shop and stat panel borders cannot be drawn.
    width = "1897";
    bmbarNote.style.position = "static";
    bmbarNote.style.fontSize = "13px";
    bmbarNote.textContent = "Note: Edge does not support the way in-game borders are drawn.";
    document.body.appendChild(bmbarNote);
    bmbarNote.style.display = "block";
    document.getElementById("titlescreen").style.display = "block";
  } else {
    width = "1920";
    document.getElementById("titlescreen").style.display = "block";
  }
  resolutionCheck(width);
}

function resolutionCheck(width) { //There are currently only two supported resolutions, 1920x1080, and 1366x768. A different stylesheet is loaded based on browser width. It is recommended that you play the game in a maximized browser window at default zoom (100%).
  var curStySht;
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
    resWarn.style.position = "static";
    resWarn.style.fontSize = "13px";
    resWarn.textContent = "Your current browser width (" + $(window).width() + "px) is unsupported! This may be caused by an unmaximized browser window, zoomed in/zoomed out browser window, or your screen resolution.";
    resWarn.style.display = "block";
    head.appendChild(link);
    body.appendChild(resWarn);
  }
  if (curStySht != "Fallback") {
    console.log(`Using stylesheet ${curStySht}`);
    debugConsole += `Using stylesheet ${curStySht}\n`;
  } else {
    console.log("Using fallback sheet, detected resolution is currently " + $(window).width() + "x" + $(window).height());
    debugConsole += "Using fallback sheet, detacted resolution is currently " + $(window).width() + "x" + $(window).height() + "\n";
  }
}

//Title screen
const sourceNote = document.getElementById("sourcenote");
const buildString = document.getElementById("buildstring");
const basedOnBuildString = document.getElementById("basedonbuildstring");
const updateString = document.getElementById("updatestring");
const betaString = document.getElementById("betastring");
const startButton = document.getElementById("startbutton");
const title = document.getElementById("title");
const key = document.createElement("p");

//Game screen
const game = document.getElementById("gamescreen");
const coin = document.getElementById("coin");
const clickString = document.getElementById("clickstring");
const cpsString = document.getElementById("cpsstring");
const clickValueString = document.getElementById("clickvaluestring");
const unlockString = document.getElementById("unlockstring");
const saveButton = document.getElementById("savebutton");
const savingString = document.getElementById("savingstring");
const saveInfoString = document.getElementById("saveinfo");
const wipeSaveButton = document.getElementById("wipesavebutton");
const buffStr = document.getElementById("bufflabel");

//Shop panel
const shopPanel = document.getElementById("shoppanel");
const autoBuyStr = document.getElementById("autobuystring");
const clickerBuy = document.getElementById("clickerbuy");
const clickerCPSString = document.getElementById("clickercpsstring");
const clickerCostString = document.getElementById("clickercoststring");
const clickerInfo = document.getElementById("clickerinfo");
const clickersOwnedString = document.getElementById("clickersownedstring");
const superClickerGroup = document.getElementById("superclicker");
const superClickerBuy = document.getElementById("superclickerbuy");
const superClickerCPSString = document.getElementById("superclickercpsstring");
const superClickerCostString = document.getElementById("superclickercoststring");
const superClickersOwnedString = document.getElementById("superclickersownedstring");
const superClickerInfo = document.getElementById("superclickerinfo");
const doublePointerGroup = document.getElementById("doublepointer");
const doublePointerBuy = document.getElementById("doublepointerbuy");
const doublePointerCPSString = document.getElementById("doublepointercpsstring");
const doublePointerCostString = document.getElementById("doublepointercoststring");
const doublePointersOwnedString = document.getElementById("doublepointersownedstring");
const doublePointerInfo = document.getElementById("doublepointerinfo");

//Upgrade shop panel
const upgradeShopPanel = document.getElementById("upgradeshoppanel");
const upgradeButton = document.getElementById("upgradebutton");
const upgradeRTS = document.getElementById("shopreturnbutton");
const cursorBuy = document.getElementById("cursorbuy");
const cursorCostString = document.getElementById("cursorcoststring");
const cursorOwnedString = document.getElementById("cursorownedstring");
const superCursorGroup = document.getElementById("supercursor");
const superCursorBuy = document.getElementById("supercursorbuy");
const superCursorCostString = document.getElementById("supercursorcoststring");
const superCursorOwnedString = document.getElementById("supercursorownedstring");
const employeeGroup = document.getElementById("employee");
const employeeBuy = document.getElementById("employeebuy");
const employeeCostString = document.getElementById("employeecoststring");
const employeesOwnedString = document.getElementById("employeesownedstring");
const godFingerGroup = document.getElementById("godfinger");
const godFingerBuy = document.getElementById("godfingerbuy");
const godFingerCostString = document.getElementById("godfingercoststring");
const godFingerOwnedString = document.getElementById("godfingerownedstring");
const clickerFusionGroup = document.getElementById("clickerfusion");
const clickerFusionBuy = document.getElementById("clickerfusionbuy");
const clickerFusionCostString = document.getElementById("clickerfusioncoststring");
const clickerFusionOwnedString = document.getElementById("clickerfusionownedstring");
const clickerFusionInfo = document.getElementById("clickerfusioninfo");

//Stat panel
const statsPanel = document.getElementById("statspanel");
const timePlayedString = document.getElementById("timestring");
const lifetimeClicksString = document.getElementById("lifetimeclicksstring");
const lifetimeManualClicksString = document.getElementById("lifetimemanualclicksstring");
const coinClickCountString = document.getElementById("coinclickcountstring");
const totalClickHelpersString = document.getElementById("totalclickhelpersstring");
const achievementsUnlockedString = document.getElementById("achievementsunlockedstring");
const rawCPSString = document.getElementById("rawcpsstring");
const rawCVString = document.getElementById("rawcvstring");

//Debug screen
const debugKeyInputScreen = document.getElementById("debuginputscreen");
const debugKeyInput = document.getElementById("debugkeyinput");
const debugKeySubmit = document.getElementById("debugkeysubmit");
const incorrectKeyLabel = document.getElementById("incorrectkeyentered");
const debugScreen = document.getElementById("debugscreen");
const cmdForm = document.getElementById("debugconsinput");
const commandInput = document.getElementById("debugcmdinput");

//Achievement screen
const achievementsButton = document.getElementById("achievementsbutton");
const achievementsLabel = document.getElementById("achievementslabel");
const achievementsPanel = document.getElementById("achievementsscreen");
const achNameStr = document.getElementById("achievementnamestring");
const achDescStr = document.getElementById("achievementdescriptionstring");
const achUnlockStr = document.getElementById("achievementunlockedstring");
const journeyBegins = document.getElementById("journeybegins");
const aGoodStart = document.getElementById("agoodstart");
const gettingThere = document.getElementById("gettingthere");
const millionare = document.getElementById("millionare");
const coinPool = document.getElementById("coinpool");
const abundance = document.getElementById("abundance");
const billionare = document.getElementById("billionare");
const excess = document.getElementById("excess");
const planetOfClicks = document.getElementById("planetofclicks");
const trillionare = document.getElementById("trillionare");
const pocketDimension = document.getElementById("pocketdimension");
const farTooMany = document.getElementById("fartoomany");
const quadrillionare = document.getElementById("quadrillionare");
const coinVortex = document.getElementById("coinvortex");
const coinShapedBlackHole = document.getElementById("coinshapedblackhole");
const quintillionare = document.getElementById("quintillionare");
const clickBeyond = document.getElementById("clickbeyond");
const distantBeginning = document.getElementById("distantbeginning");
const sextillionare = document.getElementById("sextillionare");
const numberOverflow = document.getElementById("numberoverflow");
const coinUniverse = document.getElementById("coinuniverse");
const septillionare = document.getElementById("septillionare");
const why = document.getElementById("why");
const twentyFingers = document.getElementById("twentyfingers");
const forTheWorthy = document.getElementById("fortheworthy");
const breakpoint = document.getElementById("breakpoint");
const backToGame = document.getElementById("backtogame");

//Settings screen
const settingsButton = document.getElementById("settingsbutton");
const settingsLabel = document.getElementById("settingslabel");
const settingsPanel = document.getElementById("settingsscreen");
const backToGame2 = document.getElementById("backtogame2");
const volumeInput = document.getElementById("volumeinput");
const autoBuyBtn = document.getElementById("autobuysetting");
const autoBuyInfo = document.getElementById("autobuyinfo");

//Audio files
const sfx = document.getElementById("sfx"); //Click
const sfx2 = document.getElementById("sfx2"); //Shop Unlock
const sfx3 = document.getElementById("sfx3"); //Achievement Unlock
const sfx4 = document.getElementById("sfx4"); //Special Achievement Unlock
const sfx5 = document.getElementById("sfx5"); //Shop Buy

//Title screen variables
var gameStarted = false;
const buildInfo = {
  BuildStr: "4.5ab",
  BuildNum: 4.5,
  UpdName: "abundance",
  UpdNum: 6
}

const stats = {
  Clicks: 0,
  ClickStr: "0",
  ClickValue: 1,
  ClickValueStr: "1",
  RawClickVal: 1,
  ClicksPS: 0,
  ClicksPSStr: "0",
  RawClicksPS: 0,
  Playtime: 0,
  LifetimeClicks: 0,
  LifetimeClicksStr: "0",
  LifetimeManualClicks: 0,
  LifetimeManualClicksStr: "0",
  CoinClickCount: 0,
  CoinClickCountStr: "0",
  TotalClickHelpers: 0,
  TotalClickHelpersStr: "0",
  AchievementsUnlocked: 0,
  AchievementsUnlockedStr: "0",
  CpSPercentage: 1.00
};

//Shop variables
var clickerCPS = 5;
var clickerCPSText = "5";
var clickerCost = 25;
var clickerCostText = "25";
var clickerScale = 0.005;
var clickersOwned = 0;
var clickersOwnedText = "0";
var clickerCPSWorth = 0;
var clickerCPSWorthText = "0";
var superClickerUnlocked = false;
var superClickerCPS = 500;
var superClickerCPSText = "500";
var superClickerCost = 300000;
var superClickerCostText = "300,000";
var superClickerScale = 0.01;
var superClickersOwned = 0;
var superClickersOwnedText = "0";
var superClickerCPSWorth = 0;
var superClickerCPSWorthText = "0";
var doublePointerUnlocked = false;
var doublePointerCPS = 2500;
var doublePointerCPSText = "2,500";
var doublePointerCost = 5000000;
var doublePointerCostText = "5,000,000";
var doublePointerScale = 0.09;
var doublePointersOwned = 0;
var doublePointersOwnedText = "0";
var doublePointerCPSWorth = 0;
var doublePointerCPSWorthText = "0";
var doAutobuy = false;

//Upgrade shop variables
var cursorCPS = 0.50;
var cursorCost = 1000000;
var cursorOwned = false;
var superCursorUnlocked = false;
var superCursorCPS = 0.75;
var superCursorCost = 150000000;
var superCursorOwned = false;
var employeeUnlocked = false;
var employeeCPS = 0.005;
var employeeCost = 50000000000;
var employeeCostText = "50,000,000,000";
var employeesOwned = 0;
var employeesOwnedText = "0";
var godFingerUnlocked = false;
var godFingerCV = 0.35;
var godFingerCost = 5000000000000;
var godFingerOwned = false;
var clickerFusionCost = ''; //This variable purely exists to get changed to "Owned" when bought.
var clickerFusionUnlocked = false;
var clickerFusionOwned = false;

//Save and load variables
var manualSave = false;
var readyToSave = true;
var doAutosave = false;
const saveData = [];
const shopData = [];
var SHT;

//Buff variables
var buffRNG = 0;
var buff = "none";
var clicksAdded;

//Optimization variables
var upgradeShopOpen;

//Achievement screen variables
var journeyBeginsUnlocked = false;
var aGoodStartUnlocked = false;
var gettingThereUnlocked = false;
var millionareUnlocked = false;
var coinPoolUnlocked = false;
var abundanceUnlocked = false;
var billionareUnlocked = false;
var excessUnlocked = false;
var planetOfClicksUnlocked = false;
var trillionareUnlocked = false;
var pocketDimensionUnlocked = false;
var farTooManyUnlocked = false;
var quadrillionareUnlocked = false;
var coinVortexUnlocked = false;
var coinShapedBlackHoleUnlocked = false;
var quintillionareUnlocked = false;
var clickBeyondUnlocked = false;
var distantBeginningUnlocked = false;
var sextillionareUnlocked = false;
var numberOverflowUnlocked = false;
var coinUniverseUnlocked = false;
var septillionareUnlocked = false;
var whyUnlocked = false;
var twentyFingersUnlocked = false;
var forTheWorthyUnlocked = false;
var breakpointUnlocked = false;
var achStr = "none";

//Audio variables
var volume = 1.0;

//Color variables
var increase = true;
var red = 0;
var green = 0;

//Debug mode variables
var generatedKey = "debug";
var keyEntered = false;
var debugScreenState = "closed";
var debug = false; //This boolean is purely for quickly testing added code, this will not affect anything within the normal game and should be set to false in released builds.
var debugAutoplay = false; //This boolean makes the game almost fully automated, requiring almost zero user input. It should be set to false in released builds, but if you see this message, you are welcome to enable it. However, it will automatically save the game, disable saving, and DESTROY your save on next load.
var forceBuff = false; //This boolean determines if the buff RNG value listed in buffRNGCalc() is forced or if it's always random. It should be set to false in released builds.
var performScreenSwitch = false; //Related to debugAutoplay, this boolean determines whether or not the user would like to have the shop panels alternate between each other every 5 seconds.
var screenSwitch = true; //Related to debugAutoplay, this boolean determines which screen to switch (either the regular shop or the upgrade shop) during autoplay. It is automatically changed every 5 seconds.
var autoplaySpeed = "medium"; //Possible values: "slow", "medium", "fast", and "fastest". Default value: "medium". Affects autoplayInterval, which changes the interval between autoplay function calls.
var autoplayInterval = 0;

//Arrays
var intArray = [stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, clickerCPS, clickerCost,
  clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, employeesOwned,
  clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, stats.AchievementsUnlocked];

var textArray = [stats.ClickStr, stats.ClickValueStr, stats.ClicksPSStr, stats.LifetimeClicksStr, stats.LifetimeManualClicksStr, stats.CoinClickCountStr, stats.TotalClickHelpersStr,
  clickerCPSText, clickerCostText, clickersOwnedText, superClickerCPSText, superClickerCostText, superClickersOwnedText, doublePointerCPSText,
  doublePointerCostText, doublePointersOwnedText, employeeCostText, employeesOwnedText, clickerCPSWorthText, superClickerCPSWorthText,
  doublePointerCPSWorthText, stats.AchievementsUnlockedStr];

const achStrs = ["Journey Begins", "A Good Start", "Getting There", "Millionare", "Coin Pool", "Abundance", "Billionare", "Excess", "Planet of Clicks",
  "Trillionare", "Pocket Dimension", "Far Too Many", "Quadrillionare", "Coin Vortex", "Coin-Shaped Black Hole", "Quintillionare", "Click Beyond",
  "Distant Beginning", "Sextillionare", "Breaking Point", "Number Overflow", "Coin Universe", "Septillionare", "Why?", "20 Fingers", "For the Worthy"];

const achDescs = ["Obtain 1 lifetime click.", "Obtain 10,000 lifetime clicks.", "Obtain 100,000 lifetime clicks.", "Obtain 1,000,000 lifetime clicks.",
  "Obtain 10,000,000 lifetime clicks.", "Obtain 100,000,000 lifetime clicks.", "Obtain 1,000,000,000 lifetime clicks.", "Obtain 10,000,000,000 lifetime clicks.",
  "Obtain 100,000,000,000 lifetime clicks.", "Obtain 1,000,000,000,000 lifetime clicks.", "Obtain 10,000,000,000,000 lifeitme clicks.",
  "Obtain 1.000e14 (100 trillion) lifetime clicks.", "Obtain 1.000e15 (1 quadrillion) lifetime clicks.", "Obtain 1.000e16 (10 quadrillion) lifetime clicks.",
  "Obtain 1.000e17 (100 quadrillion) lifetime clicks.", "Obtain 1.000e18 (1 quintillion) lifetime clicks.", "Obtain 1.000e19 (10 quadrillion) lifetime clicks.",
  "Obtain 1.000e20 (100 quintillion) lifetime clicks.", "Obtain 1.000e21 (1 sextillion) lifetime clicks.",
  "Obtain infinite lifetime clicks, breaking the game.",
  "Obtain 1.000e22 (10 sextillion) lifetime clicks.", "Obtain 1.000e23 (100 sextillion) lifetime clicks.",
  "Obtain 1.000e24 (1 septillion) lifetime clicks.", "Obtain 1.000e25 (10 septillion) lifetime clicks.",
  "Obtain 1.000e26 (100 septillion) lifetime clicks.", "Obtain 1.000e27 (1 octillion) lifetime clicks."];

var achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
  excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked, quadrillionareUnlocked, coinVortexUnlocked,
  coinShapedBlackHoleUnlocked, quintillionareUnlocked, clickBeyondUnlocked, distantBeginningUnlocked, sextillionareUnlocked, breakpointUnlocked,
  numberOverflowUnlocked, coinUniverseUnlocked, septillionareUnlocked, whyUnlocked, twentyFingersUnlocked, forTheWorthyUnlocked];

var costStringArr = [clickerCostString, superClickerCostString, doublePointerCostString, cursorCostString, superCursorCostString, employeeCostString, godFingerCostString];

var costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];

//Screen variables
var screenWidth = $(window).width();
var screenHeight = $(window).height();

//Initial run updates and calls
debugKeyInput.value = "";
commandInput.value = "";
volumeInput.value = volume * 100;
console.log(`Running beta ${buildInfo.UpdNum} codename "${buildInfo.UpdName}" build ${buildInfo.BuildStr}`);
debugConsole += `Running beta ${buildInfo.UpdNum} codename "${buildInfo.UpdName}" build ${buildInfo.BuildStr}\n`;
buildString.textContent = `build ${buildInfo.BuildStr}`;
updateString.textContent = `the ${buildInfo.UpdName} update`;
if (autoplaySpeed == "slow") autoplayInterval = 150;
if (autoplaySpeed == "medium") autoplayInterval = 100;
if (autoplaySpeed == "fast") autoplayInterval = 50;
if (autoplaySpeed == "fastest") autoplayInterval = 1;
if (!doAutosave) saveInfoString.textContent = "Autosave is disabled.";

if (debug) {
  canvasDraw();
  gameStarted = !gameStarted; //True
  title.style.display = "none";
  sourceNote.textContent = `Debug boolean and debug autoplay states are ${debug} and ${debugAutoplay}`;
  game.appendChild(sourceNote);
  sourceNote.style.position = "fixed";
  sourceNote.style.top = "47vw";
  runningBrowserString.textContent = navigator.userAgent
  basedOnBuildString.style.display = "none";
  updateString.style.display = "none";
  betaString.style.display = "none";
  startButton.style.display = "none";
  game.style.display = "block";
  superClickerUnlocked = !superClickerUnlocked; //True
  doublePointerUnlocked = !doublePointerUnlocked; //True 
  superCursorUnlocked = !superCursorUnlocked; //True
  employeeUnlocked = !employeeUnlocked; //True
  godFingerUnlocked = !godFingerUnlocked; //True
  clickerFusionUnlocked = !clickerFusionUnlocked //True
  statsPanel.style.display = "block";
  bmbarNote.style.display = "none";
  shopPanel.style.display = "block";
  upgradeShopPanel.style.display = "none";
  console.log("Debug boolean is enabled. Titlescreen will be skipped and all shop items will be unlocked from the start.");
  debugConsole += "Debug boolean is enabled. Titlescreen will be skipped and all shop items will be unlocked from the start.\n";
}

if (debugAutoplay) {
  sourceNote.textContent = `Debug boolean and debug autoplay states are ${debug} and ${debugAutoplay}`;
  sourceNote.style.position = "fixed";
  sourceNote.style.top = "47vw";
  console.warn("Debug autoplay is enabled. User input will be automated, but the current save will be destroyed on next load. (Autosave is disabled)");
  debugConsole += "WARN: Debug autoplay is enabled. User input will be automated, but the current save will be destroyed on next load. (Autosave is disabled)\n";
}

if (screenWidth == 1920) {
  var leftCanvasX = 505;
  var rightCanvasX = 1350;
}
else if (screenWidth == 1366) {
  var leftCanvasX = 405;
  var rightCanvasX = 925;
}

loadingScreen.style.display = "none";
hiddenWhileLoading.style.display = "block";
console.groupEnd();
var cmdScr = document.createElement('script');
var filePath = './js/cmdinterpreter.js';
cmdScr.src = filePath;
document.body.appendChild(cmdScr);

//Functions
function autoplay() {
  try {
    if (debugAutoplay && readyToSave) {
      manualSave = true;
      saveGame();
      readyToSave = false;
    } else if (debugAutoplay) {
      costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];
      let buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy, clickerFusionBuy];
      saveInfoString.textContent = "Saving is disabled.";
      sfx.volume = 0;
      coin.click();
      for (let i = -1; i < costArray.length; i++) {
        if (stats.Clicks >= costArray[i]) buttonArray[i].click();
        if (clickersOwned >= 150) buttonArray[buttonArray.length - 1].click();
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function autobuy() {
  if (doAutobuy) {
    autoBuyStr.style.display = "block";
    autoBuyBtn.textContent = 'ON'; //Required to change the button text after IDL function runs
    costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];
    let buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy];
    for (let i = -1; i < costArray.length; i++) {
      if (stats.Clicks >= costArray[i]) buttonArray[i].click();
    }
  } else {
    autoBuyStr.style.display = 'none';
    autoBuyBtn.textContent = 'OFF';
  }
}

function updateScreen() {
  try {
    if (buff == "none" && gameStarted) {
      stats.RawClicksPS = stats.ClicksPS;
      stats.RawClickVal = stats.ClickValue;
      document.title = `${textArray[0]} clicks | Coin Clicker Beta v${buildInfo.UpdNum}`;
    } else if (gameStarted) document.title = `A buff is active! | Coin Clicker Beta v${buildInfo.UpdNum}`;
    else document.title = `Coin Clicker Beta v${buildInfo.UpdNum}`;
    numberFix();
    document.getElementById("debugconsole").value = debugConsole;
    clickString.textContent = `Clicks: ${textArray[0]}`;
    cpsString.textContent = `Clicks per Second: ${textArray[2]}`;
    clickValueString.textContent = `Click Value: ${textArray[1]}`;
    clickerCPSString.textContent = `CpS: +${textArray[7]}`;
    clickerCostString.textContent = `Cost: ${textArray[8]}`;
    clickersOwnedString.textContent = `Owned: ${textArray[9]}`;
    if (clickerCPSWorth != 0) {
      clickerInfo.textContent = `Your ${textArray[9]} clickers account for ${textArray[20]} (${Math.ceil((intArray[20] / stats.RawClicksPS)) * 100}%) Raw CpS.`;
      if (screenWidth == 1920) clickerInfo.style.width = '300px';
      else clickerInfo.style.width = '150px';
    }
    if (superClickerCPSWorth != 0) {
      superClickerInfo.textContent = `Your ${textArray[12]} super clickers account for  ${textArray[21]} (${Math.ceil((intArray[21] / stats.RawClicksPS)) * 100}%) Raw CpS.`;
      if (screenWidth == 1920) superClickerInfo.style.width = '300px';
      else clickerInfo.style.width = '150px';
    }
    if (doublePointerCPSWorth != 0) {
      doublePointerInfo.textContent = `Your ${textArray[15]} double pointers account for ${textArray[22]} (${Math.ceil((intArray[22] / stats.RawClicksPS)) * 100}%) Raw CpS.`;
      if (screenWidth == 1920) doublerPointerInfo.style.width = '300px';
      else clickerInfo.style.width = '150px';
    }
    if (upgradeShopOpen) {
      cursorOwnedString.textContent = `Owned: ${cursorOwned}`;
      superCursorOwnedString.textContent = `Owned: ${superCursorOwned}`;
      employeeCostString.textContent = `Cost: ${textArray[16]}`;
      employeesOwnedString.textContent = `Owned: ${textArray[17]}`;
      godFingerOwnedString.textContent = `Owned: ${godFingerOwned}`;
      clickerFusionOwnedString.textContent = `Owned: ${clickerFusionOwned}`;
      if (cursorOwned) cursorCostString.textContent = "Cannot buy again.";
      if (superCursorOwned) superCursorCostString.textContent = "Cannot buy again.";
      if (godFingerOwned) godFingerCostString.textContent = "Cannot buy again.";
      if (clickerFusionOwned) clickerFusionCostString.textContent = "Cannot buy again.";
    }
    if (stats.Playtime == 1000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 1000)} second.`;
    else if (stats.Playtime >= 60000 && stats.Playtime < 900000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 60000)} minute.`;
    else if (stats.Playtime >= 3600000 && stats.Playtime < 5400000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 3600000)} hour.`;
    if (stats.Playtime > 1000 && stats.Playtime < 60000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 1000)} seconds.`;
    else if (stats.Playtime > 90000 && stats.Playtime < 5400000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 60000)} minutes.`;
    else if (stats.Playtime > 5400000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 3600000)} hours.`;
    lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} clicks.`;
    if (stats.LifetimeClicks == 1) lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} click.`;
    lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} clicks from clicking.`;
    if (stats.LifetimeManualClicks == 1) lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} click from clicking.`;
    coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} times.`;
    if (stats.CoinClickCount == 1) coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} time.`;
    totalClickHelpersString.textContent = `You have bought ${textArray[6]} items.`;
    if (stats.TotalClickHelpers == 1) totalClickHelpersString.textContent = `You have bought ${textArray[6]} item.`;
    achievementsUnlockedString.textContent = `You have unlocked ${textArray[23]} out of 25 achievements.`;
    rawCPSString.textContent = `Your raw clicks per second is ${textArray[19]}.`;
    rawCVString.textContent = `Your raw click value is ${textArray[18]}.`;
    if (achArr[19]) {
      achievementsUnlockedString.textContent = `You have unlocked ${textArray[23]} (+1) out of 26 achievements.`;
      breakpoint.style.display = "block";
    }
    shopUnlockedCheck();
  } catch (error) {
    errorHandler(error);
  }
}

function shopUnlockedCheck() {
  try {
    if (clickersOwned >= 25 && !superClickerUnlocked) {
      sfx2.play();
      unlockString.textContent = "Super Clicker unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      superClickerGroup.style.display = "block";
      superClickerUnlocked = !superClickerUnlocked; //True
      SHT = 500;
    } else if (superClickerUnlocked) {
      superClickerGroup.style.display = "block";
      superClickerCPSString.textContent = `CpS: +${textArray[10]}`;
      superClickerCostString.textContent = `Cost: ${textArray[11]}`;
      superClickersOwnedString.textContent = `Owned: ${textArray[12]}`;
    }
    if (clickersOwned >= 50 && superClickersOwned >= 5 && !doublePointerUnlocked) {
      sfx2.play();
      unlockString.textContent = "Double Pointer unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      doublePointerGroup.style.display = "block";
      doublePointerUnlocked = !doublePointerUnlocked; //True
      SHT = 500;
    } else if (doublePointerUnlocked) {
      doublePointerGroup.style.display = "block";
      doublePointerCPSString.textContent = `CpS: +${textArray[13]}`;
      doublePointerCostString.textContent = `Cost: ${textArray[14]}`;
      doublePointersOwnedString.textContent = `Owned: ${textArray[15]}`;
    }
    if (cursorOwned && !superCursorUnlocked) {
      sfx2.play();
      unlockString.textContent = "Super Cursor unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      superCursorGroup.style.display = "block";
      superCursorUnlocked = !superCursorUnlocked; //True
      SHT = 500;
    } else if (superCursorUnlocked) superCursorGroup.style.display = "block";
    if (cursorOwned && superCursorOwned && !employeeUnlocked) {
      sfx2.play();
      unlockString.textContent = "Employee unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      employeeGroup.style.display = "block";
      employeeUnlocked = !employeeUnlocked; //True
      SHT = 500;
    } else if (employeeUnlocked) employeeGroup.style.display = "block";
    if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3 && cursorOwned && superCursorOwned && !godFingerUnlocked) {
      sfx2.play();
      unlockString.textContent = "God Finger unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      godFingerGroup.style.display = "block";
      godFingerUnlocked = !godFingerUnlocked; //True
      SHT = 500;
    } else if (godFingerUnlocked) godFingerGroup.style.display = "block";
    if (clickersOwned >= 150 && !clickerFusionOwned) {
      sfx3.play();
      unlockString.textContent = "Clicker Fusion unlocked!";
      if (gameStarted) unlockString.style.display = "block";
      clickerFusionGroup.style.display = "block";
      clickerFusionUnlocked = !clickerFusionUnlocked; //True
      SHT = 500;
    } else if (clickerFusionUnlocked) clickerFusionGroup.style.display = "block";
    achievementUnlockCheck();
  } catch (error) {
    errorHandler(error);
  }
}

function achievementUnlockCheck() {
  try {
    if (stats.LifetimeClicks >= 1 && !achArr[0]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Journey Begins";
      achArr[0] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000 && !achArr[1]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: A Good Start";
      achArr[1] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000 && !achArr[2]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Getting There";
      achArr[2] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000 && !achArr[3]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Millionare";
      achArr[3] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000 && !achArr[4]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Coin Pool";
      achArr[4] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000 && !achArr[5]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Abundance";
      achArr[5] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000 && !achArr[6]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Billionare";
      achArr[6] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000 && !achArr[7]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Excess";
      achArr[7] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000 && !achArr[8]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Planet of Clicks";
      achArr[8] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000 && !achArr[9]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Trillionare";
      achArr[9] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000 && !achArr[10]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Pocket Dimension";
      achArr[10] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000 && !achArr[11]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Far Too Many";
      achArr[11] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000 && !achArr[12]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Quadrillionare";
      achArr[12] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000n && !achArr[13]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Coin Vortex";
      achArr[13] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000n && !achArr[14]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Coin-Shaped Black Hole";
      achArr[14] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000n && !achArr[15]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Quintillionare";
      achArr[15] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000n && !achArr[16]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Click Beyond";
      achArr[16] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000n && !achArr[17]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Distant Beginning";
      achArr[17] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000n && !achArr[18]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Sextillionare";
      achArr[18] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (!isFinite(stats.LifetimeClicks) && !achArr[19]) {
      if (gameStarted) sfx4.play();
      achStr = "Hidden Achievement Unlocked: Breaking Point";
      achArr[19] = true;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000000n && !achArr[20]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Number Overflow";
      achArr[20] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000000n && !achArr[21]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Coin Universe";
      achArr[21] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000000n && !achArr[22]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: septillionare";
      achArr[22] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000000000n && !achArr[23]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Why?";
      achArr[23] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000000000n && !achArr[24]) {
      if (gameStarted) sfx3.play();
      achStr = "Achievement Unlocked: Twenty Fingers";
      achArr[24] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000000000n && !achArr[25]) {
      if (gameStarted) sfx4.play();
      achStr = "Special Achievement Unlocked; For The Worthy";
      achArr[25] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (gameStarted) unlockString.style.display = "block";
      SHT = 500;
    }
  } catch (error) {
    errorHandler(error);
  }
}

function numberFix() {
  try {
    intArray = [stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, clickerCPS, clickerCost,
      clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost,
      employeesOwned, stats.RawClickVal, stats.RawClicksPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, stats.AchievementsUnlocked
    ];
    for (let i = 0; i < intArray.length; i++) {
      intArray[i] = Math.abs(intArray[i]);
      if (Number.prototype.toLocaleString() != undefined) {
        if (intArray[i] >= 100000000000000) textArray[i] = ((intArray[i]).toExponential(3)).toLocaleString(); //Use exponentials with a 3 decimal places if value is over 100 trillion.
        else textArray[i] = intArray[i].toLocaleString(); //Simply return a value with commas if there is no need for exponents.
      } else {
        if (intArray[i] < 100000000000000) { //Use a basic pattern to add number commas if Number.prototype.toLocaleString returns undefined. Returns an exponential using the same method as above if value is over 100 trillion.
          textArray[i] = x.toString();
          var pattern = /(-?\d+)(\d{3})/;
          while (pattern.test(textArray[i]))
            textArray[i] = textArray[i].replace(pattern, "$1,$2");
        } else textArray[i] = intArray[i].toExponential(3);
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function shopCostPulse() {
  try {
    costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];
    for (let i = 0; i < costArray.length; i++) {
      if (stats.Clicks >= costArray[i]) {
        costStringArr[i].style.color = `rgb(0, ${green}, 0)`;
        if (i >= 3) upgradeButton.color = `rgb(0, ${green}, 0)`;
      } else {
        costStringArr[i].style.color = "rgb(0, 0, 0)";
        if (i >= 3) upgradeButton.color = "rgb(0, 0, 0)";
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function loadGame() {
  try {
    if (localStorage.getItem('saveData', saveData) != null) {
      let data = localStorage.getItem('saveData', saveData);
      let loadData = JSON.parse(data);
      if (loadData[0] >= 4.41) {
        if (!loadData[1]) {
          stats.Clicks = loadData[2];
          stats.ClickValue = loadData[3];
          stats.ClicksPS = loadData[4];
          stats.LifetimeClicks = loadData[5];
          stats.LifetimeManualClicks = loadData[6];
          stats.CoinClickCount = loadData[7];
          stats.TotalClickHelpers = loadData[8];
          stats.Playtime = loadData[11];
          if (loadData[12] != "none") {
            stats.ClickValue = loadData[9];
            stats.ClicksPS = loadData[10];
          }
          volume = loadData[13];
          doAutobuy = loadData[14];
          keyEntered = loadData[15];
          let data2 = localStorage.getItem('shopData', shopData);
          let shopDat = JSON.parse(data2);
          cursorOwned = shopDat[0];
          clickerCPS = shopDat[1];
          clickerCPSWorth = shopDat[2];
          clickerCost = shopDat[3];
          clickersOwned = shopDat[4];
          if (clickersOwned >= 25) {
            superClickerCPS = shopDat[5];
            superClickerCPSWorth = shopDat[6];
            superClickerCost = shopDat[7];
            superClickersOwned = shopDat[8];
          }
          if (clickersOwned >= 50 && superClickersOwned >= 5) {
            doublePointerCPS = shopDat[9];
            doublePointerCPSWorth = shopDat[10];
            doublePointerCost = shopDat[11];
            doublePointersOwned = shopDat[12];
          }
          if (cursorOwned) {
            superCursorUnlocked = shopDat[13];
            superCursorOwned = shopDat[14];
          }
          if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3) {
            godFingerUnlocked = shopDat[15];
            godFingerOwned = shopDat[16];
          }
          if (superCursorOwned) {
            employeeUnlocked = shopDat[17];
            employeeCost = shopDat[18];
            employeesOwned = shopDat[19];
          }
          if (clickersOwned >= 150) {
            clickerFusionUnlocked = shopDat[20];
            clickerFusionOwned = shopDat[21];
          }
        } else {
          console.warn("Debug autoplay was enabled on the last save, it will be destroyed.");
          debugConsole += "WARN: Debug autoplay was enabled on the last save, it will be destroyed.\n";
          localStorage.removeItem('saveData', saveData);
        }
      } else {
        console.warn("Save is using an invalid format from an old release. It will be deleted.");
        debugConsole += "WARN: Save is using an invalid format from an old release. It will be deleted.\n";
        localStorage.removeItem('saveData', saveData);
      }
    } else {
      console.log("There is no save to load.");
      debugConsole += "There is no save to load.\n";
    }
  } catch (error) {
    errorHandler(error);
  }
}

function saveGame() {
  try {
    if (readyToSave && gameStarted) {
      if (buff != "none") {
        savingString.textContent = "You cannot save when a buff is occurring.";
        SHT = 500;
      } else {
        readyToSave = false;
        savingString.textContent = "Saving...";
        savingString.style.display = "block";
        let varsToPush = [buildInfo.BuildNum, debugAutoplay, stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, stats.RawClickVal, stats.RawClicksPS, stats.Playtime, buff, volume, doAutobuy, keyEntered];
        let shopVars = [cursorOwned, clickerCPS, clickerCPSWorth, clickerCost, clickersOwned];
        if (superClickerUnlocked) {
          shopVars.push(superClickerCPS);
          shopVars.push(superClickerCPSWorth);
          shopVars.push(superClickerCost);
          shopVars.push(superClickersOwned);
        } else {
          for (let i = 0; i < 4; i++)
            shopVars.push(undefined);
        }
        if (doublePointerUnlocked) {
          shopVars.push(doublePointerCPS);
          shopVars.push(doublePointerCPSWorth);
          shopVars.push(doublePointerCost);
          shopVars.push(doublePointersOwned);
        } else {
          for (let i = 0; i < 4; i++)
            shopVars.push(undefined);
        }
        if (cursorOwned) {
          shopVars.push(superCursorUnlocked);
          shopVars.push(superCursorOwned);
        } else {
          for (let i = 0; i < 2; i++)
            shopVars.push(undefined);
        }
        if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3) {
          shopVars.push(godFingerUnlocked);
          shopVars.push(godFingerOwned);
        } else {
          for (let i = 0; i < 2; i++)
            shopVars.push(undefined);
        }
        if (superCursorOwned) {
          shopVars.push(employeeUnlocked);
          shopVars.push(employeeCost);
          shopVars.push(employeesOwned);
        } else {
          for (let i = 0; i < 3; i++)
            shopVars.push(undefined);
        }
        if (clickersOwned >= 150) {
          shopVars.push(cursorFusionUnlocked);
          shopVars.push(cursorFusionOwned);
        } else {
          for (let i = 0; i < 2; i++)
            shopVars.push(undefined);
        }
        for (let i = 0; i < varsToPush.length; i++)
          saveData.push(varsToPush[i]);
        localStorage.setItem('saveData', JSON.stringify(saveData));
        for (let i = 0; i < shopVars.length; i++)
          shopData.push(shopVars[i]);
        localStorage.setItem('shopData', JSON.stringify(shopData));
        while (saveData.length > 0) saveData.pop();
        while (shopData.length > 6) shopData.pop();
        if (manualSave) {
          savingString.textContent = "Game saved.";
          console.log(`Game saved @ playtime ${stats.Playtime} ms`);
          debugConsole += `Game saved @ playtime ${stats.Playtime} ms\n`;
          manualSave = !manualSave; //False
        } else {
          savingString.textContent = "Game autosaved.";
          console.log(`Game autosaved @ playtime ${stats.Playtime} ms`);
          debugConsole += `Game autosaved @ playtime ${stats.Playtime} ms\n`;
        }
        SHT = 500;
      }
    }
  } catch (error) {
    errorHandler(error)
  }
}

function wipeSave() {
  try {
    if (readyToSave) {
      readyToSave = readyToSave;
      if (confirm("This is completely irreversible and wiping your save will also refresh the page! Are you sure you wish to continue?")) {
        localStorage.removeItem("saveData");
        location.reload();
      } else if (!readyToSave) readyToSave = true;
    }
  } catch (error) {
    errorHandler(error)
  }
}

function timedLabelCount() {
  try {
    SHT--;
    if (SHT == 0) {
      savingString.textContent = "";
      unlockString.textContent = "";
      incorrectKeyLabel.textContent = "";
      if (!debugAutoplay) readyToSave = true;
      SHT = 500;
    }
  } catch (error) {
    errorHandler(error);
  }
}

function ptIncrease() {
  stats.Playtime += 1000;
}

function buffRNGCalc() {
  try {
    let max = 300;
    let min = 0;
    buffRNG = 0;
    if (forceBuff && buff == "none") buffRNG = 200;
    else if (!forceBuff && buff == "none") buffRNG = Math.floor((Math.random() * max) + min);
    if (buffRNG == 100 && buff == "none") {
      if (stats.ClicksPS > 0) {
        buffStr.textContent = "Your CpS has been doubled for 30 seconds!";
        buffStr.style.display = "block";
        stats.RawClicksPS = stats.ClicksPS;
        stats.ClicksPS = Math.round(stats.ClicksPS * 2);
        buff = "cpsDouble";
        window.setTimeout(buffRemoval, 30000);
      }
    } else if (buffRNG == 200 && buff == "none") {
      if (stats.ClicksPS > 0) {
        buffStr.textContent = "Your click value has been increased by 777% of your CpS for 5 seconds!";
        buffStr.style.display = "block";
        stats.RawClickVal = stats.ClickValue;
        stats.ClickValue += Math.round(stats.ClicksPS * 7.77);
        buff = "cv777%CpS";
        window.setTimeout(buffRemoval, 5000);
      }
    } else if (buffRNG == 300 && buff == "none") {
      if (stats.ClicksPS > 0 && stats.Clicks > 0) {
        clicksAdded = Math.round(0.3 * stats.ClicksPS + 0.1 * stats.Clicks);
        stats.Clicks += clicksAdded;
        buffStr.textContent = `You got ${clicksAdded} additional clicks!`;
        buffStr.style.display = "block";
        buff = "bonusClicks";
        window.setTimeout(buffRemoval, 2000);
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function buffRemoval() {
  try {
    buffStr.style.display = "none";
    if (buff == "cpsDouble") {
      stats.ClicksPS = stats.RawClicksPS;
      stats.ClickValue = stats.RawClickVal;
    }
    else if (buff == "cv777%CpS") stats.ClickValue = stats.RawClickVal;
    else if (buff == "bonusClicks") clicksAdded = 0;
    buff = "none";
  } catch (error) {
    errorHandler(error);
  }
}

function coinClick() {
  try {
    sfx.play();
    if (Math.sign(stats.Clicks) != -1 && Math.sign(stats.LifetimeClicks) != -1 && Math.sign(stats.ClickValue) != -1 && Math.sign(stats.CoinClickCount) != -1) {
      stats.Clicks += stats.ClickValue;
      stats.LifetimeClicks += stats.ClickValue;
      stats.LifetimeManualClicks += stats.ClickValue;
      stats.CoinClickCount++;
    } else {
      console.error("Non-absolute values in coinClick.");
      debugConsole += `${stats.Clicks}, ${stats.LifetimeClicks}, ${stats.ClickValue}, ${stats.CoinClickCount}\n`;
    }
  } catch (error) {
    errorHandler(error);
  }
}

function cpsClick() {
  try {
    stats.Clicks += stats.ClicksPS * 0.10;
    stats.Clicks = Math.round(stats.Clicks);
    stats.LifetimeClicks += stats.ClicksPS * 0.10;
    stats.LifetimeClicks = Math.round(stats.LifetimeClicks);
  } catch (error) {
    errorHandler(error);
  }
}

function rgChange() {
  try {
    if (increase) {
      red += 5;
      green += 5;
    } else if (!increase) {
      red -= 5;
      green -= 5;
    }
    if (green == 200) increase = !increase; //False
    else if (green == 0) increase = !increase; //True
    forTheWorthy.style.borderInlineColor = `rgb(${red}, 0, 0)`;
    forTheWorthy.style.borderBlockColor = `rgb(${red}, 0, 0)`;
    breakpoint.style.borderInlineColor = `rgb(${red}, 0, 0)`;
    breakpoint.style.borderBlockColor = `rgb(${red}, 0, 0)`;
    shopCostPulse();
  } catch (error) {
    errorHandler(error);
  }
}

function canvasDraw() {
  try {
    let canvas = document.getElementById("borders");
    let ctx = canvas.getContext("2d");
    let size = screenWidth;
    let scale = window.devicePixelRatio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    canvas.height = Math.floor(size * scale);
    canvas.width = Math.floor(size * scale);
    ctx.scale(scale, scale);
    if (size == 1920) {
      ctx.fillRect(505, 0, 1, canvas.height);
      ctx.fillRect(1350, 0, 1, canvas.height);
    } else if (size == 1366) {
      ctx.fillRect(405, 0, 1, canvas.height);
      ctx.fillRect(925, 0, 1, canvas.height);
    }
  } catch (error) {
    errorHandler(error);
  }
}

function createBase64Key() {
  try {
    if (!gameStarted || debug) {
      generatedKey = "debug";
      console.group("Debug Key Status");
      console.log("Generating key...");
      debugConsole += "Generating key...\n";
      let addArray = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M",
        "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "0", "1", "2",
        "3", "4", "5", "6", "7", "8", "9"];
      for (let i = 30; i > 0; i--) {
        let val = (Math.floor(Math.random() * 61) + 1);
        generatedKey += addArray[val];
        if (i == 1) {
          console.log("Key generated.");
          debugConsole += "Key generated.\n";
          let base64key = btoa(generatedKey);
          key.textContent = base64key;
          key.style.fontFamily = "courier";
          key.style.display = "block";
          console.log(`Unencoded: ${generatedKey}`);
          console.log(`Base64: ${base64key}`);
          debugConsole += `Unencoded: ${generatedKey}\n`;
          debugConsole += `Base64: ${base64key}\n`;
          console.groupEnd();
        }
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

//Event listeners
startButton.addEventListener("click", function () {
  sfx.play();
  if (generatedKey != "debug") key.style.display = "none";
  sourceNote.style.display = "none";
  startButton.style.display = "none";
  title.style.display = "none";
  updateString.style.display = "none";
  betaString.style.display = "none";
  basedOnBuildString.style.display = "none";
  bmbarNote.style.display = "none";
  resWarn.style.display = "none";
  runningBrowserString.style.display = "none";
  game.style.display = "block";
  shopPanel.style.display = "block";
  statsPanel.style.display = "block";
  gameStarted = !gameStarted; //True
  canvasDraw();
  loadGame();
});

coin.addEventListener("click", coinClick);

clickerBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= clickerCost) {
    if (clickerScale == 0.002) clickerScale = 0.003;
    sfx5.play();
    stats.Clicks -= clickerCost;
    clickersOwned++;
    clickerCPSWorth += clickerCPS;
    if (buff == "cpsDouble") {
      stats.ClicksPS += (clickerCPS * 2);
      stats.RawClicksPS += clickerCPS;
      clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs(clickerScale * stats.RawClicksPS) + (Math.floor(Math.random() * 15) + 3)));
      clickerCost += Math.round(clickersOwned + (15 * stats.RawClicksPS) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
    } else {
      stats.ClicksPS += clickerCPS;
      clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs((clickerScale * stats.ClicksPS)) + (Math.floor(Math.random() * 15) + 3)));
      clickerCost += Math.round(clickersOwned + (15 * stats.ClicksPS) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
    }
    if (buff != "none") stats.RawClickVal += Math.round(clickersOwned * 0.5 + 0.01 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(clickersOwned * 0.5 + 0.01 * stats.RawClicksPS);
    clickerScale -= 0.01;
    stats.TotalClickHelpers++;
  }
});

superClickerBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= superClickerCost) {
    if (superClickerScale == 0.002) superClickerScale = 0.006;
    sfx5.play();
    stats.Clicks -= superClickerCost;
    superClickersOwned++;
    superClickerCPSWorth += superClickerCPS;
    if (buff == "cpsDouble") {
      stats.ClicksPS += (superClickerCPS * 2);
      stats.RawClicksPS += superClickerCPS;
      superClickerCPS = 700 + Math.abs(Math.round(superClickersOwned * 15 + (superClickerScale * stats.RawClicksPS)));
      superClickerCost += Math.round(superClickerCost + (75 * stats.RawClicksPS) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
    } else {
      stats.ClicksPS += superClickerCPS;
      superClickerCPS = 700 + Math.abs(Math.round(superClickersOwned * 15 + (superClickerScale * stats.ClicksPS)));
      superClickerCost += Math.round(superClickerCost + (75 * stats.ClicksPS) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
    }
    if (buff != "none") stats.RawClickVal += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS);
    superClickerScale = superClickerScale - 0.002;
    stats.TotalClickHelpers++;
  }
});

doublePointerBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= doublePointerCost) {
    if (doublePointerScale == 0.03) doublePointerScale = 0.09;
    sfx5.play();
    stats.Clicks -= doublePointerCost;
    doublePointersOwned++;
    doublePointerCPSWorth += doublePointerCPS;
    if (buff == "cpsDouble") {
      stats.ClicksPS += (doublePointerCPS * 2);
      stats.RawClicksPS += doublePointerCPS;
      doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * stats.RawClicksPS)));
      doublePointerCost += Math.round(doublePointersOwned + (100 * stats.RawClicksPS) + doublePointersOwned * 5 + (Math.floor(Math.random() * 500000) + 250000));
    } else {
      stats.ClicksPS += doublePointerCPS;
      doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * stats.ClicksPS)));
      doublePointerCost += Math.round(doublePointersOwned + (100 * stats.ClicksPS) + doublePointersOwned * 5 + (Math.floor(Math.random() * 1000000) + 500000));
    }
    if (buff != "none") stats.RawClickVal += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS);
    doublePointerScale -= 0.03;
    stats.TotalClickHelpers++;
  }
});

upgradeButton.addEventListener("click", function () {
  upgradeShopOpen = !upgradeShopOpen; //True
  sfx.play();
  shopPanel.style.display = "none";
  upgradeShopPanel.style.display = "block";
});

upgradeRTS.addEventListener("click", function () {
  upgradeShopOpen = !upgradeShopOpen; //False
  sfx.play();
  shopPanel.style.display = "block";
  upgradeShopPanel.style.display = "none";
});

cursorBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= cursorCost) {
    sfx5.play();
    stats.Clicks -= cursorCost;
    cursorOwned = !cursorOwned; //True
    if (buff == "cpsDouble") {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (cursorCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * cursorCPS);
    } else stats.ClicksPS += Math.round(stats.ClicksPS * cursorCPS);
    if (buff != "none") stats.RawClickVal += Math.round(0.08 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(0.08 * stats.RawClicksPS);
    cursorCost = "Owned.";
    stats.TotalClickHelpers++;
  }
});

superCursorBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= superCursorCost) {
    sfx5.play();
    stats.Clicks -= superCursorCost;
    superCursorOwned = !superCursorOwned; //True
    if (buff == "cpsDouble") {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (superCursorCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * superCursorCPS);
    } else stats.ClicksPS += Math.round(stats.ClicksPS * superCursorCPS);
    if (buff != "none") stats.RawClickVal += Math.round(0.09 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(0.09 * stats.RawClicksPS);
    superCursorCost = "Owned.";
    stats.TotalClickHelpers++;
  }
});

employeeBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= employeeCost) {
    sfx5.play();
    stats.Clicks -= employeeCost;
    employeesOwned++;
    if (buff == "cpsDouble") {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (employeeCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * employeeCPS);
    }
    else stats.ClicksPS += Math.round(stats.ClicksPS * employeeCPS);
    employeeCost += (employeesOwned * employeeCost);
    employeeCPS *= 2;
    stats.TotalClickHelpers++;
  }
});

godFingerBuy.addEventListener("click", function () {
  sfx.play();
  if (stats.Clicks >= godFingerCost) {
    sfx5.play();
    stats.Clicks -= godFingerCost;
    godFingerOwned = !godFingerOwned; //True
    if (buff == "cv777%CpS") stats.RawClickVal += Math.round(godFingerCV * stats.RawClickVal);
    else stats.ClickValue += Math.round(godFingerCV * stats.ClickValue);
    godFingerCost = "Owned.";
    stats.TotalClickHelpers++;
  }
});

clickerFusionBuy.addEventListener("click", function () {
  sfx.play();
  if (clickersOwned >= 150 && !clickerFusionOwned) {
    sfx5.play();
    clickerFusionOwned = !clickerFusionOwned; //True
    clickerCPSWorth += Math.round(clickerCPSWorth * 1.5);
    if (buff == "cpsDouble") {
      stats.ClicksPS += Math.round((clickerCPSWorth * 1.5) * 2);
      stats.RawCPS += Math.round(clickerCPSWorth * 1.5);
    }
    else stats.ClicksPS += Math.round(clickerCPSWorth * 1.5);
    clickerFusionCost = "Owned";
    stats.TotalClickHelpers++;
  }
});

saveButton.addEventListener("click", function () {
  sfx.play();
  manualSave = true;
  saveGame();
});

wipeSaveButton.addEventListener("click", function () {
  sfx.play();
  wipeSave();
});

document.addEventListener("keyup", function (s) {
  titlescreen.appendChild(key);
  if (s.key == "s" && debugScreenState == "closed") {
    manualSave = true;
    saveGame();
  } else if (s.key == "y" && s.ctrlKey) createBase64Key();
  else if (s.key == "y" && s.altKey) {
    if (gameStarted && debugScreenState == "closed") {
      debugScreenState = "open";
      game.style.display = "none";
      if (!keyEntered) debugKeyInputScreen.style.display = "block";
      else if (keyEntered) debugScreen.style.display = "block";
    } else if (gameStarted && debugScreenState == "open") {
      debugScreenState = "closed";
      debugKeyInputScreen.style.display = "none";
      debugScreen.style.display = "none";
      game.style.display = "block";
    }
  }
});

debugKeySubmit.addEventListener("click", function (event) {
  event.preventDefault();
  try {
    let dmkInput = atob(debugKeyInput.value);
  } catch (error) {
    dmkInput = debugKeyInput.value;
  }
  if (dmkInput == generatedKey) {
    debugKeyInputScreen.style.display = "none";
    debugScreen.style.display = "block";
    keyEntered = !keyEntered; //True
  } else {
    incorrectKeyLabel.style.display = "block";
    incorrectKeyLabel.textContent = "Incorrect key.";
    SHT = 500;
  }
});

document.addEventListener("mousemove", function (event) {
  let left = event.clientX;
  let top = event.clientY;
  clickerInfo.style.left = `${leftCanvasX + 9}px`;
  clickerInfo.style.top = `${top - 35}px`;
  superClickerInfo.style.top = `${top + 35}px`;
  superClickerInfo.style.left = `${leftCanvasX + 9}px`;
  doublePointerInfo.style.left = `${leftCanvasX + 9}px`;
  doublePointerInfo.style.top = `${top + 35}px`;
  achievementsLabel.style.left = `${left - achievementsLabel.getBoundingClientRect().width / 2}px`;
  achievementsLabel.style.top = `${top}px`;
  settingsLabel.style.left = `${left - settingsLabel.getBoundingClientRect().width / 2}px`;
  settingsLabel.style.top = `${top}px`;
  clickerFusionInfo.style.top = `${top + 35}px`;
  clickerFusionInfo.style.left = `${leftCanvasX + 9}px`;
  autoBuyInfo.style.top = `${top}px`;
  autoBuyInfo.style.left = `${left - autoBuyInfo.getBoundingClientRect().width / 2}px`;
});

achievementsButton.addEventListener("click", function () {
  sfx.play();
  game.style.display = "none";
  achievementsPanel.style.display = "block";
  achNameStr.textContent = achStrs[0];
  achDescStr.textContent = achDescs[0];
  achUnlockStr.textContent = `Unlocked: ${achArr[0]}`;
});

backToGame.addEventListener("click", function () {
  sfx.play();
  game.style.display = "block";
  achievementsPanel.style.display = "none";
});

journeyBegins.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[0];
  achDescStr.textContent = achDescs[0];
  achUnlockStr.textContent = `Unlocked: ${achArr[0]}`;
});

aGoodStart.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[1];
  achDescStr.textContent = achDescs[1];
  achUnlockStr.textContent = `Unlocked: ${achArr[1]}`;
});

gettingThere.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[2];
  achDescStr.textContent = achDescs[2];
  achUnlockStr.textContent = `Unlocked: ${achArr[2]}`;
});

millionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[3];
  achDescStr.textContent = achDescs[3];
  achUnlockStr.textContent = `Unlocked: ${achArr[3]}`;
});

coinPool.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[4];
  achDescStr.textContent = achDescs[4];
  achUnlockStr.textContent = `Unlocked: ${achArr[4]}`;
});

abundance.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[5];
  achDescStr.textContent = achDescs[5];
  achUnlockStr.textContent = `Unlocked: ${achArr[5]}`;
});

billionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[6];
  achDescStr.textContent = achDescs[6];
  achUnlockStr.textContent = `Unlocked: ${achArr[6]}`;
});

excess.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[7];
  achDescStr.textContent = achDescs[7];
  achUnlockStr.textContent = `Unlocked: ${achArr[7]}`;
});

planetOfClicks.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[8];
  achDescStr.textContent = achDescs[8];
  achUnlockStr.textContent = `Unlocked: ${achArr[8]}`;
});

trillionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[9];
  achDescStr.textContent = achDescs[9];
  achUnlockStr.textContent = `Unlocked: ${achArr[9]}`;
});

pocketDimension.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[10];
  achDescStr.textContent = achDescs[10];
  achUnlockStr.textContent = `Unlocked: ${achArr[10]}`;
});

farTooMany.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[11];
  achDescStr.textContent = achDescs[11];
  achUnlockStr.textContent = `Unlocked: ${achArr[11]}`;
});

quadrillionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[12];
  achDescStr.textContent = achDescs[12];
  achUnlockStr.textContent = `Unlocked: ${achArr[12]}`;
});

coinVortex.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[13];
  achDescStr.textContent = achDescs[13];
  achUnlockStr.textContent = `Unlocked: ${achArr[13]}`;
});

coinShapedBlackHole.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[14];
  achDescStr.textContent = achDescs[14];
  achUnlockStr.textContent = `Unlocked: ${achArr[14]}`;
});

quintillionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[15];
  achDescStr.textContent = achDescs[15];
  achUnlockStr.textContent = `Unlocked: ${achArr[15]}`;
});

clickBeyond.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[16];
  achDescStr.textContent = achDescs[16];
  achUnlockStr.textContent = `Unlocked: ${achArr[16]}`;
});

distantBeginning.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[17];
  achDescStr.textContent = achDescs[17];
  achUnlockStr.textContent = `Unlocked: ${achArr[17]}`;
});

sextillionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[18];
  achDescStr.textContent = achDescs[18];
  achUnlockStr.textContent = `Unlocked: ${achArr[18]}`;
});

breakpoint.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[19];
  achDescStr.textContent = achDescs[19];
  achUnlockStr.textContent = `Unlocked: ${achArr[19]}`;
});

numberOverflow.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[20];
  achDescStr.textContent = achDescs[20];
  achUnlockStr.textContent = `Unlocked: ${achArr[20]}`;
});

coinUniverse.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[21];
  achDescStr.textContent = achDescs[21];
  achUnlockStr.textContent = `Unlocked: ${achArr[21]}`;
});

septillionare.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[22];
  achDescStr.textContent = achDescs[22];
  achUnlockStr.textContent = `Unlocked: ${achArr[22]}`;
});

why.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[23];
  achDescStr.textContent = achDescs[23];
  achUnlockStr.textContent = `Unlocked: ${achArr[23]}`;
});

twentyFingers.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[24];
  achDescStr.textContent = achDescs[24];
  achUnlockStr.textContent = `Unlocked: ${achArr[24]}`;
});

forTheWorthy.addEventListener("click", function () {
  sfx.play();
  achNameStr.textContent = achStrs[25];
  achDescStr.textContent = achDescs[25];
  achUnlockStr.textContent = `Unlocked: ${achArr[25]}`;
});

settingsButton.addEventListener("click", function () {
  sfx.play();
  settingsPanel.style.display = "block";
  game.style.display = "none";
});

backToGame2.addEventListener("click", function () {
  sfx.play();
  game.style.display = "block";
  settingsPanel.style.display = "none";
});

volumeInput.addEventListener("change", function () {
  try {
    if (volumeInput.value >= 0 && volumeInput.value <= 100) {
      volume = volumeInput.value / 100;
      let sndArr = [sfx, sfx2, sfx3, sfx4, sfx5];
      for (let i = 0; i < sndArr.length; i++)
        sndArr[i].volume = volume;
    } else volumeInput.value = "";
  } catch (error) {
    errorHandler(error);
  }
});

document.addEventListener("click", function () {
  if (debugAutoplay) sfx.volume = volume;
});

autoBuyBtn.addEventListener("click", function () {
  if (doAutobuy) {
    autoBuyBtn.textContent = 'OFF';
    doAutobuy = false;
  } else {
    autoBuyBtn.textContent = 'ON';
    doAutobuy = true;
  }
});

//Function intervals
setInterval(timedLabelCount, 1);
setInterval(autoplay, autoplayInterval);
setInterval(rgChange, 25);
setInterval(updateScreen, 1);
setInterval(cpsClick, 100);
setInterval(buffRNGCalc, 1000);
setInterval(ptIncrease, 1000);
setInterval(autobuy, 1);

setInterval(function () {
  if (debugAutoplay && screenSwitch && gameStarted && performScreenSwitch) {
    upgradeButton.click();
    screenSwitch = !screenSwitch; //False
  } else if (debugAutoplay && !screenSwitch && gameStarted && performScreenSwitch) {
    upgradeRTS.click();
    screenSwitch = !screenSwitch; //True
  }
}, 5000);

setInterval(function () {
  if (doAutosave && buff == "none") {
    manualSave = false;
    saveGame();
  }
}, 60000);

setInterval(function() {
  console.clear();
}, 600000)