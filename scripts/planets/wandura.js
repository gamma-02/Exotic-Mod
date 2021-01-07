const wandura = extend(Planet, "wandura", Planets.sun, 2.8, 1, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.5
});
wandura.meshLoader = () => extend(HexMesh, wandura, 7.6, {});
