//////////////////////////////
//        Characters        //
//////////////////////////////

export class Ability {
  name: string
  damage: Function
}

export class Character {
  name: string
  img: string
  baseDamage: number
  baseHealth: number
  damagePerLevel: number
  healthPerLevel: number
  baseAttackSpeed: number
  abilities: Ability[]

  constructor() {
    this.abilities = [];
  }
}

//////////////
// Commando //
//////////////
const commando = new Character();
commando.name = "Commando";
commando.img = "assets/icons/characters/commando.png";
commando.baseDamage = 12;
commando.damagePerLevel = 2.4;
commando.baseHealth = 110;
commando.healthPerLevel = 33;
commando.baseAttackSpeed = 1;

const doubleTap = new Ability();
doubleTap.name = "Double Tap";
doubleTap.damage = (base: number): number => {
  return (base * .9) * 2;
};
commando.abilities.push(doubleTap);

const phaseRound = new Ability();
phaseRound.name = "Phase Round";
phaseRound.damage = (base: number): number => {
  return base * 2.3;
};
commando.abilities.push(phaseRound);

const tacticalDive = new Ability();
tacticalDive.name = "Tactical Dive";
tacticalDive.damage = (base: number): number => {
  return 0;
};
commando.abilities.push(tacticalDive);

const suppressiveFire = new Ability();
suppressiveFire.name = "Suppressive Fire";
suppressiveFire.damage = (base: number): number => {
  return base * 6;
};
commando.abilities.push(suppressiveFire);

///////////
// MUL-T //
///////////
const mult = new Character();
mult.name = "MUL-T";
mult.img = "assets/icons/characters/mult.png";
mult.baseDamage = 11;
mult.damagePerLevel = 2.2;
mult.baseHealth = 200;
mult.healthPerLevel = 60
mult.baseAttackSpeed = 1;

const multifunctional = new Ability();
multifunctional.name = "Multifunctional";
multifunctional.damage = (base: number): number => {
  return 0;
};
mult.abilities.push(multifunctional);

const autoNailgun = new Ability();
autoNailgun.name = "Auto-Nailgun";
autoNailgun.damage = (base: number): number => {
  return base * .6;
};
mult.abilities.push(autoNailgun);

const rebarPuncher = new Ability();
rebarPuncher.name = "Rebar Puncher";
rebarPuncher.damage = (base: number): number => {
  return base * 6;
};
mult.abilities.push(rebarPuncher);

const blastCanister = new Ability();
blastCanister.name = "Blast Canister";
blastCanister.damage = (base: number): number => {
  return base * 2.2;
};
mult.abilities.push(blastCanister);

const transportMode = new Ability();
transportMode.name = "Transport Mode";
transportMode.damage = (base: number): number => {
  return base * 2.5;
};
mult.abilities.push(transportMode);

const retool​​​ = new Ability();
retool​​​.name = "Retool​​​";
retool​​​.damage = (base: number): number => {
  return 0;
};
mult.abilities.push(retool​​​);

//////////////
// Huntress //
//////////////
const huntress = new Character();
huntress.name = "Huntress";
huntress.img = "assets/icons/characters/huntress.png";
huntress.baseDamage = 12;
huntress.damagePerLevel = 2.4;
huntress.baseHealth = 90;
huntress.healthPerLevel = 27;
huntress.baseAttackSpeed = 1;

const strafe = new Ability();
strafe.name = "Strafe";
strafe.damage = (base: number): number => {
  return base * 1.5;
};
huntress.abilities.push(strafe);

const laserGlaive = new Ability();
laserGlaive.name = "Laser Glaive";
laserGlaive.damage = (base: number): number => {
  return base * 2.5;
};
huntress.abilities.push(laserGlaive);

const blink = new Ability();
blink.name = "Blink";
blink.damage = (base: number): number => {
  return 0;
};
huntress.abilities.push(blink);

const arrowRain = new Ability();
arrowRain.name = "Arrow Rain";
arrowRain.damage = (base: number): number => {
  return base * 2.25;
};
huntress.abilities.push(arrowRain);

//////////////
// Engineer //
//////////////
const engineer = new Character();
engineer.name = "Engineer";
engineer.img = "assets/icons/characters/engineer.png";
engineer.baseDamage = 14;
engineer.damagePerLevel = 2.8;
engineer.baseHealth = 130;
engineer.healthPerLevel = 39;
engineer.baseAttackSpeed = 1;

const bouncingGrenades = new Ability();
bouncingGrenades.name = "Bouncing Grenades";
bouncingGrenades.damage = (base: number): number => {
  return base;
};
engineer.abilities.push(bouncingGrenades);

const pressureMines = new Ability();
pressureMines.name = "Pressure Mines";
pressureMines.damage = (base: number): number => {
  return base * 3;
};
engineer.abilities.push(pressureMines);

const bubbleShield = new Ability();
bubbleShield.name = "Bubble Shield";
bubbleShield.damage = (base: number): number => {
  return 0;
};
engineer.abilities.push(bubbleShield);

const turret = new Ability();
turret.name = "TR12 Gauss Auto-Turret";
turret.damage = (base: number): number => {
  return base;
};
engineer.abilities.push(turret);

///////////////
// Artificer //
///////////////
const artificer = new Character();
artificer.name = "Artificer";
artificer.img = "assets/icons/characters/artificer.png";
artificer.baseDamage = 12;
artificer.damagePerLevel = 2.4;
artificer.baseHealth = 110;
artificer.healthPerLevel = 33;
artificer.baseAttackSpeed = 1;

const flameBolt = new Ability();
flameBolt.name = "Flame Bolt";
flameBolt.damage = (base: number): number => {
  return base * 2;
};
artificer.abilities.push(flameBolt);

const nanoBomb = new Ability();
nanoBomb.name = "Charged Nano-Bomb";
nanoBomb.damage = (base: number): number => {
  return base * 4;
};
artificer.abilities.push(nanoBomb);

const snapfreeze = new Ability();
snapfreeze.name = "Snapfreeze";
snapfreeze.damage = (base: number): number => {
  return base;
};
artificer.abilities.push(snapfreeze);

const flamethrower = new Ability();
flamethrower.name = "Flamethrower";
flamethrower.damage = (base: number): number => {
  return base * 17;
};
artificer.abilities.push(flamethrower);

///////////////
// Mercenary //
///////////////
const mercenary = new Character();
mercenary.name = "Mercenary";
mercenary.img = "assets/icons/characters/mercenary.png";
mercenary.baseDamage = 12;
mercenary.damagePerLevel = 2.4;
mercenary.baseHealth = 140;
mercenary.healthPerLevel = 42;
mercenary.baseAttackSpeed = 1;

const cyberneticEnhancements = new Ability();
cyberneticEnhancements.name = "Cybernetic Enhancements";
cyberneticEnhancements.damage = (base: number): number => {
  return 0;
};
mercenary.abilities.push(cyberneticEnhancements);

const laserSword = new Ability();
laserSword.name = "Laser Sword";
laserSword.damage = (base: number): number => {
  return base * 1.3;
};
mercenary.abilities.push(laserSword);

const whirlwind = new Ability();
whirlwind.name = "Whirlwind";
whirlwind.damage = (base: number): number => {
  return (base * 2) * 2;
};
mercenary.abilities.push(whirlwind);

const blindingAssault = new Ability();
blindingAssault.name = "Blinding Assault";
blindingAssault.damage = (base: number): number => {
  return base * 2;
};
mercenary.abilities.push(blindingAssault);

const eviscerate = new Ability();
eviscerate.name = "Eviscerate";
eviscerate.damage = (base: number): number => {
  return base * 1.1;
};
mercenary.abilities.push(eviscerate);

export const characters: Character[] = [
  commando,
  mult,
  huntress,
  engineer,
  artificer,
  mercenary
];

////////////////////////
//        Items       //
////////////////////////

export enum Effect {
  AttackSpeed,
  MoveSpeed,
  CritChance
}

export class Item {
  name: string
  effect: Effect
  value: number
  img: string
  count: number
}

///////////////////////
// Soldier's Syringe //
///////////////////////
const syringe = new Item();
syringe.name = "Soldier's Syringe";
syringe.effect = Effect.AttackSpeed;
syringe.value = 15;
syringe.img = "assets/icons/items/icon.png";

//////////////////////////
// Lens-Maker's Glasses //
//////////////////////////
const glasses = new Item();
glasses.name = "Lens-Maker's Glasses";
glasses.effect = Effect.CritChance;
glasses.value = 10;
glasses.img = "assets/icons/items/icon.png";

//////////////////////
// Paul's Goat Hoof //
//////////////////////
const hoof = new Item();
hoof.name = "Paul's Goat Hoof";
hoof.effect = Effect.MoveSpeed;
hoof.value = 14;
hoof.img = "assets/icons/items/icon.png";

export const items: Item[] = [
  syringe,
  glasses,
  hoof
];