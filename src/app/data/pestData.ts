export interface PestPageData {
  slug: string;
  pest: string;
  pestPlural: string;
  heroHeadline: string;
  heroSub: string;
  intro: string;
  signs: { title: string; desc: string }[];
  risks: { title: string; desc: string }[];
  ncSpecies: { name: string; desc: string; threat: string }[];
  peakMonths: string;
  seasonNote: string;
  activityByMonth: number[];
  whyDiyFails: string[];
  treatment: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const pestPages: PestPageData[] = [
  {
    slug: 'mosquito-control-charlotte-nc',
    pest: 'Mosquito',
    pestPlural: 'Mosquitoes',
    heroHeadline: 'Mosquito Control Charlotte Metro & Lake Norman',
    heroSub: 'Stop mosquitoes from taking over your yard. Professional barrier treatments that actually work — backed by our 100% satisfaction guarantee.',
    intro: 'Charlotte and the Lake Norman region have some of the longest mosquito seasons in the Carolinas — active from early April through late October. Warm summers, abundant standing water, and mild winters create near-perfect conditions for mosquito populations to explode. Store-bought solutions mask the problem. Professional barrier treatment eliminates it.',
    signs: [
      { title: 'Bites at Dawn & Dusk', desc: 'Culex mosquitoes feed most aggressively at sunrise and sunset. Getting bitten in your own yard means the source is close.' },
      { title: 'Bites During the Day', desc: 'Asian Tiger Mosquitoes — the most aggressive species in Charlotte — bite all day long. Daytime bites mean you have a tiger mosquito problem specifically.' },
      { title: 'Standing Water on Property', desc: 'Any container holding even a tablespoon of water can produce hundreds of mosquitoes. Gutters, plant saucers, tarps, and kids\' toys are common culprits.' },
      { title: 'Heavy Activity Near Wooded Areas', desc: 'Mosquitoes rest in tall grass and dense vegetation during heat. Wooded lots and natural buffers common near Lake Norman harbor large resting populations.' },
    ],
    risks: [
      { title: 'West Nile Virus', desc: 'Transmitted by Culex mosquitoes, West Nile is the most commonly reported mosquito-borne disease in NC. Most cases are mild, but severe neurological illness is possible in vulnerable individuals.' },
      { title: 'Eastern Equine Encephalitis', desc: 'EEE is rare but serious — NC has documented cases. The virus causes brain inflammation and has a high fatality rate. No specific treatment exists.' },
      { title: 'Heartworm in Pets', desc: 'A single infected mosquito bite can transmit heartworm larvae to your dog or cat. Heartworm treatment is expensive and hard on pets — prevention starts in your yard.' },
      { title: 'Loss of Your Outdoor Space', desc: 'Heavy mosquito pressure drives families indoors. Evening gatherings, kids playing outside, and backyard time become unbearable — you lose the enjoyment of your own property.' },
    ],
    ncSpecies: [
      { name: 'Asian Tiger Mosquito (Aedes albopictus)', desc: 'The most aggressive mosquito in Charlotte. Identified by distinctive black-and-white striped legs. Active all day, not just dawn and dusk.', threat: 'Bites all day; potential Zika and dengue vector' },
      { name: 'Culex Mosquito (Culex pipiens)', desc: 'Most common mosquito in NC. Breeds prolifically in stagnant water and is most active at dusk and dawn.', threat: 'Primary West Nile Virus vector' },
      { name: 'Southern House Mosquito (Culex quinquefasciatus)', desc: 'Thrives in urban and suburban Charlotte areas. Often breeds in storm drains, neglected pools, and shallow standing water.', threat: 'West Nile Virus and St. Louis encephalitis' },
    ],
    peakMonths: 'April – October',
    seasonNote: 'Charlotte\'s mosquito season is one of the longest in the Carolinas. Populations surge after spring rains and peak in July–August when temperatures consistently exceed 80°F. Mild winters provide little natural die-off.',
    activityByMonth: [0, 0, 1, 4, 7, 9, 10, 10, 8, 5, 2, 0],
    whyDiyFails: [
      'Citronella candles repel mosquitoes within inches — not across a yard.',
      'Consumer foggers kill only the mosquitoes they directly contact and provide zero residual protection.',
      'Breeding sites are often hidden or off-property. Treating your yard without addressing sources is temporary at best.',
      'Big-box yard sprays break down in 24–48 hours. Professional products maintain residual activity for 3–4 weeks.',
    ],
    treatment: [
      { step: 'Property Assessment', desc: 'We identify all breeding sites, resting harborages, and high-activity zones on your property before any product is applied.' },
      { step: 'Breeding Site Elimination', desc: 'We address standing water and apply EPA-registered larvicide to water features that can\'t be emptied, stopping the next generation before it hatches.' },
      { step: 'Barrier Treatment', desc: 'We apply professional-grade microencapsulated insecticide to vegetation, shrub lines, tree trunks, and fence lines — the surfaces where mosquitoes rest between feedings.' },
      { step: 'Monthly Follow-Up Service', desc: 'Monthly treatment April–October maintains barrier protection and addresses new breeding sites as conditions change throughout the season.' },
    ],
    faqs: [
      { q: 'How long does mosquito treatment last?', a: 'Professional barrier treatments remain effective for 3–4 weeks. We recommend monthly service from April through October for continuous protection throughout Charlotte\'s mosquito season.' },
      { q: 'Is mosquito treatment safe for my kids and pets?', a: 'Yes. We use EPA-registered products safe for people and pets once dried — typically 30–45 minutes after application. We\'ll confirm the exact re-entry time for your property.' },
      { q: 'Will treatment eliminate 100% of mosquitoes?', a: 'No service can guarantee zero mosquitoes — new ones can fly in from neighboring properties. Our barrier treatment consistently reduces populations by 85–95%, which is the difference between an unusable yard and an enjoyable one.' },
      { q: 'Do you treat for Asian Tiger Mosquitoes specifically?', a: 'Yes. Our treatment targets all mosquito species in Charlotte, including Asian Tiger Mosquitoes, which require specific application techniques due to their daytime habits and resting locations.' },
      { q: 'Can you treat for a one-time event like a party?', a: 'Absolutely. We offer single-event treatments 24–48 hours before your event for maximum effectiveness. Many Lake Norman homeowners book event treatments for waterfront gatherings.' },
      { q: 'How soon can you come out?', a: 'Most properties are scheduled within 2–3 days. Same-week service is almost always available, Monday through Saturday, 8 AM–8 PM.' },
      { q: 'Do I need to be home during treatment?', a: 'No. As long as we have access to your yard, we can treat without you present. We\'ll notify you when treatment is complete and confirm the re-entry window.' },
    ],
  },

  {
    slug: 'ant-control-charlotte-nc',
    pest: 'Ant',
    pestPlural: 'Ants',
    heroHeadline: 'Ant Control Charlotte Metro & Mooresville, NC',
    heroSub: 'Ants in your kitchen, walls, or yard? We eliminate the colony — not just the workers you can see.',
    intro: 'Ants are the most common pest complaint in the Charlotte Metro area. The Southeast\'s warm climate supports multiple aggressive species year-round. What looks like a minor ant trail is usually the visible fraction of a colony that numbers in the hundreds of thousands. Killing workers with store-bought spray makes the problem worse by triggering the colony to split. Professional treatment eliminates the colony at the source.',
    signs: [
      { title: 'Trails Inside the Kitchen', desc: 'Ant trails along countertops, walls, or floors follow pheromone paths to a food or moisture source. The trail is the symptom — the nest is the problem.' },
      { title: 'Multiple Trails Outside Near Foundation', desc: 'Ant trails converging toward your foundation indicate active foraging from an established nearby colony preparing to move indoors.' },
      { title: 'Sawdust Piles Near Wood', desc: 'Carpenter ants don\'t eat wood — they excavate it. Fine sawdust (frass) near baseboards or window sills means carpenter ants are actively tunneling through your structure.' },
      { title: 'Dome-Shaped Mounds in the Yard', desc: 'Mounds with no visible entry hole at the top are the signature of fire ants — the most medically significant ant species in NC, capable of delivering dozens of simultaneous stings.' },
      { title: 'Ants Surging After Rain', desc: 'Heavy rain floods underground colonies, driving thousands of ants to seek higher ground — often inside your home. Sudden post-storm ant invasions mean the colony is in or near your foundation.' },
    ],
    risks: [
      { title: 'Carpenter Ant Structural Damage', desc: 'Carpenter ants hollow out wood to create nesting galleries. In Charlotte homes with moisture-prone crawl spaces, an untreated infestation can cause significant structural damage over months.' },
      { title: 'Fire Ant Medical Risk', desc: 'Fire ants attack in groups and sting simultaneously. Each sting delivers venom that causes intense burning and a white pustule. For individuals with allergies, fire ant stings can trigger anaphylaxis.' },
      { title: 'Food Contamination', desc: 'Ants travel through drains, garbage, and soil before walking across your food prep surfaces. They carry Salmonella and E. coli on their bodies.' },
    ],
    ncSpecies: [
      { name: 'Argentine Ant (Linepithema humile)', desc: 'The most common ant in Charlotte. Forms supercolonies with multiple queens spanning entire yards. Extremely difficult to control without professional treatment.', threat: 'Food contamination; splits when disturbed; supercolonies' },
      { name: 'Carpenter Ant (Camponotus spp.)', desc: 'Large black ants, 1/4"–1/2". Excavate wood to build nests, preferring damp wood in crawl spaces, window frames, and decks.', threat: 'Structural wood damage' },
      { name: 'Fire Ant (Solenopsis invicta)', desc: 'Invasive reddish-brown ants. Build dome-shaped mounds in open sunny areas. Highly aggressive when disturbed — sting repeatedly.', threat: 'Painful stings; anaphylaxis risk' },
      { name: 'Odorous House Ant (Tapinoma sessile)', desc: 'Small brown ants that emit a rotten coconut odor when crushed. Nest in walls and around moisture. Very common in Mooresville and Charlotte homes.', threat: 'Food contamination; resistant to DIY products' },
    ],
    peakMonths: 'March – October',
    seasonNote: 'Ant activity in Charlotte spikes in early spring as colonies expand and forage aggressively after winter. Argentine ants are worst after warm rains. Fire ants remain active nearly year-round in Mecklenburg and Iredell counties.',
    activityByMonth: [2, 2, 5, 8, 9, 9, 8, 8, 7, 6, 3, 2],
    whyDiyFails: [
      'Consumer sprays kill foragers but trigger "budding" in Argentine and odorous house ants — the colony splits and spreads to new locations.',
      'Bait products require correct placement and the right formulation for the species. Wrong bait leads to rejection by the colony.',
      'Over-the-counter products don\'t penetrate wall voids or crawl spaces where carpenter ant colonies establish.',
      'Fire ant mound treatments from big-box stores address visible mounds only. Colonies often relocate just a few feet away within days.',
    ],
    treatment: [
      { step: 'Species Identification', desc: 'Treatment strategy differs entirely by species. We identify exactly what ant you\'re dealing with before selecting any product or application method.' },
      { step: 'Exterior Non-Repellent Barrier', desc: 'We apply non-repellent residual insecticide to your foundation, entry points, and foraging trails. Ants pass through the treatment and carry it back to the colony — eliminating the source.' },
      { step: 'Interior Crack & Crevice Treatment', desc: 'For active interior infestations, we treat wall voids, baseboards, and plumbing penetrations with targeted bait or dust formulations that reach hidden colonies.' },
      { step: 'Yard & Mound Treatment', desc: 'Fire ant mounds and outdoor colony locations receive direct granular or liquid treatment across the full yard — not just visible mounds.' },
    ],
    faqs: [
      { q: 'Why do ants keep coming back after I spray?', a: 'Consumer repellent sprays kill visible ants but signal the colony to reroute foragers around the treated area. Professional non-repellent products are carried back to the nest, eliminating the colony at the source.' },
      { q: 'Are carpenter ants dangerous to my home?', a: 'Carpenter ants don\'t bite people unless directly handled, but they cause significant structural damage over time. Large black ants (1/4"–1/2") inside your home — especially near moisture — warrant immediate professional inspection.' },
      { q: 'How do I know if I have fire ants?', a: 'Fire ants build dome-shaped mounds in open sunny areas, typically 12–18 inches in diameter with no hole at the top. They are reddish-brown, 1/16"–1/5" long, and swarm aggressively when the mound is disturbed.' },
      { q: 'Will ants go away on their own?', a: 'No. Ant colonies are perennial — they don\'t die off in winter in Charlotte\'s climate. Without treatment, colonies grow larger each year. Argentine ant supercolonies can eventually encompass multiple neighboring properties.' },
      { q: 'How quickly does treatment work?', a: 'Non-repellent barrier treatments show visible reduction within 3–7 days as foragers carry product back to the colony. Full colony elimination takes 2–4 weeks. Fire ant mound treatments show results within 24–72 hours.' },
      { q: 'Is ant treatment safe around pets and kids?', a: 'Yes. We use EPA-registered products appropriate for homes with pets and children. We\'ll advise you on any temporary precautions — typically just keeping the area clear until treated surfaces are dry.' },
    ],
  },

  {
    slug: 'tick-control-charlotte-nc',
    pest: 'Tick',
    pestPlural: 'Ticks',
    heroHeadline: 'Tick Control Charlotte Metro & Lake Norman, NC',
    heroSub: 'Ticks in your yard put your family and pets at serious risk for Lyme disease and Rocky Mountain Spotted Fever. We eliminate them.',
    intro: 'The Charlotte Metro and Lake Norman regions are high-risk areas for tick exposure. Wooded suburbs, greenway access, and abundant deer populations create ideal conditions for three dangerous tick species. Tick-borne illnesses including Lyme disease and Rocky Mountain Spotted Fever are both reportable in North Carolina — and both are preventable with proper yard management and professional treatment.',
    signs: [
      { title: 'Finding Ticks on Pets', desc: 'Dogs and cats pick up ticks on every outdoor excursion. Repeatedly finding ticks on your pets means ticks are established in your yard, not just passing through.' },
      { title: 'Finding Ticks on Family Members', desc: 'Post-outdoor tick checks that turn up attached or crawling ticks indicate a significant yard population that won\'t resolve without treatment.' },
      { title: 'Deer Activity Near Your Property', desc: 'White-tailed deer are the primary host for adult black-legged ticks. Regular deer sightings, tracks, or droppings near your yard are a reliable indicator of high tick pressure.' },
      { title: 'Wooded Edges or Tall Grass', desc: 'Ticks don\'t jump or fly — they quest from vegetation tips at the edge of woods, trails, and unmowed grass. Properties bordered by natural areas carry significantly higher tick populations.' },
    ],
    risks: [
      { title: 'Lyme Disease', desc: 'Transmitted by black-legged (deer) ticks, Lyme disease causes fatigue, joint pain, and neurological symptoms. NC cases have increased steadily. Early treatment is critical — late-stage Lyme can cause chronic debilitating illness.' },
      { title: 'Rocky Mountain Spotted Fever', desc: 'RMSF is the most deadly tick-borne disease in the US and NC is a high-incidence state. Transmitted by the American dog tick, RMSF can be fatal if not treated within the first 5 days of symptom onset.' },
      { title: 'Alpha-Gal Syndrome', desc: 'A growing health concern in NC — Lone Star tick bites trigger a lifelong red meat allergy. Cases in the Charlotte region have increased as Lone Star tick populations expand into the Piedmont.' },
    ],
    ncSpecies: [
      { name: 'Black-Legged (Deer) Tick (Ixodes scapularis)', desc: 'Sesame seed-sized, reddish-brown. Must be attached 36–48 hours to transmit Lyme disease. Most active April–June and October–November.', threat: 'Lyme disease, anaplasmosis, babesiosis' },
      { name: 'American Dog Tick (Dermacentor variabilis)', desc: 'Larger tick with white-patterned body. Most common in open grassy areas and trails. Peak activity March through August in the Charlotte area.', threat: 'Rocky Mountain Spotted Fever, tularemia' },
      { name: 'Lone Star Tick (Amblyomma americanum)', desc: 'Identified by a single white spot on the female\'s back. Extremely aggressive — all three life stages bite humans. Expanding rapidly across the Charlotte region.', threat: 'Alpha-gal syndrome, ehrlichiosis' },
    ],
    peakMonths: 'April – June and August – November',
    seasonNote: 'NC has two peak tick seasons: spring (April–June) when nymphs are active — the life stage most likely to transmit disease due to their tiny size — and fall (August–November) when adults seek large hosts. Mild winters mean ticks can remain active on warm days year-round in Charlotte.',
    activityByMonth: [1, 1, 3, 8, 9, 7, 5, 7, 9, 8, 5, 2],
    whyDiyFails: [
      'DEET repellents protect the person wearing them — they don\'t reduce the tick population living in your yard.',
      'Permethrin clothing sprays are effective for hikers but address individual exposure, not the source population.',
      'Removing leaf litter and trimming brush helps reduce habitat but doesn\'t eliminate established tick populations.',
      'Consumer tick sprays require full coverage of vegetation edges and leaf litter — difficult to apply correctly without professional equipment.',
    ],
    treatment: [
      { step: 'Habitat Assessment', desc: 'We walk your property and identify high-risk zones: wood edges, leaf accumulation, stone walls, ornamental plantings, and deer pathways.' },
      { step: 'Perimeter Acaricide Treatment', desc: 'We apply professional tick-specific pesticide to vegetation, ground cover, and leaf litter at wood edges and transition zones where ticks concentrate.' },
      { step: 'Lawn & Open Area Treatment', desc: 'High-pressure application to lawn areas and ornamental beds creates a treated buffer around the spaces your family and pets use most.' },
      { step: 'Scheduled Retreatment', desc: 'Monthly service April through November maintains protection through both peak tick seasons, with adjustments based on observed activity.' },
    ],
    faqs: [
      { q: 'Can tick treatment eliminate all ticks in my yard?', a: 'Professional treatment reduces tick populations by 85–90%. Complete elimination isn\'t possible if deer continue introducing ticks from neighboring areas, but treated yards carry a fraction of the burden of untreated properties.' },
      { q: 'How soon is it safe after treatment for my kids and pets?', a: 'Treated areas are safe once dry — typically 30–60 minutes after application. We\'ll confirm the exact re-entry window for your specific treatment.' },
      { q: 'My dog is on tick prevention — do I still need yard treatment?', a: 'Yes. Prescription tick preventatives protect your pet from ticks that attach to them — they don\'t reduce the population in your yard. They also provide no protection for humans in the yard.' },
      { q: 'What months should I treat for ticks?', a: 'We recommend starting in April and treating monthly through November to cover both peak seasons. Heavy deer pressure or wooded borders may warrant year-round service.' },
      { q: 'How do I safely remove an attached tick?', a: 'Use fine-tipped tweezers and grasp the tick as close to the skin as possible. Pull straight up with steady, even pressure. Never twist. Clean the bite area with rubbing alcohol. Save the tick in a sealed bag for identification if symptoms develop.' },
      { q: 'Do you treat ticks as part of general pest control?', a: 'Tick control is a targeted service using acaricides applied specifically to tick harborage areas. It can be scheduled standalone or bundled with mosquito control and general pest service for comprehensive protection.' },
    ],
  },

  {
    slug: 'cockroach-control-charlotte-nc',
    pest: 'Cockroach',
    pestPlural: 'Cockroaches',
    heroHeadline: 'Cockroach Control Charlotte Metro & Mooresville, NC',
    heroSub: 'One roach means hundreds more are hiding. We eliminate cockroach infestations completely — including the ones you can\'t see.',
    intro: 'Cockroaches are among the most resilient and difficult pests to control in the Charlotte Metro area. The Southeast\'s heat and humidity create year-round conditions, and finding a cockroach during the day is a serious warning sign — they\'re nocturnal, and daytime sightings occur when populations are so large that competition for space drives them into the open. A single German cockroach female can produce over 30,000 descendants in a year.',
    signs: [
      { title: 'Roaches Visible During Daylight', desc: 'Cockroaches are nocturnal. A daytime sighting almost always indicates a significant, established infestation where overnight hiding space has run out.' },
      { title: 'Black Pepper-Like Droppings Near Appliances', desc: 'Cockroach feces resemble ground black pepper behind the refrigerator, under the stove, or in cabinet corners. Concentrations indicate active harborage nearby.' },
      { title: 'Musty or Oily Odor in Kitchen', desc: 'Large infestations produce a distinctive musty, oily odor from aggregation pheromones. If you notice this smell in a kitchen or bathroom, the infestation is already significant.' },
      { title: 'Egg Cases in Pantry or Cabinets', desc: 'Brown capsule-shaped egg cases (1/3" long) can contain up to 50 eggs each. Finding them in pantries or under appliances confirms active reproduction.' },
      { title: 'Scatter When You Turn on the Kitchen Light at Night', desc: 'Flipping on the light and watching roaches scatter across the floor is the most common first sign of a German cockroach infestation — and a strong signal that population is already large.' },
    ],
    risks: [
      { title: 'Asthma & Allergy Triggers', desc: 'Cockroach allergens — shed skins, feces, and saliva — are a leading trigger for asthma attacks, particularly in children. The CDC links cockroach infestations directly to increased asthma hospitalization rates.' },
      { title: 'Disease Transmission', desc: 'Cockroaches carry 33 different bacteria (including Salmonella and E. coli), 6 parasitic worms, and at least 7 human pathogens. They contaminate every surface they touch during nighttime foraging.' },
      { title: 'Explosive Reproduction', desc: 'A single female German cockroach can produce over 30,000 descendants in a year. What begins as a handful of roaches becomes an overwhelming infestation within weeks. Early action is dramatically more effective than late treatment.' },
    ],
    ncSpecies: [
      { name: 'German Cockroach (Blattella germanica)', desc: 'Small (1/2"–5/8"), tan with two dark stripes on the pronotum. The hardest species to control — infests kitchens and bathrooms, reproduces explosively, and rapidly develops resistance to consumer products.', threat: 'Hardest to eliminate; highest reproduction rate; asthma triggers' },
      { name: 'American Cockroach (Periplaneta americana)', desc: 'Large (1.5"–2"), reddish-brown — the classic "water bug." Enters through drains, utility penetrations, and foundation cracks. Common in Charlotte basements and crawl spaces.', threat: 'Disease transmission; allergens; unsettling size' },
      { name: 'Smoky Brown Cockroach (Periplaneta fuliginosa)', desc: 'Medium-large, uniformly dark brown. Extremely common in NC and the Southeast. Enters through attic vents, weep holes, and soffit gaps.', threat: 'Disease; allergens; very common in Charlotte area' },
    ],
    peakMonths: 'Year-Round (Peak: May – September)',
    seasonNote: 'German cockroaches are a year-round indoor problem completely unaffected by outdoor seasons. American and Smoky Brown cockroaches increase intrusion attempts in hot summer months and again in fall as outdoor temperatures drop.',
    activityByMonth: [5, 5, 6, 7, 9, 10, 10, 10, 9, 7, 6, 5],
    whyDiyFails: [
      'German cockroaches develop insecticide resistance within generations — the same OTC product becomes ineffective after repeated use.',
      'Roach bombs push cockroaches deeper into wall voids, temporarily reducing visible insects while the infestation continues to grow hidden.',
      'Consumer gel baits can work — but placement, quantity, and product selection are all critical. Wrong application leads to bait rejection.',
      'Egg cases are resistant to most insecticides. Killing adults without addressing eggs means the population rebounds completely within weeks.',
    ],
    treatment: [
      { step: 'Inspection & Species ID', desc: 'Species determines strategy entirely. German cockroaches require intensive interior bait application. American and Smoky Brown roaches require exterior sealing plus targeted interior treatment.' },
      { step: 'Crack & Crevice Bait Application', desc: 'We apply professional-grade gel bait and insect growth regulator (IGR) to harborage areas: under appliances, inside cabinets, around plumbing penetrations, and along wall-floor junctions.' },
      { step: 'Void Treatments', desc: 'Wall voids and under-cabinet spaces receive dust formulations that remain active for months, eliminating roaches that move through these areas between visits.' },
      { step: 'Exterior Sealing & Barrier', desc: 'We identify and treat exterior entry points — drain penetrations, weep holes, utility entries — stopping outdoor species from re-entering the structure.' },
      { step: 'Scheduled Follow-Up', desc: 'A follow-up at 2–4 weeks confirms elimination and retreats as needed. German cockroach infestations typically require 2–3 visits for complete elimination.' },
    ],
    faqs: [
      { q: 'I keep a clean house — why do I have cockroaches?', a: 'Cleanliness reduces food sources but doesn\'t prevent infestation. Cockroaches enter through packaging, grocery bags, used appliances, and plumbing gaps. Even the tidiest Charlotte homes get cockroaches. German cockroaches spread through shared walls in multi-unit buildings regardless of individual unit cleanliness.' },
      { q: 'How fast will treatment work?', a: 'You\'ll see significant reduction in 3–5 days. Dead cockroaches are normal and expected — they indicate the bait is working. Full elimination of a German cockroach infestation typically takes 2–3 treatment visits over 4–6 weeks.' },
      { q: 'Are cockroach treatments safe in food prep areas?', a: 'Yes. Gel bait is placed in cracks and crevices away from exposed food surfaces. Treated areas can be used immediately. We\'ll provide specific guidance for your kitchen during the visit.' },
      { q: 'Can cockroaches come back after treatment?', a: 'Without addressing entry points, re-infestation is possible. Our treatment includes identifying likely entry points. Quarterly pest control prevents re-establishment and catches new introductions early.' },
      { q: 'I only see roaches at night — is that still serious?', a: 'Yes. Nocturnal behavior is normal, but don\'t underestimate the population. One adult female German cockroach visible at night may represent a hidden colony of hundreds. Early treatment is far easier than addressing a mature infestation.' },
    ],
  },

  {
    slug: 'spider-control-charlotte-nc',
    pest: 'Spider',
    pestPlural: 'Spiders',
    heroHeadline: 'Spider Control Charlotte Metro & Mooresville, NC',
    heroSub: 'Black widows are common in the Charlotte area. We eliminate dangerous spiders and the insect populations that bring them inside.',
    intro: 'Charlotte and the Lake Norman area are home to several dozen spider species, two of which — the Black Widow and the Brown Recluse — pose genuine medical risk. Most spiders are benign, but an infestation of any species inside your home indicates high insect activity (their food source), which often points to broader pest pressure. Selke treats both the spiders and the insects that sustain them.',
    signs: [
      { title: 'Webs in Corners and Window Frames', desc: 'Multiple webs in undisturbed areas like basement corners, garage ceiling angles, and window frames indicate an established population, not just wandering individuals.' },
      { title: 'Egg Sacs in Sheltered Areas', desc: 'Papery silk egg sacs in closets, under furniture, or in storage areas can contain dozens to hundreds of spiderlings. A single egg sac represents a significant future infestation.' },
      { title: 'Regular Sightings in Garage or Basement', desc: 'Garages and unfinished basements are prime spider habitat — dark, undisturbed, with abundant insect prey. Regular sightings mean a population, not individual wanderers.' },
      { title: 'Shiny Black Spider with Red Marking', desc: 'A shiny black spider with a red hourglass on the underside of its abdomen is a Black Widow — common in the Charlotte area and medically significant. Do not attempt to handle or remove it yourself.' },
    ],
    risks: [
      { title: 'Black Widow Envenomation', desc: 'Black Widows are common throughout the Charlotte Metro — found in garages, woodpiles, and undisturbed storage. Their neurotoxic venom causes muscle pain, cramping, nausea, and can be life-threatening for children and elderly individuals.' },
      { title: 'Brown Recluse Bites', desc: 'Brown Recluse spiders do occur in Charlotte, particularly in undisturbed crawl spaces and storage areas. Their cytotoxic venom can cause necrotic skin lesions requiring medical treatment.' },
      { title: 'Egg Sac Population Explosion', desc: 'A single egg sac can contain 250–300 eggs. Multiple egg sacs in a home or garage mean a fall population explosion is coming when they hatch simultaneously.' },
    ],
    ncSpecies: [
      { name: 'Black Widow (Latrodectus mactans)', desc: 'Shiny jet black with a red hourglass on the abdomen. 1.5" leg span. Found in garages, woodpiles, under outdoor furniture, and in storage areas throughout the Charlotte Metro.', threat: 'Medically significant venom; professional treatment required' },
      { name: 'Wolf Spider (Lycosidae family)', desc: 'Large (up to 1"), hairy, brown-gray patterned. Fast-moving ground hunters that don\'t build webs. Commonly seen running across floors in fall. Venomous but rarely dangerous to healthy adults.', threat: 'Startling appearance; mild bite if handled' },
      { name: 'Cellar Spider (Pholcus phalangioides)', desc: 'The classic "daddy long-legs." Builds loose, messy webs in basement corners. Completely harmless, but heavy webbing indicates high insect activity nearby.', threat: 'None — benign; webs signal broader pest activity' },
    ],
    peakMonths: 'August – November',
    seasonNote: 'Spider populations become most visible in late summer and fall as mature males roam seeking mates and both spiders and their prey insects move indoors ahead of cooler temperatures. Black Widows are most active and visible May through September.',
    activityByMonth: [3, 3, 4, 5, 6, 7, 7, 8, 9, 9, 7, 4],
    whyDiyFails: [
      'Consumer spider sprays have no residual effect on surfaces — spiders hold their bodies off surfaces and avoid direct contact with treated areas.',
      'Killing individual spiders doesn\'t address the insect food source driving the population into your home.',
      'Sticky traps capture individual spiders but can\'t scale to population control.',
      'Web removal without treatment causes spiders to rebuild in the exact same location within days.',
    ],
    treatment: [
      { step: 'Full Dewebbing', desc: 'We remove all visible webs from the exterior and interior, eliminating existing harborage and egg sacs before they hatch.' },
      { step: 'Perimeter Spray', desc: 'Residual insecticide applied to the foundation, eaves, window frames, and entry points kills spiders that contact treated surfaces over the following weeks.' },
      { step: 'Interior Crack & Crevice Treatment', desc: 'Targeted application to garage corners, basement perimeter, and storage areas where Black Widows and wolf spiders establish.' },
      { step: 'Insect Source Reduction', desc: 'We treat the insects that sustain spider populations. Reducing the food source is as important as direct spider treatment for long-term control.' },
    ],
    faqs: [
      { q: 'How do I know if I have Black Widows?', a: 'Black Widows are shiny jet black with a round abdomen and a red or orange hourglass on the underside. They build irregular, tangled webs close to the ground — in garage corners, under outdoor furniture, and around woodpiles. If you see this spider, don\'t attempt removal. Call us.' },
      { q: 'Are Brown Recluse spiders common in Charlotte?', a: 'Brown Recluse spiders are at the edge of their range in Charlotte — less common than their reputation suggests, but they do occur in imported goods, storage boxes, and crawl spaces. Many local bites attributed to Brown Recluse are actually other species. If in doubt, capture the spider carefully and we can help identify it.' },
      { q: 'Why do I suddenly have so many spiders in fall?', a: 'In late summer and fall, male spiders mature and roam to find mates (making them more visible), and both spiders and prey insects move inside to escape cooler temperatures. Fall spider invasions are normal but controllable with professional treatment.' },
      { q: 'How often should I have spider treatment?', a: 'Quarterly pest control includes dewebbing and perimeter treatment that keeps spider populations controlled year-round. Significant Black Widow presence warrants a targeted service prior to your regular quarterly visit.' },
    ],
  },

  {
    slug: 'wasp-control-charlotte-nc',
    pest: 'Wasp',
    pestPlural: 'Wasps & Stinging Insects',
    heroHeadline: 'Wasp & Stinging Insect Control Charlotte Metro, NC',
    heroSub: 'Yellow jackets, hornets, and paper wasps are aggressive and dangerous. We eliminate nests safely — including underground colonies.',
    intro: 'Stinging insects are responsible for more deaths annually in the US than any other venomous animal — not because individual stings are usually fatal, but because an estimated 2 million Americans have venom allergies severe enough to cause anaphylaxis. In Charlotte\'s summer months, Yellow Jackets, Bald-Faced Hornets, and Paper Wasps are territorial and highly aggressive. Nest removal is not a DIY project — disturbing a nest without proper protection results in multiple simultaneous stings.',
    signs: [
      { title: 'Visible Nest on Structure', desc: 'Gray papery nests under eaves, in attic vents, or attached to deck framing are Paper Wasp or Bald-Faced Hornet colonies. Do not disturb — colonies can contain hundreds of aggressive defenders.' },
      { title: 'Heavy Traffic Near a Ground Opening', desc: 'Wasps flying in and out of a ground hole or void — under a deck, in the lawn, or near a railroad tie — indicate a Yellow Jacket colony that can reach 1,000–5,000 workers by late summer.' },
      { title: 'Wasps Appearing Inside the Home', desc: 'Multiple wasps appearing inside from no obvious source indicate a nest inside a wall void or attic space. This requires professional treatment before the colony grows larger.' },
      { title: 'Aggressive Behavior Near a Specific Area', desc: 'If wasps dive-bomb you in a particular part of your yard, you\'re near their nest. Proximity to the nest triggers defensive behavior even without contact.' },
    ],
    risks: [
      { title: 'Anaphylactic Shock', desc: 'An estimated 2 million Americans are severely allergic to wasp venom. Anaphylaxis develops in minutes and is life-threatening without immediate epinephrine. Many people discover this allergy only during a serious sting event.' },
      { title: 'Multiple Simultaneous Stings', desc: 'Unlike honeybees, Yellow Jackets and wasps sting repeatedly. A disturbed colony releases alarm pheromones that trigger all nearby workers to attack simultaneously — resulting in dozens of stings before escape is possible.' },
      { title: 'Structural Nests in Wall Voids', desc: 'Colonies in wall voids can expand to thousands of insects over a summer. Remnant nests attract other insects and occasionally rodents. Colonies not eliminated in season continue growing.' },
    ],
    ncSpecies: [
      { name: 'Yellow Jacket (Vespula spp.)', desc: 'The most dangerous stinging insect in NC. Build underground or void nests. Highly aggressive late summer when colonies peak at 1,000–5,000 workers. Most "bee stings" at outdoor events are actually Yellow Jackets.', threat: 'Extreme aggression; multiple stings; anaphylaxis risk' },
      { name: 'Bald-Faced Hornet (Dolichovespula maculata)', desc: 'Large black-and-white stinging insect that builds football-sized gray paper nests in trees, shrubs, and on structures. Colonies reach 400–700 workers. Extremely aggressive near the nest.', threat: 'Very aggressive nest defense; multiple simultaneous stings' },
      { name: 'Paper Wasp (Polistes spp.)', desc: 'Build open umbrella-shaped nests under eaves, in gutters, and on deck framing. Less aggressive than Yellow Jackets but will sting when threatened. Extremely common in the Charlotte Metro.', threat: 'Painful stings; multiplies quickly through spring' },
    ],
    peakMonths: 'June – October (Worst: August – September)',
    seasonNote: 'Stinging insect colonies begin with a single overwintering queen in spring. By midsummer, Yellow Jacket colonies can contain thousands of workers at maximum aggression. The highest-risk period is August through October when colonies are at peak size.',
    activityByMonth: [0, 0, 1, 3, 6, 8, 9, 10, 10, 7, 2, 0],
    whyDiyFails: [
      'Consumer wasp sprays require getting close enough to trigger a defensive response before you can retreat to a safe distance.',
      'Underground Yellow Jacket nests are often larger than they appear. Partial treatment with foam can split the colony or redirect it into a wall void.',
      'Aerosol products don\'t penetrate large paper nests deeply enough to reach the queen and all gallery workers.',
      'Attempting nest removal without appropriate protective equipment results in stings — multiple simultaneous stings are dangerous for anyone, not just those with venom allergies.',
    ],
    treatment: [
      { step: 'Nest Location & Assessment', desc: 'We safely locate all nests — including underground colonies that aren\'t immediately visible — and identify the species before any treatment approach is selected.' },
      { step: 'Professional Product Application', desc: 'Using professional-grade residual and contact insecticides with appropriate protective equipment, we treat nests directly and thoroughly, reaching the queen and all workers.' },
      { step: 'Nest Removal', desc: 'Where safe and accessible, we remove the physical nest structure after colony elimination to prevent use by other insects and reduce future attraction to the same site.' },
      { step: 'Perimeter Deterrence', desc: 'Residual deterrent treatment to common nesting sites — eave lines, deck frames, play equipment — discourages re-nesting through the remainder of the season.' },
    ],
    faqs: [
      { q: 'How do I tell a Yellow Jacket from a bee?', a: 'Yellow Jackets are shiny, smooth, and black-and-yellow — roughly 1/2" long. Bees are fuzzy and rounder. Yellow Jackets are responsible for most "bee stings" at outdoor events, cookouts, and near trash cans. If it\'s smooth and aggressive near food, it\'s almost certainly a Yellow Jacket.' },
      { q: 'Is it dangerous to remove a Yellow Jacket nest myself?', a: 'Yes. Underground colonies can contain thousands of workers, all capable of stinging repeatedly. Disturbing the nest without proper protection commonly results in dozens of stings before you can escape the area. Professional treatment is strongly recommended.' },
      { q: 'What should I do if I find a nest?', a: 'Don\'t disturb it. Keep children and pets away and call us. The longer it\'s left untouched, the larger the colony grows — but attempting removal without proper equipment is more dangerous than waiting for professional service.' },
      { q: 'Do you treat honeybees?', a: 'We don\'t exterminate honeybees — they\'re vital pollinators. For honeybee colonies in structures, we can recommend local beekeepers who perform live extractions. We do treat Yellow Jackets, wasps, and hornets that pose a direct safety risk.' },
      { q: 'Will the wasps come back after nest removal?', a: 'A fully treated and removed colony won\'t rebuild that season. New queens from other colonies may attempt to nest in previously used sites the following spring. Early-season perimeter treatment significantly reduces this.' },
    ],
  },

  {
    slug: 'flea-control-charlotte-nc',
    pest: 'Flea',
    pestPlural: 'Fleas',
    heroHeadline: 'Flea Control Charlotte Metro & Lake Norman, NC',
    heroSub: 'Charlotte\'s mild winters mean fleas survive year-round outdoors. One female flea becomes 250,000 in a month without treatment.',
    intro: 'Charlotte homeowners face flea problems that persist well beyond summer. The area\'s mild winters allow fleas to survive outdoors year-round in protected microenvironments, and indoor populations face no seasonal pressure at all. A flea infestation inside your home means the full flea life cycle — egg, larva, pupa, adult — is established in your carpet and furniture. Adult fleas are only 10% of the total population; the other 90% are invisible eggs, larvae, and pupae in your flooring.',
    signs: [
      { title: 'Pets Scratching Excessively', desc: 'Frequent scratching, biting at the base of the tail, or hair loss around the hindquarters is a primary flea indicator in dogs and cats. Even one flea causes intense itching in allergic pets.' },
      { title: 'Bites on Ankles and Lower Legs', desc: 'Flea bites on humans cluster around the ankles and lower legs — where fleas jump from carpeting to find a host. Small red bites in clusters of 2–3 are characteristic.' },
      { title: '"Flea Dirt" on Pet Bedding', desc: 'Flea feces looks like tiny black specks on bedding or skin. Place some on a damp white paper towel — if it turns red-brown, it\'s flea dirt (dried blood), confirming an active infestation.' },
      { title: 'Fleas Jumping in Carpet', desc: 'Walking through carpet and seeing tiny insects jumping at leg level confirms an established infestation. Walk through wearing white socks — fleas show clearly against the white fabric.' },
    ],
    risks: [
      { title: 'Tapeworm Transmission', desc: 'Dogs and cats ingest fleas during grooming. The most common tapeworm (Dipylidium caninum) is transmitted exclusively through flea ingestion. Children in close contact with infected pets can also become infected.' },
      { title: 'Flea Allergy Dermatitis', desc: 'Many pets are allergic to flea saliva. A single bite triggers intense itching and skin inflammation, leading to self-trauma and secondary infection — even with very low flea counts.' },
      { title: 'Rapid Population Explosion', desc: 'A single female flea lays up to 50 eggs per day. Under ideal conditions, two fleas become an infestation of 250,000+ in 30 days. Acting at the first sign is dramatically more effective than waiting.' },
    ],
    ncSpecies: [
      { name: 'Cat Flea (Ctenocephalides felis)', desc: 'Responsible for over 90% of all flea infestations in NC — on both cats AND dogs. Tiny (1/16"), brown, laterally compressed. Can jump 150 times their own height.', threat: 'Bites humans and pets; transmits tapeworm and Bartonella' },
      { name: 'Dog Flea (Ctenocephalides canis)', desc: 'Nearly identical to the cat flea. Less common but present throughout the Charlotte area, often found alongside cat fleas in mixed infestations.', threat: 'Bites; tapeworm transmission' },
      { name: 'Human Flea (Pulex irritans)', desc: 'Less common but will infest homes without pets — introduced through previous tenants\' pets, wildlife in crawl spaces, or second-hand furniture.', threat: 'Aggressive human biting; establishes without pets present' },
    ],
    peakMonths: 'Year-Round (Peak: May – October)',
    seasonNote: 'Unlike northern states, Charlotte\'s mild winters don\'t eliminate outdoor flea populations. Fleas survive in covered porches, crawl spaces, and dense landscaping year-round. Indoor populations are completely independent of season.',
    activityByMonth: [4, 4, 5, 6, 8, 9, 10, 10, 9, 8, 6, 4],
    whyDiyFails: [
      'Flea bombs kill exposed adult fleas but don\'t penetrate carpet fibers where 90% of the population — eggs, larvae, and pupae — lives.',
      'Flea pupae are encased in a virtually chemical-resistant cocoon. They emerge after treatment, causing "re-infestation" that homeowners assume means treatment failure.',
      'Treating the home without simultaneously treating all pets allows re-infestation within days as pets reintroduce fleas from untreated areas.',
      'Without insect growth regulator (IGR), surviving eggs and larvae develop into new adults and re-establish the infestation within 3–4 weeks.',
    ],
    treatment: [
      { step: 'Pre-Treatment Preparation', desc: 'We provide a specific preparation checklist: wash all pet bedding, vacuum all carpet and upholstered furniture, and coordinate with your veterinarian for same-day pet treatment.' },
      { step: 'Interior Treatment with IGR', desc: 'We apply professional insecticide combined with insect growth regulator (IGR) to all carpeted areas, under furniture, and along baseboards. The IGR breaks the flea life cycle by preventing eggs and larvae from developing into reproducing adults.' },
      { step: 'Exterior Yard Treatment', desc: 'We treat yard areas frequented by pets — shaded resting areas, crawl spaces, and entry points where fleas persist outdoors and re-enter on animals.' },
      { step: 'Critical Follow-Up Visit', desc: 'A follow-up treatment 10–14 days after the initial service addresses flea pupae that matured after the first treatment. This second visit is essential for complete elimination — skipping it is the most common reason infestations persist.' },
    ],
    faqs: [
      { q: 'I don\'t have pets — how do I have fleas?', a: 'Fleas can be introduced without pets through previous tenants or owners, wildlife (raccoons, opossums, feral cats) accessing your crawl space or yard, or purchasing second-hand furniture. Human fleas can establish without any pet host.' },
      { q: 'How long does flea treatment take to work?', a: 'Adult flea activity decreases within 24–48 hours of treatment. It\'s normal to see fleas for up to 2–3 weeks afterward as protected pupae complete development. This is expected — not treatment failure. The follow-up visit addresses the emerging pupa cohort.' },
      { q: 'Do I need to treat my pets at the same time?', a: 'Yes — this is critical. Treating the home without treating all pets means fleas on your pets re-infest the treated home within days. Schedule veterinary flea treatment for all household pets on the same day as your home treatment.' },
      { q: 'Will baking soda or salt kill fleas?', a: 'No. These home remedies have no meaningful effect on flea populations. Fleas reproduce faster than any such treatment can impact. The only effective approach combines professional home treatment, IGR, and veterinarian-prescribed pet prevention simultaneously.' },
      { q: 'How do I prevent fleas from coming back?', a: 'Year-round veterinarian-prescribed flea prevention for all pets is the most important step. Our quarterly pest control service includes yard perimeter treatment that reduces outdoor flea populations before they can be introduced indoors.' },
    ],
  },

  {
    slug: 'rodent-control-charlotte-nc',
    pest: 'Rodent',
    pestPlural: 'Rodents',
    heroHeadline: 'Rodent Control Charlotte Metro & Lake Norman, NC',
    heroSub: 'Mice and rats are chewing your wires and reproducing right now. We eliminate them and seal every entry point.',
    intro: 'Rodent intrusions in the Charlotte Metro area peak sharply in fall as dropping temperatures push mice and rats to seek warmth indoors. Charlotte\'s mix of wooded suburban lots, older homes with crawl spaces, and lake-adjacent natural areas creates high rodent pressure. A mouse infestation doubles every 3 weeks without intervention — and the damage from chewing electrical wires, contaminating food surfaces, and creating entry paths for other pests compounds with every week of delay.',
    signs: [
      { title: 'Droppings Along Walls or in Cabinets', desc: 'Mouse droppings are 1/4", dark, and pointed at both ends. Rat droppings are larger (3/4") and capsule-shaped. Fresh droppings are soft and dark; old droppings are hard and gray.' },
      { title: 'Gnaw Marks on Food Packaging', desc: 'Rodents chew through cardboard, plastic, and thin foil. Finding chewed packages in your pantry confirms active nighttime feeding.' },
      { title: 'Scratching Sounds in Walls or Ceiling at Night', desc: 'Scratching, scurrying, or squeaking in walls or ceilings at night indicates active movement through your home\'s interior structure — a sure sign of an established infestation.' },
      { title: 'Nesting Material in Secluded Areas', desc: 'Shredded insulation, paper, fabric, or plant material gathered in the back of a cabinet, under appliances, or in a crawl space confirms active habitation.' },
      { title: 'Dark Rub Marks Along Baseboards', desc: 'Rodents travel the same routes repeatedly and leave dark grease marks from their fur along walls and baseboards. Rub marks indicate established travel routes and an active population.' },
    ],
    risks: [
      { title: 'Electrical Fire Risk', desc: 'Rodents gnaw constantly to control their continuously growing teeth. They chew through electrical wire insulation throughout your walls and attic, creating bare wires that can arc and cause house fires. This is the most serious and least visible risk of a rodent infestation.' },
      { title: 'Hantavirus', desc: 'The white-footed mouse, common near Lake Norman and wooded areas of Charlotte, can carry hantavirus. Inhalation of dust contaminated with infected rodent urine or droppings can cause Hantavirus Pulmonary Syndrome — a serious respiratory illness.' },
      { title: 'Salmonella & Food Contamination', desc: 'Rodents contaminate food surfaces, utensils, and food itself with Salmonella, Listeria, and other pathogens. They visit food prep areas repeatedly each night leaving contamination invisible to the eye.' },
      { title: 'Secondary Pest Introduction', desc: 'Rodents carry fleas, ticks, and mites into your home. A resolved rodent infestation can leave behind parasites seeking new hosts — your family and pets.' },
    ],
    ncSpecies: [
      { name: 'House Mouse (Mus musculus)', desc: 'The most common rodent pest. Small (2.5"–3.5" body), gray-brown. Fits through a gap the size of a dime. Produces 25–125 offspring per year. Rarely travels more than 25 feet from its nest.', threat: 'Disease; contamination; wire chewing; rapid reproduction' },
      { name: 'Norway Rat (Rattus norvegicus)', desc: 'Large (7"–9" body), brown-gray. Burrows in the ground, under slabs, and around foundations. More common in urban Charlotte. Strong swimmers — can enter through floor drains.', threat: 'Structural damage; extensive contamination; Leptospirosis' },
      { name: 'Roof Rat (Rattus rattus)', desc: 'Slender, large-eyed rat (6"–8" body). Excellent climber — enters attics and soffits via tree branches and utility lines. More common near wooded areas and Lake Norman.', threat: 'Attic insulation damage; wire chewing; food contamination' },
      { name: 'White-Footed Mouse (Peromyscus leucopus)', desc: 'Native woodland mouse common near Lake Norman. White underside and feet distinguish it from the house mouse. Enters homes in fall and can carry hantavirus and Lyme-infected ticks.', threat: 'Hantavirus; Lyme-tick vector; fall home invasions' },
    ],
    peakMonths: 'October – March',
    seasonNote: 'Rodent intrusions in Charlotte peak sharply in October and November. A single mouse entering in fall can establish a breeding colony before winter ends. Roof rats and Norway rats maintain some activity year-round in Charlotte\'s milder months.',
    activityByMonth: [6, 5, 4, 3, 3, 3, 4, 4, 6, 9, 10, 8],
    whyDiyFails: [
      'Snap traps and glue boards catch individual rodents but don\'t address the entry points bringing more in. Catching 3 mice while 10 more enter is a losing equation.',
      'Rodenticide bait stations work until they\'re empty — rodents from outside continue entering and discovering the bait, creating a cycle without resolution.',
      'Identifying all entry points requires inspecting the full foundation, roofline, utility penetrations, and crawl space — areas most homeowners can\'t safely or easily access.',
      'Rodents that die from poison in wall voids create odor problems and attract secondary pests like flies and beetles.',
    ],
    treatment: [
      { step: 'Full Property Inspection', desc: 'We inspect the exterior foundation, roofline, crawl space, and interior for all active entry points, droppings, gnaw marks, rub marks, and nesting areas before any treatment.' },
      { step: 'Entry Point Exclusion', desc: 'We seal identified entry points using hardware cloth, copper mesh, and appropriate sealants — materials rodents cannot chew through. This is the most critical step and differentiates professional service from DIY.' },
      { step: 'Interior Snap Trapping', desc: 'Snap traps are placed along travel paths, walls, and near nesting areas to eliminate the existing interior population quickly and without poison risk inside living spaces.' },
      { step: 'Exterior Bait Stations', desc: 'Tamper-resistant exterior bait stations address outdoor populations before they attempt entry — placed safely away from children, pets, and wildlife.' },
      { step: 'Follow-Up & Monitoring', desc: 'We return to check trap activity, confirm exclusion effectiveness, and address any new entry points. Follow-up continues until all activity ceases.' },
    ],
    faqs: [
      { q: 'How do mice get into my house?', a: 'House mice fit through a gap the size of a dime — about 1/4 inch. Common entry points include gaps around utility pipes, deteriorated weatherstripping, cracks in the foundation, gaps under garage doors, and weep holes in brick veneer. Roof rats enter via tree branches touching the roofline and gaps in soffits.' },
      { q: 'I found one mouse — do I have more?', a: 'Almost always yes. Mice are rarely solitary. Finding one during the day, or finding droppings and gnaw marks, indicates a population. A single female produces 5–10 litters per year of 5–6 pups each. What you see is never the full extent of the problem.' },
      { q: 'Is rodenticide safe with kids and pets?', a: 'We use tamper-resistant bait stations that prevent access by children and pets. For homes with small children or curious pets, we prioritize snap traps and exclusion — which present no secondary poisoning risk whatsoever.' },
      { q: 'Do you seal the entry points?', a: 'Yes — exclusion is a core part of our rodent service, not an add-on. Trapping without sealing entry points is temporary at best. We use materials rodents can\'t gnaw through and inspect the full property perimeter.' },
      { q: 'How do I know when the problem is fully resolved?', a: 'No new droppings, no fresh gnaw marks, and no wall sounds for 1–2 weeks indicates the interior population has been eliminated. We confirm resolution at your follow-up visit before closing the case.' },
      { q: 'What do I do if I find a dead rodent?', a: 'Wear gloves and use a plastic bag without direct contact. Spray the area with disinfectant before wiping up. Do not vacuum droppings in areas where hantavirus-carrying mice may be present — spray droppings with disinfectant first, then wipe clean.' },
    ],
  },
];
