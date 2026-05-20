export interface PestInfo {
  name: string;
  description: string;
  habitat: string;
  category: 'insect' | 'rodent' | 'other';
}

export const pestLibrary: Record<string, PestInfo> = {
  amphipods: {
    name: "Amphipods",
    description: "Small crustaceans that are typically found in aquatic environments but can sometimes be found in damp areas around homes. They have a laterally compressed body and range from 1-20mm in size.",
    habitat: "Amphipods thrive in moist environments such as mulch beds, under rocks, leaf litter, and areas with poor drainage. They feed on decaying organic matter and are most active in humid conditions.",
    category: 'other'
  },
  ants: {
    name: "Ants",
    description: "Social insects that live in colonies ranging from dozens to millions of individuals. Common species in Charlotte include odorous house ants, carpenter ants, and fire ants. They range from 1/16 to 1/2 inch in length.",
    habitat: "Ants nest in soil, wood, walls, and under foundations. They enter homes through tiny cracks searching for food and water. Trails of ants indicate an established colony nearby, often outdoors but sometimes within wall voids or under floors.",
    category: 'insect'
  },
  bedbugs: {
    name: "Bed Bugs",
    description: "Small, reddish-brown parasitic insects that feed exclusively on blood. Adults are about 1/4 inch long, flat, and oval-shaped. They can survive months without feeding and are expert hitchhikers.",
    habitat: "Bed bugs hide in mattress seams, box springs, bed frames, headboards, furniture cracks, behind wallpaper, and in electrical outlets. They are most active at night and are attracted to body heat and carbon dioxide from sleeping humans.",
    category: 'insect'
  },
  beetles: {
    name: "Beetles",
    description: "Beetles are the largest group of insects with hard wing covers. Common household beetles include carpet beetles, powder post beetles, and ground beetles. Sizes vary from tiny (1/16 inch) to large (over 1 inch).",
    habitat: "Different beetle species occupy various habitats. Carpet beetles infest fabrics and stored products. Wood-boring beetles attack structural wood. Ground beetles live under stones, boards, and in mulch but may enter homes seeking shelter.",
    category: 'insect'
  },
  blackVineWeevil: {
    name: "Black Vine Weevil",
    description: "A flightless beetle about 1/2 inch long with a black body covered in small patches of yellow or brown scales. Adults feed on plant leaves creating characteristic notched edges.",
    habitat: "Black vine weevils are outdoor pests that damage ornamental plants, particularly rhododendrons and azaleas. Larvae feed on roots while adults feed on foliage. They hide in soil, mulch, and under plant debris during the day.",
    category: 'insect'
  },
  boxElderBugs: {
    name: "Box Elder Bugs",
    description: "Black bugs about 1/2 inch long with distinctive red or orange markings on their backs. They congregate in large numbers, especially in fall when seeking winter shelter.",
    habitat: "Box elder bugs feed on seeds from box elder, maple, and ash trees. They gather on sunny sides of buildings in fall and attempt to enter homes through cracks and crevices. They overwinter in wall voids and attics.",
    category: 'insect'
  },
  brownBandedCockroaches: {
    name: "Brown-Banded Cockroaches",
    description: "Small cockroaches (1/2 inch) with two light brown bands across their wings and body. Males can fly while females cannot. They are less dependent on moisture than other roach species.",
    habitat: "Brown-banded roaches prefer warm, dry locations and are often found higher up in rooms unlike other roaches. Common hiding spots include upper cabinets, behind picture frames, inside electronics, and in furniture. They spread throughout entire buildings.",
    category: 'insect'
  },
  caddisfly: {
    name: "Caddisfly",
    description: "Moth-like insects with two pairs of hairy wings that fold tent-like over their backs. Adults are 1/4 to 1 inch long and are attracted to lights. They do not bite or sting.",
    habitat: "Caddisfly larvae are aquatic and build protective cases from sand, gravel, or plant material. Adults emerge from lakes, ponds, and streams and are attracted to outdoor lights near water sources. They are harmless but can be nuisance pests in large numbers.",
    category: 'insect'
  },
  carpenterBees: {
    name: "Carpenter Bees",
    description: "Large bees (1/2 to 1 inch) that resemble bumble bees but have shiny, hairless black abdomens. Males are aggressive but cannot sting; females can sting but rarely do. They bore perfectly round 1/2 inch holes in wood.",
    habitat: "Carpenter bees nest in unpainted or weathered wood including decks, eaves, siding, fences, and outdoor furniture. They prefer softwoods and create tunnels up to 10 feet long where they lay eggs. Successive generations may expand existing tunnels.",
    category: 'insect'
  },
  centipede: {
    name: "Centipedes",
    description: "Elongated arthropods with many body segments, each bearing one pair of legs. House centipedes have 15 pairs of long, striped legs and can move very quickly. They are 1-6 inches long depending on species.",
    habitat: "Centipedes require moisture and hide in damp basements, bathrooms, closets, and under sinks. Outdoors they live under stones, boards, leaf litter, and in compost. They are predators that feed on insects, spiders, and other small arthropods.",
    category: 'other'
  },
  cheeseSkipper: {
    name: "Cheese Skipper",
    description: "Small flies about 1/8 inch long with a metallic blue-black or bronze appearance. Larvae are known for their jumping behavior, which gives them their name. They infest cured meats and aged cheeses.",
    habitat: "Cheese skippers breed in protein-rich foods including aged cheese, cured meats, fish, and animal carcasses. They can infest homes through contaminated food products. Larvae can 'skip' or jump several inches when disturbed.",
    category: 'insect'
  },
  cloverMites: {
    name: "Clover Mites",
    description: "Tiny reddish-brown mites smaller than a pinhead (less than 1/30 inch). They leave a red stain when crushed. Despite their small size, they invade homes in enormous numbers.",
    habitat: "Clover mites feed on grasses, clovers, and other plants. They migrate indoors in spring and fall, entering through tiny cracks. They prefer sunny sides of buildings and are most common around well-fertilized lawns. They do not bite or cause structural damage.",
    category: 'other'
  },
  cockroaches: {
    name: "Cockroaches",
    description: "Flat, oval insects with long antennae and six legs. Common species include German, American, Oriental, and brown-banded roaches. They range from 1/2 to 2 inches long and can spread diseases.",
    habitat: "Cockroaches prefer warm, moist environments with food access. They hide in cracks, crevices, wall voids, behind appliances, and in cabinets. They are nocturnal and scatter when lights are turned on. Their presence often indicates sanitation issues.",
    category: 'insect'
  },
  cottonRats: {
    name: "Cotton Rats",
    description: "Medium-sized rodents 5-7 inches long with coarse, grizzled fur. They have smaller ears and eyes compared to Norway rats. Cotton rats have a blunt nose and relatively short tail.",
    habitat: "Cotton rats prefer grassy and weedy areas with dense ground cover. They create runways through vegetation and rarely enter structures. They are more common in rural and suburban edges where grasslands meet developments.",
    category: 'rodent'
  },
  dangerousPests: {
    name: "Dangerous Pests",
    description: "This category includes venomous spiders (black widows, brown recluses), stinging insects (wasps, hornets, yellow jackets), disease-carrying pests (mosquitoes, ticks, rodents), and aggressive species that pose health risks.",
    habitat: "Dangerous pests occupy various habitats. Venomous spiders prefer dark, undisturbed areas. Stinging insects build nests in eaves, ground, and vegetation. Disease vectors breed near standing water or in overgrown areas. All require professional control.",
    category: 'other'
  },
  deerMice: {
    name: "Deer Mice",
    description: "Small mice 3-4 inches long with large eyes and ears. They have brown or gray backs with white undersides and feet. Their bi-colored tail is as long as their body. They can carry hantavirus.",
    habitat: "Deer mice prefer rural and suburban areas with fields and woods nearby. They nest in hollow trees, logs, and stumps outdoors but will enter homes, garages, and sheds in fall. They are excellent climbers and can access upper levels of buildings.",
    category: 'rodent'
  },
  dobsonfly: {
    name: "Dobsonfly",
    description: "Large insects with wingspans up to 5 inches. Males have enormous, curved mandibles that look threatening but are harmless. Females have smaller jaws but can deliver a painful bite. Both are attracted to lights.",
    habitat: "Dobsonfly larvae (hellgrammites) are aquatic predators living under rocks in clean, flowing streams. Adults emerge in late spring and summer, resting on vegetation near water during the day. They are attracted to outdoor lights near waterways.",
    category: 'insect'
  },
  fleas: {
    name: "Fleas",
    description: "Tiny wingless insects (1/16 inch) that are flattened side-to-side allowing them to move through fur or feathers. They are dark reddish-brown and can jump up to 8 inches vertically. They feed on blood and can transmit diseases.",
    habitat: "Fleas live on pets and in areas where pets rest including carpets, pet bedding, furniture, and cracks in floors. Eggs fall off pets and develop in protected areas. Infestations can persist in vacant homes if rodents or other wildlife have been present.",
    category: 'insect'
  },
  flyingPests: {
    name: "Flying Pests",
    description: "This category includes flies, mosquitoes, moths, wasps, bees, and other winged insects. They range from tiny gnats (1/16 inch) to large moths (several inches wingspan). Some bite, sting, or spread disease.",
    habitat: "Flying pests occupy diverse habitats. Flies breed in garbage, drains, and organic matter. Mosquitoes need standing water. Moths infest pantries or closets. Stinging insects build nests in various locations. Most are attracted to lights.",
    category: 'insect'
  },
  fruitFlies: {
    name: "Fruit Flies",
    description: "Tiny flies about 1/8 inch long with red eyes and tan to brown bodies. They have a distinctive slow, hovering flight pattern. Fruit flies can complete their lifecycle in just one week under ideal conditions.",
    habitat: "Fruit flies breed in fermenting fruits, vegetables, and organic material. Common sources include overripe produce, garbage disposals, drains, mop buckets, and recycling bins. They are also found near beer and wine. Even small amounts of organic matter support breeding.",
    category: 'insect'
  },
  germanCockroaches: {
    name: "German Cockroaches",
    description: "Small cockroaches (1/2 to 5/8 inch) that are light brown with two dark stripes behind the head. They are the most common cockroach in homes and the hardest to control. A single female can produce 30,000+ offspring in one year.",
    habitat: "German roaches prefer warm, humid areas near food and water. They infest kitchens and bathrooms, hiding in cabinets, behind appliances, in cracks and crevices. They are often brought into homes via grocery bags, boxes, and used appliances.",
    category: 'insect'
  },
  groundBeetle: {
    name: "Ground Beetles",
    description: "Dark-colored beetles ranging from 1/4 to 1 inch long. Most are black or dark brown with ridged wing covers. They are fast-moving predators with long legs. Most species cannot fly despite having wings.",
    habitat: "Ground beetles live under stones, logs, boards, and in leaf litter. They are beneficial predators that eat other insects. They may enter homes in large numbers when seeking shelter or following prey. They are active at night and hide during the day.",
    category: 'insect'
  },
  houseMice: {
    name: "House Mice",
    description: "Small rodents 2-4 inches long with large ears, small eyes, and a pointed nose. They are gray to brown with lighter undersides. Their droppings are small (1/4 inch) and rod-shaped with pointed ends.",
    habitat: "House mice live in close association with humans, nesting in walls, attics, cabinets, and stored items. They prefer areas near food sources and create nests from shredded paper, fabric, and insulation. They can squeeze through openings as small as 1/4 inch.",
    category: 'rodent'
  },
  jerusalemCricket: {
    name: "Jerusalem Cricket",
    description: "Large, bulky insects 1-2 inches long with oversized heads and powerful jaws. They are tan to brown with dark bands on the abdomen. Despite the name, they are not crickets and do not chirp.",
    habitat: "Jerusalem crickets live in loose soil, under rocks, boards, and in gardens. They are nocturnal and rarely seen. They can bite if handled but are not aggressive. They enter homes accidentally, usually in fall, and do not establish indoor populations.",
    category: 'insect'
  },
  ladybug: {
    name: "Ladybugs (Lady Beetles)",
    description: "Round, dome-shaped beetles 1/4 inch long, typically red or orange with black spots. Asian lady beetles are the most common home invaders and can be yellow, orange, or red with varying spot patterns.",
    habitat: "Ladybugs are beneficial predators that eat aphids and other soft-bodied insects outdoors. In fall, they gather in large numbers on sunny building sides and enter homes through small openings to overwinter in attics and wall voids.",
    category: 'insect'
  },
  leafFootedBug: {
    name: "Leaf-Footed Bugs",
    description: "Large bugs up to 3/4 inch long with a narrow body. They have leaf-like expansions on their hind legs. Most are brown or gray. They emit an unpleasant odor when disturbed, similar to stink bugs.",
    habitat: "Leaf-footed bugs feed on plant sap, particularly from developing fruit and seeds. They are outdoor pests that occasionally enter homes in fall seeking overwintering sites. They damage garden plants including tomatoes, beans, and tree fruits.",
    category: 'insect'
  },
  lice: {
    name: "Lice",
    description: "Tiny wingless insects (1/16 to 1/8 inch) that are pale to gray in color. There are three types affecting humans: head lice, body lice, and pubic lice. They cannot jump or fly and spread through direct contact.",
    habitat: "Lice are parasites that live on human hosts. Head lice infest the scalp and hair. Body lice live in clothing seams and move to skin to feed. Pubic lice infest coarse body hair. They cannot survive more than 24-48 hours off a human host.",
    category: 'other'
  },
  madagascarCockroaches: {
    name: "Madagascar Hissing Cockroaches",
    description: "Large cockroaches 2-3 inches long that are kept as pets. They are wingless with a brown to black color and make a distinctive hissing sound. They do not bite and are docile.",
    habitat: "Native to Madagascar, these roaches live on the forest floor. As pets, they require warm, humid environments with hiding places. Escaped individuals cannot establish outdoor populations in temperate climates and rarely survive indoors without proper conditions.",
    category: 'insect'
  },
  mayfly: {
    name: "Mayfly",
    description: "Delicate insects with two or three thread-like tails and large, transparent wings held upright when at rest. Adults are 1/4 to 1 inch long and do not feed. Mass emergences can number in millions.",
    habitat: "Mayfly nymphs are aquatic, living in streams, rivers, and lakes. Adults emerge in huge swarms, often creating thick clouds near lights. They live only 24-48 hours as adults and do not bite or sting. Their presence indicates good water quality.",
    category: 'insect'
  },
  mealMoths: {
    name: "Meal Moths (Indian Meal Moths)",
    description: "Small moths about 1/2 inch long with copper-colored outer wings and pale gray inner wings. Larvae are cream-colored caterpillars that spin silken webs in infested products. They are the most common pantry pest.",
    habitat: "Meal moths infest stored grains, flour, cereals, dried fruits, nuts, pet food, and bird seed. Larvae leave exit holes and webbing in packaging. They can complete development in 4-6 weeks, allowing rapid population growth in infested pantries.",
    category: 'insect'
  },
  millipedes: {
    name: "Millipedes",
    description: "Elongated arthropods with cylindrical bodies and many legs (two pairs per body segment). They are 1/2 to 1-1/2 inches long, dark brown to black, and curl up when disturbed. They can secrete a foul-smelling defensive fluid.",
    habitat: "Millipedes live in damp areas with decaying organic matter including mulch, leaf litter, under rocks and boards. They migrate indoors during wet periods or in fall. They are harmless scavengers that feed on decomposing plant material.",
    category: 'other'
  },
  moleCricket: {
    name: "Mole Crickets",
    description: "Large insects 1-1.5 inches long with enlarged, shovel-like front legs adapted for digging. They are brown and covered with fine, velvety hairs. They can fly and are attracted to lights.",
    habitat: "Mole crickets tunnel through soil in lawns, golf courses, and fields, feeding on grass roots and shoots. They create surface tunnels visible as raised ridges. They are most active at night and can cause significant lawn damage in southern states.",
    category: 'insect'
  },
  mosquitoes: {
    name: "Mosquitoes",
    description: "Small flies with long legs, narrow bodies, and needle-like mouthparts for piercing skin. Only females bite, requiring blood for egg development. They can transmit diseases including West Nile virus and Eastern Equine Encephalitis.",
    habitat: "Mosquitoes breed in standing water including birdbaths, clogged gutters, flower pots, tires, and storm drains. Different species prefer different water sources. Adults rest in vegetation during the day and are most active at dawn and dusk.",
    category: 'insect'
  },
  norwayRats: {
    name: "Norway Rats",
    description: "Large rodents 7-9 inches long with thick, heavy bodies and small eyes and ears. They are brown with scattered black hairs and gray to yellow-white undersides. Their tail is shorter than their body length.",
    habitat: "Norway rats burrow in soil along foundations, under concrete slabs, and in garbage. They prefer ground-level locations and rarely climb. They enter buildings through gaps as small as 1/2 inch and establish nests in basements, crawl spaces, and wall voids.",
    category: 'rodent'
  },
  orientalCockroaches: {
    name: "Oriental Cockroaches",
    description: "Large, dark brown to black cockroaches about 1 inch long. Females are wingless while males have short wings. They are slower-moving than other roach species and emit a strong, musty odor.",
    habitat: "Oriental roaches prefer cool, damp locations including basements, crawl spaces, sewers, and drains. They are often called 'water bugs' due to their moisture requirements. They enter homes through sewer pipes, drains, and gaps under doors.",
    category: 'insect'
  },
  pillBugs: {
    name: "Pill Bugs (Roly-Polies)",
    description: "Small (1/4 to 1/2 inch) crustaceans with segmented, oval bodies and seven pairs of legs. They are dark gray and can roll into a tight ball when disturbed. Despite the name, they are not insects.",
    habitat: "Pill bugs require moisture and live under rocks, boards, mulch, leaf litter, and flower pots. They feed on decaying organic matter. They may invade basements and crawl spaces during dry or wet periods but cannot survive long indoors.",
    category: 'other'
  },
  plasterBeetle: {
    name: "Plaster Beetles",
    description: "Tiny beetles (1/10 inch) that are dark brown to black. They have a distinctive clubbed antennae and a humped back. They are often found in new construction or recently plastered buildings.",
    habitat: "Plaster beetles feed on mold that grows on new plaster, drywall, and in humid conditions. They infest new homes during construction and remain until moisture levels normalize. They also infest water-damaged areas and spaces with high humidity.",
    category: 'insect'
  },
  rodents: {
    name: "Rodents",
    description: "Mammals with continuously growing incisors that must gnaw to keep teeth worn down. Common species include house mice, deer mice, Norway rats, and roof rats. They range from 3-10 inches in body length.",
    habitat: "Rodents adapt to various habitats but prefer areas with food, water, and shelter. They enter buildings through small openings, gnaw through materials, contaminate food with droppings and urine, and can cause structural damage and electrical fires.",
    category: 'rodent'
  },
  roofRats: {
    name: "Roof Rats",
    description: "Sleek rodents 6-8 inches long with large ears and eyes. They are brown to black with lighter undersides. Their tail is longer than their body, unlike Norway rats. Also called black rats or ship rats.",
    habitat: "Roof rats are excellent climbers that nest in upper parts of buildings including attics, rafters, and trees. They enter through gaps in eaves, vents, and utility lines. They prefer fruits and nuts but will eat any available food.",
    category: 'rodent'
  },
  silverfish: {
    name: "Silverfish",
    description: "Wingless, carrot-shaped insects about 1/2 inch long covered with silver-gray scales. They have three long tail filaments and two long antennae. They move in a fish-like swimming motion.",
    habitat: "Silverfish prefer high humidity and feed on carbohydrates including paper, glue, book bindings, wallpaper, fabrics, and cereals. They hide in cracks and crevices, emerging at night to feed. Common in bathrooms, kitchens, attics, and basements.",
    category: 'insect'
  },
  smokyBrownCockroaches: {
    name: "Smoky Brown Cockroaches",
    description: "Large cockroaches (1-1.5 inches) that are shiny dark brown to mahogany. Both sexes can fly. They are more common in the southeastern United States and require high moisture levels.",
    habitat: "Smoky brown roaches live in tree holes, woodpiles, mulch, and leaf litter outdoors. They enter homes through attics and eaves, preferring upper levels. They are strongly attracted to lights. They require moisture and often infest areas with water damage.",
    category: 'insect'
  },
  spiders: {
    name: "Spiders",
    description: "Eight-legged arachnids ranging from tiny (1/16 inch) to large (several inches including legs). Common species include house spiders, wolf spiders, black widows, and brown recluses. Most are harmless and beneficial.",
    habitat: "Spiders occupy all habitats from basements to attics. They build webs in corners, closets, and storage areas or hunt on the ground. They feed on insects and help control pest populations. Most prefer dark, undisturbed areas.",
    category: 'other'
  },
  stinkBugs: {
    name: "Stink Bugs",
    description: "Shield-shaped bugs about 3/4 inch long. Brown marmorated stink bugs are brown with alternating light and dark bands on antennae and legs. They emit a pungent odor when disturbed or crushed.",
    habitat: "Stink bugs feed on plant sap from fruits, vegetables, and ornamental plants. They enter homes in fall, seeking overwintering sites in attics, wall voids, and crawl spaces. They emerge in spring, sometimes in large numbers.",
    category: 'insect'
  },
  termites: {
    name: "Termites",
    description: "Soft-bodied insects 1/4 to 1/2 inch long that feed on cellulose in wood. Workers are pale, while reproductive swarmers have dark bodies and two pairs of equal-length wings. They cause billions in damage annually.",
    habitat: "Subterranean termites live in soil and build mud tubes to access wood above ground. They require moisture and contact with soil. They infest structural wood, causing hidden damage. Swarmers emerge in spring, indicating an established colony.",
    category: 'insect'
  },
  ticks: {
    name: "Ticks",
    description: "Blood-feeding arachnids ranging from pinhead-size when unfed to grape-size when engorged. Common species include deer ticks, lone star ticks, and dog ticks. They can transmit Lyme disease and other illnesses.",
    habitat: "Ticks wait on vegetation in wooded areas, tall grass, and brush for hosts to pass by. They do not jump or fly. After feeding, they drop off hosts. Indoors, they may be found where pets rest. They require high humidity to survive.",
    category: 'other'
  },
  weevils: {
    name: "Weevils",
    description: "Small beetles (1/8 to 1/4 inch) with elongated snouts. Common pantry weevils include rice weevils and granary weevils. They are reddish-brown to black and infest stored grains.",
    habitat: "Weevils infest whole grains including rice, wheat, corn, barley, and pasta. Females bore into kernels to lay eggs. Larvae develop inside grains, making detection difficult until adults emerge. They can penetrate packaging and spread rapidly.",
    category: 'insect'
  },
  yellowJackets: {
    name: "Yellow Jackets",
    description: "Aggressive wasps about 1/2 inch long with bright yellow and black stripes. They have smooth bodies allowing multiple stings. Colonies can reach thousands of workers by late summer.",
    habitat: "Yellow jackets build paper nests in ground cavities, wall voids, attics, and shrubs. They are scavengers attracted to sugary foods and proteins. They are most aggressive in fall when defending nests. Their stings can cause severe allergic reactions.",
    category: 'insect'
  }
};

export const pestCategories = {
  all: Object.keys(pestLibrary),
  insects: Object.keys(pestLibrary).filter(key => pestLibrary[key].category === 'insect'),
  rodents: Object.keys(pestLibrary).filter(key => pestLibrary[key].category === 'rodent'),
  other: Object.keys(pestLibrary).filter(key => pestLibrary[key].category === 'other')
};
