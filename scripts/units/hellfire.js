const hellfire = extendContent(UnitType, "hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {
  remove(){
    print("Cease.");
}});
hellfire.abilities.add(new ForceFieldAbility(300, 1450, 2546330, 25));
