const id = "PM_EVENT_SET_PP_STATE";
const groups = ["Platformer+", "Player Fields"];
const name = "Set Platformer+ State";

const fields = [
  {
    key: "state",
    label: "Select Player State to Set (this feature is still experimental)",
    type: "select",
    defaultValue: "0",
    options: [
      ["fall", "Falling"],
      ["ground", "Grounded"],
      ["jump", "Jumping"],
      ["dash", "Dashing"],
      ["ladder", "On a Ladder"],
      ["wall", "On a Wall"],
      ["knockback", "Knockback"],
      ["blank", "Blank"],
    ],
  },
  {
    key: "field",
    defaultValue: "que_state",
  },
];

const valuesMap = {
  fall: "PLATFORM_FALL_STATE",
  ground: "PLATFORM_GROUND_STATE",
  jump: "PLATFORM_JUMP_STATE",
  dash: "PLATFORM_DASH_STATE",
  ladder: "PLATFORM_LADDER_STATE",
  wall: "PLATFORM_WALL_STATE",
  knockback: "PLATFORM_KNOCKBACK_STATE",
  blank: "PLATFORM_BLANK_STATE",
};

const compile = (input, helpers) => {
  const { _addComment, _addNL, _setConstMemInt16, _setMemInt16ToVariable } =
    helpers;
  _addComment("Set Platformer Plus State");
  const stateValue = valuesMap[input.state] ?? valuesMap.fall;
  _setConstMemInt16(input.field, stateValue);
  _addNL();
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  allowedBeforeInitFade: true,
};
