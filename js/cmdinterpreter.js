var cmd = [];
var arg = [];
const man = '\nCoin Clicker Debug Console\n\nclear - Clears the console\necho - Outputs the given arguments\nhelp - Displays this manual\ndebAP - Toggles debug autoplay.\nexec - Executes JavaScript code.\n';
const cmdHist = [];
var cmdHistInx = 1;

cmdForm.addEventListener("submit", function (event) {
  event.preventDefault();
  commandInterpret();
});

function commandInterpret() {
  commandAssemble();
  if (cmd == 'clear') debugConsole = 'Console cleared.\n';
  else if (cmd == 'echo') debugConsole += `${arg}\n`;
  else if (cmd == 'help') debugConsole += man;
  else if (cmd == 'debAP') {
    debugAutoplay = !debugAutoplay;
    readyToSave = false;
  }
  else if (cmd == 'exec') {
    try {
      eval(arg);
      debugConsole += 'Command executed.\n';
    } catch (error) {
      debugConsole += `${error}\n`;
    }
  }
  else debugConsole += "Unknown command. Run 'help' for more information.\n";
  if (arg.length > 2) cmdHist.push(`${cmd} ${arg}`);
  else cmdHist.push(cmd);
  cmdHistInx = cmdHist.length;
  cmd = [];
  arg = [];
  commandInput.value = "";
}

function commandAssemble() {
  for (let i = 0; i < commandInput.value.length; i++) {
    if (i < 5) cmd.push(commandInput.value[i]);
    else arg.push(commandInput.value[i]);
  }
  cmd = cmd.toString();
  cmd = cmd.replace(/\,/g, '');
  cmd = cmd.replace(/\s/g, '');
  arg = arg.toString();
  arg = arg.replace(/\,/g, '');
}

document.addEventListener("keydown", function (event) {
  if (event.key == 'ArrowUp') {
    if (cmdHist[cmdHistInx - 1] != undefined) cmdHistInx--;
    commandInput.value = cmdHist[cmdHistInx];
    if (cmdHist[cmdHistInx] == undefined) {
      commandInput.value = '';
    }
  } else if (event.key == 'ArrowDown') {
    if (cmdHist[cmdHistInx + 1] != undefined) cmdHistInx++;
    commandInput.value = cmdHist[cmdHistInx];
    if (cmdHist[cmdHistInx] == undefined) {
      commandInput.value = '';
    }
  }
  console.log(cmdHistInx);
});