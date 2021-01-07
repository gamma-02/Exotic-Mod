const wandura = extend(Planet, "wandura", Planets.sun, 2.5, 1.4, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 1,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.02,
  atmosphereRadOut: 0.3
});
wandura.meshLoader = () => extend(HexMesh, wandura, 7.6, {});
