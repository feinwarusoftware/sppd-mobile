import cards from "./cards.temp.json";

// note, the base stats are upgrade 1
const getUpgradeStats = upgrade => {
  if (upgrade < 1 || upgrade > 70) {
    return {};
  }
  const stats = {};
  for (let k in currentCard) {
    if (k.startsWith("Power") === true && currentCard[k] !== null && currentCard[k] !==
      "") {
      stats[k] = currentCard[k];
    }
    // exceptions cos redlynx gay
    if (k === "ChargedPowerRadius") {
      stats["PowerRange"] = currentCard[k];
    }
  }
  stats.Health = parseInt(currentCard.Health);
  if (isNaN(stats.Health)) {
    return {};
  }
  stats.Damage = parseInt(currentCard.Damage);
  if (isNaN(stats.Damage)) {
    return {};
  }
  if (currentCard.Type === "Spell") {
    if (currentCard.Image === "SpellCockMagicCard") {
      stats["PowerTarget"] = 1;
    }
    return stats;
  }
  for (let i = 0; i < upgrade - 1; i++) {
    if (currentCard.TechTree2.Slots[i].id !== undefined) {
      stats.ability = true;
      continue;
    }
    if (currentCard.TechTree2.Slots[i].property === "MaxHealth") {
      stats.Health += currentCard.TechTree2.Slots[i].value;
    }
    if (currentCard.TechTree2.Slots[i].property === "Damage") {
      stats.Damage += currentCard.TechTree2.Slots[i].value;
    }
    if (currentCard.TechTree2.Slots[i].property.indexOf("Abs") !== -1) {
      const propertyAbs = currentCard.TechTree2.Slots[i].property;
      const property = propertyAbs.slice(0, propertyAbs.length - 3);
      if (stats[property] === undefined) {
        return {};
      } else {
        stats[property] += currentCard.TechTree2.Slots[i].value;
      }
    }
  }
  let levelModifier = 0;
  if (upgrade > 5) {
    levelModifier++;
  }
  if (upgrade > 15) {
    levelModifier++;
  }
  if (upgrade > 25) {
    levelModifier++;
  }
  if (upgrade > 40) {
    levelModifier++;
  }
  if (upgrade > 55) {
    levelModifier++;
  }
  for (let i = 0; i < levelModifier; i++) {
    for (let j = 0; j < currentCard.TechTree2.Evolve[i].Slots.length; j++) {
      if (currentCard.TechTree2.Evolve[i].Slots[j].property === "MaxHealth") {
        stats.Health += currentCard.TechTree2.Evolve[i].Slots[j].value;
      }
      if (currentCard.TechTree2.Evolve[i].Slots[j].property === "Damage") {
        stats.Damage += currentCard.TechTree2.Evolve[i].Slots[j].value;
      }
      if (currentCard.TechTree2.Evolve[i].Slots[j].property.indexOf("Abs") !== -1) {
        const propertyAbs = currentCard.TechTree2.Evolve[i].Slots[j].property;
        const property = propertyAbs.slice(0, propertyAbs.length - 3);
        if (stats[property] === undefined) {
          return {};
        } else {
          stats[property] += currentCard.TechTree2.Evolve[i].Slots[j].value;
        }
      }
    }
  }
  return stats;
}
const getLevelStats = level => {
  if (level < 1 || level > 7) {
    return {};
  }
  if (level === 1) {
    return getUpgradeStats(1);
  }
  let upgradeModifier = 0;
  if (level === 2) {
    upgradeModifier += 5;
  }
  if (level === 3) {
    upgradeModifier += 15;
  }
  if (level === 4) {
    upgradeModifier += 25;
  }
  if (level === 5) {
    upgradeModifier += 40;
  }
  if (level === 6) {
    upgradeModifier += 55;
  }
  if (level === 7) {
    upgradeModifier += 70;
  }
  const stats = getUpgradeStats(upgradeModifier);
  if (currentCard.Type === "Spell") {
    for (let i = 0; i < level - 1; i++) {
      for (let j = 0; j < currentCard.TechTree2.Evolve[i].Slots.length; j++) {
        if (currentCard.TechTree2.Evolve[i].Slots[j].property === "MaxHealth") {
          stats.Health += currentCard.TechTree2.Evolve[i].Slots[j].value;
        }
        if (currentCard.TechTree2.Evolve[i].Slots[j].property === "Damage") {
          stats.Damage += currentCard.TechTree2.Evolve[i].Slots[j].value;
        }
        if (currentCard.TechTree2.Evolve[i].Slots[j].property.indexOf("Abs") !== -1) {
          const propertyAbs = currentCard.TechTree2.Evolve[i].Slots[j].property;
          const property = propertyAbs.slice(0, propertyAbs.length - 3);
          if (stats[property] === undefined) {
            return {};
          } else {
            stats[property] += currentCard.TechTree2.Evolve[i].Slots[j].value;
          }
        }
      }
    }
  } else {
    const currentLevel = currentCard.TechTree2.Evolve[level - 2]
    for (let i = 0; i < currentLevel.Slots.length; i++) {
      if (currentLevel.Slots[i].property === "MaxHealth") {
        stats.Health += currentLevel.Slots[i].value;
      }
      if (currentLevel.Slots[i].property === "Damage") {
        stats.Damage += currentLevel.Slots[i].value;
      }
      if (currentLevel.Slots[i].property.indexOf("Abs") !== -1) {
        const propertyAbs = currentLevel.Slots[i].property;
        const property = propertyAbs.slice(0, propertyAbs.length - 3);
        if (stats[property] === undefined || property === "PowerTarget") {
          if (property === "PowerTarget") {
            stats[property] = level;
          } else {
            return {};
          }
        } else {
          stats[property] += currentLevel.Slots[i].value;
        }
      }
    }
  }
  return stats;
}

let a;

export default (state, action) => {
  a = 5;
  switch (action.type) {
    case "AUGMENT_SELECTED": {
        state = { ...state };
      }
  }
  return state;
};
