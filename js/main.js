/*
Coin Clicker Update 7 Codename 'Animation'
Build 5.11 Animation Beta

Spoilers ahead! 
*/

//Loading screen and error handler
const loadingScreen = document.getElementById('loadingscreen'),
  hiddenWhileLoading = document.getElementById('hideloading'),
  eElement = document.createElement('p');

function errorHandler(error) {
  eElement.textContent = `Error in script. Check debug console for full stack trace. (${error})`;
  debugConsole += `${error.stack}\n`;
  eElement.style.position = 'fixed';
  eElement.style.top = '-0.3vh';
  eElement.style.fontSize = '0.7vw';
  eElement.style.display = 'block';
  document.body.appendChild(eElement);
}

const runningBrowserString = document.getElementById('runningbrowserstring'),
  titleScreen = document.getElementById('titlescreen');
var debugConsole = document.getElementById('debugconsole').textContent,
  browserStr = 'Undetected',
  os = 'Undetected',
  url = window.location.href;
sysCheck();

function sysCheck() {
  let userAgent = navigator.userAgent,
    userAgentData = navigator.userAgentData,
    browsers = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'OPR', 'Edg'],
    oses = ['X11', 'Windows', 'Mac', 'Linux'],
    index = browsers.length - 1,
    brandIndex = 0,
    osIndex = oses.length - 1;
  while (index > -1 && userAgent.indexOf(browsers[index]) == -1) index--;
  if (index > -1) browserStr = browsers[index];
  if (browserStr == 'Chrome') brandIndex = 0; else if (browserStr == 'OPR') brandIndex = 2;
  if (userAgentData != undefined) { os = userAgentData.platform; browserStr = `${userAgentData.brands[brandIndex].brand} v${userAgentData.brands[brandIndex].version}`; } else if (userAgent.includes('PlayStation')) os = 'PlayStation'; else { while (osIndex > -1 && userAgent.indexOf(oses[osIndex]) == -1) osIndex--; if (osIndex > -1) os = oses[osIndex]; if (os == 'X11') os = 'Unix'; }
  if (browserStr == 'Edg') browserStr = 'Edge'; else if (browserStr == 'OPR') browserStr = 'Opera';
  if (url == 'https://coin-clicker.surge.sh/') url = 'Surge'; else if (window.location.pathname.includes('index.html')) url = 'Local File';
  runningBrowserString.textContent = `${browserStr} on ${os} saying hello from ${url}`;
  titleScreen.style.display = 'block';
}

//Title screen
const sourceNote = document.getElementById('sourcenote'),
  buildString = document.getElementById('buildstring'),
  basedOnBuildString = document.getElementById('basedonbuildstring'),
  skipIntroString = document.getElementById('skipintrostring'),
  updateString = document.getElementById('updatestring'),
  betaString = document.getElementById('betastring'),
  startButton = document.getElementById('startbutton'),
  smallCoin1 = document.getElementById('smallcoin1'),
  smallCoin2 = document.getElementById('smallcoin2'),
  smallCoin3 = document.getElementById('smallcoin3'),
  smallCoin4 = document.getElementById('smallcoin4'),
  tsClicker = document.getElementById('tsclicker'),
  title = document.getElementById('title'),
  key = document.createElement('p'),

  //Game screen
  game = document.getElementById('gamescreen'),
  coin = document.getElementById('coin'),
  clickString = document.getElementById('clickstring'),
  cpsString = document.getElementById('cpsstring'),
  clickValueString = document.getElementById('clickvaluestring'),
  unlockString = document.getElementById('unlockstring'),
  saveButton = document.getElementById('savebutton'),
  savingString = document.getElementById('savingstring'),
  saveInfoString = document.getElementById('saveinfo'),
  buffStr = document.getElementById('bufflabel'),
  fpsLabel = document.getElementById('fpslabel'),

  //Shop panel
  shopPanel = document.getElementById('shoppanel'),
  autoBuyStr = document.getElementById('autobuystring'),
  clickerBuy = document.getElementById('clickerbuy'),
  clickerCPSString = document.getElementById('clickercpsstring'),
  clickerCostString = document.getElementById('clickercoststring'),
  clickerInfo = document.getElementById('clickerinfo'),
  clickersOwnedString = document.getElementById('clickersownedstring'),
  clickerImg = document.getElementById('clickerimg'),
  superClickerGroup = document.getElementById('superclicker'),
  superClickerBuy = document.getElementById('superclickerbuy'),
  superClickerCPSString = document.getElementById('superclickercpsstring'),
  superClickerCostString = document.getElementById('superclickercoststring'),
  superClickersOwnedString = document.getElementById('superclickersownedstring'),
  superClickerInfo = document.getElementById('superclickerinfo'),
  superClickerImg = document.getElementById('superclickerimg'),
  doublePointerGroup = document.getElementById('doublepointer'),
  doublePointerBuy = document.getElementById('doublepointerbuy'),
  doublePointerCPSString = document.getElementById('doublepointercpsstring'),
  doublePointerCostString = document.getElementById('doublepointercoststring'),
  doublePointersOwnedString = document.getElementById('doublepointersownedstring'),
  doublePointerInfo = document.getElementById('doublepointerinfo'),
  doublePointerImg = document.getElementById('doublepointerimg'),

  //Upgrade shop panel
  upgradeShopPanel = document.getElementById('upgradeshoppanel'),
  upgradeButton = document.getElementById('upgradebutton'),
  upgradeRTS = document.getElementById('shopreturnbutton'),
  cursorBuy = document.getElementById('cursorbuy'),
  cursorCostString = document.getElementById('cursorcoststring'),
  cursorOwnedString = document.getElementById('cursorownedstring'),
  cursorImg = document.getElementById('cursorimg'),
  superCursorGroup = document.getElementById('supercursor'),
  superCursorBuy = document.getElementById('supercursorbuy'),
  superCursorCostString = document.getElementById('supercursorcoststring'),
  superCursorOwnedString = document.getElementById('supercursorownedstring'),
  superCursorImg = document.getElementById('supercursorimg'),
  employeeGroup = document.getElementById('employee'),
  employeeBuy = document.getElementById('employeebuy'),
  employeeCostString = document.getElementById('employeecoststring'),
  employeesOwnedString = document.getElementById('employeesownedstring'),
  employeeImg = document.getElementById('employeeimg'),
  godFingerGroup = document.getElementById('godfinger'),
  godFingerBuy = document.getElementById('godfingerbuy'),
  godFingerCostString = document.getElementById('godfingercoststring'),
  godFingerOwnedString = document.getElementById('godfingerownedstring'),
  godFingerImg = document.getElementById('godfingerimg'),
  clickerFusionGroup = document.getElementById('clickerfusion'),
  clickerFusionBuy = document.getElementById('clickerfusionbuy'),
  clickerFusionCostString = document.getElementById('clickerfusioncoststring'),
  clickerFusionOwnedString = document.getElementById('clickerfusionownedstring'),
  clickerFusionInfo = document.getElementById('clickerfusioninfo'),
  clickerFusionImg = document.getElementById('clickerfusionimg'),

  //Stat panel
  statsPanel = document.getElementById('statspanel'),
  timePlayedString = document.getElementById('timestring'),
  lifetimeClicksString = document.getElementById('lifetimeclicksstring'),
  lifetimeManualClicksString = document.getElementById('lifetimemanualclicksstring'),
  coinClickCountString = document.getElementById('coinclickcountstring'),
  totalClickHelpersString = document.getElementById('totalclickhelpersstring'),
  achievementsUnlockedString = document.getElementById('achievementsunlockedstring'),
  rawCPSString = document.getElementById('rawcpsstring'),
  rawCVString = document.getElementById('rawcvstring'),
  offlineCPSString = document.getElementById('offlinecpsstring'),

  //Debug screen
  debugKeyInputScreen = document.getElementById('debuginputscreen'),
  debugKeyInput = document.getElementById('debugkeyinput'),
  debugKeySubmit = document.getElementById('debugkeysubmit'),
  incorrectKeyLabel = document.getElementById('incorrectkeyentered'),
  debugScreen = document.getElementById('debugscreen'),
  cmdForm = document.getElementById('debugconsinput'),
  commandInput = document.getElementById('debugcmdinput'),

  //Achievement screen
  achievementsButton = document.getElementById('achievementsbutton'),
  achievementsLabel = document.getElementById('achievementslabel'),
  achievementsPanel = document.getElementById('achievementsscreen'),
  achNameStr = document.getElementById('achievementnamestring'),
  achDescStr = document.getElementById('achievementdescriptionstring'),
  achUnlockStr = document.getElementById('achievementunlockedstring'),
  journeyBegins = document.getElementById('journeybegins'),
  aGoodStart = document.getElementById('agoodstart'),
  gettingThere = document.getElementById('gettingthere'),
  millionare = document.getElementById('millionare'),
  coinPool = document.getElementById('coinpool'),
  abundance = document.getElementById('abundance'),
  billionare = document.getElementById('billionare'),
  excess = document.getElementById('excess'),
  planetOfClicks = document.getElementById('planetofclicks'),
  trillionare = document.getElementById('trillionare'),
  pocketDimension = document.getElementById('pocketdimension'),
  farTooMany = document.getElementById('fartoomany'),
  quadrillionare = document.getElementById('quadrillionare'),
  coinVortex = document.getElementById('coinvortex'),
  coinShapedBlackHole = document.getElementById('coinshapedblackhole'),
  quintillionare = document.getElementById('quintillionare'),
  clickBeyond = document.getElementById('clickbeyond'),
  distantBeginning = document.getElementById('distantbeginning'),
  sextillionare = document.getElementById('sextillionare'),
  numberOverflow = document.getElementById('numberoverflow'),
  coinUniverse = document.getElementById('coinuniverse'),
  septillionare = document.getElementById('septillionare'),
  why = document.getElementById('why'),
  twentyFingers = document.getElementById('twentyfingers'),
  forTheWorthy = document.getElementById('fortheworthy'),
  breakpoint = document.getElementById('breakpoint'),
  cheater = document.getElementById('cheater'),
  backToGame = document.getElementById('backtogame'),
  ftwIcon = document.getElementById('fortheworthyicon'),
  bpIcon = document.getElementById('breakpointicon'),
  cheaterIcon = document.getElementById('cheatericon'),

  //Settings screen
  settingsButton = document.getElementById('settingsbutton'),
  settingsLabel = document.getElementById('settingslabel'),
  settingsPanel = document.getElementById('settingsscreen'),
  volumeInput = document.getElementById('volumeinput'),
  autoBuyBtn = document.getElementById('autobuysetting'),
  bgGradCenterInput = document.getElementById('bggrad1input'),
  bgGradEdgeInput = document.getElementById('bggrad2input'),
  graphicsBtn = document.getElementById('graphicssetting'),
  graphicsSettingInfo = document.getElementById('graphicssettinginfo'),
  resetBgButton = document.getElementById('resetbgbutton'),
  wipeSaveButton = document.getElementById('wipesavebutton'),
  backToGame2 = document.getElementById('backtogame2');

//Audio files
var bgm = document.getElementById('bgm'), //C418 - Click
  sfx = document.getElementById('sfx'), //Click
  sfx5 = document.getElementById('sfx5'), //Shop Buy
  sfx6 = document.getElementById('sfx6'); //Coin Whoosh
const sfx2 = document.getElementById('sfx2'), //Shop Unlock
  sfx3 = document.getElementById('sfx3'), //Achievement Unlock
  sfx4 = document.getElementById('sfx4'), //Special Achievement/Clicker Fusion Unlock
  sfx7 = document.getElementById('sfx7'), //Title Screen String Whoosh
  sfx7point1 = document.getElementById('sfx7.1'), //Title Screen String Whoosh

  //Namespaces
  init = { GameStarted: !1, DataLoaded: !1 },
  buildInfo = { BuildStr: '5.11anb', BuildNum: 5.11, UpdName: 'animation', UpdNum: 7 },
  stats = { Clicks: 0, TrueClicks: 0, ClickValue: 1, RawClickVal: 1, ClicksPS: 0, RawClicksPS: 0, Playtime: 0, LifetimeClicks: 0, LifetimeManualClicks: 0, CoinClickCount: 0, TotalClickHelpers: 0, AchievementsUnlocked: 0, HiddenAchievementsUnlocked: 0, OfflineClicksPSPercen: 0 },
  display = { Clicks: 0, ClickValue: 1, RawClickVal: 1, ClicksPS: 0, RawClicksPS: 0, LifetimeClicks: 0, LifetimeManualClicks: 0, CoinClickCount: 0, ClickerCPS: 0, ClickerCost: 0, SuperClickerCPS: 0, SuperClickerCost: 0, DoublePointerCPS: 0, DoublePointerCost: 0, EmployeeCost: 0, Playtime: 0 },

  lib = {
    rng: (min, max) => {
      return Math.floor((Math.random() * (max - min) + min))
    },
    achLabelSwitch: (index) => {
      sfx.play();
      achNameStr.textContent = achNames[index];
      achDescStr.textContent = achDescs[index];
      if (achArr[index]) achUnlockStr.textContent = 'Unlocked.';
      else achUnlockStr.textContent = 'Not unlocked.';
    },
    intTooLarge: () => {
      for (var i in intArray) if (intArray[i] >= 9.99e+101) return true; else return false;
    },
    getFps: () => {
      window.requestAnimationFrame(() => {
        let now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) times.shift();
        times.push(now);
        fps = times.length;
        fpsLabel.textContent = `FPS: ${fps}`;
        lib.getFps();
      });
    }
  };

//Background elements
var bg = document.createElement('img'),
  coinParticle = document.createElement('img'),

  //Shop variables
  clickerCPS = 5,
  clickerCost = 25,
  clickerScale = 5,
  clickersOwned = 0,
  clickerCPSWorth = 0,
  superClickerUnlocked = !1,
  superClickerCPS = 7500,
  superClickerCost = 3000000,
  superClickerScale = 25,
  superClickersOwned = 0,
  superClickerCPSWorth = 0,
  doublePointerUnlocked = !1,
  doublePointerCPS = 50000000,
  doublePointerScale = 75,
  doublePointerCost = 5000000000,
  doublePointersOwned = 0,
  doublePointerCPSWorth = 0,
  doAutobuy = !1,

  //Upgrade shop variables
  cursorCPS = 1.00,
  cursorCost = 1000000000,
  cursorOwned = !1,
  superCursorUnlocked = !1,
  superCursorCPS = 1.50,
  superCursorCost = 150000000000,
  superCursorOwned = !1,
  employeeUnlocked = !1,
  employeeCPS = 0.05,
  employeeCost = 250000000000,
  employeesOwned = 0,
  godFingerUnlocked = !1,
  godFingerCV = 0.35,
  godFingerCost = 5000000000000,
  godFingerOwned = !1,
  clickerFusionCost = '',
  clickerFusionUnlocked = !1,
  clickerFusionOwned = !1,

  //Save and load variables
  autosavePending = !1,
  lastSavedTime = 'Never',
  textSwitch = !1,
  manualSave = !1,
  readyToSave = !0,
  doAutosave = !1,
  achCheck = !0,
  SHT,

  //Buff variables
  buffRNG = 0,
  buff = 'none',
  clicksAdded,

  //Achievement screen variables
  achStr = 'none',
  gpAchIndex = 0,

  //Audio variables
  volume = 1.0,

  //Color variables
  increase = !0,
  red = 0,
  green = 0,

  //Optimization variables
  graphicsMode = 'Quality',
  updInterval,
  bgUpdInterval = 250,
  bgMax = 100,
  fps,

  //Animation variables
  startBgCreate = !1,
  createCoinBg = !1,
  prompting = !1,

  //Debug mode variables
  generatedKey = 'debug',
  keyEntered = !1,
  debugScreenState = 'closed',
  debug = !1,
  debugAutoplay = !1,
  forceBuff = !1,

  //Debug console variables
  cmd = [],
  arg = [],
  cmdHist = [],
  cmdHistInx = 1,

  //Screen size variables
  screenHeight = window.innerHeight,
  screenWidth = window.innerWidth,
  leftBorderX = 0, //Has to be given an inital numerical value to keep the CSS parser happy, see startButton event listener for value.
  rightBorderX = 0,

  //Miscellaneous variables
  numberShorten = !0,
  gamepad,

  //Arrays
  intArray = [],
  textArray = [],
  achArr = [], //The rest is filled when the game starts.
  costStringArr = [clickerCostString, superClickerCostString, doublePointerCostString, cursorCostString, superCursorCostString, employeeCostString, godFingerCostString],
  costArray = [Math.abs(clickerCost), Math.abs(superClickerCost), Math.abs(doublePointerCost), Math.abs(cursorCost), Math.abs(superCursorCost), Math.abs(employeeCost), Math.abs(godFingerCost)];
const achNames = ['Journey Begins', 'A Good Start', 'Getting There', 'Millionare', 'Coin Pool', 'Abundance', 'Billionare', 'Excess', 'Planet of Coins', 'Trillionare', 'Pocket Dimension', 'Far Too Many', 'Quadrillionare', 'Coin Vortex', 'Coin-Shaped Black Hole', 'Quintillionare', 'Click Beyond', 'Distant Beginning', 'Sextillionare', 'Number Overflow', 'Coin Universe', 'Septillionare', 'Why?', '20 Fingers', 'For the Worthy', 'Breaking Point', 'Cheater'],
  achDescs = ['Obtain 1 lifetime coin.', 'Obtain 10 thousand lifetime coins.', 'Obtain 100 thousand lifetime coins.', 'Obtain 1 million lifetime coins.', 'Obtain 10 million lifetime coins.', 'Obtain 100 million lifetime coins.', 'Obtain 1 billion lifetime coins.', 'Obtain 10 billion lifetime coins.', 'Obtain 100 billion lifetime coins.', 'Obtain 1 trillion lifetime coins.', 'Obtain 10 trillion lifeitme coins.', 'Obtain 100 trillion lifetime coins.', 'Obtain 1 quadrillion lifetime coins.', 'Obtain 10 quadrillion lifetime coins.', 'Obtain 100 quadrillion lifetime coins.', 'Obtain 1 quintillion lifetime coins.', 'Obtain 10 quadrillion lifetime coins.', 'Obtain 100 quintillion lifetime coins.', 'Obtain 1 sextillion lifetime coins.', 'Obtain 10 sextillion lifetime coins.', 'Obtain 100 sextillion lifetime coins.', 'Obtain 1 septillion lifetime coins.', 'Obtain 10 septillion lifetime coins.', 'Obtain 100 septillion lifetime coins.', 'Obtain 1 octillion lifetime coins.', 'Obtain far more lifetime coins than you should have.', 'Hack in some money using the debug console.'],
  achReq = [1, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 100000000000000, 1000000000000000, 10000000000000000n, 100000000000000000n, 1000000000000000000n, 10000000000000000000n, 100000000000000000000n, 1000000000000000000000n, 10000000000000000000000n, 100000000000000000000000n, 1000000000000000000000000n, 10000000000000000000000000n, 100000000000000000000000000n, Number.MAX_VALUE, Number.MAX_VALUE * Number.MAX_VALUE],
  buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy, clickerFusionBuy],
  logChoices = ['Stay a while, and listen.', 'Boo!', 'I think you may have hit the wrong button.', 'Looking for bugs?', 'You\'re not supposed to be here.', '<insert random variable here>', 'Quit hacking in money!', 'Didn\'t expect to see you here.', 'Is this thing on?', 'I\'ve always wondered what it would look like if I wrote a really long message into the debug console so I\'m just gonna keep typing until I feel like I\'ve typed enough which is actually a lot harder than it seems considering I need to figure out what to type anyways how are you enjoying the game? I\'ve worked very hard on it and it honestly kinda sucks but who cares at least you might be having fun! This game was honestly heavily inspired by cookie clicker and that game is really really good (way better than this one) so you should go play that instead unless you want to be so rich there won\'t even be enough money on the planet to match what you have.', 'Introducing Coin Clicker: Now with less fall damage!', 'Maybe you could buy a cookie with all the coins you have.', 'Why not try tha \'pizza\' command?', 'Legend says a hidden achievement will appear if you somehow obtain infinite coins... But who listens to stuff like that anyway?', 'Hey you should try running \'wipeSave();\' in the input box, it won\'t hurt anything I promise', `Man this whole '${buildInfo.UpdName}' update isn't that great huh?`, 'Oops, all coins!', 'This whole random quote feature isn\'t a complete waste of time, I swear.', 'Magic!', 'What? I like equal signs.', `Imagine having only 0 coins`, 'Finally! I\'ve been stuck on this island for years!', 'NOTICE: Due to people trying to steal our coins from the local Coin Clicker Bank, players will now only be receiving 0.01% of their current coins per second. We apologize for the inconvenience.', 'Could you open a new window? It\'s hot in here!', 'Get out of my room!', 'Thank you for playing Coin Clicker.'],
  man = '\nCoin Clicker Debug Console\n\nclear - Clears the console.\necho - Outputs the given arguments.\nhelp - Displays this manual.\nexec - Executes JavaScript code.\neval - An alias for exec, has the same function.\npizza - Tells you how many $30 pizzas you could buy with your current amount of coins.\nrmsg - Displays a random message. You can also log a specific message by passing an argument with a value of 1-25, or pass "all" to log all of them.\nclhis - Clears the command history.\nTyping any command into the console that isn\'t recognized will have the same effect as using the \'exec\' or \'eval\' commands.\n\n',
  saveData = [],
  shopData = [],
  times = [];
//Initial run updates and calls
let yellow = 'color: yellow;',
  def = 'color: inherit;',
  debugLogs = [`${browserStr}, ${os}, ${url}`, `Running beta ${buildInfo.UpdNum} codename '${buildInfo.UpdName}' build ${buildInfo.BuildStr}`];
document.body.style.backgroundImage = 'radial-gradient(rgb(250, 224, 65), rgb(249, 160, 40))';
fpsLabel.style.display = 'none';
achievementsPanel.style.display = 'none';
settingsPanel.style.display = 'none';
upgradeShopPanel.style.display = 'none';
debugKeyInput.value = '';
commandInput.value = '';
bgGradCenterInput.value = '250, 224, 65';
bgGradEdgeInput.value = '249, 160, 40';
volumeInput.value = volume * 100;
updateString.textContent = `the ${buildInfo.UpdName} update`;
buildString.textContent = `build ${buildInfo.BuildStr}`;
debugConsole += 'Type \'help\' for a list of commands. You can press Alt+Y to get back to the game screen.\n';
for (let i = 0; i < debugLogs.length; i++) console.debug(`%c [Debug] %c${debugLogs[i]}`, yellow, def);
for (let i = 0; i < 30; i++) achArr.push(!1);
loadGame();
if (graphicsMode == 'Quality') updInterval = 1; else updInterval = 50;
lib.getFps();

//Functions
function autoplay() { if (debugAutoplay && readyToSave) { manualSave = !0; saveGame(); readyToSave = !1; } else if (debugAutoplay && init.GameStarted) { doAutobuy = !0; autoBuyStr.textContent = 'Autobuy is enabled. (Forced)'; saveInfoString.textContent = 'Saving is disabled.'; coin.click(); } }
function createBase64Key() { try { if (!init.GameStarted || debug) { generatedKey = 'debug'; let addArray = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; for (let i = 45; i > 0; i--) { let val = lib.rng(1, addArray.length - 1); generatedKey += addArray[val]; if (i == 1) { let base64key = btoa(generatedKey); key.textContent = base64key; key.id = 'key'; console.log(`Unencoded: ${generatedKey}`); console.log(`Base64: ${base64key}`); debugConsole += `Unencoded: ${generatedKey}\n`; debugConsole += `Base64: ${base64key}\n`; } } } } catch (error) { errorHandler(error); } }
function buffRemoval() { try { buffStr.style.display = 'none'; if (buff == 'cpsDouble') { stats.ClicksPS = stats.RawClicksPS; stats.ClickValue = stats.RawClickVal; } else if (buff == 'cv777%CpS') stats.ClickValue = stats.RawClickVal; else if (buff == 'bonusClicks') clicksAdded = 0; buff = 'none'; } catch (error) { errorHandler(error); } }

function randomMsg(arg) {
  let selectedMsg, yellow = 'color: yellow;',
    def = 'color: inherit;';
  if (!isNaN(parseInt(arg))) {
    selectedMsg = logChoices[arg];
    console.log(`=== %c${selectedMsg}%c ===`, yellow, def);
    debugConsole += `=== ${selectedMsg} ===\n`;
  } else if (arg == 'all') {
    for (let i = 0; i < logChoices.length; i++) {
      selectedMsg = logChoices[i];
      console.log(`${i}: === %c${selectedMsg}%c ===`, yellow, def);
      debugConsole += `${i}: === ${selectedMsg} ===\n`;
    }
  } else {
    selectedMsg = logChoices[lib.rng(1, logChoices.length - 1)];
    console.log(`=== %c${selectedMsg}%c ===`, yellow, def);
    debugConsole += `=== ${selectedMsg} ===\n`;
  }
}

function updateScreen() {
  try {
    if (buff == 'none' && init.GameStarted) { stats.RawClicksPS = stats.ClicksPS; stats.RawClickVal = stats.ClickValue; document.title = `${textArray[0]} coins | Coin Clicker Beta v${buildInfo.UpdNum}`; } else if (init.GameStarted) document.title = `A buff is active! | Coin Clicker Beta v${buildInfo.UpdNum}`; else document.title = `Coin Clicker Beta v${buildInfo.UpdNum}`;
    if (!document.hidden) {
      bgm.volume = volume;
      intArray = [display.Clicks, display.ClickValue, display.ClicksPS, display.LifetimeClicks, display.LifetimeManualClicks, display.CoinClickCount, stats.TotalClickHelpers, display.ClickerCPS, display.ClickerCost, clickersOwned, display.SuperClickerCPS, display.SuperClickerCost, superClickersOwned, display.DoublePointerCPS, display.DoublePointerCost, doublePointersOwned, display.EmployeeCost, employeesOwned, display.RawClickVal, display.RawClicksPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, stats.AchievementsUnlocked, clicksAdded, stats.TrueClicks, (stats.OfflineClicksPSPercen * 100).toFixed(1), cursorCost, superCursorCost, godFingerCost];
      new numberFix();
      document.getElementById('debugconsole').value = debugConsole;
      clickString.textContent = `Coins: ${textArray[0]}`;
      cpsString.textContent = `Coins per Second: ${textArray[2]}`;
      clickValueString.textContent = `Click Value: ${textArray[1]}`;
      clickerCPSString.textContent = `CpS: +${textArray[7]}`;
      clickerCostString.textContent = `Cost: ${textArray[8]}`;
      clickersOwnedString.textContent = `Owned: ${textArray[9]}`;
      if (clickerCPSWorth != 0) clickerInfo.textContent = `Your ${textArray[9]} clicker(s) account for ${textArray[20]} (${Math.round(intArray[20] / stats.RawClicksPS * 100)}%) raw CpS.`;
      if (superClickerCPSWorth != 0) superClickerInfo.textContent = `Your ${textArray[12]} super clicker(s) account for  ${textArray[21]} (${Math.round(intArray[21] / stats.RawClicksPS * 100)}%) raw CpS.`;
      if (doublePointerCPSWorth != 0) doublePointerInfo.textContent = `Your ${textArray[15]} double pointer(s) account for ${textArray[22]} (${Math.round(intArray[22] / stats.RawClicksPS * 100)}%) raw CpS.`;
      let upgVarArr = [cursorOwned, superCursorOwned, godFingerOwned, clickerFusionOwned],
        upgStrArr = [cursorOwnedString, superCursorOwnedString, godFingerOwnedString, clickerFusionOwnedString],
        upgCosArr = [textArray[27], textArray[28], textArray[29], 'None. Requires 150 clickers.'],
        upgCosStrArr = [cursorCostString, superCursorCostString, godFingerCostString, clickerFusionCostString];
      for (var i in upgVarArr) { if (upgVarArr[i]) { upgStrArr[i].textContent = 'Owned.'; upgCosStrArr[i].textContent = 'Cost: Bought.'; } else { upgStrArr[i].textContent = 'Not owned.'; upgCosStrArr[i].textContent = `Cost: ${upgCosArr[i]}`; } }
      employeeCostString.textContent = `Cost: ${textArray[16]}`;
      employeesOwnedString.textContent = `Owned: ${textArray[17]}`;
      let reqSingle = [1000, 60000, 3600000];
      let req = [2000, 120000, 5400000];
      let units = ['second', 'minute', 'hour'];
      let unitsPlural = ['seconds', 'minutes', 'hours'];
      for (let i = 0; i < req.length; i++) { if (stats.Playtime >= req[i]) { display.Playtime = (Math.floor(stats.Playtime / reqSingle[i])).toLocaleString(); timePlayedString.textContent = `You have played for ${display.Playtime} ${unitsPlural[i]}.`; } else if (stats.Playtime >= reqSingle[i] && stats.Playtime < req[i]) { display.Playtime = (Math.floor(stats.Playtime / reqSingle[i])).toLocaleString(); timePlayedString.textContent = `You have played for ${display.Playtime} ${units[i]}.` } }
      if (stats.LifetimeClicks == 1) lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} coin.`; else lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} coins.`;
      if (stats.LifetimeManualClicks == 1) lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} coin from clicking.`; else lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} coins from clicking.`;
      if (stats.CoinClickCount == 1) coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} time.`; else coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} times.`;
      if (stats.TotalClickHelpers == 1) totalClickHelpersString.textContent = `You have bought ${textArray[6]} item.`; else totalClickHelpersString.textContent = `You have bought ${textArray[6]} items.`;
      achievementsUnlockedString.textContent = `You have unlocked ${textArray[23]} (${Math.round(intArray[23] / 25 * 100)}%) out of 25 achievements.`;
      rawCPSString.textContent = `Your raw coins per second is ${textArray[19]}.`;
      rawCVString.textContent = `Your raw click value is ${textArray[18]}.`;
      offlineCPSString.textContent = `Your employees gather ${textArray[26]}% of your coins per second while offline.`;
      if (achArr[26]) { breakpoint.style.display = 'block'; bpIcon.style.display = 'block'; }
      if (achArr[27]) { cheater.style.display = 'block'; cheaterIcon.style.display = 'block'; }
      if (buff == 'bonusClicks') buffStr.textContent = `You got ${textArray[24]} bonus coins!`;
      if (cursorOwned && init.DataLoaded) cursorCost = 'Owned.';
      if (clickersOwned >= 25 && !superClickerUnlocked) {
        if (init.DataLoaded) sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Super Clicker unlocked!';
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
      if (clickersOwned >= 50 && superClickersOwned >= 10 && !doublePointerUnlocked) {
        if (init.DataLoaded) sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Double Pointer unlocked!';
        doublePointerGroup.style.display = 'block';
        doublePointerImg.style.display = 'block';
        doublePointerUnlocked = !doublePointerUnlocked; //True
        SHT = 500;
      } else if (doublePointerUnlocked) {
        doublePointerGroup.style.display = 'block';
        doublePointerCPSString.textContent = `CpS: +${textArray[13]}`;
        doublePointerCostString.textContent = `Cost: ${textArray[14]}`;
        doublePointersOwnedString.textContent = `Owned: ${textArray[15]}`;
      }
      if (cursorOwned && !superCursorUnlocked) {
        if (init.DataLoaded) sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Super Cursor unlocked!';
        superCursorGroup.style.display = 'block';
        superCursorUnlocked = !superCursorUnlocked; //True
        SHT = 500;
      } else if (superCursorUnlocked) { superCursorGroup.style.display = 'block'; cursorCost = 'Owned.'; }
      if (cursorOwned && superCursorOwned && !employeeUnlocked) {
        if (init.DataLoaded) sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Employee unlocked!';
        employeeGroup.style.display = 'block';
        employeeUnlocked = !employeeUnlocked; //True
        SHT = 500;
      } else if (employeeUnlocked) { employeeGroup.style.display = 'block'; superCursorCost = 'Owned.'; }
      if (clickersOwned >= 75 && superClickersOwned >= 20 && doublePointersOwned >= 3 && employeeUnlocked && !godFingerUnlocked) {
        if (init.DataLoaded) sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'God Finger unlocked!';
        godFingerGroup.style.display = 'block';
        godFingerUnlocked = !godFingerUnlocked; //True
        SHT = 500;
      } else if (godFingerUnlocked) godFingerGroup.style.display = 'block';
      if (clickersOwned >= 150 && !clickerFusionUnlocked) {
        if (init.DataLoaded) sfx4.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Clicker Fusion unlocked!';
        clickerFusionGroup.style.display = 'block';
        clickerFusionUnlocked = !clickerFusionUnlocked; //True
        SHT = 500;
      } else if (clickerFusionUnlocked) clickerFusionGroup.style.display = 'block';
      for (let i = 0; i < achReq.length; i++) {
        if (stats.LifetimeClicks >= achReq[i] && !achArr[i]) {
          if ((smallCoin1.style.animationPlayState = 'running' || init.GameStarted) && i == 0) bgm.play();
          if (init.DataLoaded && i > 1 && i < 24) sfx3.play();
          achArr[i] = !0;
          stats.AchievementsUnlocked++;
          if (init.DataLoaded) unlockString.textContent = `Achievement Unlocked: ${achNames[i]}`; setTimeout(function () { unlockString.style.display = 'block'; }, 1);
          SHT = 500;
        }
      }
      let diffArr = [stats.Clicks - display.Clicks, stats.ClickValue - display.ClickValue, stats.RawClickVal - display.RawClickVal, stats.ClicksPS - display.ClicksPS, stats.RawClicksPS - display.RawClicksPS, stats.LifetimeClicks - display.LifetimeClicks, stats.LifetimeManualClicks - display.LifetimeManualClicks, stats.CoinClickCount - display.CoinClickCount, clickerCPS - display.ClickerCPS, clickerCost - display.ClickerCost, superClickerCPS - display.SuperClickerCPS, superClickerCost - display.SuperClickerCost, doublePointerCPS - display.DoublePointerCPS, doublePointerCost - display.DoublePointerCost, employeeCost - display.EmployeeCost];
      for (let i = 0; i < diffArr.length; i++) diffArr[i] = Math.abs(diffArr[i]);
      if (display.Clicks < stats.Clicks) display.Clicks += Math.ceil(diffArr[0] / 15); else if (display.Clicks > stats.Clicks) display.Clicks -= Math.ceil(diffArr[0] / 15);
      if (display.ClickValue < stats.ClickValue) display.ClickValue += Math.ceil(diffArr[1] / 15); else if (display.ClickValue > stats.ClickValue) display.ClickValue -= Math.ceil(diffArr[1] / 15);
      if (display.RawClickVal < stats.RawClickVal) display.RawClickVal += Math.ceil(diffArr[2] / 15); else if (display.RawClickVal > stats.RawClickVal) display.RawClickVal -= Math.ceil(diffArr[2] / 15);
      if (display.ClicksPS < stats.ClicksPS) display.ClicksPS += Math.ceil(diffArr[3] / 15); else if (display.ClicksPS > stats.ClicksPS) display.ClicksPS -= Math.ceil(diffArr[3] / 15);
      if (display.RawClicksPS < stats.RawClicksPS) display.RawClicksPS += Math.ceil(diffArr[4] / 15); else if (display.RawClicksPS > stats.RawClicksPS) display.RawClicksPS -= Math.ceil(diffArr[4] / 15);
      if (display.LifetimeClicks < stats.LifetimeClicks) display.LifetimeClicks += Math.ceil(diffArr[5] / 15); else if (display.LifetimeClicks > stats.LifetimeClicks) display.LifetimeClicks -= Math.ceil(diffArr[5] / 15);
      if (display.LifetimeManualClicks < stats.LifetimeManualClicks) display.LifetimeManualClicks += Math.ceil(diffArr[6] / 15); else if (display.LifetimeManualClicks > stats.LifetimeManualClicks) display.LifetimeManualClicks -= Math.ceil(diffArr[6] / 15);
      if (display.CoinClickCount < stats.CoinClickCount) display.CoinClickCount += Math.ceil(diffArr[7] / 15); else if (display.CoinClickCount > stats.CoinClickCount) display.CoinClickCount -= Math.ceil(diffArr[7] / 15);
      if (display.ClickerCPS < clickerCPS) display.ClickerCPS += Math.ceil(diffArr[8] / 15); else if (display.ClickerCPS > clickerCPS) display.ClickerCPS -= Math.ceil(diffArr[8] / 15);
      if (display.ClickerCost < clickerCost) display.ClickerCost += Math.ceil(diffArr[9] / 15); else if (display.ClickerCost > clickerCost) display.ClickerCost -= Math.ceil(diffArr[9] / 15);
      if (display.SuperClickerCPS < superClickerCPS) display.SuperClickerCPS += Math.ceil(diffArr[10] / 15); else if (display.SuperClickerCPS > superClickerCPS) display.SuperClickerCPS -= Math.ceil(diffArr[10] / 15); if (display.SuperClickerCost < superClickerCost) display.SuperClickerCost += Math.ceil(diffArr[11] / 15); else if (display.SuperClickerCost > superClickerCost) display.SuperClickerCost -= Math.ceil(diffArr[11] / 15);
      if (display.DoublePointerCPS < doublePointerCPS) display.DoublePointerCPS += Math.ceil(diffArr[12] / 15); else if (display.DoublePointerCPS > doublePointerCPS) display.DoublePointerCPS -= Math.ceil(diffArr[12] / 15); if (display.DoublePointerCost < doublePointerCost) display.DoublePointerCost += Math.ceil(diffArr[13] / 15); else if (display.DoublePointerCost > doublePointerCost) display.DoublePointerCost -= Math.ceil(diffArr[13] / 15);
      if (display.EmployeeCost < employeeCost) display.EmployeeCost += Math.ceil(diffArr[14] / 15); else if (display.EmployeeCost > employeeCost) display.EmployeeCost -= Math.ceil(diffArr[14] / 15);
    } else { bgm.volume = volume / 3; $('.bg').remove(); }
    setTimeout(updateScreen, updInterval);
  } catch (error) { errorHandler(error); }
}

class numberFix {
  constructor() {
    for (let name in this) if (!isFinite(this[name]) && !isNaN(this[name]) && (this[name] >= Number.MAX_VALUE || this[name] <= Number.MIN_VALUE)) this[name] = Number.MAX_VALUE;
    if (!numberShorten || lib.intTooLarge()) {
      for (let i = 0; i < intArray.length; i++) {
        intArray[i] = Math.abs(intArray[i]);
        if (isNaN(intArray[i])) intArray[i] = 0;
        if (Number.prototype.toLocaleString() != undefined) if (intArray[i] >= 100000000000000) textArray[i] = ((intArray[i]).toExponential(3)).toLocaleString(); else textArray[i] = intArray[i].toLocaleString();
        else {
          if (intArray[i] < 100000000000000) {
            textArray[i] = intArray[i].toString();
            let pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(textArray[i])) textArray[i] = textArray[i].replace(pattern, '$1,$2');
          } else textArray[i] = intArray[i].toExponential(3);
        }
      }
    } else {
      let req = [1000, 1e+6, 1e+9, 1e+12, 1e+15, 1e+18, 1e+21, 1e+24, 1e+27, 1e+30, 1e+33, 1e+36, 1e+39, 1e+42, 1e+45, 1e+48, 1e+51, 1e+54, 1e+57, 1e+60, 1e+63, 1e+66, 1e+69, 1e+72, 1e+75, 1e+78, 1e+81, 1e+84, 1e+87, 1e+90, 1e+93, 1e+96, 1e+99],
        units = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septemdecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintiillion', 'trevigintillion', 'quattuorvigintiillion', 'quinvigintiillion', 'sexvigintiillion', 'septvigintiillion', 'octovigintillion', 'nonvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion'];
      for (let i in req) { for (let ii in intArray) { if (intArray[ii] >= req[i]) textArray[ii] = (Math.round((intArray[ii] / req[i]) * Math.pow(10, 3)) / Math.pow(10, 3)).toFixed(3) + ' ' + units[i]; else if (intArray[ii] < 1000) textArray[ii] = intArray[ii]; } }
    }
  }
}

function createBgElem() {
  try {
    if (startBgCreate && achArr[3]) {
      if (graphicsMode == 'Quality') {
        bg = document.createElement('img');
        bg.src = './img/bgdollar.png';
        bg.id = 'bg';
        bg.className = 'bg fixed';
        bg.style.left = `${lib.rng(1, screenWidth)}px`;
        document.body.appendChild(bg);
        if (achArr[10]) {
          if (graphicsMode == 'Quality') {
            bg = document.createElement('img');
            bg.src = './img/coin.png';
            bg.id = 'bg';
            bg.className = 'bg hasanim fixed';
            bg.style.left = `${lib.rng(1, screenWidth)}px`;
            document.body.appendChild(bg);
          }
        }
        if (achArr[24]) {
          bgMax = 275;
          if (graphicsMode == 'Quality') {
            bg = document.createElement('i');
            bg.id = 'bg';
            bg.className = 'fa-solid fa-star ach fixed hasanim bg';
            if (!achArr[26]) bg.style.color = `rgb(0, ${green}, 0)`; else bg.style.color = `rgb(${red}, 0, 0)`;
            bg.style.left = `${lib.rng(1, screenWidth)}px`;
            bg.style.fontSize = '1.7vw';
            document.body.appendChild(bg);
          }
        }
      }
    } setTimeout(createBgElem, bgUpdInterval);
  } catch (error) { errorHandler(error) }
}

function loadGame() {
  try {
    if (localStorage.getItem('saveData', saveData)) {
      let data = localStorage.getItem('saveData', saveData),
        loadData = JSON.parse(data);
      if (achCheck) {
        stats.LifetimeClicks = loadData[5];
        if (loadData[15]) bgGradCenterInput.value = loadData[15];
        if (loadData[16]) bgGradEdgeInput.value = loadData[16];
        if (loadData[15] && loadData[16]) document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`;
        if (loadData[17]) graphicsMode = loadData[17];
        if (!loadData[1]) {
          let data2 = localStorage.getItem('shopData', shopData),
            shopDat = JSON.parse(data2);
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
          if (clickersOwned >= 50 && superClickersOwned >= 3) {
            doublePointerCPS = shopDat[9];
            doublePointerCPSWorth = shopDat[10];
            doublePointerCost = shopDat[11];
            doublePointersOwned = shopDat[12];
          }
          if (cursorOwned) { superCursorUnlocked = shopDat[13]; superCursorOwned = shopDat[14]; }
          if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3) { godFingerUnlocked = shopDat[15]; godFingerOwned = shopDat[16]; }
          if (superCursorOwned) {
            employeeUnlocked = shopDat[17];
            employeeCost = shopDat[18];
            employeesOwned = shopDat[19];
          }
          if (clickersOwned >= 150) { clickerFusionUnlocked = shopDat[20]; clickerFusionOwned = shopDat[21]; }
        }
        graphicsBtn.textContent = graphicsMode;
      } else if (!achCheck && loadData[0] >= 4.41) {
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
          if (loadData[13]) lastSavedTime = loadData[13];
          if (loadData[14]) stats.TrueClicks = loadData[14];
          if (loadData[19]) stats.OfflineClicksPSPercen = loadData[19]; else stats.OfflineClicksPSPercen = employeesOwned / 10;
          if (loadData[18] && stats.ClicksPS > 0 && stats.OfflineClicksPSPercen > 0) {
            let loadTimestamp = Math.floor((new Date()).getTime() / 1000),
              saveTimestamp = loadData[18],
              timestampDifference = loadTimestamp - saveTimestamp,
              offlineCpS = Math.ceil((stats.ClicksPS * stats.OfflineClicksPSPercen) * timestampDifference);
            stats.Clicks += offlineCpS;
            stats.TrueClicks += offlineCpS;
            if (offlineCpS >= 100000000000000) offlineCpS = ((offlineCpS).toExponential(3)).toLocaleString(); else offlineCpS = offlineCpS.toLocaleString();
            unlockString.style.display = 'block';
            if (offlineCpS == 1) unlockString.textContent = `Your employees produced ${offlineCpS} coin while you were away.`; else unlockString.textContent = `Your employees produced ${offlineCpS} coins while you were away.`;
            SHT = 500;
          }
          if (loadData[20]) cmdHist = loadData[20];
          if (clickersOwned >= 1) { clickerImg.style.animation = 'clickermov 2s forwards'; setTimeout(function () { clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)'; clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
          if (superClickersOwned >= 1) { superClickerImg.style.animation = 'superclickermov 2s forwards'; setTimeout(function () { superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)'; superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
          if (doublePointersOwned >= 1) { doublePointerImg.style.animation = 'doublepointermov 2s forwards'; setTimeout(function () { doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)'; doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
          if (cursorOwned) {
            cursorImg.style.display = 'block';
            cursorImg.parentNode.removeChild(cursorImg);
            statsPanel.appendChild(cursorImg);
            cursorImg.style.animationPlayState = 'running';
          }
          if (superCursorOwned) {
            superCursorImg.style.display = 'block';
            superCursorImg.parentNode.removeChild(superCursorImg);
            statsPanel.appendChild(superCursorImg);
            superCursorImg.style.animationPlayState = 'running';
          }
          if (employeesOwned >= 1) {
            offlineCPSString.style.display = 'block';
            employeeImg.style.display = 'block';
            employeeImg.parentNode.removeChild(employeeImg);
            game.appendChild(employeeImg);
            employeeImg.style.animationPlayState = 'running';
            setTimeout(function () { employeeImg.style.transform = 'translate3d(39.8vw, -5vw, 0)'; employeeImg.style.animation = 'employeerock 2s linear infinite alternate'; }, 3000);
          }
          if (godFingerOwned) {
            godFingerImg.style.display = 'block';
            godFingerImg.parentNode.removeChild(godFingerImg);
            statsPanel.appendChild(godFingerImg);
            godFingerImg.style.animationPlayState = 'running';
          }
          if (clickerFusionOwned) {
            clickerFusionImg.style.display = 'block';
            clickerFusionImg.parentNode.removeChild(clickerFusionImg);
            statsPanel.appendChild(clickerFusionImg);
            clickerFusionImg.style.animationPlayState = 'running';
          }
          if (stats.LifetimeClicks > 0) bgm.play();
          if (stats.Clicks != stats.TrueClicks) stats.HiddenAchievementsUnlocked++;
          setTimeout(function () { init.DataLoaded = !0; }, 150);
        } else { localStorage.removeItem('saveData', saveData); if (!achCheck) init.DataLoaded = !0; }
      } else { localStorage.removeItem('saveData', saveData); if (!achCheck) init.DataLoaded = !0; }
    } else if (!achCheck) init.DataLoaded = !0;
  } catch (error) { errorHandler(error); }
}

function saveGame() {
  try {
    if (readyToSave && init.GameStarted) {
      if (buff != 'none') { savingString.textContent = 'You cannot save when a buff is occurring.'; savingString.style.display = 'block'; SHT = 500; } else {
        let saveTime = Math.floor((new Date()).getTime() / 1000);
        lastSavedTime = new Date();
        lastSavedTime = lastSavedTime.toString();
        lastSavedTime = new Date(`${lastSavedTime} UTC`);
        lastSavedTime = lastSavedTime.toString();
        readyToSave = !1;
        savingString.textContent = 'Saving...';
        savingString.style.display = 'block';
        let varsToPush = [buildInfo.BuildNum, debugAutoplay, stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, stats.Playtime, volume, doAutobuy, keyEntered, lastSavedTime, stats.TrueClicks, bgGradCenterInput.value, bgGradEdgeInput.value, graphicsMode, saveTime, stats.OfflineClicksPSPercen, cmdHist];
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
        if (cursorOwned) { shopVars.push(superCursorUnlocked); shopVars.push(superCursorOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3) { shopVars.push(godFingerUnlocked); shopVars.push(godFingerOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        if (superCursorOwned) {
          shopVars.push(employeeUnlocked);
          shopVars.push(employeeCost);
          shopVars.push(employeesOwned);
        } else for (let i = 0; i < 3; i++) shopVars.push(undefined);
        if (clickersOwned >= 150) { shopVars.push(clickerFusionUnlocked); shopVars.push(clickerFusionOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);
        for (let i = 0; i < varsToPush.length; i++) { if (!isFinite(varsToPush[i]) && !isNaN(varsToPush[i])) varsToPush[i] = Number.MAX_VALUE; saveData.push(varsToPush[i]); }
        localStorage.setItem('saveData', JSON.stringify(saveData));
        for (let i = 0; i < shopVars.length; i++) shopData.push(shopVars[i]);
        localStorage.setItem('shopData', JSON.stringify(shopData));
        while (saveData.length > 0) saveData.pop();
        while (shopData.length > 0) shopData.pop();
        if (manualSave) { savingString.textContent = 'Game saved.'; manualSave = !manualSave; /*False*/ } else savingString.textContent = 'Game autosaved.';
        SHT = 500;
      }
    }
  } catch (error) { errorHandler(error) }
}

function wipeSave(gamepadActive) {
  if (readyToSave || debugAutoplay) {
    if (!gamepadActive) {
      let prompt = confirm('This is completely irreversible! Are you sure you wish to continue?');
      if (prompt) {
        readyToSave = !1;
        localStorage.removeItem('saveData');
        localStorage.removeItem('shopData');
        stats.Clicks = 0;
        stats.TrueClicks = 0;
        stats.ClicksPS = 0;
        stats.ClickValue = 1;
        stats.Playtime = 0;
        stats.LifetimeClicks = 0;
        stats.LifetimeManualClicks = 0;
        stats.CoinClickCount = 0;
        stats.TotalClickHelpers = 0;
        stats.AchievementsUnlocked = 0;
        stats.RawClicksPS = 0;
        stats.RawClickVal = 0;
        stats.OfflineClicksPSPercen = 0;
        offlineCPSString.style.display = 'none';
        clickerCPS = 5;
        clickerCost = 25;
        clickersOwned = 0;
        clickerCPSWorth = 0;
        superClickerCPS = 7500;
        superClickerCost = 3000000;
        superClickersOwned = 0;
        superClickerUnlocked = !1;
        superClickerCPSWorth = 0;
        doublePointerCPS = 50000000;
        doublePointerCost = 5000000000;
        doublePointersOwned = 0;
        doublePointerUnlocked = !1;
        doublePointerCPSWorth = 0;
        cursorCost = 1000000000;
        cursorOwned = !1;
        superCursorCost = 150000000000;
        superCursorOwned = !1;
        superCursorUnlocked = !1;
        employeeCost = 250000000000;
        employeesOwned = 0;
        employeeUnlocked = !1;
        godFingerCost = 5000000000000;
        godFingerOwned = !1;
        godFingerUnlocked = !1;
        clickerFusionOwned = !0;
        clickerFusionUnlocked = !1;
        superClickerGroup.style.display = 'none';
        doublePointerGroup.style.display = 'none';
        superCursorGroup.style.display = 'none';
        employeeGroup.style.display = 'none';
        godFingerGroup.style.display = 'none';
        clickerFusionGroup.style.display = 'none';
        clickerImg.style.animation = '';
        clickerImg.style.transform = '';
        superClickerImg.style.animation = '';
        superClickerImg.style.transform = '';
        doublePointerImg.style.animation = '';
        doublePointerImg.style.transform = '';
        cursorImg.style.animation = '';
        cursorImg.style.transform = '';
        superCursorImg.style.animation = '';
        superCursorImg.style.transform = '';
        employeeImg.style.animation = '';
        employeeImg.style.transform = '';
        godFingerImg.style.animation = '';
        godFingerImg.style.transform = '';
        clickerFusionImg.style.animation = '';
        clickerFusionImg.style.transform = '';
        clickerInfo.textContent = 'You have no clickers.';
        superClickerInfo.textContent = 'You have no super clickers.';
        doublePointerInfo.textContent = 'You have no double pointers.';
        doAutobuy = !1;
        graphicsMode = 'Quality';
        bgGradCenterInput.value = '250, 224, 65';
        bgGradEdgeInput.value = '249, 160, 40';
        document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`;
        for (let i in achArr) achArr[i] = !1;
        cheater.style.display = 'none';
        cheaterIcon.style.display = 'none';
        breakpoint.style.display = 'none';
        bpIcon.style.display = 'none';
        timePlayedString.textContent = 'You have played for 0 seconds.';
        let bgmFade = setInterval(function () {
          if (volume <= 0.0) {
            clearInterval(bgmFade);
            bgm.pause();
            bgm.currentTime = 0;
            volume = 1;
          } else { volume -= 0.1; volume = volume.toFixed(2); }
        }, 200);
      }
    } else if (gamepadActive) {
      localStorage.removeItem('saveData');
      localStorage.removeItem('shopData');
      readyToSave = !readyToSave;
      unlockString.textContent = 'Save removed. Press R3 to confirm. (You can save again to reverse this if this was a mistake.)';
      SHT = 500;
    } else if (!readyToSave) readyToSave = !0;
  }
}

function buffRNGCalc() {
  try {
    let max = 301,
      min = 0,
      buffTime;
    buffRNG = 0;
    if (forceBuff && buff == 'none') buffRNG = 100; else if (!forceBuff && buff == 'none') buffRNG = lib.rng(min, max);
    if ((document.hidden || game.style.display != 'block') && buffRNG == 200) buffRNG = lib.rng(min, max);
    if (buffRNG == 100 && buff == 'none') { if (stats.ClicksPS > 0) { buffTime = lib.rng(15000, 60000); buffStr.textContent = `Your CpS has been doubled for ${Math.round(buffTime / 1000)} seconds!`; buffStr.style.display = 'block'; stats.RawClicksPS = stats.ClicksPS; stats.ClicksPS = Math.round(stats.ClicksPS * 2); buff = 'cpsDouble'; window.setTimeout(buffRemoval, buffTime); } } else if (buffRNG == 200 && buff == 'none') { if (stats.ClicksPS > 0) { buffTime = lib.rng(5000, 20000); buffStr.textContent = `Your click value has been increased by 777% of your CpS for ${Math.round(buffTime / 1000)} seconds!`; buffStr.style.display = 'block'; stats.RawClickVal = stats.ClickValue; stats.ClickValue += Math.round(stats.ClicksPS * 7.77); buff = 'cv777%CpS'; window.setTimeout(buffRemoval, buffTime); } } else if (buffRNG == 300 && buff == 'none') { if (stats.ClicksPS > 0 && stats.Clicks > 0) { clicksAdded = Math.round(0.3 * stats.ClicksPS + 0.1 * stats.Clicks); stats.Clicks += clicksAdded; stats.TrueClicks += clicksAdded; new numberFix(); buffStr.style.display = 'block'; buff = 'bonusClicks'; window.setTimeout(buffRemoval, 2000); } }
  } catch (error) { errorHandler(error); }
}

function cpsClick() {
  try {
    stats.Clicks += stats.ClicksPS * 0.10;
    stats.TrueClicks += stats.ClicksPS * 0.10;
    stats.Clicks = Math.round(stats.Clicks);
    stats.TrueClicks = Math.round(stats.TrueClicks);
    stats.LifetimeClicks += stats.ClicksPS * 0.10;
    stats.LifetimeClicks = Math.round(stats.LifetimeClicks);
  } catch (error) { errorHandler(error); }
}

function rgChange() {
  try {
    if (increase) { red += 5; green += 5; } else if (!increase) { red -= 5; green -= 5; }
    if (green == 200) increase = !increase; /*False*/ else if (green == 0) increase = !increase; //True
    forTheWorthy.style.borderInlineColor = `rgb(0, ${green}, 0)`;
    forTheWorthy.style.borderBlockColor = `rgb(0, ${green}, 0)`;
    breakpoint.style.borderInlineColor = `rgb(0, ${green}, 0)`;
    breakpoint.style.borderBlockColor = `rgb(0, ${green}, 0)`;
    cheater.style.borderInlineColor = `rgb(${red}, 0, 0)`;
    cheater.style.borderBlockColor = `rgb(${red}, 0, 0)`;
    ftwIcon.style.color = `rgb(0, ${green}, 0)`;
    bpIcon.style.color = `rgb(0, ${green}, 0)`;
    cheaterIcon.style.color = `rgb(${red}, 0, 0)`;
    costArray = [Math.abs(clickerCost), Math.abs(superClickerCost), Math.abs(doublePointerCost), Math.abs(cursorCost), Math.abs(superCursorCost), Math.abs(employeeCost), Math.abs(godFingerCost)];
    for (let i = 0; i < costArray.length - 1; i++) { if (stats.Clicks >= costArray[i]) costStringArr[i].style.color = `rgb(0, ${green}, 0)`; else costStringArr[i].style.color = 'rgb(0, 0, 0)'; }
  } catch (error) { errorHandler(error); }
}

function commandInterpret() {
  commandAssemble();
  if (cmd == 'clear') debugConsole = 'Console cleared.\n';
  else if (cmd == 'echo') debugConsole += `${arg}\n`;
  else if (cmd == 'help') debugConsole += man;
  else if (cmd == 'exec' || cmd == 'eval') { try { eval(arg); debugConsole += 'Command executed.\n'; } catch (error) { debugConsole += `${error}\n`; } }
  else if (cmd == 'pizza') debugConsole += `You could buy ${(Math.floor(stats.Clicks / 30)).toLocaleString()} $30 pizzas with your current amount of coins.\n`;
  else if (cmd == 'rmsg') randomMsg(arg);
  else if (cmd == 'clhis') cmdHist = [];
  else try { eval(commandInput.value); } catch (error) { debugConsole += `${error}\n`; }
  if (cmd != 'clhis') { cmdHist.push(commandInput.value); cmdHistInx = cmdHist.length; }
  cmd = [];
  arg = [];
  commandInput.value = '';
}

function commandAssemble() {
  for (let i = 0; i < commandInput.value.length; i++) { if (i < 5) cmd.push(commandInput.value[i]); else arg.push(commandInput.value[i]); }
  cmd = cmd.toString();
  cmd = cmd.replace(/\,/g, '');
  cmd = cmd.replace(/\s/g, '');
  arg = arg.toString();
  arg = arg.replace(/\,/g, '');
}

//Event listeners
startButton.addEventListener('click', function () {
  sfx.play();
  if (generatedKey != 'debug') key.style.display = 'none';
  titleScreen.style.display = 'none';
  game.style.display = 'block';
  shopPanel.style.display = 'block';
  statsPanel.style.display = 'block';
  init.GameStarted = !init.GameStarted; //True
  startBgCreate = !0;
  achCheck = !1;
  loadGame();
  randomMsg();
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

coin.addEventListener('click', function (event) {
  try {
    sfx.play();
    sfx = new Audio();
    sfx.src = './snd/click.mp3';
    if (!debugAutoplay) sfx.volume = volume; else sfx.volume = 0;
    if (!debugAutoplay && graphicsMode == 'Quality' && event.clientX != 0) {
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
      stats.TrueClicks += stats.ClickValue
      stats.LifetimeClicks += stats.ClickValue;
      stats.LifetimeManualClicks += stats.ClickValue;
      stats.CoinClickCount++;
    } else { debugConsole += `${stats.Clicks}, ${stats.LifetimeClicks}, ${stats.ClickValue}, ${stats.CoinClickCount}\n`; throw new Error('Non-absolute values in coinClick. Check debugConsole for more info.'); }
  } catch (error) { errorHandler(error); }
});

clickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= clickerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= clickerCost;
    stats.TrueClicks -= clickerCost;
    clickersOwned++;
    clickerCPSWorth += clickerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (clickerCPS * 2);
      stats.RawClicksPS += clickerCPS;
      clickerCPS += Math.abs(Math.round(clickersOwned * 2 + Math.abs(0.03 * stats.RawClicksPS) + lib.rng(3, 15)));
      clickerCost += Math.round(clickersOwned + (clickerScale * stats.RawClicksPS) + clickersOwned * 3 + lib.rng(100, 200));
    } else { stats.ClicksPS += clickerCPS; clickerCPS += Math.abs(Math.round(clickersOwned * 2 + Math.abs((0.03 * stats.ClicksPS)) + lib.rng(3, 15))); clickerCost += Math.round(clickersOwned + (clickerScale * stats.ClicksPS) + clickersOwned * 3 + lib.rng(100, 200)); }
    if (buff != 'none') stats.RawClickVal += Math.round(clickersOwned * 0.5 + 0.10 * stats.RawClicksPS); else stats.ClickValue += Math.round(clickersOwned * 0.5 + 0.10 * stats.RawClicksPS);
    if (clickersOwned == 1) { clickerImg.style.animation = 'clickermov 2s forwards'; setTimeout(function () { clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)'; clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
    stats.TotalClickHelpers++;
    clickerScale++;
  }
});

superClickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= superClickerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= superClickerCost;
    stats.TrueClicks -= superClickerCost;
    superClickersOwned++;
    superClickerCPSWorth += superClickerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (superClickerCPS * 2);
      stats.RawClicksPS += superClickerCPS;
      superClickerCPS += Math.abs(Math.round(superClickersOwned * 15 + (0.2 * stats.RawClicksPS)));
      superClickerCost += Math.round((superClickerScale * stats.RawClicksPS) + superClickersOwned * 4 + lib.rng(10000, 30000));
    } else { stats.ClicksPS += superClickerCPS; superClickerCPS += Math.abs(Math.round(superClickersOwned * 15 + (0.2 * stats.ClicksPS))); superClickerCost += Math.round((superClickerScale * stats.ClicksPS) + superClickersOwned * 4 + lib.rng(10000, 30000)); }
    if (buff != 'none') stats.RawClickVal += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS); else stats.ClickValue += Math.round(superClickersOwned * 2 + 0.01 * stats.RawClicksPS);
    if (superClickersOwned == 1) { superClickerImg.style.animation = 'superclickermov 2s forwards'; setTimeout(function () { superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)'; superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
    stats.TotalClickHelpers++;
    superClickerScale += 5;
  }
});

doublePointerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= doublePointerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= doublePointerCost;
    stats.TrueClicks -= doublePointerCost;
    doublePointersOwned++;
    doublePointerCPSWorth += doublePointerCPS;
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (doublePointerCPS * 2);
      stats.RawClicksPS += doublePointerCPS;
      doublePointerCPS += Math.abs(Math.round(doublePointersOwned * 5 + (0.4 * stats.RawClicksPS) + lib.rng(1000, 3000)));
      doublePointerCost += Math.round(doublePointersOwned + (doublePointerScale * stats.RawClicksPS) + doublePointersOwned * 5 + lib.rng(250000, 500000));
    } else { stats.ClicksPS += doublePointerCPS; doublePointerCPS += Math.abs(Math.round(doublePointersOwned * 5 + (0.4 * stats.ClicksPS) + lib.rng(1000, 3000))); doublePointerCost += Math.round(doublePointersOwned + (doublePointerScale * stats.ClicksPS) + doublePointersOwned * 5 + lib.rng(500000, 1000000)); }
    if (buff != 'none') stats.RawClickVal += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS); else stats.ClickValue += Math.round(doublePointersOwned * 3 + 0.03 * stats.RawClicksPS);
    if (doublePointersOwned == 1) { doublePointerImg.style.animation = 'doublepointermov 2s forwards'; setTimeout(function () { doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)'; doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate'; }, 3000); }
    doublePointerScale += 10;
    stats.TotalClickHelpers++;
  }
});

upgradeButton.addEventListener('click', function () {
  sfx.play();
  sfx5 = new Audio();
  sfx5.src = './snd/shopbuy.mp3';
  shopPanel.style.display = 'none';
  if (cursorOwned) cursorImg.style.display = 'block';
  upgradeShopPanel.style.display = 'block';
  if (clickersOwned == 0) clickerImg.style.display = 'none';
  if (superClickersOwned == 0) superClickerImg.style.display = 'none';
  if (doublePointersOwned == 0) doublePointerImg.style.display = 'none';
  if (employeeUnlocked) employeeImg.style.display = 'block';
  if (superCursorUnlocked) superCursorImg.style.display = 'block';
  if (godFingerUnlocked) godFingerImg.style.display = 'block';
  if (clickerFusionUnlocked) clickerFusionImg.style.display = 'block';
});

upgradeRTS.addEventListener('click', function () {
  sfx.play();
  shopPanel.style.display = 'block';
  upgradeShopPanel.style.display = 'none';
  clickerImg.style.display = 'block';
  if (superClickerUnlocked) superClickerImg.style.display = 'block';
  if (doublePointerUnlocked) doublePointerImg.style.display = 'block';
  if (!cursorOwned) cursorImg.style.display = 'none';
  if (!superCursorOwned) superCursorImg.style.display = 'none';
  if (employeesOwned < 1) employeeImg.style.display = 'none';
  if (!godFingerOwned) godFingerImg.style.display = 'none';
  if (!clickerFusionOwned) clickerFusionImg.style.display = 'none';
});

cursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= cursorCost && !cursorOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= cursorCost;
    stats.TrueClicks -= cursorCost;
    cursorOwned = !cursorOwned; //True
    clickerCPSWorth += Math.round(clickerCPSWorth * cursorCPS);
    superClickerCPSWorth += Math.round(superClickerCPSWorth * cursorCPS);
    doublePointerCPSWorth += Math.round(doublePointerCPSWorth * cursorCPS);
    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (cursorCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * cursorCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * cursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.08 * stats.RawClicksPS); else stats.ClickValue += Math.round(0.08 * stats.RawClicksPS);
    cursorCost = 'Owned.';
    stats.TotalClickHelpers++;
    cursorImg.parentNode.removeChild(cursorImg);
    statsPanel.appendChild(cursorImg);
    if (cursorOwned) cursorImg.style.animationPlayState = 'running';
  }
});

superCursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= superCursorCost && !superCursorOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= superCursorCost;
    stats.TrueClicks -= superCursorCost;
    superCursorOwned = !superCursorOwned; //True
    clickerCPSWorth += Math.round(clickerCPSWorth * superCursorCPS);
    superClickerCPSWorth += Math.round(superClickerCPSWorth * superCursorCPS);
    doublePointerCPSWorth += Math.round(doublePointerCPSWorth * superCursorCPS);
    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (superCursorCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * superCursorCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * superCursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.09 * stats.RawClicksPS); else stats.ClickValue += Math.round(0.09 * stats.RawClicksPS);
    superCursorCost = 'Owned.';
    stats.TotalClickHelpers++;
    superCursorImg.parentNode.removeChild(superCursorImg);
    statsPanel.appendChild(superCursorImg);
    superCursorImg.style.animationPlayState = 'running';
  }
});

employeeBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= employeeCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= employeeCost;
    stats.TrueClicks -= employeeCost;
    employeesOwned++;
    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (employeeCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * employeeCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * employeeCPS);
    employeeCost += ((employeesOwned * 2) * employeeCost) + 75 * stats.ClicksPS;
    employeeCPS *= 2;
    stats.OfflineClicksPSPercen += 0.001;
    stats.TotalClickHelpers++;
    if (employeesOwned == 1) {
      employeeImg.parentNode.removeChild(employeeImg);
      game.appendChild(employeeImg);
      employeeImg.style.animationPlayState = 'running';
      setTimeout(function () { employeeImg.style.transform = 'translate3d(39.8vw, -5vw, 0)'; employeeImg.style.animation = 'employeerock 2s linear infinite alternate'; }, 3000);
    }
    offlineCPSString.style.display = 'block';
  }
});

godFingerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= godFingerCost && !godFingerOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    stats.Clicks -= godFingerCost;
    stats.TrueClicks -= godFingerCost;
    godFingerOwned = !godFingerOwned; //True
    if (buff != 'none') stats.RawClickVal += Math.round(godFingerCV * stats.RawClickVal); else stats.ClickValue += Math.round(godFingerCV * stats.ClickValue);
    godFingerCost = 'Owned.';
    stats.TotalClickHelpers++;
    godFingerImg.parentNode.removeChild(godFingerImg);
    statsPanel.appendChild(godFingerImg);
    godFingerImg.style.animationPlayState = 'running';
  }
});

clickerFusionBuy.addEventListener('click', function () {
  sfx.play();
  if (clickersOwned >= 150 && !clickerFusionOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';
    clickerFusionOwned = !clickerFusionOwned; //True
    clickerCPSWorth += Math.round(clickerCPSWorth * 1.5);
    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round((clickerCPSWorth * 1.5) * 2); stats.RawCPS += Math.round(clickerCPSWorth * 1.5); } else stats.ClicksPS += Math.round(clickerCPSWorth * 1.5);
    clickerFusionCost = 'Owned';
    stats.TotalClickHelpers++;
    clickerFusionImg.parentNode.removeChild(clickerFusionImg);
    statsPanel.appendChild(clickerFusionImg);
    clickerFusionImg.style.animationPlayState = 'running';
  }
});

saveButton.addEventListener('click', function () { sfx.play(); manualSave = !0; saveGame(); });
saveButton.addEventListener('mouseover', function () { savingString.style.top = '4vw'; });
saveButton.addEventListener('mouseleave', function () { savingString.style.top = '2.6vw'; });
wipeSaveButton.addEventListener('click', function () { sfx.play(); wipeSave(); });
debugKeySubmit.addEventListener('click', function (event) { event.preventDefault(); try { let dmkInput = atob(debugKeyInput.value); } catch (error) { dmkInput = debugKeyInput.value; } if (dmkInput == generatedKey) { debugKeyInputScreen.style.display = 'none'; debugScreen.style.display = 'block'; keyEntered = !keyEntered; /*True*/ } else { incorrectKeyLabel.style.display = 'block'; incorrectKeyLabel.textContent = 'Incorrect key.'; SHT = 500; } });
achievementsButton.addEventListener('click', function () { game.style.display = 'none'; achievementsPanel.style.display = 'block'; let index = 0; lib.achLabelSwitch(index); });
backToGame.addEventListener('click', function () { sfx.play(); game.style.display = 'block'; achievementsPanel.style.display = 'none'; });
journeyBegins.addEventListener('click', function () { let index = 0; lib.achLabelSwitch(index); });
aGoodStart.addEventListener('click', function () { let index = 1; lib.achLabelSwitch(index); });
gettingThere.addEventListener('click', function () { let index = 2; lib.achLabelSwitch(index); });
millionare.addEventListener('click', function () { let index = 3; lib.achLabelSwitch(index); });
coinPool.addEventListener('click', function () { let index = 4; lib.achLabelSwitch(index); });
abundance.addEventListener('click', function () { let index = 5; lib.achLabelSwitch(index); });
billionare.addEventListener('click', function () { let index = 6; lib.achLabelSwitch(index); });
excess.addEventListener('click', function () { let index = 7; lib.achLabelSwitch(index); });
planetOfClicks.addEventListener('click', function () { let index = 8; lib.achLabelSwitch(index); });
trillionare.addEventListener('click', function () { let index = 9; lib.achLabelSwitch(index); });
pocketDimension.addEventListener('click', function () { let index = 10; lib.achLabelSwitch(index); });
farTooMany.addEventListener('click', function () { let index = 11; lib.achLabelSwitch(index); });
quadrillionare.addEventListener('click', function () { let index = 12; lib.achLabelSwitch(index); });
coinVortex.addEventListener('click', function () { let index = 13; lib.achLabelSwitch(index); });
coinShapedBlackHole.addEventListener('click', function () { let index = 14; lib.achLabelSwitch(index); });
quintillionare.addEventListener('click', function () { let index = 15; lib.achLabelSwitch(index); });
clickBeyond.addEventListener('click', function () { let index = 16; lib.achLabelSwitch(index); });
distantBeginning.addEventListener('click', function () { let index = 17; lib.achLabelSwitch(index); });
sextillionare.addEventListener('click', function () { let index = 18; lib.achLabelSwitch(index); });
numberOverflow.addEventListener('click', function () { let index = 19; lib.achLabelSwitch(index); });
coinUniverse.addEventListener('click', function () { let index = 20; lib.achLabelSwitch(index); });
septillionare.addEventListener('click', function () { let index = 21; lib.achLabelSwitch(index); });
why.addEventListener('click', function () { let index = 22; lib.achLabelSwitch(index); });
twentyFingers.addEventListener('click', function () { let index = 23; lib.achLabelSwitch(index); });
forTheWorthy.addEventListener('click', function () { let index = 24; lib.achLabelSwitch(index); });
breakpoint.addEventListener('click', function () { let index = 25; lib.achLabelSwitch(index); });
cheater.addEventListener('click', function () { let index = 26; lib.achLabelSwitch(index); });
cmdForm.addEventListener("submit", function (event) { event.preventDefault(); commandInterpret(); });
settingsButton.addEventListener('click', function () { sfx.play(); settingsPanel.style.display = 'block'; game.style.display = 'none'; });
backToGame2.addEventListener('click', function () { sfx.play(); game.style.display = 'block'; settingsPanel.style.display = 'none'; });
volumeInput.addEventListener('change', function () { try { let sndArr = [bgm, sfx, sfx2, sfx3, sfx4, sfx5, sfx6, sfx7, sfx7point1]; if (volumeInput.value >= 0 && volumeInput.value <= 100 && readyToSave) { volume = volumeInput.value / 100; for (let i = 0; i < sndArr.length; i++) sndArr[i].volume = volume; } else volumeInput.value = volume * 100; } catch (error) { errorHandler(error); } });
autoBuyBtn.addEventListener('click', function () { if (doAutobuy) { autoBuyBtn.textContent = 'OFF'; doAutobuy = !1; } else { autoBuyBtn.textContent = 'ON'; doAutobuy = !0; } });
bgGradCenterInput.addEventListener('change', function () { document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`; });
bgGradEdgeInput.addEventListener('change', function () { document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`; });
graphicsBtn.addEventListener('click', function () { if (graphicsMode == 'Quality') graphicsMode = 'Performance'; else graphicsMode = 'Quality'; graphicsBtn.textContent = graphicsMode; });
resetBgButton.addEventListener('click', function () { let prompt = confirm('This is completely irreversible! Are you sure you wish to continue? (You will need to save again for these changes to stay.)'); if (prompt) { bgGradCenterInput.value = '250, 224, 65'; bgGradEdgeInput.value = '249, 160, 40'; document.body.style.backgroundImage = 'radial-gradient(rgb(250, 224, 65), rgb(249, 160, 40))'; } });
bgm.addEventListener('ended', function () { setTimeout(function () { bgm = new Audio(); bgm.src = './snd/bgm.mp3'; bgm.play(); }, 1000) });

window.addEventListener('beforeunload', function (event) {
  event.stopImmediatePropagation();
  $('.bg').remove();
  $('.coinparticle').remove();
  if (buff == 'none' && (doAutosave || debug)) saveGame(); else event.preventDefault();
});

window.addEventListener('gamepadconnected', function (event) {
  event.gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 100, weakMagnitude: 1.0, strongMagnitude: 1.0 });
  setTimeout(function () { event.gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 100, weakMagnitude: 1.0, strongMagnitude: 1.0 }); }, 500);
  globalThis.gamepad = event.gamepad;
  this.setInterval(function () { gamepad = navigator.getGamepads()[0] }, 1);
  unlockString.textContent = `Gamepad connected: ${event.gamepad.id}`;
  SHT = 500;
});

document.addEventListener('loadevt', function () {
  try {
    loadingScreen.style.display = 'none';
    hiddenWhileLoading.style.display = 'block';
    $('.hasanim').css('-webkit-animation-play-state', 'paused');
    $('.coins').css('-webkit-animation-play-state', 'running');
    $('#skipintrostring').css('-webkit-animation-play-state', 'running');
    setTimeout(function () {
      if (!init.GameStarted) sfx6.play();
      smallCoin3.style.animation = 'smallCoinMove3 1.5s 0.5s forwards';
      smallCoin4.style.animation = 'smallCoinMove4 1.5s 0.5s forwards';
      sfx6 = new Audio();
      sfx6.src = './snd/coinwhoosh.mp3';
      setTimeout(function () { if (!init.GameStarted) sfx6.play(); }, 500);
      smallCoin1.style.animation = 'smallCoinMove1 1.5s 0.8s forwards';
      smallCoin2.style.animation = 'smallCoinMove2 1.5s 0.8s forwards';
      setTimeout(function () { setTimeout(function () { if (!init.GameStarted) sfx7.play(); if (!prompting) { $('#title').css('-webkit-animation-play-state', 'running'); $('#tsclicker').css('-webkit-animation-play-state', 'running'); } skipIntroString.style.animation = 'btmstringmov 1s ease-in forwards'; setTimeout(function () { if (!init.GameStarted) sfx7point1.play(); if (!prompting) $('#betastring').css('-webkit-animation-play-state', 'running'); setTimeout(function () { if (!init.GameStarted) sfx7.play(); if (!prompting) $('#updatestring').css('-webkit-animation-play-state', 'running'); setTimeout(function () { smallCoin3.style.rotate = '270deg'; smallCoin4.style.rotate = '270deg'; smallCoin1.style.animation = 'smallCoinSpin1 10s linear infinite'; smallCoin2.style.animation = 'smallCoinSpin2 10s linear infinite'; smallCoin3.style.animation = 'smallCoinSpin3 10s linear infinite'; smallCoin4.style.animation = 'smallCoinSpin4 10s linear infinite'; setTimeout(function () { if (!prompting) $('#startbutton').css('-webkit-animation-play-state', 'running'); setTimeout(function () { if (!prompting) { $('.btmstr').css('-webkit-animation-play-state', 'running'); $('#bmbarnote').css('-webkit-animation-play-state', 'running'); } }, 1600); /*8.4s*/ }, 1800); /*6.8s*/ }, 900); /*5.0s*/ }, 400); /*4.1s*/ }, 500); /*3.7s*/ }, 300); /*3.2s*/ }, 1200); /*2.9s*/
    }, 1700); /*1.7s*/
  } catch (error) { errorHandler(error); }
});

document.addEventListener('keydown', function (event) {
  try {
    titleScreen.appendChild(key);
    if ((event.key == 's' || event.key == 'S') && event.ctrlKey && debugScreenState == 'closed' && !debugAutoplay) {
      event.preventDefault();
      manualSave = !0;
      saveGame();
    } else if ((event.key == 'y' || event.key == 'Y') && event.ctrlKey) {
      event.preventDefault();
      createBase64Key();
    } else if ((event.key == 'y' || event.key == 'Y') && event.altKey) {
      event.preventDefault(); if (init.GameStarted && debugScreenState == 'closed' && game.style.display == 'block') {
        debugScreenState = 'open';
        game.style.display = 'none';
        if (!keyEntered) debugKeyInputScreen.style.display = 'block'; else if (keyEntered) debugScreen.style.display = 'block';
      } else if (init.GameStarted && debugScreenState == 'open' && game.style.display == 'none') {
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
      let prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will not affect your save.)');
      if (prompt) {
        debugAutoplay = !debugAutoplay; /*True*/ startButton.click();
      } else prompting = !prompting //False
    } else if ((event.key == 'c' || event.key == 'C') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      debug = !debug; //True
      doAutosave = !doAutosave; //False
      prompting = !prompting; //True
      let prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will just enable debug mode, not debug autoplay.)');
      if (prompt) debugAutoplay = !debugAutoplay; /*True*/ else prompting = !prompting; /*False*/
      startButton.click();
    } else if ((event.key == 'f' || event.key == 'F') && event.shiftKey && fpsLabel.style.display == 'none') fpsLabel.style.display = 'block';
    else if ((event.key == 'f' || event.key == 'F') && event.shiftKey && fpsLabel.style.display == 'block') fpsLabel.style.display = 'none';
    else if ((event.key == '-' || event.key == '=') && event.ctrlKey) event.preventDefault();
    else if ((event.key == 'a' || event.key == 'A') && game.style.display == 'block') achievementsButton.click(); else if ((event.key == 'a' || event.key == 'A') && achievementsPanel.style.display == 'block') backToGame.click();
    else if ((event.key == 's' || event.key == 'S') && game.style.display == 'block') settingsButton.click();
    else if ((event.key == 's' || event.key == 'S') && settingsPanel.style.display == 'block') backToGame2.click();
    else if ((event.key == 'u' || event.key == 'U') && shopPanel.style.display == 'block' && debugKeyInputScreen.style.display != 'block' && debugScreen.style.display != 'block') upgradeButton.click();
    else if ((event.key == 'u' || event.key == 'U') && shopPanel.style.display == 'none' && debugKeyInputScreen.style.display != 'block' && debugScreen.style.display != 'block') upgradeRTS.click();
    else if ((event.key == 'b' || event.key == 'B') && init.GameStarted && event.target != debugKeyInput && event.target != commandInput) autoBuyBtn.click();
    else if (event.key == 'ArrowUp') {
      if (cmdHist[cmdHistInx - 1] != undefined) cmdHistInx--;
      commandInput.value = cmdHist[cmdHistInx];
      if (cmdHist[cmdHistInx] == undefined) commandInput.value = '';
    } else if (event.key == 'ArrowDown') {
      if (cmdHist[cmdHistInx + 1] != undefined) cmdHistInx++;
      commandInput.value = cmdHist[cmdHistInx];
      if (cmdHist[cmdHistInx] == undefined) commandInput.value = '';
    }
  } catch (error) { errorHandler(error); }
});

document.addEventListener('keyup', function (event) { if (event.key == ' ' && game.style.display == 'block') coin.click(); });

document.addEventListener('mousemove', function (event) {
  let left = event.clientX,
    top = event.clientY;
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
});

betaString.addEventListener('animationend', function () { startBgCreate = !startBgCreate /*True*/ });

//Function intervals
setTimeout(createBgElem, bgUpdInterval); //These are intervals, but are set up differently
setTimeout(updateScreen, updInterval); //to allow for live updating of the interval times.
setInterval(autoplay, 150);
setInterval(cpsClick, 100);
setInterval(rgChange, 25);
setInterval(function () { if (doAutosave && buff == 'none' && init.GameStarted && achArr[0]) { manualSave = !1; saveGame(); } else if (buff != 'none') autosavePending = !autosavePending /*True*/ }, 60000);
setInterval(function () { if (textSwitch && !debugAutoplay) { saveInfoString.textContent = `Last saved: ${lastSavedTime}`; textSwitch = !1; } else if (!textSwitch && !debugAutoplay) { if (doAutosave) saveInfoString.textContent = 'Game autosaves every minute; You can also press Ctrl+S to save.'; else saveInfoString.textContent = 'Autosave is disabled. You will need to save manually.'; textSwitch = !0; } }, 3000);
var buttonPressed = !1;
setInterval(function () { if (achArr[0]) stats.Playtime += 1000; buffRNGCalc(); }, 1000);
setInterval(function () {
  SHT--;
  if (SHT == 0) {
    savingString.textContent = '';
    unlockString.textContent = '';
    incorrectKeyLabel.textContent = '';
    if (!debugAutoplay) readyToSave = !0;
    SHT = 500;
  }
  if (doAutobuy) {
    autoBuyStr.style.display = 'block';
    autoBuyBtn.textContent = 'ON';
    costArray = [Math.abs(clickerCost), Math.abs(superClickerCost), Math.abs(doublePointerCost), Math.abs(cursorCost), Math.abs(superCursorCost), Math.abs(employeeCost), Math.abs(godFingerCost)];
    let smallest = Number.MAX_VALUE,
      costArraySorted = [],
      buttonArraySorted = [];
    for (let i = 0; i < costArray.length; i++) if (costArray[i] < smallest) smallest = costArray[i];
    for (let i = 0; i < costArray.length; i++) if (smallest >= costArray[i]) { costArraySorted.push(costArray[i]); buttonArraySorted.push(buttonArray[i]); }
    for (let i = 0; i < costArraySorted.length; i++) if (stats.Clicks >= costArraySorted[i]) buttonArraySorted[i].click();
  } else { autoBuyStr.style.display = 'none'; autoBuyBtn.textContent = 'OFF'; }
  if (autosavePending && !debugAutoplay && doAutosave) savingString.textContent = 'A buff is active. Autosave postponed.';
  if (buff == 'none' && autosavePending && doAutosave) { autosavePending = !1; manualSave = !1; saveGame(); }
  if (graphicsMode == 'Quality') {
    const particleClass = document.querySelectorAll('.coinparticle'),
      bgParticleClass = document.querySelectorAll('.bg');
    if (particleClass.length > 25) for (let i = 20; i > 0; i--) particleClass[i].parentNode.removeChild(particleClass[i]);
    if (bgParticleClass.length > bgMax) for (let i = 35; i > 0; i--) bgParticleClass[i].parentNode.removeChild(bgParticleClass[i]);
    if (game.style.display == 'none') $('.coinparticle').remove();
    if (document.hidden) $('.bg').remove();
  }
  if (stats.Clicks != stats.TrueClicks && !achArr[26]) {
    achStr = `Achievement Unlocked: ${achNames[26]}`;
    if (init.DataLoaded) { sfx4.play(); unlockString.textContent = achStr; unlockString.style.display = 'block'; }
    achArr[26] = !0;
    stats.AchievementsUnlocked++;
    stats.HiddenAchievementsUnlocked++;
    SHT = 500;
  }
  if (achArr[6]) { bgUpdInterval = 100; bgMax = 105; }
  if (achArr[9]) { bgUpdInterval = 50; createCoinBg = !0; bgMax = 210; }
  if (gamepad) {
    cross = gamepad.buttons[0].pressed;
    circle = gamepad.buttons[1].pressed;
    square = gamepad.buttons[2].pressed;
    triangle = gamepad.buttons[3].pressed;
    l1 = gamepad.buttons[4].pressed;
    r1 = gamepad.buttons[5].pressed;
    l2 = gamepad.buttons[6].pressed;
    r2 = gamepad.buttons[7].pressed;
    share = gamepad.buttons[8].pressed;
    options = gamepad.buttons[9].pressed;
    l3 = gamepad.buttons[10].pressed;
    r3 = gamepad.buttons[11].pressed;
    dpadUp = gamepad.buttons[12].pressed;
    dpadDown = gamepad.buttons[13].pressed;
    dpadLeft = gamepad.buttons[14].pressed;
    dpadRight = gamepad.buttons[15].pressed;
    if (!cross && !circle && !square && !triangle && !l1 && !r1 && !l2 && !r2 && !share && !options && !l3 && !r3 && !dpadUp && !dpadDown && !dpadLeft && !dpadRight) buttonPressed = !1;
    if (cross && !init.GameStarted) startButton.click();
    if ((circle || cross) && init.GameStarted && !buttonPressed) { buttonPressed = !0; coin.click(); }
    if (square && init.GameStarted && !buttonPressed) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (shopPanel.style.display == 'block') upgradeButton.click();
      else if (upgradeShopPanel.style.display == 'block') upgradeRTS.click();
    }
    if (triangle && init.GameStarted && !buttonPressed) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      manualSave = !0;
      saveGame();
    }
    if (share && init.GameStarted && !buttonPressed) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (game.style.display == 'block') achievementsButton.click();
      else if (achievementsPanel.style.display == 'block') backToGame.click();
    }
    if (options && init.GameStarted && !buttonPressed) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (game.style.display == 'block') settingsButton.click();
      else if (settingsPanel.style.display == 'block') backToGame2.click();
    }
    if (l1 && init.GameStarted && !buttonPressed) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') clickerBuy.click();
      else cursorBuy.click();
    }
    if (r1 && init.GameStarted && !buttonPressed && (superClickerUnlocked || superCursorUnlocked)) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') superClickerBuy.click();
      else superCursorBuy.click();
    }
    if (l2 && init.GameStarted && !buttonPressed && (doublePointerUnlocked || employeeUnlocked)) {
      buttonPressed = !0;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') doublePointerBuy.click();
      else employeeBuy.click();
    }
    if (l3 && init.GameStarted && !buttonPressed) { buttonPressed = !0; gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 }); autoBuyBtn.click(); }
    if (r3) location.reload();
    if (dpadUp) { let gamepadActive = true; wipeSave(gamepadActive); }
    if (r2 && init.GameStarted && !buttonPressed && godFingerUnlocked) { buttonPressed = !0; gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 }); if (upgradeShopPanel.style.display == 'block') godFingerBuy.click(); }
    if (dpadLeft && init.GameStarted && !buttonPressed && achievementsPanel.style.display == 'block') { buttonPressed = !0; if (gpAchIndex > 0) gpAchIndex--; lib.achLabelSwitch(gpAchIndex); } else if (dpadLeft && init.GameStarted && !buttonPressed && upgradeShopPanel.style.display == 'block' && clickerFusionUnlocked) { buttonPressed = !0; gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 }); clickerFusionBuy.click(); }
    if (dpadRight && init.GameStarted && !buttonPressed && achievementsPanel.style.display == 'block') { buttonPressed = !0; if (gpAchIndex < 24) gpAchIndex++; lib.achLabelSwitch(gpAchIndex); }
  }
}, 1);

const loadEvt = new Event('loadevt');
document.dispatchEvent(loadEvt);
