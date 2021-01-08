const wandura = extend(Planet, "wandura", Planets.sun, 3, 1, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.5,
  startSector: 15
});
wandura.meshLoader = () => extend(HexMesh, wandura, 8.4, {});

var lastStand = extend(SectorPreset, "last-stand", Planets.wandura, 69, {
  localizedName: "Last Stand",
  difficulty: 25,
  captureWave: 150,
  alwaysUnlocked: true,
});
