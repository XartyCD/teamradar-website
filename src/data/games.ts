const games = [
  {
    name: "Phasmophobia",
    gradient: "from-indigo-500 to-purple-600",
    logo: "/game-logos/phasmophobia.webp",
  },

  {
    name: "Lethal Company",
    gradient: "from-yellow-500 to-orange-600",
    logo: "/game-logos/lethal.webp",
  },
  {
    name: "Valorant",
    gradient: "from-red-500 to-pink-500",
    logo: "/game-logos/valorant.webp",
  },
  {
    name: "Apex Legends",
    gradient: "from-pink-600 to-red-400",
    logo: "/game-logos/apex.webp",
  },
  {
    name: "It Takes Two",
    gradient: "from-yellow-400 to-amber-600",
    logo: "/game-logos/it-takes-two.webp",
  },
  {
    name: "League of Legends",
    gradient: "from-indigo-800 to-blue-500",
    logo: "/game-logos/league-of-legends.webp",
  },
  {
    name: "Overwatch 2",
    gradient: "from-orange-500 to-yellow-500",
    logo: "/game-logos/overwatch2.webp",
  },
  {
    name: "CS 2",
    gradient: "from-gray-700 to-blue-600",
    logo: "/game-logos/cs2.webp",
  },
  {
    name: "Dota 2",
    gradient: "from-red-800 to-slate-900",
    logo: "/game-logos/dota2.webp",
  },
  {
    name: "Genshin Impact",
    gradient: "from-indigo-300 to-cyan-400",
    logo: "/game-logos/genshin-impact.webp",
  },
  {
    name: "Honkai: Star Rail",
    gradient: "from-slate-800 to-indigo-400",
    logo: "/game-logos/honkaistarrail.webp",
  },
  {
    name: "PUBG",
    gradient: "from-green-700 to-yellow-600",
    logo: "/game-logos/pubg.webp",
  },
  {
    name: "Minecraft",
    gradient: "from-green-500 to-lime-400",
    logo: "/game-logos/minecraft.webp",
  },
  {
    name: "Terraria",
    gradient: "from-teal-500 to-green-300",
    logo: "/game-logos/terraria.webp",
  },
  {
    name: "The Forest",
    gradient: "from-green-800 to-yellow-700",
    logo: "/game-logos/the-forest.webp",
  },
  {
    name: "Sons of the Forest",
    gradient: "from-red-700 to-orange-500",
    logo: "/game-logos/sons-of-the-forest.webp",
  },
  {
    name: "Farming Simulator (2018–202*)",
    gradient: "from-lime-500 to-amber-300",
    logo: "/game-logos/farmingsimulator.webp",
  },

  {
    name: "Kingdoms Reborn",
    gradient: "from-yellow-800 to-lime-600",
    logo: "/game-logos/kingdoms-reborn.webp",
  },
  {
    name: "Sea of Thieves",
    gradient: "from-emerald-500 to-cyan-500",
    logo: "/game-logos/sea-of-thieves.webp",
  },
  {
    name: "Left 4 Dead 2",
    gradient: "from-gray-800 to-lime-400",
    logo: "/game-logos/left4dead2.webp",
  },
  {
    name: "Payday 2",
    gradient: "from-blue-900 to-gray-400",
    logo: "/game-logos/payday2.webp",
  },
  {
    name: "Deep Rock Galactic",
    gradient: "from-amber-600 to-slate-700",
    logo: "/game-logos/deeprockgalactic.webp",
  },
  {
    name: "Don't Starve Together",
    gradient: "from-zinc-600 to-indigo-400",
    logo: "/game-logos/dontstarvetogether.webp",
  },
  {
    name: "The Division 2",
    gradient: "from-orange-800 to-slate-500",
    logo: "/game-logos/thedivision2.webp",
  },
  {
    name: "Grounded",
    gradient: "from-lime-600 to-green-500",
    logo: "/game-logos/grounded.webp",
  },
  {
    name: "Destiny 2",
    gradient: "from-indigo-600 to-slate-400",
    logo: "/game-logos/destinity2.webp",
  },
  {
    name: "Borderlands 3",
    gradient: "from-yellow-500 to-pink-500",
    logo: "/game-logos/borderlands3.webp",
  },
  {
    name: "Warframe",
    gradient: "from-blue-500 to-teal-600",
    logo: "/game-logos/warframe.webp",
  },
  {
    name: "GTA Online",
    gradient: "from-gray-900 to-lime-400",
    logo: "/game-logos/gta5online.webp",
  },
  {
    name: "GTA 5 RP",
    gradient: "from-gray-900 to-amber-500",
    logo: "/game-logos/gta5rp.webp",
  },

  {
    name: "The Outlast Trials",
    gradient: "from-rose-600 to-red-900",
    logo: "/game-logos/theoutlasttrials.webp",
  },
  {
    name: "V Rising",
    gradient: "from-rose-800 to-purple-600",
    logo: "/game-logos/vrising.webp",
  },
  {
    name: "7 Days to Die",
    gradient: "from-amber-700 to-slate-800",
    logo: "/game-logos/7daystodie.webp",
  },
  {
    name: "Deceit",
    gradient: "from-rose-900 to-gray-800",
    logo: "/game-logos/deceit.webp",
  },

  {
    name: "Remnant 2",
    gradient: "from-emerald-600 to-zinc-700",
    logo: "/game-logos/remnant2.webp",
  },
  {
    name: "Killing Floor 2",
    gradient: "from-red-800 to-rose-700",
    logo: "/game-logos/kiling-floor2.webp",
  },
  {
    name: "Dying Light 2",
    gradient: "from-orange-600 to-gray-700",
    logo: "/game-logos/dyinglight2.webp",
  },
  {
    name: "Portal 2",
    gradient: "from-sky-500 to-orange-500",
    logo: "/game-logos/portal2.webp",
  },
  {
    name: "We Were Here",
    gradient: "from-blue-700 to-zinc-600",
    logo: "/game-logos/wewerehere.webp",
  },
  {
    name: "A Way Out",
    gradient: "from-yellow-600 to-gray-800",
    logo: "/game-logos/awayout.webp",
  },
  {
    name: "Raft",
    gradient: "from-teal-400 to-blue-500",
    logo: "/game-logos/raft.webp",
  },
  {
    name: "Satisfactory",
    gradient: "from-orange-400 to-amber-500",
    logo: "/game-logos/satisfactory.webp",
  },
  {
    name: "Project Zomboid",
    gradient: "from-zinc-500 to-slate-900",
    logo: "/game-logos/projectzomboid.webp",
  },
  {
    name: "Rust",
    gradient: "from-red-700 to-slate-600",
    logo: "/game-logos/rust.webp",
  },
  {
    name: "DayZ",
    gradient: "from-zinc-900 to-gray-500",
    logo: "/game-logos/dayz.webp",
  },
  {
    name: "Risk of Rain 2",
    gradient: "from-sky-700 to-purple-400",
    logo: "/game-logos/riskofrain2.webp",
  },
  {
    name: "Valheim",
    gradient: "from-amber-700 to-sky-500",
    logo: "/game-logos/valheim.webp",
  },
  {
    name: "Unrailed!",
    gradient: "from-pink-300 to-yellow-300",
    logo: "/game-logos/unrailed.webp",
  },
  {
    name: "Keep Talking and Nobody Explodes",
    gradient: "from-blue-800 to-red-500",
    logo: "/game-logos/keeptalkingandnobodyexplodes.webp",
  },
  {
    name: "Ultimate Chicken Horse",
    gradient: "from-rose-400 to-orange-500",
    logo: "/game-logos/ultimatechickenhorse.webp",
  },
  {
    name: "Human: Fall Flat",
    gradient: "from-sky-500 to-slate-300",
    logo: "/game-logos/humanfallflat.webp",
  },
  {
    name: "Overcooked! 2",
    gradient: "from-red-500 to-orange-400",
    logo: "/game-logos/overcooked2.webp",
  },
  {
    name: "West Hunt",
    gradient: "from-yellow-700 to-brown-600",
    logo: "/game-logos/westhunt.webp",
  },
  {
    name: "Stardew Valley",
    gradient: "from-green-300 to-amber-300",
    logo: "/game-logos/stardewvalley.webp",
  },
  {
    name: "The Escapists 2",
    gradient: "from-slate-700 to-blue-300",
    logo: "/game-logos/theescapists2.webp",
  },
  {
    name: "Cuphead",
    gradient: "from-yellow-300 to-red-300",
    logo: "/game-logos/cuphead.webp",
  },
  {
    name: "Helldivers 2",
    gradient: "from-sky-700 to-slate-500",
    logo: "/game-logos/helldivers2.webp",
  },
  {
    name: "Baldur’s Gate 3",
    gradient: "from-gray-800 to-gold-500",
    logo: "/game-logos/baldursgate3.webp",
  },
  {
    name: "No Man’s Sky",
    gradient: "from-pink-400 to-sky-500",
    logo: "/game-logos/nomanssky.webp",
  },
  {
    name: "Among Us",
    gradient: "from-rose-500 to-black",
    logo: "/game-logos/amongus.webp",
  },
  {
    name: "SCP: Secret Laboratory",
    gradient: "from-gray-900 to-blue-400",
    logo: "/game-logos/scpsl.webp",
  },
  {
    name: "Biped",
    gradient: "from-blue-300 to-pink-300",
    logo: "/game-logos/biped.webp",
  },
  {
    name: "Escape the Backrooms",
    gradient: "from-yellow-800 to-black",
    logo: "/game-logos/escapethebackrooms.webp",
  },
  {
    name: "Gang Beasts",
    gradient: "from-red-400 to-yellow-400",
    logo: "/game-logos/gangbeasts.webp",
  },
  {
    name: "Pummel Party",
    gradient: "from-orange-300 to-pink-300",
    logo: "/game-logos/pummelparty.webp",
  },
  {
    name: "Operation Tango",
    gradient: "from-blue-500 to-yellow-400",
    logo: "/game-logos/operationtango.webp",
  },
  {
    name: "Survivors of the Dawn",
    gradient: "from-orange-500 to-cyan-500",
    logo: "/game-logos/survivorsofthedawn.webp",
  },
  {
    name: "Hunt: Showdown",
    gradient: "from-black to-red-600",
    logo: "/game-logos/huntshowdown.webp",
  },

  {
    name: "Mortal Kombat",
    gradient: "from-black to-rose-700",
    logo: "/game-logos/mortalkombat.webp",
  },
  {
    name: "PropHunter",
    gradient: "from-slate-700 to-yellow-400",
    logo: "/game-logos/prophunter.webp",
  },
  {
    name: "Ghost Exile",
    gradient: "from-indigo-900 to-slate-600",
    logo: "/game-logos/ghostexile.webp",
  },
  {
    name: "ASTRONEER",
    gradient: "from-sky-500 to-purple-400",
    logo: "/game-logos/astroneer.webp",
  },
  {
    name: "Russian Fishing 4",
    gradient: "from-teal-700 to-sky-400",
    logo: "/game-logos/russianfishing4.webp",
  },
  {
    name: "Ranch Simulator",
    gradient: "from-yellow-600 to-orange-400",
    logo: "/game-logos/ranchsimulator.webp",
  },
  {
    name: "Rock of Ages",
    gradient: "from-stone-500 to-yellow-300",
    logo: "/game-logos/rockofages.webp",
  },
  {
    name: "Party Club",
    gradient: "from-pink-500 to-amber-400",
    logo: "/game-logos/partyclub.webp",
  },
  {
    name: "Cities: Skylines",
    gradient: "from-cyan-600 to-blue-400",
    logo: "/game-logos/citiesskylines.webp",
  },
  {
    name: "Euro Truck Simulator 2",
    gradient: "from-gray-700 to-yellow-500",
    logo: "/game-logos/ets2.webp",
  },
  {
    name: "The Crew 2",
    gradient: "from-slate-900 to-red-500",
    logo: "/game-logos/thecrew2.webp",
  },
  {
    name: "Golf With Your Friends",
    gradient: "from-lime-500 to-emerald-400",
    logo: "/game-logos/golfwithyourfriends.webp",
  },
  // - - - - - -

  {
    name: "Red Dead Online",
    gradient: "from-red-800 to-yellow-600",
    logo: "/game-logos/rdr2.webp",
  },
  {
    name: "Fortnite",
    gradient: "from-purple-600 to-indigo-500",
    logo: "/game-logos/fortnite.webp",
  },
  {
    name: "Marvel Rivals",
    gradient: "from-indigo-600 to-pink-400",
    logo: "/game-logos/marvel-rivals.webp",
  },
  {
    name: "World of Warcraft",
    gradient: "from-amber-700 to-yellow-300",
    logo: "/game-logos/warcraft.webp",
  },
  {
    name: "War Thunder",
    gradient: "from-blue-900 to-gray-700",
    logo: "/game-logos/war-thunder.webp",
  },
  {
    name: "World of Tanks",
    gradient: "from-lime-600 to-emerald-400",
    logo: "/game-logos/world-of-tanks.webp",
  },
  {
    name: "World of Tanks Blitz",
    gradient: "from-slate-900 to-cyan-500",
    logo: "/game-logos/world-of-tanks-blitz.webp",
  },
  {
    name: "World of Warships",
    gradient: "from-teal-600 to-sky-400",
    logo: "/game-logos/world-of-warships.webp",
  },
  {
    name: "Path of Exile 2",
    gradient: "from-rose-700 to-zinc-800",
    logo: "/game-logos/path-of-exile2.webp",
  },
  {
    name: "Call of Duty: Warzone",
    gradient: "from-black to-red-600",
    logo: "/game-logos/call-of-duty-warzone.webp",
  },
  {
    name: "Delta Force",
    gradient: "from-slate-700 to-amber-500",
    logo: "/game-logos/delta-force.webp",
  },
  {
    name: "Dead by Daylight",
    gradient: "from-pink-700 to-rose-400",
    logo: "/game-logos/dead-by-daylight.webp",
  },
  {
    name: "Deadlock",
    gradient: "from-indigo-700 to-zinc-600",
    logo: "/game-logos/deadlock.webp",
  },
  {
    name: "Rainbow six: Siege",
    gradient: "from-gray-800 to-indigo-500",
    logo: "/game-logos/rainbow-six-siege.webp",
  },
  {
    name: "Team Fortress 2",
    gradient: "from-orange-600 to-lime-500",
    logo: "/game-logos/team-fortress2.webp",
  },
  {
    name: "Palworld",
    gradient: "from-emerald-500 to-yellow-400",
    logo: "/game-logos/palworld.webp",
  },
  {
    name: "Lost Ark",
    gradient: "from-teal-700 to-lime-300",
    logo: "/game-logos/lost-ark.webp",
  },
  {
    name: "R.E.P.O",
    gradient: "from-violet-600 to-fuchsia-400",
    logo: "/game-logos/repo.webp",
  },
  {
    name: "Roblox",
    gradient: "from-blue-700 to-green-300",
    logo: "/game-logos/roblox.webp",
  },
  {
    name: "Warface",
    gradient: "from-rose-500 to-slate-800",
    logo: "/game-logos/warface.webp",
  },
  {
    name: "Garry's Mod",
    gradient: "from-amber-500 to-emerald-300",
    logo: "/game-logos/garrys-mod.webp",
  },
  {
    name: "Crossout",
    gradient: "from-yellow-400 to-orange-400",
    logo: "/game-logos/crossout.webp",
  },
  {
    name: "Factorio",
    gradient: "from-cyan-700 to-blue-300",
    logo: "/game-logos/factorio.webp",
  },
  {
    name: "Enshrouded",
    gradient: "from-green-700 to-gray-600",
    logo: "/game-logos/enshrouded.webp",
  },
  {
    name: "Diablo 2: Resurrected",
    gradient: "from-slate-800 to-yellow-500",
    logo: "/game-logos/diablo2.webp",
  },
  {
    name: "Diablo 4",
    gradient: "from-gray-700 to-indigo-400",
    logo: "/game-logos/diablo4.webp",
  },
  {
    name: "Escape from Tarkov",
    gradient: "from-black to-emerald-500",
    logo: "/game-logos/escape-from-tarkov.webp",
  },
  {
    name: "Warcraft 3: Reforged",
    gradient: "from-slate-700 to-orange-600",
    logo: "/game-logos/warcraft3.webp",
  },
  {
    name: "Party Animals",
    gradient: "from-sky-500 to-lime-500",
    logo: "/game-logos/party-animals.webp",
  },
  {
    name: "Battlefield V",
    gradient: "from-blue-500 to-yellow-400",
    logo: "/game-logos/battlefieldv.webp",
  },
  {
    name: "Battlefield 2042",
    gradient: "from-gray-900 to-orange-300",
    logo: "/game-logos/battlefield2042.webp",
  },
  {
    name: "Black Desert",
    gradient: "from-indigo-900 to-blue-400",
    logo: "/game-logos/black-desert.webp",
  },
  {
    name: "Rocket League",
    gradient: "from-pink-400 to-violet-500",
    logo: "/game-logos/rocket-league.webp",
  },
  {
    name: "Fall Guys",
    gradient: "from-lime-300 to-green-500",
    logo: "/game-logos/fall-guys.webp",
  },
  {
    name: "Forza Horizon 4",
    gradient: "from-yellow-300 to-rose-500",
    logo: "/game-logos/forza-horizon4.webp",
  },
  {
    name: "Forza Horizon 5",
    gradient: "from-purple-500 to-sky-400",
    logo: "/game-logos/forza-horizon5.webp",
  },
  {
    name: "Stalcraft",
    gradient: "from-zinc-800 to-lime-400",
    logo: "/game-logos/stalcraft.webp",
  },
  {
    name: "Crab Game",
    gradient: "from-gray-900 to-pink-600",
    logo: "/game-logos/crab-game.webp",
  },
  {
    name: "Monster Hunter Wilds",
    gradient: "from-teal-800 to-indigo-300",
    logo: "/game-logos/monster-hunter-wilds.webp",
  },
  {
    name: "Arma 3",
    gradient: "from-black to-blue-700",
    logo: "/game-logos/arma3.webp",
  },
  {
    name: "ARK: The Survival Of The Fittest",
    gradient: "from-slate-900 to-red-500",
    logo: "/game-logos/ark-the-survival-of-the-fittest.webp",
  },
  {
    name: "EVE Online",
    gradient: "from-blue-900 to-cyan-400",
    logo: "/game-logos/eve-online.webp",
  },
  {
    name: "Call to Arms",
    gradient: "from-red-700 to-yellow-500",
    logo: "/game-logos/call-to-arms.webp",
  },
  {
    name: "Chained Together",
    gradient: "from-blue-600 to-purple-500",
    logo: "/game-logos/chained-together.webp",
  },
  {
    name: "Clone Drone in the Danger Zone",
    gradient: "from-rose-600 to-indigo-400",
    logo: "/game-logos/clone-drone-in-the-danger-zone.webp",
  },
  {
    name: "Company of Heroes",
    gradient: "from-teal-700 to-emerald-400",
    logo: "/game-logos/company-of-heroes.webp",
  },
  {
    name: "DEVOUR",
    gradient: "from-amber-800 to-red-500",
    logo: "/game-logos/devour.webp",
  },
  {
    name: "Far Cry 5",
    gradient: "from-cyan-500 to-sky-400",
    logo: "/game-logos/far-cry5.webp",
  },
  {
    name: "Goose Goose Duck",
    gradient: "from-yellow-400 to-lime-500",
    logo: "/game-logos/goose-goose-duck.webp",
  },
  {
    name: "Halo Infinite",
    gradient: "from-indigo-700 to-sky-600",
    logo: "/game-logos/halo-infinite.webp",
  },
  {
    name: "Heroes & Generals",
    gradient: "from-zinc-800 to-orange-500",
    logo: "/game-logos/heroes-and-generals.webp",
  },
  {
    name: "Just Cause 3",
    gradient: "from-lime-600 to-amber-400",
    logo: "/game-logos/just-cause3.webp",
  },
  {
    name: "Men of War",
    gradient: "from-blue-800 to-slate-500",
    logo: "/game-logos/men-of-war.webp",
  },
  {
    name: "Mini Royale",
    gradient: "from-sky-700 to-cyan-300",
    logo: "/game-logos/mini-royale.webp",
  },
  {
    name: "Mount & Blade II: Bannerlord",
    gradient: "from-emerald-500 to-yellow-400",
    logo: "/game-logos/mount-and-blade2-bannerlord.webp",
  },
  {
    name: "MudRunner",
    gradient: "from-gray-800 to-orange-400",
    logo: "/game-logos/mudrunner.webp",
  },
  {
    name: "Propnight",
    gradient: "from-pink-600 to-red-400",
    logo: "/game-logos/propnight.webp",
  },
  {
    name: "Sins of a Solar Empire: Rebellion",
    gradient: "from-slate-900 to-indigo-500",
    logo: "/game-logos/sins-of-a-solar-empire-rebellion.webp",
  },
  {
    name: "Total War",
    gradient: "from-orange-600 to-yellow-400",
    logo: "/game-logos/total-war.webp",
  },
  {
    name: "Titanfall 2",
    gradient: "from-zinc-700 to-blue-400",
    logo: "/game-logos/titanfall2.webp",
  },
  {
    name: "Super Bunny Man",
    gradient: "from-pink-500 to-amber-300",
    logo: "/game-logos/super-bunny-man.webp",
  },
  {
    name: "Stronghold Crusader",
    gradient: "from-yellow-700 to-red-300",
    logo: "/game-logos/stronghold-crusader.webp",
  },
  {
    name: "Spy Party",
    gradient: "from-slate-600 to-green-700",
    logo: "/game-logos/spy-party.webp",
  },

  // - - - - - -  - -!!
  {
    name: "Suspects: Mystery Mansion",
    gradient: "from-rose-600 to-violet-400",
    logo: "/game-logos/suspects.webp",
  },
  {
    name: "Paladins",
    gradient: "from-cyan-700 to-indigo-500",
    logo: "/game-logos/paladins.webp",
  },
  {
    name: "LOCKDOWN Protocol",
    gradient: "from-slate-800 to-red-500",
    logo: "/game-logos/lockdown-protocol.webp",
  },
  {
    name: "Voidtrain",
    gradient: "from-yellow-500 to-gray-600",
    logo: "/game-logos/voidtrain.webp",
  },
  {
    name: "The Planet Crafter",
    gradient: "from-sky-600 to-emerald-400",
    logo: "/game-logos/planet-crafter.webp",
  },
  {
    name: "SMITE",
    gradient: "from-orange-600 to-blue-600",
    logo: "/game-logos/smite.webp",
  },
  {
    name: "Ghost Watchers",
    gradient: "from-purple-900 to-gray-400",
    logo: "/game-logos/ghost-watchers.webp",
  },
  {
    name: "Hospital 666",
    gradient: "from-red-700 to-black",
    logo: "/game-logos/hospital-666.webp",
  },
  {
    name: "Liar's Bar",
    gradient: "from-yellow-700 to-red-400",
    logo: "/game-logos/liars-bar.webp",
  },
  {
    name: "Content Warning",
    gradient: "from-green-700 to-yellow-300",
    logo: "/game-logos/content-warning.webp",
  },
  {
    name: "Demonologist",
    gradient: "from-zinc-900 to-red-700",
    logo: "/game-logos/demonologist.webp",
  },
  {
    name: "Supermarket Together",
    gradient: "from-pink-400 to-lime-300",
    logo: "/game-logos/supermarket-together.webp",
  },
  {
    name: "Sunkenland",
    gradient: "from-teal-700 to-cyan-300",
    logo: "/game-logos/sunkenland.webp",
  },
  {
    name: "Stranded Deep",
    gradient: "from-blue-500 to-yellow-200",
    logo: "/game-logos/stranded-deep.webp",
  },
  {
    name: "ELDEN RING",
    gradient: "from-green-900 to-yellow-500",
    logo: "/game-logos/elden-ring.webp",
  },
  {
    name: "SnowRunner",
    gradient: "from-blue-800 to-white",
    logo: "/game-logos/snowrunner.webp",
  },
  {
    name: "Prison Life 2",
    gradient: "from-stone-600 to-orange-500",
    logo: "/game-logos/prison-life-2.webp",
  },
  {
    name: "Good Company",
    gradient: "from-emerald-600 to-amber-300",
    logo: "/game-logos/good-company.webp",
  },
]

export default games
