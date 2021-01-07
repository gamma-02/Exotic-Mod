const wandura = extend(Planet, "wandura", Planets.sun, 4, 1.8, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 15,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 0.01,
  atmosphereRadOut: 0.5
});
wandura.meshLoader = () => extend(HexMesh, wandura, 3, {});
