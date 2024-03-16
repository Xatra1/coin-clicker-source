/*
Coin Clicker Update 7 Codename 'Animation'
Build 4.8 Animation Beta
*/

/* Spoilers ahead! */

//Loading screen
const loadingScreen = document.getElementById('loadingscreen');
const hiddenWhileLoading = document.getElementById('hideloading');

const eElement = document.createElement('p');
function errorHandler(error) {
  bmbarNote.style.display = 'none';
  eElement.textContent = `Error in script: ${error}`;
  eElement.style.position = 'fixed';
  eElement.style.top = '1vw';
  eElement.style.fontSize = '15px';
  eElement.style.display = 'block';
  console.error(error);
  debugConsole += `${error}\n`;
  document.body.appendChild(eElement);
}

console.group('Initial Checks');
var debugConsole = document.getElementById('debugconsole').textContent;
const link = document.createElement('link');
const bmbarNote = document.createElement('p');
const runningBrowserString = document.getElementById('runningbrowserstring');
const titleScreen = document.getElementById('titlescreen');
debugConsole += '\n';
sysCheck();

function sysCheck() {
  const browsers = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'OPR', 'Edg'];
  const userAgent = navigator.userAgent;
  const userAgentData = navigator.userAgentData;
  var index = browsers.length - 1;
  var browserStr = 'Undetected';
  var os = 'Undetected';
  while (index > -1 && userAgent.indexOf(browsers[index]) == -1) index--; //Loop through possible UA strings to detect client browser
  if (index > -1) browserStr = browsers[index];
  if (userAgentData != undefined) os = userAgentData.platform; //Use userAgentData to find client operating system.
  else {
    const oses = ['X11', 'Windows', 'Mac', 'Linux'];
    var osIndex = oses.length - 1;
    while (osIndex > -1 && userAgent.indexOf(oses[osIndex]) == -1) osIndex--; //Loop through possible UA strings to detect client operating system, this only triggers if the userAgentData method is unsupported.
    if (osIndex > -1) os = oses[osIndex];
    if (os == 'X11') os = 'Unix';
  }
  //Normalize UA strings
  if (browserStr == 'Edg') browserStr = 'Edge';
  else if (browserStr == 'OPR') browserStr = 'Opera';
  runningBrowserString.textContent = `${browserStr} running on ${os}`;
  console.info(`${browserStr}, ${os}`);
  debugConsole += `${browserStr}, ${os}\n`;
  if (browserStr == 'Chrome') { //Chrome is supported, but it is recommended to disable the bookmarks bar.
    bmbarNote.textContent = 'Note: If you cannot see the build string in the bottom left, you may need to disable the bookmarks bar to see everything correctly.';
    titleScreen.appendChild(bmbarNote);
    titleScreen.style.display = 'block';
  } else if (browserStr == 'Firefox') { //Firefox is supported without issues.
    const bs = document.getElementById('buildstring').style;
    const bobs = document.getElementById('basedonbuildstring').style;
    const rbs = document.getElementById('runningbrowserstring').style;
    const sb = document.getElementById('startbutton').style;
    const usb = document.getElementById('upgradebutton').style;
    const rtsb = document.getElementById('shopreturnbutton').style;
    bs.top = '50.5vw';
    bobs.top = '50.5vw';
    rbs.top = '50.5vw';
    sb.top = '50.2vw';
    usb.top = '45.5vw';
    rtsb.top = '45.5vw';
    titleScreen.style.display = 'block';
  } else titleScreen.style.display = 'block';
  bmbarNote.style.position = 'fixed';
  bmbarNote.style.fontSize = '0.8vw';
  bmbarNote.style.top = '-2vw';
  bmbarNote.style.left = '1vw';
  bmbarNote.style.animation = 'bmbarnotemov 1s ease-out forwards';
  bmbarNote.className = 'hasanim btmstr';
}

//Title screen
const sourceNote = document.getElementById('sourcenote');
const buildString = document.getElementById('buildstring');
const basedOnBuildString = document.getElementById('basedonbuildstring');
const skipIntroString = document.getElementById('skipintrostring');
const updateString = document.getElementById('updatestring');
const betaString = document.getElementById('betastring');
const startButton = document.getElementById('startbutton');
const smallCoin1 = document.getElementById('smallcoin1');
const smallCoin2 = document.getElementById('smallcoin2');
const smallCoin3 = document.getElementById('smallcoin3');
const smallCoin4 = document.getElementById('smallcoin4');
const tsClicker = document.getElementById('tsclicker');
const title = document.getElementById('title');
const key = document.createElement('p');
var bg = document.createElement('img');

//Game screen
const game = document.getElementById('gamescreen');
const coin = document.getElementById('coin');
const clickString = document.getElementById('clickstring');
const cpsString = document.getElementById('cpsstring');
const clickValueString = document.getElementById('clickvaluestring');
const unlockString = document.getElementById('unlockstring');
const saveButton = document.getElementById('savebutton');
const savingString = document.getElementById('savingstring');
const saveInfoString = document.getElementById('saveinfo');
const wipeSaveButton = document.getElementById('wipesavebutton');
const buffStr = document.getElementById('bufflabel');
var coinParticle = document.createElement('img');

//Shop panel
const shopPanel = document.getElementById('shoppanel');
const autoBuyStr = document.getElementById('autobuystring');
const clickerBuy = document.getElementById('clickerbuy');
const clickerCPSString = document.getElementById('clickercpsstring');
const clickerCostString = document.getElementById('clickercoststring');
const clickerInfo = document.getElementById('clickerinfo');
const clickersOwnedString = document.getElementById('clickersownedstring');
const clickerImg = document.getElementById('clickerimg');
const superClickerGroup = document.getElementById('superclicker');
const superClickerBuy = document.getElementById('superclickerbuy');
const superClickerCPSString = document.getElementById('superclickercpsstring');
const superClickerCostString = document.getElementById('superclickercoststring');
const superClickersOwnedString = document.getElementById('superclickersownedstring');
const superClickerInfo = document.getElementById('superclickerinfo');
const superClickerImg = document.getElementById('superclickerimg');
const doublePointerGroup = document.getElementById('doublepointer');
const doublePointerBuy = document.getElementById('doublepointerbuy');
const doublePointerCPSString = document.getElementById('doublepointercpsstring');
const doublePointerCostString = document.getElementById('doublepointercoststring');
const doublePointersOwnedString = document.getElementById('doublepointersownedstring');
const doublePointerInfo = document.getElementById('doublepointerinfo');
const doublePointerImg = document.getElementById('doublepointerimg');

//Upgrade shop panel
const upgradeShopPanel = document.getElementById('upgradeshoppanel');
const upgradeButton = document.getElementById('upgradebutton');
const upgradeRTS = document.getElementById('shopreturnbutton');
const cursorBuy = document.getElementById('cursorbuy');
const cursorCostString = document.getElementById('cursorcoststring');
const cursorOwnedString = document.getElementById('cursorownedstring');
const cursorImg = document.getElementById('cursorimg');
const superCursorGroup = document.getElementById('supercursor');
const superCursorBuy = document.getElementById('supercursorbuy');
const superCursorCostString = document.getElementById('supercursorcoststring');
const superCursorOwnedString = document.getElementById('supercursorownedstring');
const superCursorImg = document.getElementById('supercursorimg');
const employeeGroup = document.getElementById('employee');
const employeeBuy = document.getElementById('employeebuy');
const employeeCostString = document.getElementById('employeecoststring');
const employeesOwnedString = document.getElementById('employeesownedstring');
const employeeImg = document.getElementById('employeeimg');
const godFingerGroup = document.getElementById('godfinger');
const godFingerBuy = document.getElementById('godfingerbuy');
const godFingerCostString = document.getElementById('godfingercoststring');
const godFingerOwnedString = document.getElementById('godfingerownedstring');
const clickerFusionGroup = document.getElementById('clickerfusion');
const clickerFusionBuy = document.getElementById('clickerfusionbuy');
const clickerFusionCostString = document.getElementById('clickerfusioncoststring');
const clickerFusionOwnedString = document.getElementById('clickerfusionownedstring');
const clickerFusionInfo = document.getElementById('clickerfusioninfo');

//Stat panel
const statsPanel = document.getElementById('statspanel');
const timePlayedString = document.getElementById('timestring');
const lifetimeClicksString = document.getElementById('lifetimeclicksstring');
const lifetimeManualClicksString = document.getElementById('lifetimemanualclicksstring');
const coinClickCountString = document.getElementById('coinclickcountstring');
const totalClickHelpersString = document.getElementById('totalclickhelpersstring');
const achievementsUnlockedString = document.getElementById('achievementsunlockedstring');
const rawCPSString = document.getElementById('rawcpsstring');
const rawCVString = document.getElementById('rawcvstring');

//Debug screen
const debugKeyInputScreen = document.getElementById('debuginputscreen');
const debugKeyInput = document.getElementById('debugkeyinput');
const debugKeySubmit = document.getElementById('debugkeysubmit');
const incorrectKeyLabel = document.getElementById('incorrectkeyentered');
const debugScreen = document.getElementById('debugscreen');
const cmdForm = document.getElementById('debugconsinput');
const commandInput = document.getElementById('debugcmdinput');

//Achievement screen
const achievementsButton = document.getElementById('achievementsbutton');
const achievementsLabel = document.getElementById('achievementslabel');
const achievementsPanel = document.getElementById('achievementsscreen');
const achNameStr = document.getElementById('achievementnamestring');
const achDescStr = document.getElementById('achievementdescriptionstring');
const achUnlockStr = document.getElementById('achievementunlockedstring');
const journeyBegins = document.getElementById('journeybegins');
const aGoodStart = document.getElementById('agoodstart');
const gettingThere = document.getElementById('gettingthere');
const millionare = document.getElementById('millionare');
const coinPool = document.getElementById('coinpool');
const abundance = document.getElementById('abundance');
const billionare = document.getElementById('billionare');
const excess = document.getElementById('excess');
const planetOfClicks = document.getElementById('planetofclicks');
const trillionare = document.getElementById('trillionare');
const pocketDimension = document.getElementById('pocketdimension');
const farTooMany = document.getElementById('fartoomany');
const quadrillionare = document.getElementById('quadrillionare');
const coinVortex = document.getElementById('coinvortex');
const coinShapedBlackHole = document.getElementById('coinshapedblackhole');
const quintillionare = document.getElementById('quintillionare');
const clickBeyond = document.getElementById('clickbeyond');
const distantBeginning = document.getElementById('distantbeginning');
const sextillionare = document.getElementById('sextillionare');
const numberOverflow = document.getElementById('numberoverflow');
const coinUniverse = document.getElementById('coinuniverse');
const septillionare = document.getElementById('septillionare');
const why = document.getElementById('why');
const twentyFingers = document.getElementById('twentyfingers');
const forTheWorthy = document.getElementById('fortheworthy');
const breakpoint = document.getElementById('breakpoint');
const backToGame = document.getElementById('backtogame');
const ftwIcon = document.getElementById('fortheworthyicon');
const bpIcon = document.getElementById('breakpointicon')

//Settings screen
const settingsButton = document.getElementById('settingsbutton');
const settingsLabel = document.getElementById('settingslabel');
const settingsPanel = document.getElementById('settingsscreen');
const backToGame2 = document.getElementById('backtogame2');
const volumeInput = document.getElementById('volumeinput');
const autoBuyBtn = document.getElementById('autobuysetting');
const autoBuyInfo = document.getElementById('autobuyinfo');

//Audio files
var bgm = document.getElementById('bgm'); //C418 - Click
const sfx = document.getElementById('sfx'); //Click
const sfx2 = document.getElementById('sfx2'); //Shop Unlock
const sfx3 = document.getElementById('sfx3'); //Achievement Unlock
const sfx4 = document.getElementById('sfx4'); //Special Achievement/Clicker Fusion Unlock
const sfx5 = document.getElementById('sfx5'); //Shop Buy
const sfx6 = document.getElementById('sfx6') //Coin Whoosh
const sfx7 = document.getElementById('sfx7'); //Title Screen String Whoosh
const sfx7point1 = document.getElementById('sfx7.1'); //This sound effect needs to be declared twice so it can overlap.

//Title screen variables
var gameStarted = false;
const buildInfo = {
  BuildStr: '4.8anb',
  BuildNum: 4.8,
  UpdName: 'animation',
  UpdNum: 7
}

const stats = {
  Clicks: 0,
  ClickStr: '0',
  ClickValue: 1,
  ClickValueStr: '1',
  RawClickVal: 1,
  ClicksPS: 0,
  ClicksPSStr: '0',
  RawClicksPS: 0,
  Playtime: 0,
  LifetimeClicks: 0,
  LifetimeClicksStr: '0',
  LifetimeManualClicks: 0,
  LifetimeManualClicksStr: '0',
  CoinClickCount: 0,
  CoinClickCountStr: '0',
  TotalClickHelpers: 0,
  TotalClickHelpersStr: '0',
  AchievementsUnlocked: 0,
  AchievementsUnlockedStr: '0'
};

//Shop variables
var clickerCPS = 5;
var clickerCPSText = '5';
var clickerCost = 25;
var clickerCostText = '25';
var clickerScale = 0.005;
var clickersOwned = 0;
var clickersOwnedText = '0';
var clickerCPSWorth = 0;
var clickerCPSWorthText = '0';
var superClickerUnlocked = false;
var superClickerCPS = 500;
var superClickerCPSText = '500';
var superClickerCost = 150000;
var superClickerCostText = '150,000';
var superClickerScale = 0.01;
var superClickersOwned = 0;
var superClickersOwnedText = '0';
var superClickerCPSWorth = 0;
var superClickerCPSWorthText = '0';
var doublePointerUnlocked = false;
var doublePointerCPS = 1000;
var doublePointerCPSText = '1,000';
var doublePointerCost = 1000000;
var doublePointerCostText = '1,000,000';
var doublePointerScale = 0.09;
var doublePointersOwned = 0;
var doublePointersOwnedText = '0';
var doublePointerCPSWorth = 0;
var doublePointerCPSWorthText = '0';
var doAutobuy = false;

//Upgrade shop variables
var cursorCPS = 0.50;
var cursorCost = 1000000;
var cursorOwned = false;
var superCursorUnlocked = false;
var superCursorCPS = 0.75;
var superCursorCost = 10000000;
var superCursorOwned = false;
var employeeUnlocked = false;
var employeeCPS = 0.005;
var employeeCost = 50000000000;
var employeeCostText = '50,000,000,000';
var employeesOwned = 0;
var employeesOwnedText = '0';
var godFingerUnlocked = false;
var godFingerCV = 0.35;
var godFingerCost = 5000000000000;
var godFingerOwned = false;
var clickerFusionCost = ''; //This variable purely exists to get changed to 'Owned' when bought.
var clickerFusionUnlocked = false;
var clickerFusionOwned = false;

//Save and load variables
const saveData = [];
const shopData = [];
var autosavePending = false;
var manualSave = false;
var readyToSave = true;
var doAutosave = false;
var dataLoaded = false;
var achCheck = true;
var SHT;

//Buff variables
var buffRNG = 0;
var buff = 'none';
var clicksAdded;

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
var achStr = 'none';

//Audio variables
var volume = 1.0;

//Color variables
var increase = true;
var red = 0;
var green = 0;

//Optimization variables
var graphicsMode = 'quality';
var updInterval = 1;
var bgUpdInterval = 250;

//Animation variables
var startBgCreate = false;
var prompting = false;

//Debug mode variables
var generatedKey = 'debug';
var keyEntered = false;
var debugScreenState = 'closed';
var debug = false; //This boolean is purely for quickly testing added code, this will not affect anything within the normal game and should be set to false in released builds.
var debugAutoplay = false; //This boolean makes the game almost fully automated, requiring almost zero user input. It should be set to false in released builds, but if you see this message, you are welcome to enable it. However, it will automatically save the game, disable saving, and DESTROY your save on next load.
var forceBuff = false; //This boolean determines if the buff RNG value listed in buffRNGCalc() is forced or if it's always random. It should be set to false in released builds.

//Screen size variables
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var leftBorderX = 0; //Has to be given an inital value to keep the CSS parser happy, see startButton event listener for value.
var rightBorderX = 0;

//Arrays
var intArray = [stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, clickerCPS, clickerCost,
  clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, employeesOwned,
  clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, stats.AchievementsUnlocked,
  clicksAdded];

var textArray = [stats.ClickStr, stats.ClickValueStr, stats.ClicksPSStr, stats.LifetimeClicksStr, stats.LifetimeManualClicksStr, stats.CoinClickCountStr, stats.TotalClickHelpersStr,
  clickerCPSText, clickerCostText, clickersOwnedText, superClickerCPSText, superClickerCostText, superClickersOwnedText, doublePointerCPSText,
  doublePointerCostText, doublePointersOwnedText, employeeCostText, employeesOwnedText, clickerCPSWorthText, superClickerCPSWorthText,
  doublePointerCPSWorthText, stats.AchievementsUnlockedStr];

const achStrs = ['Journey Begins', 'A Good Start', 'Getting There', 'Millionare', 'Coin Pool', 'Abundance', 'Billionare', 'Excess', 'Planet of Clicks',
  'Trillionare', 'Pocket Dimension', 'Far Too Many', 'Quadrillionare', 'Coin Vortex', 'Coin-Shaped Black Hole', 'Quintillionare', 'Click Beyond',
  'Distant Beginning', 'Sextillionare', 'Breaking Point', 'Number Overflow', 'Coin Universe', 'Septillionare', 'Why?', '20 Fingers', 'For the Worthy'];

const achDescs = ['Obtain 1 lifetime click.', 'Obtain 10,000 lifetime clicks.', 'Obtain 100,000 lifetime clicks.', 'Obtain 1,000,000 lifetime clicks.',
  'Obtain 10,000,000 lifetime clicks.', 'Obtain 100,000,000 lifetime clicks.', 'Obtain 1,000,000,000 lifetime clicks.', 'Obtain 10,000,000,000 lifetime clicks.',
  'Obtain 100,000,000,000 lifetime clicks.', 'Obtain 1,000,000,000,000 lifetime clicks.', 'Obtain 10,000,000,000,000 lifeitme clicks.',
  'Obtain 1.000e14 (100 trillion) lifetime clicks.', 'Obtain 1.000e15 (1 quadrillion) lifetime clicks.', 'Obtain 1.000e16 (10 quadrillion) lifetime clicks.',
  'Obtain 1.000e17 (100 quadrillion) lifetime clicks.', 'Obtain 1.000e18 (1 quintillion) lifetime clicks.', 'Obtain 1.000e19 (10 quadrillion) lifetime clicks.',
  'Obtain 1.000e20 (100 quintillion) lifetime clicks.', 'Obtain 1.000e21 (1 sextillion) lifetime clicks.',
  'Obtain infinite lifetime clicks, breaking the game.',
  'Obtain 1.000e22 (10 sextillion) lifetime clicks.', 'Obtain 1.000e23 (100 sextillion) lifetime clicks.',
  'Obtain 1.000e24 (1 septillion) lifetime clicks.', 'Obtain 1.000e25 (10 septillion) lifetime clicks.',
  'Obtain 1.000e26 (100 septillion) lifetime clicks.', 'Obtain 1.000e27 (1 octillion) lifetime clicks.'];

var achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
  excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked, quadrillionareUnlocked, coinVortexUnlocked,
  coinShapedBlackHoleUnlocked, quintillionareUnlocked, clickBeyondUnlocked, distantBeginningUnlocked, sextillionareUnlocked, breakpointUnlocked,
  numberOverflowUnlocked, coinUniverseUnlocked, septillionareUnlocked, whyUnlocked, twentyFingersUnlocked, forTheWorthyUnlocked];

var costStringArr = [clickerCostString, superClickerCostString, doublePointerCostString, cursorCostString, superCursorCostString, employeeCostString, godFingerCostString];

var costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];

const logChoices = ['Stay a while, and listen.', 'Boo!', 'I think you may have hit the wrong button.',
  'Looking for bugs?', "You're not supposed to be here.", '<insert random variable here>',
  'Quit hacking in money!', "Didn't expect to see you here.", 'Is this thing on?',
  "I've always wondered what it would look like if i wrote a really long message into the debug console so I'm just gonna keep typing until I feel like I've typed enough which is actually a lot harder than it seems considering I need to figure out what to type anyways how are you enjoying the game? I've worked very hard on it and it honestly kinda sucks but who cares at least you might be having fun! This game was honestly heavily inspired by cookie clicker and that game is really really good (way better than this one) so you should go play that instead unless you want to be so rich there won't even be enough money on the planet to match what you have.",
  'Introducing Coin Clicker: Now with less fall damage!', 'Maybe you could buy a cookie with all the coins you have.',
  "Why not try tha 'pizza' command?", "Legend says a hidden achievement will appear if you somehow obtain infinite coins... But who listens to stuff like that anyway?",
  "Hey you should try running 'exec wipeSave();' in the box below, it won't hurt anything I promise",
  `Man this whole "${buildInfo.UpdName}" update isn't that great huh?`, 'Oops, all coins!',
  "This whole random quote feature isn't a complete waste of time i swear", 'Magic!',
  'What? I like equal signs.', `Imagine having only ${textArray[0]} clicks`,
  "Finally! I've been stuck on this island for years!", 'NOTICE: Due to people trying to steal our coins from the local Coin Clicker Bank™, players will now only be receiving 0.01% of their current clicks per second. We apologize for the inconvenience.',
  "Could you open a new window? It's hot in here!", 'Get out of my room!', 'Thank you for playing Coin Clicker. We value your sacrifice to the coin gods.',];

//Initial run updates and calls
debugKeyInput.value = '';
commandInput.value = '';
volumeInput.value = volume * 100;
updateString.textContent = `the ${buildInfo.UpdName} update`;
console.info(`Running beta ${buildInfo.UpdNum} codename '${buildInfo.UpdName}' build ${buildInfo.BuildStr}`);
debugConsole += `Running beta ${buildInfo.UpdNum} codename '${buildInfo.UpdName}' build ${buildInfo.BuildStr}\n`;
buildString.textContent = `build ${buildInfo.BuildStr}`;
console.groupEnd();
var cmdScr = document.createElement('script');
var filePath = './js/cmdinterpreter.js';
cmdScr.src = filePath;
document.body.appendChild(cmdScr);
debugConsole += "Type 'help' for a list of commands. You can press Alt+Y to get back to the game screen.\n";
loadGame();

//Functions
function randomMsg(arg) {
  var selectedMsg;
  if (!isNaN(parseInt(arg))) {
    selectedMsg = logChoices[arg];
    console.log(`=== ${selectedMsg} ===`);
    debugConsole += `=== ${selectedMsg} ===\n`;
  } else if (arg == 'all') {
    for (let i = 0; i < logChoices.length; i++) {
      selectedMsg = logChoices[i];
      console.log(`${i}: === ${selectedMsg} ===`);
      debugConsole += `${i}: === ${selectedMsg} ===\n`;
    }
  } else {
    selectedMsg = logChoices[Math.floor(Math.random() * logChoices.length - 1) + 1];
    console.log(`=== ${selectedMsg} ===`);
    debugConsole += `=== ${selectedMsg} ===\n`;
  }
}

function autoplay() {
  try {
    if (debugAutoplay && readyToSave) {
      manualSave = true;
      saveGame();
      readyToSave = false;
    } else if (debugAutoplay && gameStarted) {
      costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];
      let buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy, clickerFusionBuy];
      saveInfoString.textContent = 'Saving is disabled.';
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
    autoBuyStr.style.display = 'block';
    autoBuyBtn.textContent = 'ON';
    costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost];
    let buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy];
    for (let i = -1; i < costArray.length; i++) if (stats.Clicks >= costArray[i]) buttonArray[i].click();
  } else {
    autoBuyStr.style.display = 'none';
    autoBuyBtn.textContent = 'OFF';
  }
}

function updateScreen() {
  try {
    if (!document.hidden) {
      if (buff == 'none' && gameStarted) {
        stats.RawClicksPS = stats.ClicksPS;
        stats.RawClickVal = stats.ClickValue;
        document.title = `${textArray[0]} clicks | Coin Clicker Beta v${buildInfo.UpdNum}`;
      } else if (gameStarted) document.title = `A buff is active! | Coin Clicker Beta v${buildInfo.UpdNum}`;
      else document.title = `Coin Clicker Beta v${buildInfo.UpdNum}`;
      numberFix();
      document.getElementById('debugconsole').value = debugConsole;
      clickString.textContent = `Clicks: ${textArray[0]}`;
      cpsString.textContent = `Clicks per Second: ${textArray[2]}`;
      clickValueString.textContent = `Click Value: ${textArray[1]}`;
      clickerCPSString.textContent = `CpS: +${textArray[7]}`;
      clickerCostString.textContent = `Cost: ${textArray[8]}`;
      clickersOwnedString.textContent = `Owned: ${textArray[9]}`;
      if (clickerCPSWorth != 0) clickerInfo.textContent = `Your ${textArray[9]} clickers account for ${textArray[20]} (${Math.round(intArray[20] / stats.RawClicksPS * 100)}%) Raw CpS.`;
      if (superClickerCPSWorth != 0) superClickerInfo.textContent = `Your ${textArray[12]} super clickers account for  ${textArray[21]} (${Math.round(intArray[21] / stats.RawClicksPS * 100)}%) Raw CpS.`;
      if (doublePointerCPSWorth != 0) doublePointerInfo.textContent = `Your ${textArray[15]} double pointers account for ${textArray[22]} (${Math.round(intArray[22] / stats.RawClicksPS * 100)}%) Raw CpS.`;
      cursorOwnedString.textContent = `Owned: ${cursorOwned}`;
      superCursorOwnedString.textContent = `Owned: ${superCursorOwned}`;
      employeeCostString.textContent = `Cost: ${textArray[16]}`;
      employeesOwnedString.textContent = `Owned: ${textArray[17]}`;
      godFingerOwnedString.textContent = `Owned: ${godFingerOwned}`;
      clickerFusionOwnedString.textContent = `Owned: ${clickerFusionOwned}`;
      if (cursorOwned) cursorCostString.textContent = 'Cannot buy again.';
      if (superCursorOwned) superCursorCostString.textContent = 'Cannot buy again.';
      if (godFingerOwned) godFingerCostString.textContent = 'Cannot buy again.';
      if (clickerFusionOwned) clickerFusionCostString.textContent = 'Cannot buy again.';
      if (stats.Playtime == 1000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 1000)} second.`;
      else if (stats.Playtime >= 60000 && stats.Playtime < 900000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 60000)} minute.`;
      else if (stats.Playtime >= 3600000 && stats.Playtime < 5400000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 3600000)} hour.`;
      if (stats.Playtime > 1000 && stats.Playtime < 60000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 1000)} seconds.`;
      else if (stats.Playtime > 90000 && stats.Playtime < 3600000) timePlayedString.textContent = `You have played for ${Math.round(stats.Playtime / 60000)} minutes.`;
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
        breakpoint.style.display = 'block';
        bpIcon.style.display = 'block';
      }
    } else if (game.style.display == 'block') document.title = `${textArray[0]} clicks | Coin Clicker Beta v${buildInfo.UpdNum}`;
    shopUnlockedCheck();
  } catch (error) {
    errorHandler(error);
  }
}

function shopUnlockedCheck() {
  try {
    if (cursorOwned && dataLoaded) cursorCost = 'Owned.';
    if (clickersOwned >= 25 && !superClickerUnlocked) {
      if (dataLoaded) sfx2.play();
      unlockString.textContent = 'Super Clicker unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      superClickerGroup.style.display = 'block';
      superClickerImg.style.display = 'block';
      superClickerUnlocked = !superClickerUnlocked; //True
      SHT = 500;
    } else if (superClickerUnlocked) {
      superClickerGroup.style.display = 'block';
      superClickerCPSString.textContent = `CpS: +${textArray[10]}`;
      superClickerCostString.textContent = `Cost: ${textArray[11]}`;
      superClickersOwnedString.textContent = `Owned: ${textArray[12]}`;
    }
    if (clickersOwned >= 50 && superClickersOwned >= 3 && !doublePointerUnlocked) {
      if (dataLoaded) sfx2.play();
      unlockString.textContent = 'Double Pointer unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      doublePointerGroup.style.display = 'block';
      doublePointerUnlocked = !doublePointerUnlocked; //True
      SHT = 500;
    } else if (doublePointerUnlocked) {
      doublePointerGroup.style.display = 'block';
      doublePointerCPSString.textContent = `CpS: +${textArray[13]}`;
      doublePointerCostString.textContent = `Cost: ${textArray[14]}`;
      doublePointersOwnedString.textContent = `Owned: ${textArray[15]}`;
    }
    if (cursorOwned && !superCursorUnlocked) {
      if (dataLoaded) sfx2.play();
      unlockString.textContent = 'Super Cursor unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      superCursorGroup.style.display = 'block';
      superCursorUnlocked = !superCursorUnlocked; //True
      SHT = 500;
    } else if (superCursorUnlocked) superCursorGroup.style.display = 'block';
    if (cursorOwned && superCursorOwned && !employeeUnlocked) {
      if (dataLoaded) sfx2.play();
      unlockString.textContent = 'Employee unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      employeeGroup.style.display = 'block';
      employeeUnlocked = !employeeUnlocked; //True
      SHT = 500;
    } else if (employeeUnlocked) employeeGroup.style.display = 'block';
    if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3 && cursorOwned && superCursorOwned && !godFingerUnlocked) {
      if (dataLoaded) sfx2.play();
      unlockString.textContent = 'God Finger unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      godFingerGroup.style.display = 'block';
      godFingerUnlocked = !godFingerUnlocked; //True
      SHT = 500;
    } else if (godFingerUnlocked) godFingerGroup.style.display = 'block';
    if (clickersOwned >= 150 && !clickerFusionUnlocked) {
      if (dataLoaded) sfx4.play();
      unlockString.textContent = 'Clicker Fusion unlocked!';
      if (dataLoaded) unlockString.style.display = 'block';
      clickerFusionGroup.style.display = 'block';
      clickerFusionUnlocked = !clickerFusionUnlocked; //True
      SHT = 500;
    } else if (clickerFusionUnlocked) clickerFusionGroup.style.display = 'block';
    achievementUnlockCheck();
  } catch (error) {
    errorHandler(error);
  }
}

function achievementUnlockCheck() {
  try {
    if (stats.LifetimeClicks >= 1 && !achArr[0]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Journey Begins';
      achArr[0] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000 && !achArr[1]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: A Good Start';
      achArr[1] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000 && !achArr[2]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Getting There';
      achArr[2] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000 && !achArr[3]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Millionare';
      achArr[3] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000 && !achArr[4]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Coin Pool';
      achArr[4] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000 && !achArr[5]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Abundance';
      achArr[5] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000 && !achArr[6]) {
      if (dataLoaded) sfx3.play();
      achStr = 'Achievement Unlocked: Billionare';
      achArr[6] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000 && !achArr[7]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Excess';
      achArr[7] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000 && !achArr[8]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Planet of Clicks';
      achArr[8] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000 && !achArr[9]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Trillionare';
      achArr[9] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000 && !achArr[10]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Pocket Dimension';
      achArr[10] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000 && !achArr[11]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Far Too Many';
      achArr[11] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000 && !achArr[12]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Quadrillionare';
      achArr[12] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000n && !achArr[13]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Coin Vortex';
      achArr[13] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000n && !achArr[14]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Coin-Shaped Black Hole';
      achArr[14] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000n && !achArr[15]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Quintillionare';
      achArr[15] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000n && !achArr[16]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Click Beyond';
      achArr[16] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000n && !achArr[17]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Distant Beginning';
      achArr[17] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000n && !achArr[18]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Sextillionare';
      achArr[18] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (!isFinite(stats.LifetimeClicks) && !isNaN(stats.LifetimeClicks) && !achArr[19]) {
      if (gameStarted) sfx4.play();
      achStr = 'Hidden Achievement Unlocked: Breaking Point';
      achArr[19] = true;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000000n && !achArr[20]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Number Overflow';
      achArr[20] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000000n && !achArr[21]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Coin Universe';
      achArr[21] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000000n && !achArr[22]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: septillionare';
      achArr[22] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 10000000000000000000000000n && !achArr[23]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Why?';
      achArr[23] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 100000000000000000000000000n && !achArr[24]) {
      if (dataLoaded) sfx.play();
      achStr = 'Achievement Unlocked: Twenty Fingers';
      achArr[24] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
      SHT = 500;
    }
    if (stats.LifetimeClicks >= 1000000000000000000000000000n && !achArr[25]) {
      if (gameStarted) sfx4.play();
      achStr = 'Special Achievement Unlocked; For The Worthy';
      achArr[25] = true;
      stats.AchievementsUnlocked++;
      unlockString.textContent = achStr;
      if (dataLoaded) unlockString.style.display = 'block';
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
      employeesOwned, stats.RawClickVal, stats.RawClicksPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, stats.AchievementsUnlocked, clicksAdded
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
            textArray[i] = textArray[i].replace(pattern, '$1,$2');
        } else textArray[i] = intArray[i].toExponential(3);
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function createBgElem() {
  try {
    if (startBgCreate && achArr[2]) {
      if ((titleScreen.style.display == 'block' || game.style.display != 'none') && graphicsMode == 'quality') {
        bg = document.createElement('img');
        bg.src = './img/bgdollar.png';
        bg.id = 'bg';
        bg.className = 'bg fixed';
        if (!gameStarted) {
          bg.style.left = `${Math.floor(Math.random() * screenWidth) + 1}px`;
          titleScreen.appendChild(bg);
        }
        else {
          bg.style.left = `${Math.floor(Math.random() * rightBorderX / 1.82) + leftBorderX}px`;
          game.appendChild(bg);
        }
        if (bg.offsetTop == 400 && gameStarted) game.removeChild(bg);
        else if (bg.offsetTop == 400 && !gameStarted) titleScreen.removeChild(bg);
      } else $('.bg').remove();
    }
  } catch (error) {
    errorHandler(error)
  }
}

function loadGame() {
  try {
    if (localStorage.getItem('saveData', saveData)) {
      let data = localStorage.getItem('saveData', saveData);
      let loadData = JSON.parse(data);
      if (achCheck) stats.LifetimeClicks = loadData[5];
      else if (!achCheck && loadData[0] >= 4.41) {
        if (!loadData[1]) {
          stats.Clicks = loadData[2];
          stats.ClickValue = loadData[3];
          stats.ClicksPS = loadData[4];
          stats.LifetimeClicks = loadData[5];
          stats.LifetimeManualClicks = loadData[6];
          stats.CoinClickCount = loadData[7];
          stats.TotalClickHelpers = loadData[8];
          stats.Playtime = loadData[9];
          volume = loadData[10];
          doAutobuy = loadData[11];
          keyEntered = loadData[12];
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
          if (clickersOwned >= 1) {
            clickerImg.style.animation = 'clickermov 2s forwards';
            setTimeout(function () {
              clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)';
              clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate';
            }, 3000);
          }
          if (superClickersOwned >= 1) {
            superClickerImg.style.animation = 'superclickermov 2s forwards';
            setTimeout(function () {
              superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)';
              superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate';
            }, 3000);
          }
          if (doublePointersOwned >= 1) {
            doublePointerImg.style.animation = 'doublepointermov 2s forwards';
            setTimeout(function () {
              doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)';
              doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate'
            }, 3000);
          }
          if (!achCheck) {
            setTimeout(function () {
              dataLoaded = true;
            }, 150);
          }
        } else {
          localStorage.removeItem('saveData', saveData);
          if (!achCheck) dataLoaded = true;
        }
      } else {
        localStorage.removeItem('saveData', saveData);
        if (!achCheck) dataLoaded = true;
      }
    } else if (!achCheck) dataLoaded = true;
  } catch (error) {
    errorHandler(error);
  }
}

function saveGame() {
  try {
    if (readyToSave && gameStarted) {
      if (buff != 'none') {
        savingString.textContent = 'You cannot save when a buff is occurring.';
        savingString.style.display = 'block';
        SHT = 500;
      } else {
        readyToSave = false;
        savingString.textContent = 'Saving...';
        savingString.style.display = 'block';
        let varsToPush = [buildInfo.BuildNum, debugAutoplay, stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount,
        stats.TotalClickHelpers, stats.Playtime, volume, doAutobuy, keyEntered];
        let shopVars = [cursorOwned, clickerCPS, clickerCPSWorth, clickerCost, clickersOwned];
        if (superClickerUnlocked) {
          shopVars.push(superClickerCPS);
          shopVars.push(superClickerCPSWorth);
          shopVars.push(superClickerCost);
          shopVars.push(superClickersOwned);
        } else for (let i = 0; i < 4; i++) shopVars.push(undefined);
        if (doublePointerUnlocked) {
          shopVars.push(doublePointerCPS);
          shopVars.push(doublePointerCPSWorth);
          shopVars.push(doublePointerCost);
          shopVars.push(doublePointersOwned);
        } else for (let i = 0; i < 4; i++) shopVars.push(undefined);
        if (cursorOwned) {
          shopVars.push(superCursorUnlocked);
          shopVars.push(superCursorOwned);
        } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3) {
          shopVars.push(godFingerUnlocked);
          shopVars.push(godFingerOwned);
        } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        if (superCursorOwned) {
          shopVars.push(employeeUnlocked);
          shopVars.push(employeeCost);
          shopVars.push(employeesOwned);
        } else for (let i = 0; i < 3; i++) shopVars.push(undefined);
        if (clickersOwned >= 150) {
          shopVars.push(clickerFusionUnlocked);
          shopVars.push(clickerFusionOwned);
        } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        for (let i = 0; i < varsToPush.length; i++) saveData.push(varsToPush[i]);
        localStorage.setItem('saveData', JSON.stringify(saveData));
        for (let i = 0; i < shopVars.length; i++) shopData.push(shopVars[i]);
        localStorage.setItem('shopData', JSON.stringify(shopData));
        while (saveData.length > 0) saveData.pop();
        while (shopData.length > 0) shopData.pop();
        if (manualSave) {
          savingString.textContent = 'Game saved.';
          manualSave = !manualSave; //False
        } else savingString.textContent = 'Game autosaved.';
        SHT = 500;
      }
    }
  } catch (error) {
    errorHandler(error)
  }
}

function wipeSave() {
  try {
    if (readyToSave || debugAutoplay) {
      $('.hasanim').css('-webkit-animation-play-state', 'paused');
      var prompt = confirm('This is completely irreversible and wiping your save will also refresh the page! Are you sure you wish to continue?');
      if (prompt) {
        localStorage.removeItem('saveData');
        readyToSave = !readyToSave //False
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
      savingString.textContent = '';
      unlockString.textContent = '';
      incorrectKeyLabel.textContent = '';
      if (!debugAutoplay) readyToSave = true;
      SHT = 500;
    }
  } catch (error) {
    errorHandler(error);
  }
}

function buffRNGCalc() {
  try {
    let max = 301;
    let min = 0;
    buffRNG = 0;
    if (forceBuff && buff == 'none') buffRNG = 100;
    else if (!forceBuff && buff == 'none') buffRNG = Math.floor((Math.random() * max) + min);
    if (document.hidden && buffRNG == 200) buffRNG = Math.floor((Math.random() * max) + min);
    if (buffRNG == 100 && buff == 'none') {
      if (stats.ClicksPS > 0) {
        buffStr.textContent = 'Your CpS has been doubled for 30 seconds!';
        buffStr.style.display = 'block';
        stats.RawClicksPS = stats.ClicksPS;
        stats.ClicksPS = Math.round(stats.ClicksPS * 2);
        buff = 'cpsDouble';
        window.setTimeout(buffRemoval, 30000);
      }
    } else if (buffRNG == 200 && buff == 'none') {
      if (stats.ClicksPS > 0) {
        buffStr.textContent = 'Your click value has been increased by 777% of your CpS for 5 seconds!';
        buffStr.style.display = 'block';
        stats.RawClickVal = stats.ClickValue;
        stats.ClickValue += Math.round(stats.ClicksPS * 7.77);
        buff = 'cv777%CpS';
        window.setTimeout(buffRemoval, 5000);
      }
    } else if (buffRNG == 300 && buff == 'none') {
      if (stats.ClicksPS > 0 && stats.Clicks > 0) {
        clicksAdded = Math.round(0.3 * stats.ClicksPS + 0.1 * stats.Clicks);
        stats.Clicks += clicksAdded;
        buffStr.textContent = `You got ${textArray[24]} bonus clicks!`;
        buffStr.style.display = 'block';
        buff = 'bonusClicks';
        window.setTimeout(buffRemoval, 2000);
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function buffRemoval() {
  try {
    buffStr.style.display = 'none';
    if (buff == 'cpsDouble') {
      stats.ClicksPS = stats.RawClicksPS;
      stats.ClickValue = stats.RawClickVal;
    }
    else if (buff == 'cv777%CpS') stats.ClickValue = stats.RawClickVal;
    else if (buff == 'bonusClicks') clicksAdded = 0;
    buff = 'none';
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
    ftwIcon.style.color = `rgb(${red}, 0, 0)`;
    bpIcon.style.color = `rgb(${red}, 0, 0)`;
    costArray = [clickerCost, superClickerCost, doublePointerCost, cursorCost, superCursorCost, employeeCost, godFingerCost, clickerFusionCost];
    for (let i = 0; i < costArray.length; i++) {
      if (stats.Clicks >= costArray[i]) {
        if (i < 7) costStringArr[i].style.color = `rgb(0, ${green}, 0)`;
        if (i >= 3 && i < 7 || i == 8 && clickersOwned >= 150 && !clickerFusionOwned) {
          upgradeButton.style.borderInlineColor = `rgb(0, ${green}, 0)`;
          upgradeButton.style.borderBlockColor = upgradeButton.style.borderInlineColor;
        }
      } else {
        if (i < 7) costStringArr[i].style.color = 'rgb(0, 0, 0)';
        if (i >= 3 && i < 7 || i == 8 && clickerFusionOwned) {
          upgradeButton.style.borderInlineColor = 'rgb(0, 0, 0)';
          upgradeButton.style.borderBlockColor = upgradeButton.style.borderInlineColor;
        }
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

function createBase64Key() {
  try {
    if (!gameStarted || debug) {
      generatedKey = 'debug';
      let addArray = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M',
        'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2',
        '3', '4', '5', '6', '7', '8', '9'];
      for (let i = 30; i > 0; i--) {
        let val = (Math.floor(Math.random() * 61) + 1);
        generatedKey += addArray[val];
        if (i == 1) {
          let base64key = btoa(generatedKey);
          key.textContent = base64key;
          key.id = 'key';
          console.log(`Unencoded: ${generatedKey}`);
          console.log(`Base64: ${base64key}`);
          debugConsole += `Unencoded: ${generatedKey}\n`;
          debugConsole += `Base64: ${base64key}\n`;
        }
      }
    }
  } catch (error) {
    errorHandler(error);
  }
}

//Event listeners
startButton.addEventListener('click', function () {
  sfx.play();
  bgm.play();
  if (generatedKey != 'debug') key.style.display = 'none';
  titleScreen.style.display = 'none';
  game.style.display = 'block';
  shopPanel.style.display = 'block';
  statsPanel.style.display = 'block';
  gameStarted = !gameStarted; //True
  startBgCreate = true;
  achCheck = false;
  loadGame();
  randomMsg();
  if (!doAutosave) saveInfoString.textContent = 'Autosave is disabled.';
  sourceNote.textContent = `Debug states: ${debug}, ${debugAutoplay}`;
  sourceNote.style.position = 'fixed';
  if (screenWidth == 1920) sourceNote.style.top = '52vw';
  else sourceNote.style.top = '51vw';
  sourceNote.style.animation = 'dbgstringmov 1s ease-out forwards';
  sourceNote.className = 'hasanim';
  if (debug) {
    superClickerUnlocked = !superClickerUnlocked; //True
    doublePointerUnlocked = !doublePointerUnlocked; //True 
    superCursorUnlocked = !superCursorUnlocked; //True
    employeeUnlocked = !employeeUnlocked; //True
    godFingerUnlocked = !godFingerUnlocked; //True
    clickerFusionUnlocked = !clickerFusionUnlocked //True
    game.appendChild(sourceNote);
  }
  if (debugAutoplay) game.appendChild(sourceNote);
  $('.borders').css('display', 'block');
  leftBorderX = document.getElementById('leftborder').getBoundingClientRect().left;
  rightBorderX = document.getElementById('rightborder').getBoundingClientRect().left;
});

coinParticle.addEventListener('animationend', function () {
  coinParticle.style.opacity = '0%';
});

coin.addEventListener('click', function (event) {
  try {
    sfx.play();
    if (!debugAutoplay && graphicsMode == 'quality') {
      coinParticle = document.createElement('img');
      coinParticle.src = './img/coin.png';
      coinParticle.id = 'coinparticle';
      coinParticle.className = 'coinparticle hasanim fixed';
      coinParticle.style.top = `${event.clientY - 10}px`;
      coinParticle.style.left = `${event.clientX - 17}px`;
      coinParticle.style.opacity = '100%';
      coinParticle.style.animation = 'coinpartmov 0.5s ease-in forwards';
      game.appendChild(coinParticle);
    }
    if (Math.sign(stats.Clicks) != -1 && Math.sign(stats.LifetimeClicks) != -1 && Math.sign(stats.ClickValue) != -1 && Math.sign(stats.CoinClickCount) != -1) {
      stats.Clicks += stats.ClickValue;
      stats.LifetimeClicks += stats.ClickValue;
      stats.LifetimeManualClicks += stats.ClickValue;
      stats.CoinClickCount++;
    } else {
      debugConsole += `${stats.Clicks}, ${stats.LifetimeClicks}, ${stats.ClickValue}, ${stats.CoinClickCount}\n`;
      throw new Error('Non-absolute values in coinClick. Check debugConsole for more info.');
    }
  } catch (error) {
    errorHandler(error);
  }
});

clickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= clickerCost) {
    if (clickerScale == 0.002) clickerScale = 0.003;
    sfx5.play();
    stats.Clicks -= clickerCost;
    clickersOwned++;
    clickerCPSWorth += clickerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (clickerCPS * 2);
      stats.RawClicksPS += clickerCPS;
      clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs(clickerScale * stats.RawClicksPS) + (Math.floor(Math.random() * 15) + 3)));
      clickerCost += Math.round(clickersOwned + (5 * stats.RawClicksPS) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
      stats.RawClickVal += Math.round(clickersOwned * 0.5 + 0.01 * stats.RawClicksPS);
    } else {
      stats.ClicksPS += clickerCPS;
      clickerCPS = Math.abs(Math.round(clickersOwned * 2 + Math.abs((clickerScale * stats.ClicksPS)) + (Math.floor(Math.random() * 15) + 3)));
      clickerCost += Math.round(clickersOwned + (5 * stats.ClicksPS) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
      stats.ClickValue += Math.round(clickersOwned * 0.5 + 0.01 * stats.RawClicksPS);
    }
    if (clickersOwned == 1) {
      clickerImg.style.animation = 'clickermov 2s forwards';
      setTimeout(function () {
        clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)';
        clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate';
      }, 3000);
    }
    clickerScale -= 0.01;
    stats.TotalClickHelpers++;
  }
});

superClickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= superClickerCost) {
    if (superClickerScale == 0.002) superClickerScale = 0.006;
    sfx5.play();
    stats.Clicks -= superClickerCost;
    superClickersOwned++;
    superClickerCPSWorth += superClickerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (superClickerCPS * 2);
      stats.RawClicksPS += superClickerCPS;
      superClickerCPS = 700 + Math.abs(Math.round(superClickersOwned * 15 + (superClickerScale * stats.RawClicksPS)));
      superClickerCost += Math.round(superClickerCost + (10 * stats.RawClicksPS) + superClickersOwned * 4 + (Math.floor(Math.random() * 30000) + 10000));
    } else {
      stats.ClicksPS += superClickerCPS;
      superClickerCPS = 700 + Math.abs(Math.round(superClickersOwned * 15 + (superClickerScale * stats.ClicksPS)));
      superClickerCost += Math.round(superClickerCost + (10 * stats.ClicksPS) + superClickersOwned * 4 + (Math.floor(Math.random() * 30000) + 10000));
    }
    if (buff != 'none') stats.RawClickVal += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS);
    if (superClickersOwned == 1) {
      superClickerImg.style.animation = 'superclickermov 2s forwards';
      setTimeout(function () {
        superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)';
        superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate';
      }, 3000);
    }
    superClickerScale = superClickerScale - 0.002;
    stats.TotalClickHelpers++;
  }
});

doublePointerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= doublePointerCost) {
    if (doublePointerScale == 0.03) doublePointerScale = 0.09;
    sfx5.play();
    stats.Clicks -= doublePointerCost;
    doublePointersOwned++;
    doublePointerCPSWorth += doublePointerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (doublePointerCPS * 2);
      stats.RawClicksPS += doublePointerCPS;
      doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * stats.RawClicksPS) + Math.round(Math.random() * 3000) + 1000));
      doublePointerCost += Math.round(doublePointersOwned + (100 * stats.RawClicksPS) + doublePointersOwned * 5 + (Math.floor(Math.random() * 500000) + 250000));
    } else {
      stats.ClicksPS += doublePointerCPS;
      doublePointerCPS = Math.abs(Math.round(doublePointersOwned * 5 + (doublePointerScale * stats.ClicksPS) + Math.round(Math.random() * 3000) + 1000));
      doublePointerCost += Math.round(doublePointersOwned + (100 * stats.ClicksPS) + doublePointersOwned * 5 + (Math.floor(Math.random() * 1000000) + 500000));
    }
    if (buff != 'none') stats.RawClickVal += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS);
    if (doublePointersOwned == 1) {
      doublePointerImg.style.animation = 'doublepointermov 2s forwards';
      setTimeout(function () {
        doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)';
        doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate'
      }, 3000);
    }
    doublePointerScale -= 0.03;
    stats.TotalClickHelpers++;
  }
});
upgradeButton.addEventListener('click', function () {
  sfx.play();
  shopPanel.style.display = 'none';
  upgradeShopPanel.style.display = 'block';
  if (employeeUnlocked) employeeImg.style.display = 'block';
  else employeeImg.style.display = 'none';
  if (clickersOwned == 0) clickerImg.style.display = 'none';
  if (superClickersOwned == 0) superClickerImg.style.display = 'none';
  if (doublePointersOwned == 0) doublePointerImg.style.display = 'none';
});

upgradeRTS.addEventListener('click', function () {
  sfx.play();
  shopPanel.style.display = 'block';
  upgradeShopPanel.style.display = 'none';
  clickerImg.style.display = 'block';
  if (superClickerUnlocked) superClickerImg.style.display = 'block';
  if (doublePointerUnlocked) doublePointerImg.style.display = 'block';
});

cursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= cursorCost) {
    sfx5.play();
    stats.Clicks -= cursorCost;
    cursorOwned = !cursorOwned; //True
    if (buff == 'cpsDouble') {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (cursorCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * cursorCPS);
    } else stats.ClicksPS += Math.round(stats.ClicksPS * cursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.08 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(0.08 * stats.RawClicksPS);
    cursorCost = 'Owned.';
    stats.TotalClickHelpers++;
  }
});

superCursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= superCursorCost) {
    sfx5.play();
    stats.Clicks -= superCursorCost;
    superCursorOwned = !superCursorOwned; //True
    if (buff == 'cpsDouble') {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (superCursorCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * superCursorCPS);
    } else stats.ClicksPS += Math.round(stats.ClicksPS * superCursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.09 * stats.RawClicksPS);
    else stats.ClickValue += Math.round(0.09 * stats.RawClicksPS);
    superCursorCost = 'Owned.';
    stats.TotalClickHelpers++;
  }
});

employeeBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= employeeCost) {
    sfx5.play();
    stats.Clicks -= employeeCost;
    employeesOwned++;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += Math.round(stats.RawClicksPS * (employeeCPS * 2));
      stats.RawClicksPS += Math.round(stats.ClicksPS * employeeCPS);
    }
    else stats.ClicksPS += Math.round(stats.ClicksPS * employeeCPS);
    employeeCost += (employeesOwned * employeeCost);
    employeeCPS *= 2;
    stats.TotalClickHelpers++;
  }
});

godFingerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= godFingerCost) {
    sfx5.play();
    stats.Clicks -= godFingerCost;
    godFingerOwned = !godFingerOwned; //True
    if (buff == 'cv777%CpS') stats.RawClickVal += Math.round(godFingerCV * stats.RawClickVal);
    else stats.ClickValue += Math.round(godFingerCV * stats.ClickValue);
    godFingerCost = 'Owned.';
    stats.TotalClickHelpers++;
  }
});

clickerFusionBuy.addEventListener('click', function () {
  sfx.play();
  if (clickersOwned >= 150 && !clickerFusionOwned) {
    sfx5.play();
    clickerFusionOwned = !clickerFusionOwned; //True
    clickerCPSWorth += Math.round(clickerCPSWorth * 1.5);
    if (buff == 'cpsDouble') {
      stats.ClicksPS += Math.round((clickerCPSWorth * 1.5) * 2);
      stats.RawCPS += Math.round(clickerCPSWorth * 1.5);
    }
    else stats.ClicksPS += Math.round(clickerCPSWorth * 1.5);
    clickerFusionCost = 'Owned';
    stats.TotalClickHelpers++;
  }
});

saveButton.addEventListener('click', function () {
  sfx.play();
  manualSave = true;
  saveGame();
});

saveButton.addEventListener('mouseover', function () {
  savingString.style.top = '3.6vw';
});

saveButton.addEventListener('mouseleave', function () {
  savingString.style.top = '2.6vw';
});

wipeSaveButton.addEventListener('click', function () {
  sfx.play();
  wipeSave();
});

document.addEventListener('keydown', function (event) {
  try {
    titleScreen.appendChild(key);
    if ((event.key == 's' || event.key == 'S') && event.ctrlKey && debugScreenState == 'closed' && !debugAutoplay) {
      event.preventDefault();
      manualSave = true;
      saveGame();
    } else if ((event.key == 'y' || event.key == 'Y') && event.ctrlKey) {
      event.preventDefault();
      createBase64Key();
    } else if ((event.key == 'y' || event.key == 'Y') && event.altKey) {
      event.preventDefault();
      if (gameStarted && debugScreenState == 'closed' && game.style.display == 'block') {
        debugScreenState = 'open';
        game.style.display = 'none';
        if (!keyEntered) debugKeyInputScreen.style.display = 'block';
        else if (keyEntered) debugScreen.style.display = 'block';
      } else if (gameStarted && debugScreenState == 'open' && game.style.display == 'none') {
        debugScreenState = 'closed';
        debugKeyInputScreen.style.display = 'none';
        debugScreen.style.display = 'none';
        game.style.display = 'block';
      }
    } else if (event.key == ' ' && titleScreen.style.display == 'block') startButton.click();
    else if ((event.key == 'f' || event.key == 'F') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      debug = !debug; //True
      doAutosave = !doAutosave; //False
      startButton.click();
    } else if ((event.key == 'a' || event.key == 'A') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      prompting = !prompting; //True
      var prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will not affect your save.)');
      if (prompt) {
        debugAutoplay = !debugAutoplay; //True
        startButton.click();
      } else prompting = !prompting //False
    } else if ((event.key == 'c' || event.key == 'C') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      debug = !debug; //True
      doAutosave = !doAutosave; //False
      prompting = !prompting; //True
      var prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will just enable debug mode, not debug autoplay.)');
      if (prompt) debugAutoplay = !debugAutoplay; //True
      else prompting = !prompting; //False
      startButton.click();
    }
  } catch (error) {
    errorHandler(error);
  }
});

debugKeySubmit.addEventListener('click', function (event) {
  event.preventDefault();
  try {
    var dmkInput = atob(debugKeyInput.value);
  } catch (error) {
    dmkInput = debugKeyInput.value;
  }
  if (dmkInput == generatedKey) {
    debugKeyInputScreen.style.display = 'none';
    debugScreen.style.display = 'block';
    keyEntered = !keyEntered; //True
  } else {
    incorrectKeyLabel.style.display = 'block';
    incorrectKeyLabel.textContent = 'Incorrect key.';
    SHT = 500;
  }
});

document.addEventListener('mousemove', function (event) {
  let left = event.clientX;
  let top = event.clientY;
  clickerInfo.style.left = `${leftBorderX}px`;
  clickerInfo.style.top = `${top - 35}px`;
  superClickerInfo.style.top = `${top - 35}px`;
  superClickerInfo.style.left = `${leftBorderX}px`;
  doublePointerInfo.style.left = `${leftBorderX}px`;
  doublePointerInfo.style.top = `${top - 35}px`;
  achievementsLabel.style.left = `${left - achievementsLabel.getBoundingClientRect().width / 2}px`;
  achievementsLabel.style.top = `${top}px`;
  settingsLabel.style.left = `${left - settingsLabel.getBoundingClientRect().width / 2}px`;
  settingsLabel.style.top = `${top}px`;
  clickerFusionInfo.style.top = `${top - 35}px`;
  clickerFusionInfo.style.left = `${leftBorderX}px`;
  autoBuyInfo.style.top = `${top}px`;
  autoBuyInfo.style.left = `${left - autoBuyInfo.getBoundingClientRect().width / 2}px`;
});

achievementsButton.addEventListener('click', function () {
  sfx.play();
  game.style.display = 'none';
  achievementsPanel.style.display = 'block';
  achNameStr.textContent = achStrs[0];
  achDescStr.textContent = achDescs[0];
  achUnlockStr.textContent = `Unlocked: ${achArr[0]}`;
});

backToGame.addEventListener('click', function () {
  sfx.play();
  game.style.display = 'block';
  achievementsPanel.style.display = 'none';
});

journeyBegins.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[0];
  achDescStr.textContent = achDescs[0];
  achUnlockStr.textContent = `Unlocked: ${achArr[0]}`;
});

aGoodStart.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[1];
  achDescStr.textContent = achDescs[1];
  achUnlockStr.textContent = `Unlocked: ${achArr[1]}`;
});

gettingThere.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[2];
  achDescStr.textContent = achDescs[2];
  achUnlockStr.textContent = `Unlocked: ${achArr[2]}`;
});

millionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[3];
  achDescStr.textContent = achDescs[3];
  achUnlockStr.textContent = `Unlocked: ${achArr[3]}`;
});

coinPool.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[4];
  achDescStr.textContent = achDescs[4];
  achUnlockStr.textContent = `Unlocked: ${achArr[4]}`;
});

abundance.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[5];
  achDescStr.textContent = achDescs[5];
  achUnlockStr.textContent = `Unlocked: ${achArr[5]}`;
});

billionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[6];
  achDescStr.textContent = achDescs[6];
  achUnlockStr.textContent = `Unlocked: ${achArr[6]}`;
});

excess.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[7];
  achDescStr.textContent = achDescs[7];
  achUnlockStr.textContent = `Unlocked: ${achArr[7]}`;
});

planetOfClicks.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[8];
  achDescStr.textContent = achDescs[8];
  achUnlockStr.textContent = `Unlocked: ${achArr[8]}`;
});

trillionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[9];
  achDescStr.textContent = achDescs[9];
  achUnlockStr.textContent = `Unlocked: ${achArr[9]}`;
});

pocketDimension.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[10];
  achDescStr.textContent = achDescs[10];
  achUnlockStr.textContent = `Unlocked: ${achArr[10]}`;
});

farTooMany.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[11];
  achDescStr.textContent = achDescs[11];
  achUnlockStr.textContent = `Unlocked: ${achArr[11]}`;
});

quadrillionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[12];
  achDescStr.textContent = achDescs[12];
  achUnlockStr.textContent = `Unlocked: ${achArr[12]}`;
});

coinVortex.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[13];
  achDescStr.textContent = achDescs[13];
  achUnlockStr.textContent = `Unlocked: ${achArr[13]}`;
});

coinShapedBlackHole.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[14];
  achDescStr.textContent = achDescs[14];
  achUnlockStr.textContent = `Unlocked: ${achArr[14]}`;
});

quintillionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[15];
  achDescStr.textContent = achDescs[15];
  achUnlockStr.textContent = `Unlocked: ${achArr[15]}`;
});

clickBeyond.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[16];
  achDescStr.textContent = achDescs[16];
  achUnlockStr.textContent = `Unlocked: ${achArr[16]}`;
});

distantBeginning.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[17];
  achDescStr.textContent = achDescs[17];
  achUnlockStr.textContent = `Unlocked: ${achArr[17]}`;
});

sextillionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[18];
  achDescStr.textContent = achDescs[18];
  achUnlockStr.textContent = `Unlocked: ${achArr[18]}`;
});

breakpoint.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[19];
  achDescStr.textContent = achDescs[19];
  achUnlockStr.textContent = `Unlocked: ${achArr[19]}`;
});

numberOverflow.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[20];
  achDescStr.textContent = achDescs[20];
  achUnlockStr.textContent = `Unlocked: ${achArr[20]}`;
});

coinUniverse.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[21];
  achDescStr.textContent = achDescs[21];
  achUnlockStr.textContent = `Unlocked: ${achArr[21]}`;
});

septillionare.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[22];
  achDescStr.textContent = achDescs[22];
  achUnlockStr.textContent = `Unlocked: ${achArr[22]}`;
});

why.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[23];
  achDescStr.textContent = achDescs[23];
  achUnlockStr.textContent = `Unlocked: ${achArr[23]}`;
});

twentyFingers.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[24];
  achDescStr.textContent = achDescs[24];
  achUnlockStr.textContent = `Unlocked: ${achArr[24]}`;
});

forTheWorthy.addEventListener('click', function () {
  sfx.play();
  achNameStr.textContent = achStrs[25];
  achDescStr.textContent = achDescs[25];
  achUnlockStr.textContent = `Unlocked: ${achArr[25]}`;
});

settingsButton.addEventListener('click', function () {
  sfx.play();
  settingsPanel.style.display = 'block';
  game.style.display = 'none';
});

backToGame2.addEventListener('click', function () {
  sfx.play();
  game.style.display = 'block';
  settingsPanel.style.display = 'none';
});

volumeInput.addEventListener('change', function () {
  try {
    if (volumeInput.value >= 0 && volumeInput.value <= 100) {
      volume = volumeInput.value / 100;
      let sndArr = [sfx, sfx2, sfx3, sfx4, sfx5];
      for (let i = 0; i < sndArr.length; i++) sndArr[i].volume = volume;
    } else volumeInput.value = '';
  } catch (error) {
    errorHandler(error);
  }
});

document.addEventListener('click', function () {
  if (debugAutoplay) sfx.volume = volume;
});

autoBuyBtn.addEventListener('click', function () {
  if (doAutobuy) {
    autoBuyBtn.textContent = 'OFF';
    doAutobuy = false;
  } else {
    autoBuyBtn.textContent = 'ON';
    doAutobuy = true;
  }
});

betaString.addEventListener('animationend', function () {
  startBgCreate = !startBgCreate //True
});

window.addEventListener('beforeunload', function (event) {
  if (buff != 'none' && doAutosave) {
    event.stopImmediatePropagation();
    $('.bg').remove();
    saveGame();
  }
});

bgm.addEventListener('ended', function () {
  bgm = new Audio();
  bgm.src = './snd/bgm.mp3';
  bgm.play();
});

document.addEventListener('loadevt', function () {
  try {
    loadingScreen.style.display = 'none';
    hiddenWhileLoading.style.display = 'block';
    //Animations need to be paused and run like this to make sure title screen animations play properly when the autoplay prompt is on screen.
    $('.hasanim').css('-webkit-animation-play-state', 'paused');
    $('.coins').css('-webkit-animation-play-state', 'running');
    $('#skipintrostring').css('-webkit-animation-play-state', 'running');
    setTimeout(function () {
      if (!gameStarted) sfx6.play();
      smallCoin1.style.animation = 'smallCoinMove1 1.5s 0.5s forwards';
      smallCoin2.style.animation = 'smallCoinMove2 1.5s 0.5s forwards';
      smallCoin3.style.animation = 'smallCoinMove3 1.5s 0.5s forwards';
      smallCoin4.style.animation = 'smallCoinMove4 1.5s 0.5s forwards';
      setTimeout(function () {
        if (!prompting) $('#tsclicker').css('-webkit-animation-play-state', 'running');
        setTimeout(function () {
          if (!gameStarted) sfx7.play();
          if (!prompting) $('#title').css('-webkit-animation-play-state', 'running');
          skipIntroString.style.animation = 'btmstringmov 1s ease-in forwards';
          setTimeout(function () {
            if (!gameStarted) sfx7point1.play();
            if (!prompting) $('#betastring').css('-webkit-animation-play-state', 'running');
            setTimeout(function () {
              if (!gameStarted) sfx7.play();
              if (!prompting) $('#updatestring').css('-webkit-animation-play-state', 'running');
              updateString.textContent = navigator.userAgent;
              setTimeout(function () {
                $('#title').css('-webkit-animation-play-state', 'paused');
                smallCoin3.style.rotate = '270deg';
                smallCoin4.style.rotate = '270deg';
                smallCoin1.style.animation = 'smallCoinSpin1 10s linear infinite';
                smallCoin2.style.animation = 'smallCoinSpin2 10s linear infinite';
                smallCoin3.style.animation = 'smallCoinSpin3 10s linear infinite';
                smallCoin4.style.animation = 'smallCoinSpin4 10s linear infinite';
                if (!gameStarted) bgm.play();
                setTimeout(function () {
                  if (!prompting) $('#startbutton').css('-webkit-animation-play-state', 'running');
                  setTimeout(function () {
                    if (!prompting) {
                      $('.btmstr').css('-webkit-animation-play-state', 'running');
                      $('#bmbarnote').css('-webkit-animation-play-state', 'running');
                    }
                  }, 1600); //8.4s
                }, 1800); //6.8s
              }, 900); //5.0s
            }, 400); //4.1s
          }, 500); //3.7s
        }, 300); //3.2s
      }, 1200); //2.9s
    }, 1700); //1.7s
  } catch (error) {
    errorHandler(error);
  }
});

//Function intervals
setInterval(timedLabelCount, 1);
setInterval(autoplay, 150);
setInterval(rgChange, 25);
setInterval(updateScreen, updInterval);
setInterval(cpsClick, 100);
setInterval(buffRNGCalc, 1000);
setInterval(autobuy, 1);
setInterval(createBgElem, bgUpdInterval);

setInterval(function () {
  stats.Playtime += 1000;
}, 1000);

setInterval(function () {
  if (doAutosave && buff == 'none' && gameStarted) {
    manualSave = false;
    saveGame();
  } else if (buff != 'none') autosavePending = !autosavePending //True
}, 60000);

setInterval(function () {
  if (graphicsMode == 'quality') {
    if (game.style.display == 'none') $('.coinparticle').remove();
    if (document.hidden) $('.bg').remove();
    updInterval = 1;
    bgUpdInterval = 150;
  } else if (graphicsMode == 'performance') updInterval = 250;
}, 1);

setInterval(function () {
  const particleClass = document.querySelectorAll('.coinparticle');
  if (particleClass.length > 25) for (let i = 20; i > 0; i--) particleClass[i].parentNode.removeChild(particleClass[i]);
}, 1);

setInterval(function () {
  if (autosavePending) savingString.textContent = 'Waiting for buff...';
  if (buff == 'none' && autosavePending) {
    autosavePending = false;
    manualSave = false;
    saveGame();
  }
}, 1);

const loadEvt = new Event('loadevt');
document.dispatchEvent(loadEvt);
