export interface RelicCharm {
  category: "Charm" | "Relic";
  item_name: string;
  item_type: string;
  stats: string[];
  completion_bonus: string[];
  enchantable_slots: string[];
  dropped_by?: string | null;
}

export const relicsAndCharms: RelicCharm[] = [
  {
    "category": "Charm",
    "item_name": "Boarman Blood",
    "item_type": "Charm",
    "stats": [
      "4/8/12% increased Health"
    ],
    "completion_bonus": [
      "+10% Poison Resistance",
      "+10% Lightning Resistance"
    ],
    "enchantable_slots": [
      "Shoulder Armor"
    ],
    "dropped_by": "Boarmen"
  },
  {
    "category": "Charm",
    "item_name": "Boar Hide",
    "item_type": "Charm",
    "stats": [
      "+10/20/30 Might",
      "+2/4/6 Pierce Armor per Level"
    ],
    "completion_bonus": [
      "+20% Bleeding Resistance",
      "Summons have +20% to All Resistances"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Boars, Boarmen"
  },
  {
    "category": "Charm",
    "item_name": "Centaur Hoof",
    "item_type": "Charm",
    "stats": [
      "+2/4/6 Strike Armor per Level",
      "+2/4/6 Pierce Armor per Level"
    ],
    "completion_bonus": [
      "8% increased Movement Speed"
    ],
    "enchantable_slots": [
      "Leg Armor"
    ],
    "dropped_by": "Centaurs"
  },
  {
    "category": "Charm",
    "item_name": "Cyclops Eye",
    "item_type": "Charm",
    "stats": [
      "4/8/12% increased Health Regeneration",
      "+5/10/15% Lightning Resistance"
    ],
    "completion_bonus": [
      "4% increased Vigor"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": null
  },
  {
    "category": "Charm",
    "item_name": "Dark Essence",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Energy Regeneration",
      "6/12/18% increased Energy Drain Damage"
    ],
    "completion_bonus": [
      "10% increased Energy Barrier",
      "10% increased Energy Barrier Conversion Rate"
    ],
    "enchantable_slots": [
      "Arm Armor"
    ],
    "dropped_by": "Ichtian Enchanter, Empusa"
  },
  {
    "category": "Charm",
    "item_name": "Feline Claw",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Strike Damage"
    ],
    "completion_bonus": [
      "8% increased Attack Speed"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Lions"
  },
  {
    "category": "Charm",
    "item_name": "Glacial Shard",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Cold Damage",
      "+5/10/15% Cold Resistance"
    ],
    "completion_bonus": [
      "+20% Chilled Resistance",
      "Summons have 30% increased Damage"
    ],
    "enchantable_slots": [
      "Torso Armor",
      "Leg Armor"
    ],
    "dropped_by": "Frost Revenant, Bandits, Ichtian Hydromancer"
  },
  {
    "category": "Charm",
    "item_name": "Hollow Essence",
    "item_type": "Charm",
    "stats": [
      "4/8/12% increased Energy"
    ],
    "completion_bonus": [
      "+10% Glancing Hits Chance"
    ],
    "enchantable_slots": [
      "Arm Armor"
    ],
    "dropped_by": "Drowned Sailor, Lost souls"
  },
  {
    "category": "Charm",
    "item_name": "Hollow Fang",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Vitality Damage"
    ],
    "completion_bonus": [
      "8% increased Base Weapon Damage"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Giant Bat, Cobra"
  },
  {
    "category": "Charm",
    "item_name": "Ichthian Fin",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Cold Damage"
    ],
    "completion_bonus": [
      "15% increased Ailment Duration"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "any Ichtian"
  },
  {
    "category": "Charm",
    "item_name": "Leech Bile",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Health Regeneration" 
    ],
    "completion_bonus": [
      "+10% Cold Resistance",
      "+10% Fire Resistance"
    ],
    "enchantable_slots": [
      "Shoulder Armor"
    ],
    "dropped_by": "Leeches"
  },
  {
    "category": "Charm",
    "item_name": "Lupine Claw",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Pierce Damage"
    ],
    "completion_bonus": [
      "10% increased Cooldown Rate"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Wolves"
  },
  {
    "category": "Charm",
    "item_name": "Marble Heart",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Fire Resistance",
      "2/4/6 Strike Armor per Level"
    ],
    "completion_bonus": [
      "+8% Glancing Hits Chance"
    ],
    "enchantable_slots": [
      "Arm Armor",
      "Shoulder Armor"
    ],
    "dropped_by": "Living Statues"
  },
  {
    "category": "Charm",
    "item_name": "Mechanical Parts",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Movement Speed"
    ],
    "completion_bonus": [
      "+10% Poison Resistance"
    ],
    "enchantable_slots": [
      "Torso Armor"
    ],
    "dropped_by": "Bandit Trapper"
  },
  {
    "category": "Charm",
    "item_name": "Membrane Wings",
    "item_type": "Charm",
    "stats": [
      "+3/6/9% Glancing Hits Chance",
      "2/4/6% increased Cast Speed"
    ],
    "completion_bonus": [
      "8% increased Attack Speed",
      "Summons have 10% increased All Speed"
    ],
    "enchantable_slots": [
      "Torso Armor",
      "Leg Armor"
    ],
    "dropped_by": "Minyades"
  },
  {
    "category": "Charm",
    "item_name": "Necrotic Bones",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Cold Resistance"
    ],
    "completion_bonus": [
      "+30 Energy"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Any Skeleton, Undead Ichtian, Ichtian Necromancer"
  },
  {
    "category": "Charm",
    "item_name": "Primal Magma",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Fire Damage",
      "+5/10/15% Fire Resistance"
    ],
    "completion_bonus": [
      "+20% Burn Resistance",
      "Summons have 30% increased Damage"
    ],
    "enchantable_slots": [
      "Arm Armor",
      "Shoulder Armor"
    ],
    "dropped_by": "Walking Corpse Evoker, Burning Revenant"
  },
  {
    "category": "Charm",
    "item_name": "Raging Tempest",
    "item_type": "Charm",
    "stats": [
      "5/10/15% increased Lightning Damage",
      "+5/10/15% Lightning Resistance"
    ],
    "completion_bonus": [
      "+20% Shocked Resistance",
      "Summons have 30% increased Damage"
    ],
    "enchantable_slots": [
      "Head Armor",
      "Necklaces"
    ],
    "dropped_by": "Skeleton Evoker, Hippokampos Foal, Ketos Spawn"
  },
  {
    "category": "Charm",
    "item_name": "Pristine Plumage",
    "item_type": "Charm",
    "stats": [
      "+10/20/30 Agility",
      "+3/6/9% Poison Resistance"
    ],
    "completion_bonus": [
      "8% increased Strike Armor"
    ],
    "enchantable_slots": [
      "All Armor"
    ],
    "dropped_by": "Gryphon, Giant Eagle"
  },
  {
    "category": "Charm",
    "item_name": "Rigid Carapace",
    "item_type": "Charm",
    "stats": [
      "+2/4/4 Pierce Armor per Level",
      "2/4/6% increased Health"
    ],
    "completion_bonus": [
      "15% increased Health Regeneration",
      "Summons have 20% increased Health"
    ],
    "enchantable_slots": [
      "Torso Armor",
      "Shields"
    ],
    "dropped_by": "Crabs, Ichtian Commanders, Scorpions"
  },
  {
    "category": "Charm",
    "item_name": "Spectral Matter",
    "item_type": "Charm",
    "stats": [
      "+10/20/30 Knowledge",
      "4/8/12% increased Energy Barrier"
    ],
    "completion_bonus": [
      "10% increased Energy Regeneration"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Drowned Sailor, Accusing Shadow"
  },
  {
    "category": "Charm",
    "item_name": "Tortured Soul",
    "item_type": "Charm",
    "stats": [
      "+5/10/15% Vitality Resistance",
      "+5/10/15% Spirit Resistance"
    ],
    "completion_bonus": [
      "10% increased Energy Barrier"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Accusing Shadow, Empusas"
  },
  {
    "category": "Charm",
    "item_name": "Turtle Shell",
    "item_type": "Charm",
    "stats": [
      "+3/5/7 Pierce Armor per Level"
    ],
    "completion_bonus": [
      "8% increased Health"
    ],
    "enchantable_slots": [
      "Shields",
      "Talismans"
    ],
    "dropped_by": "Turtles"
  },
  {
    "category": "Charm",
    "item_name": "Venom Sac",
    "item_type": "Charm",
    "stats": [
      "6/12/18% increased Poison Damage"
    ],
    "completion_bonus": [
      "15% increased Damage over Time"
    ],
    "enchantable_slots": [
      "All Weapons"
    ],
    "dropped_by": "Spiders, Cobras, Scorpions"
  },
  {
    "category": "Charm",
    "item_name": "Vile Ichor",
    "item_type": "Charm",
    "stats": [
      "3/6/9% increased Damage over Time",
      "3/6/9% increased Spell Damage"
    ],
    "completion_bonus": [
      "+20% Plagued Resistance",
      "Summons have 50% increased Damage"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ],
    "dropped_by": "Exploding Spiders, Ichtian Alchemist"
  },
  {
    "category": "Relic",
    "item_name": "Aegis of Athena",
    "item_type": "Relic",
    "stats": [
      "5/10/15% increased Armor Value"
    ],
    "completion_bonus": [
      "30% increased Free Barrier"
    ],
    "enchantable_slots": [
      "Shields"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Anvil of Hephaistos",
    "item_type": "Relic",
    "stats": [
      "3/6/12% increased Area Damage",
      "4/8/12% increased Base Weapon Damage",
      "-10% reduced Movement Speed (in-combat only)"
    ],
    "completion_bonus": [
      "10% Weapon Penetration"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Archimedes Mirror",
    "item_type": "Relic",
    "stats": [
      "+3/6/9% Glancing Hits Chance",
      "+6/12/18% Glancing Hits Damage Reduction",
      "7/14/21% increased Retaliation Damage"
    ],
    "completion_bonus": [
      "15% chance to deal 100% Retaliation Damage + 100% of Damage Taken when hit"
    ],
    "enchantable_slots": [
      "Shields",
      "Talismans"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Blade of Thanatos",
    "item_type": "Relic",
    "stats": [
      "6/7/8% increased Attack Speed",
      "15/30/45% More Damage to Elite Creatures",
      "+5% Health Reserved"
    ],
    "completion_bonus": [
      "Every third Primary Attack against non-boss deals Spirit Damage (10% of missing Health)"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Bow of Apollo",
    "item_type": "Relic",
    "stats": [
      "10/20/30% increased Ranged Attack Damage",
      "10/20/30% increased Projectile Damage"
    ],
    "completion_bonus": [
      "Kills with a Bow heal 5% of max Health"
    ],
    "enchantable_slots": [
      "Bows"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Chill of Tartaros",
    "item_type": "Relic",
    "stats": [
      "5/10/15% increased Cold Damage",
      "5/10/15% increased Base Weapon Cold Damage",
      "-15% Cold Resistance"
    ],
    "completion_bonus": [
      "+0.6 Cold Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Cold"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Courage of Theseus",
    "item_type": "Relic",
    "stats": [
      "2/4/6% increased Damage",
      "4/5/6% increased Attack and Cast Speed",
      "Summons have 10/20/30% increased Damage"
    ],
    "completion_bonus": [
      "Kill grants 3% increased Total Damage for 5s (stacks 5x)"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Demeter's Duality",
    "item_type": "Relic",
    "stats": [
      "3/4/9% increased Health",
      "5/10/15% increased Health Regeneration",
      "-10% Cold Resistance",
      "5% Energy Reserved"
    ],
    "completion_bonus": [
      "Gain 10% Total Damage below 50% Health",
      "Regen 1% max health/sec above 50% Health"
    ],
    "enchantable_slots": [
      "Necklaces"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Hera's Scepter",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Spell Damage",
      "5/10/15% increased Poison Damage",
      "3/6/9% increased Plagued Ailment Power",
      "10/12/14% increased Plagued Ailment Duration"
    ],
    "completion_bonus": [
      "Next hit has additional 100% Plagued chance (3s CD)",
      "Take 10% less damage from Plagued enemies",
      "+1 Maximum Plagued Stacks"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Hermes' Sandal",
    "item_type": "Relic",
    "stats": [
      "6/8/10% increased Movement Speed",
      "+15/30/45 Agility"
    ],
    "completion_bonus": [
      "Gain an additional charge of Dodge",
      "10% increased Movement Speed"
    ],
    "enchantable_slots": [
      "Leg Armor"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Hestia's Cinders",
    "item_type": "Relic",
    "stats": [
      "3/6/9% increased Damage over Time",
      "5/10/15% increased Fire Damage",
      "3/6/9% increased Burning Ailment Power",
      "10/20/30% increased Burning Ailment Duration"
    ],
    "completion_bonus": [
      "Next hit has additional 100% Burning chance (4s CD)",
      "Burning enemies around you are slowed by 15%",
      "+1 Maximum Burning Stacks"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Hypnos' Calm",
    "item_type": "Relic",
    "stats": [
      "6/12/18% increased Energy Regeneration",
      "+30 Energy Reserved"
    ],
    "completion_bonus": [
      "20% increased Energy Regeneration below 50% Energy"
    ],
    "enchantable_slots": [
      "All Armor"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Iron Will of Ajax",
    "item_type": "Relic",
    "stats": [
      "5/7/9% Armor Value",
      "+6/12/18% Spirit Resistance"
    ],
    "completion_bonus": [
      "30% chance to cleanse Hard CC and gain 8s Immunity (30s CD)"
    ],
    "enchantable_slots": [
      "All Armor"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Legacy of Perseus",
    "item_type": "Relic",
    "stats": [
      "5/10/15% increased Poison Damage",
      "5/10/15% increased Base Weapon Poison Damage",
      "15% Poison Resistance"
    ],
    "completion_bonus": [
      "+0.6 Poison Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Poison"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Persephone's Tears",
    "item_type": "Relic",
    "stats": [
      "+15/30/45 Energy",
      "+6/12/18% Cold Resistance"
    ],
    "completion_bonus": [
      "5% increased Energy",
      "+2% Max Cold Resistance"
    ],
    "enchantable_slots": [
      "Rings",
      "Necklaces"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Prometheus' Flame",
    "item_type": "Relic",
    "stats": [
      "5/10/15% increased Fire Damage",
      "5/10/15% increased Base Weapon Fire Damage",
      "-15% Fire Resistance"
    ],
    "completion_bonus": [
      "+0.6 Fire Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Fire"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Rage of Ares",
    "item_type": "Relic",
    "stats": [
      "20/40/60% increased Strike Damage",
      "20/40/60% increased Pierce Damage",
      "10% Reduced Strike Armor",
      "10% Reduced Pierce Armor"
    ],
    "completion_bonus": [
      "Kill grants you and Summons 3% Speed for 10s (stacks 5x)"
    ],
    "enchantable_slots": [
      "Arm Armor"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Valor of Achilles",
    "item_type": "Relic",
    "stats": [
      "5/10/15% increased Lightning Damage",
      "5/10/15% increased Base Weapon Lightning Damage",
      "15% Lightning Resistance"
    ],
    "completion_bonus": [
      "+0.6 Lightning Weapon Damage per Level",
      "Convert 35% of Weapon Damage to Lightning"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  },
  {
    "category": "Relic",
    "item_name": "Zeus' Thunderbolt",
    "item_type": "Relic",
    "stats": [
      "4/5/6% increased Attack and Cast Speed",
      "10/20/30% increased Lightning Damage"
    ],
    "completion_bonus": [
      "10% chance to instantly kill non-boss enemy on first hit"
    ],
    "enchantable_slots": [
      "All Weapons"
    ]
  }
];
