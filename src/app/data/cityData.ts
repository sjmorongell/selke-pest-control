export interface CityData {
  slug: string;
  name: string;
  state: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  geographyPest: string;
  topPests: { name: string; description: string }[];
  neighborhoods: { name: string; pestNote: string }[];
  seasonalTips: string;
  whySelke: string;
  faqItems: { q: string; a: string }[];
  schemaLocality: string;
  schemaRegion: string;
  latitude: string;
  longitude: string;
}

export const cityData: CityData[] = [
  {
    slug: "pest-control-charlotte-nc",
    name: "Charlotte",
    state: "NC",
    county: "Mecklenburg County",
    metaTitle: "Pest Control Charlotte NC | Selke Pest Control | Charlotte Metro Exterminator",
    metaDescription: "Professional pest control in Charlotte, NC. Selke Pest Control serves Myers Park, Eastover, Foxcroft, Quail Hollow & all Charlotte neighborhoods. General pest, mosquito & flea/tick control. Call 704-728-0204.",
    heroHeadline: "Charlotte's Pest Control Experts",
    heroSubheadline: "Serving Myers Park, Eastover, Foxcroft, Morrocroft Estates, Quail Hollow & all Charlotte neighborhoods",
    intro: "Charlotte, North Carolina is a rapidly growing city of nearly 900,000 people — and that rapid expansion has created ideal conditions for pests. As developers push into wooded corridors along McAlpine Creek, Mallard Creek, and the Catawba River greenways, displaced wildlife and insects move directly into established neighborhoods. Charlotte has even been ranked among the top 10 worst cities for mosquitoes in the United States, largely due to its humid subtropical climate, frequent afternoon thunderstorms, and the miles of creek corridors that wind through the city. At Selke Pest Control, we understand the specific pest pressures that Charlotte homeowners face — and we've spent 15+ years developing treatments that work in this exact environment.",
    geographyPest: "Charlotte sits in the Carolina Piedmont at roughly 700 feet elevation, giving it hot, humid summers and mild winters that rarely get cold enough to meaningfully knock down pest populations. The city's urban tree canopy — one of the largest of any major US city — creates shaded, moist microclimates that are perfect harboring areas for mosquitoes and ticks. Creek corridors like Little Sugar Creek, McAlpine Creek, and Irwin Creek act as wildlife highways, bringing rodents, raccoons, and the fleas and ticks they carry directly into residential backyards. Neighborhoods near Freedom Park, Reedy Creek Nature Preserve, and the Catawba River corridor experience elevated pest pressure throughout the spring, summer, and fall seasons.",
    topPests: [
      { name: "Mosquitoes", description: "Charlotte's combination of warm temperatures, afternoon rain, and urban tree canopy creates persistent mosquito pressure from April through October. Neighborhoods near creek greenways and low-lying areas see the worst activity. Standing water in gutters, birdbaths, and landscaping irrigation are the most common breeding sources in residential areas." },
      { name: "Ants (Fire & Carpenter)", description: "Fire ants thrive in Charlotte's warm clay soils and sunny lawn areas, particularly in newer construction neighborhoods where ground has been disturbed. Carpenter ants target the moisture-damaged wood common in older homes near the urban core — including many homes in Myers Park, Dilworth, and Elizabeth that date to the mid-20th century." },
      { name: "Ticks", description: "Black-legged ticks (deer ticks) and American dog ticks are active throughout the Charlotte area from early spring through late fall. Wooded lot lines, natural buffers along greenways, and properties adjacent to Mecklenburg County parks see the highest tick populations. Tick-borne illnesses including Lyme disease and Rocky Mountain spotted fever are documented in Mecklenburg County." },
      { name: "Cockroaches", description: "Charlotte's urban density makes American and German cockroaches a persistent problem, particularly in older homes and in neighborhoods near restaurants and commercial corridors. Even well-maintained homes in upscale areas can experience cockroach pressure due to shared utility infrastructure and sewer systems." }
    ],
    neighborhoods: [
      { name: "Myers Park", pestNote: "Charlotte's most iconic neighborhood features large mature trees, lush landscaping, and homes dating to the early 1900s — creating ideal conditions for carpenter ants, mosquitoes, and spiders. The creek running through Freedom Park amplifies mosquito pressure for nearby streets." },
      { name: "Eastover", pestNote: "Eastover's heavily wooded lots and proximity to Little Sugar Creek greenway make tick and mosquito pressure among the highest of any Charlotte neighborhood. Large-canopy trees and dense understory vegetation create persistent harboring areas." },
      { name: "Foxcroft", pestNote: "Foxcroft's large estate lots and mature wooded buffers create significant mosquito and tick activity throughout the warmer months. Many homes feature extensive outdoor entertaining areas that benefit greatly from professional barrier treatments." },
      { name: "Morrocroft Estates", pestNote: "Morrocroft Estates sits adjacent to SouthPark's commercial corridor — making it susceptible to urban pests like cockroaches and rodents migrating from nearby restaurant dumpsters and commercial waste areas, in addition to the mosquito pressure common to all wooded Charlotte neighborhoods." },
      { name: "Quail Hollow", pestNote: "Quail Hollow's rolling terrain and mix of open lawn and wooded tree lines are classic fire ant and tick habitat. The Quail Hollow Club golf course creates large irrigated turf areas nearby that can increase mosquito and fire ant populations in the surrounding residential streets." }
    ],
    seasonalTips: "In Charlotte, pest pressure is essentially a year-round concern. Spring (March–May) brings ant and termite swarm season, along with the first wave of mosquitoes as temperatures climb above 50°F. Summer (June–August) is peak mosquito and tick season — heat and humidity drive populations to their annual high. Fall (September–November) sends rodents, stink bugs, and spiders indoors as temperatures drop. Even winter brings occasional cockroach activity indoors as pests seek warmth. A quarterly treatment plan keeps Charlotte homes protected through every season.",
    whySelke: "Unlike national pest control chains that rotate unfamiliar technicians, Selke Pest Control sends the same local professional to your Charlotte home every visit. We know Charlotte's neighborhoods, its pest pressures, and the specific challenges that come with protecting a home near the greenway corridors, creek buffers, and wooded lots that make this city beautiful. With 15+ years of experience and a 100% satisfaction guarantee, we're the Charlotte pest control company your neighbors trust.",
    faqItems: [
      { q: "Do you serve all Charlotte neighborhoods?", a: "Yes — we serve all of Charlotte including Myers Park, Eastover, Foxcroft, Morrocroft Estates, Quail Hollow, SouthPark, Ballantyne, Dilworth, Plaza Midwood, NoDa, University City, and beyond." },
      { q: "How bad are mosquitoes in Charlotte?", a: "Very bad — Charlotte has been ranked among the top 10 worst cities for mosquitoes in the US. The combination of hot summers, frequent rain, and wooded creek corridors creates persistent mosquito pressure from April through October." },
      { q: "Are ticks a real concern in Charlotte?", a: "Absolutely. Black-legged ticks that carry Lyme disease and American dog ticks that carry Rocky Mountain spotted fever are both documented in Mecklenburg County. Tick season runs March through November in Charlotte." },
      { q: "How soon can you come out to my Charlotte home?", a: "Most Charlotte homeowners are scheduled within 2–3 days. For urgent situations we offer same-week and often same-day service." }
    ],
    schemaLocality: "Charlotte",
    schemaRegion: "NC",
    latitude: "35.2271",
    longitude: "-80.8431"
  },
  {
    slug: "pest-control-huntersville-nc",
    name: "Huntersville",
    state: "NC",
    county: "Mecklenburg County",
    metaTitle: "Pest Control Huntersville NC | Selke Pest Control | Local Exterminator",
    metaDescription: "Expert pest control in Huntersville, NC. Serving Birkdale, Skybrook, Northstone, The Hamptons, Wynfield & all Huntersville neighborhoods. Mosquito, flea/tick & general pest control. Call 704-728-0204.",
    heroHeadline: "Huntersville's Trusted Pest Control",
    heroSubheadline: "Serving Birkdale, Skybrook, Northstone, The Hamptons, Wynfield & all Huntersville communities",
    intro: "Huntersville, North Carolina has grown from a small farming community into one of the fastest-growing towns in the entire United States — with a population now exceeding 70,000. That explosive residential growth means thousands of new homes built on land that was recently wooded, farmland, or adjacent to Lake Norman's shoreline. As subdivisions push into previously undisturbed land, pest pressure increases significantly. Displaced wildlife, disrupted soil, and the proximity to Mountain Island Lake and Lake Norman's eastern shore create a uniquely challenging pest environment for Huntersville homeowners. Selke Pest Control has served Huntersville families for years, developing treatments specifically effective in the heavy clay soils, mature landscaping, and lake-adjacent environments common throughout the town.",
    geographyPest: "Huntersville occupies a unique position between two major bodies of water — Lake Norman to the north and Mountain Island Lake to the southwest — creating elevated humidity levels and persistent standing water conditions that mosquito populations exploit aggressively. The town's rapid development has left numerous retention ponds, drainage swales, and detention basins throughout its subdivisions — all of which serve as mosquito breeding grounds. Huntersville's terrain also features significant wooded corridors along Torrence Creek and its tributaries, which serve as tick and wildlife corridors running directly through the middle of residential neighborhoods.",
    topPests: [
      { name: "Mosquitoes", description: "Huntersville's retention ponds, lake proximity, and irrigation-heavy landscaping in communities like Birkdale and Skybrook create some of the most persistent residential mosquito pressure in the Charlotte metro. The town's numerous HOA-managed common areas often contain standing water features that serve as mosquito nurseries for surrounding streets." },
      { name: "Ticks", description: "Torrence Creek Greenway and the wooded buffers throughout Huntersville's subdivisions create active tick corridors. Families walking trails through Torrence Creek Regional Park and adjacent neighborhoods are at real risk of tick exposure from March through November. Black-legged ticks, lone star ticks, and American dog ticks are all present in the area." },
      { name: "Fire Ants", description: "Huntersville's warm Piedmont climate and the abundant open lawn areas in newer subdivisions make fire ants a persistent and painful problem. Fire ants thrive in the disturbed soils common in newer construction areas and reproduce rapidly in sunny lawn environments." },
      { name: "Spiders & General Pests", description: "The combination of wooded lot lines, mulched landscaping beds, and the exterior lighting common in Huntersville's newer homes creates ideal spider habitat. Wolf spiders, black widows, and brown recluses are all documented in the area. Ants, silverfish, and occasional cockroach activity round out the general pest picture." }
    ],
    neighborhoods: [
      { name: "Birkdale", pestNote: "Birkdale Village and the surrounding Birkdale residential community sit adjacent to a major commercial corridor, which increases cockroach and rodent pressure from nearby restaurants and retail. The community's irrigation-heavy landscaping also creates significant mosquito breeding habitat in summer." },
      { name: "Skybrook", pestNote: "Skybrook's rolling terrain, large lots, and proximity to wooded areas along its golf course create ideal tick and mosquito habitat. Properties backing to the golf course tree lines see the highest pest pressure in the community." },
      { name: "Northstone", pestNote: "Northstone is a golf course community where properties backing to wooded roughs and water hazards experience elevated mosquito and tick activity throughout the warm season. The combination of manicured turf and natural wooded areas creates persistent pressure zones." },
      { name: "The Hamptons", pestNote: "The Hamptons at Lake Norman features lake-adjacent properties where mosquito pressure from the shoreline is significant. Properties with docks, low-lying yards, or decorative water features need the most aggressive treatment schedules." },
      { name: "Wynfield", pestNote: "Wynfield's location near Torrence Creek and its mix of wooded lot lines and open lawns creates a classic tick and mosquito habitat. Families with children and pets who use the backyard extensively benefit most from a bundled mosquito and general pest program." }
    ],
    seasonalTips: "Huntersville homeowners should begin mosquito treatments in early April — the proximity to Lake Norman and Mountain Island Lake means mosquito populations emerge earlier here than in areas further from water. Tick prevention should run March through November. Fire ant treatments are most effective in spring and fall when colonies are actively foraging. Fall is when rodents begin seeking entry into homes as temperatures drop — a perimeter inspection in October is strongly recommended.",
    whySelke: "Selke Pest Control understands the specific pest dynamics of Huntersville's lake-adjacent communities, retention pond environments, and rapid-growth subdivisions. We're a local, family-owned company — not a national franchise — which means you get the same technician, the same attention to detail, and the same commitment to your family's safety every single visit. Our 100% satisfaction guarantee means if pests return between treatments, so do we — at no charge.",
    faqItems: [
      { q: "Is mosquito control really necessary in Huntersville?", a: "More so than almost anywhere in the Charlotte metro. Huntersville's proximity to two lakes and its dozens of retention ponds throughout its subdivisions create year-round mosquito breeding habitat. Professional barrier treatments are the most effective way to protect your yard." },
      { q: "Do you treat the Birkdale area?", a: "Yes — we serve all Huntersville communities including Birkdale, Skybrook, Northstone, The Hamptons, Wynfield, Vermilion, and every other neighborhood in town." },
      { q: "How often should I treat for pests in Huntersville?", a: "We recommend quarterly general pest treatments year-round, monthly mosquito treatments April through October, and flea/tick treatments as needed. Most Huntersville customers bundle mosquito and general pest for the best value." },
      { q: "Are your treatments safe around Lake Norman?", a: "Absolutely. We use EPA-approved products that are safe for the environment, your family, and your pets. We're careful with applications near water features and shoreline areas." }
    ],
    schemaLocality: "Huntersville",
    schemaRegion: "NC",
    latitude: "35.4107",
    longitude: "-80.8426"
  },
  {
    slug: "pest-control-cornelius-nc",
    name: "Cornelius",
    state: "NC",
    county: "Mecklenburg County",
    metaTitle: "Pest Control Cornelius NC | Selke Pest Control | Lake Norman Exterminator",
    metaDescription: "Professional pest control in Cornelius, NC. Serving The Peninsula, Patrick's Purchase, Jetton Cove, Alexander Island & all Cornelius neighborhoods. Mosquito, tick & general pest control. Call 704-728-0204.",
    heroHeadline: "Cornelius Pest Control on Lake Norman",
    heroSubheadline: "Serving The Peninsula, Patrick's Purchase, Jetton Cove, Alexander Island, Patrick's Buyck Plantation & all Cornelius communities",
    intro: "Cornelius, North Carolina is one of Lake Norman's most desirable lakefront communities — a town of approximately 35,000 residents where waterfront living, luxury homes, and an active outdoor lifestyle are the norm. But the same features that make Cornelius such a wonderful place to live — the lake, the wooded shoreline, the lush landscaping — also create one of the most active pest environments on Lake Norman's shores. Cornelius homeowners deal with mosquito pressure that starts earlier in spring, lasts later into fall, and is more intense than communities further from the water. The town's active park system, including Jetton Park and Ramsey Creek Park along the lake, creates mosquito and tick harboring areas that extend pressure into surrounding residential streets. Selke Pest Control specializes in the unique pest challenges of lakefront communities.",
    geographyPest: "Cornelius sits directly on the eastern shore of Lake Norman, with miles of irregular shoreline, boat slips, and riparian areas that create near-constant mosquito breeding conditions from spring through fall. The town's proximity to the lake means humidity levels are consistently higher than inland communities, extending the effective pest season on both ends. Cornelius also features numerous wooded corridors and natural buffers — particularly in The Peninsula community and around Jetton Park — that serve as tick harboring areas and wildlife corridors. The combination of luxury waterfront homes with extensive outdoor entertaining areas and this elevated pest pressure makes professional treatment essential for comfortable outdoor living.",
    topPests: [
      { name: "Mosquitoes", description: "Lake Norman's shoreline creates the most significant mosquito pressure of any factor in Cornelius. Properties within a half mile of the water — which includes most of Cornelius — experience elevated mosquito populations that arrive earlier in spring and persist later into fall than inland neighborhoods. Docks, riprap banks, and low-lying shoreline areas are primary breeding zones." },
      { name: "Ticks", description: "The wooded buffers throughout The Peninsula, the natural areas around Jetton Park, and the tree lines in Patrick's Purchase and surrounding communities create active tick habitat. Cornelius homeowners who walk trails at Jetton Park or Ramsey Creek Park, or who have dogs that access wooded lot lines, face meaningful tick exposure throughout the warm season." },
      { name: "Stinging Insects", description: "Hornets, yellow jackets, and paper wasps are active in Cornelius throughout summer and fall. The mature trees, wooden deck structures, and exterior eaves common in Cornelius's upscale homes provide frequent nesting opportunities. Nests discovered near outdoor entertaining areas require prompt professional treatment." },
      { name: "Ants & General Pests", description: "Cornelius's warm climate and moist soils support aggressive fire ant colonies throughout its residential neighborhoods. Pavement ants and odorous house ants are also common indoors, particularly during spring. Spiders and occasional cockroach activity round out the general pest picture for most Cornelius homeowners." }
    ],
    neighborhoods: [
      { name: "The Peninsula", pestNote: "The Peninsula is Cornelius's most prestigious address — a gated golf community on a dramatic peninsula extending into Lake Norman. Properties here face mosquito pressure from three sides of water, and the community's extensive wooded natural areas create persistent tick habitat. Most Peninsula homeowners treat for both mosquitoes and general pests." },
      { name: "Patrick's Purchase", pestNote: "Patrick's Purchase features large wooded lots adjacent to Lake Norman with significant shoreline exposure. Mosquito pressure from the water combined with tick pressure from wooded lot lines makes this community one of the more challenging pest environments in Cornelius." },
      { name: "Jetton Cove", pestNote: "Jetton Cove sits adjacent to the 104-acre Jetton Park on Lake Norman, which is a significant source of mosquito and tick pressure for surrounding streets. The park's wooded trails and lake shoreline serve as harboring areas that drive pest populations into the neighborhood." },
      { name: "Alexander Island", pestNote: "As its name suggests, Alexander Island is a peninsula community with water on multiple sides — creating elevated mosquito pressure throughout the warm season. Properties with lower elevations, docks, or shoreline access require the most intensive mosquito treatment schedules." },
      { name: "Patrick's Buyck Plantation", pestNote: "Patrick's Buyck Plantation's large estate lots with mature tree canopy and extensive landscaping create classic mosquito and tick pressure zones. The community's proximity to the lake adds additional moisture that extends the mosquito season." }
    ],
    seasonalTips: "Cornelius homeowners should plan to begin mosquito barrier treatments in late March — the lake's moderating effect on temperature means mosquitoes emerge here 2–3 weeks earlier than inland Charlotte neighborhoods. Monthly treatments through October are recommended for lakeside properties. Spring is also prime stinging insect season — nests form quickly in April and May when left unmonitored. Year-round quarterly general pest treatments protect against the ants, spiders, and occasional cockroaches that are active in every season.",
    whySelke: "Selke Pest Control has deep experience with the unique challenges of Lake Norman shoreline communities. We understand how lake proximity changes the timing and intensity of pest pressure, and we tailor our treatment schedules accordingly. When you call Selke, you're talking to a local team that knows Cornelius, knows the lake, and knows exactly what it takes to protect your home and outdoor living spaces.",
    faqItems: [
      { q: "Is pest control different for Lake Norman waterfront homes?", a: "Yes — waterfront and near-waterfront homes on Lake Norman face significantly more mosquito pressure than inland properties. The lake's surface area generates higher sustained humidity and more standing water breeding opportunities. We adjust treatment frequency and application areas for lakeside properties." },
      { q: "Do you treat The Peninsula and other gated communities?", a: "Yes — we serve all Cornelius communities including The Peninsula, Patrick's Purchase, Jetton Cove, Alexander Island, Patrick's Buyck Plantation, Westmoreland, and every other Cornelius neighborhood." },
      { q: "When should I start mosquito treatments in Cornelius?", a: "We recommend starting in late March for Cornelius — earlier than most of the Charlotte metro due to the lake's moderating effect on temperatures. Monthly treatments April through October provide the best protection." },
      { q: "Can you treat my dock and shoreline area?", a: "We treat all areas of your property including the areas near your dock and shoreline using EPA-approved products that are safe for the lake environment and aquatic life." }
    ],
    schemaLocality: "Cornelius",
    schemaRegion: "NC",
    latitude: "35.4832",
    longitude: "-80.8651"
  },
  {
    slug: "pest-control-davidson-nc",
    name: "Davidson",
    state: "NC",
    county: "Mecklenburg County",
    metaTitle: "Pest Control Davidson NC | Selke Pest Control | Lake Norman Area Exterminator",
    metaDescription: "Expert pest control in Davidson, NC. Serving River Run, The Woodlands at Davidson, Anniston, The Preserve at River Run, Davidson Hall & all Davidson neighborhoods. Call 704-728-0204.",
    heroHeadline: "Davidson, NC Pest Control Experts",
    heroSubheadline: "Serving River Run, The Woodlands at Davidson, Anniston, The Preserve at River Run, Davidson Hall & all Davidson communities",
    intro: "Davidson, North Carolina is a distinctive college town of approximately 14,000 residents built around Davidson College — a nationally ranked liberal arts institution whose century-old campus features massive hardwood trees, natural creek areas, and expansive green spaces that create a uniquely lush living environment. Davidson's tree-lined streets, pedestrian-friendly downtown, and proximity to Lake Norman make it one of the most desirable communities in the Charlotte metro. But that same natural beauty creates real pest pressure. The town's mature tree canopy, Davidson Creek corridor, and the wooded residential developments north of campus experience meaningful mosquito, tick, and general pest activity throughout the growing season. Selke Pest Control serves Davidson homeowners with treatments designed for the town's distinctive mix of historic homes, new development, and natural areas.",
    geographyPest: "Davidson sits on the northeastern shore of Lake Norman, with the lake providing the western boundary of the town and Davidson Creek running through its center. The creek corridor serves as both a mosquito breeding zone and a wildlife and tick corridor that extends through the heart of the community. Davidson's residential neighborhoods range from historic homes near the college campus with mature tree canopy to newer developments like River Run and The Woodlands at Davidson that push into previously wooded areas along the lake. The college campus itself — with its natural stream areas, wooded quad, and expansive grounds — creates a large mosquito and tick reservoir that influences pest pressure throughout the surrounding streets.",
    topPests: [
      { name: "Mosquitoes", description: "Davidson Creek, Lake Norman's nearby shoreline, and the college campus's natural areas combine to create significant mosquito pressure throughout the town from April through October. The town's wet spring climate and warm summers drive mosquito populations to their peak in July and August." },
      { name: "Ticks", description: "Davidson's wooded residential areas and the Davidson Creek greenway corridor create active tick habitat throughout the community. Families in River Run, The Woodlands at Davidson, and neighborhoods adjacent to the college's natural areas experience the most significant tick pressure." },
      { name: "Ants", description: "Carpenter ants are particularly active in Davidson's older homes near the college campus, where moisture-damaged wood in aging structures provides nesting opportunities. Fire ants are common in the newer developments with open lawn areas." },
      { name: "Spiders & Seasonal Pests", description: "Davidson's wooded environment supports healthy spider populations, including occasional black widow sightings in wood piles, outbuildings, and garage areas. Fall brings stink bug and boxelder bug invasions into homes as temperatures drop — a common complaint throughout the Lake Norman corridor." }
    ],
    neighborhoods: [
      { name: "River Run", pestNote: "River Run is a golf and country club community on Lake Norman where properties backing to wooded areas and water hazards face elevated mosquito and tick pressure. The community's location adjacent to the lake creates extended mosquito seasons compared to inland Davidson neighborhoods." },
      { name: "The Woodlands at Davidson", pestNote: "The Woodlands at Davidson features heavily wooded lots that create ideal tick and spider habitat. The community's natural tree canopy means excellent shade — but also moist, cool understory conditions that mosquitoes and ticks favor." },
      { name: "Anniston", pestNote: "Anniston is a newer Davidson community where construction disturbed significant wooded land, driving fire ants and other ground-nesting insects into established lawns. As landscaping matures, mosquito pressure increases alongside the growing canopy." },
      { name: "The Preserve at River Run", pestNote: "As the name suggests, The Preserve at River Run maintains natural buffer areas that create significant tick and mosquito harboring zones adjacent to residential lots. Properties bordering the preserve's natural areas require more intensive treatment perimeters." },
      { name: "Davidson Hall", pestNote: "Davidson Hall's location near the college campus means proximity to the large natural areas, creek systems, and mature vegetation of Davidson College's grounds — all of which serve as reservoir zones for mosquitoes and ticks that migrate into the surrounding residential streets." }
    ],
    seasonalTips: "Davidson's proximity to Lake Norman means mosquito season starts earlier than in Charlotte proper — plan for April treatment starts. The college town character of Davidson also means fall is very active outdoors; stink bug and spider treatments in September help protect homes before the cool-weather invasion. Davidson's older homes near campus benefit from annual carpenter ant inspections in spring, when these wood-destroying ants are actively swarming and establishing new colonies.",
    whySelke: "Davidson is a tight-knit community, and word-of-mouth matters here. Selke Pest Control is a family-owned local business that earns its reputation one home at a time. We understand the college town character of Davidson, the historic home challenges near campus, and the lake-adjacent pest dynamics of River Run and The Woodlands. We treat your home as if it were our own — with careful attention, EPA-safe products, and a guarantee that we'll be back if pests return.",
    faqItems: [
      { q: "Do you serve neighborhoods near Davidson College?", a: "Yes — we serve all Davidson neighborhoods including the historic areas near Davidson College campus, River Run, The Woodlands at Davidson, Anniston, The Preserve at River Run, Davidson Hall, and all surrounding communities." },
      { q: "Are there pest concerns specific to older homes in Davidson?", a: "Yes — older homes near Davidson College campus are more susceptible to carpenter ant infestations due to aging wood structures and moisture damage. We offer thorough inspections and treatments specific to these homes." },
      { q: "How does Lake Norman affect pest pressure in Davidson?", a: "Davidson's location on the northeastern shore of Lake Norman elevates mosquito pressure and extends the season compared to inland areas. Monthly mosquito treatments April through October are recommended for most Davidson properties." },
      { q: "Do you treat for stink bugs in Davidson?", a: "Yes — stink bugs are a common fall nuisance throughout the Lake Norman corridor including Davidson. Our fall perimeter treatments significantly reduce stink bug and boxelder bug entry into homes." }
    ],
    schemaLocality: "Davidson",
    schemaRegion: "NC",
    latitude: "35.4993",
    longitude: "-80.8482"
  },
  {
    slug: "pest-control-mooresville-nc",
    name: "Mooresville",
    state: "NC",
    county: "Iredell County",
    metaTitle: "Pest Control Mooresville NC | Selke Pest Control | Local Exterminator",
    metaDescription: "Selke Pest Control is based in Mooresville, NC — your local pest control experts. Serving The Point, The Farms, Morrison Plantation, Beacon Pointe, Harbor at the Pointe & all Mooresville neighborhoods. Call 704-728-0204.",
    heroHeadline: "Mooresville's Home-Town Pest Control",
    heroSubheadline: "Locally based in Mooresville — serving The Point, The Farms, Morrison Plantation, Beacon Pointe, Harbor at the Pointe & all Mooresville communities",
    intro: "Selke Pest Control is proud to call Mooresville, North Carolina home. This is where our team lives, where our families go to school, and where we've built our reputation one satisfied customer at a time over the past 15+ years. Mooresville has grown dramatically — from a quiet mill town to a thriving city of over 50,000 residents — and that growth has brought significant pest pressure along with it. The city's position on the southern shores of Lake Norman, combined with its Piedmont geography, warm climate, and rapid residential development, creates year-round pest activity that requires professional management. Nobody knows Mooresville's pest environment better than we do.",
    geographyPest: "Mooresville occupies a prime location on the southern arm of Lake Norman, with significant shoreline frontage that creates high ambient humidity and persistent mosquito breeding conditions throughout the warmer months. The city's residential development has expanded eastward into heavily wooded Iredell County land, pushing neighborhoods like Morrison Plantation and The Farms up against wooded buffers that are prime tick and wildlife habitat. Lake Norman State Park sits just north of the city, serving as a large natural reservoir for mosquitoes, ticks, and the wildlife that carries them. The combination of lake, woods, and rapid suburban growth makes Mooresville one of the most pest-active communities in the region.",
    topPests: [
      { name: "Mosquitoes", description: "Lake Norman's southern arm creates significant mosquito pressure for Mooresville's lakefront and near-lake communities. Properties in The Point, Beacon Pointe, and Harbor at the Pointe face mosquito pressure from multiple directions — the lake itself, shoreline vegetation, and the standing water that accumulates in low-lying areas after Mooresville's frequent summer storms." },
      { name: "Ticks", description: "Mooresville's wooded residential areas, particularly those adjacent to Lake Norman State Park, experience significant tick pressure throughout the warm season. Black-legged ticks, lone star ticks, and American dog ticks are all present. Families and pets that spend time near wooded lot lines or the state park trails are at meaningful risk of tick exposure." },
      { name: "Fire Ants", description: "Mooresville's warm Piedmont climate and the abundant open lawn areas in its newer developments support aggressive fire ant colonies. The Point, The Farms, and Morrison Plantation all feature large lawns where fire ant mounds can appear seemingly overnight after rain events." },
      { name: "Rodents", description: "Mooresville's rapid growth has pushed development adjacent to undeveloped land, farmland, and wooded areas — creating high rodent pressure particularly in fall and winter. Mice and rats move toward occupied homes as temperatures drop, and Mooresville's older commercial and residential areas near downtown see consistent rodent activity year-round." }
    ],
    neighborhoods: [
      { name: "The Point", pestNote: "The Point is Mooresville's premier lakefront community — a peninsula development surrounded by Lake Norman on three sides. This geography creates among the most intense mosquito pressure of any neighborhood in the city. Properties with docks, shoreline areas, or low elevations near the water require the most aggressive treatment programs." },
      { name: "The Farms", pestNote: "The Farms at Lake Norman is a large master-planned community with a mix of open lawn areas and wooded lot lines that create classic fire ant, tick, and mosquito habitat. The community's size means pest pressure varies significantly by location — lots bordering wooded areas require more intensive perimeter treatments." },
      { name: "Morrison Plantation", pestNote: "Morrison Plantation's location adjacent to wooded Iredell County land creates significant tick pressure along its wooded lot lines. The community's newer construction also means disturbed soils ideal for fire ant colony establishment." },
      { name: "Beacon Pointe", pestNote: "Beacon Pointe's proximity to Lake Norman's southern arm drives significant mosquito activity throughout the warm season. The community's newer homes and HOA-maintained common areas with irrigation systems create additional standing water mosquito breeding opportunities." },
      { name: "Harbor at the Pointe", pestNote: "Harbor at the Pointe sits on Lake Norman's shore with significant waterfront exposure. Mosquito pressure from the lake is the primary concern, along with the tick activity common to all wooded Mooresville communities." }
    ],
    seasonalTips: "As Mooresville's home-town pest control company, we know this community's pest calendar better than anyone. Mosquito season begins in earnest in April near the lake and peaks in July–August. Start fire ant treatments in April before mounds multiply rapidly with spring rains. Fall brings the most important rodent prevention window — have your home's perimeter inspected in September before mice begin seeking entry. Year-round quarterly general pest treatments are the foundation of a pest-free Mooresville home.",
    whySelke: "We are Mooresville. This is our home, our community, and our responsibility. When you hire Selke Pest Control, you're supporting a local family business that has been protecting Mooresville homes for over 15 years. We know your neighborhood, we know your neighbors, and we take personal pride in every job we do. Our 100% satisfaction guarantee isn't just a marketing line — it's a promise from one Mooresville family to another.",
    faqItems: [
      { q: "Are you actually based in Mooresville?", a: "Yes — Selke Pest Control is headquartered right here in Mooresville. This is our home community and where the majority of our team lives. You'll always talk to someone local when you call us." },
      { q: "Do you serve The Point and other lakefront Mooresville communities?", a: "Absolutely — The Point, Beacon Pointe, Harbor at the Pointe, and all of Mooresville's lakefront communities are right in our backyard. We specialize in the elevated mosquito pressure these lake-adjacent communities experience." },
      { q: "How does Lake Norman State Park affect pest pressure in Mooresville?", a: "The state park creates a large natural reservoir for mosquitoes, ticks, and the wildlife that carries them. Homes near the park see elevated pressure compared to other parts of Mooresville, particularly for ticks and mosquitoes." },
      { q: "What's the most important pest treatment for a new Mooresville homeowner?", a: "For most Mooresville homeowners, a bundle of quarterly general pest control plus monthly mosquito treatments provides the best all-around protection. It covers your biggest risks — mosquitoes, ants, spiders, and general household pests — at the best value." }
    ],
    schemaLocality: "Mooresville",
    schemaRegion: "NC",
    latitude: "35.5848",
    longitude: "-80.8156"
  },
  {
    slug: "pest-control-denver-nc",
    name: "Denver",
    state: "NC",
    county: "Lincoln County",
    metaTitle: "Pest Control Denver NC | Selke Pest Control | Lake Norman West Shore Exterminator",
    metaDescription: "Professional pest control in Denver, NC. Serving Verdict Ridge, Sailview, Westport, Pebble Bay, Killian Crossing & all Denver neighborhoods. Mosquito, tick & general pest control on Lake Norman's west shore. Call 704-728-0204.",
    heroHeadline: "Denver, NC Pest Control — Lake Norman's West Shore",
    heroSubheadline: "Serving Verdict Ridge, Sailview, Westport, Pebble Bay, Killian Crossing & all Denver communities",
    intro: "Denver, North Carolina sits on the western shore of Lake Norman in Lincoln County — and it is one of the most rapidly growing communities in the entire state. Once a quiet rural community, Denver now attracts thousands of families drawn by the lake lifestyle, newer construction homes, excellent schools, and lower Lincoln County property taxes. But Denver's explosive growth has brought significant pest pressure. The west shore of Lake Norman where Denver sits is widely recognized as experiencing some of the most intense mosquito activity on the entire lake — driven by the extensive riparian areas, cove development, and wetland margins along this more irregular shoreline. If you live in Denver and spend time outdoors, professional pest management is not optional — it is essential.",
    geographyPest: "Denver's position on Lake Norman's western shore gives it a distinctly different geography than the Mecklenburg County communities on the eastern side. The Lincoln County shoreline is more irregular, with numerous coves, inlets, and wetland margins that create ideal mosquito breeding habitat. Properties in Sailview, Pebble Bay, and other lakefront Denver communities sit adjacent to these high-mosquito-pressure shoreline areas. Denver also retains more undeveloped wooded land than the more built-out Mecklenburg communities — meaning larger wooded buffers, more wildlife pressure, and more significant tick activity throughout residential areas. Killian Creek and its tributaries provide additional standing water corridors throughout the community.",
    topPests: [
      { name: "Mosquitoes", description: "Denver's west shore location on Lake Norman, combined with the numerous coves and wetland margins along this section of shoreline, creates among the most intense residential mosquito pressure on the entire lake. Waterfront communities in Sailview and Pebble Bay experience mosquito activity from April through October that requires consistent professional treatment to manage effectively." },
      { name: "Ticks", description: "Denver's retained wooded acreage and rural-to-suburban transition character mean more deer, more wildlife corridors, and more tick exposure than fully built-out suburban communities. Lone star ticks, black-legged ticks, and American dog ticks are all active throughout Denver's wooded residential areas from March through November." },
      { name: "Fire Ants", description: "Denver's open lawn areas and disturbed soils from ongoing construction activity create prime fire ant habitat. The warm Lincoln County climate supports large, aggressive fire ant colonies that can appear rapidly in newly seeded lawns and disturbed ground." },
      { name: "Stinging Insects & Spiders", description: "Denver's wooded character and the prevalence of outbuildings, boat storage structures, and dock facilities create abundant nesting opportunities for yellow jackets, hornets, and paper wasps. Spiders — including black widows — are frequently found in these structures and in the exterior wood features common on lakefront homes." }
    ],
    neighborhoods: [
      { name: "Verdict Ridge", pestNote: "Verdict Ridge is a golf course community in community in Denver where properties backing to wooded roughs and tree lines experience elevated mosquito and tick activity. The community's large lots and mature landscaping create both the charm and the pest pressure that comes with wooded suburban living." },
      { name: "Sailview", pestNote: "Sailview is one of Denver's most prominent lakefront communities, with properties directly on Lake Norman's west shore. Mosquito pressure from the lake, shoreline vegetation, and low-elevation yards is significant. Monthly treatments from April through October are the standard recommendation for Sailview homeowners." },
      { name: "Westport", pestNote: "Westport is a large Denver community spanning both lakefront and inland properties. Lakefront lots face the highest mosquito pressure, while wooded inland lots contend with more tick and spider activity. The community's size and variety of lot types mean pest needs vary considerably by street." },
      { name: "Pebble Bay", pestNote: "Pebble Bay's lakefront location creates persistent mosquito pressure from Lake Norman's west shore. Properties with docks, riprap banks, or low-lying areas near the water are especially susceptible to mosquito breeding activity." },
      { name: "Killian Crossing", pestNote: "Killian Crossing is an inland Denver community where tick pressure from wooded lot lines and general pest activity are the primary concerns. The community's proximity to Killian Creek creates localized mosquito breeding activity in low-lying areas." }
    ],
    seasonalTips: "Denver homeowners should begin mosquito treatments in early April — the west shore's coves and wetland margins mean mosquitoes emerge early here. Tick prevention is especially important in Denver given the area's more rural character and higher deer population. Fall is the critical window for rodent prevention — Denver's wooded setting and undeveloped adjacent land drives mice and rats toward occupied homes as temperatures drop in October and November.",
    whySelke: "Selke Pest Control understands the unique pest dynamics of Lake Norman's west shore communities. Denver's combination of lakefront mosquito pressure, wooded tick habitat, and rapid residential growth creates pest challenges that require a knowledgeable local team. We bring 15+ years of Lake Norman area experience to every Denver property we treat, and our 100% satisfaction guarantee means you can trust that we'll get it right.",
    faqItems: [
      { q: "Is Denver, NC really worse for mosquitoes than the east side of Lake Norman?", a: "The west shore communities including Denver and Sherrills Ford are widely recognized as having some of the most intense mosquito pressure on the entire lake, driven by the more irregular shoreline, numerous coves, and wetland margins along this section." },
      { q: "Do you serve all Denver, NC neighborhoods?", a: "Yes — we serve all Denver communities including Verdict Ridge, Sailview, Westport, Pebble Bay, Killian Crossing, and all surrounding Lincoln County neighborhoods on Lake Norman's west shore." },
      { q: "How do I deal with fire ants in my new Denver lawn?", a: "New construction lawns in Denver are particularly susceptible to fire ants due to disturbed soils. We recommend a combination of broadcast granular treatment and targeted mound treatment, with follow-up in spring and fall when colonies are most active." },
      { q: "Do you treat boat houses and dock areas?", a: "Yes — we treat all exterior structures including boat houses, docks, outbuildings, and storage areas using EPA-approved products appropriate for shoreline use." }
    ],
    schemaLocality: "Denver",
    schemaRegion: "NC",
    latitude: "35.5268",
    longitude: "-81.0293"
  },
  {
    slug: "pest-control-sherrills-ford-nc",
    name: "Sherrills Ford",
    state: "NC",
    county: "Catawba County",
    metaTitle: "Pest Control Sherrills Ford NC | Selke Pest Control | Lake Norman Exterminator",
    metaDescription: "Expert pest control in Sherrills Ford, NC. Serving Northview Harbour, Catalina Cove, Harbor Ridge, Lakepointe North & all Sherrills Ford communities on Lake Norman. Mosquito & tick specialists. Call 704-728-0204.",
    heroHeadline: "Sherrills Ford Pest Control Specialists",
    heroSubheadline: "Serving Northview Harbour, Catalina Cove, Harbor Ridge, Lakepointe North & all Sherrills Ford communities on Lake Norman",
    intro: "Sherrills Ford, North Carolina is one of Lake Norman's best-kept secrets — an unincorporated Catawba County community on the northwestern shore of the lake where the living is quieter, the lots are larger, and the natural setting is more preserved than the more urbanized Mecklenburg County communities to the south. Sherrills Ford attracts families seeking true lakefront living with a country feel, proximity to the lake, and the privacy that comes with Catawba County's lower development density. But that natural setting comes with one significant challenge: Sherrills Ford and the surrounding Terrell area consistently rank among the highest-mosquito-pressure residential areas on all of Lake Norman. At Selke Pest Control, we specialize in the specific pest challenges of Sherrills Ford's lakefront communities.",
    geographyPest: "Sherrills Ford occupies the northwestern shore of Lake Norman, adjacent to the Mountain Creek arm of the lake and near Mountain Creek Park — one of the largest undeveloped natural areas on the lake. This geography creates a uniquely intense pest environment. The Mountain Creek arm has extensive wetland margins and riparian areas that generate significant mosquito breeding activity. Sherrills Ford's properties are generally larger than Mecklenburg County neighborhoods, with more wooded acreage, more undeveloped adjacent land, and more wildlife pressure — meaning tick exposure is higher and more consistent throughout the warm season. The community's rural character also means more structure-dwelling pests like spiders and occasional wildlife intrusion.",
    topPests: [
      { name: "Mosquitoes", description: "Sherrills Ford is recognized as one of the highest-mosquito-pressure residential areas on Lake Norman. The Mountain Creek arm's wetland margins, the community's northwest shoreline exposure, and the numerous coves in this section of the lake create near-ideal mosquito breeding conditions from April through October. Properties near Mountain Creek Park or with low-elevation shoreline access require the most intensive treatment programs." },
      { name: "Ticks", description: "Sherrills Ford's rural character, large wooded lots, and proximity to Mountain Creek Park's undeveloped natural areas create significant tick exposure throughout the warm season. Deer are common in the area, serving as primary tick hosts that drive populations throughout the surrounding residential land. Lone star ticks, black-legged ticks, and American dog ticks are all documented in the area." },
      { name: "Termites", description: "Sherrills Ford's high moisture environment — driven by lake proximity and the area's naturally moist Catawba County soils — creates elevated termite risk compared to drier inland communities. Subterranean termites thrive in the moist wood and soil conditions common throughout Sherrills Ford, particularly in older structures and homes with crawl spaces." },
      { name: "Spiders & Wildlife Pests", description: "Sherrills Ford's rural setting means more outbuildings, boat storage, wood piles, and natural debris areas where spiders — including black widows and brown recluses — establish themselves. Wildlife intrusion from raccoons, opossums, and squirrels is also more common here than in urban communities." }
    ],
    neighborhoods: [
      { name: "Northview Harbour", pestNote: "Northview Harbour is a lakefront community in Sherrills Ford with direct Lake Norman access. Properties here face the full force of the northwest shore's mosquito pressure, combined with the tick activity common to Catawba County's wooded residential areas." },
      { name: "Catalina Cove", pestNote: "Catalina Cove's location in a cove along Lake Norman's northwest shore creates concentrated mosquito breeding conditions in the cove's sheltered waters. Cove properties experience more intense localized mosquito pressure than open shoreline lots." },
      { name: "Harbor Ridge", pestNote: "Harbor Ridge features estate-sized lots with significant wooded acreage — creating ideal tick habitat throughout the community. Properties with horses, dogs, or children who access wooded areas benefit most from quarterly tick perimeter treatments." },
      { name: "Lakepointe North", pestNote: "Lakepointe North is a newer Sherrills Ford community where ongoing development activity continues to disturb wooded land — driving displaced insects into established homes and creating fire ant-friendly disturbed soil environments throughout the community." },
      { name: "Pebble Bay", pestNote: "Pebble Bay at Sherrills Ford's direct lakefront exposure creates persistent summer-long mosquito pressure. The community's larger lots also provide ample wooded harboring areas for ticks and spiders throughout the season." }
    ],
    seasonalTips: "Sherrills Ford homeowners need to be among the first Lake Norman communities to start mosquito treatments each spring — the Mountain Creek arm's wetland areas warm quickly and mosquito populations emerge early. Begin treatments in late March for the best season-long results. Tick prevention should run March through November given Sherrills Ford's rural character. Fall termite inspections are recommended for any home with a crawl space or older wood structure in this high-moisture environment.",
    whySelke: "Sherrills Ford is the kind of community Selke Pest Control was built to serve — real families in a natural lakefront setting who need genuine pest protection, not a one-size-fits-all treatment from a national chain. We know this part of Lake Norman, we understand the specific pest pressures of Catawba County's northwest shore, and we treat every Sherrills Ford home with the attention it deserves. Call us and experience the difference of truly local pest control.",
    faqItems: [
      { q: "Why is Sherrills Ford so bad for mosquitoes?", a: "Sherrills Ford sits on Lake Norman's northwest shore adjacent to Mountain Creek Park's extensive wetland areas. The combination of lake proximity, wetland margins, and the area's more preserved natural character creates among the highest mosquito pressure of any community on Lake Norman." },
      { q: "Do you serve Sherrills Ford and Terrell?", a: "Yes — we serve all Sherrills Ford communities including Northview Harbour, Catalina Cove, Harbor Ridge, Lakepointe North, Pebble Bay, and all surrounding Catawba County communities near Lake Norman." },
      { q: "Should I be concerned about termites in Sherrills Ford?", a: "Sherrills Ford's high moisture environment from lake proximity and naturally moist Catawba County soils creates elevated termite risk. We recommend annual inspections for any home with a crawl space or wood-to-soil contact in this area." },
      { q: "How do I keep ticks off my property in Sherrills Ford?", a: "The most effective approach is a combination of professional perimeter barrier treatments, keeping lawn areas mowed, and maintaining a clear zone between lawn and wooded areas. We offer targeted tick treatments that significantly reduce tick populations throughout the season." }
    ],
    schemaLocality: "Sherrills Ford",
    schemaRegion: "NC",
    latitude: "35.6024",
    longitude: "-81.0018"
  },
  {
    slug: "pest-control-statesville-nc",
    name: "Statesville",
    state: "NC",
    county: "Iredell County",
    metaTitle: "Pest Control Statesville NC | Selke Pest Control | Iredell County Exterminator",
    metaDescription: "Professional pest control in Statesville, NC. Serving Larkin, Buffalo Shoals, River Oaks, Fifth Creek Estates, Falls Cove & all Statesville neighborhoods. General pest, mosquito & tick control. Call 704-728-0204.",
    heroHeadline: "Statesville, NC Pest Control Experts",
    heroSubheadline: "Serving Larkin, Buffalo Shoals, River Oaks, Fifth Creek Estates, Falls Cove & all Statesville communities",
    intro: "Statesville, North Carolina is the county seat of Iredell County — a historic city of approximately 30,000 residents situated at the crossroads of I-40 and I-77, making it one of the most strategically located cities in the western Piedmont. Statesville's combination of historic downtown neighborhoods, newer residential developments, and proximity to Lake Norman's northern arm creates a diverse pest management landscape. The city's position in the Piedmont foothills, with Fifth Creek, Buffalo Creek, and the South Yadkin River all running through or near the city, creates persistent mosquito and tick pressure throughout its residential areas. Selke Pest Control brings the same professional, family-owned approach to Statesville that has earned us 30 five-star reviews and a reputation for excellence throughout the Iredell County area.",
    geographyPest: "Statesville sits in the Piedmont foothills of Iredell County, slightly northwest of Lake Norman's northern arm. The city's creek-heavy geography — with Fifth Creek, Buffalo Creek, and their tributaries running through residential areas — creates significant standing water and riparian mosquito breeding habitat throughout the community. Statesville's historic neighborhoods feature large mature trees, aging wood structures, and the moisture conditions that support carpenter ant and termite activity. Newer developments on the city's southern and eastern edges push into previously wooded Iredell County land, creating tick and fire ant pressure in these growing residential corridors.",
    topPests: [
      { name: "Mosquitoes", description: "Fifth Creek and Buffalo Creek corridors run through Statesville's residential areas, creating persistent mosquito breeding zones throughout the community. The city's humid Piedmont climate and frequent summer rainfall keep mosquito populations active from April through October. Properties adjacent to these creek corridors experience the most significant pressure." },
      { name: "Ants (Carpenter & Fire)", description: "Statesville's historic neighborhoods feature older wood structures where moisture damage creates carpenter ant nesting opportunities. Fire ants are a persistent problem in the newer developments on the city's edges where disturbed soils and warm lawns provide ideal colony habitat." },
      { name: "Ticks", description: "Statesville's position in the Piedmont foothills means more wooded acreage, more deer, and more tick pressure than the more urbanized communities closer to Charlotte. Properties adjacent to Fifth Creek, Buffalo Shoals Road corridor, and the undeveloped land on the city's western edge experience elevated tick activity throughout the warm season." },
      { name: "Rodents", description: "Statesville's combination of historic downtown structures, commercial corridors, and the agricultural land surrounding the city drives significant rodent pressure year-round. Fall is the peak season for mouse and rat entry into homes, but Statesville's older building stock and commercial activity sustains rodent populations in all seasons." }
    ],
    neighborhoods: [
      { name: "Larkin", pestNote: "Larkin is one of Statesville's newer master-planned communities, built on land that was previously wooded Iredell County acreage. The community's newer construction means disturbed soils ideal for fire ants, and wooded lot lines that create tick and spider pressure throughout the growing season." },
      { name: "Buffalo Shoals", pestNote: "The Buffalo Shoals area of Statesville sits along the corridor where suburban development meets rural Iredell County land. Properties here face elevated tick and wildlife pressure from adjacent undeveloped land, combined with the mosquito activity generated by nearby creek systems." },
      { name: "River Oaks", pestNote: "River Oaks is a Statesville community where the name reflects the proximity to creek systems that create mosquito breeding activity throughout the warm season. The community's mature oak canopy also creates the moist, shaded conditions that spiders and carpenter ants favor." },
      { name: "Fifth Creek Estates", pestNote: "Fifth Creek Estates sits adjacent to the Fifth Creek corridor — one of the primary mosquito breeding waterways in the Statesville area. Properties in this community experience significant localized mosquito pressure driven directly by the creek, making professional barrier treatments particularly valuable here." },
      { name: "Falls Cove", pestNote: "Falls Cove's location features the natural waterway character that Statesville's creek system creates throughout its residential areas. Mosquito and tick pressure from the adjacent natural areas are the primary pest concerns for Falls Cove homeowners." }
    ],
    seasonalTips: "Statesville's Piedmont foothills location means a slightly shorter mosquito season than Lake Norman shoreline communities — typically May through September is the most active period. However, the city's creek corridors can generate significant localized pressure even in shoulder months. Carpenter ant swarms are common in Statesville's older neighborhoods in April and May — prompt treatment is important before colonies become established in wood structures. Fall rodent prevention, with perimeter inspections in September and October, is strongly recommended given the city's older building stock and rural surroundings.",
    whySelke: "Selke Pest Control's roots are in Iredell County — it's where we built our business and where we understand the pest landscape better than anyone. Statesville's mix of historic neighborhoods, new development, and creek-heavy geography presents pest challenges that require genuine local expertise. We bring 15+ years of Iredell County experience to every Statesville home, backed by our 100% satisfaction guarantee and a personal commitment to the communities we serve.",
    faqItems: [
      { q: "Do you serve all Statesville neighborhoods?", a: "Yes — we serve all Statesville neighborhoods including Larkin, Buffalo Shoals, River Oaks, Fifth Creek Estates, Falls Cove, and all surrounding Iredell County communities." },
      { q: "Are creek corridors really that significant for mosquitoes in Statesville?", a: "Yes — Fifth Creek, Buffalo Creek, and their tributaries are the primary drivers of mosquito pressure in many Statesville neighborhoods. Properties within a quarter mile of these waterways experience significantly more mosquito activity than those further away." },
      { q: "How do I know if I have carpenter ants vs termites in my Statesville home?", a: "Carpenter ants are larger (up to 1/2 inch), black or reddish-black, and push sawdust-like frass out of galleries. Termites leave mud tubes and damaged wood with a honeycomb appearance. Both require professional treatment — call us for a free inspection if you suspect either pest." },
      { q: "Do you offer same-week service in Statesville?", a: "Yes — most Statesville homeowners are scheduled within 2–3 days. For urgent situations we offer same-week and often same-day service." }
    ],
    schemaLocality: "Statesville",
    schemaRegion: "NC",
    latitude: "35.7829",
    longitude: "-80.8873"
  },
  {
    slug: "pest-control-troutman-nc",
    name: "Troutman",
    state: "NC",
    county: "Iredell County",
    metaTitle: "Pest Control Troutman NC | Selke Pest Control | Iredell County Exterminator",
    metaDescription: "Professional pest control in Troutman, NC. Local Iredell County experts serving Troutman and Lake Norman's northern communities. Mosquito, tick & general pest control. Call 704-728-0204.",
    heroHeadline: "Troutman, NC Pest Control",
    heroSubheadline: "Serving Troutman and Iredell County's Lake Norman communities — local experts just minutes away",
    intro: "Troutman, North Carolina is a small but growing town of roughly 5,000 residents tucked between Lake Norman's northern shore and the Iredell County foothills. Long known as the 'Christmas Tree Capital of North Carolina' for its historic Fraser fir industry, Troutman sits in a naturally lush, wooded landscape that creates year-round pest pressure for homeowners. The town's proximity to Lake Norman State Park — one of the most visited state parks in North Carolina — places it adjacent to thousands of acres of undeveloped woodland that serves as a continuous reservoir for mosquitoes, ticks, and wildlife. Selke Pest Control is based in neighboring Mooresville, making Troutman one of our most familiar and accessible service communities.",
    geographyPest: "Troutman's geography sits at the intersection of two distinct pest environments: the lake-adjacent moisture zone of Lake Norman's northern arm, and the rolling Iredell County foothills with their creek corridors and wooded ridgelines. Fourth Creek and its tributaries run through and near Troutman, creating standing water and riparian mosquito breeding zones throughout the residential areas. The town's wooded character — remnant of its Christmas tree farming heritage — means heavily vegetated lot lines, significant deer populations, and persistent tick pressure throughout the warm season. Homes adjacent to Lake Norman State Park's 1,328 acres of protected woodland experience the most significant wildlife and tick pressure of any community in the area.",
    topPests: [
      { name: "Mosquitoes", description: "Troutman's creek corridors, wetland areas, and proximity to Lake Norman create persistent mosquito pressure from spring through fall. Fourth Creek and the standing water that collects in the town's low-lying areas after summer storms are the primary breeding sources. Mosquito-borne illnesses including West Nile Virus and Eastern Equine Encephalitis are documented concerns in Iredell County." },
      { name: "Ticks", description: "The wooded lot lines, deer population, and proximity to Lake Norman State Park make Troutman one of the more tick-active communities in the region. Lone star ticks, black-legged ticks, and American dog ticks are all present and active from early March through late November. Lyme disease and Rocky Mountain spotted fever are documented tick-borne threats in the area." },
      { name: "Fire Ants", description: "Troutman's warm Piedmont climate and mix of open lawns and disturbed soils from ongoing residential growth support active fire ant colonies. Fire ant mounds appear quickly in spring after rain events and can become a painful hazard in lawn areas, gardens, and along driveways." },
      { name: "Rodents & Wildlife Pests", description: "Troutman's rural-to-suburban character and adjacency to Lake Norman State Park drives higher wildlife and rodent pressure than more urbanized communities. Mice and rats seek warmth in occupied homes as fall temperatures drop, and squirrel entry into attic spaces is a common complaint in Troutman's older homes." }
    ],
    neighborhoods: [
      { name: "Lake Norman State Park Area", pestNote: "Properties adjacent to Lake Norman State Park's 1,328 acres of protected woodland face some of the highest tick and wildlife pressure of any residential area in Iredell County. The park's large deer population drives tick activity into surrounding neighborhoods throughout the warm season." },
      { name: "Downtown Troutman", pestNote: "Troutman's historic downtown and surrounding older residential neighborhoods feature mature trees and aging wood structures that are susceptible to carpenter ant activity. The town's creek proximity also creates localized mosquito pressure for nearby streets." },
      { name: "Fourth Creek Corridor", pestNote: "Properties near Fourth Creek and its tributaries experience elevated mosquito breeding pressure throughout the warm season. Low-lying yards and drainage areas near the creek collect standing water that requires consistent professional treatment to manage effectively." },
      { name: "New Residential Areas", pestNote: "Troutman's growing number of newer subdivisions on the town's edges are built on previously wooded or agricultural land — creating disturbed soil ideal for fire ant colonies and wooded lot lines that deliver tick pressure directly to new homeowners." },
      { name: "Lake Norman Shoreline Communities", pestNote: "Troutman's Lake Norman shoreline properties face the same elevated mosquito pressure common to all northern lake communities. Monthly barrier treatments from April through October are the standard recommendation for lakeside properties." }
    ],
    seasonalTips: "Troutman's position between the lake and the Iredell foothills creates a pest season that starts early and runs late. Begin mosquito treatments in April — Lake Norman's moderating effect means mosquitoes emerge early on the northern shore. Tick prevention should run through November given the town's wooded character and deer population. Fall is critical for rodent prevention — Troutman's adjacency to undeveloped park land drives mice toward homes as temperatures drop. A quarterly general pest program keeps ants, spiders, and indoor pests controlled year-round.",
    whySelke: "Selke Pest Control is headquartered in Mooresville, just minutes from Troutman. We know this community, we know its pest pressures, and we can respond faster than any Charlotte-based competitor. Our 15+ years of Iredell County experience means we understand exactly what Troutman homeowners face — from the state park tick pressure to the creek corridor mosquito breeding. Local, family-owned, and backed by our 100% satisfaction guarantee.",
    faqItems: [
      { q: "Do you serve Troutman from your Mooresville base?", a: "Yes — Troutman is one of our closest service areas to our Mooresville home base. Most Troutman homeowners can be scheduled within 1–2 days." },
      { q: "Is Lake Norman State Park a real concern for tick pressure in Troutman?", a: "Absolutely. The park's 1,328 acres of undeveloped woodland and large deer population create a continuous tick reservoir that drives pressure into surrounding residential areas. Homes within a half mile of the park perimeter see the highest tick activity." },
      { q: "When should Troutman homeowners start mosquito treatments?", a: "We recommend starting in April for Troutman. The lake's northern shore tends to see early mosquito emergence, and creek corridor breeding can begin as soon as temperatures consistently reach the mid-50s." },
      { q: "Are fire ants a problem in Troutman?", a: "Yes — Troutman's warm climate and the mix of open lawns and disturbed soils from new construction make fire ants a persistent spring and summer pest. We offer both broadcast and targeted mound treatments." }
    ],
    schemaLocality: "Troutman",
    schemaRegion: "NC",
    latitude: "35.7007",
    longitude: "-80.8887"
  },
  {
    slug: "pest-control-weddington-nc",
    name: "Weddington",
    state: "NC",
    county: "Union County",
    metaTitle: "Pest Control Weddington NC | Selke Pest Control | Union County Exterminator",
    metaDescription: "Expert pest control in Weddington, NC. Serving Weddington's upscale Union County communities with mosquito, tick & general pest control. Family-owned, local experts. Call 704-728-0204.",
    heroHeadline: "Weddington, NC Pest Control",
    heroSubheadline: "Serving Weddington's communities with professional mosquito, tick & general pest control",
    intro: "Weddington, North Carolina is one of the most affluent and sought-after communities in the entire Charlotte metro — a small Union County town of approximately 14,000 residents known for its large estate lots, top-ranked schools, equestrian properties, and the quiet, wooded character that makes it one of the most desirable addresses in the region. Weddington's large properties, mature tree canopy, and equestrian-friendly land use create a pest environment that is notably more intense than Charlotte's more urbanized neighborhoods. Large lots mean larger yard perimeters to treat. Wooded buffers mean more tick harboring areas. Horses and other animals mean elevated flea, tick, and fly pressure. Selke Pest Control specializes in the pest management needs of Weddington's distinctive high-value properties.",
    geographyPest: "Weddington sits in the rolling Piedmont of Union County, south of Charlotte's most developed corridors. The town's landscape is characterized by large estate lots, wooded creek corridors, horse farms, and natural buffers — much of it deliberately preserved to maintain the rural character that attracts residents. Weddington Creek and its tributaries wind through residential areas, creating standing water mosquito breeding zones. The town's significant tree canopy, wooded lot lines, and adjacency to undeveloped Union County land create persistent tick pressure throughout the warm season. Properties with horses, dogs, or other outdoor animals face additional flea and tick pressure beyond what purely residential properties experience.",
    topPests: [
      { name: "Mosquitoes", description: "Weddington Creek, the numerous ponds on large estate properties, and the low-lying areas common throughout Union County's rolling terrain create significant mosquito breeding habitat. Large wooded lots with mature canopy also create the shaded, moist conditions that mosquitoes favor for daytime harboring." },
      { name: "Ticks", description: "Weddington's wooded estate lots, equestrian properties, and natural buffers create some of the most significant residential tick pressure in the Charlotte metro. Properties with horses bring deer ticks and lone star ticks in elevated numbers — these same species pose Lyme disease and ehrlichiosis risks to human family members and pets." },
      { name: "Fleas", description: "Weddington's high concentration of dogs, horses, and outdoor animals elevates flea pressure significantly compared to more urban communities. Flea infestations can establish quickly in properties with multiple pets or animal boarding areas, and require both indoor and outdoor treatment to fully resolve." },
      { name: "Ants & General Pests", description: "Weddington's large homes with extensive perimeters, multiple entry points, and the wooded lot character create significant ant pressure — particularly carpenter ants in moisture-affected wood structures and fire ants in open lawn areas. Spiders and occasional cockroach activity are consistent throughout the community." }
    ],
    neighborhoods: [
      { name: "Weddington Estates", pestNote: "Large estate properties in Weddington face proportionally larger perimeters to protect. Wooded lot lines deliver tick and spider pressure directly to outdoor living areas, and the expansive lawn areas are prime fire ant territory throughout spring and summer." },
      { name: "Equestrian Properties", pestNote: "Weddington's horse properties face elevated flea, tick, and stable fly pressure year-round. Animals that access wooded pastures and trail areas serve as tick hosts that bring populations directly into barns, paddocks, and adjacent residential structures." },
      { name: "Weddington Creek Corridor", pestNote: "Properties adjacent to Weddington Creek experience some of the highest mosquito pressure in the community. The creek's riparian vegetation and seasonal water levels create persistent breeding habitat throughout the warm season." },
      { name: "New Developments", pestNote: "Weddington's newer subdivisions are built on previously wooded Union County land where disturbed soils drive fire ant establishment and wooded buffers deliver tick pressure. New homeowners often underestimate pest activity until the first full warm season." },
      { name: "Marvin / Weddington Border Area", pestNote: "The Marvin-Weddington border communities share the same wooded Union County character — large lots, significant tree canopy, and creek corridors that create year-round mosquito and tick pressure for all residents of this desirable area." }
    ],
    seasonalTips: "Weddington homeowners should plan for a full April–October mosquito season driven by creek corridors and estate pond features. Tick prevention is critical from March through November given the wooded character and animal populations throughout the community. Fall is prime time for flea re-infestation if outdoor animals are bringing ticks and fleas in from wooded pastures. A year-round quarterly general pest program keeps the ants, spiders, and indoor pests controlled through every season on large estate properties.",
    whySelke: "Weddington's high-value properties deserve a pest control partner who treats them with the attention they require. Selke Pest Control brings 15+ years of Charlotte metro experience, a family-owned commitment to personal service, and the knowledge to address the unique pest pressures of estate properties, equestrian land, and Union County's wooded landscape. Our 100% satisfaction guarantee means we stand behind every treatment, every visit.",
    faqItems: [
      { q: "Do you service equestrian properties and horse farms in Weddington?", a: "Yes — we have experience treating properties with horses, barns, and paddock areas. We use EPA-approved products appropriate for animal environments and address the elevated flea, tick, and fly pressure these properties experience." },
      { q: "How does having a large wooded lot affect my pest treatment needs?", a: "Larger wooded lots require more extensive perimeter treatments and typically see higher tick and mosquito pressure than smaller suburban lots. We account for lot size and wooded character when designing your treatment program." },
      { q: "Are ticks really that bad in Weddington?", a: "Yes — Weddington's combination of wooded estate lots, natural buffers, and animal populations creates above-average tick pressure compared to more urban Charlotte communities. Lone star ticks, black-legged ticks, and American dog ticks are all active throughout the warm season." },
      { q: "How often should I treat for mosquitoes in Weddington?", a: "Monthly treatments from April through October provide the best protection for Weddington properties. Homes with ponds, creek frontage, or extensive wooded areas benefit most from consistent monthly service." }
    ],
    schemaLocality: "Weddington",
    schemaRegion: "NC",
    latitude: "35.0468",
    longitude: "-80.7609"
  },
  {
    slug: "pest-control-waxhaw-nc",
    name: "Waxhaw",
    state: "NC",
    county: "Union County",
    metaTitle: "Pest Control Waxhaw NC | Selke Pest Control | Union County Exterminator",
    metaDescription: "Professional pest control in Waxhaw, NC. Serving Waxhaw's historic and growing Union County communities with mosquito, tick & general pest control. Family-owned local experts. Call 704-728-0204.",
    heroHeadline: "Waxhaw, NC Pest Control Experts",
    heroSubheadline: "Serving Waxhaw's communities with professional mosquito, tick & general pest control",
    intro: "Waxhaw, North Carolina is a charming Union County town of approximately 20,000 residents — one of the fastest-growing communities in the entire state — known for its beautifully preserved historic downtown, antique district, and the mix of older established neighborhoods and brand-new master-planned communities that characterize its rapid growth. Waxhaw's position in Union County's rolling Piedmont, adjacent to Waxhaw Creek and surrounded by the woodlands and farmland of southern Mecklenburg and Union counties, creates a distinctly active pest environment. As new subdivisions continue to push into previously wooded land, displaced insects and wildlife move directly into established homes. Selke Pest Control serves Waxhaw homeowners across the full range of the community — from historic homes near downtown to the newest developments on the town's expanding edge.",
    geographyPest: "Waxhaw sits along Waxhaw Creek in the southern Piedmont, where the rolling terrain creates numerous drainage swales, retention ponds, and low-lying areas that collect standing water throughout the warm season. The town's rapid growth has left a patchwork of new construction zones, wooded buffers, and established neighborhoods — creating the disturbed-soil conditions that fire ants exploit aggressively. Waxhaw's wooded lot lines, creek proximity, and the large undeveloped Union County land surrounding the town create persistent tick pressure throughout the warm months. The town's historic character also means older wood structures in downtown-adjacent neighborhoods that are susceptible to carpenter ant and occasional termite pressure.",
    topPests: [
      { name: "Mosquitoes", description: "Waxhaw Creek and its tributaries, combined with the retention ponds and drainage swales throughout Waxhaw's newer subdivisions, create significant mosquito breeding habitat throughout the community. Hot, muggy Union County summers keep Aedes and Culex mosquito populations active from late April through October." },
      { name: "Ticks", description: "Waxhaw's mix of dense woodlands, grassy transition areas, and open fields creates favorable tick habitat throughout the community. Black-legged ticks that carry Lyme disease and lone star ticks are both present and active from early spring through late fall. Families with dogs who access wooded trail areas are at meaningful risk of tick exposure." },
      { name: "Fire Ants", description: "Waxhaw's ongoing construction activity and warm Union County climate create prime conditions for aggressive fire ant colonies. New lawns in growing subdivisions are particularly vulnerable — fire ant mounds can appear within weeks of a lawn being seeded in disturbed soil areas." },
      { name: "Ants, Spiders & General Pests", description: "Waxhaw's small-town character means homes with wooded backyards, crawl spaces, and the mature landscaping that comes with established neighborhoods — all creating habitat for ants, spiders, and occasional cockroach activity. Historic homes near downtown are particularly susceptible to moisture-related pest issues." }
    ],
    neighborhoods: [
      { name: "Historic Downtown Waxhaw", pestNote: "The older homes near Waxhaw's beloved antique district feature aging wood structures and crawl spaces that are more susceptible to carpenter ant and moisture pest activity. The charming historic character comes with pest management challenges specific to older construction." },
      { name: "Waxhaw Creek Corridor", pestNote: "Properties adjacent to Waxhaw Creek experience elevated mosquito pressure driven by the creek's riparian vegetation and seasonal water levels. Monthly professional barrier treatments are the most effective way to reclaim outdoor spaces near the creek." },
      { name: "New Subdivisions (South & East Waxhaw)", pestNote: "Waxhaw's newest developments on the town's growing edge are built on previously wooded Union County land. Disturbed soils drive rapid fire ant colony establishment, while wooded lot lines deliver tick pressure throughout the first several years of a subdivision's development." },
      { name: "Bridgewater", pestNote: "Bridgewater is one of Waxhaw's established master-planned communities where mature landscaping, HOA-maintained common areas with irrigation, and wooded buffers create the full range of pest pressures — mosquitoes, ticks, fire ants, and general household pests." },
      { name: "Millbridge", pestNote: "Millbridge is a large, fast-growing Waxhaw community where ongoing construction continues to displace insects from wooded land into established homes. The community's numerous retention ponds and irrigation-heavy landscaping create significant mosquito breeding habitat." }
    ],
    seasonalTips: "Waxhaw homeowners should expect a full mosquito season from April through October driven by Waxhaw Creek and subdivision retention ponds. Spring (March–May) is the critical window for ant and tick prevention before populations explode with warm weather. New construction homes should address fire ant treatment in the first spring after moving in — disturbed soils around new construction create rapid colony establishment. Fall perimeter treatments help prevent the rodents, stink bugs, and spiders that seek warmth indoors as Union County temperatures drop.",
    whySelke: "Selke Pest Control brings genuine local expertise to Waxhaw — we understand Union County's pest dynamics, the challenges of both historic and new construction homes, and the specific pressures that come with Waxhaw's creek-adjacent and wooded-lot character. We're family-owned, personally invested in every job, and backed by a 100% satisfaction guarantee. When pests return between treatments, we return — no questions asked.",
    faqItems: [
      { q: "Do you serve both historic Waxhaw and the newer subdivisions?", a: "Yes — we serve all of Waxhaw including historic downtown neighborhoods, Bridgewater, Millbridge, and all of the newer subdivisions on the town's growing edge." },
      { q: "Are fire ants especially bad in Waxhaw?", a: "Yes — Waxhaw's rapid growth and ongoing construction activity create significant disturbed soil that fire ant colonies exploit aggressively. New lawns and newly seeded areas are particularly vulnerable in spring." },
      { q: "How do creek corridors affect mosquito pressure in Waxhaw?", a: "Waxhaw Creek and its tributaries create persistent mosquito breeding zones throughout the community. Properties within a few blocks of the creek often see mosquito activity that starts earlier and lasts later than homes further away." },
      { q: "Can you treat crawl spaces and historic home structures in Waxhaw?", a: "Yes — we have experience treating older home structures including crawl spaces, which are common in Waxhaw's historic neighborhoods and are prime habitat for moisture pests, spiders, and occasional cockroaches." }
    ],
    schemaLocality: "Waxhaw",
    schemaRegion: "NC",
    latitude: "34.9243",
    longitude: "-80.7412"
  },
  {
    slug: "pest-control-matthews-nc",
    name: "Matthews",
    state: "NC",
    county: "Mecklenburg County",
    metaTitle: "Pest Control Matthews NC | Selke Pest Control | Mecklenburg County Exterminator",
    metaDescription: "Professional pest control in Matthews, NC. Serving Matthews and southeastern Mecklenburg County with mosquito, tick & general pest control. Family-owned local experts. Call 704-728-0204.",
    heroHeadline: "Matthews, NC Pest Control Experts",
    heroSubheadline: "Serving Matthews and southeastern Mecklenburg County with professional mosquito, tick & general pest control",
    intro: "Matthews, North Carolina is a thriving Mecklenburg County town of approximately 35,000 residents situated just southeast of Charlotte — one of the original bedroom communities of the Charlotte metro that has evolved into a destination in its own right, with a vibrant downtown, excellent schools, and the established residential character that comes with decades of thoughtful growth. Matthews sits along McAlpine Creek and its tributaries, which wind through the community and create the same kind of creek-corridor pest pressure found throughout the greater Charlotte area. The town's mature neighborhoods, significant tree canopy, and proximity to McAlpine Creek Greenway and other natural areas create year-round pest activity that requires professional management.",
    geographyPest: "Matthews occupies the rolling Piedmont terrain of southeastern Mecklenburg County, where McAlpine Creek and several tributaries create the primary mosquito breeding corridors through the community. The town's established neighborhoods feature mature hardwood trees, well-developed landscaping, and the naturally moist understory conditions that mosquitoes and ticks favor for harboring. Matthews also sits adjacent to several large Mecklenburg County parks and greenways — including McAlpine Creek Park — that create wildlife and tick corridors running directly through residential areas. The town's mix of older established neighborhoods and newer construction on its southeastern edges creates a diverse pest landscape that ranges from carpenter ant pressure in aging structures to fire ants in newly disturbed soils.",
    topPests: [
      { name: "Mosquitoes", description: "McAlpine Creek and its tributaries are the primary drivers of mosquito pressure in Matthews. The creek corridor runs through the middle of the community, creating standing water breeding zones and riparian vegetation harboring areas that sustain mosquito populations from April through October. Neighborhoods adjacent to McAlpine Creek Park and the greenway corridor see the most significant activity." },
      { name: "Ticks", description: "Matthews's tree-lined neighborhoods, creek corridors, and adjacency to McAlpine Creek Park create active tick habitat throughout the community. Black-legged ticks and American dog ticks are documented in Mecklenburg County, with tick-borne illness risk including Lyme disease and Rocky Mountain spotted fever." },
      { name: "Ants (Carpenter & Fire)", description: "Matthews's established neighborhoods feature older wood structures where moisture-damaged wood creates carpenter ant nesting opportunities — a common issue in homes dating to the 1980s and 1990s throughout the community. Fire ants are persistent in open lawn areas and in newer developments on Matthews's eastern edge." },
      { name: "Cockroaches & Indoor Pests", description: "Matthews's proximity to Charlotte's urban commercial corridors means some cockroach migration pressure from nearby restaurant and retail areas into residential neighborhoods. American cockroaches are occasional visitors in older Matthews homes, while German cockroaches can establish in kitchens and bathrooms year-round." }
    ],
    neighborhoods: [
      { name: "Downtown Matthews", pestNote: "Matthews's charming downtown and surrounding established neighborhoods feature mature trees and older home structures where carpenter ant and spider activity are most common. The annual Matthews Alive festival grounds and commercial corridor create additional pest pressure from nearby food service areas." },
      { name: "McAlpine Creek Corridor", pestNote: "Properties adjacent to McAlpine Creek and its greenway experience the highest mosquito pressure in Matthews. The creek's riparian vegetation and the greenway's natural buffers create persistent harboring and breeding areas that drive mosquito populations into surrounding streets throughout the warm season." },
      { name: "Sardis Road Area", pestNote: "The Sardis Road corridor and surrounding neighborhoods represent some of Matthews's most established residential areas, where mature landscaping and wooded lot lines create consistent tick and mosquito pressure in well-maintained yards." },
      { name: "New Providence Area", pestNote: "Newer developments in the New Providence Road corridor are built on previously wooded Mecklenburg County land, where disturbed soils drive fire ant establishment and wooded buffers create tick pressure for new homeowners throughout their first several seasons." },
      { name: "Stallings Border Area", pestNote: "The Matthews-Stallings border communities share the rolling Union/Mecklenburg County terrain and creek-corridor character that creates mosquito and tick pressure throughout this section of the eastern Charlotte metro." }
    ],
    seasonalTips: "Matthews homeowners face a typical Mecklenburg County pest calendar: mosquito season runs April through October driven by McAlpine Creek; carpenter ant swarm season peaks in April and May in older neighborhood homes; tick season runs March through November in wooded areas and along the greenway. Fall brings the classic Charlotte metro rodent and stink bug invasion as temperatures drop. A quarterly general pest program combined with monthly mosquito treatments April–October provides comprehensive year-round protection.",
    whySelke: "Selke Pest Control brings the same family-owned, personally committed approach to Matthews that has earned us 30 five-star reviews across the Charlotte metro. We know Mecklenburg County's pest pressures, we understand the specific challenges of both Matthews's established older neighborhoods and its newer developments, and we treat every home as if it were our own. Our 100% satisfaction guarantee means if pests return between treatments, so do we — at no charge.",
    faqItems: [
      { q: "Do you serve all Matthews neighborhoods including near McAlpine Creek?", a: "Yes — we serve all of Matthews including neighborhoods adjacent to McAlpine Creek, McAlpine Creek Park, and the greenway corridor, as well as all established and newer residential communities throughout town." },
      { q: "Is McAlpine Creek a significant source of mosquitoes in Matthews?", a: "Yes — McAlpine Creek and its tributaries are the primary mosquito pressure drivers in Matthews. The creek corridor creates standing water and riparian vegetation that sustains mosquito breeding throughout the warm season. Properties within several blocks of the creek see the most activity." },
      { q: "Are carpenter ants common in older Matthews homes?", a: "Yes — Matthews's established neighborhoods from the 1980s and 1990s frequently see carpenter ant activity in moisture-affected wood structures. Spring is the most active swarm season. We offer thorough inspections and targeted treatments for carpenter ant issues." },
      { q: "How soon can you schedule service in Matthews?", a: "Most Matthews homeowners are scheduled within 2–3 days. For urgent situations we offer same-week and often same-day service." }
    ],
    schemaLocality: "Matthews",
    schemaRegion: "NC",
    latitude: "35.1171",
    longitude: "-80.7201"
  }
];
