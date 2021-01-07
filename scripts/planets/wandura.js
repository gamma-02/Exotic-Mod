const wandura = extend(Planet, "wandura", Planets.sun, 45, 1.8, {
  localizedName: "Wandura",
  generator: new SerpuloPlanetGenerator(),
  bloom: true,
  radius: 5,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000")
});
wandura.meshLoader = () => extend(HexMesh, wandura, 0.8, {});
