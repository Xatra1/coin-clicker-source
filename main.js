//Coin Clicker Update 6 Codename "Abundance"
//Build 3.54 Rewrite Beta
//NOTE: The features present in this update of the game (especially debug autoplay) are still being heavily tested. The buff system may still have issues.

//Any code that is commented out does not get used, but is planned to be utilized in the near future.
//Error handler
function errorHandler(error) {
	const eElement = document.createElement("p");
	const body = document.body;
	const titlescreen = document.getElementById("titlescreen");
	eElement.textContent = "Error in script: " + error;
	console.error(error);
	eElement.style.fontSize = "10px";
	eElement.style.display = "block";
	titlescreen.style.display = "none";
	body.appendChild(eElement);
}
//Initial checks (Browser, screen resolution, etc)
console.group("Initial Checks");
var debugConsole = document.getElementById("debugconsole").textContent;
debugConsole = debugConsole + "\n";
const link = document.createElement("link");
const bmbarNote = document.createElement("p");
const resWarn = document.createElement("p");
const runningBrowserString = document.getElementById("runningbrowserstring");
const div = document.getElementById("unsupportedremove");
var enableJS = false; //The only browser that this applies to is IE, any other browser will set this to true
uaSniffer();
function uaSniffer() {
	const browsers = ["MSIE", "Firefox", "Safari", "Chrome", "OPR", "Edg"];
	const userAgent = navigator.userAgent;
	var index = browsers.length - 1;
	var browserStr = "Undetected";
	while (index > -1 && userAgent.indexOf(browsers[index]) == -1) { //Loop through possible UA strings to detect client browser
		index--;
	}
	if (index > -1) {
		browserStr = browsers[index];
	}
	//Normalize UA strings
	if (browserStr == "Edg") {
		browserStr = "Edge";
	} else if (browserStr == "OPR") {
		browserStr = "Opera";
	} else if (browserStr == "MSIE") {
		browserStr = "Internet Explorer";
	}
	const browserVer = userAgent.indexOf(browsers[index]); //Detect version of running browser
	runningBrowserString.textContent = "detected browser: " + browserStr + " v" + browserVer;
	console.log(browserStr + " " + browserVer)
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
		resolutionCheck(enableJS);
		throw ("Detected browser is unsupported, JavaScript will not be used past this point.");
	} else if (browserStr == "Chrome") { //Chrome is supported, but it is recommended to disable the bookmarks bar.
		enableJS = true;
		width = "1905";
		console.log("User is using either Chrome or a Chromium-based browser, width will be 1905, and displaying bookmarks bar notice.");
		debugConsole = debugConsole + "User is using either Chrome or a Chromium-based browser, width will be 1905, and displaying bookmarks bar notice." + "\n";
		bmbarNote.style.position = "static";
		bmbarNote.style.fontSize = "13px";
		bmbarNote.textContent = "Note: If you cannot see the build string in the bottom left, you may need to disable the bookmarks bar to see everything correctly.";
		document.body.appendChild(bmbarNote);
		bmbarNote.style.display = "block";
		document.getElementById("titlescreen").style.display = "block";
		resolutionCheck(enableJS, width);
	} else if (browserStr == "Firefox") { //Firefox is supported without issues.
		console.log("User is using Firefox, width will be 1920.");
		debugConsole = debugConsole + ("User is using Firefox, width will be 1920." + "\n");
		const width = "1920";
		enableJS = true;
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
		resolutionCheck(enableJS, width);
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
		enableJS = true;
		resolutionCheck(enableJS, width);
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
		enableJS = true;
		resolutionCheck(enableJS, width);
	} else {
		const width = "1920";
		enableJS = true;
		document.getElementById("titlescreen").style.display = "block";
		resolutionCheck(enableJS, width);
	}
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
		resWarn.textContent = "Your current browser width is unsupported! This may be caused by an unmaximized browser window, zoomed in/zoomed out browser window, or your screen resolution.";
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
	} else {
		div.appendChild(resWarn);
	}
}
function script() { //NOTE: Every variable contained within this function is local, and will need extra work done to be logged to the console.
	console.groupEnd();
	//Title screen elements
	const sourceNote = document.getElementById("sourcenote");
	const buildString = document.getElementById("buildstring");
	const basedOnBuildString = document.getElementById("basedonbuildstring");
	const updateString = document.getElementById("updatestring");
	const betaString = document.getElementById("betastring");
	const startButton = document.getElementById("startbutton");
	const title = document.getElementById("title");
	const key = document.createElement("p");
	//Game screen elements
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
	//Shop panel elements
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
	//Upgrade shop panel elements
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
	//Stat panel elements
	const statsPanel = document.getElementById("statspanel");
	const timePlayedString = document.getElementById("timestring");
	const lifetimeClicksString = document.getElementById("lifetimeclicksstring");
	const lifetimeManualClicksString = document.getElementById("lifetimemanualclicksstring");
	const coinClickCountString = document.getElementById("coinclickcountstring");
	const totalClickHelpersString = document.getElementById("totalclickhelpersstring");
	const achievementsUnlockedString = document.getElementById("achievementsunlockedstring");
	//Debug screen elements
	const debugKeyInputScreen = document.getElementById("debuginputscreen");
	const debugKeyInput = document.getElementById("debugkeyinput");
	debugKeyInput.value = "";
	const debugKeySubmit = document.getElementById("debugkeysubmit");
	const incorrectKeyLabel = document.getElementById("incorrectkeyentered");
	const debugScreen = document.getElementById("debugscreen");
	//Achievement screen elements
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
	const backToGame = document.getElementById("backtogame");
	//Settings screen elements
	const settingsButton = document.getElementById("settingsbutton");
	const settingsLabel = document.getElementById("settingslabel");
	const settingsPanel = document.getElementById("settingsscreen");
	const backToGame2 = document.getElementById("backtogame2");
	const volumeInput = document.getElementById("volumeinput");
	//Title screen variables
	const buildNumber = "3.54rb";
	const updateName = "abundance";
	console.group("Build Info");
	console.log("Running update 5 codename " + updateName + " build " + buildNumber);
	console.groupEnd();
	var gameStarted = false;
	var generatedKey = "debug";
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
	var clickerCost = 15;
	var clickerCostText = "15";
	var clickersOwned = 0;
	var clickersOwnedText = "0";
	var clickerCPSWorth = 0;
	var clickerCPSWorthText = "0";
	var superClickerUnlocked = false;
	var superClickerCPS = 2000;
	var superClickerCPSText = "2,000";
	var superClickerCost = 500000;
	var superClickerCostText = "500,000";
	var superClickersOwned = 0;
	var superClickersOwnedText = "0";
	var superClickerCPSWorth = 0;
	var superClickerCPSWorthText = "0";
	var doublePointerUnlocked = false;
	var doublePointerCPS = 25000000;
	var doublePointerCPSText = "25,000,000";
	var doublePointerCost = 750000000;
	var doublePointerCostText = "750,000,000";
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
	var employeeCPS = 0.01;
	var employeeCost = 50000000000;
	var employeeCostText = "50,000,000,000";
	var employeesOwned = 0;
	var employeesOwnedText = "0";
	var godFingerUnlocked = false;
	var godFingerCV = 0.35;
	var godFingerCost = 5000000000000;
	var godFingerOwned = false;
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
	const achStrs = ["Journey Begins", "A Good Start", "Getting There", "Millionare", "Coin Pool", "Abundance", "Billionare", "Excess", "Planet of Clicks",
		"Trillionare", "Pocket Dimension", "Far Too Many", "Quadrillionare"];
	const achDescs = ["Obtain 1 lifetime click.", "Obtain 10,000 lifetime clicks.", "Obtain 100,000 lifetime clicks.", "Obtain 1,000,000 lifetime clicks.",
		"Obtain 10,000,000 lifetime clicks.", "Obtain 100,000,000 lifetime clicks.", "Obtain 1,000,000,000 lifetime clicks.", "Obtain 10,000,000,000 lifetime clicks.",
		"Obtain 100,000,000,000 lifetime clicks.", "Obtain 1,000,000,000,000 lifetime clicks.", "Obtain 10,000,000,000,000 lifeitme clicks.",
		"Obtain 100,000,000,000,000 lifetime clicks.", "Obtain 1,000,000,000,000,000 lifetime clicks."];
	var achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
		excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked, quadrillionareUnlocked
	];
	var achStr = "none";
	//Audio variables
	var volume = 1.0;
	var sfx = new Audio("./snd/click.mp3");
	var sfx2 = new Audio("./snd/shopunlock.mp3");
	var sfx3 = new Audio("./snd/achievementunlock.mp3");
	var sfx4 = new Audio("./snd/specialachievementunlocksfx.mp3");
	var sfx5 = new Audio("./snd/shopbuy.mp3");
	//Color variables
	var increase = true;
	var red = 0;
	var green = 0;
	//Debug mode variables
	var debugScreenState = "closed";
	console.group("Debug");
	var debug = false; //This boolean is purely for quickly testing added code, this will not affect anything within the normal game and should be set to false in released builds.
	var debugAutoplay = false; //This boolean makes the game almost fully automated, requiring almost zero user input. It should be set to false in released builds, but if you see this message, you are welcome to enable it. However, it will automatically save the game, disable saving, and DESTROY your save on next load.
	var forceBuff = false; //This boolean determines if the buff RNG value listed in buffRNGCalc() is forced or if it's always random. It should be set to false in released builds.
	var screenSwitch = true; //Related to debugAutoplay, this boolean determines which screen to switch (either the regular shop or the upgrade shop) during autoplay. It is automatically changed every 5 seconds.
	if (debug) {
		canvasDraw();
		gameStarted = true;
		title.style.display = "none";
		sourceNote.textContent = "Debug boolean and debug autoplay states are " + debug + " and " + debugAutoplay;
		game.appendChild(sourceNote);
		sourceNote.style.position = "fixed";
		sourceNote.style.top = "47vw";
		runningBrowserString.style.display = "none";
		basedOnBuildString.style.display = "none";
		updateString.style.display = "none";
		betaString.style.display = "none";
		startButton.style.display = "none";
		game.style.display = "block";
		shopPanel.style.display = "block";
		superClickerUnlocked = true;
		doublePointerUnlocked = true;
		superCursorUnlocked = true;
		employeeUnlocked = true;
		godFingerUnlocked = true;
		statsPanel.style.display = "block";
		bmbarNote.style.display = "none";
		console.log("Debug boolean is enabled. Titlescreen will be skipped and all shop items will be unlocked from the start.");
		debugConsole = debugConsole + "Debug boolean is enabled. Titlescreen will be skipped and all shop items will be unlocked from the start." + "\n";
	}
	if (debugAutoplay) {
		sourceNote.textContent = "Debug boolean and debug autoplay states are " + debug + " and " + debugAutoplay;
		sourceNote.style.position = "fixed";
		sourceNote.style.top = "47vw";
		console.warn("Debug autoplay is enabled. User input will be automated, but the current save will be destroyed on next load. (Autosave is disabled)");
		debugConsole = debugConsole + "WARN: Debug autoplay is enabled. User input will be automated, but the current save will be destroyed on next load. (Autosave is disabled)" + "\n";
	}
	console.groupEnd();
	//Miscellaneous variables
	var intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, clickerCPS, clickerCost,
		clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, employeesOwned,
		clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, achievementsUnlocked
	];
	var textArray = [clicksText, clickValueText, cpsText, lifetimeClicksText, lifetimeManualClicksText, coinClickCountText, totalClickHelpersText,
		clickerCPSText, clickerCostText, clickersOwnedText, superClickerCPSText, superClickerCostText, superClickersOwnedText, doublePointerCPSText,
		doublePointerCostText, doublePointersOwnedText, employeeCostText, employeesOwnedText, clickerCPSWorthText, superClickerCPSWorthText,
		doublePointerCPSWorthText, achievementsUnlockedText
	];
	//Title screen content updates
	buildString.textContent = ("build " + buildNumber);
	updateString.textContent = ("the " + updateName + " update");
	initialDataLoad();
	//Functions
	function autoplay() {
		try {
			if (debugAutoplay && readyToSave) {
				manualSave = true;
				saveGame();
				readyToSave = false;
			} else if (debugAutoplay) {
				saveInfoString.textContent = "Saving is disabled.";
				sfx.volume = 0;
				coin.click();
				if (clicks >= clickerCost) clickerBuy.click();
				if (clicks >= superClickerCost && superClickerUnlocked) superClickerBuy.click();
				if (clicks >= doublePointerCost && doublePointerUnlocked) doublePointerBuy.click();
				if (clicks >= cursorCost) cursorBuy.click();
				if (clicks >= superCursorCost && superCursorUnlocked) superCursorBuy.click();
				if (clicks >= employeeCost && employeeUnlocked) employeeBuy.click();
				if (clicks >= godFingerCost && godFingerUnlocked) godFingerBuy.click();
			}
		} catch (error) {
			errorHandler(error);
		}
	}
	function updateScreen() {
		try {
			addNumberCommas();
			document.getElementById("debugconsole").value = debugConsole;
			clickString.textContent = "Clicks: " + textArray[0];
			cpsString.textContent = "Clicks per Second: " + textArray[2];
			clickValueString.textContent = "Click Value: " + textArray[1];
			clickerCPSString.textContent = "CPS: +" + textArray[7];
			clickerCostString.textContent = "Cost: " + textArray[8];
			clickersOwnedString.textContent = "Owned: " + textArray[9];
			if (cps != 0) {
				clickerInfo.textContent = "Your " + textArray[9] + " clickers account for " + textArray[20] + " (" + Math.round((intArray[20] / cps) * 100) + "%) CPS.";
				superClickerInfo.textContent = "Your " + textArray[12] + " super clickers account for " + textArray[21] + " (" + Math.round((intArray[21] / cps) * 100) + "%) CPS.";
				doublePointerInfo.textContent = "Your " + textArray[15] + " double pointers account for " + textArray[22] + " (" + Math.round((intArray[22] / cps) * 100) + "%) CPS.";
			}
			if (upgradeShopOpen == true) {
				cursorOwnedString.textContent = "Owned: " + cursorOwned;
				superCursorOwnedString.textContent = "Owned: " + superCursorOwned;
				employeeCostString.textcontent = "Cost: " + textArray[16];
				employeesOwnedString.textContent = "Owned: " + textArray[17];
				godFingerOwnedString.textContent = "Owned: " + godFingerOwned;
				if (cursorOwned) {
					cursorCostString.textContent = "Cannot buy again.";
				}
				if (superCursorOwned) {
					superCursorCostString.textContent = "Cannot buy again.";
				}
				if (godFingerOwned) {
					godFingerCostString.textContent = "Cannot buy again.";
				}
			}
			if (timePlayed == 1000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " second.";
			else if (timePlayed >= 60000 && timePlayed < 900000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minute.";
			else if (timePlayed >= 3600000 && timePlayed < 5400000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hour.";
			if (timePlayed > 1000 && timePlayed < 60000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " seconds.";
			else if (timePlayed > 90000 && timePlayed < 5400000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minutes.";
			else if (timePlayed > 5400000) timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hours.";
			lifetimeClicksString.textContent = "You have obtained a total of " + textArray[3] + " clicks.";
			if (lifetimeClicks == 1) lifetimeClicksString.textContent = "You have obtained a total of " + textArray[3] + " click.";
			lifetimeManualClicksString.textContent = "You have gotten " + textArray[4] + " clicks from clicking.";
			if (lifetimeManualClicks == 1) lifetimeManualClicksString.textContent = "You have gotten " + textArray[4] + " click from clicking.";
			coinClickCountString.textContent = "You have clicked the coin " + textArray[5] + " times.";
			if (coinClickCount == 1) coinClickCountString.textContent = "You have clicked the coin " + textArray[5] + " time.";
			totalClickHelpersString.textContent = "You have bought " + textArray[6] + " items.";
			if (totalClickHelpers == 1) totalClickHelpersString.textContent = "You have bought " + textArray[6] + " item.";
			achievementsUnlockedString.textContent = "You have unlocked " + textArray[23] + " out of 13 achievements.";
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
				unlockString.style.display = "block";
				superClickerGroup.style.display = "block";
				superClickerUnlocked = true;
				SHT = 500;
			} else if (superClickerUnlocked) {
				superClickerGroup.style.display = "block";
				superClickerCPSString.textContent = "CPS: +" + textArray[10];
				superClickerCostString.textContent = "Cost: " + textArray[11];
				superClickersOwnedString.textContent = "Owned: " + textArray[12];
			}
			if (clickersOwned >= 75 && superClickersOwned >= 5 && !doublePointerUnlocked) {
				sfx2.play();
				unlockString.textContent = "Double Pointer unlocked!";
				unlockString.style.display = "block";
				doublePointerGroup.style.display = "block";
				doublePointerUnlocked = true;
				SHT = 500;
			} else if (doublePointerUnlocked) {
				doublePointerGroup.style.display = "block";
				doublePointerCPSString.textContent = "CPS: +" + textArray[13];
				doublePointerCostString.textContent = "Cost: " + textArray[14];
				doublePointersOwnedString.textContent = "Owned: " + textArray[15];
			}
			if (cursorOwned && !superCursorUnlocked) {
				sfx2.play();
				unlockString.textContent = "Super Cursor unlocked!";
				unlockString.style.display = "block";
				superCursorGroup.style.display = "block";
				superCursorUnlocked = true;
				SHT = 500;
			} else if (superCursorUnlocked) superCursorGroup.style.display = "block";
			if (cursorOwned && superCursorOwned && !employeeUnlocked) {
				sfx2.play();
				unlockString.textContent = "Employee unlocked!";
				unlockString.style.display = "block";
				employeeGroup.style.display = "block";
				employeeUnlocked = true;
				SHT = 500;
			} else if (employeeUnlocked) employeeGroup.style.display = "block";
			if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3 && cursorOwned && superCursorOwned && godFingerUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "God Finger unlocked!";
				unlockString.style.display = "block";
				godFingerGroup.style.display = "block";
				godFingerUnlocked = true;
				SHT = 500;
			} else if (godFingerUnlocked) godFingerGroup.style.display = "block";
			achievementUnlockCheck();
		} catch (error) {
			errorHandler(error);
		}
	}
	function achievementUnlockCheck() {
		try {
			if (lifetimeClicks >= 1 && !achArr[0]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Journey Begins";
				achArr[0] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000 && !achArr[1]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: A Good Start";
				achArr[1] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 100000 && !achArr[2]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Getting There";
				achArr[2] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 1000000 && !achArr[3]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Millionare";
				achArr[3] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000000 && !achArr[4]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Coin Pool";
				achArr[4] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 100000000 && !achArr[5]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Abundance";
				achArr[5] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 1000000000 && !achArr[6]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Billionare";
				achArr[6] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000000000 && !achArr[7]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Excess";
				achArr[7] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 100000000000 && !achArr[8]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Planet of Clicks";
				achArr[8] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 1000000000000 && !achArr[9]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Trillionare";
				achArr[9] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 10000000000000 && !achArr[10]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Pocket Dimension";
				achArr[10] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 100000000000000 && !achArr[11]) {
				if (gameStarted) sfx3.play();
				achStr = "Achievement Unlocked: Far Too Many";
				achArr[11] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 1000000000000000 && !achArr[12]) {
				if (gameStarted) sfx4.play();
				achStr = "Special Achievement Unlocked: Quadrillionare";
				achArr[12] = true;
				achievementsUnlocked++;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
		} catch (error) {
			errorHandler(error);
		}
	}
	function addNumberCommas() {
		try {
			intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, clickerCPS, clickerCost,
				clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost,
				employeesOwned, unbuffedCV, unbuffedCPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth, achievementsUnlocked
			];
			var i = -1;
			while (i < intArray.length - 1) {
				i++;
				if (navigator.userAgent.indexOf("Edg") == -1) textArray[i] = intArray[i].toLocaleString(); //Edge does not support Number.prototype.toLocaleString, it will not be use 
				else textArray[i] = intArray[i];
			}
		} catch (error) {
			errorHandler(error);
		}
	}
	function shopCostPulse() {
		try {
			if (clicks >= clickerCost) clickerCostString.style.color = "rgb(0," + green + ",0)";
			else clickerCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= superClickerCost) superClickerCostString.style.color = "rgb(0," + green + ",0)";
			else superClickerCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= doublePointerCost) doublePointerCostString.style.color = "rgb(0," + green + ",0)";
			else doublePointerCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= cursorCost) cursorCostString.style.color = "rgb(0," + green + ",0)";
			else cursorCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= superCursorCost) superCursorCostString.style.color = "rgb(0," + green + ",0)";
			else superCursorCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= employeeCost) employeeCostString.style.color = "rgb(0," + green + ",0)";
			else employeeCostString.style.color = "rgb(0, 0, 0)";
			if (clicks >= godFingerCost) godFingerCostString.style.color = "rgb(0," + green + ",0)";
			else godFingerCostString.style.color = "rgb(0, 0, 0)";
		} catch (error) {
			errorHandler(error);
		}
	}
	function initialDataLoad() {
		try {
			console.group("Initial Data Load");
			if (localStorage.getItem('saveData', saveData) != null) {
				const data = localStorage.getItem('saveData', saveData);
				const loadData = JSON.parse(data);
				console.log("Data being loaded: ");
				console.log(loadData);
				if (loadData[50] == buildNumber) {
					if (!loadData[53]) {
						journeyBeginsUnlocked = loadData[32];
						aGoodStartUnlocked = loadData[33];
						gettingThereUnlocked = loadData[34];
						millionareUnlocked = loadData[35];
						coinPoolUnlocked = loadData[36];
						abundanceUnlocked = loadData[37];
						billionareUnlocked = loadData[38];
						excessUnlocked = loadData[39];
						planetOfClicksUnlocked = loadData[40];
						trillionareUnlocked = loadData[41];
						pocketDimensionUnlocked = loadData[42];
						farTooManyUnlocked = loadData[43];
						quadrillionareUnlocked = loadData[47];
						achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
							excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked, quadrillionareUnlocked
						];
						clicks = loadData[0];
						clickValue = loadData[1];
						unbuffedCV = loadData[2];
						cps = loadData[3];
						unbuffedCPS = loadData[4];
						timePlayed = loadData[5];
						lifetimeClicks = loadData[6];
						lifetimeManualClicks = loadData[7];
						coinClickCount = loadData[8];
						totalClickHelpers = loadData[9];
						clickerCPS = loadData[10];
						clickerCost = loadData[11];
						clickersOwned = loadData[12];
						superClickerUnlocked = loadData[13];
						superClickerCPS = loadData[14];
						superClickerCost = loadData[15];
						superClickersOwned = loadData[16];
						doublePointerUnlocked = loadData[17];
						doublePointerCPS = loadData[18];
						doublePointerCost = loadData[19];
						doublePointersOwned = loadData[20];
						cursorCost = loadData[21];
						cursorOwned = loadData[22];
						superCursorUnlocked = loadData[23];
						superCursorCost = loadData[24];
						superCursorOwned = loadData[25];
						employeeUnlocked = loadData[26];
						employeeCost = loadData[27];
						employeesOwned = loadData[28];
						godFingerUnlocked = loadData[29];
						godFingerCost = loadData[30];
						godFingerOwned = loadData[31];
						clickerCPSWorth = loadData[44];
						superClickerCPSWorth = loadData[45];
						doublePointerCPSWorth = loadData[46];
						buff = loadData[49];
						unbuffedCPS = loadData[48];
						unbuffedCV = loadData[51];
						if (buff == "cpsDouble") {
							cps = unbuffedCPS;
							buff = "none";
						} else if (buff == "cv777%CPS") {
							clickValue = unbuffedCV
							buff = "none";
						}
						volume = loadData[52];
						sfx.volume = volume;
						sfx2.volume = volume;
						sfx3.volume = volume;
						sfx4.volume = volume;
						volumeInput.value = volume * 100;
					} else {
						console.warn("Debug autoplay was enabled on the last save, it will be destroyed.");
						debugConsole = debugConsole + "WARN: Debug autoplay was enabled on the last save, it will be destroyed." + "\n";
						localStorage.removeItem('saveData', saveData);
					}
				} else {
					console.warn("Save is incompatible, it will not be loaded.");
					debugConsole = debugConsole + "WARN: Save is incompatible, it will not be loaded." + "\n";
				}
			} else {
				console.warn("There is no save to load. Creating one now.");
				debugConsole = debugConsole + "WARN: There is no save to load. Creating one now." + "\n";
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
				readyToSave = false;
				savingString.textContent = "Saving...";
				savingString.style.display = "block";
				saveData.push(clicks);
				saveData.push(clickValue);
				saveData.push(unbuffedCV);
				saveData.push(cps);
				saveData.push(unbuffedCPS);
				saveData.push(timePlayed);
				saveData.push(lifetimeClicks);
				saveData.push(lifetimeManualClicks);
				saveData.push(coinClickCount);
				saveData.push(totalClickHelpers);
				saveData.push(clickerCPS);
				saveData.push(clickerCost);
				saveData.push(clickersOwned);
				saveData.push(superClickerUnlocked);
				saveData.push(superClickerCPS);
				saveData.push(superClickerCost);
				saveData.push(superClickersOwned);
				saveData.push(doublePointerUnlocked);
				saveData.push(doublePointerCPS);
				saveData.push(doublePointerCost);
				saveData.push(doublePointersOwned);
				saveData.push(cursorCost);
				saveData.push(cursorOwned);
				saveData.push(superCursorUnlocked);
				saveData.push(superCursorCost);
				saveData.push(superCursorOwned);
				saveData.push(employeeUnlocked);
				saveData.push(employeeCost);
				saveData.push(employeesOwned);
				saveData.push(godFingerUnlocked);
				saveData.push(godFingerCost);
				saveData.push(godFingerOwned);
				saveData.push(journeyBeginsUnlocked);
				saveData.push(aGoodStartUnlocked);
				saveData.push(gettingThereUnlocked);
				saveData.push(millionareUnlocked);
				saveData.push(coinPoolUnlocked);
				saveData.push(abundanceUnlocked);
				saveData.push(billionareUnlocked);
				saveData.push(excessUnlocked);
				saveData.push(planetOfClicksUnlocked);
				saveData.push(trillionareUnlocked);
				saveData.push(pocketDimensionUnlocked);
				saveData.push(farTooManyUnlocked);
				saveData.push(clickerCPSWorth);
				saveData.push(superClickerCPSWorth);
				saveData.push(doublePointerCPSWorth);
				saveData.push(quadrillionareUnlocked);
				saveData.push(unbuffedCPS);
				saveData.push(buff);
				saveData.push(buildNumber);
				saveData.push(unbuffedCV);
				saveData.push(volume);
				saveData.push(debugAutoplay);
				saveGameP2(needToSave);
			} else if (!readyToSave && manualSave) {
				console.warn("Not ready to save, or saving is disabled!");
				debugConsole = debugConsole + "Not ready to save, or saving is disabled!" + "\n";
			}
		} catch (error) {
			errorHandler(error)
		}
	}
	function saveGameP2(needToSave) {
		try {
			localStorage.setItem('saveData', JSON.stringify(saveData));
			while (saveData.length > 0) saveData.pop();
			if (saveData.length == 0) {
				if (manualSave) {
					savingString.textContent = "Game saved.";
					console.log("Game saved @ playtime " + timePlayed + "ms");
					debugConsole = debugConsole + ("Game saved @ playtime " + timePlayed + "ms" + "\n");
				} else {
					savingString.textContent = "Game autosaved.";
					console.log("Game autosaved @ playtime " + timePlayed + "ms");
					debugConsole = debugConsole + ("Game autosaved @ playtime " + timePlayed + "ms" + "\n");
				}
				if (needToSave) console.groupEnd();
				SHT = 500;
			}
		} catch (error) {
			errorHandler(error)
		}
	}
	function wipeSave() {
		try {
			if (readyToSave) {
				readyToSave = false;
				if (confirm("This is completely irreversible and wiping your save will also refresh the page! Are you sure you wish to continue?")) {
					localStorage.removeItem("saveData");
					location.reload();
				} else {
					readyToSave = true;
				}
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
			if (forceBuff && buff == "none") buffRNG = 300;
			else if (!forceBuff && buff == "none") buffRNG = Math.floor((Math.random() * max) + min);
			if (buffRNG == 100 && buff == "none") {
				if (cps > 0) {
					buffStr.textContent = "Your CPS has been doubled for 30 seconds!";
					buffStr.style.display = "block";
					unbuffedCPS = cps;
					cps = Math.round(cps * 2);
					buff = "cpsDouble";
					window.setTimeout(buffRemoval, 30000);
				}
			} else if (buffRNG == 200 && buff == "none") {
				if (cps > 0) {
					buffStr.textContent = "Your click value has been increased by 777% of your CPS for 5 seconds!";
					buffStr.style.display = "block";
					unbuffedCV = clickValue;
					clickValue = clickValue + Math.round(cps * 7.77);
					buff = "cv777%CPS";
					window.setTimeout(buffRemoval, 5000);
				}
			} else if (buffRNG == 300 && buff == "none") {
				if (cps > 0 && clicks > 0) {
					clicksAdded = Math.round(0.3 * cps + 0.1 * clicks);
					clicks = clicks + clicksAdded;
					buffStr.textContent = "You got " + clicksAdded + " additional clicks!";
					buffStr.style.display = "block";
					buff = "bonusClicks";
					window.setTimeout(buffRemoval, 2000);
				}
			}
			if (buff != "none" && !alreadyLogged) {
				alreadyLogged = true;
				console.log("Current buff is " + buff);
				debugConsole = debugConsole + "Current buff is " + buff + "\n";
			}
		} catch (error) {
			errorHandler(error);
		}
	}
	function buffRemoval() {
		try {
			buffStr.style.display = "none";
			if (buff == "cpsDouble") {
				cps = unbuffedCPS;
				buff = "none";
			} else if (buff == "cv777%CPS") {
				clickValue = unbuffedCV;
				buff = "none";
			} else if (buff == "bonusClicks") {
				clicksAdded = 0;
				buff = "none";
			}
			console.log("Buff removed.");
		} catch (error) {
			errorHandler(error);
		}
		alreadyLogged = false;
	}
	function timeIncrease() {
		timePlayed = timePlayed + 1000;
	}

	function coinClick() {
		try {
			sfx.play();
			clicks = clicks + clickValue;
			lifetimeClicks = lifetimeClicks + clickValue;
			lifetimeManualClicks = lifetimeManualClicks + clickValue;
			coinClickCount++;
		} catch (error) {
			errorHandler(error);
		}
	}
	function cpsClick() {
		try {
			clicks = clicks + cps * 0.25;
			clicks = Math.round(clicks);
			lifetimeClicks = lifetimeClicks + cps * 0.25;
			lifetimeClicks = Math.round(lifetimeClicks);
		} catch (error) {
			errorHandler(error);
		}
	}
	function rgChange() {
		try {
			if (increase) {
				red = red + 5;
				green = green + 5;
			} else if (!increase) {
				red = red - 5;
				green = green - 5;
			}
			if (green == 200) increase = false;
			else if (green == 0) increase = true;
			quadrillionare.style.borderBlockColor = "rgb(" + red + ",0,0)";
			quadrillionare.style.borderInlineColor = "rgb(" + red + ",0,0)";
			shopCostPulse();
		} catch (error) {
			errorHandler(error);
		}
	}
	function canvasDraw() {
		try {
			const canvas = document.getElementById("borders");
			const ctx = canvas.getContext("2d");
			const size = $(window).width();
			const scale = window.devicePixelRatio;
			if (navigator.userAgent.indexOf("OPR") == -1 && navigator.userAgent.indexOf("Edg") == -1) { //Edge and Opera do not support this style of canvas drawing, it will not be used.
				canvas.style.width = "${size}px";
				canvas.style.height = "${size}px";
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
				debugConsole = debugConsole + "Generating key..." + "\n";
				const addArray = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M",
					"n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "0", "1", "2",
					"3", "4", "5", "6", "7", "8", "9"];
				var c = 30;
				while (c > 0) {
					c--;
					var val = (Math.floor(Math.random() * 61) + 1);
					generatedKey = generatedKey + addArray[val];
					if (c == 0) {
						console.log("Key generated.");
						debugConsole = debugConsole + "Key generated." + "\n";
						const base64key = btoa(generatedKey);
						key.textContent = base64key;
						key.style.fontFamily = "courier";
						key.style.display = "block";
						console.log("Unencoded: " + generatedKey);
						console.log("Base64: " + base64key);
						debugConsole = debugConsole + "Unencoded: " + generatedKey + "\n";
						debugConsole = debugConsole + "Base64: " + base64key + "\n";
						console.groupEnd();
					}
				}
			}
		} catch (error) {
			errorHandler(error);
		}
	}
	function logDNPError() {
		console.warn("Stop! Do NOT paste anything here. If you are told to do so, it is likely that someone is attempting to mess up your save.");
	}
	//Event listeners
	startButton.addEventListener("click", function () {
		gameStarted = true;
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
			sfx5.play();
			clicks = clicks - clickerCost;
			clickersOwned++;
			cps = cps + clickerCPS;
			clickerCPSWorth = clickerCPSWorth + clickerCPS;
			if (buff == "cpsDouble") cps = cps + (clickerCPS * 2);
			clickerCPS = clickerCPS + Math.round(clickersOwned * 2 + (0.01 * cps) + (Math.floor(Math.random() * 15) + 3));
			clickerCost = clickerCost + Math.round(clickersOwned + (5 * cps) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
			clickValue = clickValue + Math.round(clickersOwned * 0.5 + 0.05 * cps);
			totalClickHelpers++;
		}
	});
	superClickerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= superClickerCost) {
			sfx5.play();
			clicks = clicks - superClickerCost;
			superClickersOwned++;
			cps = cps + superClickerCPS;
			superClickerCPSWorth = superClickerCPSWorth + superClickerCPS;
			if (buff == "cpsDouble") cps = cps + (superClickerCPS * 2);
			superClickerCPS = superClickerCPS + Math.round(superClickersOwned * 3 + (0.4 * cps));
			superClickerCost = superClickerCost + Math.round(superClickerCost + (50 * cps) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
			clickValue = clickValue + Math.round(superClickersOwned * 2 + 0.10 * cps);
			totalClickHelpers++;
		}
	});
	doublePointerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= doublePointerCost) {
			sfx5.play();
			clicks = clicks - doublePointerCost;
			doublePointersOwned++;
			cps = cps + doublePointerCPS;
			doublePointerCPSWorth = doublePointerCPSWorth + doublePointerCPS;
			if (buff == "cpsDouble") cps = cps + (doublePointerCPS * 2);
			doublePointerCPS = doublePointerCPS + Math.round(doublePointersOwned * 5 + (0.6 * cps));
			doublePointerCost = doublePointerCost + Math.round(doublePointersOwned + (125 * cps) + doublePointersOwned * 10 + (Math.floor(Math.random() * 1000000) + 500000));
			clickValue = clickValue + Math.round(doublePointersOwned * 3 + 0.12 * cps);
			totalClickHelpers++;
		}
	});
	upgradeButton.addEventListener("click", function () {
		upgradeShopOpen = true;
		sfx.play();
		shopPanel.style.display = "none";
		upgradeShopPanel.style.display = "block";
	});
	upgradeRTS.addEventListener("click", function () {
		upgradeShopOpen = false;
		sfx.play();
		shopPanel.style.display = "block";
		upgradeShopPanel.style.display = "none";
	});
	cursorBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= cursorCost) {
			sfx5.play();
			clicks = clicks - cursorCost;
			cursorOwned = true;
			cps = cps + Math.round(cps * cursorCPS);
			if (buff == "cpsDouble") cps = cps + Math.round(cps * (cursorCPS * 2));
			cursorCost = "Owned.";
			clickValue = clickValue + Math.round(0.07 * cps);
			totalClickHelpers++;
		}
	});
	superCursorBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= superCursorCost) {
			sfx5.play();
			clicks = clicks - superCursorCost;
			superCursorOwned = true;
			cps = cps + Math.round(cps * superCursorCPS);
			if (buff == "cpsDouble") cps = cps + Math.round(cps * (superCursorCPS * 2));
			superCursorCost = "Owned.";
			clickValue = clickValue + Math.round(0.12 * cps);
			totalClickHelpers++;
		}
	});
	employeeBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= employeeCost) {
			sfx5.play();
			clicks = clicks - employeeCost;
			employeesOwned++;
			cps = cps + Math.round(cps * employeeCPS);
			if (buff == "cpsDouble") cps = cps + Math.round(cps * (employeeCPS * 2));
			employeeCost = employeeCost + (employeesOwned * employeeCost);
			employeeCPS = employeeCPS * 2;
			totalClickHelpers++;
		}
	});
	godFingerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= godFingerCost) {
			sfx5.play();
			clicks = clicks - godFingerCost;
			godFingerOwned = true;
			clickValue = clickValue + Math.round(godFingerCV * clickValue);
			if (buff == "cv777%CPS") clickValue = clickValue + Math.round((godFingerCV * clickValue) * 7.77 * cps);
			godFingerCost = "Owned.";
			totalClickHelpers++;
		}
	})
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
			var dmkInput = atob(debugKeyInput.value);
		} catch (error) {
			console.warn("Debug Access Key input is not encoded. Using raw input as value.");
			debugConsole = debugConsole + "WARN: Debug access key input is not encoded. Using raw input as value." + "\n";
			dmkInput = debugKeyInput.value;
		}
		if (dmkInput == generatedKey) {
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
		clickerInfo.style.left = left + 'px';
		clickerInfo.style.top = top + 'px';
		superClickerInfo.style.top = top + 'px';
		superClickerInfo.style.left = left + 'px';
		doublePointerInfo.style.left = left + 'px';
		doublePointerInfo.style.top = top + 'px';
		achievementsLabel.style.left = left + 'px';
		achievementsLabel.style.top = top + 'px';
		settingsLabel.style.left = left + 'px';
		settingsLabel.style.top = top + 'px';
	})
	achievementsButton.addEventListener("click", function () {
		sfx.play();
		game.style.display = "none";
		achievementsPanel.style.display = "block";
		achNameStr.textContent = achStrs[0];
		achDescStr.textContent = achDescs[0];
		achUnlockStr.textContent = "Unlocked: " + achArr[0];
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
		achUnlockStr.textContent = "Unlocked: " + achArr[0];
	});
	aGoodStart.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[1];
		achDescStr.textContent = achDescs[1];
		achUnlockStr.textContent = "Unlocked: " + achArr[1];
	});
	gettingThere.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[2];
		achDescStr.textContent = achDescs[2];
		achUnlockStr.textContent = "Unlocked: " + achArr[2];
	});
	millionare.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[3];
		achDescStr.textContent = achDescs[3];
		achUnlockStr.textContent = "Unlocked: " + achArr[3];
	});
	coinPool.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[4];
		achDescStr.textContent = achDescs[4];
		achUnlockStr.textContent = "Unlocked: " + achArr[4];
	});
	abundance.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[5];
		achDescStr.textContent = achDescs[5];
		achUnlockStr.textContent = "Unlocked: " + achArr[5];
	});
	billionare.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[6];
		achDescStr.textContent = achDescs[6];
		achUnlockStr.textContent = "Unlocked: " + achArr[6];
	});
	excess.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[7];
		achDescStr.textContent = achDescs[7];
		achUnlockStr.textContent = "Unlocked: " + achArr[7];
	});
	planetOfClicks.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[8];
		achDescStr.textContent = achDescs[8];
		achUnlockStr.textCOntent = "Unlocked: " + achArr[8];
	});
	trillionare.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[9];
		achDescStr.textContent = achDescs[9];
		achUnlockStr.textContent = "Unlocked: " + achArr[9];
	});
	pocketDimension.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[10];
		achDescStr.textContent = achDescs[10];
		achUnlockStr.textContent = "Unlocked: " + achArr[10];
	});
	farTooMany.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[11];
		achDescStr.textContent = achDescs[11];
		achUnlockStr.textContent = "Unlocked: " + achArr[11];
	});
	quadrillionare.addEventListener("click", function () {
		sfx.play();
		achNameStr.textContent = achStrs[12];
		achDescStr.textContent = achDescs[12];
		achUnlockStr.textContent = "Unlocked: " + achArr[12];
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
		if (volumeInput.value >= 0 && volumeInput.value <= 100) {
			volume = volumeInput.value / 100;
			sfx.volume = volume;
			sfx2.volume = volume;
			sfx3.volume = volume;
			sfx4.volume = volume;
		} else volumeInput.value = "";
	});
	document.addEventListener("click", function () {
		if (debugAutoplay) sfx.volume = volume;
	})
	//Function intervals
	setInterval(timedLabelCount, 1); //This function will be removed in the future.
	setInterval(autoplay, 25);
	setInterval(rgChange, 25);
	setInterval(updateScreen, 100);
	setInterval(cpsClick, 250);
	setInterval(buffRNGCalc, 1000);
	setInterval(timeIncrease, 1000);
	setInterval(function () {
		if (debugAutoplay && screenSwitch && gameStarted) {
			upgradeButton.click();
			screenSwitch = false;
		} else if (debugAutoplay && !screenSwitch && gameStarted) {
			upgradeRTS.click();
			screenSwitch = true;
		}
	}, 5000);
	setInterval(function () {
		manualSave = false;
		saveGame();
	}, 60000);
	setInterval(logDNPError, 300000);
}
