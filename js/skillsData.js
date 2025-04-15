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
  { name: 'Crescent Saber', prereq: 'Saber Aura' },
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

// --- Bare Hand Skill Tree ---
const bareHandSkillsData = [
  { name: 'Unarmed Mastery', prereq: null },
  { name: 'Qi Charge', prereq: null },
  { name: 'Lion Rage', prereq: 'Qi Charge' },
  { name: 'Ultima Lion Rage', prereq: 'Lion Rage' },
  { name: 'Earthshaker', prereq: null },
  { name: 'Raving Storm', prereq: 'Qi Charge' },
  { name: 'Ultima Raving Storm', prereq: 'Raving Storm' },
  { name: 'Internal Elixir', prereq: 'Qi Charge' },
  { name: 'Clash of Enmity', prereq: 'Internal Elixir' },
  { name: 'Miracle Comeback', prereq: 'Clash of Enmity' },
  { name: 'Ultima Qi Charge', prereq: 'Qi Charge' },
  { name: 'Hidden Talent', prereq: 'Ultima Qi Charge' },
];

// --- Dark Power Skill Tree ---
const darkPowerSkillsData = [
  { name: 'Bloody Bite', prereq: null },
  { name: 'Dark Stinger', prereq: 'Bloody Bite' },
  { name: 'Red Tear', prereq: 'Dark Stinger' },
  { name: 'Soul Hunter', prereq: 'Red Tear' },
  { name: 'Sacrifice', prereq: null },
  { name: 'Demon Claw', prereq: 'Sacrifice' },
  { name: 'Regretless', prereq: 'Demon Claw' },
  { name: 'Eternal Nightmare', prereq: 'Regretless' },
];

// --- Dagger Skill Tree ---
const daggerSkillsData = [
  { name: 'Throwing Knife', prereq: null },
  { name: 'Spike Dart', prereq: 'Throwing Knife' },
  { name: 'Gatling Knife', prereq: 'Spike Dart' },
  { name: 'Amazing Throw', prereq: 'Gatling Knife' },
  { name: 'Poison Dagger', prereq: 'Throwing Knife' },
  { name: 'Double Stab', prereq: 'Poison Dagger' },
  { name: 'Hidden Arm', prereq: null },
  { name: 'Intensive Knife', prereq: 'Hidden Arm' },
  { name: 'Mail Breaker', prereq: 'Intensive Knife' },
  { name: 'Knife Combat', prereq: 'Intensive Knife' },
  { name: 'Flincher Knife', prereq: 'Knife Combat' },
];

// --- Magic Blade Skill Tree ---
const magicBladeSkillsData = [
  { name: 'Magic Warrior Mastery', prereq: null },
  { name: 'Conversion', prereq: 'Magic Warrior Mastery' },
  { name: 'Resonance', prereq: 'Conversion' },
  { name: 'Enchanted Spell', prereq: 'Resonance' },
  { name: 'Dual Bringer', prereq: 'Enchanted Spell' },
  { name: 'Ether Flare', prereq: null },
  { name: 'Element Slash', prereq: 'Ether Flare' },
  { name: 'Enchant Sword', prereq: 'Element Slash' },
  { name: 'Enchanted Burst', prereq: 'Enchant Sword' },
  { name: 'Union Sword', prereq: 'Enchanted Burst' },
  { name: 'Siphon Barrier', prereq: null },
  { name: 'Teleport', prereq: 'Siphon Barrier' },
  { name: 'Siphon Recall', prereq: 'Teleport' },
  { name: 'Float Dash', prereq: 'Siphon Recall' },
  { name: 'Magic Skin', prereq: 'Float Dash' },
];

// --- Halberd Skill Tree ---
const halberdSkillsData = [
  { name: 'Flash Stab', prereq: null },
  { name: 'Cannon Spear', prereq: 'Flash Stab' },
  { name: 'Dragon Tail', prereq: 'Cannon Spear' },
  { name: 'Dragon Tooth', prereq: 'Dragon Tail' },
  { name: 'Draconic Charge', prereq: 'Dragon Tooth' },
  { name: 'Dive Impact', prereq: 'Dragon Tail' },
  { name: 'Deadly Spear', prereq: 'Flash Stab' },
  { name: 'Strike Stab', prereq: 'Deadly Spear' },
  { name: 'Chronos Drive', prereq: 'Strike Stab' },
  { name: 'Infinite Dimension', prereq: 'Chronos Drive' },
  { name: 'Punish Ray', prereq: 'Deadly Spear' },
  { name: 'Halberd Mastery', prereq: null },
  { name: 'Critical Spear', prereq: 'Halberd Mastery' },
  { name: 'Tornado Lance', prereq: 'Critical Spear' },
  { name: 'Quick Aura', prereq: null },
  { name: 'War Cry of Struggle', prereq: 'Quick Aura' },
  { name: 'Godspeed Wield', prereq: 'War Cry of Struggle' },
  { name: 'Almighty Wield', prereq: 'Godspeed Wield' },
  { name: 'Buster Lance', prereq: null },
];

// --- Sprite Skill Tree ---
const spriteSkillsData = [
  { name: 'Auto-Device', prereq: null },
  { name: 'Express Aid', prereq: 'Auto-Device' },
  { name: 'Counterforce', prereq: 'Auto-Device' },
  { name: 'Micro Heal', prereq: 'Express Aid' },
  { name: 'Enhance', prereq: 'Express Aid' },
  { name: 'Resurrection', prereq: 'Micro Heal' },
  { name: 'Stabiliz', prereq: 'Enhance' },
  { name: 'Sprite Shield', prereq: 'Enhance' },
  { name: 'Astral Lance', prereq: 'Counterforce' },
  { name: 'Magic Vulcan', prereq: 'Astral Lance' },
];

// --- Wizard Skill Tree ---
const wizardSkillsData = [
  { name: 'Familia', prereq: null },
  { name: 'Lightning', prereq: 'Familia' },
  { name: 'Blizzard', prereq: 'Familia' },
  { name: 'Meteor Strike', prereq: 'Blizzard' },
  { name: 'Imperial Ray', prereq: 'Meteor Strike' },
  { name: 'Mana Crystal', prereq: 'Familia' },
  { name: 'Stone Barrier', prereq: 'Mana Crystal' },
  { name: 'Advanced Familia', prereq: 'Stone Barrier' },
  { name: 'Crystal Laser', prereq: 'Mana Crystal' },
  { name: 'Overlimit', prereq: 'Crystal Laser' },
  { name: 'Sorcery Guide', prereq: 'Overlimit' },
  { name: 'Cast Mastery', prereq: null },
];

// --- Smith Skill Tree ---
const smithSkillsData = [
  { name: 'Refine Equipment', prereq: null },
  { name: "Novice's Anvil", prereq: 'Refine Equipment' },
  { name: "Craftsman's Anvil", prereq: "Novice's Anvil" },
  { name: "Blacksmith's Anvil", prereq: "Craftsman's Anvil" },
  { name: "Master's Anvil", prereq: "Blacksmith's Anvil" },
  { name: "Master's Anvil II", prereq: "Master's Anvil" },
  { name: 'Mid-Class Refinement', prereq: 'Refine Equipment' },
  { name: 'High-Class Refinement', prereq: 'Mid-Class Refinement' },
  { name: "Expert's Refinement", prereq: 'High-Class Refinement' },
  { name: 'Create Equipment', prereq: 'Refine Equipment' },
  { name: 'Careful Creation', prereq: 'Create Equipment' },
  { name: "Expert's Creation", prereq: 'Careful Creation' },
  { name: 'Customize Equipment', prereq: 'Create Equipment' },
  { name: 'Accurate Customization', prereq: 'Customize Equipment' },
  { name: "Expert's Customization", prereq: 'Accurate Customization' },
  { name: "Expert's Customization II", prereq: "Expert's Customization" },
  { name: 'Metal Compassion', prereq: null },
  { name: 'Fabric Compassion', prereq: null },
  { name: 'Beast Compassion', prereq: null },
  { name: 'Wood Compassion', prereq: null },
  { name: 'Medicine Compassion', prereq: null },
  { name: 'Mana Compassion', prereq: null },
];

// --- Process Materials Skill Tree ---
const processMaterialsSkillsData = [
  { name: 'Process Materials', prereq: null },
];

// --- Alchemy Skill Tree ---
const alchemySkillsData = [
  { name: 'Item Synthesis', prereq: null },
  { name: "Novice's Bottle", prereq: 'Item Synthesis' },
  { name: "Craftsman's Bottle", prereq: "Novice's Bottle" },
  { name: "Synthesist's Bottle", prereq: "Craftsman's Bottle" },
  { name: "Master's Bottle", prereq: "Synthesist's Bottle" },
  { name: "Master's Bottle II", prereq: "Master's Bottle" },
  { name: 'Mid-Class Synthesis', prereq: 'Item Synthesis' },
  { name: 'High-Class Synthesis', prereq: 'Mid-Class Synthesis' },
  { name: "Expert's Synthesis", prereq: 'High-Class Synthesis' },
  { name: "Expert's Synthesis II", prereq: "Expert's Synthesis" },
  { name: 'Synthesize Equipment', prereq: 'Item Synthesis' },
  { name: 'Technical Synthesis I', prereq: 'Synthesize Equipment' },
  { name: 'Technical Synthesis II', prereq: 'Technical Synthesis I' },
  { name: 'Technical Synthesis III', prereq: 'Technical Synthesis II' },
];

// --- Survival Skill Tree ---
const survivalSkillsData = [
  { name: 'Play Dead', prereq: null },
  { name: 'EXP Gain Up', prereq: null },
  { name: 'Drop Rate Up', prereq: null },
  { name: 'Safe Rest', prereq: null },
  { name: 'HP Boost', prereq: 'Safe Rest' },
  { name: "Fighter's High", prereq: 'Safe Rest' },
  { name: 'Short Rest', prereq: null },
  { name: 'MP Boost', prereq: 'Short Rest' },
  { name: 'Sober Analysis', prereq: 'Short Rest' },
];

// --- Support Skill Tree ---
const supportSkillsData = [
  { name: 'First Aid', prereq: null },
  { name: 'Mini Heal', prereq: null },
  { name: 'Recovery', prereq: 'Mini Heal' },
  { name: 'Sanctuary', prereq: 'Recovery' },
  { name: 'Heal', prereq: 'Sanctuary' },
  { name: 'Life Recovery', prereq: null },
  { name: 'Brave Aura', prereq: 'Life Recovery' },
  { name: 'High Cycle', prereq: 'Brave Aura' },
  { name: 'Quick Motion', prereq: 'High Cycle' },
  { name: 'Mana Recharge', prereq: null },
  { name: 'Magic Barrier', prereq: 'Mana Recharge' },
  { name: 'Immunity', prereq: 'Magic Barrier' },
  { name: 'Fast Reaction', prereq: 'Immunity' },
];
