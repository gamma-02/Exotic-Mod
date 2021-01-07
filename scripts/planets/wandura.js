const wandura = extend(Planet, "wandura", Planets.sun, 0.5, 0.5, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 5,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.01,
  atmosphereRadOut: 0.5
});
wandura.meshLoader = () => extend(HexMesh, wandura, 1, {});
