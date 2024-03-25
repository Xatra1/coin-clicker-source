var cmd = [];
var arg = [];
const man = '\nCoin Clicker Debug Console\n\nclear - Clears the console\necho - Outputs the given arguments\nhelp - Displays this manual\nexec - Executes JavaScript code.\neval - An alias for exec, has the same function.\npizza - Tells you how many $30 pizzas you could buy with your current amount of coins.\nrmsg - Displays a random message. You can also log a specific message by passing an argument with a value of 1-25, or pass "all" to log all of them.\nTyping any command into the console that isn\'t recognized will have the same effect as using the \'exec\' or \'eval\' commands.\n\n';
const cmdHist = [];
var cmdHistInx = 1;
function commandInterpret() {
  commandAssemble();
  if (cmd == 'clear') debugConsole = 'Console cleared.\n'; else if (cmd == 'echo') debugConsole += `${arg}\n`; else if (cmd == 'help') debugConsole += man; else if (cmd == 'exec' || cmd == 'eval') { try { eval(arg); debugConsole += 'Command executed.\n'; } catch (error) { debugConsole += `${error}\n`; } } else if (cmd == 'pizza') debugConsole += `You could buy ${(Math.floor(stats.Clicks / 30)).toLocaleString()} $30 pizzas with your current amount of coins.\n`; else if (cmd == 'rmsg') randomMsg(arg); else try { eval(commandInput.value); } catch (error) { debugConsole += `${error}\n`; }
  cmdHist.push(commandInput.value);
  cmdHistInx = cmdHist.length;
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
cmdForm.addEventListener("submit", function (event) { event.preventDefault(); commandInterpret(); });
document.addEventListener("keydown", function (event) { if (event.key == 'ArrowUp') { if (cmdHist[cmdHistInx - 1] != undefined) cmdHistInx--; commandInput.value = cmdHist[cmdHistInx]; if (cmdHist[cmdHistInx] == undefined) commandInput.value = ''; } else if (event.key == 'ArrowDown') { if (cmdHist[cmdHistInx + 1] != undefined) cmdHistInx++; commandInput.value = cmdHist[cmdHistInx]; if (cmdHist[cmdHistInx] == undefined) commandInput.value = ''; } });