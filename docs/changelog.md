# Build 4.5ab
- Added the Clicker Fusion, an upgrade which requires 150 clickers to unlock and obtain, and will multiply the CPS of all of your current clickers by 150%.
- Fixed several bugs when buying items from the shop while buffs were active as well (for real this time) and a bug with your CPS retaining its doubled status when saving and reloading. (This bug also occurred with the click value buff.)
- Modified some of the shop prices to make them much more early-game friendly.
- *Finally* removed the coin's background.
- The item unlocked string no longer displays achievement unlocks after initially loading data.
- Greatly increased the speed at which values update.
- Added a feature that automatically buys shop items whenever you have enough clicks to buy anything.
- Fixed audio.
- Added a loading screen.
- The info labels for shop items are now aligned with the shop panel's border rather than the position of the cursor, making them easier to read. 
- The achievements and settings button labels are now centered.
- Removed the source code note at the top of the title screen.
- The info labels for regular shop items now display "You have no [item]." if that item is worth no CpS.
- Decreased the amount of clickers required to unlock the double pointer from 75 to 50.
- Made saving work more consistently. Before, clicking the save button did not always work thanks to some variables being at the wrong values, even when the game was ready to save.
- Changed the name of the secret achievement.
- The title of the page now dynamically changes to match your click count, or will say "A buff is active!" if one occurs.
- The game will no longer automatically create a save if one does not exist.
- The game will now remember that you entered a correct key and bypass the key input screen when accessing the debug console output.
- Your raw CpS and raw click value are now displayed in the stats panel.
- Reworked the way saving works to allow for price changes to take effect on items you have not yet unlocked in future updates.
- The debug console can now interpret a few commands, run 'help' for more info. (Currently does not display properly on 1366x768, this will be fixed in the future.)
## Notes and Extra Changes: 
- Your save WILL BE ERASED when opening this version of the game due to format inconsistencies.
- I am currently working on making namespaces for the game's variables. Expect things to break in the next few releases!
- You can no longer save when a buff is occurring due to how the shop now handles buffs when calculating CpS values and prices after buying items.
- Everything in the main code is no longer one big function, making all variables global. Much easier to debug!
- Removed a reference to update 5 that was being logged in the console.
- Your click value will no longer get updated during a double CpS buff. It will update when the buff ends. (This is a side effect of the buff fixes for the shop)
- Autobuy cannot buy the Clicker Fusion.  
  
And with that, Update 6 is now complete.
Yeah, I know I didn't add a lot of the stuff I had originally planned, but I decided to significantly polish the game before doing that. The *true* content update will happen soon. 
Meanwhile, in Update 7, otherwise known as the "Animation" update, I plan to add the following:
- Animations for things like the coin and shop items.
- Lots of bug fixes and balancing.
- And maybe some other things.

# Build 5.0anb
- Fixed a bug that allowed you to open the debug menu when the settings or achievement panels were open, causing overlap.
- Fixed the issue with the debug console not displaying correctly on 1366x768 displays that was present in the last release.
- New animations with new sound effects! (You can skip the intro animation with the space bar.)
- The game now automatically saves just before reloading the page.
- You can now enable debug mode (Skips the title screen and unlocks all shop items by default) by pressing Ctrl+Alt+F on the title screen, enable debug autoplay by pressing Ctrl+Alt+A on the title screen, and enable both with Ctrl+Alt+C
- Added the background music from Cookie Clicker (Click - C418). It only plays after unlocking the 'Journey Begins' achievement, and it's volume will automatically decrease to a third of the volume you have set in settings when navigating away from the page.
- The save keybind has changed from S to Ctrl+S.
- Keybinds now also accept input from capital letters as well as lowercase. (Just in case caps lock is on)
- Fixed a bug where the playtime counter wouldn't convert the time to hours until it reached 120 minutes.
- Added a new ambient background that appears once you unlock the 'Millionare' achievement, which will appear on the title screen as well. It will also increase in frequency and even have the coin particles added to it as well, depending on how many achievements you have.
- The game should now work on multiple resolutions!
- The wipe save button was moved to the Settings screen.
- Fixed a few bugs with Clicker Fusion.
- Shifted the positioning of shop items to make it more consistent between the two panels.
- Fixed a bug that caused the bonus click buff to never occur.
- This changelog is now included with the game.
- The game now has a favicon.
- The save info label that displays when you hover over the save button now alternates between it's default text and the time at which you last saved the game.
- The browser console logs now have colors!
- Achievements that pulsed red now pulse green.
- Added a new hidden achievement...
- The game's background gradient is now customizable.
- Added an option to change the graphics mode, which will disable the game's particle effects and decrease the speed that the game's values update.
- Reworked the way the click value buff works so that it will not trigger if the tab is inactive or if the coin is not visible.
- More shop rebalancing, to make the game far quicker. Double Pointer now requires 10 Super Clickers to unlock.
- The title of the page will now change to 'Title updates paused.' if the tab is inactive.
- The game now has an FPS tracker that can be toggled on and off with Shift+F
- Employees now generate offline CpS. Every second you're offline, you will get +1% of your CpS for each employee you have.
- 'Clicks' are now referred to as 'Coins'.
- The game now reports the browser version as well as a more accurate browser name, if supported.
- Strings which have quickly updating values (coins, CpS, etc) now have a slight transition when increasing and lowering values.
- Your playtime does not start to increase until you click the coin for the first time.
- The CpS and click value buffs now have randomized lengths. The CpS buff can range from 15 to 60 seconds and the click value buff can range from 5 to 20.
- You can now press the spacebar to 'click' the coin.
- You can now press the A, S, and U keys to toggle the Achievements, Settings, and Upgrade Shop panels, respectively, as well as B, which enables autobuy.
- Autobuy will now purchase the item that costs the least first, rather than going down the list of shop items.
- The game is now hosted with [Surge!](https://coin-clicker.surge.sh)
- There are now links to the game's GitHub and Surge pages in the bottom right of the title screen.
- The game's code is now a bit smaller in line count, meaning that the game should load quicker! (The game was loading almost instantly anyway but shhh...)
- The game's font is now Courier Regular instead of Courier New.

# Build 5.1anb
This release fixes a few bugs from the last version and adds some additional features, as well as clarifying on the number shortening that was not mentioned previously.  
- The game now has number shortening! For example, 1 quadrillion will simply be '1.000 quadrillion' rather than 1.000e+15. This is supported up to 999 duotrigintillion (9.99e+101), where the game will then resort back to exponents. This is soon planned to be a toggle.
- Re-enabled autosaving.
- The game will now use commas for the playtime count if it's greater than 1000 hours.
- Your debug console command history is now included in your save data.
- The background particles now appear on all screens.
- Fixed a bug with double pointer values not displaying.
- Slightly reworked the title screen animation.
- Added partial gamepad support.
## Gamepad Controls
Note that all controllers should be supported, the PlayStation button names are just an example.  
If your gamepad is detected, it's name should appear near the bottom of the screen.
- Cross to start the game.  
- Circle/Cross (with game started): Clicks the coin.  
- Square: Toggle upgrade shop.  
- Triangle: Save the game.  
- Share: Toggle achievements panel. You can then use the left and right dpad buttons to navigate through the list of achievements.  
- Options: Toggle settings panel.  
- L1: Buys the clicker. If the upgrade shop is open, the cursor will be bought instead.  
- R1: Buys the super clicker. If the upgrade shop is open, the super cursor will be bought instead.  
- L2: Buys the double pointer. If the upgrade shop is open, the employee will be bought instead.  
- R2: Buys the god finger.  
- L3: Toggles autobuy.  
- R3: Reloads the game.  
- Dpad Up: Wipes your save. You will need to refresh manually using R3 to confirm the save wipe, or you can save again with Triangle.  
- Dpad Left: Buys the clicker fusion.  
### Extras
- The game's stack trace is now included in the debug console whenever an error occurs.
- The changelog file has been modified so older releases have better formatting.
