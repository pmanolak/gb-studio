const id = "PM_EVENT_PLATPLUS_STATE_SCRIPT";
const groups = ["Platformer+"];
const name = "Attach a Script to A Platformer+ State";

const fields = [
  {
    key: "state",
    label: "Select Player State",
    type: "select",
    defaultValue: "0",
    options: [
      ["fallStart", "Start Falling"],
      ["fallEnd", "End Falling"],
      ["groundStart", "Start Grounded"],
      ["groundEnd", "End Grounded"],
      ["jumpStart", "Start Jumping"],
      ["jumpEnd", "End Jumping"],
      ["dashStart", "Start Dashing"],
      ["dashEnd", "End Dashing"],
      ["ladderStart", "Start Climbing Ladder"],
      ["ladderEnd", "End Climbing Ladder"],
      ["wallStart", "Start Wall Slide"],
      ["wallEnd", "End Wall Slide"],
      ["knockbackStart", "Start Knockback State"],
      ["knockbackEnd", "End Knockback State"],
      ["blankStart", "Start Blank State"],
      ["blankEnd", "End Blank State"],
    ],
  },
  {
    key: "__scriptTabs",
    type: "tabs",
    defaultValue: "scriptinput",
    values: {
      scriptinput: "On State",
    },
  },
  {
    key: "script",
    label: "State Script",
    description: "State Script",
    type: "events",
    allowedContexts: ["global", "entity"],
    conditions: [
      {
        key: "__scriptTabs",
        in: [undefined, "scriptinput"],
      },
    ],
  },
];

const valuesMap = {
  fallStart: "PLATFORM_FALL_INIT",
  fallEnd: "PLATFORM_FALL_END",
  groundStart: "PLATFORM_GROUND_INIT",
  groundEnd: "PLATFORM_GROUND_END",
  jumpStart: "PLATFORM_JUMP_INIT",
  jumpEnd: "PLATFORM_JUMP_END",
  dashStart: "PLATFORM_DASH_INIT",
  dashEnd: "PLATFORM_DASH_END",
  ladderStart: "PLATFORM_LADDER_INIT",
  ladderEnd: "PLATFORM_LADDER_END",
  wallStart: "PLATFORM_WALL_INIT",
  wallEnd: "PLATFORM_WALL_END",
  knockbackStart: "PLATFORM_KNOCKBACK_INIT",
  knockbackEnd: "PLATFORM_KNOCKBACK_END",
  blankStart: "PLATFORM_BLANK_INIT",
  blankEnd: "PLATFORM_BLANK_END",
};

const compile = (input, helpers) => {
  const { appendRaw, _compileSubScript, _addComment, vm_call_native, event } =
    helpers;
  const ScriptRef = _compileSubScript(
    "state",
    input.script,
    "test_symbol" + input.state
  );
  const callbackLabel = valuesMap[input.state] ?? valuesMap.fallStart;
  const bank = `___bank_${ScriptRef}`;
  const ptr = `_${ScriptRef}`;

  _addComment("Set Platformer Script");
  appendRaw(`VM_PUSH_CONST ${callbackLabel}`);
  appendRaw(`VM_PUSH_CONST ${bank}`);
  appendRaw(`VM_PUSH_CONST ${ptr}`);
  appendRaw(`VM_CALL_NATIVE b_vm_state_script_attach, _vm_state_script_attach`);
  appendRaw(`VM_POP 3`);
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  allowedBeforeInitFade: true,
};
