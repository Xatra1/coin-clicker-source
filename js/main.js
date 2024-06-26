//*********************************************************************************************************************
//*********************************************************************************************************************
//                                       Coin Clicker Update 7 Codename 'Animation'
//                                               Build 5.2 Animation Beta
//
//                                                    Spoilers ahead!
//*********************************************************************************************************************
//*********************************************************************************************************************



//***************************************/
//  Loading screen and error handler
//***************************************/

const loadingScreen = document.getElementById('loadingscreen'),
  hiddenWhileLoading = document.getElementById('hideloading'),
  error = document.createElement('p'),
  errorStack = document.createElement('p');

function errorHandler(err) {
  error.textContent = `Script error: ${err}`;
  errorStack.textContent = `Stack trace: ${err.stack}`;
  error.style.position = 'fixed';
  error.style.top = '-0.3vh';
  error.style.fontSize = '0.7vw';
  error.style.display = 'block';
  error.style.color = 'white';
  error.style.backgroundColor = 'black';
  error.style.fontFamily = 'Liberation Mono, monospace, monospace'
  errorStack.style.position = 'fixed';
  errorStack.style.top = '2vh';
  errorStack.style.fontSize = '0.7vw';
  errorStack.style.display = 'block';
  errorStack.style.color = 'white';
  errorStack.style.backgroundColor = 'black';
  errorStack.style.fontFamily = 'Liberation Mono, monospace, monospace';
  document.body.appendChild(error);
  document.body.appendChild(errorStack);
}

// Create initial variables and call system check function
const runningBrowserString = document.getElementById('runningbrowserstring'),
  titleScreen = document.getElementById('titlescreen');
var debugConsole = document.getElementById('debugconsole').textContent,
  browserStr = 'Undetected',
  os = 'Undetected',
  url = window.location.href;
sysCheck();

// Snoop through the client's user agent string to find various aspects of the system such as browser and OS.
function sysCheck() {
  // Shorthands, arrays, and indexes
  let userAgent = navigator.userAgent,
    userAgentData = navigator.userAgentData,
    browsers = ['MSIE', 'Firefox', 'Safari', 'Chrome', 'OPR', 'Edg'],
    oses = ['X11', 'Windows', 'Mac', 'Linux'],
    index = browsers.length - 1,
    osIndex = oses.length - 1;

  // Find the browser brand
  while (index > -1 && userAgent.indexOf(browsers[index]) == -1) index--;
  if (index > -1) browserStr = browsers[index];

  // Use user agent data to easily find the client's platform if their browser supports it
  if (userAgentData != undefined) os = userAgentData.platform;

  // Manually set PlayStation as the OS if it's found in the user agent string.
  else if (userAgent.includes('PlayStation')) os = 'PlayStation';

  // Perform a similar user agent string snoop to find the OS.
  else {
    while (osIndex > -1 && userAgent.indexOf(oses[osIndex]) == -1) osIndex--;
    if (osIndex > -1) os = oses[osIndex];
    if (os == 'X11') os = 'Unix';
  }

  // Normalize browser strings
  if (browserStr == 'Edg') browserStr = 'Edge'; else if (browserStr == 'OPR') browserStr = 'Opera';

  // Attempt to detect and shorten proper URL
  if (url == 'https://coin-clicker.surge.sh/') url = 'Surge';
  else if (window.location.pathname.includes('index.html')) url = 'Local File';

  // Assemble a title screen string and display the title screen.
  runningBrowserString.textContent = `${browserStr} on ${os} saying hello from ${url}`;
  titleScreen.style.display = 'block';
}

//***************************************/
//             Title screen
//***************************************/

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

  //***************************************/
  //             Game screen
  //***************************************/

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

  //***************************************/
  //              Shop panel
  //***************************************/

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

  //***************************************/
  //          Upgrade shop panel
  //***************************************/

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

  //***************************************/
  //             Stats panel
  //***************************************/

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

  //***************************************/
  //             Debug screen
  //***************************************/

  debugKeyInputScreen = document.getElementById('debuginputscreen'),
  debugKeyInput = document.getElementById('debugkeyinput'),
  debugKeySubmit = document.getElementById('debugkeysubmit'),
  incorrectKeyLabel = document.getElementById('incorrectkeyentered'),
  debugScreen = document.getElementById('debugscreen'),
  cmdForm = document.getElementById('debugconsinput'),
  commandInput = document.getElementById('debugcmdinput'),

  //***************************************/
  //          Achievements screen
  //***************************************/

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

  //***************************************/
  //           Settings screen
  //***************************************/

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

//****************************************/
//              Audio files
//****************************************/

var bgm = document.getElementById('bgm'), //C418 - Click
  sfx = document.getElementById('sfx'), //Click
  sfx5 = document.getElementById('sfx5'), //Shop Buy
  sfx6 = document.getElementById('sfx6'); //Coin Whoosh
const sfx2 = document.getElementById('sfx2'), //Shop Unlock
  sfx3 = document.getElementById('sfx3'), //Achievement Unlock
  sfx4 = document.getElementById('sfx4'), //Special Achievement/Clicker Fusion Unlock
  sfx7 = document.getElementById('sfx7'), //Title Screen String Whoosh
  sfx7point1 = document.getElementById('sfx7.1'), //Title Screen String Whoosh

  //***************************************/
  //              Namespaces
  //***************************************/

  /**
   * Flags that control many different behaviors of the game.
   */
  init = { GameStarted: false, DataLoaded: false },

  /**
   * Build information
   */
  buildInfo = { BuildStr: '5.2anb', BuildNum: 5.2, UpdName: 'animation', UpdNum: 7 },

  /**
   * Values in this namespace get slowly incremented until they are equal to their corresponding values.
   */
  display = { Clicks: 0, ClickValue: 1, RawClickVal: 1, ClicksPS: 0, RawClicksPS: 0, LifetimeClicks: 0, LifetimeManualClicks: 0, CoinClickCount: 0, ClickerCPS: 0, ClickerCost: 0, SuperClickerCPS: 0, SuperClickerCost: 0, DoublePointerCPS: 0, DoublePointerCost: 0, EmployeeCost: 0, Playtime: 0 },

  /**
   * Basic, smaller functions that provide general functionality to various parts of the game
   */
  lib = {
    /**
     * @param {number} min Minimum value for the range
     * @param {number} max Maximum value for the range
     * @returns Random value between min and max
     */
    rng: (min, max) => {
      return Math.floor((Math.random() * (max - min) + min))
    },

    /**
     * Change the achievement name, description, and unlock string elements of the achievements panel to be equal to the index of the button clicked.
     * @param {number} index1 The index where the corresponding achievements data is kept.
     */
    achLabelSwitch: (index) => {
      sfx.play();
      achNameStr.textContent = ach[index][0];
      achDescStr.textContent = ach[index][1];
      achUnlockStr.textContent = ach[index][3] ? 'Unlocked.' : 'Not unlocked.';
    },

    /**
     * Looping function that constantly updates the game's framerate
     */
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

//***************************************/
//                Classes
//***************************************/

/**
 * Base stats. Gets reconstructed by wipeSave() to restore the player's original stats.
 */
class baseStats { constructor() { this.Clicks = 0; this.TrueClicks = 0; this.ClickValue = 1; this.RawClickVal = 1; this.ClicksPS = 0; this.RawClicksPS = 0; this.Playtime = 0; this.LifetimeClicks = 0; this.LifetimeManualClicks = 0; this.CoinClickCount = 0; this.TotalClickHelpers = 0; this.AchievementsUnlocked = 0; this.HiddenAchievementsUnlocked = 0; this.OfflineClicksPSPercen = 0; } };

/**
 * Base shop values (CPS, costs, scale, amount owned, etc). Gets reconstructed by wipeSave() to restore the original state of shop items
 */
class baseShop { constructor() { this.ClickerCPS = 5; this.ClickerCost = 25; this.ClickerScale = 5; this.ClickersOwned = 0; this.ClickerCPSWorth = 0; this.SuperClickerUnlocked = false; this.SuperClickerCPS = 7500; this.SuperClickerCost = 3000000; this.SuperClickerScale = 25; this.SuperClickersOwned = 0; this.SuperClickerCPSWorth = 0; this.DoublePointerUnlocked = false; this.DoublePointerCPS = 50000000; this.DoublePointerScale = 75; this.DoublePointerCost = 5000000000; this.DoublePointersOwned = 0; this.DoublePointerCPSWorth = 0; this.DoAutobuy = false; } };

/**
 * Base upgrade shop values (CPS, costs, owned/amount owned, etc). Gets reconstructed by wipeSave() to restore the original state of upgrade shop items.
 */
class baseUpgShop { constructor() { this.CursorCPS = 1.00; this.CursorCost = 1000000000; this.CursorOwned = false; this.SuperCursorUnlocked = false; this.SuperCursorCPS = 1.50; this.SuperCursorCost = 150000000000; this.SuperCursorOwned = false; this.EmployeeUnlocked = false; this.EmployeeCPS = 0.05; this.EmployeeCost = 250000000000; this.EmployeesOwned = 0; this.GodFingerUnlocked = false; this.GodFingerCV = 0.35; this.GodFingerCost = 5000000000000; this.GodFingerOwned = false; this.ClickerFusionCost = ''; this.ClickerFusionUnlocked = false; this.ClickerFusionOwned = false; } };

// Class initializations
// This makes the classes above work similarly to the old namespace implementation, but allows them to be recreated to restore original values.
var stats = new baseStats(),
  shop = new baseShop(),
  uShop = new baseUpgShop(),

  // Background elements
  bg = document.createElement('img'),
  coinParticle = document.createElement('img'),

  // Save and load variables
  autosavePending = false,
  lastSavedTime = 'Never',
  textSwitch = false,
  manualSave = false,
  readyToSave = true,
  doAutosave = true, //! This variable should be 'true' in public builds.
  achCheck = true,
  SHT,

  // Buff variables
  buffRNG = 0,
  lastBuffRNG = 0,
  buff = 'none',
  clicksAdded = 0,

  // Achievement screen variables
  achStr = 'none',
  gpAchIndex = 0,

  // Audio variables
  volume = 1.0,

  // Color variables
  increase = true,
  red = 0,
  green = 0,

  // Optimization variables
  graphicsMode = 'Quality',
  updInterval,
  bgUpdInterval = 250,
  bgMax = 100,
  fps,

  // Animation variables
  startBgCreate = false,
  createCoinBg = false,
  prompting = false,

  // Debug mode variables
  generatedKey = 'debug',
  keyEntered = false,
  debugScreenState = 'closed',
  debug = false,
  debugAutoplay = false,
  forceBuff = false,

  // Debug console variables
  cmd = [],
  arg = [],
  cmdHist = [],
  cmdHistInx = 1,

  // Screen size variables
  screenHeight = window.innerHeight,
  screenWidth = window.innerWidth,
  leftBorderX = 0, // Has to be given an inital numerical value to keep the CSS parser happy, see startButton event listener for value.
  rightBorderX = 0,

  // Miscellaneous variables
  numberShorten = true,
  gamepad,

  //***************************************/
  //                Arrays
  //***************************************/

  /**
   * An array of integers that gets updated by updateScreen() and fed to the number formatter.
   */
  intArray = [],

  /**
   * An array of strings that gets updated by numberFix() containing the formatted strings made from the values in intArray
   */
  textArray = [],

  /**
   * An array of cost strings.
   */
  costStringArr = [clickerCostString, superClickerCostString, doublePointerCostString, cursorCostString, superCursorCostString, employeeCostString, godFingerCostString],

  /**
   * An array of the absolute values of item costs
   */
  costArray = [Math.abs(shop.ClickerCost), Math.abs(shop.SuperClickerCost), Math.abs(shop.DoublePointerCost), Math.abs(uShop.CursorCost), Math.abs(uShop.SuperCursorCost), Math.abs(uShop.EmployeeCost), Math.abs(uShop.GodFingerCost)],

  /**
   * An array of arrays containing achievement names, descriptions, lifetime coin requirements, and unlock statues.  
   * Currently unused.
   */
  ach = [['Journey Begins', 'Obtain 1 lifetime coin.', 1, false], ['A Good Start', 'Obtain 10 thousand lifetime coins.', 10000, false], ['Getting There', 'Obtain 100 thousand lifetime coins.', 100000, false], ['Millionare', 'Obtain 1 million lifetime coins', 1e+6, false], ['Coin Pool', 'Obtain 10 million lifetime coins.', 1e+7, false], ['Abundance', 'Obtain 100 million lifetime coins', 1e+8, false], ['Billionare', 'Obtain 1 billion lifetime coins.', 1e+9, false], ['Excess', 'Obtain 10 billion lifetime coins.', 1e+10, false], ['Planet of Coins', 'Obtain 100 billion lifetime coins', 1e+11, false], ['Trillionare', 'Obtain 1 trillion lifetime coins.', 1e+12, false], ['Pocket Dimension', 'Obtain 10 trillion lifetime coins.', 1e+13, false], ['Far Too Many', 'Obtain 100 trillion lifetime coins.', 1e+14, false], ['Quadrillionare', 'Obtain 1 quadrillion lifetime coins.', 1e+15, false], ['Coin Vortex', 'Obtain 10 quadrillion lifetime coins.', 1e+16, false], ['Coin-Shaped Black Hole', 'Obtain 100 quadrillion lifetime coins.', 1e+17, false], ['Quintillionare', 'Obtain 1 quintillion lifetime coins.', 1e+18, false], ['Click Beyond', 'Obtain 10 quintillion lifetime coins.', 1e+19, false], ['Distant Beginning', 'Obtain 100 quintillion lifetime coins.', 1e+20, false], ['Sextillionare', 'Obtain 1 sextillion lifetime coins.', 1e+21, false], ['Number Overflow', 'Obtain 10 sextillion lifetime coins.', 1e+22, false], ['Coin Universe', 'Obtain 100 sextillion lifetime coins.', 1e+23, false], ['Septillionare', 'Obtain 1 septillion lifetime coins.', 1e+24, false], ['Why are you still here?', 'Obtain 10 septillion lifetime coins.', 1e+25, false], ['20 Fingers', 'Obtain 100 septillion lifetime coins.', 1e+26, false], ['For The Worthy', 'Obtain 1 octillion lifetime coins.', 1e+27, false], ['Breaking Point', 'Obtain far more lifetime coins than you should have.', Number.MAX_VALUE, false], ['Cheater', 'Hack in some money using the debug console.', null, false]],

  /**
   * An array of buttons clicked on by the game's automation features.
   */
  buttonArray = [clickerBuy, superClickerBuy, doublePointerBuy, cursorBuy, superCursorBuy, employeeBuy, godFingerBuy, clickerFusionBuy],

  /**
   * Messages to be randomly logged to the console when randomMsg() is called at the start of the game and when 'rmsg' is used in the debug console.
   */
  logChoices = ['Stay a while, and listen.', 'Boo!', 'I think you may have hit the wrong button.', 'Looking for bugs?', 'You\'re not supposed to be here.', '<insert random variable here>', 'Quit hacking in money!', 'Didn\'t expect to see you here.', 'Is this thing on?', 'I\'ve always wondered what it would look like if I wrote a really long message into the debug console so I\'m just gonna keep typing until I feel like I\'ve typed enough which is actually a lot harder than it seems considering I need to figure out what to type anyways how are you enjoying the game? I\'ve worked very hard on it and it honestly kinda sucks but who cares at least you might be having fun! This game was honestly heavily inspired by cookie clicker and that game is really really good (way better than this one) so you should go play that instead unless you want to be so rich there won\'t even be enough money on the planet to match what you have.', 'Introducing Coin Clicker: Now with less fall damage!', 'Maybe you could buy a cookie with all the coins you have.', 'Why not try tha \'pizza\' command?', 'Legend says a hidden achievement will appear if you somehow obtain infinite coins... But who listens to stuff like that anyway?', 'Hey you should try running \'wipeSave();\' in the input box, it won\'t hurt anything I promise', `Man this whole '${buildInfo.UpdName}' update isn't that great huh?`, 'Oops, all coins!', 'This whole random quote feature isn\'t a complete waste of time, I swear.', 'Magic!', 'What? I like equal signs.', `Imagine having only 0 coins`, 'Finally! I\'ve been stuck on this island for years!', 'NOTICE: Due to people trying to steal our coins from the local Coin Clicker Bank, players will now only be receiving 0.01% of their current coins per second. We apologize for the inconvenience.', 'Could you open a new window? It\'s hot in here!', 'Get out of my room!', 'Thank you for playing Coin Clicker.'],

  /**
   * A raw string containg the debug console's help manual, which can be called using the 'help' command in the debug console
   */
  man = String.raw`Coin Clicker Debug Console
  
  clear - Clears the console.
  echo - Outputs the given arguments.
  help - Displays this manual.
  exec - Executes JavaScript code.
  eval - An alias for exec, has the same function.
  pizza - Tells you how many $30 pizzas you could buy with your current amount of coins.
  rmsg - Displays a random message. You can also log a specific message by passing an argument with a value of 1-25, or pass 'all' to log all of them.
  clhis - Clears the command history.
  exit - Hides the debug console. You can press Alt+Y to show the console again after running this command.
  
  Typing any command into the console that isn't recognized will have the same effect as using the 'exec' or 'eval' commands.
  `,

  // Save and shop data
  saveData = [],
  shopData = [],

  // Used for obtaining FPS
  times = [];
//***************************************/
//    Initial run updates and calls
//***************************************/

// CSS style variables for modifying the color of the browser console text
let yellow = 'color: yellow;',
  def = 'color: inherit;',
  // Strings to log to the browser console
  debugLogs = [`${browserStr}, ${os}, ${url}`, `Running beta ${buildInfo.UpdNum} codename '${buildInfo.UpdName}' build ${buildInfo.BuildStr}`];

// Set the backgroundImage style element of the document body. This affects nothing visually, but will allow this setting to be modified appropriately by the player.
document.body.style.backgroundImage = 'radial-gradient(rgb(250, 224, 65), rgb(249, 160, 40))';

// Hide parts of the game that should not yet be displayed.
fpsLabel.style.display = 'none';
achievementsPanel.style.display = 'none';
settingsPanel.style.display = 'none';
upgradeShopPanel.style.display = 'none';

// Empty the values of debug inputs.
debugKeyInput.value = '';
commandInput.value = '';

// Set the values of setting input boxes to their defaults.
bgGradCenterInput.value = '250, 224, 65';
bgGradEdgeInput.value = '249, 160, 40';
volumeInput.value = volume * 100;

// Assemble build information strings
updateString.textContent = `the ${buildInfo.UpdName} update`;
buildString.textContent = `build ${buildInfo.BuildStr}`;

// Log to the debug and browser consoles.
debugConsole += 'Type \'help\' for a list of commands. You can press Alt+Y to get back to the game screen.\n';
for (let i = 0; i < debugLogs.length; i++) console.debug(`%c [Debug] %c${debugLogs[i]}`, yellow, def);

// Load game and modify updInterval if a graphics mode change was detected.
loadGame();
if (graphicsMode == 'Quality') updInterval = 1; else updInterval = 50;

// Start obtaining framerate.
lib.getFps();

//***************************************/
//              Functions
//***************************************/

/**
 * Automate the game if autoplay was enabled by the player. This will disable the player's ability to save, force autobuy to be always enabled, and click the coin automatically.
 */
function autoplay() {
  if (debugAutoplay && readyToSave) {
    manualSave = true;
    saveGame();
    readyToSave = false;
  } else if (debugAutoplay && init.GameStarted) {
    shop.DoAutobuy = true;
    autoBuyStr.textContent = 'Autobuy is enabled. (Forced)';
    saveInfoString.textContent = 'Saving is disabled.';
    coin.click();
  }
}

/**
 * Log a random message. This function can be called from the debug console using the 'rmsg' command.
 * @param {*} arg If the value of 'arg' is an integer, log the message at logChoices[arg]. If arg is 'all', log every message. Otherwise, select a message randomly.
 */
function randomMsg(arg) {
  // CSS style variables and selected message
  let selectedMsg,
    yellow = 'color: yellow;',
    def = 'color: inherit;';

  // If arg is an integer, log the specific index of arg
  if (!isNaN(parseInt(arg))) {
    selectedMsg = logChoices[arg];
    console.log(`=== %c${selectedMsg}%c ===`, yellow, def);
    debugConsole += `=== ${selectedMsg} ===\n`;

    // If arg is 'all', log all messages
  } else if (arg == 'all') {
    for (let i = 0; i < logChoices.length; i++) {
      selectedMsg = logChoices[i];
      console.log(`${i}: === %c${selectedMsg}%c ===`, yellow, def);
      debugConsole += `${i}: === ${selectedMsg} ===\n`;
    }

    // Otherwise, log a random message.
  } else {
    selectedMsg = logChoices[lib.rng(1, logChoices.length - 1)];
    console.log(`=== %c${selectedMsg}%c ===`, yellow, def);
    debugConsole += `=== ${selectedMsg} ===\n`;
  }
}

/**
 * Update various stat/shop strings and check for newly unlocked items and achievements.
 */
function updateScreen() {
  try {
    // Update title to display clicks count or 'A buff is active!' if a buff occurs.
    if (buff == 'none' && init.GameStarted) {
      stats.RawClicksPS = stats.ClicksPS;
      stats.RawClickVal = stats.ClickValue;
      document.title = `${textArray[0]} coins | Coin Clicker Beta v${buildInfo.UpdNum}`;
    }
    else if (init.GameStarted) document.title = `A buff is active! | Coin Clicker Beta v${buildInfo.UpdNum}`;
    else document.title = `Coin Clicker Beta v${buildInfo.UpdNum}`;

    if (!document.hidden) {
      // Revert the background music volume decrease caused by hiding the tab.
      bgm.volume = volume;

      // Update the integer array
      intArray = [display.Clicks, display.ClickValue, display.ClicksPS, display.LifetimeClicks, display.LifetimeManualClicks, display.CoinClickCount, stats.TotalClickHelpers, display.ClickerCPS, display.ClickerCost, shop.ClickersOwned, display.SuperClickerCPS, display.SuperClickerCost, shop.SuperClickersOwned, display.DoublePointerCPS, display.DoublePointerCost, shop.DoublePointersOwned, display.EmployeeCost, uShop.EmployeesOwned, display.RawClickVal, display.RawClicksPS, shop.ClickerCPSWorth, shop.SuperClickerCPSWorth, shop.DoublePointerCPSWorth, stats.AchievementsUnlocked, clicksAdded, stats.TrueClicks, stats.OfflineClicksPSPercen * 100, uShop.CursorCost, uShop.SuperCursorCost, uShop.GodFingerCost];

      // Call number formatting function
      numberFix();

      // Update debug console
      document.getElementById('debugconsole').value = debugConsole;

      //***************************************/
      //         Text string updates
      //***************************************/

      // Main game panel
      clickString.textContent = `Coins: ${textArray[0]}`;
      cpsString.textContent = `Coins per Second: ${textArray[2]}`;
      clickValueString.textContent = `Click Value: ${textArray[1]}`;
      clickerCPSString.textContent = `CpS: +${textArray[7]}`;
      clickerCostString.textContent = `Cost: ${textArray[8]}`;
      clickersOwnedString.textContent = `Owned: ${textArray[9]}`;

      // Shop panel
      if (shop.ClickersOwned != 0) clickerInfo.textContent = `Your ${textArray[9]} clicker(s) account for ${textArray[20]} (${Math.round(intArray[20] / stats.RawClicksPS * 100)}%) raw CpS.`;
      if (shop.SuperClickerCPSWorth != 0) superClickerInfo.textContent = `Your ${textArray[12]} super clicker(s) account for  ${textArray[21]} (${Math.round(intArray[21] / stats.RawClicksPS * 100)}%) raw CpS.`;
      if (shop.DoublePointerCPSWorth != 0) doublePointerInfo.textContent = `Your ${textArray[15]} double pointer(s) account for ${textArray[22]} (${Math.round(intArray[22] / stats.RawClicksPS * 100)}%) raw CpS.`;

      //***************************************/
      //         Upgrade shop panel
      //***************************************/

      // Arrays to iterate through in the loop below.
      let upgVarArr = [uShop.CursorOwned, uShop.SuperCursorOwned, uShop.GodFingerOwned, uShop.ClickerFusionOwned], // Array of the upgrades owned.
        upgStrArr = [cursorOwnedString, superCursorOwnedString, godFingerOwnedString, clickerFusionOwnedString], // Strings to be modified
        upgCosArr = [textArray[27], textArray[28], textArray[29], 'None. Requires 150 clickers.'], // Costs to check
        upgCosStrArr = [cursorCostString, superCursorCostString, godFingerCostString, clickerFusionCostString]; // Cost strings to be modified

      // Modify the strings of upgrade shop items depending on if the item was bought or not.
      for (var i in upgVarArr) { if (upgVarArr[i]) { upgStrArr[i].textContent = 'Owned.'; upgCosStrArr[i].textContent = 'Cost: Bought.'; } else { upgStrArr[i].textContent = 'Not owned.'; upgCosStrArr[i].textContent = `Cost: ${upgCosArr[i]}`; } }
      employeeCostString.textContent = `Cost: ${textArray[16]}`;
      employeesOwnedString.textContent = `Owned: ${textArray[17]}`;

      //***************************************/
      //             Stats panel
      //***************************************/

      // Arrays used for the playtime counter
      let reqSingle = [1000, 60000, 3600000],
        units = ['second', 'minute', 'hour'],
        req = [2000, 120000, 5400000],
        unitsPlural = ['seconds', 'minutes', 'hours'];

      // Display a rounded version of the playtime variable and append the correct unit to the string.
      for (let i = 0; i < req.length; i++) {
        if (stats.Playtime >= req[i]) {
          display.Playtime = (Math.floor(stats.Playtime / reqSingle[i])).toLocaleString();
          timePlayedString.textContent = `You have played for ${display.Playtime} ${unitsPlural[i]}.`;
        } else if (stats.Playtime >= reqSingle[i] && stats.Playtime < req[i]) {
          display.Playtime = (Math.floor(stats.Playtime / reqSingle[i])).toLocaleString();
          timePlayedString.textContent = `You have played for ${display.Playtime} ${units[i]}.`
        }
      }

      // Other miscellaneous stats
      stats.LifetimeClicks == 1 ? lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} coin.` : lifetimeClicksString.textContent = `You have obtained a total of ${textArray[3]} coins.`;

      stats.LifetimeManualClicks == 1 ? lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} coin from clicking.` : lifetimeManualClicksString.textContent = `You have gotten ${textArray[4]} coins from clicking.`;

      stats.CoinClickCount == 1 ? coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} time.` : coinClickCountString.textContent = `You have clicked the coin ${textArray[5]} times.`;

      stats.TotalClickHelpers == 1 ? totalClickHelpersString.textContent = `You have bought ${textArray[6]} item.` : totalClickHelpersString.textContent = `You have bought ${textArray[6]} items.`;

      achievementsUnlockedString.textContent = `You have unlocked ${textArray[23]} (${Math.round(intArray[23] / 25 * 100)}%) out of 25 achievements.`;
      rawCPSString.textContent = `Your raw coins per second is ${textArray[19]}.`;
      rawCVString.textContent = `Your raw click value is ${textArray[18]}.`;
      offlineCPSString.textContent = `Your employees gather ${textArray[26]}% of your coins per second while offline.`;

      // Display achievements in the menu if unlocked.
      if (ach[26][3]) { cheater.style.display = 'block'; cheaterIcon.style.display = 'block'; }
      if (ach[25][3]) { breakpoint.style.display = 'block'; bpIcon.style.display = 'block'; }
      if (buff == 'bonusClicks') buffStr.textContent = `You got ${textArray[24]} bonus coins!`;

      //***************************************/
      //      Regular shop unlock checks
      //***************************************/

      // Super Clicker
      if (shop.ClickersOwned >= 25 && !shop.SuperClickerUnlocked) {
        if (init.DataLoaded) { sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Super Clicker unlocked!'; }
        superClickerGroup.style.display = 'block';
        superClickerImg.style.display = 'block';
        shop.SuperClickerUnlocked = !shop.SuperClickerUnlocked; //True
        SHT = 500;
      } else if (shop.SuperClickerUnlocked) {
        superClickerGroup.style.display = 'block';
        superClickerCPSString.textContent = `CpS: +${textArray[10]}`;
        superClickerCostString.textContent = `Cost: ${textArray[11]}`;
        superClickersOwnedString.textContent = `Owned: ${textArray[12]}`;
      }

      //Double Pointer
      if (shop.ClickersOwned >= 50 && shop.SuperClickersOwned >= 10 && !shop.DoublePointerUnlocked) {
        if (init.DataLoaded) { sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Double Pointer unlocked!'; }
        doublePointerGroup.style.display = 'block';
        doublePointerImg.style.display = 'block';
        shop.DoublePointerUnlocked = !shop.DoublePointerUnlocked; //True
        SHT = 500;
      } else if (shop.DoublePointerUnlocked) {
        doublePointerGroup.style.display = 'block';
        doublePointerCPSString.textContent = `CpS: +${textArray[13]}`;
        doublePointerCostString.textContent = `Cost: ${textArray[14]}`;
        doublePointersOwnedString.textContent = `Owned: ${textArray[15]}`;
      }

      //***************************************/
      //      Upgrade shop unlock checks
      //***************************************/

      // Modify Cursor cost variable to prevent buying it multiple times.
      if (uShop.CursorOwned && init.DataLoaded) uShop.CursorCost = 'Owned.';
      // Super Cursor
      if (uShop.CursorOwned && !uShop.SuperCursorUnlocked) {
        if (init.DataLoaded) { sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Super Cursor unlocked!'; }
        superCursorGroup.style.display = 'block';
        uShop.SuperCursorUnlocked = !uShop.SuperCursorUnlocked; //True
        SHT = 500;
      } else if (uShop.SuperCursorUnlocked) { superCursorGroup.style.display = 'block'; uShop.CursorCost = 'Owned.'; }

      // Employee
      if (uShop.CursorOwned && uShop.SuperCursorOwned && !uShop.EmployeeUnlocked) {
        if (init.DataLoaded) { sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Employee unlocked!'; }
        employeeGroup.style.display = 'block';
        uShop.EmployeeUnlocked = !uShop.EmployeeUnlocked; //True
        SHT = 500;
      } else if (uShop.EmployeeUnlocked) { employeeGroup.style.display = 'block'; uShop.SuperCursorCost = 'Owned.'; }

      // God Finger
      if (shop.ClickersOwned >= 75 && shop.SuperClickersOwned >= 20 && shop.DoublePointersOwned >= 3 && uShop.EmployeeUnlocked && !uShop.GodFingerUnlocked) {
        if (init.DataLoaded) { sfx2.play(); unlockString.style.display = 'block'; unlockString.textContent = 'God Finger unlocked!'; }
        godFingerGroup.style.display = 'block';
        uShop.GodFingerUnlocked = !uShop.GodFingerUnlocked; //True
        SHT = 500;
      } else if (uShop.GodFingerUnlocked) godFingerGroup.style.display = 'block';

      // Clicker Fusion
      if (shop.ClickersOwned >= 150 && !uShop.ClickerFusionUnlocked) {
        if (init.DataLoaded) { sfx4.play(); unlockString.style.display = 'block'; unlockString.textContent = 'Clicker Fusion unlocked!'; }
        clickerFusionGroup.style.display = 'block';
        uShop.ClickerFusionUnlocked = !uShop.ClickerFusionUnlocked; //True
        SHT = 500;
      } else if (uShop.ClickerFusionUnlocked) clickerFusionGroup.style.display = 'block';

      // Achievement unlock check
      for (let i = 0; i < ach.length; i++) {
        if (stats.LifetimeClicks >= ach[i][2] && ach[i][2] != null && !ach[i][3]) {
          if ((smallCoin1.style.animationPlayState = 'running' || init.GameStarted) && i == 0) bgm.play();
          if (init.DataLoaded && i > 1 && i < 24) sfx3.play();
          ach[i][3] = true;
          stats.AchievementsUnlocked++;
          if (init.DataLoaded) unlockString.textContent = `Achievement Unlocked: ${ach[i][0]}`;
          setTimeout(function () { unlockString.style.display = 'block'; }, 1);
          SHT = 500;
        }
      }

      //******************************************************************************/
      //  Modify the values of variables used to create a slow increase for integers.
      //******************************************************************************/

      // An array of the differences between true stats and display variables.
      let diffArr = [stats.Clicks - display.Clicks, stats.ClickValue - display.ClickValue, stats.RawClickVal - display.RawClickVal, stats.ClicksPS - display.ClicksPS, stats.RawClicksPS - display.RawClicksPS, stats.LifetimeClicks - display.LifetimeClicks, stats.LifetimeManualClicks - display.LifetimeManualClicks, stats.CoinClickCount - display.CoinClickCount, shop.ClickerCPS - display.ClickerCPS, shop.ClickerCost - display.ClickerCost, shop.SuperClickerCPS - display.SuperClickerCPS, shop.SuperClickerCost - display.SuperClickerCost, shop.DoublePointerCPS - display.DoublePointerCPS, shop.DoublePointerCost - display.DoublePointerCost, uShop.EmployeeCost - display.EmployeeCost];

      // Get absolute values for all differences above.
      for (let i = 0; i < diffArr.length; i++) diffArr[i] = Math.abs(diffArr[i]);

      // Clicks
      if (display.Clicks < stats.Clicks) display.Clicks += Math.ceil(diffArr[0] / 15); else if (display.Clicks > stats.Clicks) display.Clicks -= Math.ceil(diffArr[0] / 15);

      // Click value
      if (display.ClickValue < stats.ClickValue) display.ClickValue += Math.ceil(diffArr[1] / 15); else if (display.ClickValue > stats.ClickValue) display.ClickValue -= Math.ceil(diffArr[1] / 15);

      // Raw click value
      if (display.RawClickVal < stats.RawClickVal) display.RawClickVal += Math.ceil(diffArr[2] / 15); else if (display.RawClickVal > stats.RawClickVal) display.RawClickVal -= Math.ceil(diffArr[2] / 15);

      // Clicks per second
      if (display.ClicksPS < stats.ClicksPS) display.ClicksPS += Math.ceil(diffArr[3] / 15); else if (display.ClicksPS > stats.ClicksPS) display.ClicksPS -= Math.ceil(diffArr[3] / 15);

      // Raw clicks per second
      if (display.RawClicksPS < stats.RawClicksPS) display.RawClicksPS += Math.ceil(diffArr[4] / 15); else if (display.RawClicksPS > stats.RawClicksPS) display.RawClicksPS -= Math.ceil(diffArr[4] / 15);

      // Lifetime clicks
      if (display.LifetimeClicks < stats.LifetimeClicks) display.LifetimeClicks += Math.ceil(diffArr[5] / 15); else if (display.LifetimeClicks > stats.LifetimeClicks) display.LifetimeClicks -= Math.ceil(diffArr[5] / 15);

      // Lifetime manual clicks
      if (display.LifetimeManualClicks < stats.LifetimeManualClicks) display.LifetimeManualClicks += Math.ceil(diffArr[6] / 15); else if (display.LifetimeManualClicks > stats.LifetimeManualClicks) display.LifetimeManualClicks -= Math.ceil(diffArr[6] / 15);

      // Coin click count
      if (display.CoinClickCount < stats.CoinClickCount) display.CoinClickCount += Math.ceil(diffArr[7] / 15); else if (display.CoinClickCount > stats.CoinClickCount) display.CoinClickCount -= Math.ceil(diffArr[7] / 15);

      // Clicker CPS
      if (display.ClickerCPS < shop.ClickerCPS) display.ClickerCPS += Math.ceil(diffArr[8] / 15); else if (display.ClickerCPS > shop.ClickerCPS) display.ClickerCPS -= Math.ceil(diffArr[8] / 15);

      // Clicker cost
      if (display.ClickerCost < shop.ClickerCost) display.ClickerCost += Math.ceil(diffArr[9] / 15); else if (display.ClickerCost > shop.ClickerCost) display.ClickerCost -= Math.ceil(diffArr[9] / 15);

      // Super Clicker CPS
      if (display.SuperClickerCPS < shop.SuperClickerCPS) display.SuperClickerCPS += Math.ceil(diffArr[10] / 15); else if (display.SuperClickerCPS > shop.SuperClickerCPS) display.SuperClickerCPS -= Math.ceil(diffArr[10] / 15);

      // Super Clicker cost
      if (display.SuperClickerCost < shop.SuperClickerCost) display.SuperClickerCost += Math.ceil(diffArr[11] / 15); else if (display.SuperClickerCost > shop.SuperClickerCost) display.SuperClickerCost -= Math.ceil(diffArr[11] / 15);

      // Double Pointer CPS
      if (display.DoublePointerCPS < shop.DoublePointerCPS) display.DoublePointerCPS += Math.ceil(diffArr[12] / 15); else if (display.DoublePointerCPS > shop.DoublePointerCPS) display.DoublePointerCPS -= Math.ceil(diffArr[12] / 15);

      // Double Pointer cost
      if (display.DoublePointerCost < shop.DoublePointerCost) display.DoublePointerCost += Math.ceil(diffArr[13] / 15); else if (display.DoublePointerCost > shop.DoublePointerCost) display.DoublePointerCost -= Math.ceil(diffArr[13] / 15);

      // Employee cost
      if (display.EmployeeCost < uShop.EmployeeCost) display.EmployeeCost += Math.ceil(diffArr[14] / 15); else if (display.EmployeeCost > uShop.EmployeeCost) display.EmployeeCost -= Math.ceil(diffArr[14] / 15);

      // Decrease the volume of the background music and remove all background particles if the document is not the active tab.
    } else { bgm.volume = volume / 3; $('.bg').remove(); }

    // Set the timeout for this function again to cause a loop.
    setTimeout(updateScreen, updInterval);
  } catch (error) { errorHandler(error); }
}

/**
 * Create the game's background elements. Different background particles will appear depending on which achievements the player has unlocked.
 */
function createBgElem() {
  try {
    if (startBgCreate && ach[3][3]) {
      if (graphicsMode == 'Quality') {

        // Millionare particles
        bg = document.createElement('img');
        bg.src = './img/bgdollar.png';
        bg.id = 'bg';
        bg.className = 'bg fixed';
        bg.style.left = `${lib.rng(1, screenWidth)}px`;
        document.body.appendChild(bg);

        // Trillionare particles (coins)
        if (ach[9][3]) {
          if (graphicsMode == 'Quality') {
            bg = document.createElement('img');
            bg.src = './img/coin.png';
            bg.id = 'bg';
            bg.className = 'bg hasanim fixed';
            bg.style.left = `${lib.rng(1, screenWidth)}px`;
            document.body.appendChild(bg);
          }
        }
        // Breaking point particles (stars)
        // This creates font-awesome icons rather than imgs to allow for dynamic color.
        if (ach[24][9]) {
          bgMax = 275;
          if (graphicsMode == 'Quality') {
            bg = document.createElement('i');
            bg.id = 'bg';
            bg.className = 'fa-solid fa-star ach fixed hasanim bg';
            // Create dynamic red stars instead of green if Cheater is unlocked
            !ach[26][3] ? bg.style.color = `rgb(0, ${green}, 0)` : bg.style.color = `rgb(${red}, 0, 0)`;
            bg.style.left = `${lib.rng(1, screenWidth)}px`;
            bg.style.fontSize = '1.7vw';
            document.body.appendChild(bg);
          }
        }
      }
      // Create an interval that can be changed dynamically using a setTimeout loop.
    } setTimeout(createBgElem, bgUpdInterval);
  } catch (error) { errorHandler(error) }
}

/**
 * Format numbers to be easy to read for the player. This function can format numbers in two different ways:  
 *   
 * toLocaleString (or a regex pattern if unsupported) to add commas to numbers. Integers with values over 1 quadrillion will become exponents  
 *   
 * A simpler variant that uses a combination of two arrays to display a small number with its corresponding name (thousand, million, etc)
 */
function numberFix() {
  // todo: implement a toggle of some sort for exponent formatting

  // Force exponent formatting if a number is greater than a googol
  if (!numberShorten) {
    for (let i = 0; i < intArray.length; i++) {
      // Convert all values to their absolutes to prevent negatives
      intArray[i] = Math.abs(intArray[i]);

      // Prevent values from somehow becoming strings
      if (isNaN(intArray[i])) intArray[i] = 0;

      // Use the toLocaleString() method to modify a number to have easy to read formatting, which should match the user's locale. If a value is over 1 quadrillion, it will be turned into an exponent with 3 decimal places
      if (Number.prototype.toLocaleString() != undefined) intArray[i] >= 1000000000000000 ? textArray[i] = ((intArray[i]).toExponential(3)).toLocaleString() : textArray[i] = intArray[i].toLocaleString();

      // If the toLocaleString() method is not supported, default to a global method that involves a regex pattern to replace parts of the value with commas. If a value is over 1 quadrillion, it will be turned into an exponent like usual.
      else {
        if (intArray[i] < 1000000000000000) {
          textArray[i] = intArray[i].toString();
          let pattern = /(-?\d+)(\d{3})/;
          while (pattern.test(textArray[i])) textArray[i] = textArray[i].replace(pattern, '$1,$2');
        } else textArray[i] = intArray[i].toExponential(3);
      }

    }
    // Use short number formatting if a value is small enough to do so ////and if the option is enabled.
  } else {
    // Values and their corresponding short names
    let req = [1000, 1e+6, 1e+9, 1e+12, 1e+15, 1e+18, 1e+21, 1e+24, 1e+27, 1e+30, 1e+33, 1e+36, 1e+39, 1e+42, 1e+45, 1e+48, 1e+51, 1e+54, 1e+57, 1e+60, 1e+63, 1e+66, 1e+69, 1e+72, 1e+75, 1e+78, 1e+81, 1e+84, 1e+87, 1e+90, 1e+93, 1e+96, 1e+99],
      units = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septemdecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'unvigintillion', 'duovigintiillion', 'trevigintillion', 'quattuorvigintiillion', 'quinvigintiillion', 'sexvigintiillion', 'septvigintiillion', 'octovigintillion', 'nonvigintillion', 'trigintillion', 'untrigintillion', 'duotrigintillion'];

    // Iterate through two different arrays at once to access the needed indexes.
    for (let i in req) {
      for (let ii in intArray) {
        // Divide all given integers by their corresponding req value, round it to the thousandths place (while avoiding dropping any zeroes at the end of the number), and append a short name to the end of it.
        // If an integer's value is less than a thousand, no formatting is needed.
        if (intArray[ii] >= req[i]) textArray[ii] = (Math.round((intArray[ii] / req[i]) * Math.pow(10, 3)) / Math.pow(10, 3)).toFixed(3) + ' ' + units[i];
        else if (intArray[ii] < 1000) textArray[ii] = intArray[ii];
      }
    }

    // Use exponents for numbers that are too large to use generic names.
    for (let i = 0; i < intArray.length; i++) {
      if (intArray[i] >= 9.99999e+101) var ii = i;
      if (ii != undefined) {
        if (Number.prototype.toLocaleString() != undefined) textArray[ii] = ((intArray[ii]).toExponential(3)).toLocaleString()
        else textArray[ii] = intArray[ii].toExponential(3);
      }
    }
  }
}

/**
 * Load data saved in the player's local storage.
 */
function loadGame() {
  try {
    // Don't attempt to load anything if no save data exists.
    if (localStorage.getItem('saveData', saveData)) {
      let data = localStorage.getItem('saveData', saveData),
        loadData = JSON.parse(data);
      // Variables that need to be loaded early.
      if (achCheck) {
        // Load lifetime clicks stat so achievements can unlock themselves.
        stats.LifetimeClicks = loadData[5];

        // Settings
        if (loadData[15]) bgGradCenterInput.value = loadData[15];
        if (loadData[16]) bgGradEdgeInput.value = loadData[16];
        if (loadData[15] && loadData[16]) document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`;
        if (loadData[17]) graphicsMode = loadData[17];

        // Shop data
        if (!loadData[1]) {
          let data2 = localStorage.getItem('shopData', shopData),
            shopDat = JSON.parse(data2);
          // Cursor and Clicker
          uShop.CursorOwned = shopDat[0];
          shop.ClickerCPS = shopDat[1];
          shop.ClickersOwned = shopDat[2];
          shop.ClickerCost = shopDat[3];
          shop.ClickersOwned = shopDat[4];

          // Super Clicker
          if (shop.ClickersOwned >= 25) {
            shop.SuperClickerCPS = shopDat[5];
            shop.SuperClickerCPSWorth = shopDat[6];
            shop.SuperClickerCost = shopDat[7];
            shop.SuperClickersOwned = shopDat[8];
          }

          // Double Pointer
          if (shop.ClickersOwned >= 50 && shop.SuperClickersOwned >= 3) {
            shop.DoublePointerCPS = shopDat[9];
            shop.DoublePointerCPSWorth = shopDat[10];
            shop.DoublePointerCost = shopDat[11];
            shop.DoublePointersOwned = shopDat[12];
          }

          // Super Cursor
          if (uShop.CursorOwned) { uShop.SuperCursorUnlocked = shopDat[13]; uShop.SuperCursorOwned = shopDat[14]; }

          // Employee
          if (uShop.SuperCursorOwned) {
            uShop.EmployeeUnlocked = shopDat[17];
            uShop.EmployeeCost = shopDat[18];
            uShop.EmployeesOwned = shopDat[19];
          }

          // God Finger
          if (shop.ClickersOwned >= 125 && shop.SuperClickersOwned >= 10 && shop.DoublePointersOwned >= 3) { uShop.GodFingerUnlocked = shopDat[15]; uShop.GodFingerOwned = shopDat[16]; }
          if (shopDat[16]) uShop.GodFingerCost = 'Owned.';

          // Clicker Fusion
          if (shop.ClickersOwned >= 150) { uShop.ClickerFusionUnlocked = shopDat[20]; uShop.ClickerFusionOwned = shopDat[21]; }
        }
        // Update graphics mode setting button
        graphicsBtn.textContent = graphicsMode;
        // Data loaded when the game starts.
      } else if (!achCheck && loadData[0] >= 4.41) {
        if (!loadData[1]) {
          // Stats
          stats.Clicks = loadData[2];
          stats.ClickValue = loadData[3];
          stats.ClicksPS = loadData[4];
          stats.LifetimeClicks = loadData[5];
          stats.LifetimeManualClicks = loadData[6];
          stats.CoinClickCount = loadData[7];
          stats.TotalClickHelpers = loadData[8];
          stats.Playtime = loadData[9];

          // Settings
          volume = loadData[10];
          shop.DoAutobuy = loadData[11];

          // Debug mode key
          keyEntered = loadData[12];

          // Last saved timestamp string
          if (loadData[13]) lastSavedTime = loadData[13];

          // Used to detect cheating by checking for differences between the clicks stat and the true clicks stat
          if (loadData[14]) stats.TrueClicks = loadData[14];

          // Offline CPS
          if (loadData[19]) stats.OfflineClicksPSPercen = loadData[19]; else stats.OfflineClicksPSPercen = uShop.EmployeesOwned / 10;

          // Calculate offline CPS based on the difference between the save timestamp and the current timestamp
          if (loadData[18] && stats.ClicksPS > 0 && stats.OfflineClicksPSPercen > 0) {
            // Time of load
            let loadTimestamp = Math.floor((new Date()).getTime() / 1000),
              // Time of save
              saveTimestamp = loadData[18],
              // Difference between timestamps
              timestampDifference = loadTimestamp - saveTimestamp,
              // Offline CPS count
              offlineCpS = Math.ceil((stats.ClicksPS * stats.OfflineClicksPSPercen) * timestampDifference);

            // Add offline CPS to necessary click counts
            stats.Clicks += offlineCpS;
            stats.LifetimeClicks += offlineCpS;
            stats.TrueClicks += offlineCpS;

            // Format offlineCpS number and display the unlock string.
            if (offlineCpS >= 100000000000000) offlineCpS = ((offlineCpS).toExponential(3)).toLocaleString(); else offlineCpS = offlineCpS.toLocaleString();
            unlockString.style.display = 'block';

            // Set unlock string text content to singular/plural variants based on the value of offlineCpS.
            if (offlineCpS == 1) unlockString.textContent = `Your employees produced ${offlineCpS} coin while you were away.`; else unlockString.textContent = `Your employees produced ${offlineCpS} coins while you were away.`;

            // Start timer to hide label.
            SHT = 500;
          }

          // Command history
          if (loadData[20]) cmdHist = loadData[20];

          //***************************************/
          //         Shop item animations
          //***************************************/

          // Clicker
          if (shop.ClickersOwned >= 1 && graphicsMode == 'Quality') {
            clickerImg.style.animation = 'clickermov 2s forwards';
            setTimeout(function () {
              clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)';
              clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate';
            }, 3000);
          }

          // Super Clicker
          if (shop.SuperClickersOwned >= 1 && graphicsMode == 'Quality') {
            superClickerImg.style.animation = 'superclickermov 2s forwards';
            setTimeout(function () {
              superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)';
              superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate';
            }, 3000);
          }

          // Double Pointer
          if (shop.DoublePointersOwned >= 1 && graphicsMode == 'Quality') {
            doublePointerImg.style.animation = 'doublepointermov 2s forwards';
            setTimeout(function () {
              doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)';
              doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate';
            }, 3000);
          }

          // Cursor
          if (uShop.CursorOwned && graphicsMode == 'Quality') {
            cursorImg.style.display = 'block';
            cursorImg.parentNode.removeChild(cursorImg);
            statsPanel.appendChild(cursorImg);
            cursorImg.style.animationPlayState = 'running';
          }

          // Super Cursor
          if (uShop.SuperCursorOwned && graphicsMode == 'Quality') {
            superCursorImg.style.display = 'block';
            superCursorImg.parentNode.removeChild(superCursorImg);
            statsPanel.appendChild(superCursorImg);
            superCursorImg.style.animationPlayState = 'running';
          }

          // Employee
          if (uShop.EmployeesOwned >= 1 && graphicsMode == 'Quality') {
            offlineCPSString.style.display = 'block';
            employeeImg.style.display = 'block';
            employeeImg.parentNode.removeChild(employeeImg);
            game.appendChild(employeeImg);
            employeeImg.style.animationPlayState = 'running';
            setTimeout(function () {
              employeeImg.style.transform = 'translate3d(39.8vw, -5vw, 0)';
              employeeImg.style.animation = 'employeerock 2s linear infinite alternate';
            }, 3000);
          }

          // God Finger
          if (uShop.GodFingerOwned && graphicsMode == 'Quality') {
            godFingerImg.style.display = 'block';
            godFingerImg.parentNode.removeChild(godFingerImg);
            statsPanel.appendChild(godFingerImg);
            godFingerImg.style.animationPlayState = 'running';
          }

          // Clicker Fusion
          if (uShop.ClickerFusionOwned && graphicsMode == 'Quality') {
            clickerFusionImg.style.display = 'block';
            clickerFusionImg.parentNode.removeChild(clickerFusionImg);
            statsPanel.appendChild(clickerFusionImg);
            clickerFusionImg.style.animationPlayState = 'running';
          }

          // Check if 'Journey Begins' is unlocked and play bgm if true.
          if (stats.LifetimeClicks > 0) bgm.play();

          // Increment hidden achievement count if 'Cheater' would be unlocked.
          if (stats.Clicks != stats.TrueClicks) stats.HiddenAchievementsUnlocked++;

          // Set load flag
          setTimeout(function () { init.DataLoaded = true; }, 150);

          // Remove save data if autoplay was enabled on the previous save.
        } else { localStorage.removeItem('saveData', saveData); if (!achCheck) init.DataLoaded = true; }
        // Delete save if it was created prior to build 4.41
      } else { localStorage.removeItem('saveData', saveData); if (!achCheck) init.DataLoaded = true; }
      // Start game normally if save data was not found.
    } else if (!achCheck) init.DataLoaded = true;
  } catch (error) { errorHandler(error); }
}

/**
 * Save data into local storage when the player requests it or if saving automatically.
 */
function saveGame(force) {
  try {
    // Only save if ready and if the game has actually started
    if (readyToSave && init.GameStarted) {
      // THe game cannot be saved when a buff is active due to conflicts with infinitely stacking stats.
      if (buff != 'none' && !force) { savingString.textContent = 'You cannot save when a buff is occurring.'; savingString.style.display = 'block'; SHT = 500; } else {
        // Prevent additional saving from occurring
        readyToSave = false;

        // Show save string
        savingString.textContent = 'Saving...';
        savingString.style.display = 'block';

        // Save timestamp
        let saveTime = Math.floor((new Date()).getTime() / 1000),
          // Variables to push to the saveData key
          varsToPush = [buildInfo.BuildNum, debugAutoplay, stats.Clicks, stats.ClickValue, stats.ClicksPS, stats.LifetimeClicks, stats.LifetimeManualClicks, stats.CoinClickCount, stats.TotalClickHelpers, stats.Playtime, volume, shop.DoAutobuy, keyEntered, lastSavedTime, stats.TrueClicks, bgGradCenterInput.value, bgGradEdgeInput.value, graphicsMode, saveTime, stats.OfflineClicksPSPercen, cmdHist],
          // Variables to push to the shopData key. Data is appended when needed (see below)
          shopVars = [uShop.CursorOwned, shop.ClickerCPS, shop.ClickersOwned, shop.ClickerCost, shop.ClickersOwned];

        // Make save timestamp a string corresponding to the player's timezone.
        lastSavedTime = new Date();
        lastSavedTime = lastSavedTime.toString();
        lastSavedTime = new Date(`${lastSavedTime} UTC`);
        lastSavedTime = lastSavedTime.toString();

        //***************************************/
        //         Push shop variables
        //***************************************/

        // Super Clicker
        if (shop.SuperClickerUnlocked) {
          shopVars.push(shop.SuperClickerCPS);
          shopVars.push(shop.SuperClickerCPSWorth);
          shopVars.push(shop.SuperClickerCost);
          shopVars.push(shop.SuperClickersOwned);
          // Pad the data key with undefined to prevent loading of incorrect integers for shop data
        } else for (let i = 0; i < 4; i++) shopVars.push(undefined);

        // Double Pointer
        if (shop.DoublePointerUnlocked) {
          shopVars.push(shop.DoublePointerCPS);
          shopVars.push(shop.DoublePointerCPSWorth);
          shopVars.push(shop.DoublePointerCost);
          shopVars.push(shop.DoublePointersOwned);
        } else for (let i = 0; i < 4; i++) shopVars.push(undefined);

        // Suoer Cursor
        if (uShop.CursorOwned) { shopVars.push(uShop.SuperCursorUnlocked); shopVars.push(uShop.SuperCursorOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);

        // God Finger
        if (shop.ClickersOwned >= 125 && shop.SuperClickersOwned >= 10 && shop.DoublePointersOwned >= 3) { shopVars.push(uShop.GodFingerUnlocked); shopVars.push(uShop.GodFingerOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);

        // Employee
        if (uShop.SuperCursorOwned) {
          shopVars.push(uShop.EmployeeUnlocked);
          shopVars.push(uShop.EmployeeCost);
          shopVars.push(uShop.EmployeesOwned);
        } else for (let i = 0; i < 3; i++) shopVars.push(undefined);

        // Clicker Fusion
        if (shop.ClickersOwned >= 150) { shopVars.push(uShop.ClickerFusionUnlocked); shopVars.push(uShop.ClickerFusionOwned); } else for (let i = 0; i < 2; i++) shopVars.push(undefined);

        // If value being pushed is Infinity, set it to Number.MAX_VALUE before pushing to the array
        for (let i = 0; i < varsToPush.length; i++) { if (!isFinite(varsToPush[i]) && !isNaN(varsToPush[i])) varsToPush[i] = Number.MAX_VALUE; saveData.push(varsToPush[i]); }

        // Set key in local storage
        localStorage.setItem('saveData', JSON.stringify(saveData));

        // Push all shop variables to the array and set the key in local storage
        for (let i = 0; i < shopVars.length; i++) shopData.push(shopVars[i]);
        localStorage.setItem('shopData', JSON.stringify(shopData));

        // Empty the arrays
        while (saveData.length > 0) saveData.pop();
        while (shopData.length > 0) shopData.pop();

        // Detect whether the game was autosaved or saved manually
        if (manualSave) { savingString.textContent = 'Game saved.'; manualSave = !manualSave; /*False*/ } else savingString.textContent = 'Game autosaved.';

        // Start timeout to hide label.
        SHT = 500;
      }
    }
  } catch (error) { errorHandler(error) }
}

/**
 * Wipe the player's save if the corresponding button is clicked.
 * @param {boolean} gamepadActive If true, the game will not automatically modify variables and will instead prompt the player to refresh the page.
 */
function wipeSave(gamepadActive) {
  if (readyToSave || debugAutoplay) {
    if (!gamepadActive) {
      let prompt = confirm('This is completely irreversible! Are you sure you wish to continue?');
      if (prompt) {
        // Elements to hide
        let toHide = [offlineCPSString, superClickerGroup, doublePointerGroup, superCursorGroup, employeeGroup, godFingerGroup, clickerFusionGroup, cheater, cheaterIcon, breakpoint, bpIcon, superClickerImg, doublePointerImg, cursorImg, superCursorImg, employeeImg, godFingerImg, clickerFusionImg],
          // Elements to disable the animation of, reverting them to their default state
          toTransform = [clickerImg, superClickerImg, doublePointerImg, cursorImg, superCursorImg, employeeImg, godFingerImg, clickerFusionImg],

          // Fade out the background music
          bgmFade = setInterval(function () {
            if (volume <= 0.0) {
              clearInterval(bgmFade);
              bgm.pause();
              bgm.currentTime = 0;
              volume = 1;
            } else { volume -= 0.1; volume = volume.toFixed(2); }
          }, 200);

        readyToSave = false;
        localStorage.removeItem('saveData');
        localStorage.removeItem('shopData');

        // Restore base stats
        stats = new baseStats();
        shop = new baseShop();
        uShop = new baseUpgShop();
        graphicsMode = 'Quality';

        // Lock all achievements, and restore the original state of needed elements.
        for (let i in ach) ach[i][3] = false;
        for (let i in toHide) toHide[i].style.display = 'none';
        for (let i in toTransform) { toTransform[i].style.animation = ''; toTransform[i].style.transform = ''; }

        // Restore the original state of hoverable shop info strings and the time played stat string.
        clickerInfo.textContent = 'You have no clickers.';
        superClickerInfo.textContent = 'You have no super clickers.';
        doublePointerInfo.textContent = 'You have no double pointers.';
        timePlayedString.textContent = 'You have played for 0 seconds.';

        // Restore the original background color.
        bgGradCenterInput.value = '250, 224, 65';
        bgGradEdgeInput.value = '249, 160, 40';
        document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`;
      }
    }

    // Remove data and prompt user that the data was removed, requiring them to refresh the page to reverse it.
    // This prevents unwanted save removal by letting the user save again if they accidentally pressed the wipe save bind.
  } else if (gamepadActive) {
    localStorage.removeItem('saveData');
    localStorage.removeItem('shopData');
    readyToSave = !readyToSave;
    unlockString.textContent = 'Save removed. Press R3 to confirm. (You can save again to reverse this if this was a mistake.)';
    SHT = 500;
  } else if (!readyToSave) readyToSave = true;
}

/**
 * Recalculate the RNG variable used to determine buffs. Automatically called every second.
 */
function buffRNGCalc() {
  try {
    // Min and max values for buffRNG
    let max = 301,
      min = 0,
      // Randomized time for buffs that are time-dependent.
      buffTime;
    buffRNG = 0;

    // Force a specific buff if debug variable forceBuff is active.
    if (forceBuff && buff == 'none') buffRNG = 100;
    // Otherwise randomize.
    else if (!forceBuff && buff == 'none') buffRNG = lib.rng(min, max);
    // If buff would return cv777%CpS while the document was hidden, rerandomize.
    if ((document.hidden || game.style.display != 'block') && buffRNG == 200) buffRNG = lib.rng(min, max);
    // Continue randomizing if buffRNG would be the same as the last function call.
    while (buffRNG == lastBuffRNG) buffRNG = lib.rng(min, max);

    if (buff == 'none') {
      switch (buffRNG) {

        // CPS Double
        case 100:
          if (stats.ClicksPS > 0) {
            buffTime = lib.rng(15000, 60000);
            buffStr.textContent = `Your CpS has been doubled for ${Math.round(buffTime / 1000)} seconds!`;
            buffStr.style.display = 'block';
            stats.RawClicksPS = stats.ClicksPS;
            stats.ClicksPS = Math.round(stats.ClicksPS * 2);
            buff = 'cpsDouble';
            window.setTimeout(buffRemoval, buffTime);
          }
          break;

        // Increase click value by 777% of CpS
        case 200:
          if (stats.ClicksPS > 0) {
            buffTime = lib.rng(5000, 20000);
            buffStr.textContent = `Your click value has been increased by 777% of your CpS for ${Math.round(buffTime / 1000)} seconds!`;
            buffStr.style.display = 'block'; stats.RawClickVal = stats.ClickValue; stats.ClickValue += Math.round(stats.ClicksPS * 7.77);
            buff = 'cv777%CpS';
            window.setTimeout(buffRemoval, buffTime);
          }
          break;

        // Grant the player bonus clicks.
        case 300:
          if (stats.ClicksPS > 0 && stats.Clicks > 0) {
            clicksAdded = Math.round(0.3 * stats.ClicksPS + 0.1 * stats.Clicks);
            stats.Clicks += clicksAdded;
            stats.TrueClicks += clicksAdded;
            // Format numbers before displaying them.
            numberFix();
            buffStr.style.display = 'block';
            buff = 'bonusClicks';
            window.setTimeout(buffRemoval, 2000);
          }
          break;
      }
    }
    lastBuffRNG = buffRNG;
  } catch (error) { errorHandler(error); }
}

/**
 * Revert any active buffs.
 */
function buffRemoval() {
  try {
    // Hide buff string if buff granted bonus clicks.
    buffStr.style.display = 'none';

    if (buff == 'cpsDouble') {
      stats.ClicksPS = stats.RawClicksPS;
      stats.ClickValue = stats.RawClickVal;
    }

    else if (buff == 'cv777%CpS') stats.ClickValue = stats.RawClickVal;
    else if (buff == 'bonusClicks') clicksAdded = 0;
    buff = 'none';
  } catch (error) { errorHandler(error); }
}

/**
 * Multiply the player's stat values by a tenth of their coins per second and round stats.
 */
function cpsClick() {
  try {
    stats.Clicks += stats.ClicksPS * 0.10;
    stats.TrueClicks += stats.ClicksPS * 0.10;
    stats.LifetimeClicks += stats.ClicksPS * 0.10;
    stats.Clicks = Math.round(stats.Clicks);
    stats.TrueClicks = Math.round(stats.TrueClicks);
    stats.LifetimeClicks = Math.round(stats.LifetimeClicks);
  } catch (error) { errorHandler(error); }
}

/**
 * Modify the red and green color variables used to create a 'pulsing' effect on shop items and achievements
 */
function rgChange() {
  try {
    // Increase or decrease variables depending on their value
    if (increase) { red += 5; green += 5; } else { red -= 5; green -= 5; }

    if (green == 200) increase = !increase;
    else if (green == 0) increase = !increase;

    //******************************************************************************/
    //                Create a pulsing effect on achievement icons
    //******************************************************************************/
    forTheWorthy.style.borderInlineColor = `rgb(0, ${green}, 0)`;
    forTheWorthy.style.borderBlockColor = `rgb(0, ${green}, 0)`;
    ftwIcon.style.color = `rgb(0, ${green}, 0)`;

    breakpoint.style.borderInlineColor = `rgb(0, ${green}, 0)`;
    breakpoint.style.borderBlockColor = `rgb(0, ${green}, 0)`;
    bpIcon.style.color = `rgb(0, ${green}, 0)`;

    cheater.style.borderInlineColor = `rgb(${red}, 0, 0)`;
    cheater.style.borderBlockColor = `rgb(${red}, 0, 0)`;
    cheaterIcon.style.color = `rgb(${red}, 0, 0)`;

    // Update the array of costs
    costArray = [Math.abs(shop.ClickerCost), Math.abs(shop.SuperClickerCost), Math.abs(shop.DoublePointerCost), Math.abs(uShop.CursorCost), Math.abs(uShop.SuperCursorCost), Math.abs(uShop.EmployeeCost), Math.abs(uShop.GodFingerCost)];

    // Cause the icon of the corresponding item to pulse green if the player has enough clicks to buy it, and set back to black when bought.
    for (let i = 0; i < costArray.length - 1; i++) stats.Clicks >= costArray[i] ? costStringArr[i].style.color = `rgb(0, ${green}, 0)` : costStringArr[i].style.color = 'rgb(0, 0, 0)';
  } catch (error) { errorHandler(error); }
}

//*********************************************************************************************************************/
//   todo: Remove this function in a later version of the game and allow anyone to access debug mode without a key.
//*********************************************************************************************************************/
function createBase64Key() {
  try {
    if (!init.GameStarted || debug) {
      generatedKey = 'debug';
      let addArray = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      for (let i = 45; i > 0; i--) {
        let val = lib.rng(1, addArray.length - 1);
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
  } catch (error) { errorHandler(error); }
}

/**
 * Interpret commands passed to the debug console by the player.
 */
function commandInterpret() {
  commandAssemble();
  switch (cmd) {

    // Clear the debug console.
    case 'clear':
      debugConsole = 'Console cleared.\n';
      break;

    // Output the given argument into the debug console.
    case 'echo':
      debugConsole += `${arg}\n`;
      break;

    // Print the help manual.
    case 'help':
      debugConsole += man;
      break;

    // Attempt to evaluate the given string and execute it, printing any errors received into the debug console.
    case 'exec':
    case 'eval':
      try {
        eval(arg);
        debugConsole += 'Command executed.\n';
      } catch (err) { debugConsole += `${err}\n`; }
      break;

    default:
      try {
        eval(commandInput.value);
        debugConsole += 'Command executed.\n';
      } catch (err) { debugConsole += `${err}\n`; }
      break;

    // Calculate the amount of pizzas the player could buy with their current amount of coins.
    case 'pizza':
      debugConsole += `You could buy ${(Math.floor(stats.Clicks / 30)).toLocaleString()} $30 pizzas with your current amount of coins.`;
      break;

    // Call the random message function, passing the given argument as the parameter.
    case 'rmsg':
      randomMsg(arg);
      break;

    // Empty the player's command history
    case 'clhist':
      cmdHist = [];
      break;

    // Mimic keyboard input and send the proper keybind to exit debug mode.
    case 'exit':
      document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'y', 'altKey': true }));
      break;

  }

  // Update command history and corresponding index after every command.
  if (cmd != 'clhis') { cmdHist.push(commandInput.value); cmdHistInx = cmdHist.length; }
  cmd = [];
  arg = [];
  commandInput.value = '';
}

/**
 * Split the value of the debug console's command input box into two strings
 */
function commandAssemble() {
  // Take a 5 letter command and assume the rest is an argument, then split the value into two arrays.
  for (let i = 0; i < commandInput.value.length; i++) { if (i < 5) cmd.push(commandInput.value[i]); else arg.push(commandInput.value[i]); }

  // Turn the arrays into strings and remove commas and spaces.
  cmd = cmd.toString();
  cmd = cmd.replace(/\,/g, '');
  cmd = cmd.replace(/\s/g, '');
  arg = arg.toString();
  arg = arg.replace(/\,/g, '');
}

//***************************************/
//           Event listeners
//***************************************/

startButton.addEventListener('click', () => {
  sfx.play();
  // todo: Remove this line in a future version as debug mode access keys are going to be removed.
  if (generatedKey != 'debug') key.style.display = 'none';

  // Hide the title screen and display necessary panels
  titleScreen.style.display = 'none';
  game.style.display = 'block';
  shopPanel.style.display = 'block';
  statsPanel.style.display = 'block';

  // Set necessary flags
  init.GameStarted = !init.GameStarted;
  startBgCreate = true;
  achCheck = false;

  // Load the game and log a random message.
  loadGame();
  randomMsg();

  // todo: Remove the source note string
  sourceNote.textContent = `Debug states: ${debug}, ${debugAutoplay}`;
  sourceNote.style.position = 'fixed';
  if (screenWidth == 1920) sourceNote.style.top = '52vw';
  else sourceNote.style.top = '51vw';
  sourceNote.style.animation = 'dbgstringmov 1s ease-out forwards';
  sourceNote.className = 'hasanim';

  // Unlock all shop items right away if debug mode is enabled using the respective keybind.
  if (debug) {
    shop.SuperClickerUnlocked = !shop.SuperClickerUnlocked; //True
    shop.DoublePointerUnlocked = !shop.DoublePointerUnlocked; //True
    uShop.SuperCursorUnlocked = !uShop.SuperCursorUnlocked; //True
    uShop.EmployeeUnlocked = !uShop.EmployeeUnlocked; //True
    uShop.GodFingerUnlocked = !uShop.GodFingerUnlocked; //True
    uShop.ClickerFusionUnlocked = !uShop.ClickerFusionUnlocked //True
    //todo: remove this line
    game.appendChild(sourceNote);
  }
  //todo: remove this line
  if (debugAutoplay) game.appendChild(sourceNote);

  // Display the borders and get their offsets
  $('.borders').css('display', 'block');
  leftBorderX = document.getElementById('leftborder').getBoundingClientRect().left;
  rightBorderX = document.getElementById('rightborder').getBoundingClientRect().left;
});

coin.addEventListener('click', (event) => {
  try {
    // Play and recreate click sfx, to allow for overlapping
    sfx.play();
    sfx = new Audio();
    sfx.src = './snd/click.mp3';

    // Mute the volume if debug autoplay is enabled.
    if (!debugAutoplay) sfx.volume = volume; else sfx.volume = 0;

    // Create a coin particle when clicking the coin and append it to the game panel
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

    // Update necessary states or throw an error if negative values are encountered.
    if (Math.sign(stats.Clicks) != -1 && Math.sign(stats.LifetimeClicks) != -1 && Math.sign(stats.ClickValue) != -1 && Math.sign(stats.CoinClickCount) != -1) {
      stats.Clicks += stats.ClickValue;
      stats.TrueClicks += stats.ClickValue
      stats.LifetimeClicks += stats.ClickValue;
      stats.LifetimeManualClicks += stats.ClickValue;
      stats.CoinClickCount++;
    } else { debugConsole += `${stats.Clicks}, ${stats.TrueClicks}, ${stats.LifetimeClicks}, ${stats.ClickValue}, ${stats.CoinClickCount}\n`; throw new Error('Non-absolute values in stats class.'); }

  } catch (error) { errorHandler(error); }
});

clickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= shop.ClickerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    // Decrease/increase related variables
    stats.Clicks -= shop.ClickerCost;
    stats.TrueClicks -= shop.ClickerCost;
    shop.ClickersOwned++;
    shop.ClickerCPSWorth += shop.ClickerCPS;

    // Check if a buff is ongoing and increase given stats accordingly to prevent unwanted loss of stats.
    if (buff == 'cpsDouble') {
      stats.ClicksPS += (shop.ClickerCPS * 2);
      stats.RawClicksPS += shop.ClickerCPS;

      // Clicker CpS formula: Amount of clickers owned x2 + 3% of raw CpS + random number between 3 and 15.
      shop.ClickerCPS += Math.abs(Math.round(shop.ClickersOwned * 2 + Math.abs(0.03 * stats.RawClicksPS) + lib.rng(3, 15)));

      // Clicker cost formula: Amount of clickers owned + clicker scale x raw CpS + amount of clickers owned x3 + random number between 100 and 200. 
      shop.ClickerCost += Math.round(shop.ClickersOwned + (shop.ClickerScale * stats.RawClicksPS) + shop.ClickersOwned * 3 + lib.rng(100, 200));

    } else {
      stats.ClicksPS += shop.ClickerCPS;
      shop.ClickerCPS += Math.abs(Math.round(shop.ClickersOwned * 2 + Math.abs((0.03 * stats.ClicksPS)) + lib.rng(3, 15)));
      shop.ClickerCost += Math.round(shop.ClickersOwned + (shop.ClickerScale * stats.ClicksPS) + shop.ClickersOwned * 3 + lib.rng(100, 200));
    }

    // Clicker click value formula: Half of clickers owned + 10% of CpS
    buff != 'none' ? stats.RawClickVal += Math.round(shop.ClickersOwned * 0.5 + 0.10 * stats.RawClicksPS) : stats.ClickValue += Math.round(shop.ClickersOwned * 0.5 + 0.10 * stats.RawClicksPS);

    // Enable shop animation if this is the first clicker the player has bought.
    if (shop.ClickersOwned == 1) {
      clickerImg.style.animation = 'clickermov 2s forwards';
      setTimeout(function () {
        clickerImg.style.transform = 'translate3d(35.5vw, 7.2vw, 0) rotate(172deg)';
        clickerImg.style.animation = 'clickerclick 0.5s 0.5s infinite ease-in alternate';
      }, 3000);
    }

    // Increase total shop items stat and modify clicker scale used in formula
    stats.TotalClickHelpers++;
    shop.ClickerScale++;
  }
});

superClickerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= shop.SuperClickerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= shop.SuperClickerCost;
    stats.TrueClicks -= shop.SuperClickerCost;
    shop.SuperClickersOwned++;
    shop.SuperClickerCPSWorth += shop.SuperClickerCPS;

    if (buff == 'cpsDouble') {
      stats.ClicksPS += (shop.SuperClickerCPS * 2);
      stats.RawClicksPS += shop.SuperClickerCPS;

      // Super clicker CpS formula: Amount of super clickers owned x15 + 20% of CpS
      shop.SuperClickerCPS += Math.abs(Math.round(shop.SuperClickersOwned * 15 + (0.2 * stats.RawClicksPS)));

      // Super clicker cost formula: Super clicker scale x CpS + Amount of super clickers owned x4 + random number between 10000 and 30000
      shop.SuperClickerCost += Math.round((shop.SuperClickerScale * stats.RawClicksPS) + shop.SuperClickersOwned * 4 + lib.rng(10000, 30000));

    } else {
      stats.ClicksPS += shop.SuperClickerCPS;
      shop.SuperClickerCPS += Math.abs(Math.round(shop.SuperClickersOwned * 15 + (0.2 * stats.ClicksPS)));
      shop.SuperClickerCost += Math.round((shop.SuperClickerScale * stats.ClicksPS) + shop.SuperClickersOwned * 4 + lib.rng(10000, 30000));
    }

    // Super clicker click value formula: Amount of super clickers owned x2 + 1% of CpS
    buff != 'none' ? stats.RawClickVal += Math.round(shop.SuperClickersOwned * 2 + 0.01 * stats.RawClicksPS) : stats.ClickValue += Math.round(shop.SuperClickersOwned * 2 + 0.01 * stats.RawClicksPS);

    if (shop.SuperClickersOwned == 1) {
      superClickerImg.style.animation = 'superclickermov 2s forwards';
      setTimeout(function () {
        superClickerImg.style.transform = 'translate3d(44vw, 2vw, 0) rotate(175deg)';
        superClickerImg.style.animation = 'superclickerclick 0.5s 0.5s infinite ease-in alternate';
      }, 3000);
    }

    stats.TotalClickHelpers++;
    shop.SuperClickerScale += 5;
  }
});

doublePointerBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= shop.DoublePointerCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= shop.DoublePointerCost;
    stats.TrueClicks -= shop.DoublePointerCost;
    shop.DoublePointersOwned++;
    shop.DoublePointerCPSWorth += shop.DoublePointerCPS;

    if (buff == 'cpsDouble') {
      stats.ClicksPS += (shop.DoublePointerCPS * 2);
      stats.RawClicksPS += shop.DoublePointerCPS;

      // Double pointer CpS formula: Amount of double pointers owned x5 + 40% of CpS + random number between 1000 and 3000
      shop.DoublePointerCPS += Math.abs(Math.round(shop.DoublePointersOwned * 5 + (0.4 * stats.RawClicksPS) + lib.rng(1000, 3000)));

      // Double pointer cost formula: Amount of double pointers owned + double pointer scale x CpS + amount of double pointers owned x5 + random number between 250000 and 500000
      shop.DoublePointerCost += Math.round(shop.DoublePointersOwned + (shop.DoublePointerScale * stats.RawClicksPS) + shop.DoublePointersOwned * 5 + lib.rng(250000, 500000));

    } else {
      stats.ClicksPS += shop.DoublePointerCPS;
      shop.DoublePointerCPS += Math.abs(Math.round(shop.DoublePointersOwned * 5 + (0.4 * stats.ClicksPS) + lib.rng(1000, 3000)));
      shop.DoublePointerCost += Math.round(shop.DoublePointersOwned + (shop.DoublePointerScale * stats.ClicksPS) + shop.DoublePointersOwned * 5 + lib.rng(500000, 1000000));
    }

    // Double pointer click value formula: Amount of double pointers owned x3 + 3% of CpS
    buff != 'none' ? stats.RawClickVal += Math.round(shop.DoublePointersOwned * 3 + 0.03 * stats.RawClicksPS) : stats.ClickValue += Math.round(shop.DoublePointersOwned * 3 + 0.03 * stats.RawClicksPS);

    if (shop.DoublePointersOwned == 1) {
      doublePointerImg.style.animation = 'doublepointermov 2s forwards';
      setTimeout(function () {
        doublePointerImg.style.transform = 'translate3d(39.8vw, 6.9vw, 0) rotate(90deg)';
        doublePointerImg.style.animation = 'doublepointerclick 0.5s 0.5s infinite ease-in alternate';
      }, 3000);
    }

    shop.DoublePointerScale += 10;
    stats.TotalClickHelpers++;
  }
});

upgradeButton.addEventListener('click', function () {
  sfx.play();
  sfx5 = new Audio();
  sfx5.src = './snd/shopbuy.mp3';
  shopPanel.style.display = 'none';
  upgradeShopPanel.style.display = 'block';

  // Hide floating regular shop icons if those items are not yet owned.
  if (shop.ClickersOwned == 0) clickerImg.style.display = 'none';
  if (shop.SuperClickersOwned == 0) superClickerImg.style.display = 'none';
  if (shop.DoublePointersOwned == 0) doublePointerImg.style.display = 'none';

  // Show floating upgrade shop icons in their starting places if the corresponding item is unlocked.
  if (uShop.CursorOwned) cursorImg.style.display = 'block';
  if (uShop.SuperCursorUnlocked) superCursorImg.style.display = 'block';
  if (uShop.EmployeeUnlocked) employeeImg.style.display = 'block';
  if (uShop.GodFingerUnlocked) godFingerImg.style.display = 'block';
  if (uShop.ClickerFusionUnlocked) clickerFusionImg.style.display = 'block';
});

upgradeRTS.addEventListener('click', function () {
  sfx.play();
  shopPanel.style.display = 'block';
  upgradeShopPanel.style.display = 'none';
  clickerImg.style.display = 'block';

  // Show floating regular shop icons in their starting places if the corresponding item is unlocked
  if (shop.SuperClickerUnlocked) superClickerImg.style.display = 'block';
  if (shop.DoublePointerUnlocked) doublePointerImg.style.display = 'block';

  // Hide floating upgrade shop icons if the corresponding items are not yet owned.
  if (!uShop.CursorOwned) cursorImg.style.display = 'none';
  if (!uShop.SuperCursorOwned) superCursorImg.style.display = 'none';
  if (uShop.EmployeesOwned < 1) employeeImg.style.display = 'none';
  if (!uShop.GodFingerOwned) godFingerImg.style.display = 'none';
  if (!uShop.ClickerFusionOwned) clickerFusionImg.style.display = 'none';
});

cursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= uShop.CursorCost && !uShop.CursorOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= uShop.CursorCost;
    stats.TrueClicks -= uShop.CursorCost;
    uShop.CursorOwned = !uShop.CursorOwned; //True

    shop.ClickerCPSWorth += Math.round(shop.ClickersOwned * uShop.CursorCPS);
    shop.SuperClickerCPSWorth += Math.round(shop.SuperClickerCPSWorth * uShop.CursorCPS);
    shop.DoublePointerCPSWorth += Math.round(shop.DoublePointerCPSWorth * uShop.CursorCPS);

    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (uShop.CursorCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * uShop.CursorCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * uShop.CursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.08 * stats.RawClicksPS); else stats.ClickValue += Math.round(0.08 * stats.RawClicksPS);

    uShop.CursorCost = 'Owned.';
    stats.TotalClickHelpers++;

    // Remove the animated cursor from the original parent and append it to the stats panel
    cursorImg.parentNode.removeChild(cursorImg);
    statsPanel.appendChild(cursorImg);
    if (uShop.CursorOwned) cursorImg.style.animationPlayState = 'running';
  }
});

superCursorBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= uShop.SuperCursorCost && !uShop.SuperCursorOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= uShop.SuperCursorCost;
    stats.TrueClicks -= uShop.SuperCursorCost;
    uShop.SuperCursorOwned = !uShop.SuperCursorOwned; //True

    shop.ClickersOwned += Math.round(shop.ClickersOwned * uShop.SuperCursorCPS);
    shop.SuperClickerCPSWorth += Math.round(shop.SuperClickerCPSWorth * uShop.SuperCursorCPS);
    shop.DoublePointerCPSWorth += Math.round(shop.DoublePointerCPSWorth * uShop.SuperCursorCPS);

    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (uShop.SuperCursorCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * uShop.SuperCursorCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * uShop.SuperCursorCPS);
    if (buff != 'none') stats.RawClickVal += Math.round(0.09 * stats.RawClicksPS); else stats.ClickValue += Math.round(0.09 * stats.RawClicksPS);

    uShop.SuperCursorCost = 'Owned.';
    stats.TotalClickHelpers++;

    superCursorImg.parentNode.removeChild(superCursorImg);
    statsPanel.appendChild(superCursorImg);
    superCursorImg.style.animationPlayState = 'running';
  }
});

employeeBuy.addEventListener('click', function () {
  sfx.play();
  if (stats.Clicks >= uShop.EmployeeCost) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= uShop.EmployeeCost;
    stats.TrueClicks -= uShop.EmployeeCost;
    uShop.EmployeesOwned++;

    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round(stats.RawClicksPS * (uShop.EmployeeCPS * 2)); stats.RawClicksPS += Math.round(stats.ClicksPS * uShop.EmployeeCPS); } else stats.ClicksPS += Math.round(stats.ClicksPS * uShop.EmployeeCPS);

    // Employee cost formula: Employees owned x2 x employee cost + CpS x75
    uShop.EmployeeCost += ((uShop.EmployeesOwned * 2) * uShop.EmployeeCost) + 75 * stats.ClicksPS;
    uShop.EmployeeCPS *= 2;

    stats.OfflineClicksPSPercen += 0.001;
    stats.TotalClickHelpers++;

    if (uShop.EmployeesOwned == 1) {
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
  if (stats.Clicks >= uShop.GodFingerCost && !uShop.GodFingerOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    stats.Clicks -= uShop.GodFingerCost;
    stats.TrueClicks -= uShop.GodFingerCost;
    uShop.GodFingerOwned = !uShop.GodFingerOwned; //True

    if (buff != 'none') stats.RawClickVal += Math.round(uShop.GodFingerCV * stats.RawClickVal); else stats.ClickValue += Math.round(uShop.GodFingerCV * stats.ClickValue);

    uShop.GodFingerCost = 'Owned.';
    stats.TotalClickHelpers++;

    godFingerImg.parentNode.removeChild(godFingerImg);
    statsPanel.appendChild(godFingerImg);
    godFingerImg.style.animationPlayState = 'running';
  }
});

clickerFusionBuy.addEventListener('click', function () {
  sfx.play();
  if (shop.ClickersOwned >= 150 && !uShop.ClickerFusionOwned) {
    sfx5.play();
    sfx5 = new Audio();
    sfx5.src = './snd/shopbuy.mp3';

    uShop.ClickerFusionOwned = !uShop.ClickerFusionOwned; //True
    shop.ClickerCPSWorth += Math.round(shop.ClickersOwned * 1.5);

    if (buff == 'cpsDouble') { stats.ClicksPS += Math.round((shop.ClickersOwned * 1.5) * 2); stats.RawCPS += Math.round(shop.ClickersOwned * 1.5); } else stats.ClicksPS += Math.round(shop.ClickersOwned * 1.5);

    uShop.ClickerFusionCost = 'Owned';
    stats.TotalClickHelpers++;

    clickerFusionImg.parentNode.removeChild(clickerFusionImg);
    statsPanel.appendChild(clickerFusionImg);
    clickerFusionImg.style.animationPlayState = 'running';
  }
});

// todo: Remove this event listener as it will become useless once debug keys are irrelevant
debugKeySubmit.addEventListener('click', function (event) {
  event.preventDefault();
  let dmkInput;
  try { dmkInput = atob(debugKeyInput.value); }
  catch (error) { dmkInput = debugKeyInput.value; }
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

// Save button event listeners
saveButton.addEventListener('click', function () { sfx.play(); manualSave = true; saveGame(); }); // Click
saveButton.addEventListener('mouseover', function () { savingString.style.top = '4vw'; }); // Hover
saveButton.addEventListener('mouseleave', function () { savingString.style.top = '2.6vw'; }); // Hover leave
wipeSaveButton.addEventListener('click', function () { sfx.play(); wipeSave(); }); // Wipe save

// Achievements
achievementsButton.addEventListener('click', function () { game.style.display = 'none'; achievementsPanel.style.display = 'block'; let index = 0; lib.achLabelSwitch(index); });
backToGame.addEventListener('click', function () { sfx.play(); game.style.display = 'block'; achievementsPanel.style.display = 'none'; });
journeyBegins.addEventListener('click', function () { lib.achLabelSwitch(0); });
aGoodStart.addEventListener('click', function () { lib.achLabelSwitch(1); });
gettingThere.addEventListener('click', function () { lib.achLabelSwitch(2); });
millionare.addEventListener('click', function () { lib.achLabelSwitch(3); });
coinPool.addEventListener('click', function () { lib.achLabelSwitch(4); });
abundance.addEventListener('click', function () { lib.achLabelSwitch(5); });
billionare.addEventListener('click', function () { lib.achLabelSwitch(6); });
excess.addEventListener('click', function () { lib.achLabelSwitch(7); });
planetOfClicks.addEventListener('click', function () { lib.achLabelSwitch(8); });
trillionare.addEventListener('click', function () { lib.achLabelSwitch(9); });
pocketDimension.addEventListener('click', function () { lib.achLabelSwitch(10); });
farTooMany.addEventListener('click', function () { lib.achLabelSwitch(11); });
quadrillionare.addEventListener('click', function () { lib.achLabelSwitch(12); });
coinVortex.addEventListener('click', function () { lib.achLabelSwitch(13); });
coinShapedBlackHole.addEventListener('click', function () { lib.achLabelSwitch(14); });
quintillionare.addEventListener('click', function () { lib.achLabelSwitch(15); });
clickBeyond.addEventListener('click', function () { lib.achLabelSwitch(16); });
distantBeginning.addEventListener('click', function () { lib.achLabelSwitch(17); });
sextillionare.addEventListener('click', function () { lib.achLabelSwitch(18); });
numberOverflow.addEventListener('click', function () { lib.achLabelSwitch(19); });
coinUniverse.addEventListener('click', function () { lib.achLabelSwitch(20); });
septillionare.addEventListener('click', function () { lib.achLabelSwitch(21); });
why.addEventListener('click', function () { lib.achLabelSwitch(22); });
twentyFingers.addEventListener('click', function () { lib.achLabelSwitch(23); });
forTheWorthy.addEventListener('click', function () { lib.achLabelSwitch(24); });
breakpoint.addEventListener('click', function () { lib.achLabelSwitch(25); });
cheater.addEventListener('click', function () { lib.achLabelSwitch(26); });

// Debug command line
cmdForm.addEventListener("submit", function (event) { event.preventDefault(); commandInterpret(); });

// Settings panel
settingsButton.addEventListener('click', function () { sfx.play(); settingsPanel.style.display = 'block'; game.style.display = 'none'; });
backToGame2.addEventListener('click', function () { sfx.play(); game.style.display = 'block'; settingsPanel.style.display = 'none'; });

volumeInput.addEventListener('change', function () {
  try {
    let sndArr = [bgm, sfx, sfx2, sfx3, sfx4, sfx5, sfx6, sfx7, sfx7point1];
    if (volumeInput.value >= 0 && volumeInput.value <= 100 && readyToSave) {
      volume = volumeInput.value / 100;
      for (let i = 0; i < sndArr.length; i++) sndArr[i].volume = volume;
    } else volumeInput.value = volume * 100;
  } catch (error) { errorHandler(error); }
});

autoBuyBtn.addEventListener('click', function () { if (shop.DoAutobuy) { autoBuyBtn.textContent = 'OFF'; shop.DoAutobuy = false; } else { autoBuyBtn.textContent = 'ON'; shop.DoAutobuy = true; } });

bgGradCenterInput.addEventListener('change', function () { document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`; });

bgGradEdgeInput.addEventListener('change', function () { document.body.style.backgroundImage = `radial-gradient(rgb(${bgGradCenterInput.value}), rgb(${bgGradEdgeInput.value})`; });

graphicsBtn.addEventListener('click', function () { sfx.play(); if (graphicsMode == 'Quality') graphicsMode = 'Performance'; else graphicsMode = 'Quality'; graphicsBtn.textContent = graphicsMode; });

resetBgButton.addEventListener('click', function () {
  let prompt = confirm('This is completely irreversible! Are you sure you wish to continue? (You will need to save again for these changes to stay.)');
  if (prompt) {
    bgGradCenterInput.value = '250, 224, 65';
    bgGradEdgeInput.value = '249, 160, 40';
    document.body.style.backgroundImage = 'radial-gradient(rgb(250, 224, 65), rgb(249, 160, 40))';
  }
});

bgm.addEventListener('ended', function () { setTimeout(function () { bgm = new Audio(); bgm.src = './snd/bgm.mp3'; bgm.play(); }, 1000) });

// Remove background particles that could slow down the reload process, and save the game
// If the game cannot be saved, prompt
window.addEventListener('beforeunload', function (event) {
  event.stopImmediatePropagation();
  $('.bg').remove();
  $('.coinparticle').remove();
  buff == 'none' && (doAutosave || debug) ? saveGame() : event.preventDefault();
});

// Vibrate the connected gamepad twice and set it up for input polling
window.addEventListener('gamepadconnected', function (event) {
  event.gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 100, weakMagnitude: 1.0, strongMagnitude: 1.0 });
  setTimeout(function () { event.gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 100, weakMagnitude: 1.0, strongMagnitude: 1.0 }); }, 500);
  globalThis.gamepad = event.gamepad;
  this.setInterval(function () { gamepad = navigator.getGamepads()[0] }, 1);
  unlockString.textContent = `Gamepad connected: ${event.gamepad.id}`;
  SHT = 500;
});

// Add intro animations over time to the title screen to prevent the title screen from behaving strangely if a prompt is displayed
document.addEventListener('loadevt', function () {
  try {
    //Hide loading screen
    loadingScreen.style.display = 'none';
    hiddenWhileLoading.style.display = 'block';

    // Pause all animations, and start the coin and intro string animation
    $('.hasanim').css('-webkit-animation-play-state', 'paused');
    $('.coins').css('-webkit-animation-play-state', 'running');
    $('#skipintrostring').css('-webkit-animation-play-state', 'running');

    setTimeout(function () {
      if (!init.GameStarted) sfx6.play();

      // Coin animations
      smallCoin3.style.animation = 'smallCoinMove3 1.5s 0.5s forwards';
      smallCoin4.style.animation = 'smallCoinMove4 1.5s 0.5s forwards';
      sfx6 = new Audio();
      sfx6.src = './snd/coinwhoosh.mp3';
      setTimeout(function () { if (!init.GameStarted) sfx6.play(); }, 500);
      smallCoin1.style.animation = 'smallCoinMove1 1.5s 0.8s forwards';
      smallCoin2.style.animation = 'smallCoinMove2 1.5s 0.8s forwards';

      setTimeout(function () {
        setTimeout(function () {
          if (!init.GameStarted) sfx7.play();

          // Title string and cosmetic clicker icon
          if (!prompting) {
            $('#title').css('-webkit-animation-play-state', 'running');
            $('#tsclicker').css('-webkit-animation-play-state', 'running');
          }
          // Hide the skip intro string
          skipIntroString.style.animation = 'btmstringmov 1s ease-in forwards';

          setTimeout(function () {
            if (!init.GameStarted) sfx7point1.play();
            // Beta text string
            if (!prompting) $('#betastring').css('-webkit-animation-play-state', 'running');

            setTimeout(function () {
              if (!init.GameStarted) sfx7.play();
              // Update name string
              if (!prompting) $('#updatestring').css('-webkit-animation-play-state', 'running');

              setTimeout(function () {
                // Spinning coins
                smallCoin3.style.rotate = '270deg';
                smallCoin4.style.rotate = '270deg';
                smallCoin1.style.animation = 'smallCoinSpin1 10s linear infinite';
                smallCoin2.style.animation = 'smallCoinSpin2 10s linear infinite';
                smallCoin3.style.animation = 'smallCoinSpin3 10s linear infinite';
                smallCoin4.style.animation = 'smallCoinSpin4 10s linear infinite';

                setTimeout(function () {
                  // Start button
                  if (!prompting) $('#startbutton').css('-webkit-animation-play-state', 'running');

                  setTimeout(function () {
                    if (!prompting) {
                      // Bottom information strings (build info, browser and client strings, etc)
                      $('.btmstr').css('-webkit-animation-play-state', 'running');
                    }
                  }, 1600); //8.4s
                }, 1800); //6.8s
              }, 900); //5.0s
            }, 400); //4.1s
          }, 500); //3.7s
        }, 300); //3.2s
      }, 1200); //2.9s
    }, 1700); //1.7s
  } catch (error) { errorHandler(error); }
});

document.addEventListener('keydown', function (event) {
  try {
    // todo: remove this line
    titleScreen.appendChild(key);
    // Ctrl-S to save
    if ((event.key == 's' || event.key == 'S') && event.ctrlKey && debugScreenState == 'closed' && !debugAutoplay) {
      event.preventDefault();
      manualSave = true;
      saveGame();

      // todo: remove the key generator keybind
    } else if ((event.key == 'y' || event.key == 'Y') && event.ctrlKey) {
      event.preventDefault();
      createBase64Key();

      // Alt-Y to toggle the debug screen
    } else if ((event.key == 'y' || event.key == 'Y') && event.altKey) {
      event.preventDefault();

      // Open the debug input screen, or skip it if a key was already entered
      if (init.GameStarted && debugScreenState == 'closed' && game.style.display == 'block') {
        debugScreenState = 'open';
        game.style.display = 'none';
        // todo: remove this
        if (!keyEntered) debugKeyInputScreen.style.display = 'block'; else if (keyEntered) debugScreen.style.display = 'block';

        // Close the debug/debug input screen
      } else if (init.GameStarted && debugScreenState == 'open' && game.style.display == 'none') {
        debugScreenState = 'closed';
        debugKeyInputScreen.style.display = 'none';
        debugScreen.style.display = 'none';
        game.style.display = 'block';
      }
      // Allow the starting animation to be skipped with the space bar
    } else if (event.key == ' ' && titleScreen.style.display == 'block') startButton.click();

    // Ctrl-Alt-F to enable debug mode
    else if ((event.key == 'f' || event.key == 'F') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      debug = !debug; //True
      doAutosave = !doAutosave; //False
      startButton.click();

      // Ctrl-Alt-A to enable debug autoplay
    } else if ((event.key == 'a' || event.key == 'A') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      prompting = !prompting; //True
      let prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will not affect your save.)');
      if (prompt) {
        debugAutoplay = !debugAutoplay; /*True*/
        startButton.click();
      } else prompting = !prompting //False

      // Ctrl-Alt-C to enable both debug mode and debug autoplay
    } else if ((event.key == 'c' || event.key == 'C') && event.ctrlKey && event.altKey && titleScreen.style.display == 'block') {
      event.preventDefault();
      debug = !debug; //True
      doAutosave = !doAutosave; //False
      prompting = !prompting; //True
      let prompt = confirm('Debug autoplay is purely for testing and your save will be wiped upon the next page load if you use it. Are you sure? (Pressing cancel will just enable debug mode, not debug autoplay.)');
      if (prompt) debugAutoplay = !debugAutoplay; /*True*/ else prompting = !prompting; /*False*/
      startButton.click();

      // Shift-F to toggle the FPS counter
    } else if ((event.key == 'f' || event.key == 'F') && event.shiftKey && fpsLabel.style.display == 'none') fpsLabel.style.display = 'block';
    else if ((event.key == 'f' || event.key == 'F') && event.shiftKey && fpsLabel.style.display == 'block') fpsLabel.style.display = 'none';
    // A to toggle the achievements screen
    else if ((event.key == 'a' || event.key == 'A') && game.style.display == 'block') achievementsButton.click();
    else if ((event.key == 'a' || event.key == 'A') && achievementsPanel.style.display == 'block') backToGame.click();
    // S to toggle the settings screen
    else if ((event.key == 's' || event.key == 'S') && game.style.display == 'block') settingsButton.click();
    else if ((event.key == 's' || event.key == 'S') && settingsPanel.style.display == 'block') backToGame2.click();
    // U to toggle the upgrade shop
    else if ((event.key == 'u' || event.key == 'U') && shopPanel.style.display == 'block' && debugKeyInputScreen.style.display != 'block' && debugScreen.style.display != 'block') upgradeButton.click();
    else if ((event.key == 'u' || event.key == 'U') && shopPanel.style.display == 'none' && debugKeyInputScreen.style.display != 'block' && debugScreen.style.display != 'block') upgradeRTS.click();
    // B to toggle autobuy
    else if ((event.key == 'b' || event.key == 'B') && init.GameStarted && event.target != debugKeyInput && event.target != commandInput) autoBuyBtn.click();

    // Arrow keys to shift through the debug command history
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

// Space to click the coin
document.addEventListener('keyup', function (event) { if (event.key == ' ' && game.style.display == 'block') coin.click(); });

// Shift the position of info labels so they follow the cursor
document.addEventListener('mousemove', function (event) {
  let left = event.clientX,
    top = event.clientY;

  // Clicker
  clickerInfo.style.left = `${leftBorderX}px`;
  clickerInfo.style.top = `${top - 35}px`;

  // Super clicker
  superClickerInfo.style.top = `${top - 35}px`;
  superClickerInfo.style.left = `${leftBorderX}px`;

  // Double pointer
  doublePointerInfo.style.left = `${leftBorderX}px`;
  doublePointerInfo.style.top = `${top - 35}px`;

  // Achievements button label
  achievementsLabel.style.left = `${left - achievementsLabel.getBoundingClientRect().width / 2}px`;
  achievementsLabel.style.top = `${top}px`;

  // Settings button label
  settingsLabel.style.left = `${left - settingsLabel.getBoundingClientRect().width / 2}px`;
  settingsLabel.style.top = `${top}px`;
});

betaString.addEventListener('animationend', function () { startBgCreate = !startBgCreate /*True*/ });

//***************************************/
//          Function intervals
//***************************************/

setTimeout(createBgElem, bgUpdInterval); //These are intervals, but are set up differently
setTimeout(updateScreen, updInterval); //to allow for live updating of the interval times.
setInterval(autoplay, 150);
setInterval(cpsClick, 100);
setInterval(rgChange, 25);

// If a buff is inactive, autosave
// Otherwise, keep the autosave pending until the buff finishes
setInterval(function () { if (doAutosave && buff == 'none' && init.GameStarted && ach[0][3]) { manualSave = false; saveGame(); } else if (buff != 'none') autosavePending = !autosavePending /*True*/ }, 60000);

// Update the save information string 
setInterval(function () {
  if (textSwitch && !debugAutoplay) {
    saveInfoString.textContent = `Last saved: ${lastSavedTime}`;
    textSwitch = false;
  }
  else if (!textSwitch && !debugAutoplay) {
    if (doAutosave) saveInfoString.textContent = 'Game autosaves every minute; You can also press Ctrl+S to save.'; else saveInfoString.textContent = 'Autosave is disabled. You will need to save manually.'; textSwitch = true;
  }
}, 3000);
var buttonPressed = false;

// Increment the playtime if 'Journey Begins' is unlocked.
setInterval(function () { if (ach[0][3]) stats.Playtime += 1000; buffRNGCalc(); }, 1000);

setInterval(function () {
  // Timeout to hide certain labels
  SHT--;
  if (SHT == 0) {
    savingString.textContent = '';
    unlockString.textContent = '';
    incorrectKeyLabel.textContent = '';
    if (!debugAutoplay) readyToSave = true;
    SHT = 500;
  }

  // Autobuy
  if (shop.DoAutobuy) {
    // Show the autobuy string and toggle button text
    autoBuyStr.style.display = 'block';
    autoBuyBtn.textContent = 'ON';

    // Update the array of costs
    costArray = [Math.abs(shop.ClickerCost), Math.abs(shop.SuperClickerCost), Math.abs(shop.DoublePointerCost), Math.abs(uShop.CursorCost), Math.abs(uShop.SuperCursorCost), Math.abs(uShop.EmployeeCost), Math.abs(uShop.GodFingerCost)];

    // Set up variables to sort through the array of item costs
    let smallest = Number.MAX_VALUE,
      costArraySorted = [],
      buttonArraySorted = [];

    // Update the 'smallest' variable to contain the smallest cost
    for (let i = 0; i < costArray.length; i++) if (costArray[i] < smallest) smallest = costArray[i];

    // Append the item with the smallest cost and its corresponding button to the sorted arrays
    for (let i = 0; i < costArray.length; i++) if (smallest >= costArray[i]) { costArraySorted.push(costArray[i]); buttonArraySorted.push(buttonArray[i]); }

    // Buy the item with the smallest cost if the player has enough clicks to do so
    for (let i = 0; i < costArraySorted.length; i++) if (stats.Clicks >= costArraySorted[i]) { buttonArraySorted[i].click(); }

  } else { autoBuyStr.style.display = 'none'; autoBuyBtn.textContent = 'OFF'; }

  // Let the player know that autosave has been postponed due to the active buff
  if (autosavePending && !debugAutoplay && doAutosave) savingString.textContent = 'A buff is active. Autosave postponed.';

  // If an autosave was pending due to an active buff, save the game once that buff has ended.
  if (buff == 'none' && autosavePending && doAutosave) { autosavePending = false; manualSave = false; saveGame(); }

  // Remove particles that surpass the max particle threshold.
  if (graphicsMode == 'Quality') {
    const particleClass = document.querySelectorAll('.coinparticle'),
      bgParticleClass = document.querySelectorAll('.bg');

    // Coin particles
    if (particleClass.length > 25) for (let i = 20; i > 0; i--) particleClass[i].parentNode.removeChild(particleClass[i]);

    // Background particles
    if (bgParticleClass.length > bgMax) for (let i = 35; i > 0; i--) bgParticleClass[i].parentNode.removeChild(bgParticleClass[i]);

    // Remove out of sight particles to free performance
    if (game.style.display == 'none') $('.coinparticle').remove();
    if (document.hidden) $('.bg').remove();
  } else { $('.bg').remove() }

  // Check if the user has potentially cheated by incrementing their click count using the debug or browser consoles
  if (stats.Clicks != stats.TrueClicks && !ach[26][3]) {
    achStr = `Achievement Unlocked: ${ach[26][0]}`;
    if (init.DataLoaded) { sfx4.play(); unlockString.textContent = achStr; unlockString.style.display = 'block'; }
    ach[26][3] = true;
    stats.AchievementsUnlocked++;
    stats.HiddenAchievementsUnlocked++;
    SHT = 500;
  }

  // Modify variables tied to background effects if the player has unlocked specific achievements
  if (ach[6][3]) { bgUpdInterval = 100; bgMax = 105; }
  if (ach[9][3]) { bgUpdInterval = 50; createCoinBg = true; bgMax = 210; }

  // Poll for gamepad input if a gamepad is connected.
  if (gamepad) {
    // Button inputs
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

    // If no buttons are pressed, set flag to false
    // This flag is required to prevent the game from repeating inputs if a button is held
    if (!cross && !circle && !square && !triangle && !l1 && !r1 && !l2 && !r2 && !share && !options && !l3 && !r3 && !dpadUp && !dpadDown && !dpadLeft && !dpadRight) buttonPressed = false;

    // Cross (without game started) - Click the start button
    if (cross && !init.GameStarted) startButton.click();

    // Circle or Cross (with game started) - Click the coin
    if ((circle || cross) && init.GameStarted && !buttonPressed) { buttonPressed = true; coin.click(); }

    // Square - Vibrate the controller and toggle the upgrade shop
    if (square && init.GameStarted && !buttonPressed) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (shopPanel.style.display == 'block') upgradeButton.click();
      else if (upgradeShopPanel.style.display == 'block') upgradeRTS.click();
    }

    // Triangle - Vibrate the controller and save the game
    if (triangle && init.GameStarted && !buttonPressed) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      manualSave = true;
      saveGame();
    }

    // Share - Vibrate the controller and toggle the achievements panel
    if (share && init.GameStarted && !buttonPressed) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (game.style.display == 'block') achievementsButton.click();
      else if (achievementsPanel.style.display == 'block') backToGame.click();
    }

    // Options - Vibrate the controller and toggle the settings panel
    if (options && init.GameStarted && !buttonPressed) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (game.style.display == 'block') settingsButton.click();
      else if (settingsPanel.style.display == 'block') backToGame2.click();
    }

    // L1 - Vibrate the controller and buy a clicker, or buy a cursor if the upgrade shop is open
    if (l1 && init.GameStarted && !buttonPressed) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') clickerBuy.click();
      else cursorBuy.click();
    }

    // R1 - Vibrate the controller and buy a super clicker, or buy a super cursor if the upgrade shop is open
    if (r1 && init.GameStarted && !buttonPressed && (shop.SuperClickerUnlocked || uShop.SuperCursorUnlocked)) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') superClickerBuy.click();
      else superCursorBuy.click();
    }

    // L2 - Vibrate the controller and buy a double pointer, or buy an employee if the upgrade shop is open.
    if (l2 && init.GameStarted && !buttonPressed && (shop.DoublePointerUnlocked || uShop.EmployeeUnlocked)) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      if (upgradeShopPanel.style.display == 'none') doublePointerBuy.click();
      else employeeBuy.click();
    }

    // R2 - Vibrate the controller and buy the god finger if the upgrade shop is open.
    if (r2 && init.GameStarted && !buttonPressed && uShop.GodFingerUnlocked) { buttonPressed = true; gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 }); if (upgradeShopPanel.style.display == 'block') godFingerBuy.click(); }

    // L3 - Vibrate the controller and toggle autobuy
    if (l3 && init.GameStarted && !buttonPressed) { buttonPressed = true; gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 }); autoBuyBtn.click(); }

    // R3 - Refresh the page.
    if (r3) location.reload();

    // DPad Up - Gamepad-specific call to wipe save
    if (dpadUp) { let gamepadActive = true; wipeSave(gamepadActive); }

    // DPad Left - Scroll to the left through the achievements list, or buy the clicker fusion if the upgrade shop is open
    if (dpadLeft && init.GameStarted && !buttonPressed && achievementsPanel.style.display == 'block') {
      buttonPressed = true;
      if (gpAchIndex > 0) gpAchIndex--;
      lib.achLabelSwitch(gpAchIndex);
    } else if (dpadLeft && init.GameStarted && !buttonPressed && upgradeShopPanel.style.display == 'block' && uShop.ClickerFusionUnlocked) {
      buttonPressed = true;
      gamepad.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: 50, weakMagnitude: 1.0, strongMagnitude: 1.0 });
      clickerFusionBuy.click();
    }

    // DPad Right - Scroll to the right through the achievements list
    if (dpadRight && init.GameStarted && !buttonPressed && achievementsPanel.style.display == 'block') { buttonPressed = true; if (gpAchIndex < 24) gpAchIndex++; lib.achLabelSwitch(gpAchIndex); }
  }
}, 1);

// Dispatch flag that specifies the game's code has finished loading
const loadEvt = new Event('loadevt');
document.dispatchEvent(loadEvt);
