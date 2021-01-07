const hellfire = extendContent(UnitType, "hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {
  destroy(){
    print("Cease.");
  }
  remove(){
    if(this.dead) this.super$remove();
}});
hellfire.abilities.add(new ForceFieldAbility(300, 1450, 2546330, 25));
