const hellfire = extendContent(UnitType, "hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {});
hellfire.abilities.add(new ForceFieldAbility(300, 1450, 2546330, 25));
