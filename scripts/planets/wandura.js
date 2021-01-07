const wandura = extend(Planet, "wandura", Planets.sun, 4, 2.5, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 3,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  atmosphereRadIn: 4.4,
  atmosphereRadOut: 8.6
});
wandura.meshLoader = () => extend(HexMesh, wandura, 8.5, {});
