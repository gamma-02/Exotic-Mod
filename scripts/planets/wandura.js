const WanduraPlanetGenerator = extend(SerpuloPlanetGenerator, {});

const wandura = extend(Planet, "wandura", Planets.sun, 45, 1.8, {
  localizedName: "Wandura",
  generator: new WanduraPlanetGenerator(),
  bloom: true,
  radius: 5,
  accessible: true, 
  hasAtmosphere: true
});
wandura.meshLoader = () => extend(HexMesh, wandura, 0.8, {});
