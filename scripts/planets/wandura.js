var exotic = Vars.content.getByName(ContentType.mod, "exotic-mod");
const planetGen = global.exotic.planetgen;
const wandura = extend(Planet, "wandura", Planets.sun, 4, 1, {
  localizedName: "Wandura",
  generator: planetGen.wandura,
  bloom: true,
  radius: 1,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.5
});
wandura.meshLoader = () => extend(HexMesh, wandura, 7.6, {});
