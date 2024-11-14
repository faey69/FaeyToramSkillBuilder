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

// --- Shot Skill Tree ---
const shotSkillsData = [
  { name: 'Power Shot', prereq: null },
  { name: 'Bullseye', prereq: 'Power Shot' },
  { name: 'Snipe', prereq: 'Bullseye' },
  { name: 'Vanquisher', prereq: 'Snipe' },
  { name: 'Arrow Rain', prereq: 'Bullseye' },
  { name: 'Cross Fire', prereq: 'Arrow Rain' },
  { name: 'Twin Storm', prereq: 'Cross Fire' },
  { name: 'Quick Loader', prereq: 'Cross Fire' },
  { name: 'Retrograde Shot', prereq: 'Cross Fire' },
  { name: 'Moeba Shot', prereq: 'Power Shot' },
  { name: 'Paralysis Shot', prereq: 'Moeba Shot' },
  { name: 'Smoke Dust', prereq: 'Paralysis Shot' },
  { name: 'Arm Break', prereq: 'Smoke Dust' },
  { name: 'Parabola Cannon', prereq: 'Arm Break' },
  { name: 'Shot Mastery', prereq: null },
  { name: 'Samurai Archery', prereq: 'Shot Mastery' },
  { name: 'Sneak Attack', prereq: 'Shot Mastery' },
  { name: 'Long Range', prereq: 'Shot Mastery' },
  { name: 'Quick Draw', prereq: 'Long Range' },
  { name: 'Decoy Shot', prereq: 'Quick Draw' },
];

// --- Magic Skill Tree ---
const magicSkillsData = [
  { name: 'Magic: Arrows', prereq: null },
  { name: 'Magic: Javelin', prereq: 'Magic: Arrows' },
  { name: 'Magic: Lances', prereq: 'Magic: Javelin' },
  { name: 'Magic: Impact', prereq: 'Magic: Lances' },
  { name: 'Magic: Finale', prereq: 'Magic: Impact' },
  { name: 'Chronos Shift', prereq: 'Magic: Finale' },
  { name: 'Magic: Wall', prereq: 'Magic: Arrows' },
  { name: 'Magic: Blast', prereq: 'Magic: Wall' },
  { name: 'Magic: Storm', prereq: 'Magic: Blast' },
  { name: 'Magic: Burst', prereq: 'Magic: Storm' },
  { name: 'Magic: Magic Cannon', prereq: 'Magic: Burst' },
  { name: 'Magic Mastery', prereq: null },
  { name: 'Magic Knife', prereq: 'Magic Mastery' },
  { name: 'Qadal', prereq: 'Magic Knife' },
  { name: 'Magic: Crash', prereq: 'Magic: Storm' },
  { name: 'MP Charge', prereq: null },
  { name: 'Chain Cast', prereq: 'MP Charge' },
  { name: 'Power Wave', prereq: 'Chain Cast' },
  { name: 'Maximizer', prereq: 'Power Wave' },
  { name: 'Rapid Charge', prereq: 'Maximizer' },
  { name: 'Magic: Guardian Beam', prereq: null },
  { name: 'Enchanted Barriers', prereq: 'Maximizer' },
];

// --- Mononofu Skill Tree ---
const mononofuSkillsData = [
  { name: 'Issen', prereq: null },
  { name: 'Pulse Blade', prereq: 'Issen' },
  { name: 'Triple Thrust', prereq: 'Pulse Blade' },
  { name: 'Hasso Happa', prereq: 'Triple Thrust' },
  { name: 'Tenryu Ransei', prereq: 'Hasso Happa' },
  { name: 'Kasumisetsu Getsuka', prereq: 'Tenryu Ransei' },
  { name: 'Pommel Strike', prereq: null },
  { name: 'Magadachi', prereq: 'Pommel Strike' },
  { name: 'Zantei Settetsu', prereq: 'Magadachi' },
  { name: 'Garyou Tensei', prereq: 'Hasso Happa' },
  { name: 'Shadowless Slash', prereq: 'Garyou Tensei' },
  { name: 'Bushido', prereq: null },
  { name: 'Shukuchi', prereq: 'Bushido' },
  { name: 'Nukiuchi Sennosen', prereq: 'Shukuchi' },
  { name: 'Two-Handed', prereq: 'Bushido' },
  { name: 'Meikyo Shisui', prereq: 'Two-Handed' },
  { name: 'Kairiki Ranshin', prereq: 'Meikyo Shisui' },
  { name: 'Dauntless', prereq: 'Kairiki Ranshin' },
  { name: 'Bouncing Blade', prereq: null },
];

// --- Priest Skill Tree ---
const priestSkillsData = [
  { name: 'Bless', prereq: null },
  { name: 'Gloria', prereq: 'Bless' },
  { name: 'Enhanced Bless', prereq: 'Gloria' },
  { name: 'Royal Heal', prereq: 'Enhanced Bless' },
  { name: 'Holy Fist', prereq: null },
  { name: 'Holy Light', prereq: 'Holy Fist' },
  { name: 'Ether Barrier', prereq: 'Holy Light' },
  { name: 'Prayer', prereq: 'Ether Barrier' },
  { name: 'Staff Thrust', prereq: null },
  { name: 'Exorcism', prereq: 'Holy Light' },
  { name: 'Holy Book', prereq: 'Exorcism' },
  { name: 'Nemesis', prereq: 'Holy Book' },
];

// --- Dual Sword Skill Tree ---
const dualSwordSkillsData = [
  { name: 'Dual Sword Mastery', prereq: null },
  { name: 'Twin Slash', prereq: 'Dual Sword Mastery' },
  { name: 'Spinning Slash', prereq: 'Twin Slash' },
  { name: 'Phantom Slash', prereq: 'Spinning Slash' },
  { name: 'Aerial Cut', prereq: 'Spinning Slash' },
  { name: 'Cross Parry', prereq: 'Dual Sword Mastery' },
  { name: 'Charging Slash', prereq: 'Cross Parry' },
  { name: 'Shadowstep', prereq: 'Charging Slash' },
  { name: 'Shining Cross', prereq: 'Shadowstep' },
  { name: 'Lunar Misfortune', prereq: 'Shining Cross' },
  { name: 'Twin Buster Blade', prereq: 'Shining Cross' },
  { name: 'Reflex', prereq: 'Dual Sword Mastery' },
  { name: 'Flash Blast', prereq: 'Reflex' },
  { name: 'Storm Reaper', prereq: 'Flash Blast' },
  { name: 'Dual Sword Control', prereq: 'Dual Sword Mastery' },
  { name: 'Godspeed', prereq: 'Dual Sword Control' },
  { name: 'Saber Aura', prereq: 'Godspeed' },
  { name: 'Crescent Saber', prereq: 'Saber Auras' },
];

// --- Shield Skill Tree ---
const shieldSkillsData = [
  { name: 'Shield Mastery', prereq: null },
  { name: 'Shield Bash', prereq: 'Shield Mastery' },
  { name: 'Shield Cannon', prereq: 'Shield Bash' },
  { name: 'Guard Strike', prereq: 'Shield Cannon' },
  { name: 'Force Shield', prereq: 'Shield Mastery' },
  { name: 'Magical Shield', prereq: 'Force Shield' },
  { name: 'Shield Uppercut', prereq: 'Shield Mastery' },
  { name: 'Dual Shields', prereq: 'Shield Uppercut' },
  { name: 'Shield Repair', prereq: 'Dual Shields' },
  { name: 'Belagerung', prereq: 'Shield Repair' },
  { name: 'Protection', prereq: null },
  { name: 'Aegis', prereq: 'Protection' },
  { name: 'Guardian', prereq: 'Aegis' },
];

// --- Crusher Skill Tree ---
const crusherSkillsData = [
  { name: 'Forefist Punch', prereq: null },
  { name: 'Goliath Punch', prereq: 'Forefist Punch' },
  { name: 'God Hand', prereq: 'Goliath Punch' },
  { name: 'Divine Rigid Body', prereq: 'God Hand' },
  { name: 'Breathwork', prereq: null },
  { name: 'Floating Kick', prereq: 'Breathwork' },
  { name: 'Geyser Kick', prereq: 'Floating Kick' },
  { name: 'Combination', prereq: 'Breathwork' },
  { name: 'Annihilator', prereq: 'Combination' },
  { name: 'Terrablast', prereq: 'Annihilator' },
];
