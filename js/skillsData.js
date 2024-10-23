// --- Guard Skill Tree ---
const guardSkillsData = [
  { name: 'Heavy Armor Mastery', prereq: null },
  { name: 'Advanced Guard', prereq: 'Heavy Armor Mastery' },
  { name: 'Physical Guard', prereq: 'Advanced Guard' },
  { name: 'Light Armor Mastery', prereq: null },
  { name: 'Advanced Evasion', prereq: 'Light Armor Mastery' },
  { name: 'Mirage Evasion', prereq: 'Advanced Evasion' },
];

// --- Knight Skill Tree ---
const knightSkillsData = [
  { name: 'Assault Attack', prereq: null },
  { name: 'Parry', prereq: 'Assault Attack' },
  { name: 'P. Defense', prereq: 'Parry' },
  { name: 'Fareth', prereq: 'P. Defense' },
  { name: 'Provoke', prereq: null },
  { name: 'Rage Sword', prereq: 'Provoke' },
  { name: 'Binding Strike', prereq: 'Rage Sword' },
  { name: 'Knight Will', prereq: 'Binding Strike' },
  { name: 'Sonic Thrust', prereq: 'Rage Sword' },
  { name: 'Revenir', prereq: 'Sonic Thrust' },
  { name: "Knight's Stance", prereq: null },
  { name: "Knight's Remedy", prereq: "Knight's Stance" },
];

// --- Blade Skill Tree ---
const bladeSkillsData = [
  { name: 'Hard Hit', prereq: null },
  { name: 'Astute', prereq: 'Hard Hit' },
  { name: 'Trigger Slash', prereq: 'Astute' },
  { name: 'Rampage', prereq: 'Trigger Slash' },
  { name: 'Shut-Out', prereq: 'Rampage' },
  { name: 'Meteor Breaker', prereq: 'Trigger Slash' },
  { name: 'Lunar Slash', prereq: 'Meteor Breaker' },
  { name: 'Sonic Blade', prereq: 'Hard Hit' },
  { name: 'Spiral Air', prereq: 'Sonic Blade' },
  { name: 'Sword Tempest', prereq: 'Spiral Air' },
  { name: 'Buster Blade', prereq: 'Spiral Air' },
  { name: 'Aura Blade', prereq: 'Buster Blade' },
  { name: 'Sword Mastery', prereq: null },
  { name: 'Quick Slash', prereq: 'Sword Mastery' },
  { name: 'Sword Techniques', prereq: 'Quick Slash' },
  { name: 'War Cry', prereq: 'Quick Slash' },
  { name: 'Berserk', prereq: 'War Cry' },
  { name: 'Gladiate', prereq: 'Berserk' },
  { name: 'Swift Attack', prereq: null },
];

// --- Martial Skill Tree ---
const martialSkillsData = [
  { name: 'Smash', prereq: null },
  { name: 'Bash', prereq: 'Smash' },
  { name: 'Shell Break', prereq: 'Bash' },
  { name: 'Heavy Smash', prereq: 'Shell Break' },
  { name: 'Chariot', prereq: 'Heavy Smash' },
  { name: 'Abstract Arms', prereq: 'Chariot' },
  { name: 'Sonic Wave', prereq: 'Smash' },
  { name: 'Earthbind', prereq: 'Sonic Wave' },
  { name: 'Triple Kick', prereq: 'Earthbind' },
  { name: 'Rush', prereq: 'Triple Kick' },
  { name: 'Asura Aura', prereq: 'Rush' },
  { name: 'Flash Blink', prereq: 'Triple Kick' },
  { name: 'Martial Mastery', prereq: null },
  { name: 'Martial Discipline', prereq: 'Martial Mastery' },
  { name: 'Chakra', prereq: 'Martial Discipline' },
  { name: 'Energy Control', prereq: 'Chakra' },
  { name: 'Aggravate', prereq: null },
  { name: 'Strong Chase Attack', prereq: 'Aggravate' },
  { name: 'Slide', prereq: null },
];
