require("dotenv").config();
require("../config/dbconnect");
const bikeModel = require("../models/Bike");
const mongoose = require("mongoose");

const seedBike = [
  // Aprilia

  {
    name: "RSV4 X",
    brand: "Aprilia",
    engine: 1100,
    horsepower: 225,
    price: 39900,
    type: "Sportbike",
    usage: [],
    A2: false,
    description: `It may be too late to get your hand on one of the 10 hand-built 2020 Aprilia RSV4 X superbikes, but you probably didn't have an extra $45,000 to blow on your next trackday bike anyway. Yet here we are, drooling over the most exotic RSV4 1100 ever made. The bike is built by hand, one at a time, by Aprilia Racing Factory technicians who meticulously equip this beautiful motorcycle with the latest technological advancements they have developed over the past decade of World Superbike and MotoGP competition.`,
    image:"https://www.motorcyclistonline.com/resizer/L6Pp_9hk3aYGn1VxCItz8ae1Zog=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VUXO422RRC7UPHC632TJTBUAUE.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/VHcg2JmmnmBr8RL-k4qvVyx6n_s=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VC42IDBLBCSYHWFCTTFGHE3OYM.jpg",
      "https://www.motorcyclistonline.com/resizer/v474liNTVnrFNAZVS-EnNSsrbbo=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/K7WQGZO6LUHYKL32SEUJ2ELFJE.jpg"
    ],
    link: "https://www.aprilia.com/fr_FR/moto/"
  },

  {
    name: "RS 660",
    brand: "Aprilia",
    engine: 660,
    horsepower: 95,
    price: 12000,
    type: "Sportbike",
    usage: [],
    A2: false,
    description: `The truly special element of the RS 660 platform is the new parallel-twin engine. According to Aprilia, it is basically the RSV4 powerplant, minus the rear cylinders. Sound wild? We thought so too. Aprilia says this is just the first of an entire new lineup of motorcycles that will utilize this compact engine (we suspect the Tuono 660 will be next). Aprilia claims the forward-facing twin with its 270-degree crank will pump out 100 hp, which will be modulated through the same ride-by-wire system used on the superbikes.`,
    image:"https://www.motorcyclistonline.com/resizer/o5njXTtkXe-MARjaGJ-PP-wnbH8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ETZEBOMKTYWQRZLJ6BGRJSAOKU.jpg",
    gallery: ["https://www.motorcyclistonline.com/resizer/bcSmafhnlG78FlgxFpHU-BRBg08=/811x1081/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RRXC24GTU4Q6FGTFPV5EWVOGRE.jpg", ''],
    link: "https://www.aprilia.com/fr_FR/landing/RS-660//"
  },

  // Arch

  {
    name: "KRGT-1",
    brand: "Arch",
    engine: 2032,
    horsepower: 120,
    price: 70000,
    type: "Cruiser",
    usage: [],
    A2: false,
    description:"The ARCH KRGT-1 sets a new benchmark for the performance cruiser category. Powered by an ARCH / S&S 124ci V-Twin and with a distinctive aggressive profile the KRGT-1 is equally at home cruising highways or carving canyon roads. The ARCH Motorcycle KRGT-1 features bespoke Ohlins / ARCH suspension front and rear, coupled with BST carbon wheels which reduce unspring mass. These elements work as part of a chassis architecture developed to deliver incredible feedback and control. An all new ARCH / Bosch ABS system is fitted as standard, working with ISR radial calipers for optimum response and safety. The 124ci S&S V-Twin engine is tuned to deliver high torque on demand with enhanced performance through a unique ARCH downdraft breathing system incorporated between the stunning billet aluminum tank halves.",
    image:"https://www.motorcyclistonline.com/resizer/OjelJRvZPXWsq7p75aSOTzYplrw=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VNUUMMUV7LB6DM42RWYSTR4VII.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/PlOnWXDKjCnee9oVfOUo6_aFKuQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/6HUJZDCX5GPCHGIO6LKPTMJAMQ.jpg",
      "https://www.motorcyclistonline.com/resizer/xLXy1m89u9bFByD7kiEXhTeXcuY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/P5VSU2NDGPLMGT5HMZ43PWEUJM.jpg"
    ],
    link: "https://www.archmotorcycle.com/krgt1"
  },

  // BMW

  {
    name: "S 1000 XR",
    brand: "BMW",
    engine: 999,
    horsepower: 165,
    price: 17000,
    type: "Dual-sport",
    usage: [],
    A2: false,
    description: `BMW have given its S 1000 XR an extensive overhaul, with revisions being revealed during this year's EICMA show in Milan. Changes include an update to the 999cc engine, suspension refinements, new electronics, updated looks, and weight reduction over last year's model.`,
    image:"https://www.motorcyclistonline.com/resizer/uyh2E2x3BsL_FlVTO32au31C87s=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/NY5TYOXCM4YKE66NLHNBSYZ4BE.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/LWT8H8K2oidnOY5bKflbfafD6gk=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4CDB5LHAFR577S5JLHJKCQDLEA.jpg"
    ],
    link: "https://www.motobmw.fr/"
  },

  {
    name: "F 900",
    brand: "BMW",
    engine: 895,
    horsepower: 105,
    price: 10995,
    type: "Dual-sport",
    usage: [],
    A2: false,
    description: `As noted in the preview of the new F 900 R, the F 900 XR benefits from a newly developed 895cc parallel-twin engine with an eight-valve, DOHC cylinder head. The mill was first introduced in the 2018 F 850 GS, but now offers 105 hp and 67.8 pound-feet of torque, meaning the 482.8-pound ready-to-ride machine will pack enough of a punch to have some fun in the twisties. It’s equipped with an anti-hopping, mechanically operated clutch standard, which can be upgraded with BMW’s electronic quickshifter if desired.`,
    image:"https://www.motorcyclistonline.com/resizer/zTUmcce9BUVMtxldmPg4JioZFu8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7T5EQTUZYK6PTW2UV5W44IWCKU.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/tzFF99P8AhPgWSnJlf19VRjvJN4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/R3PWM5CBYYL6TAHK2QBLAKGZQM.jpg",
      "https://www.bmw-motorrad.fr/content/dam/bmwmotorradnsc/common/multiimages/images/models/adventure/f900xr/nsc-F900XR-2560x1440.jpg.asset.1571140838882.jpg"
    ],
    link: "https://www.motobmw.fr/"
  },

  {
    name: "F 900 R",
    brand: "BMW",
    engine: 895,
    horsepower: 105,
    price: 8870,
    type: "Roadster",
    usage: [],
    A2: false,
    description: `The F 900 R is propelled by a larger-displacement liquid-cooled 895cc parallel twin with an eight-valve DOHC cylinder head. It gains 42cc via 2mm-larger cylinder bore (86mm). Forged pistons replace the cast components squeezing fuel to a lofty 13.1:1 compression ratio. The crankshaft fires at a 90-degree offset giving this powerplant the sound and feel of a 90-degree V-twin. Spent fuel is purged via an underbelly stainless steel exhaust.`,
    image:"https://www.motorcyclistonline.com/resizer/LLyWviMOXAoxDhTAja5R2_LHgew=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UGFIK2U3FIOTUFALTAPFELNLLE.jpg",
    gallery: [
      `https://www.motorcyclistonline.com/resizer/DZZVqhuH8Y25DDBbauU1-Hs8Lp4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ABCBO6T5LHWJI2CHW2KNVAYBCQ.jpg`,
      "https://www.motorcyclistonline.com/resizer/p2vxNv3oC1NiGBm3Y75WIR1MRCE=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AWRGH3YHMETN3PJYIGFPO4NOSM.jpg"
    ],
    link: "https://www.motobmw.fr/"
  },

  // Ducati

  {
    name: "Panigale V2",
    brand: "Ducati",
    engine: 995,
    horsepower: 155,
    price: 18290,
    type: "Sportbike",
    usage: [],
    A2: false,
    description: `Perception colors everything we look at. Walmart shoppers will see the Panigale V2 as simply a warmed-over 959 Panigale—the last model from Ducati's "super-mid" line that began with the 748 and kept growing. Others might see a 21st-century reimagination of the revered 916 superbike from the 1990s, more powerful than any sub-liter Ducati production superbike ever built.`,
    image:
      "https://www.motorcyclistonline.com/resizer/c8G_SkIHrw8N1uoxiI0qMiVXHAE=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/MBXIKDGBSG2DK3MMZBGKXC7K54.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/VS-fGb4G2Ic9M9s4kdaDQFzHdBg=/1199x839/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7QBMNWE4RZUBR7FVWI4SXPVH4Y.jpg",
      "https://www.motorcyclistonline.com/resizer/v9amcF4apVTcn-L2u6314EFY5Jk=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/DBRBXVCOT5AFI4QEGIRJECCTVY.jpg"
    ],
    link: "https://www.ducati.com/fr/fr/home"
  },

  {
    name: "Panigale V4 / V4S",
    brand: "Ducati",
    engine: 1103,
    horsepower: 214,
    price: 23290,
    type: "Sportbike",
    usage: [],
    A2: false,
    description: `Straight away, Ducatisti will notice both models now resemble the homologation special, boasting the same slippery bodywork that punches a larger hole through the air and gives the rider a larger cockpit to hide behind. Both models are visually distinguished from the R by their painted steel tanks and plastic winglets (the R features a brushed aluminum tank and carbon fiber wings). During the world premiere in Rimini on the Adriatic coast of Italy, Ducati CEO Claudio Domenicali said the aerodynamic package makes a palpable difference on the track: During testing at Jerez—from the last corner to the finish line—the 2020 model gained 2.5 meters on the 2019 model. So there you go.`,
    image: "https://i.ytimg.com/vi/MzgIhPpASTg/maxresdefault.jpg",
    gallery: [
      "https://media.motoservices.com/media/cache/vehicle_detail/media/vehicle/1853/2018-ducati-panigale-v4-breaks-cover-and-is-amazing-121491-1.jpg",
      "https://www.motorcyclistonline.com/resizer/bKAX1FSQdIJR2Asnw-IXFBupHaw=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/J75AQ3UBV5KPIFUTWHT2NGFU2M.jpg"
    ],
    link: "https://www.ducati.com/fr/fr/home"
  },

  {
    name: "Multistrada 1260 S Grand Tour",
    brand: "Ducati",
    engine: 1262,
    horsepower: 158,
    price: 22690,
    type: "Dual-sport",
    usage: [],
    A2: false,
    description: `Ducati has already announced that come next year, some version of the Desmosedici Stradale powerplant will make its way into the Multistrada. Until then, it's giving the 1,262cc DVT Testastretta Evoluzione DVT motor one last chance to shine in the Multistrada 1260 S Grand Tour.`,
    image:
      "https://www.motorcyclistonline.com/resizer/Gq-Vu_UvO9t_NBY5PtBg_jXriIg=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ES3JSQ4WOEXVWJVEJRRHVGGSLQ.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/q8mDj7vZyqVGH5JOz2xXV1JtrJQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OGPJSYHFZYWGGD7WFGQWLG35GI.jpg",
      "https://www.motorcyclistonline.com/resizer/a_HPJPzN4oDxELR__GwaWmt3wRc=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ENDROOZOUWIO4N7QTKJZV37VIA.jpg"
    ],
    link: "https://www.ducati.com/fr/fr/home"
  },

  // Guzzi

  {
    name: "V85 TT Travel",
    brand: "Moto Guzzi",
    engine: 853,
    horsepower: 80,
    price: 13045,
    type: "Dual-sport",
    usage: [],
    A2: true,
    description: `Meet the 2020 V85 TT Travel. Building off the success of the V85 TT adventure bike, the Travel will offer a compliment of touring accessories as standard equipment, including spacious panniers, a tall windscreen, heated grips, and LED driving lights. The Moto Guzzi MIA infotainment system offers smartphone connectivity and management of the electronic rider assist functions including three Ride Modes (Road, Rain, Off-road), and selectable traction control, all from the instrument panel.`,
    image:
      "https://www.motorcyclistonline.com/resizer/qKDdk86EGdrGG6CTFniL2iisqWY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RROPP7RCDFBHXMRQPPHUPVQMIU.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/c7Ab7BB6SkL1jCww1ms5DZ6BOrU=/1199x1598/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WKWW6FFZESWWOZZHDYBNFVQUD4.jpg",
      "https://www.motorcyclistonline.com/resizer/K9UY7X5hfb8J9I-V_nFUObAMEU0=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XHGHSON6ZGWTDKTBGXTBY4CL5Q.jpg"
    ],
    link: "https://www.motoguzzi.com/fr_FR/motos/"
  },

  {
    name: "V7 III Stone S",
    brand: "Moto Guzzi",
    engine: 744,
    horsepower: 52,
    price: 8599,
    type: "Standard-retro",
    usage: [],
    A2: true,
    description:
      "The Stone S calls on the tradition of Moto Guzzi’s performance models of the 1970s including the 1974 750 S and the 1971 V7 Sport with its S designation and follows the exclusive nature of those motorcycles by being limited to just 750 units. Each Stone S produced will have its serial number engraved on the handlebar riser clamp, the only 2020 V7 III model to do so.",
    image:
      "https://www.motorcyclistonline.com/resizer/w_pJ3aZ9HPS8DIoU6qtf6Q7aHa8=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/66YYEIOXVPWTVQLLBEOSZGRMFY.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/X8LuqUCUTMamAMwPGY246WJDwz4=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HKEZX4BO2463S4KOBN6Y6LLUOE.jpg",
      "https://www.motorcyclistonline.com/resizer/d4v7gQ1m1tqvqse0xCnpU2zrqJU=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/KU2F2CNA2GFPM4LZ5MTCRPVX3U.jpg"
    ],
    link: "https://www.motoguzzi.com/fr_FR/motos/"
  },

  // Harley

  {
    name: "Low Rider S",
    brand: "Harley Davidson",
    engine: 1868,
    horsepower: 93,
    price: 19990,
    type: "Cruiser",
    usage: [],
    A2: false,
    description:"The new Low Rider S is an up-spec and completely blacked-out version of the popular Low Rider that has been a mainstay in the H-D lineup for years. The comfortable riding position starts with a motocross-style handlebar, forward controls, combined with a low (26.5 inches) seat height, and the fun comes courtesy of its Milwaukee-Eight 114 engine.",
    image:"https://www.motorcyclistonline.com/resizer/XXqaHdrUIIZnNtjQLjaVgKiLZgQ=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HYHQ5N632K5B4E4C6ALC4FOOW4.jpg",
    gallery: [
      "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/low-rider-s/paint-360/dom/c25/20-hd-low-rider-s-bike-c25-01.jpg"
    ],
    link: "https://www.harley-davidson.com/fr/fr/motorcycles/index.html"
  },

  {
    name: "Road Glide Limited",
    brand: "Harley Davidson",
    engine: 1868,
    horsepower: 89,
    price: 26690,
    type: "Touring",
    usage: [],
    A2: false,
    description:'Harley calls the Road Glide Limited its "fully loaded Grand Touring machine" because it comes with all the latest in creature comforts designed to make your long-distance ride as comfortable as possible. It starts up front with the frame-mounted fairing, 13.5-inch windshield, and Boom! Box GTS infotainment center with H-D Connect service. Its big Milwaukee-Eight 114 engine is tuned for torque, giving the rider access to loads of pulling power at the twist of a wrist, and the ultra-bright dual Daymaker Reflector LED headlights are there to shed some light on things if your route takes you into the night. The huge Tour-Pak carrier system features three massive saddlebags and top case to haul your various personal items while the electronic Reflex Linked Brembo brakes with ABS help you remain safe throughout the ride. All of this is available with the chrome package or a blacked-out version.',
    image:"https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/road-glide-limited/gallery/20-touring-road-glide-limited-gallery-10.jpg?impolicy=myresize&rw=1137",
    gallery: [""],
    link: "https://www.harley-davidson.com/fr/fr/motorcycles/index.html"
  },

  {
    name: "Streetfighter",
    brand: "Harley Davidson",
    engine: 975,
    horsepower: 115,
    price: 0,
    type: "Roadster",
    usage: [],
    A2: false,
    description: `Harley-Davidson formally announced a number of new motorcycles, including this upright naked-style streetbike. Dubbed a streetfighter, The Motor Company says this prototype will make its way to production for the 2020 model year. The engine is a version of Harley’s new multi-purpose water-cooled V-twin that powers both the Pan America adventure-bike and the company's new roadster-looking custom, only smaller, with an 975cc capacity according to Harley. Similarly to the other three models, the engine appears to employ a 60-degree vee with large cylinder heads hide a pair of double overhead camshafts. This will help give the necessary power and performance that a modern naked bike needs to compete in this red-hot segment. A low-mounted slash-cut exhaust looks tough and sounds the part, too, based on what we heard during Harley-Davidson’s promotional video. The tubular steel frame also appears similar to the custom/roadster unit, but the streetfighter gets a stubbier and more rigid-looking swingarm, most likely to boost maneuverability and rear grip during fast-paced rides. The prototype rolls on conventionally sized (within the class) 17-inch spoke alloy wheels shod in Michelin’s older-style Pilot Power 2CT rubber, in traditional sizes (120/70-17 front, 180/55-17 rear).`,
    image:"https://www.motorcyclistonline.com/resizer/5J8NhgM1_K-jnO09cCjxPnWtDJY=/1199x899/filters:focal(500x375:501x376)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/5OFFBIBNMF6U53KCPQFXIQWBQY.jpg",
    gallery: [
      "https://i.pinimg.com/originals/f0/a6/a0/f0a6a0b720c00d3429ebcb712409342e.jpg"
    ],
    link: "https://www.harley-davidson.com/fr/fr/motorcycles/index.html"
  },

  {
    name: "CVO Street Glide",
    brand: "Harley Davidson",
    engine: 1923,
    horsepower: 106,
    price: 40090,
    type: "Touring",
    usage: [],
    A2: false,
    description: "Features making this Glide “Limited” are a gloss-finish inner fairing, heated handgrips, painted pinstriping (stickers are so low-rent…), and new medallions on the tank and front and rear fenders. New wheels too, dubbed Slicer II Contrast Bright wheels. We’re told the Limited is equipped with “premium touring suspension,” with rear-shock preload being easy to adjust.",
    image:"https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/touring/street-glide/overview/dom/19-touring-street-glide-hero.jpg",
    gallery: [
      "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/cvo/cvo-street-glide/overview/hdi/19-cvo-cvo-street-glide-hdi-hero.jpg",
      "https://www.motorcyclistonline.com/resizer/bjN6zQ5D-Ut0eU1LHfwQL1Mg0_E=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RAEOMLGDM6MCBF42W7R5AGSPP4.jpg"
    ],
    link: "https://www.harley-davidson.com/fr/fr/motorcycles/index.html"
  },

  // Honda

  {
    name: "Africa Twin",
    brand: "Honda",
    engine: 1084,
    horsepower: 130,
    price: 14499,
    type: "Dual-sport",
    usage: [],
    A2: false,
    description: `Honda appears to be getting more comfortable with the rider assist technology these days too. The new Africa Twins features a seven-level Honda Selectable Torque Control (HSTC), six ride modes, wheelie control, engine-braking control, selectable cornering ABS (this was offered on the previous model), and it now comes with cruise control. All of these functions can be monitored and adjusted via the new 6.5-inch TFT touchscreen display which is compatible with Apple CarPlay. Where Honda seemed to avoid electronic gizmos on the first generation, this version has almost all of them.`,
    image:"https://www.motorcyclistonline.com/resizer/Lefmo7C_4wtsY-W4lCvOL3ejjKY=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/3XW4PO7NTQPW5PF3MWIN7O2G4Y.jpg",
    gallery: [
      "https://www.motorcyclistonline.com/resizer/a-eeOhjXK9TMJAvszIg4wL-IO6g=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OROJTQVU5WIGUF6SMGN5ZGUIVY.jpg",
      "https://www.motorcyclistonline.com/resizer/z3AWGASbbB3y9pvB3m9sR7HU-6Q=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/Q2LYCHJ7EAIH3CFY5ZQAUYACJI.jpg"
    ],
    link: "https://moto.honda.fr/motorcycles/range.html"
  },

  // {
  //     name: 'Rebel 300',
  //     brand: 'Honda',
  //     engine: 286,
  //     horsepower: 0,
  //     price: 0,
  //     type: ["Cruiser"],
  //     usage: [],
  //     A2: false,
  //     description: '',
  //     image: 'https://www.motorcyclistonline.com/resizer/eoYfXZiTZ1q_Wfmzin7pOTTNYYk=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TJPEYTHP5SBZSVX3QAQNE5LKZ4.jpg',
  //     gallery: '',
  //     link: 'https://moto.honda.fr/motorcycles/range.html'
  // },

  // Indian

  {
      name: 'Scoot 100th Anniversary',
      brand: 'Indian',
      engine: 1133,
      horsepower: 100,
      price: 16590,
      type: "Cruiser",
      usage: [],
      A2: true,
      description: 'The Scout 100th Anniversary model harkens back to the original with its Indian Motorcycle Red color accented by gold trim, as well as with its black wire wheels and beach-style handlebar, a floating tan leather seat, and a luggage rack. It’s finished off by a color-matched Scout 100th-anniversary badge and various chrome finishes. Indian is limiting global production to 750 units.',
      image: 'https://www.motorcyclistonline.com/resizer/3dEPGi6DC_9T0XTxUhK3KZPb_uA=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/L6TGYGBF5RFTHYHEWA6KN2ZYWY.jpg',
      gallery: ['https://moto-station.com/wp-content/uploads/2019/09/05/Indian-Scout-2020-100-anniversaire-01-1024x683.jpg', 'https://moto-station.com/wp-content/uploads/2019/09/05/Indian-Scout-2020-100-anniversaire-TH-1-1024x576.jpg', 'https://moto-station.com/wp-content/uploads/2019/09/05/Indian-Scout-2020-100-anniversaire-TH-2-1024x576.jpg'],
      link: 'https://www.indianmotorcycle.fr/family/'
  },

  {
      name: 'Scoot Bobber Twenty',
      brand: 'Indian',
      engine: 1130,
      horsepower: 100,
      price: 15190,
      type: "Cruiser",
      usage: [],
      A2: true,
      description: 'The second model variant to capitalize on the original 1920 Scout is the Scout Bobber Twenty, which also uses wire wheels and nifty floating saddle to stand apart from other Scouts. It features a mix of chrome and blacked-out finishes and an apehanger handlebar that delivers, according to Indian, “old-school bobber style with relaxed ergonomics.”',
      image: 'https://www.motorcyclistonline.com/resizer/kHnnoKVwb5Hib9Co9KTBVIBbnBw=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/T4BF7AMP2MVAVT5YANYT7ENXVE.jpg',
      gallery: ['https://www.indianmotorcycle.fr/fileadmin/templates/model_20/gallery/scout-bobber-20/5.jpg', 'https://www.indianmotorcycle.fr/fileadmin/templates/model_20/gallery/scout-bobber-20/3.jpg', 'https://www.indianmotorcycle.fr/fileadmin/templates/model_20/gallery/scout-bobber-20/6.jpg', 'https://www.indianmotorcycle.fr/fileadmin/templates/model_20/gallery/scout-bobber-20/7.jpg', 'https://www.indianmotorcycle.fr/fileadmin/templates/model_20/features20/scout-bobber-20/f3-3.jpg'],
      link: 'https://www.indianmotorcycle.fr/family/'
  },

  {
      name: 'Thunder Stroke',
      brand: 'Indian',
      engine: 1901,
      horsepower: 116,
      price: 0,
      type: "Cruiser",
      usage: [],
      A2: false,
      description: 'Indian Motorcycle released its 2020 Thunder Stroke models with a host of new connected Ride Command features, an all-new Roadmaster Dark Horse, redesigned Springfield Dark Horse, Chieftain Elite, and the announcement that several models will come standard with a 116ci engine.',
      image: 'https://www.motorcyclistonline.com/resizer/CvYKTZAOdP8P1uSMcX9MVSrcfjM=/801x600/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/U7EYBFK4OOINNVID26HIMLAKEU.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/lPnQkoFrgg7Z9AST-J8lRTxeTzg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7VAEXF43RNR53JV2PBD7B2UQDQ.jpg', 'https://www.motorcyclistonline.com/resizer/Vbxpc3x6c4PKtfLVJukW-XafoNI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/3RTF6Y25L3OJVHU3CYO4HYGN5E.jpg'],
      link: 'https://www.indianmotorcycle.fr/family/'
  },

  {
      name: 'Indian Motorcycle Challenger',
      brand: 'Indian',
      engine: 1768,
      horsepower: 122,
      price: 30890,
      type: "Cruiser",
      usage: [],
      A2: false,
      description: "Indian Motorcycle reveals an all-new liquid-cooled V-twin for its new fixed-fairing bagger, the Challenger, set to debut as a rival for Harley-Davidson's Road Glide…",
      image: 'https://www.motorcyclistonline.com/resizer/ZPKVq_-tsYWcz8wG0JKfNPLAcZc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XPWVAR6XC6SXZLN7OSQGH7KOMM.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/qG6IPA7vEPXQzTDeIjFhVcqVPD4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/77JWA43HZVNMNONFLRGTRQOOGQ.jpg', 'https://www.motorcyclistonline.com/resizer/3Ds1OsFE3hkW6A7RymhAXX3Ms_s=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4Z5V3OYSAEJI4RBGJ4WV5QHBD4.jpg'],
      link: 'https://www.indianmotorcycle.fr/family/'
  },

  // Kawasaki
      {
          name: 'Ninja 650',
          brand: 'Kawasaki',
          engine: 649,
          horsepower: 58,
          price: 7799,
          type: 'Roadster',
          usage: [],
          A2: true,
          description: "Kawasaki's pulls the wraps off its updated-for-2020 Ninja 650 ABS. Featuring sharper and racier body panels, in line with the rest of the Ninja family, this parallel-twin 650 is a kinder, more gentle sportbike for everyday street riders…",
          image: 'https://www.motorcyclistonline.com/resizer/iGxLm8RbUlGAK83OppPGbnIS0TE=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/NOC3KPEI4FEPJDG5LUMEZY2WPM.jpg',
          gallery: ['https://www.motorcyclistonline.com/resizer/CBBGpB5e0_z8zhWDVLBlNXCf-Po=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/2UARU5M4NW5646KXASPTQRFR6Q.jpg', 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/2020_Ninja%20650_GN1_STU%202.001.png' , 'https://www.motorcyclistonline.com/resizer/G6Wdj5lWl_kVpg4BEeb1KGVOpv4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/U6QG62C2ZOEIN77VXPEZUP7Y7U.jpg', 'https://www.motorcyclistonline.com/resizer/fn3PUjNdPCp5_s8K2l4nXS2i1i4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/YEDTLQM2LMDOVLCALYL4EFQZ64.jpg'],
          link: 'https://www.kawasaki.fr/fr/products'
      },
  
      {
          name: 'ZX-6R',
          brand: 'Kawasaki',
          engine: 636,
          horsepower: 130,
          price: 11699,
          type: 'Roadster',
          usage: [],
          A2: false,
          description: 'The ZX-6R is at home on the street or track, which makes it a perfect motorcycle for riders who want a bike that doesn’t cut corners—it carves them…',
          image: 'https://www.motorcyclistonline.com/resizer/9kc0JPTD24tyxUMEdDGz3X9nynA=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OYAFIR3WQFD4MZNYP4LWCSN4DE.jpg',
          gallery: ['https://www.motorcyclistonline.com/resizer/Dd8-1cTybUIlbjjXVyfrXVR3B6c=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/KD5JAFJS6N54X26KNODTGXEVXU.jpg', 'https://www.motorcyclistonline.com/resizer/Rs69zty4ktkohYUgjy7xYIcTeCI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UJPWPHYD6IGS47M7NUWDDQN7TA.jpg', 'https://www.motorcyclistonline.com/resizer/fqQe_OsIDMnMU6Q0FbbkFhCgFBo=/801x299/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/MQ4GDL3QUTCDJNOSS25OHRV54U.jpg'],
          link: 'https://www.kawasaki.fr/fr/products'
      },
  
      {
          name: 'ZX-10R',
          brand: 'Kawasaki',
          engine: 998,
          horsepower: 203,
          price: 18099,
          type: 'Roadster',
          usage: [],
          A2: false,
          description: 'The 2020 Kawasaki Ninja ZX-10R is now available in the new KRT Edition livery with ABS as well as the Metallic Spark Black version for those who prefer a more subtle look. The big ZX is powered by a ram-air-inducted, 998cc, inline four-cylinder engine that features finger follower valve actuation, titanium alloy exhaust, forged chromoly billet cams, lightened crank, lightened pistons, and a cylinder head that now allows the use of optional KRT high-lift cams which was previously only offered on the ZX-10RR.',
          image: 'https://www.motoplanete.com/kawasaki/zoom-700px/Kawasaki-ZX-10R-KRT-replica-2020-700px.jpg',
          gallery: [ 'https://www.motorcyclistonline.com/resizer/X8aFXojRqTSOPK9HCmDsaEWzZ50=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7DXBV2ERE5GVDU5DSCP34SUEQQ.jpg', 'https://www.motorcyclistonline.com/resizer/4Yz1WGhh1ZOA7jsrLXgfJTQVQWI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/PDCD5YAAAV6WH7BOZQYLREEDAM.jpg'],
          link: 'https://www.kawasaki.fr/fr/products'
      },
  
      {
          name: 'W800',
          brand: 'Kawasaki',
          engine: 773,
          horsepower: 48,
          price: 10249,
          type: "Standard-retro",
          usage: [],
          A2: true,
          description: 'With the arrival of the 2020 Kawasaki W800, consumers now have two retro classic Kawasaki motorcycles to choose from. The W800 has the look and feel of the 1966 W1 while the W800 Café offers the sporty style made popular by the racers back in the day.',
          image: 'https://www.motorcyclistonline.com/resizer/C9Lw9I5S8sJSIZ2pXqsKGJ3_7Eo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HPJLOYAI7UQBKOPOFJGBIJMPSY.jpg',
          gallery: ['https://www.motorcyclistonline.com/resizer/sPgsGoHmc4pmjc1HB2DOb09n0QE=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZB36OJC4H2ML6INNL7XH2S4V4M.jpg', 'https://www.motorcyclistonline.com/resizer/VDMZqa_lwGA8WodSDHukGc5QKRo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/FIP7HPMTCWOL6JDBA3WVYCYFHM.jpg', 'https://www.motorcyclistonline.com/resizer/85xh7Iv6Q4ZQZSrLel23eL2zbrQ=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/NEHPAQP7TTSNQDKA2AOVOTRJNI.jpg'],
          link: 'https://www.kawasaki.fr/fr/products'
      },
  

  // KTM

  {
      name: 'Super Duke R',
      brand: 'KTM',
      engine: 1301,
      horsepower: 180,
      price: 18199,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: "KTM's Super Duke R has achieved greatness since its 2014 debut for its blend of extreme power and sportiness with relatively comfortable ergonomics that sometimes makes us overlook pure sportbikes. For 2020, the Super Duker receives a host of new items like its frame, wheels, brakes, instruments, switchgear, and electronics. More power and less weight, too.",
      image: 'https://www.motorcyclistonline.com/resizer/K7fLVO2CMMegbz7KNthL1nAnmCU=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/J7MTPVU6HWJ5LVOKCLY2UMWWZQ.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/KJ2CVwKAitq7NBdsE6Fv_3PLUXo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/BGHIL55FHELL6BHWJZ3MD7CNQQ.jpg', 'https://www.motorcyclistonline.com/resizer/QHeohnryUy_cSWwQjdEeOZyd_3s=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OXICOKA6P6ZMWYF2LMXHGATCVI.jpg', 'https://www.motorcyclistonline.com/resizer/pvTk1K78exiU0a-60ASJHsKtCgg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XRVN2TTQDVD2R2WTSRGSNC66YY.jpg'],
      link: 'https://www.ktm.com/'
  },

  {
      name: '390 Adventure',
      brand: 'KTM',
      engine: 373,
      horsepower: 43,
      price: 6699,
      type: 'Dual-sport',
      usage: [],
      A2: true,
      description: 'The 390 Adventure is powered by the same 373cc DOHC single found in the 390 Duke, complete with ride-by-wire, balancer shaft, and PASC slipper clutch. Fuel is fed by a 46mm throttle body, and spent petrol flows through a stainless steel header pipe out a slime exhaust canister.',
      image: 'https://www.motorcyclistonline.com/resizer/QMm9JQpV9y1cv2XTL5wQnubl9BE=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/EGYRV2HLF7PEN3S7TK7CW5T5CE.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/8131bZ0jEFV025MhrLJ02GPif-s=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/C3Q2YJNYGCZ5IN2RNGV54QQVDI.jpg', ''],
      link: 'https://www.ktm.com/'
  },

  {
      name: '790 Adventure R Rally',
      brand: 'KTM',
      engine: 799,
      horsepower: 94,
      price: 20199,
      type: 'Dual-sport',
      usage: [],
      A2: false,
      description: `Hard core adventure riders will appreciate what KTM offers with its limited-edition 790 Adventure R Rally machine ($19,499). KTM touts this bike as "the absolute most off-road-capable" motorcycle in its 2020 model line-up. The bad part? It's only building 500 of them…`,
      image: 'https://www.motorcyclistonline.com/resizer/omr21EdAkI7eSip_6cgjdgec__0=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/KVNDIDV5FEJ4ZB2NBPHDKGZY4Q.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/wPGuR-r9zmnc6kVoUQANA2mNALg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/D2IM6TIC37SKTBARQVETU245HQ.jpg', 'https://www.motorcyclistonline.com/resizer/f-4IJGB6STG_7Qln72Buxoa7l6M=/800x1200/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7KTFSOLCIEQ46ZZEKJNDJO3PYM.jpg'],
      link: 'https://www.ktm.com/'
  },

  // MV Augusta

  {
      name: 'Rush 1000',
      brand: 'MV AUgusta',
      engine: 998,
      horsepower: 208,
      price: 33990,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: `MV Agusta's tagline is Motorcycle Art, and this new Rush 1000 continues that legacy. Based on the newly updated Brutale 1000 RR, the Rush 1000 supposedly takes inspiration from the drag-racing community to create a lustworthy machine that'll unwind a twisty road as well as rip down a dragstrip. MV claims the Rush 1000 is the only production bike using radial valves and titanium connecting rods, "crossing into the exclusive world of the hyper-naked motorcycle." Inside the inline four-cylinder motor are a new crankshaft and lighter pistons, as well as a revised combustion chamber layout.`,
      image: 'https://www.motorcyclistonline.com/resizer/J6-ynxZN9-S7Zllop4liaOfXrvs=/1199x899/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/AB4OARZ45KMEX7XP7LM5RXL33I.jpg',
      gallery: '',
      link: 'https://www.mvagusta.com/rush-1000'
  },

  // Suzuki

  {
      name: 'C50',
      brand: 'Suzuki',
      engine: 805,
      horsepower: 53,
      price: 0,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: 'Suzuki returns its full-size cruiser favorites for 2020 with the same great features and all-new paint schemes. Starting with the Boulevard C50 with its classic heavy-duty cruiser styling and fuel-injected, 45-degree, 805cc powerplant, Suzuki now offers it in Candy Daring Red and Glass Sparkle Black paint with new graphics. The torquey, single-overhead-cam V-twin breathes through dual exhaust pipes and transmits power to the 15-inch rear wheel via a five-speed tranny and shaft drive.',
      image: 'https://www.motorcyclistonline.com/resizer/tL6favFiltW7NX8Y97z29vjbuUI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/572IUTH3SDU4WCADSPCKJDDWRQ.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/UTLPoQTJ5h4av2WGHZBICnqAgZc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZMBH2PN4GACJUXKX3AN56H46YI.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'C50T',
      brand: 'Suzuki',
      engine: 805,
      horsepower: 53,
      price: 0,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: 'Also making its return for 2020 is the C50T, the full-dress touring version of the C50. The T model gets an all-new Metallic Oort Gray paint scheme with new tank graphics. The C50T sports a classically styled windshield, wide studded rider and passenger seats, a studded backrest, and a set of studded leather-texture, locking saddlebags. Both models run forward-mounted floorboards for the rider and buckhorn handlebars that produce a comfortable touring or cruising dynamic.',
      image: 'https://www.motorcyclistonline.com/resizer/86x5N71E2WHV15mLtHtyB4pnUdM=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4TZHQDWJMMC6ALZRGYVQWHSTPQ.jpg',
      gallery: [''],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'M109R B.O.S.S',
      brand: 'Suzuki',
      engine: 1783,
      horsepower: 128,
      price: 0,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: "With 109 inches of tire-roasting V-twin power, Suzuki's venerable power cruiser, the M109R B.O.S.S. also returns for model year 2020 with two new paint schemes. Riders can choose between Pearl Glacier White/Glass Sparkle Black or Metallic Oort Gray/Glass Sparkle Black, both of which come with contrasting graphics. And that B.O.S.S. part? That stands for Blacked Out Special Suzuki, which adds a host of blacked-out components to the original M109R in addition to a clear taillight and turn signal lenses.",
      image: 'https://www.motorcyclistonline.com/resizer/zzo-i-NNM43ry9eN3toASykTm9o=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WWWTQEJJCHVQXJDRP47XYYVNWI.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/_l6uanr_cIuFGJaN6zIkRb2FtVY=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4NSR4BWNUPVZ623NSJLR7ZS5K4.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-S1000S Katana',
      brand: 'Suzuki',
      engine: 999,
      horsepower: 150,
      price: 13699,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: 'The new Katana builds on the original distinct design of the 80s-era Katana with a modern twist. The pointed front fairing, square headlight, angular bodywork, upright riding position and sexy silver bodywork leave no doubt as to what you are looking at. The differences between the old and new bike, however, are what will make or break the new Katana.',
      image: 'https://www.motorcyclistonline.com/resizer/IMBfulDlgFbCGbyShPAarPJdjnk=/1089x490/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZPUT3FT7P2ENFDU7ZCRVMG7SZA.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/oKNmD1LjwOr6cvGaZCM5id-MRMU=/801x601/filters:focal(500x375:501x376)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/SXTDK7DCUHYJQB4MZWUOMF4FNY.jpg', 'https://www.motorcyclistonline.com/resizer/ClnaXXI05rw6g86-4RXv0fzdSsc=/801x601/filters:focal(500x375:501x376)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/IS2B23JKX6XLSIXAZ2HZCTTEPI.jpg', 'https://www.motorcyclistonline.com/resizer/Z4ss67C3VoAUpr0aRUj63LCCsbs=/801x601/filters:focal(500x375:501x376)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/KDDY4WVHVWOR5C2YNAA724KLUY.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-R600',
      brand: 'Suzuki',
      engine: 599,
      horsepower: 104,
      price: 0,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: 'The supersport class may not have the prestige it used to have but these are still a great option for riders looking to start participating in trackdays or riders looking for a budget-friendly weekend ride. No matter what you are looking for, the 600 engine is manageable enough for new riders and fun enough for experienced riders alike. The 600 seems to have received the last-minute graphics concepts because both the Pearl Glacier White and Glass Sparkle Black are a little bland.',
      image: 'https://www.motorcyclistonline.com/resizer/zpv6vpM_ZnohJ0TZvcJuneFGw3M=/801x297/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VRKMIO7IKQX3CLCUNW5THARTSE.jpg',
      gallery: [''],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-R750',
      brand: 'Suzuki',
      engine: 750,
      horsepower: 148,
      price: 0,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: 'It’s been more than 30 years since the GSX-R750 was unleashed on the world and it continues to uphold the design elements that made it such a success. It takes a high-revving powerhouse engine and mates it to a 600-size chassis and, voilà, you have a great streetbike that can hold its own on the track. This model year see basic colors that include a Pearl Glacier White/Glass Sparkle Black or Metallic Matte Black No. 2/Glass Sparkle Black.',
      image: 'https://www.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Suzuki-GSX-R750d-1024x683.jpg',
      gallery: ['https://www.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Suzuki-GSX-R750a-1024x683.jpg', 'https://www.totalmotorcycle.com/wp-content/uploads/2019/09/2020-Suzuki-GSX-R750b-1024x683.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-R1000',
      brand: 'Suzuki',
      engine: 999.8,
      horsepower: 202,
      price: 16999,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: 'The GSX-R1000 is still the quintessential superbike for the masses. It combines the power and agility that riders have come to expect from Suzuki’s flagship sportbike with a Superbike racing résumé that is hard to beat. This year the Gixxer One Thousand will be offered in Metallic Matte Black No. 2/Glass Sparkle Black or Pearl Glacier White/Glass Sparkle Black.',
      image: 'https://farm2.staticflickr.com/1907/45077921872_85ad3ac49d_h.jpg',
      gallery: ['https://farm2.staticflickr.com/1910/45077924582_436e6eeeb6_h.jpg', 'https://farm2.staticflickr.com/1952/43313475200_9ce6d3735d_h.jpg','https://www.motorcyclistonline.com/resizer/UHlgrpsx9zN4SHlusW0Asrml13U=/801x297/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZLXSDELHXQIQRUHBO6M3AAB2ZI.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-R250',
      brand: 'Suzuki',
      engine: 248,
      horsepower: 25,
      price: 5399,
      type: 'Sportbike',
      usage: [],
      A2: true,
      description: 'The GSX250R will be offered in a base and ABS-equipped version. The base model is available in either Metallic Diamond Red or Pearl Glacier White/Pearl Nebular Black while the ABS-equipped GSX250R will be differentiated by its Metallic Crystal Blue/Pearl Nebular Black color scheme.',
      image: 'https://www.motorcyclistonline.com/resizer/b8pY3vK0bVEHcA4na5Kp7EIsKA4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/476EGFNTPA6RYQABS7TF4PMJVM.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/U8PFIoKzAYBmRQusetuS9tKQm5A=/801x297/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CTRS7RRZIA7CXA73FT3DALN45Q.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'Hayabusa',
      brand: 'Suzuki',
      engine: 1340,
      horsepower: 0,
      price: 0,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: 'While the latest version of the Hayabusa looks ultra-hot in the Candy Daring Red colorway, the sublime Metallic Thunder Gray version seems like it should be offered with radar-resistant stealth paint because it seems so tactical in nature. It’s still a ’Busa so we have to take it seriously!',
      image: 'https://www.motorcyclistonline.com/resizer/bi8t4mI5HypQ1wNF4-o_0NFVqY0=/801x297/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/D45EIAGAVD5MVYPTSLFFV6NYQQ.jpg',
      gallery: [''],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-S1000',
      brand: 'Suzuki',
      engine: 999,
      horsepower: 150,
      price: 12899,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: 'The 2020 Suzuki GSX-S1000 is unchanged for this year, other than its blue or gray color options, but it is still a capable streetbike. At the core of this motorcycle is the legendary GSX-R1000 K5 engine with its torquey power delivery offering up gobs of smile-per-mile hooligan-style performance…',
      image: 'https://www.motorcyclistonline.com/resizer/ZNWdehSE6HJ27nBi3fk0ADTH2vQ=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UBQPSLOWYCO6U46NKBZT3XOKMY.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/ru9jsH_Mq2I8u3I7qLSgShr04cw=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/SLEZCGQ2HRARNUPY7C2C75Y3PQ.jpg', 'https://www.motorcyclistonline.com/resizer/i3AjSZlb9ENQqYkqj5iih9jZV7Q=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/HNULWEOLFY2JDIAK5725AB3NSQ.jpg','https://www.motorcyclistonline.com/resizer/0M9FbgRlELG6ICtHx2fweJMd26s=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/R4TJRPOPDFAYDM2FHLAMSBMZ5E.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'GSX-S1000F',
      brand: 'Suzuki',
      engine: 999,
      horsepower: 150,
      price: 13499,
      type: 'Touring',
      usage: [],
      A2: false,
      description: 'The 2020 Suzuki GSX-S1000F sport-touring bike is back as well. This model is basically a fully faired version of the GSX-S1000 so we will forgo the minutiae of regurgitated details that we’ve already mentioned and get right to the new stuff. It will be available in black this year. Price and availability have yet to be released. Nuff said.',
      image: 'https://www.motorcyclistonline.com/resizer/pwWElE-fVWdMC-iJ3nyjBsDCDIo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/QGOALHHV3SGVID3PKABXBKUO74.jpg',
      gallery: ['https://farm5.staticflickr.com/4268/34910957466_9da69725fe_h.jpg', 'https://farm5.staticflickr.com/4246/34563944440_a796b6e6a2_h.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'V-Strom 650XT Adventure',
      brand: 'Suzuki',
      engine: 645,
      horsepower: 70,
      price: 10199,
      type: 'Dual-sport',
      usage: [],
      A2: true,
      description: 'Suzuki has announced a new addition to its 2020 V-Strom 650 family, the V-Strom 650XT Adventure. This bike builds off the XT platform, which is a bit more adventure-capable than the stock 650 thanks to tubeless, spoked tires, and adds even more…',
      image: 'https://www.motorcyclistonline.com/resizer/xjxVLJU33f_xWraqmMuRlLzDIhg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WTDNB5OEJRM6LW5SBTRX6OQMXI.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/typMNJgqLt60SnsM5Ro__Rtpj2A=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RZCG6SDINQUYNHMGLJH6YY3VVM.jpg', ''],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  {
      name: 'V-Strom 1050XT',
      brand: 'Suzuki',
      engine: 1037,
      horsepower: 106,
      price: 14599,
      type: 'Dual-sport',
      usage: [],
      A2: false,
      description: 'V-Strom lovers everywhere are celebrating the arrival of the 2020 Suzuki V-Strom 1050XT adventure bike. The latest version of the venerable V-Strom is built around the tried-and-true 1,037cc 90-degree V-twin and twin-spar aluminum frame. Displacement remains the same with new tuning tailored toward increased peak horsepower while retaining the rider friendly low-end grunt. The 2020 1050XT utilizes a new ride-by-wire system to operate the dual 49mm electronic throttle assemblies, which in turn opens the door for a number of new rider assist functions.',
      image: 'https://www.motorcyclistonline.com/resizer/nY9oX61oeyQ_QjCBWkvrSxNU7WI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/FAEVMMST3J6PSBVS5V7JX7UY4Q.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/n8jLhqoH7lrwqe2D_IhtDb96XIs=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/QIMJFSQ6WWPXDQELLUUKFNOHBY.jpg', 'https://www.motorcyclistonline.com/resizer/EalGRHQq9Ksq50WqVH4IYsiEtdM=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WWNZ5GINVA7ZT7PAU7I7X77O3I.jpg', 'https://www.motorcyclistonline.com/resizer/wDahLFW8JbJn-8aTQ0xo0XdB9iQ=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/FQSINSOI6GRHPGJWYYKVLM7KRU.jpg'],
      link: 'https://www.suzuki-moto.com/gamme-2020'
  },

  // Triumph

  {
      name: 'Rocket 3R / Rocket 3GT',
      brand: 'Triumph',
      engine: 2458,
      horsepower: 165,
      price: 22400,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: 'Triumph revealed the limited-edition Rocket 3 TFC in May, and all 750 units (225 for the US) were snapped up at their $29,000 MSRP. Now we have a full look at the regular production bikes, the Rocket 3 R and Rocket 3 GT. Both feature the all-new three-cylinder engine displacing a massive 2,458cc, making it the largest production motorcycle engine in the world.',
      image: 'https://www.motorcyclistonline.com/resizer/IOmr0hKCvMy9X1KE_PB2_ISOdLU=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/IYCXE4LZC6J2XRBBCBN6FF7Z44.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/8E3ZPYXXaK16bgO30FdTKgx1bHc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/D755CEF67MMUZHJPJK76XFM3MA.jpg', 'https://www.motorcyclistonline.com/resizer/6qh2JTD1_RizUbImNDTMsz3fLU8=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7PROPABPGR22ULNH6O5EKBBPFM.jpg', 'https://www.motorcyclistonline.com/resizer/RqmCTYPnb0k0uJ3kkfbZW1MMspY=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/J7LU65UQIA6ACRY7JJJENCQL2Y.jpg', ''],
      link: 'https://www.triumphmotorcycles.fr/#'
  },

  {
      name: 'Street Triple RS',
      brand: 'Triumph',
      engine: 765,
      horsepower: 121,
      price: 11900,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: 'The Street Triple occupies an interesting place in the moto market: smaller than a liter-size sport roadster, but more powerful than a traditional middleweight. For 2020, the three-cylinder Street Triple RS gets endowed with greater midrange power, sharper bodywork, updated electronics, and nicer finishes…',
      image: 'https://www.motorcyclistonline.com/resizer/2e8sYY1odUmCSwZb-QkoPNl9Ja4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/3MV44ZK5YSDTF7D3ODAR5FWIFQ.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/tGZZAji4-dN9qTP52QC0P4RShpc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/A2ABJMBDEDOEH3KKRCZMENIQRQ.jpg', 'https://www.motorcyclistonline.com/resizer/2FdvFenWLTRSeR6BSuDRXXydhXI=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/REOSVDFGLU3G2IHLIXG2NOF2RU.jpg'],
      link: 'https://www.triumphmotorcycles.fr/#'
  },

  {
      name: 'Tiger 900',
      brand: 'Triumph',
      engine: 888,
      horsepower: 94,
      price: 11800,
      type: 'Dual-sport',
      usage: [],
      A2: true,
      description: 'Triumph Motorcycles pulled the wraps off its new adventure-touring middleweight, the 2020 Tiger 900. Featuring a larger and more powerful inline-three engine, the Tiger 900 will be available in three designations: Standard, Rally, and GT (replacing the outgoing and 10-year-old 800’s XC and XR nomenclature).',
      image: 'https://www.motorcyclistonline.com/resizer/8n1amRNETFknvOAoyIrlIUR8Dkg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/2RBJMSVC5VHQFHJIZGI4BX32SM.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/OXsDs7YT1XgbacYkW-Gn4HOgiHs=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/5HTFVXHV6NHTJH5IXFPHVJP76U.jpg', 'https://www.motorcyclistonline.com/resizer/hYfFfd2WheXzsDMWsYCCkDwpV08=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/QQ323ON6GZFMVMYPMGOUZHF6YA.jpg'],
      link: 'https://www.triumphmotorcycles.fr/#'
  },

  {
      name: 'Thruxton',
      brand: 'Triumph',
      engine: 1200,
      horsepower: 103,
      price: 16700,
      type: 'Standard-retro',
      usage: [],
      A2: false,
      description: 'The Triumph Thruxton has long been a favorite for riders that want a solid factory café, and in 2016 when Triumph introduced its highly revised parallel twin platform, it became a powerhouse. Triumph offered an R-spec for riders that wanted even more, and for 2020 it goes a step further with the Thruxton RS.',
      image: 'https://www.motorcyclistonline.com/resizer/pKCIBOtnxKU0_B0PqM1hgwAx0WY=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7EKPAHMB64WLZKT7SETLBZ2L3I.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/TdmkIlLrWdOR9RJ-QxClT2tECDA=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/T2ZUD7MPAAYBPXRVC3LH4IDCKQ.jpg','https://www.motorcyclistonline.com/resizer/cotecfH4F8ZM5IUY9qJ45pP_5Xk=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/VURT7YO5MR6TOS5IWESH6EIWHQ.jpg', 'https://www.motorcyclistonline.com/resizer/i63CIiHRWOguMT4ceauRydT5Ui8=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/K2535KU7ZT2BZQ6HE5DOE5NIKQ.jpg', 'https://www.motorcyclistonline.com/resizer/Aq_epxAmxsQHF4LjY85blFWfvTw=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/JHRONRNCTCARDA2CLA7TBOJCDU.jpg'],
      link: 'https://www.triumphmotorcycles.fr/#'
  },

  // Yamaha

  {
      name: 'VMAX',
      brand: 'Yamaha',
      engine: 1679,
      horsepower: 170,
      price: 0,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: "Yamaha's current-generation VMAX power cruiser celebrates its 12th year of production for the 2020 model year. Originally released in 2008 as a Star Motorcycle (Yamaha's old cruiser sub-brand), the VMAX has been rebranded and now slots in Yamaha's Sport Heritage motorcycle line. As always, the VMAX turns heads with its muscular stance and high-output 1,679cc V-4 engine.",
      image: 'https://www.motorcyclistonline.com/resizer/N7d0eB04dIcknWJ_CqZRZj-nNng=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/ZPMD547LHJS3NYLMP6LHLYWEUE.jpg',
      gallery: [''],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'BOLT / BOLT R-Spec',
      brand: 'Yamaha',
      engine: 942,
      horsepower: 52,
      price: 9699,
      type: 'Cruiser',
      usage: [],
      A2: false,
      description: 'Both Bolt models are centered on their shared 942cc, air-cooled, 60-degree V-twin engine that utilizes electronic fuel injection, pent-roof combustion chambers, and lightweight forged aluminum pistons to produce gobs of usable power. A low seat height, short-wheelbase chassis, and overall compact feel make the Bolt a fan favorite among shorter beginner and intermediate riders, though taller, more advanced riders can also easily feel at home on the Bolt.',
      image: 'https://www.motorcyclistonline.com/resizer/w2hi1lGjEK2rozid2c5nPsESQos=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/K56Q3AC6EU5NNIXJ52QFHARIQI.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/tgyf2cjTja-1g3BKopysROTe22s=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/M27OYI2PFE5Z7TZHEPPJDKHF5M.jpg', 'https://www.motorcyclistonline.com/resizer/I4_EdLN0yVKq7O8E2P0PRSjqYs4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/PKH3Q35US3DGCHYMEAA5RLC2IY.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'YZF-R3',
      brand: 'Yamaha',
      engine: 321,
      horsepower: 42,
      price: 5999,
      type: 'Sportbike',
      usage: [],
      A2: true,
      description: `The R3 is the entry point to Yamaha's "R World," giving sport-minded riders access to the brand's enviable supersport cachet for about $5K. The R3 debuted in 2015, and it was given fresh styling, new instrumentation, and an inverted fork for the 2019 model year.`,
      image: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Static-003-03.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/RzlWQUTw3_V13pQ5D1Gd14AvajM=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TW4XH7WOAKUUXUN4JZLZMNXMYE.jpg','https://www.motorcyclistonline.com/resizer/24ItS2jfPm02ILS_IusXKWTEfDw=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/K6RASFTUFI5YJ55G2OI6JMIHU4.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'YZF-R6',
      brand: 'Yamaha',
      engine: 599,
      horsepower: 118.4,
      price: 13999,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: "The R6 has been perhaps the most successful 600cc sportbike, whether talking about sales volume or racetrack wins. It received an injection of new components in 2017, adopting the R1's styling and suspension, as well as ride modes and traction control. Other nice bits on the four-cylinder R6 include an aluminum fuel tank, magnesium subframe and engine covers, and titanium valves and exhaust.",
      image: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Static-001-03.jpg',
      gallery: ['https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Static-003-03.jpg', 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Action-003-03.jpg','https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Action-001-03.jpg', 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Action-002-03.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'R1',
      brand: 'Yamaha',
      engine: 998,
      horsepower: 200,
      price: 19299,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: `Yamaha's unique crossplane-crankshaft engine helps make the YZF-R1 stand apart from its superbike/supersport competition, and for 2020 the R1 and its high-end R1M sister receive evolutionary upgrades that will increase their appeal to sportbike consumers.`,
      image: 'https://www.motorcyclistonline.com/resizer/GiqGyVnr1HnA1snD4atwroK77cM=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/77NRG4PPARQDM7JIR3Y3VIMC5U.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/VV1JQPuDo6gL-MPThpyVOClJa-4=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/OFM5WZJM7WYL6M5XHVQFFWWSTM.jpg', 'https://www.motorcyclistonline.com/resizer/gp4-lC4o6Op4ujR14H_MeUvWeYo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/BERPQP33Z2GJAV3TQGON6ONBN4.jpg', 'https://www.motorcyclistonline.com/resizer/0f3hpFMZG7Fu1gJHAZGYTaLbX1w=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RP3BKIMD266SJ37PSRUP62LWXU.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'R1M',
      brand: 'Yamaha',
      engine: 998,
      horsepower: 200,
      price: 25999,
      type: 'Sportbike',
      usage: [],
      A2: false,
      description: `The M variant is the pinnacle of R1 advancement, featuring Öhlins suspension, GPS-enabled datalogging, carbon-fiber bodywork, and a hand-polished aluminum fuel tank. 
      For 2020, the R1M is upgraded with a premium Öhlins fork, a pressurized NPX version that uses a gas cylinder built into the fork’s axle bracket. The Öhlins shock receives optimized settings to complement the new fork. The suspension settings can be tweaked via the TFT instrumentation or the YRC Setting app.`,
      image: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF1000R1SPL/2020-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Action-001-03.jpg',
      gallery: ['https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF1000R1SPL/2020-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Action-002-03.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'MT-03',
      brand: 'Yamaha',
      engine: 321,
      horsepower: 42,
      price: 5299,
      type: 'Roadster',
      usage: [],
      A2: true,
      description: 'Yamaha has a new entry-level naked bike in its 2020 US model lineup with the new MT-03. The entry-level option of its Hyper Naked motorcycle lineup was first introduced in 2016, and it has been a hit in every market around the globe thanks to its combination of comfortable ergos, fun engine, nimble handling, and streetfighter styling. For the 2020 model year, Yamaha has kept all the pint-size performance status quo, but the Tuning Fork guys added an inverted fork and focused on redesigning the styling of the bike with an emphasis on making it darker, more Hyper Naked in appearance.',
      image: 'https://www.motorcyclistonline.com/resizer/vJT65hzs6S9pbJJURqYrTHObtbM=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/2NSBKG4I5DQJXPPKONFE33U2WE.jpg', 
      gallery: ['https://www.motorcyclistonline.com/resizer/OTMUFVqJ7_gR1dvz4ccsG8e9JZ8=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4PCRCAYEMH7VXFLYBU5PE4AKKI.jpg','https://www.motorcyclistonline.com/resizer/0GxqJuM-2lXxDKj8Gc0T5aKGycU=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XG5AER5HRGUYIMD7F3IY7NMMQ4.jpg', 'https://www.motorcyclistonline.com/resizer/QFqz8bZMsKCNWHcTzn5QfEdklUQ=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4SRXPA76CF5E7FEYR5W7OUOTVI.jpg', 'https://www.motorcyclistonline.com/resizer/J8gv5rz9gXKAVEh9S9YgfK9bXzo=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4JXFAIUYGPMMHCE7AA4Q4MYR34.jpg', ''],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'MT-07',
      brand: 'Yamaha',
      engine: 689,
      horsepower: 74.8,
      price: 7099,
      type: 'Roadster',
      usage: [],
      A2: true,
      description: 'Think of the Yamaha MT-07 as the gateway motorcycle for the dark, exciting realm of the Hyper Naked class. With a consumer-friendly MSRP of $7,599, a new rider can get a tuned fun twin-cylinder engine that pumps out 50 pound-feet of torque, nestled within a steel trellis-style frame and wrapped in good-looking bodywork. Oh, it also comes with standard ABS.',
      image: 'https://www.motorcyclistonline.com/resizer/hKu-2W7XUCJk13w0898cop7ixes=/801x534/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7D3EHT5TCWSZ2LOS3GHTJS7X6U.jpg',
      gallery: ['https://www.motorcyclistonline.com/resizer/BuvHKt9e_PWAUgLrmiCgjrsGMew=/801x534/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/YVESWZMCFPSANQQKLCDOGU37WA.jpg', 'https://www.motorcyclistonline.com/resizer/8F7aJoHX2YBIrzkJvV93oSNRM1I=/801x534/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CULGXM4WTXQLQCIMYI2J2LECQE.jpg', 'https://www.motorcyclistonline.com/resizer/cBby-U8hqDS6KOyNaftGr0tOPX4=/801x534/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CTMBGFZHHVRIYAD2RZ3IIH76ZA.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'MT-09',
      brand: 'Yamaha',
      engine: 847,
      horsepower: 115,
      price: 9199,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: `The MT-09 is the original Hyper Naked in Yamaha's not-so-secret society of aggressive-looking and fun-to-ride streetbikes. From start to finish the MT-09 was designed around the rowdy 847cc triple with crossplane crank and a chassis that is very accommodating for riders of all levels. Over the years the MT-09 has evolved into one of the best bangs for the buck in the streetfighter or naked bike class.`,
      image: 'https://www.motorcyclistonline.com/resizer/qVDm2Vi3u4950OxBT2JyPlHyi0g=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TZK3NIIW3PJBR4IHCAYTZYM5BE.jpg',
      gallery: [ 'https://www.motorcyclistonline.com/resizer/Xw_srOvWE194lKqP2BHlC2XAcFs=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4UI2CKVQTBDX2SLZA6IL6CG4E4.jpg' ,'https://www.motorcyclistonline.com/resizer/qRDNYa4dgQmDGF7FXM1uau1Nvbc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/Z3KAYCU4YU7LWKRKGV4R74SO6I.jpg', 'https://www.motorcyclistonline.com/resizer/v6o6xJz8Gv7HkFTkYhC8iFN7ePA=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/73MOS67LGTTNB5OEAGTPJYWQXQ.jpg', 'https://www.motorcyclistonline.com/resizer/kNgAQm68NmzLtD1_o3mzahWQ4Hc=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/PNXC6BCS2EF5E5GG622MTWOLKI.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

  {
      name: 'MT-10',
      brand: 'Yamaha',
      engine: 998,
      horsepower: 160.4,
      price: 13099,
      type: 'Roadster',
      usage: [],
      A2: false,
      description: `The 2020 Yamaha MT-10 is the flagship model of Yamaha's Hyper Naked street motorcycle segment that includes the new MT-03, MT-07, and the MT-09. As the leader of this self-proclaimed army of darkness, the MT-10 is equipped with the exciting 998cc crossplane inline four-cylinder engine derived from the high-tech R1 superbike. The similarities don't stop there either.`,
      image: 'https://www.motorcyclistonline.com/resizer/iiqlaYkTvZH8shaQaTjHxuvoStg=/801x601/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/CMIU4YRDO4BVSAU6LQBL76UMLE.jpg',
      gallery: ['https://cdn2.yamaha-motor.eu/prod/product-assets/2020/MT10/2020-Yamaha-MT10-EU-Ice_Fluo-Action-001-03.jpg', 'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/MT10/2020-Yamaha-MT10-EU-Ice_Fluo-Static-003-03.jpg' ,'https://cdn2.yamaha-motor.eu/prod/product-assets/2020/MT10/2020-Yamaha-MT10-EU-Ice_Fluo-Static-002-03.jpg'],
      link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
  },

//   {
//       name: '',
//       brand: 'Yamaha',
//       engine: 0,
//       horsepower: 0,
//       price: 0,
//       type: '',
//       usage: [],
//       A2: false,
//       description: '',
//       image: '',
//       gallery: [''],
//       link: 'https://www.yamaha-motor.eu/fr/fr/products/motos/'
//   },
];

function seedDb(seedData) {
  bikeModel
    .insertMany(seedData)
    .then(bikes => console.log(bikes))
    .catch(err => console.log(err));
}

seedDb(seedBike);
