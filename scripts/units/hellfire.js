const hellfire = extendContent(UnitType, "hellfire", {});
hellfire.constructor = () => extend(UnitEntity, {});
hellfire.abilities.add(new ForceFieldAbility(300, 0.5, 2546330, 360));
