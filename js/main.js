/*
Coin Clicker Update 6 Codename "Abundance"
Build 4.21 Rewrite Beta
*/

//Any code that is commented out does not get used, but is planned to be utilized in the near future.
const eElement = document.createElement("p");
function errorHandler(error) {
  const body = document.body;
  const titlescreen = document.getElementById("titlescreen");
  bmbarNote.style.display = "none";
  eElement.textContent = "Error in script: " + error;
  console.error(error);
  eElement.style.position = "fixed";
  eElement.style.top = "-0.5vw";
  eElement.style.fontSize = "15px";
  eElement.style.display = "block";
  titlescreen.style.display = "none";
  body.appendChild(eElement);
}
try {
  sysCheck(); //Check syscheck.js for more info.
} catch (error) {
  errorHandler(error);
}
function script() {
  console.groupEnd();

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

  //Debug screen
  const debugKeyInputScreen = document.getElementById("debuginputscreen");
  const debugKeyInput = document.getElementById("debugkeyinput");
  const debugKeySubmit = document.getElementById("debugkeysubmit");
  const incorrectKeyLabel = document.getElementById("incorrectkeyentered");
  const debugScreen = document.getElementById("debugscreen");

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

  //Title screen variables
  const buildStr = "4.21ab";
  const buildNumber = 4.21;
  const updateName = "abundance";
  var gameStarted = false;

  //Stat variables
  var clicks = 0;
  var clicksText = "0";
  var clickValue = 1;
  var clickValueText = "1";
  var unbuffedCV = 1;
  var cps = 0;
  var cpsText = "0";
  var unbuffedCPS = 0;
  var timePlayed = 0;
  var lifetimeClicks = 0;
  var lifetimeClicksText = "0";
  var lifetimeManualClicks = 0;
  var lifetimeManualClicksText = "0";
  var coinClickCount = 0;
  var coinClickCountText = "0";
  var totalClickHelpers = 0;
  var totalClickHelpersText = "0";
  var achievementsUnlocked = 0;
  var achievementsUnlockedText = "0";

  //Shop variables
  var clickerCPS = 5;
  var clickerCPSText = "5";
  var clickerCost = 100;
  var clickerCostText = "100";
  var clickerScale = 0.005;
  var clickersOwned = 0;
  var clickersOwnedText = "0";
  var clickerCPSWorth = 0;
  var clickerCPSWorthText = "0";
  var superClickerUnlocked = false;
  var superClickerCPS = 150;
  var superClickerCPSText = "150";
  var superClickerCost = 200000;
  var superClickerCostText = "200,000";
  var superClickerScale = 0.01;
  var superClickersOwned = 0;
  var superClickersOwnedText = "0";
  var superClickerCPSWorth = 0;
  var superClickerCPSWorthText = "0";
  var doublePointerUnlocked = false;
  var doublePointerCPS = 25000000;
  var doublePointerCPSText = "25,000,000";
  var doublePointerCost = 5000000000000000;
  var doublePointerCostText = "5,000,000,000,000";
  var doublePointerScale = 0.09;
  var doublePointersOwned = 0;
  var doublePointersOwnedText = "0";
  var doublePointerCPSWorth = 0;
  var doublePointerCPSWorthText = "0";

  //Upgrade shop variables
  var cursorCPS = 0.50;
  var cursorCost = 5000000;
  var cursorOwned = false;
  var superCursorUnlocked = false;
  var superCursorCPS = 0.75;
  var superCursorCost = 500000000;
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
  const saveData = [];
  var SHT;

  //Buff variables
  var buffRNG = 0;
  var alreadyLogged = false;
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
  var sfx = new Audio("../snd/click.mp3");
  var sfx2 = new Audio("../snd/shopunlock.mp3");
  var sfx3 = new Audio("../snd/achievementunlock.mp3");
  var sfx4 = new Audio("../snd/specialachievementunlocksfx.mp3");
  var sfx5 = new Audio("../snd/shopbuy.mp3");

  //Color variables
  var increase = true;
  var red = 0;
  var green = 0;

  //Debug mode variables
  var generatedKey = "debug";
  var debugScreenState = "closed";
  var debug = false; //This boolean is purely for quickly testing added code, this will not affect anything within the normal game and should be set to false in released builds.
  var debugAutoplay = false; //This boolean makes the game almost fully automated, requiring almost zero user input. It should be set to false in released builds, but if you see this message, you are welcome to enable it. However, it will automatically save the game, disable saving, and DESTROY your save on next load.
  var forceBuff = false; //This boolean determines if the buff RNG value listed in buffRNGCalc() is forced or if it's always random. It should be set to false in released builds.
  var performScreenSwitch = false; //Related to debugAutoplay, this boolean determines whether or not the user would like to have the shop panels alternate between each other every 5 seconds.
  var screenSwitch = true; //Related to debugAutoplay, this boolean determines which screen to switch (either the regular shop or the upgrade shop) during autoplay. It is automatically changed every 5 seconds.
  var autoplaySpeed = "medium"; //Possible values: "slow", "medium", "fast", and "fastest". Default value: "medium". Affects autoplayInterval, which changes the interval between autoplay function calls.
  var autoplayInterval = 0;
  var doAutosave = false;

  //Arrays
  var intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, clickerCPS, clickerCost,
    clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, employeesOwned,
    clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, achievementsUnlocked
  ];

  var textArray = [clicksText, clickValueText, cpsText, lifetimeClicksText, lifetimeManualClicksText, coinClickCountText, totalClickHelpersText,
    clickerCPSText, clickerCostText, clickersOwnedText, superClickerCPSText, superClickerCostText, superClickersOwnedText, doublePointerCPSText,
    doublePointerCostText, doublePointersOwnedText, employeeCostText, employeesOwnedText, clickerCPSWorthText, superClickerCPSWorthText,
    doublePointerCPSWorthText, achievementsUnlockedText
  ];

  const achStrs = ["Journey Begins", "A Good Start", "Getting There", "Millionare", "Coin Pool", "Abundance", "Billionare", "Excess", "Planet of Clicks",
    "Trillionare", "Pocket Dimension", "Far Too Many", "Quadrillionare", "Coin Vortex", "Coin-Shaped Black Hole", "Quintillionare", "Click Beyond",
    "Distant Beginning", "Sextillionare", "Breakpoint", "Number Overflow", "Coin Universe", "Septillionare", "Why?", "20 Fingers", "For the Worthy"];

  const achDescs = ["Obtain 1 lifetime click.", "Obtain 10,000 lifetime clicks.", "Obtain 100,000 lifetime clicks.", "Obtain 1,000,000 lifetime clicks.",
    "Obtain 10,000,000 lifetime clicks.", "Obtain 100,000,000 lifetime clicks.", "Obtain 1,000,000,000 lifetime clicks.", "Obtain 10,000,000,000 lifetime clicks.",
    "Obtain 100,000,000,000 lifetime clicks.", "Obtain 1,000,000,000,000 lifetime clicks.", "Obtain 10,000,000,000,000 lifeitme clicks.",
    "Obtain 1.000e14 (100 trillion) lifetime clicks.", "Obtain 1.000e15 (1 quadrillion) lifetime clicks.", "Obtain 1.000e16 (10 quadrillion) lifetime clicks.",
    "Obtain 1.000e17 (100 quadrillion) lifetime clicks.", "Obtain 1.000e18 (1 quintillion) lifetime clicks.", "Obtain 1.000e19 (10 quadrillion) lifetime clicks.",
    "Obtain 1.000e20 (100 quintillion) lifetime clicks.", "Obtain 1.000e21 (1 sextillion) lifetime clicks.", "Obtain infinite lifetime clicks, breaking the game.",
    "Obtain 1.000e22 (10 sextillion) lifetime clicks.", "Obtain 1.000e23 (100 sextillion) lifetime clicks.", "Obtain 1.000e24 (1 septillion) lifetime clicks.",
    "Obtain 1.000e25 (10 septillion) lifetime clicks.", "Obtain 1.000e26 (100 septillion) lifetime clicks.", "Obtain 1.000e27 (1 octillion) lifetime clicks."];

  var achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
    excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked, quadrillionareUnlocked, coinVortexUnlocked,
    coinShapedBlackHoleUnlocked, quintillionareUnlocked, clickBeyondUnlocked, distantBeginningUnlocked, sextillionareUnlocked, breakpointUnlocked,
    numberOverflowUnlocked, coinUniverseUnlocked, septillionareUnlocked, whyUnlocked, twentyFingersUnlocked, forTheWorthyUnlocked];

  var costStringArr = [clickerCostString, superClickerCostString, doublePointerCostString, cursorCostString, superCursorCostString, employeeCostString, godFingerCostString];

  var costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];

  //Initial run updates and calls
  debugKeyInput.value = "";
  volumeInput.value = volume * 100;
  console.group("Build Info");
  console.log(`Running update 5 codename ${updateName} build ${buildStr}`);
  console.groupEnd();
  buildString.textContent = `build ${buildStr}`;
  updateString.textContent = `the ${updateName} update`;
  console.group("Debug");
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

  console.groupEnd();
  initialDataLoad();

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
          if (clicks >= costArray[i]) buttonArray[i].click();
          if (clickersOwned >= 150) buttonArray[buttonArray.length - 1].click();
        }
      }
    } catch (error) {
      errorHandler(error);
    }
  }

  function updateScreen() {
    try {
      numberFix();
      document.getElementById("debugconsole").value = debugConsole;
      clickString.textContent = `Clicks: ${textArray[0]}`;
      cpsString.textContent = `Clicks per Second: ${textArray[2]}`;
      clickValueString.textContent = `Click Value: ${textArray[1]}`;
      clickerCPSString.textContent = `CPS: +${textArray[7]}`;
      clickerCostString.textContent = `Cost: ${textArray[8]}`;
      clickersOwnedString.textContent = `Owned: ${textArray[9]}`;
      if (cps != 0) {
        clickerInfo.textContent = `Your ${textArray[9]} clickers account for ${textArray[20]} (${Math.round((intArray[20] / cps) * 100)}%) CPS.`;
        superClickerInfo.textContent = `Your ${textArray[12]} super clickers account for  ${textArray[21]} (${Math.round((intArray[21] / cps) * 100)}%) CPS.`;
        doublePointerInfo.textContent = `Your ${textArray[15]} double pointers account for ${textArray[22]} (${Math.round((intArray[22] / cps) * 100)}%) CPS.`;
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
      if (timePlayed == 1000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 1000)} second.`;
      else if (timePlayed >= 60000 && timePlayed < 900000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 60000)} minute.`;
      else if (timePlayed >= 3600000 && timePlayed < 5400000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 3600000)} hour.`;
      if (timePlayed > 1000 && timePlayed < 60000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 1000)} seconds.`;
      else if (timePlayed > 90000 && timePlayed < 5400000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 60000)} minutes.`;
      else if (timePlayed > 5400000) timePlayedString.textContent = `You have played for ${Math.round(timePlayed / 3600000)} hours.`;
      lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} clicks.`;
      if (lifetimeClicks == 1) lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} click.`;
      lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} clicks from clicking.`;
      if (lifetimeManualClicks == 1) lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} click from clicking.`;
      coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} times.`;
      if (coinClickCount == 1) coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} time.`;
      totalClickHelpersString.textContent = `You have bought ${textArray[6]} items.`;
      if (totalClickHelpers == 1) totalClickHelpersString.textContent = `You have bought ${textArray[6]} item.`;
      achievementsUnlockedString.textContent = `You have unlocked ${textArray[23]} out of 25 achievements.`;
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
        superClickerCPSString.textContent = `CPS: +${textArray[10]}`;
        superClickerCostString.textContent = `Cost: ${textArray[11]}`;
        superClickersOwnedString.textContent = `Owned: ${textArray[12]}`;
      }
      if (clickersOwned >= 75 && superClickersOwned >= 5 && !doublePointerUnlocked) {
        sfx2.play();
        unlockString.textContent = "Double Pointer unlocked!";
        if (gameStarted) unlockString.style.display = "block";
        doublePointerGroup.style.display = "block";
        doublePointerUnlocked = !doublePointerUnlocked; //True
        SHT = 500;
      } else if (doublePointerUnlocked) {
        doublePointerGroup.style.display = "block";
        doublePointerCPSString.textContent = `CPS: +${textArray[13]}`;
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
  const achReq = [1, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 
    100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 
    10000000000000000n, ]
  function achievementUnlockCheck() {
    try {
      if (lifetimeClicks >= 1 && !achArr[0]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Journey Begins";
        achArr[0] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000 && !achArr[1]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: A Good Start";
        achArr[1] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000 && !achArr[2]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Getting There";
        achArr[2] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000 && !achArr[3]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Millionare";
        achArr[3] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000 && !achArr[4]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Coin Pool";
        achArr[4] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000 && !achArr[5]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Abundance";
        achArr[5] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000 && !achArr[6]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Billionare";
        achArr[6] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000 && !achArr[7]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Excess";
        achArr[7] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000 && !achArr[8]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Planet of Clicks";
        achArr[8] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000 && !achArr[9]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Trillionare";
        achArr[9] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000000 && !achArr[10]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Pocket Dimension";
        achArr[10] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000000 && !achArr[11]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Far Too Many";
        achArr[11] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000000 && !achArr[12]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Quadrillionare";
        achArr[12] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000000000n && !achArr[13]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Coin Vortex";
        achArr[13] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000000000n && !achArr[14]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Coin-Shaped Black Hole";
        achArr[14] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000000000n && !achArr[15]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Quintillionare";
        achArr[15] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000000000000n && !achArr[16]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Click Beyond";
        achArr[16] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000000000000n && !achArr[17]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Distant Beginning";
        achArr[17] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000000000000n && !achArr[18]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Sextillionare";
        achArr[18] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (!isFinite(lifetimeClicks) && !achArr[19]) {
        if (gameStarted) sfx4.play();
        achStr = "Hidden Achievement Unlocked: Breakpoint";
        achArr[19] = true;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000000000000000n && !achArr[20]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Number Overflow";
        achArr[20] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000000000000000n && !achArr[21]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Coin Universe";
        achArr[21] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000000000000000n && !achArr[22]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: septillionare";
        achArr[22] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 10000000000000000000000000n && !achArr[23]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Why?";
        achArr[23] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 100000000000000000000000000n && !achArr[24]) {
        if (gameStarted) sfx3.play();
        achStr = "Achievement Unlocked: Twenty Fingers";
        achArr[24] = true;
        achievementsUnlocked++;
        unlockString.textContent = achStr;
        if (gameStarted) unlockString.style.display = "block";
        SHT = 500;
      }
      if (lifetimeClicks >= 1000000000000000000000000000n && !achArr[25]) {
        if (gameStarted) sfx4.play();
        achStr = "Special Achievement Unlocked; For The Worthy";
        achArr[25] = true;
        achievementsUnlocked++;
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
      intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, clickerCPS, clickerCost,
        clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost,
        employeesOwned, unbuffedCV, unbuffedCPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, achievementsUnlocked
      ];
      for (let i = 0; i < intArray.length; i++) {
        intArray[i] = Math.abs(intArray[i]); //Use Number.prototype.toLocaleString if supported.
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
        if (clicks >= costArray[i]) {
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

  function initialDataLoad() {
    try {
      console.group("Initial Data Load");
      if (localStorage.getItem('saveData', saveData) != null) {
        let data = localStorage.getItem('saveData', saveData);
        let loadData = JSON.parse(data);
        if (loadData[0] >= 3.8) {
          if (!loadData[1]) {
            clicks = loadData[2];
            clickValue = loadData[3];
            cps = loadData[4];
            lifetimeClicks = loadData[5];
            lifetimeManualClicks = loadData[6];
            coinClickCount = loadData[7];
            totalClickHelpers = loadData[8];
            clickerCPS = loadData[9];
            clickerCost = loadData[10];
            clickersOwned = loadData[11];
            superClickerCPS = loadData[12];
            superClickerCost = loadData[13];
            superClickersOwned = loadData[14];
            doublePointerCPS = loadData[15];
            doublePointerCost = loadData[16];
            doublePointersOwned = loadData[17];
            employeeCost = loadData[18];
            employeesOwned = loadData[19];
            unbuffedCV = loadData[20];
            unbuffedCPS = loadData[21];
            clickerCPSWorth = loadData[22];
            superClickerCPSWorth = loadData[23];
            doublePointerCPSWorth = loadData[24];
            timePlayed = loadData[25];
            if (loadData[0] >= 4.21) {
              buff = loadData[26];
              if (buff == "cpsDouble") cps = unbuffedCPS;
              else if (buff == "cv777%CPS") clickValue = unbuffedCV;
              buff = "none";
              volume = loadData[27];
              volumeInput.value = volume * 100;
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
        console.warn("There is no save to load. Creating one now.");
        debugConsole += "WARN: There is no save to load. Creating one now.\n";
        var needToSave = true;
        saveGame(needToSave);
      }
      console.groupEnd();
    } catch (error) {
      errorHandler(error);
    }
  }

  function saveGame(needToSave) {
    try {
      if (readyToSave && gameStarted || readyToSave && needToSave) {
        readyToSave = !readyToSave; //False
        savingString.textContent = "Saving...";
        savingString.style.display = "block";
        let intsToPush = [buildNumber, debugAutoplay, clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, clickerCPS, clickerCost,
          clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost,
          employeesOwned, unbuffedCV, unbuffedCPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, timePlayed, buff, volume
        ];
        for (let i = 0; i < intsToPush.length; i++)
          saveData.push(intsToPush[i]);
        saveGameP2(needToSave);
      } else if (!readyToSave && manualSave) {
        console.warn("Not ready to save, or saving is disabled!");
        debugConsole += "Not ready to save, or saving is disabled!\n";
      }
    } catch (error) {
      errorHandler(error)
    }
  }

  function saveGameP2(needToSave) {
    try {
      localStorage.setItem('saveData', JSON.stringify(saveData));
      while (saveData.length > 0) saveData.pop();
      if (manualSave) {
        savingString.textContent = "Game saved.";
        console.log(`Game saved @ playtime ${timePlayed} ms`);
        debugConsole += `Game saved @ playtime ${timePlayed} ms\n`;
        manualSave = !manualSave; //False
      } else {
        savingString.textContent = "Game autosaved.";
        console.log(`Game autosaved @ playtime ${timePlayed} ms`);
        debugConsole += `Game autosaved @ playtime ${timePlayed} ms\n`;
      }
      if (needToSave) console.groupEnd();
      SHT = 500;
    } catch (error) {
      errorHandler(error)
    }
  }

  function wipeSave() {
    try {
      if (readyToSave) {
        readyToSave = !readyToSave; //False
        if (confirm("This is completely irreversible and wiping your save will also refresh the page! Are you sure you wish to continue?")) {
          localStorage.removeItem("saveData");
          location.reload();
        } else if (!readyToSave) readyToSave = !readyToSave; //True
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
        if (!debugAutoplay) readyToSave = !readyToSave; //True
        SHT++;
      }
    } catch (error) {
      errorHandler(error);
    }
  }

  function buffRNGCalc() {
    try {
      let max = 300;
      let min = 0;
      buffRNG = 0;
      if (forceBuff && buff == "none") buffRNG = 200;
      else if (!forceBuff && buff == "none") buffRNG = Math.floor((Math.random() * max) + min);
      if (buffRNG == 100 && buff == "none") {
        if (cps > 0) {
          buffStr.textContent = "Your CPS has been doubled for 30 seconds!";
          buffStr.style.display = "block";
          unbuffedCPS = cps;
          debugConsole += `${unbuffedCPS}\n`;
          cps = Math.round(cps * 2);
          buff = "cpsDouble";
          window.setTimeout(buffRemoval, 30000);
        }
      } else if (buffRNG == 200 && buff == "none") {
        if (cps > 0) {
          buffStr.textContent = "Your click value has been increased by 777% of your CPS for 5 seconds!";
          buffStr.style.display = "block";
          unbuffedCV = clickValue;
          debugConsole += `${unbuffedCV}\n`;
          clickValue += Math.round(cps * 7.77);
          buff = "cv777%CPS";
          window.setTimeout(buffRemoval, 5000);
        }
      } else if (buffRNG == 300 && buff == "none") {
        if (cps > 0 && clicks > 0) {
          clicksAdded = Math.round(0.3 * cps + 0.1 * clicks);
          clicks = clicks + clicksAdded;
          buffStr.textContent = `You got ${clicksAdded}additional clicks!`;
          buffStr.style.display = "block";
          buff = "bonusClicks";
          window.setTimeout(buffRemoval, 2000);
        }
      }
      if (buff != "none" && !alreadyLogged) {
        alreadyLogged = !alreadyLogged; //True
        console.log(`Current buff is ${buff}`);
        debugConsole += `Current buff is ${buff}\n`;
      }
    } catch (error) {
      errorHandler(error);
    }
  }

  function buffRemoval() {
    try {
      buffStr.style.display = "none";
      if (buff == "cpsDouble") cps = Math.round(cps / 2);
      else if (buff == "cv777%CPS") clickValue -= Math.round(cps * 7.77);
      else if (buff == "bonusClicks") clicksAdded = 0;
      buff = "none";
      console.log("Buff removed.");
    } catch (error) {
      errorHandler(error);
    }
    alreadyLogged = !alreadyLogged; //False
  }

  function timeIncrease() {
    timePlayed += 1000;
  }

  function coinClick() {
    try {
      sfx.play();
      if (Math.sign(clicks) != -1 && Math.sign(lifetimeClicks) != -1 && Math.sign(clickValue) != -1 && Math.sign(coinClickCount) != -1) {
        clicks += clickValue;
        lifetimeClicks += clickValue;
        lifetimeManualClicks += clickValue;
        coinClickCount++;
      } else {
        console.warn("A value is negative, please wait for conversion.");
        debugConsole += "WARN: A value used is negative, please wait for conversion.\n";
      }
    } catch (error) {
      errorHandler(error);
    }
  }

  function cpsClick() {
    try {
      clicks += cps * 0.25;
      clicks = Math.round(clicks);
      lifetimeClicks += cps * 0.25;
      lifetimeClicks = Math.round(lifetimeClicks);
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
      let size = $(window).width();
      let scale = window.devicePixelRatio;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      canvas.height = Math.floor(size * scale);
      canvas.width = Math.floor(size * scale);
      ctx.scale(scale, scale);
      if (size == 1920) {
        ctx.fillRect(505, 0, 2, canvas.height);
        ctx.fillRect(1350, 0, 2, canvas.height);
      } else if (size == 1366) {
        ctx.fillRect(405, 0, 2, canvas.height);
        ctx.fillRect(925, 0, 2, canvas.height);
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
    gameStarted = !gameStarted; //True
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
    canvasDraw();
  });

  coin.addEventListener("click", coinClick);

  clickerBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= clickerCost) {
      if (clickerScale == 0.002) clickerScale = 0.003;
      sfx5.play();
      clicks -= clickerCost;
      clickersOwned++;
      cps += clickerCPS;
      clickerCPSWorth += clickerCPS;
      if (buff == "cpsDouble") {
        cps += (clickerCPS * 2);
        clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs(clickerScale * unbuffedCPS) + (Math.floor(Math.random() * 15) + 3)));
        clickerCost += Math.round(clickersOwned + (15 * unbuffedCPS) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
        clickValue += Math.round(clickersOwned * 0.5 + 0.01 * cps);
      } else {
        clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs((clickerScale * cps)) + (Math.floor(Math.random() * 15) + 3)));
        clickerCost += Math.round(clickersOwned + (15 * cps) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
        clickValue += Math.round(clickersOwned * 0.5 + 0.01 * cps);
      }
      clickerScale -= 0.01;
      totalClickHelpers++;
    }
  });

  superClickerBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= superClickerCost) {
      if (superClickerScale == 0.002) superClickerScale = 0.006;
      sfx5.play();
      clicks -= superClickerCost;
      superClickersOwned++;
      cps += superClickerCPS;
      superClickerCPSWorth += superClickerCPS;
      if (buff == "cpsDouble") {
        cps += (superClickerCPS * 2);
        superClickerCPS = Math.abs(Math.round(superClickersOwned * 3 + (superClickerScale * unbuffedCPS)));
        superClickerCost += Math.round(superClickerCost + (75 * unbuffedCPS) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
        clickValue += Math.round(superClickersOwned * 2 + 0.01 * unbuffedCPS);
      } else {
        superClickerCPS = 150 + Math.abs(Math.round(superClickersOwned * 3 + (superClickerScale * cps)));
        superClickerCost += Math.round(superClickerCost + (75 * cps) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
        clickValue += Math.round(superClickersOwned * 2 + 0.01 * cps);
      }
      superClickerScale = superClickerScale - 0.002;
      totalClickHelpers++;
    }
  });

  doublePointerBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= doublePointerCost) {
      if (doublePointerScale == 0.03) doublePointerScale = 0.09;
      sfx5.play();
      clicks -= doublePointerCost;
      doublePointersOwned++;
      cps += doublePointerCPS;
      doublePointerCPSWorth += doublePointerCPS;
      if (buff == "cpsDouble") {
        cps += (doublePointerCPS * 2);
        doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * unbuffedCPS)));
        doublePointerCost += Math.round(doublePointersOwned + (175 * unbuffedCPS) + doublePointersOwned * 10 + (Math.floor(Math.random() * 1000000) + 500000));
        clickValue += Math.round(doublePointersOwned * 3 + 0.03 * unbuffedCPS);
      } else {
        doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * cps)));
        doublePointerCost += Math.round(doublePointersOwned + (175 * cps) + doublePointersOwned * 10 + (Math.floor(Math.random() * 1000000) + 500000));
        clickValue += Math.round(doublePointersOwned * 3 + 0.03 * cps);
      }
      doublePointerScale -= 0.03;
      totalClickHelpers++;
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
    if (clicks >= cursorCost) {
      sfx5.play();
      clicks -= cursorCost;
      cursorOwned = !cursorOwned; //True
      if (buff == "cpsDouble") {
        cps += Math.round(unbuffedCPS * (cursorCPS * 2));
        clickValue += Math.round(0.08 * unbuffedCPS);
      } else {
        cps += Math.round(cps * cursorCPS);
        clickValue += Math.round(0.08 * cps);
      }
      cursorCost = "Owned.";
      totalClickHelpers++;
    }
  });

  superCursorBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= superCursorCost) {
      sfx5.play();
      clicks -= superCursorCost;
      superCursorOwned = !superCursorOwned; //True
      if (buff == "cpsDouble") {
        cps += Math.round(cps * (superCursorCPS * 2));
        clickValue += Math.round(0.09 * unbuffedCPS);
      } else {
        cps += Math.round(cps * superCursorCPS);
        clickValue += Math.round(0.09 * cps);
      }
      superCursorCost = "Owned.";
      totalClickHelpers++;
    }
  });

  employeeBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= employeeCost) {
      sfx5.play();
      clicks -= employeeCost;
      employeesOwned++;
      if (buff == "cpsDouble") cps += Math.round(cps * (employeeCPS * 2));
      else cps += Math.round(cps * employeeCPS);
      employeeCost += (employeesOwned * employeeCost);
      employeeCPS *= 2;
      totalClickHelpers++;
    }
  });

  godFingerBuy.addEventListener("click", function () {
    sfx.play();
    if (clicks >= godFingerCost) {
      sfx5.play();
      clicks -= godFingerCost;
      godFingerOwned = !godFingerOwned; //True
      if (buff == "cv777%CPS") clickValue += Math.round((godFingerCV * clickValue) * 7.77 * cps);
      else clickValue += Math.round(godFingerCV * clickValue);
      godFingerCost = "Owned.";
      totalClickHelpers++;
    }
  });

  clickerFusionBuy.addEventListener("click", function () {
    sfx.play();
    if (clickersOwned >= 150 && !clickerFusionOwned) {
      sfx5.play();
      clickerFusionOwned = !clickerFusionOwned; //True
      cps += Math.round(clickerCPSWorth * 1.5);
      if (buff == "cpsDouble") cps += Math.round((clickerCPSWorth * 1.5) * 2);
      clickerFusionCost = "Owned";
      totalClickHelpers++;
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
    if (s.key == "s") {
      manualSave = true;
      saveGame();
    } else if (s.key == "y" && s.ctrlKey) createBase64Key();
    else if (s.key == "y" && s.altKey) {
      if (gameStarted && debugScreenState == "closed") {
        debugScreenState = "open";
        game.style.display = "none";
        debugKeyInputScreen.style.display = "block";
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
    if (dmkInput === generatedKey) {
      debugKeyInputScreen.style.display = "none";
      debugScreen.style.display = "block";
    } else {
      incorrectKeyLabel.style.display = "block";
      incorrectKeyLabel.textContent = "Incorrect key.";
      SHT = 500;
    }
  });

  document.addEventListener("mousemove", function (event) {
    let left = event.clientX;
    let top = event.clientY;
    clickerInfo.style.left = `${left}px`;
    clickerInfo.style.top = `${top}px`;
    superClickerInfo.style.top = `${top}px`;
    superClickerInfo.style.left = `${left}px`;
    doublePointerInfo.style.left = `${left}px`;
    doublePointerInfo.style.top = `${top}px`;
    achievementsLabel.style.left = `${left}px`;
    achievementsLabel.style.top = `${top}px`;
    settingsLabel.style.left = `${left}px`;
    settingsLabel.style.top = `${top}px`;
    clickerFusionInfo.style.top = `${top}px`;
    clickerFusionInfo.style.left = `${left}px`;
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
    achUnlockStr.textCOntent = `Unlocked: ${achArr[8]}`;
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
        sfx.volume = volume;
        sfx2.volume = volume;
        sfx3.volume = volume;
        sfx4.volume = volume;
        sfx5.volume = volume;
      } else volumeInput.value = "";
    } catch (error) {
      errorHandler(error);
    }
  });

  document.addEventListener("click", function () {
    if (debugAutoplay) sfx.volume = volume;
  });

  //Function intervals
  setInterval(timedLabelCount, 1); //This function will be removed in the future.
  setInterval(autoplay, autoplayInterval);
  setInterval(rgChange, 25);
  setInterval(updateScreen, 100);
  setInterval(cpsClick, 250);
  setInterval(buffRNGCalc, 1000);
  setInterval(timeIncrease, 1000);

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
    if (doAutosave) {
      manualSave = false;
      saveGame();
    }
  }, 60000);
}