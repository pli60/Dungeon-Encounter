const fillers = {
	player: ["The ancient one", "The Maddened", "The anime Protagonist", "The villain", "The hero", "The world ender", "$player and $player", "$player, $player, and $player"],
	verbphrase1: ["entered", "walked into", "rolled into", "ran into", "jumped into", "dashed into"],
	weapon: ["swords", "axes", "maces", "hammers", "katanas", "shotguns", "excaliburs", "bows", "$weapon and $weapon"],
	name1: ["uo", "ee", "ea", "aa", "ie", "oe"],
	name2: ["gob", "cop", "rig", "wul", "fes", "kiz"],
	name3: ["ch", "sh", "th", "zh", "tch", "zch"],
	name: ["$name1$name2$name3", "$name1$name3$name2", "$name2$name1$name3", "$name2$name3$name1", "$name3$name2$name1", "$name3$name1$name2"],
	adj1: ["cautiously", "loudly", "mindlessly", "suspiciously", "confidently"],
	adj2: ["golden", "diamond", "black", "wooden", "stone", "silver"],
	adj3: ["borken", "cracked", "molded", "withered", "rusted", "demolished"],
	adj4: ["$adj3 $adj2", "$adj3 and $adj3 $adj2", "$adj3, $adj3, and $adj3 $adj2"]

};

const template = `$player $verbphrase1 the dungeon with $adj2 $weapon!
  
 As they $adj1 walked along the path down the $adj3 dungeon named $name, they noticed a $adj4 chest.

 Right after they opened the chest, an intense earthquake occured. They $adj1 grabbed the $adj3 $weapon in the chest and left the dungeon before it collapsed.
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
	let options = fillers[name];
	if (options) {
		return options[Math.floor(Math.random() * options.length)];
	} else {
		return `<UNKNOWN:${name}>`;
	}
}

function generate() {
	let story = template;
	while (story.match(slotPattern)) {
		story = story.replace(slotPattern, replacer);
	}

	/* global box */
	box.innerText = story;
}

/* global clicker */
clicker.onclick = generate;

generate();
