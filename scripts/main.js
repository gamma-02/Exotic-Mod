require("units/hellfire");
require("planets/wandura");
require("planets/planetGen");

var lastStand = extend(SectorPreset, "last-stand", Planets.serpulo, 69, {
  localizedName: "Last Stand",
  difficulty: 25,
  captureWave: 150,
  alwaysUnlocked: true,
  research: "groundZero",
});
