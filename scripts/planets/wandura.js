const wandura = extend(Planet, "wandura", Planets.sun, 45, 1.8, {
  generator: new SerpuloPlanetGenerator();
  bloom: true,
  radius: 5,
  accessible: true, 
  hasAtmosphere: true,
  atmosphereColor: Color.valueOf("ff0000"),
  localizedName: "Wandura"
});
wandura.meshLoader = () => extend(HexMesh, wandura, 0.8, {});
