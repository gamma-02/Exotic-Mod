var magnetizedSlag = Vars.content.getByName(ContentType.block, "exotic-mod-deep-mag-slag");
var basaltMagnetizedSlag = Vars.content.getByName(ContentType.block, "exotic-mod-basalt-mag-slag");

const wandura = extend(Planet, "wandura", Planets.sun, 4, 1, {
  localizedName: "Wandura",
  bloom: true,
  radius: 1,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("6c180f"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.5,
  startSector: 15,
  generator: extend(SerpuloPlanetGenerator, {
    rid: extend(Packages.arc.util.noise.RidgedPerlin, 1, 2, {}),
    scl: 5,
    waterOffset: 0.07,
    arr: [
      [magnetizedSlag, basaltMagnetizedSlag, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, basaltMagnetizedSlag, Blocks.stone, Blocks.stone],
      [magnetizedSlag, basaltMagnetizedSlag, Blocks.basalt, Blocks.basalt, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, basaltMagnetizedSlag, Blocks.stone, Blocks.stone, Blocks.stone],
      [magnetizedSlag, basaltMagnetizedSlag, Blocks.basalt, Blocks.darksand, Blocks.charr, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, basaltMagnetizedSlag, Blocks.stone, Blocks.stone, Blocks.stone],
      [magnetizedSlag, basaltMagnetizedSlag, Blocks.darksand, Blocks.charr, Blocks.charr, Blocks.charr, Blocks.darksand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.sand, Blocks.grass, Blocks.grass],
      [magnetizedSlag, magnetizedSlag, basaltMagnetizedSlag, Blocks.darksand, Blocks.charr, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass],
      [magnetizedSlag, magnetizedSlag, basaltMagnetizedSlag, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.sand, Blocks.grass],
      [magnetizedSlag, basaltMagnetizedSlag, Blocks.darksand, Blocks.darksand, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.grass, Blocks.sand, Blocks.grass],
      [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.grass, Blocks.basalt, Blocks.slag, Blocks.basalt, Blocks.grass, Blocks.sand, Blocks.grass, Blocks.grass],
      [basaltMagnetizedSlag, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.basalt, Blocks.basalt, Blocks.grass, Blocks.sand, Blocks.grass, Blocks.grass],
      [basaltMagnetizedSlag, Blocks.basalt, Blocks.basalt, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.grass], 
      [Blocks.taintedWater, Blocks.darksandTaintedWater, Blocks.basalt, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],
      [Blocks.darksandTaintedWater, Blocks.darksandTaintedWater, Blocks.basalt, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass],
      [basaltMagnetizedSlag, Blocks.basalt, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass]
    ],
    dec: ObjectMap.of(),
    tar: ObjectMap.of(),
    water: 2 / 13
  })
});
wandura.meshLoader = () => extend(HexMesh, Planets.sun, 8, {});
var lastStand = extend(SectorPreset, "last-stand", wandura, 69, {
  localizedName: "Last Stand",
  difficulty: 25,
  captureWave: 150,
  alwaysUnlocked: true,
});
