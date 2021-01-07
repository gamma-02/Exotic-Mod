const hellfire = extendContent(UnitType, "hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {
  killed(){
    if(this.health <= 0) this.super$killed();
    else this.dead = false;
  },
  destroy(){
    if(this.dead) this.super$destroy();
  },
  remove(){
    if(this.dead) this.super$remove();
}});
hellfire.abilities.add(new ForceFieldAbility(300, 1450, 2546330, 25));
