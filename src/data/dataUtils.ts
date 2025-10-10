// data.ts
// Type definitions
export type Product = {
  id: string;
  name: string;
  brand: string;
  images: string[];
  pageUrl: string;
  title: string;
  description: string;
  specs: Record<string, string>;
  price: string;
};

export type Category = {
  category: string;
  id: string;
  products: Product[];
};

export type Parent = {
  parentCategory: string;
  id: string;
  categories: Category[];
};

// ---- RawItem type ----
type RawItem = {
  parent_category: string;
  category: string;
  product_name: string;
  brand: string;
  page_url: string;
  image_url?: string | string[] | null;
  title: string;
  description: string;
  specs?: Record<string, string>;
  price?: string;
};

// Flat raw data (as you pasted)
const RAW_DATA = [
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "Auto Transfer Switch",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/change-over-switch-elmeasure-ELE.CHA.632974754",
    "image_url": "https://static1.industrybuying.com/products/electrical/fuses-circuit-breakers-components/change-over-switch/ELE.CHA.632974754_1747994188489.webp",
    "title": "Elmeasure Automatic Transfer Switch Motorized – Reliable Power Switching for Uninterrupted Operations",
    "description": "Ensure seamless power transfer with Elmeasure Automatic Transfer Switch Motorized. Smart, durable & efficient ATS for homes, industries & businesses.",
    "specs": {
      "Type": "Automatic Transfer Switch (Motorized)",
      "Use Case": "Auto-switch between grid and generator to avoid downtime in plants and buildings.",
      "Key Feature": "Seamless transfer; protects sensitive equipment; improves energy reliability"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "Digital Panel Meter",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/single-function-meter-elmeasure-TES.SIN.332963685?gad_campaignid=21344143087",
    "image_url": "https://static1.industrybuying.com/products/testing-and-measuring-instruments/process-monitoring/single-function-meter/TES.SIN.332963685_1747825839797.webp",
    "title": "Elmeasure High Profile 2 Relay Demand Controller – Accuracy Class 1 Motorized for Reliable Energy Management",
    "description": "Boost energy efficiency with Elmeasure High Profile 2 Relay Demand Controller. Accuracy Class 1 motorized solution for precise demand management.",
    "specs": {
      "Type": "Demand Controller (2 Relay, Class 1)",
      "Use Case": "Peak demand control by shedding non-critical loads; avoid penalties.",
      "Key Feature": "Automatic load management; accurate demand monitoring; energy savings"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "Frequency Meter",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/frequency-counter-elmeasure-TES.FRE.132964637",
    "image_url": "https://static1.industrybuying.com/products/testing-and-measuring-instruments/electronic-testing/frequency-counter/TES.FRE.132964637_1747825851094.webp",
    "title": "Elmeasure 3 Row Frequency Meter with 0.2 Class Accuracy – Motorized High-Precision Solution",
    "description": "Buy Elmeasure 3 Row Frequency Meter with Accuracy Class 0.2, motorized design. Ensure reliable, high-precision power monitoring for industries.",
    "specs": {
      "Type": "3-Row Frequency Meter (Class 0.2)",
      "Use Case": "Maintain stable power frequency for heavy-duty motors and grids.",
      "Key Feature": "High-accuracy frequency measurement; clear 3-row display"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "Multifunction Meter",
    "brand": "ELMEASURE",
    "page_url": "https://www.indiamart.com/proddetail/power-quality-meter-elmeasure-2853474624888.html?utm_medium=prd_ads&utm_campaign=22473411111&utm_content=product&utm_source=google&gclsrc=aw.ds&gad_source=4&gad_campaignid=22473411111",
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2024/2/390924077/QA/MT/BK/142696863/elmeasure-multi-functional-energy-meters-1000x1000.jpg",
    "title": "Elmeasure Power Quality Meter – Advanced Motorized Energy Monitoring Solution",
    "description": "Elmeasure Power Quality Meter online. Accurate, motorized energy monitoring for industries. Boost efficiency with reliable power quality analysis.",
    "specs": {
      "Type": "Power Quality / Multifunction Meter",
      "Use Case": "Track real-time consumption, detect PQ issues, optimize loads.",
      "Key Feature": "Power quality analytics; compliance support; operational cost control"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "ATS",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/change-over-switch-elmeasure-ELE.CHA.632975698",
    "image_url": "https://static1.industrybuying.com/products/electrical/fuses-circuit-breakers-components/change-over-switch/ELE.CHA.632975698_1747908030710.webp",
    "title": "Elmeasure Motorized Changeover Switch Online – Reliable Automatic Power Transfer",
    "description": "Elmeasure Motorized Changeover Switch at IndustryBuying. Ensure safe, seamless power transfer with durable, high-performance changeover solutions.",
    "specs": {
      "Type": "Motorized Changeover Switch",
      "Use Case": "Automatic transfer between mains and generator in buildings.",
      "Key Feature": "Seamless switching; equipment protection; no manual intervention"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "MTS",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/change-over-switch-elmeasure-ELE.CHA.232976015",
    "image_url": "https://static1.industrybuying.com/products/electrical/fuses-circuit-breakers-components/change-over-switch/ELE.CHA.232976015_1747907903541.webp",
    "title": "Elmeasure Motorized Changeover Switch Online – Reliable Power Transfer Solution",
    "description": "Elmeasure motorized changeover switch at Industrybuying. Ensure seamless power transfer, safety & durability for industrial & commercial applications.",
    "specs": {
      "Type": "Motorized Changeover Switch",
      "Use Case": "Automatic power source changeover in factories, hospitals, offices.",
      "Key Feature": "Reliable transfer; safety-focused; continuous operations"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "ACCL",
    "brand": "ELMEASURE",
    "page_url": "https://www.amazon.in/Elmeasure-Automatic-Changeover-Current-Limiter/dp/B08FQYSRC2?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=AB0NWXDMVK6RV",
    "image_url": "https://m.media-amazon.com/images/I/41wXk-2l3XL._SY300_SX300_QL70_FMwebp_.jpg",
    "title": "Elmeasure Motorized Automatic Changeover with Current Limiter – Reliable Power Control for Homes & Businesses",
    "description": "Buy Elmeasure motorized automatic changeover with current limiter for seamless power backup, overload protection & energy efficiency.",
    "specs": {
      "Type": "Automatic Changeover with Current Limiter (ACCL)",
      "Use Case": "Auto shift mains↔generator with current limiting to prevent overloads.",
      "Key Feature": "Backup continuity; overload protection; energy-efficient control"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "3 Phase ACCL",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/change-over-switch-elmeasure-ELE.ONL.45320661",
    "image_url": "https://static1.industrybuying.com/products/electrical/fuses-circuit-breakers-components/change-over-switch/ELE.ONL.45320661_1747744921991.webp",
    "title": "Elmeasure Motorized Changeover Switch Online – High-Performance, Reliable & Durable",
    "description": "Elmeasure Motorized Changeover Switch online at Industrybuying. Ensure seamless power transfer, reliability & safety for industrial & commercial use.",
    "specs": {
      "Type": "Motorized Changeover Switch (3-Phase)",
      "Use Case": "Industrial and commercial UPS/generator transfer for uptime.",
      "Key Feature": "High reliability; fast transfer; protects machinery"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "IELR Panel",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/earth-fault-relay-elmeasure-IND.EAR.932964585",
    "image_url": "https://static1.industrybuying.com/products/industrial-automation/relay/earth-fault-relay/IND.EAR.932964585_1747825869870.webp",
    "title": "Elmeasure Motorized Earth Fault Relay Online – Reliable Protection for Electrical Systems",
    "description": "Elmeasure Motorized Earth Fault Relay at Industrybuying. Ensure safe, efficient fault detection & protection for motors and power systems.",
    "specs": {
      "Type": "Earth Fault / Leakage Relay",
      "Use Case": "Detect earth leakage to protect motors and switchgear.",
      "Key Feature": "Fast fault detection; downtime reduction; system safety"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Digital Panel Meter",
    "product_name": "CBCT",
    "brand": "ELMEASURE",
    "page_url": "https://www.industrybuying.com/molded-case-circuit-breakers-mccb-elmeasure-ELE.MOL.132996407",
    "image_url": "https://static1.industrybuying.com/products/electrical/fuses-circuit-breakers-components/molded-case-circuit-breakers-mccb/ELE.MOL.132996407_1748256097756.webp",
    "title": "Buy Elmeasure Motorized Molded Case Circuit Breaker (MCCB) Online – Reliable Power Protection",
    "description": "Elmeasure motorized MCCB online at Industrybuying. Ensure reliable power distribution, safety & efficiency with advanced molded case circuit breakers.",
    "specs": {
      "Type": "Motorized MCCB",
      "Use Case": "Automated protection against overloads/short circuits in plants.",
      "Key Feature": "Motorized trip/close; robust fault interruption; uptime protection"
    },
    "price": ""
  },

  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "PhiCap Normal Duty Capacitor",
    "brand": "TDK",
    "page_url": "https://www.eleczo.com/tdk-epcos-phicap-5-kvar-440v-ac-normal-duty-capacitor-b32344n4052a-40.html",
    "image_url": "https://cdn.eleczo.com/media/catalog/product/t/d/tdk-cylindrical-capacitor-b32344n4022a515.webp?auto=webp&format=pjpg&width=160&height=200&fit=cover",
    "title": "TDK-EPCOS Phicap 5 kVAR 440 V AC Normal-Duty Capacitor B32344N4052A – High-Performance Power Factor Correction",
    "description": "Boost efficiency with the TDK-EPCOS Phicap 5 kVAR 440 V AC normal-duty capacitor B32344N4052A. Ideal for power factor correction in motor-driven systems.",
    "specs": {
      "Type": "Normal-Duty PFC Capacitor (5 kVAR, 440 V AC)",
      "Use Case": "Reduce reactive power penalties on 3-phase induction motor loads.",
      "Key Feature": "Stable PF correction; voltage stabilization; longer equipment life"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "PhiCap Heavy Duty Capacitor",
    "brand": "TDK",
    "page_url": "https://www.eleczo.com/tdk-epcos-phicap-10-kvar-415v-ac-heavy-duty-capacitor-b32448h4102a-15.html",
    "image_url": "https://cdn.eleczo.com/media/catalog/product/t/d/tdk-cylindrical-capacitor-b32447h4052a.webp?auto=webp&format=pjpg&width=160&height=200&fit=cover",
    "title": "Maximise Power Efficiency with TDK EPCOS PhiCap 10 kVAr 415 V Heavy-Duty AC Capacitor",
    "description": "Improve power factor, reduce reactive losses & boost industrial efficiency: TDK EPCOS PhiCap 10 kVAr 415 V heavy-duty capacitor built for demanding AC loads.",
    "specs": {
      "Type": "Heavy-Duty PFC Capacitor (10 kVAr, 415 V)",
      "Use Case": "Fixed/auto PFC banks; detuned/dynamic applications with large motors.",
      "Key Feature": "High endurance; rapid PF improvement; voltage stability"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "PhaseCap Super Heavy Duty Capacitor",
    "brand": "TDK",
    "page_url": "https://www.indiamart.com/proddetail/epcos-phasecap-super-heavy-duty-capacitor-22280340691.html",
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2022/11/VO/NN/FM/2080525/epcos-phasecap-super-heavy-duty-capacitor-1000x1000.jpg",
    "title": "EPCOS PhaseCap Super Heavy Duty Capacitor | Reliable Power Factor Correction Solution",
    "description": "Enhance energy efficiency with EPCOS PhaseCap Super Heavy Duty Capacitor. Durable, high-performance solution for industrial power factor correction.",
    "specs": {
      "Type": "Super Heavy-Duty PFC Capacitor",
      "Use Case": "Stabilize voltage and reduce reactive losses in heavy industries.",
      "Key Feature": "High overload capability; long service life"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "Gas Field Capacitor",
    "brand": "TDK",
    "page_url": "https://www.mouser.in/ProductDetail/EPCOS-TDK/B25674C4302J040?qs=A6eO%252BMLsxmQtmTWCbm2Ldg%3D%3D",
    "image_url": "https://www.mouser.in/images/tdk/images/B25674C-series_SPL.jpg",
    "title": "High-Performance EPCOS TDK  Power Capacitor for Industrial Motorized Applications",
    "description": "Discover the EPCOS TDK capacitor—engineered for reliable power factor correction and motorized system efficiency in industrial settings.",
    "specs": {
      "Type": "Power Capacitor (Gas-impregnated / film series)",
      "Use Case": "Voltage stabilization and PF correction in motorized HVAC/industrial systems.",
      "Key Feature": "High reliability; reduced reactive power loss"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "ENDC Capacitor",
    "brand": "TDK",
    "page_url": "https://www.bestofelectricals.com/epcos-20-kvar-endc-power-capacitor",
    "image_url": "https://www.bestofelectricals.com/images/thumbs/0022699_epcos-20-kvar-endc-power-factor-correction-capacitors.jpeg",
    "title": "EPCOS 20 kVAR ENDc Power Capacitor – Reliable Motorized Power Factor Correction Solution",
    "description": "Enhance energy efficiency with the EPCOS 20 kVAR ENDc power capacitor. Ideal for motorized applications, ensuring stable performance and reduced losses.",
    "specs": {
      "Type": "PFC Capacitor (20 kVAR)",
      "Use Case": "Maintain optimal PF for continuous large-motor operations.",
      "Key Feature": "Voltage stabilization; reactive power reduction"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "ESHDC Capacitor",
    "brand": "TDK",
    "page_url": "https://www.eleczo.com/tdk-epcos-squarecap-25-kvar-525v-ac-super-heavy-duty-capacitor-b32455l6025a-11.html",
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2022/11/UN/KW/SP/163404553/tdk-epcos-1000x1000.jpg",
    "title": "High-Performance TDK EPCOS SquareCap 25 kVAR 525V AC Super Heavy Duty Capacitor",
    "description": "Enhance power factor correction and energy efficiency with TDK EPCOS 25 kVAR 525V heavy duty capacitor for industrial and motorized applications.",
    "specs": {
      "Type": "SquareCap Super Heavy-Duty (25 kVAR, 525 V)",
      "Use Case": "Continuous-duty factories, HVAC and distribution systems.",
      "Key Feature": "Reduced reactive losses; improved overall efficiency"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "EHDLL Capacitor",
    "brand": "TDK",
    "page_url": "https://www.indiamart.com/proddetail/epcos-ehdll-25-kvar-pfc-capacitor-2848968324855.html",
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2022/11/UN/KW/SP/163404553/tdk-epcos-1000x1000.jpg",
    "title": "PCOS EHDLL 25 kVAR PFC Capacitor for Efficient Power Factor Correction",
    "description": "Enhance energy efficiency with the EPCOS EHDLL 25 kVAR PFC Capacitor. Reliable motorized solution for stable voltage, reduced losses, and optimal performance.",
    "specs": {
      "Type": "PFC Capacitor (EHDLL, 25 kVAR)",
      "Use Case": "Stabilize voltage and minimize reactive power in plants.",
      "Key Feature": "Smooth motor operation; lower electricity costs"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "PhiCap EHD Capacitor",
    "brand": "TDK",
    "page_url": "https://www.indiamart.com/proddetail/epcos-tdk-make-power-factor-correction-capacitors-phicap-20701632588.html",
    "image_url": "https://5.imimg.com/data5/WY/KP/FV/SELLER-1815770/epcos-phicap-25kvar-440v-1000x1000.jpg",
    "title": "High-Performance EPCOS TDK Power Factor Correction Capacitors (PHICAP) for Reliable Energy Efficiency",
    "description": "A large-scale manufacturing plant integrates EPCOS TDK PHICAP power factor correction capacitors into its electrical panels. The result is reduced reactive power losses, improved voltage stability, and enhanced equipment lifespan—ensuring uninterrupted operations and cost-effective energy management.",
    "specs": {
      "Type": "PHICAP PFC Capacitors",
      "Use Case": "Industrial panels needing robust PF correction.",
      "Key Feature": "Voltage stability; reduced losses; longer equipment life"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "MFD Capacitor",
    "brand": "TDK",
    "page_url": "https://www.indiamart.com/proddetail/tdk-epcos-2-5-mfd-capacitor-24697941491.html",
    "image_url": "https://5.imimg.com/data5/ANDROID/Default/2022/1/EU/KP/WQ/119655379/product-jpeg-1000x1000.jpg",
    "title": "High-Performance TDK EPCOS 2.5 MFD Capacitor for Motorized Applications",
    "description": "Explore the TDK EPCOS 2.5 MFD capacitor designed for motorized systems. Reliable, durable, and efficient for industrial and electrical applications.",
    "specs": {
      "Type": "Motor Run Capacitor (2.5 µF)",
      "Use Case": "Single-phase motors, fans, HVAC start/run support.",
      "Key Feature": "Smooth start-up; reduced fluctuations; long life"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "Harmonics Filter Reactor",
    "brand": "TDK",
    "page_url": "https://www.digikey.in/en/products/detail/epcos-tdk-electronics/B84131M0003A116/651635?gad_campaignid=20115903510",
    "image_url": "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/200/421/817/MFG_B84131M0003A116_sml.jpg",
    "title": "EPCOS TDK Motorized Power Line Filter – Reliable EMI Suppression for Industrial Applications",
    "description": "Optimize system performance with EPCOS TDK motorized power line filter, ensuring superior EMI suppression and long-term reliability.",
    "specs": {
      "Type": "EMI / Power Line Filter",
      "Use Case": "Reduce interference from high-frequency drives in CNC/automation.",
      "Key Feature": "Strong EMI suppression; protects controllers; improves efficiency"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "7% Detuned Reactor",
    "brand": "TDK",
    "page_url": "https://www.powerfactorshop.com/pd/harmonic-filter-reactor/epcos-tdk-aluminium-harmonic-filter-reactor--7-detuned/Aluminium-12=2E=5Kvar",
    "image_url": "",
    "title": "EPCOS TDK Aluminium Harmonic Filter Reactor 7% Detuned | 12.5 kVAR Motorized Solution for Power Quality",
    "description": "Enhance power quality with EPCOS TDK Aluminium Harmonic Filter Reactor 7% detuned, 12.5 kVAR motorized—optimized for efficiency and reliability.",
    "specs": {
      "Type": "Harmonic Filter Reactor (7% detuned, 12.5 kVAR)",
      "Use Case": "Mitigate VFD harmonics; improve stability and equipment life.",
      "Key Feature": "Reduced THD; standards compliance; higher reliability"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "APFC Controller",
    "brand": "TDK",
    "page_url": "https://www.indiamart.com/proddetail/epcos-tdk-power-factor-controllers-20701646973.html",
    "image_url": "https://5.imimg.com/data5/UG/SP/WN/SELLER-1815770/epcos-tdk-make-power-factor-controllers-1000x1000.jpg",
    "title": "EPCOS TDK Motorized Power Factor Controllers for Efficient Energy Management",
    "description": "Optimize energy efficiency with EPCOS TDK motorized power factor controllers—smart solutions for reliable power correction and reduced energy losses.",
    "specs": {
      "Type": "Automatic Power Factor Controller",
      "Use Case": "Maintain target PF with staged/dynamic capacitor switching.",
      "Key Feature": "Intelligent control; lower losses; productivity boost"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "Thyristor Switching Module",
    "brand": "TDK",
    "page_url": "https://www.tdk-electronics.tdk.com/en/373388/company/press-center/press-releases/press-releases/power-factor-correction-thyristor-module-with-expanded-operating-voltage-range/1203646",
    "image_url": "https://www.tdk-electronics.tdk.com/resource/image/1203654/ratio4x3/445/334/a27ecb76b201d1407c47008bef7dd65b/44DB37BB34D5B725303029CA5F360479/bild-teaser-en.png",
    "title": "High-Performance Thyristor Module for Power Factor Correction with Extended Voltage Range",
    "description": "Discover TDK’s advanced thyristor module for efficient power factor correction, delivering reliability and extended voltage range for industrial systems.",
    "specs": {
      "Type": "Thyristor Switching Module (PFC)",
      "Use Case": "Fast PF correction for rapidly changing loads in industry.",
      "Key Feature": "Expanded voltage range; reliable reactive compensation"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "Active Harmonic Filter",
    "brand": "TDK",
    "page_url": "https://systemcontrols.co.in/tdk-epcos-active-harmonic-filter/",
    "image_url": "https://systemcontrols.co.in/wp-content/uploads/sku46-active-harmonic-filter.png",
    "title": "TDK EPCOS Active Harmonic Filter – Advanced Power Quality & Motorized Efficiency Solutions",
    "description": "Enhance power quality with TDK EPCOS Active Harmonic Filter. Minimize harmonics, improve motor efficiency & ensure reliable energy performance.",
    "specs": {
      "Type": "Active Harmonic Filter",
      "Use Case": "Reduce current harmonics and stabilize voltage in plants.",
      "Key Feature": "Harmonic distortion control; improved efficiency; reliability"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "Static Var Generator",
    "brand": "TDK",
    "page_url": "https://www.tdk-electronics.tdk.com/en/2420704/products/product-catalog/components-for-power-factor-correction-and-harmonic-filtering/pqvar",
    "image_url": "https://www.tdk-electronics.tdk.com/resource/image/2988860/uncropped/1050/0/f4d6bdf9d8ffd296f36e3f4bec1bcf88/16B5D8317604CB7A29655C0B0B6E8407/image-page.png",
    "title": "Intelligent Motorized PFC Systems for Efficient Power Quality & Harmonic Filtering",
    "description": "Optimize energy efficiency with motorized power factor correction systems delivering reliable harmonic filtering and improved power quality.",
    "specs": {
      "Type": "SVG / PQVar System",
      "Use Case": "Dynamic VAR compensation and harmonic mitigation.",
      "Key Feature": "Fast response; improved PF; cleaner waveform"
    },
    "price": ""
  },
  {
    "parent_category": "Power Capacitors",
    "category": "Capacitors",
    "product_name": "HMI Display",
    "brand": "TDK",
    "page_url": "https://www.tdk-electronics.tdk.com/en/373562/tech-library/articles/applications-cases/applications-cases/tdk-improves-power-quality-in-the-petrochemical-industry/3018996",
    "image_url": "",
    "title": "Enhancing Power Quality in Petrochemical Plants with Active Harmonic Filters for THD & Grid Reliability",
    "description": "Reduce THD above 30% with active harmonic filter solutions in petrochemical power systems—boost reliability, lower losses & improve energy efficiency.",
    "specs": {
      "Type": "Application Case / HMI overview",
      "Use Case": "Active filters reducing THD to 3–5% in MV grids.",
      "Key Feature": "Better uptime; less overheating; fewer breaker trips"
    },
    "price": ""
  },

  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "AC/DC Clampmeter",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/334-digit-4000-count-600a-dc-ac-digital-clampmeter",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/334-digit-4000-count-600a-dc--ac-digital-clampmeter-255.jpg",
    "title": "Clamp Meter 334 Digit 4000 Count 600A AC/DC Digital  – High-Precision Electrical Testing Tool",
    "description": "Accurate 600A AC/DC digital clamp meter with 4000 count display. Ideal for electricians, engineers & motorized systems testing.",
    "specs": {
      "Type": "Digital AC/DC Clamp Meter",
      "Use Case": "Measure motor/panel current without breaking the line.",
      "Key Feature": "600A range; 4000-count; fast diagnostics"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Digital Insulation Tester",
    "brand": "MECO",
    "page_url": "https://www.meco.in/digital-type-insulation-testers-products/dit99bl--a",
    "image_url": "https://www.meco.in/uploads/products/gallery/zoom/dit-99bla54.JPG",
    "title": "Advanced Digital Insulation Tester DIT99BL with Motorized Operation for High-Precision Electrical Testing",
    "description": "Discover the DIT99BL Digital Insulation Tester with motorized function for accurate, safe, and reliable insulation resistance measurement.",
    "specs": {
      "Type": "Insulation Resistance Tester",
      "Use Case": "Check HV motor/cable insulation to prevent failures.",
      "Key Feature": "High-precision IR; safety features"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Earth Resistance tester",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/digital-earth-resistance-tester",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/digital-earth-resistance-tester-316.jpg",
    "title": "Motorized Digital Earth Resistance Tester for Accurate Ground Testing",
    "description": "Explore the motorized digital earth resistance tester for precise, reliable ground resistance measurement. Ideal for electrical safety and compliance.",
    "specs": {
      "Type": "Earth/Ground Resistance Tester",
      "Use Case": "Ensure safe grounding for heavy machinery.",
      "Key Feature": "Accurate 3/4-wire tests; compliance ready"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Digital Multimeter",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/MECO-101B-Digital-Multimeter-Pocket/dp/B071CZJKPL",
    "image_url": "https://m.media-amazon.com/images/I/41nqS+01fmL._SY445_SX342_QL70_FMwebp_.jpg",
    "title": "MECO 101B Digital Multimeter – Compact Pocket-Sized Tool for Accurate Electrical Testing",
    "description": "Discover the MECO 101B Digital Multimeter, a portable and precise tool for voltage, current, and resistance testing in professional and DIY projects.",
    "specs": {
      "Type": "Pocket Digital Multimeter",
      "Use Case": "Quick AC/DC voltage and resistance checks.",
      "Key Feature": "Lightweight; clear display; reliable"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Infrared Temperature Gun",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/Meco-Industrial-Infrared-Thermometer-Model/dp/B09ZL5L4VT",
    "image_url": "https://m.media-amazon.com/images/I/31J162oszxL.jpg",
    "title": "Meco Industrial Infrared Thermometer – High-Precision Motorized Temperature Measurement Tool",
    "description": "Accurate motorized infrared thermometer for industrial use. Meco Model delivers reliable, non-contact temperature measurement every time.",
    "specs": {
      "Type": "Industrial IR Thermometer",
      "Use Case": "Monitor furnace/machinery temps without contact.",
      "Key Feature": "Fast IR sensor; safe operation"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Anemometer",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/Meco-961P-Air-Flow-Anemometer/dp/B07FBFP3PH",
    "image_url": "https://m.media-amazon.com/images/I/31oePascOsL._SX342_SY445_QL70_FMwebp_.jpg",
    "title": "Meco 961P Air Flow Anemometer – Precision Motorized Air Velocity & Temperature Measurement Tool",
    "description": "Accurate airflow and temperature monitoring with the Meco 961P motorized anemometer. Ideal for HVAC, ventilation, and industrial applications.",
    "specs": {
      "Type": "Air Flow Anemometer",
      "Use Case": "Measure duct air velocity and temperature.",
      "Key Feature": "Motorized vane; real-time readings"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Phase sequence Indicator",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/phase-sequence-indicator",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/phase-sequence-indicator-268.jpg",
    "title": "Motorized Phase Sequence Indicator – Accurate Phase Rotation Testing for Industrial Safety",
    "description": "Reliable motorized phase sequence indicator for precise phase rotation detection, ensuring electrical safety and equipment protection.",
    "specs": {
      "Type": "Phase Rotation Indicator",
      "Use Case": "Verify correct phase order before starting motors.",
      "Key Feature": "Prevents reverse rotation; protects equipment"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Non Contact Voltage Detector",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/noncontact-voltage-detector",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/noncontact-voltage-detector-model--ncvd1000s-301.JPG",
    "title": "Motorized Non-Contact Voltage Detector for Safe & Accurate Electrical Testing",
    "description": "Ensure reliable electrical testing with a motorized non-contact voltage detector. High-precision, safe, and easy to use for professional electricians.",
    "specs": {
      "Type": "NCV Detector",
      "Use Case": "Quickly verify live wires in control panels.",
      "Key Feature": "Touch-free detection; fast indication"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Battery Tester",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/Meco-BM63-Portable-Battery-Tester/dp/B014H3HYOA",
    "image_url": "https://m.media-amazon.com/images/I/615lGHSrsNL._SX466_.jpg",
    "title": "Meco BM63 Portable Battery Tester – Accurate, Motorized Battery Health Analyzer",
    "description": "Test battery performance with the Meco BM63 Portable Battery Tester. Reliable, motorized, and accurate tool for quick battery diagnostics.",
    "specs": {
      "Type": "Portable Battery Tester",
      "Use Case": "UPS and backup systems—voltage and internal resistance checks.",
      "Key Feature": "Instant readings; health insights"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Lesser Distance Meter",
    "brand": "MECO",
    "page_url": "https://www.indiamart.com/proddetail/meco-ldm-60-laser-distance-meter-2855463536030.html",
    "image_url": "https://m.media-amazon.com/images/I/31oePascOsL._SX342_SY445_QL70_FMwebp_.jpg",
    "title": "Meco LDM-60 Laser Distance Meter – Advanced Digital Measuring Tool for Precision & Efficiency",
    "description": "Discover the Meco LDM-60 Laser Distance Meter – accurate, motorized digital measuring tool for engineers, architects, and construction professionals.",
    "specs": {
      "Type": "Laser Distance Meter",
      "Use Case": "±2 mm accurate measurements for layout and planning.",
      "Key Feature": "Fast, precise, compact"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Tachometer",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/tachometer-non-contact-type-professional-series-model-981k",
    "image_url": "",
    "title": "Professional Non-Contact Tachometer 981K – Precision Speed Measurement for Motors & Rotating Equipment",
    "description": "Discover the 981K Professional Non-Contact Tachometer for accurate RPM measurement of motors, shafts, and rotating machinery with high reliability.",
    "specs": {
      "Type": "Non-Contact Tachometer",
      "Use Case": "Measure RPM of fans, pumps, and shafts safely.",
      "Key Feature": "Laser-based precision; no-contact measurement"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Humidity Temperature Indicator",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/humidity--temperature-meter.aspx",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/920-p-new.jpg",
    "title": "Precision Motorized Humidity & Temperature Meter for Accurate Environmental Monitoring",
    "description": "Enhance climate control with our motorized humidity & temperature meter. Ensure accurate, real-time monitoring for industrial and laboratory applications.",
    "specs": {
      "Type": "Humidity & Temperature Meter",
      "Use Case": "Cleanrooms and labs—continuous precise monitoring.",
      "Key Feature": "Real-time data; high accuracy"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Hygrometer",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/THM-I-Temperature-Humidity-Calendar-Display/dp/B08TC8VZT7",
    "image_url": "https://www.mecoinst.com/uploads/products/pictures/920-p-new.jpg",
    "title": "Smart Digital Temperature & Humidity Monitor with Calendar & Large Display",
    "description": "Stay informed with a digital temperature & humidity monitor featuring calendar, clock & motorized precision display for home & office comfort.",
    "specs": {
      "Type": "Digital Hygrometer",
      "Use Case": "Home/office comfort tracking with time/date display.",
      "Key Feature": "Large LCD; temp & RH; calendar/clock"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Lux Meter",
    "brand": "MECO",
    "page_url": "https://www.amazon.in/Meco-930P-Lux-Meter/dp/B01FVTH318",
    "image_url": "https://m.media-amazon.com/images/I/21nITAQWi7L.jpg",
    "title": "Meco 930P Digital Lux Meter – Accurate Light Intensity Measurement for Industrial & Professional Use",
    "description": "Meco 930P Lux Meter ensures precise light measurement for factories, labs & workplaces. Reliable, portable & easy to use for accurate lux testing.",
    "specs": {
      "Type": "Digital Lux Meter",
      "Use Case": "Verify illumination levels for safety and quality.",
      "Key Feature": "Accurate readings; portable; simple operation"
    },
    "price": ""
  },
  {
    "parent_category": "Measuring Instrument",
    "category": "Instrument Meter",
    "product_name": "Sound Meter",
    "brand": "MECO",
    "page_url": "https://www.mecoinst.com/meco-product-details/digital-sound-level-meter.aspx",
    "image_url": "",
    "title": "Accurate Digital Sound Level Meter for Noise Monitoring & Environmental Testing",
    "description": "Measure noise with precision using our digital sound level meter. Ideal for industrial, environmental, and workplace acoustic testing.",
    "specs": {
      "Type": "Digital Sound Level Meter",
      "Use Case": "Monitor site dB levels for regulatory compliance.",
      "Key Feature": "Precise SPL measurement; portable form factor"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Power Contactors",
    "brand": "Siemens",
    "page_url": "https://www.flipkart.com/siemens-contactors-relays-3rt20171ap01-mcb/p/itm7bcb056202484?pid=MCBGHUMZXSBCW8AH&lid=LSTMCBGHUMZXSBCW8AHNQCH94&marketplace=FLIPKART&cmpid=content_electrical-mcb-rccb_8965229628_gmc",
    "image_url": [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/electrical-mcb-rccb/8/w/e/1-contactors-and-relays-3rt20171ap01-3rt20171ap01-siemens-original-imaghumzmtvddrhn.jpeg?q=70&crop=false"
    ],
    "title": "Siemens Contactor & Relay – Reliable Electrical Control Solution",
    "description": "Discover the Siemens 3RT2017-1AP01 Contactor & Relay for safe, efficient motor control, overload protection, and long-lasting electrical performance.",
    "specs": {
      "Type": "Power Contactor",
      "Use Case": "Industrial automation systems to control motors, manage overload protection, and ensure stable electrical performance.",
      "Key Feature": "Reliable motor protection and control"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Overload Relays",
    "brand": "Siemens",
    "page_url": "https://www.digikey.in/en/products/detail/siemens/3RU21160JB0/14636147?gad_campaignid=20115903510",
    "image_url": [
      "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/300/726/114/MFG_3RU21160AB0_sml.jpg"
    ],
    "title": "Siemens Thermal Overload Relay – Reliable Motor Protection",
    "description": "Discover Siemens 3RU2116-0JB0 Thermal Overload Relay for precise motor protection, enhanced safety, and long-lasting industrial performance.",
    "specs": {
      "Type": "Thermal Overload Relay",
      "Use Case": "Safeguards three-phase motors from overload damage in industrial automation.",
      "Key Feature": "Enhanced safety; long service life"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Motor Protection Circuit Breakers (MPCB)",
    "brand": "Siemens",
    "page_url": "https://www.digikey.in/en/products/detail/siemens/3RV20111EA150BA0/15226469?gad_campaignid=20115903510",
    "image_url": [
      "https://mm.digikey.com/Volume0/opasdata/d220001/derivates/1/300/748/056/MFG_3RV20110AA15_sml.jpg"
    ],
    "title": "Siemens Motor Protection Circuit Breaker – Reliable Overload & Short-Circuit Protection",
    "description": "Discover Siemens motor protection circuit breaker for safe, efficient overload and short-circuit protection in industrial systems.",
    "specs": {
      "Type": "Motor Protection Circuit Breaker",
      "Use Case": "Safeguards motors in automation panels from overload and short-circuit faults.",
      "Key Feature": "Protects motors; reduces downtime"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "DOL Starters",
    "brand": "Siemens",
    "page_url": "https://vashiisl.com/products/siemens-3tw72911aw72-3hp-2-2kw-dol-starter-4-6-3a-415-vac",
    "image_url": [
      "https://vashiisl.com/cdn/shop/products/3TE72910AB77_030b2c05-2b25-4c66-93b6-79d4e1a3e8ea_363x473.jpg?v=1630835987"
    ],
    "title": "Siemens 3HP (2.2kW), 4.6–3A, 415V AC | Reliable Motor Protection",
    "description": "Discover Siemens Starter, 3HP 2.2kW, 415V AC. Engineered for durability, safety, and efficient motor control across industries.",
    "specs": {
      "Type": "DOL Starter",
      "Use Case": "Ideal for motors up to 3HP (2.2kW) in industrial and commercial setups for pumps, fans, and compressors.",
      "Key Feature": "Dependable starting and overload protection"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Automatic Star Delta Starters",
    "brand": "Siemens",
    "page_url": "https://vashiisl.com/products/siemens-3te74952ar0-50hp-37kw-415v-ac-automatic-star-delta-s",
    "image_url": [
      "https://vashiisl.com/cdn/shop/products/3TE74952AR0_473x471.png?v=1630909335"
    ],
    "title": "High-Performance 50HP 37kW 415V AC Automatic Star Delta Starter for Reliable Motor Control",
    "description": "Enhance motor efficiency with a 50HP 37kW 415V AC automatic star delta starter designed for smooth operation, durability, and energy savings.",
    "specs": {
      "Type": "Automatic Star Delta Starter",
      "Use Case": "Used in heavy-duty pumps and compressors to reduce high inrush current and improve energy efficiency.",
      "Key Feature": "Durable; energy-saving; protects equipment"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Soft Starters",
    "brand": "Siemens",
    "page_url": "https://in.rsdelivers.com/product/siemens/3rw3014-1bb04/siemens-sirius-3rw-soft-starter-3-kw-480-v-ac-3/7464909",
    "image_url": [
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F7464909-01",
      "http://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F7464909-02",
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F7464909-03"
    ],
    "title": "Energy-Efficient Siemens Sirius Soft Starter for Reliable Motor Control",
    "description": "Enhance motor performance with a Siemens Sirius soft starter. Ensure smooth starts, energy efficiency, and reliable protection for industrial applications.",
    "specs": {
      "Type": "Soft Starter",
      "Use Case": "Reduces mechanical stress during startup in conveyor systems, pumps, and compressors.",
      "Key Feature": "Energy efficiency; extends equipment lifespan"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Electronic Timers",
    "brand": "Siemens",
    "page_url": "https://www.industrybuying.com/digital-timer-siemens-IND.TIM.32468720",
    "image_url": [
      "https://static1.industrybuying.com/products/industrial-automation/timers/IND.TIM.32468720_1668020036267.webp"
    ],
    "title": "Advanced Multifunction Digital Timer Enhancing Industrial Automation & Precision",
    "description": "Boost process control with a versatile Siemens digital timer offering 15 functions and wide 20-240 V AC/DC range. Reliable, precise, industrial timing.",
    "specs": {
      "Type": "Digital Timer",
      "Use Case": "Controls sterilization cycles and process timing in industrial automation.",
      "Key Feature": "15 functions; precise control"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Plug-in Relays",
    "brand": "Siemens",
    "page_url": "https://www.amazon.in/SIEMENS-Plug-Relay-13-5-7RQ01000BR10/dp/B09C3C247D",
    "image_url": [
      "https://m.media-amazon.com/images/I/31gwV2u4ZOL._SY445_SX342_QL70_FMwebp_.jpg"
    ],
    "title": "Reliable Industrial Plug-In Relay for Efficient Electrical Control Systems",
    "description": "High-quality plug-in relay for secure switching, automation, and electrical control applications. Durable, efficient, and industry-ready.",
    "specs": {
      "Type": "Plug-in Relay",
      "Use Case": "Ensures safe switching of control signals in automation panels.",
      "Key Feature": "Durable; efficient; industry-ready"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Indicating Lamps",
    "brand": "Siemens",
    "page_url": "https://www.tradeindia.com/products/siemens-filament-indicator-lamp-c6241228.html",
    "image_url": [
      "https://cpimg.tistatic.com/06241228/b/4/Siemens-Filament-Indicator-Lamp.jpg"
    ],
    "title": "Siemens Filament Indicator Lamp for Industrial Control Panels & Precision Signalling",
    "description": "Efficient Siemens filament indicator lamp delivering reliable illumination in industrial control systems. High visibility, durable performance—ideal for precision signalling.",
    "specs": {
      "Type": "Indicator Lamp",
      "Use Case": "Provides status feedback in centralized control panels.",
      "Key Feature": "Bright filament; durable performance"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Indicating Push Button",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-push-button-indication-lamp-21947970348.html",
    "image_url": [
      "https://5.imimg.com/data5/NY/UG/EW/SELLER-2121619/push-button-1000x1000.jpg",
      "https://5.imimg.com/data5/IH/DG/DD/SELLER-2121619/siemens-push-button-indication-lamp-1000x1000.jpg",
      "https://5.imimg.com/data5/YM/NP/MU/SELLER-2121619/siemens-push-button-indication-lamp-1000x1000.jpg"
    ],
    "title": "Precision Control & Visual Feedback with Siemens Push-Button Indication Lamp for Industrial Automation",
    "description": "Enhance safety and efficiency with Siemens indicating push button lamp offering instant visual signals, rugged design & seamless integration in control panels.",
    "specs": {
      "Type": "Push Button Indication Lamp",
      "Use Case": "Used in assembly lines to signal machine status (green, yellow, red).",
      "Key Feature": "Rugged; instant visual signals"
    },
    "price": ""
  }, {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Limit Switch",
    "brand": "Siemens",
    "page_url": "https://in.rsdelivers.com/product/siemens/3se5112-0ce01/siemens-3se5-series-roller-lever-limit-switch-no/nc-ip66-ip67-metal-housing-400v-ac-max-24-v-6a-max/6842910",
    "image_url": [
      "https://in.rsdelivers.com/product/siemens/3se5112-0ce01/siemens-3se5-series-roller-lever-limit-switch-no/nc-ip66-ip67-metal-housing-400v-ac-max-24-v-6a-max/6842910",
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/Y6842910-04",
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F6842910-04",
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F6842910-03"
    ],
    "title": "Durable Roller Lever Limit Switch with IP66/IP67 Protection for Industrial Automation",
    "description": "High-performance roller lever limit switch with IP66/IP67 protection, metal housing, and reliable NC/NO contacts for demanding industrial applications.",
    "specs": {
      "Type": "Limit Switch",
      "Use Case": "Detects object positioning in conveyor systems with precision.",
      "Key Feature": "Heavy-duty; IP66/IP67 protection"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "SIMOCODE",
    "brand": "Siemens",
    "page_url": "https://www.profibus.com/products/product-finder/simocode-pro-v",
    "image_url": [
      "https://www.profibus.com/index.php?eID=dumpFile&t=p&p=138559&token=64a39e34a30c142f13604b72cb2732e09a0f1883"
    ],
    "title": "Smart Motor Management with Advanced Protection and Control for Industrial Efficiency",
    "description": "Enhance motor protection, energy efficiency, and process reliability with intelligent motor management and control solutions for every industry.",
    "specs": {
      "Type": "Motor Management System",
      "Use Case": "Used in manufacturing plants for pump and conveyor operation with fault detection.",
      "Key Feature": "Smart monitoring; energy efficiency"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Cap Duty Contactors",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-capacitor-duty-contactor-2850487713791.html",
    "image_url": [],
    "title": "High-Performance Siemens Capacitor Duty Contactor for Reliable Power Factor Correction",
    "description": "Discover Siemens capacitor duty contactor engineered for durability, smooth switching, and efficient power factor correction in industrial applications.",
    "specs": {
      "Type": "Capacitor Duty Contactor",
      "Use Case": "Integrated into power distribution systems for power factor correction.",
      "Key Feature": "Durable; reduces reactive power losses"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Air Circuit Breakers (ACB)",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-air-circuit-breakers-11096624055.html",
    "image_url": [
      "https://4.imimg.com/data4/NT/FI/MY-12116029/siemens-air-circuit-breakers-1000x1000.jpg"
    ],
    "title": "Siemens Air Circuit Breakers: Reliable, Energy-Efficient Power Protection",
    "description": "High-performance Siemens air circuit breakers offering superior protection, energy efficiency & long service life for industrial and electrical power systems.",
    "specs": {
      "Type": "Air Circuit Breaker",
      "Use Case": "Protects electrical equipment from overloads and short circuits in distribution panels.",
      "Key Feature": "Reliable switching; energy efficient"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Molded Case Circuit Breakers (MCCB)",
    "brand": "Siemens",
    "page_url": "https://in.rsdelivers.com/product/siemens/3va1112-3ef36-0aa0/siemens-sentron-mccb-3p-125a-breaking-capacity-25/8744177",
    "image_url": [
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R8744177-01"
    ],
    "title": "High-Performance Siemens Sentron MCCB 3 Pole 125A – Reliable Circuit Protection with 25kA Breaking Capacity",
    "description": "Discover Siemens Sentron MCCB 3P 125A with 25kA breaking capacity – advanced protection, efficiency, and durability for modern electrical systems.",
    "specs": {
      "Type": "MCCB",
      "Use Case": "Provides overload and short-circuit protection in commercial power distribution.",
      "Key Feature": "High breaking capacity; durable"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Switch Fuse Unit (SFU)",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-switch-fuse-unit-8669457248.html",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2021/4/GD/WN/AO/2470324/siemens-switch-fuse-unit-1000x1000.jpg"
    ],
    "title": "High-Performance Siemens Switch Fuse Unit for Reliable Power Distribution",
    "description": "Discover Siemens switch fuse unit designed for safe, efficient, and reliable power distribution in industrial and commercial electrical systems.",
    "specs": {
      "Type": "Switch Fuse Unit",
      "Use Case": "Integrated into panels for continuous, safe power distribution.",
      "Key Feature": "Reliable; protects against overloads"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Control Switches",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-control-switches-2855107121012.html",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/10/457515228/GA/HB/BW/7925301/siemens-control-switches-1000x1000.jpeg"
    ],
    "title": "Siemens Control Switches for Reliable Industrial Automation & Power Management",
    "description": "Discover Siemens control switches for safe, efficient, and reliable electrical operations in industrial automation and power control systems.",
    "specs": {
      "Type": "Control Switch",
      "Use Case": "Used in manufacturing plants to control conveyor systems and other equipment.",
      "Key Feature": "Durable; ensures reliable power control"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Fuses",
    "brand": "Siemens",
    "page_url": "https://vashiisl.com/products/siemens-3ne18180-63a-690v-ac-3ne1-type-sitor-fuse-for-semi",
    "image_url": [
      "https://vashiisl.com/cdn/shop/products/3ne181809-2_8bdc0a06-5825-46b9-ac44-745def186312_300x300.jpg?v=1625673352"
    ],
    "title": "Ultra-Fast Power Semiconductor Protection with Siemens SITOR Class Fuse at 690 V AC",
    "description": "Protect thyristors, UPS & converters with a high-speed 63 A 690 V AC SITOR fuse for reliable semiconductor safety & low I²t damage.",
    "specs": {
      "Type": "Fuse",
      "Use Case": "Used in inverter systems to disconnect faults instantly and protect semiconductors.",
      "Key Feature": "Ultra-fast protection; minimizes downtime"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Timing and Monitoring Relays",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-timing-and-monitoring-relays-27458459633.html",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2022/11/FV/CE/HX/3868889/siemens-current-relay-1000x1000.jpg"
    ],
    "title": "Reliable Siemens Timing & Monitoring Relays for Industrial Automation & Safety",
    "description": "Discover Siemens timing and monitoring relays for precise control, automation safety, and efficient power management in industrial applications.",
    "specs": {
      "Type": "Timing & Monitoring Relay",
      "Use Case": "Provides precise motor control and overload protection in automation.",
      "Key Feature": "Reliable timing; enhances safety"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Miniature Circuit Breakers (MCB)",
    "brand": "Siemens",
    "page_url": "https://www.amazon.in/Siemens-Miniature-Circuit-Breaker-5SL62207RC/dp/B01D4QJGYM",
    "image_url": [
      "http://m.media-amazon.com/images/I/41AFMcH4pIL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "title": "Reliable Siemens Miniature Circuit Breaker for Safe and Efficient Electrical Protection",
    "description": "Ensure safety and efficiency with Siemens miniature circuit breaker—trusted solution for overload, short-circuit, and reliable electrical protection.",
    "specs": {
      "Type": "MCB",
      "Use Case": "Used in residential and commercial electrical installations to prevent overloads and short circuits.",
      "Key Feature": "Compact; energy-efficient protection"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Residual Current Circuit Breakers (RCCB)",
    "brand": "Siemens",
    "page_url": "https://www.indiamart.com/proddetail/siemens-residual-current-circuit-breaker-rccb-24128114148.html",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2021/10/BM/IX/YC/25269640/siemens-residual-current-circuit-breaker-rccb--1000x1000.jpg"
    ],
    "title": "Siemens Residual Current Circuit Breaker – Advanced Earth Leakage Protection & Safety Assurance",
    "description": "Ensure electrical safety with Siemens RCCB for reliable earth leakage protection, fire prevention & compliance in residential & industrial installations.",
    "specs": {
      "Type": "RCCB",
      "Use Case": "Protects workshops and homes by isolating faulty circuits during earth leakage.",
      "Key Feature": "Advanced protection; ensures compliance"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Residual Current Breaker Operators (RCBO)",
    "brand": "Siemens",
    "page_url": "https://sieportal.siemens.com/en-ww/products-services/detail/5SV3346-6?tree=CatalogTree",
    "image_url": [
      "https://mall.industry.siemens.com/mall/collaterals/files/186/jpg/G_I202_XX_89826i.jpg",
      "https://static.siemens.com/mimes/03000300JPG/G_I202_XX_22851I.jpg",
      "https://static.siemens.com/mimes/03000300JPG/G_I202_XX_22850I.jpg",
      "https://static.siemens.com/mimes/03000300JPG/G_I201_XX_13637I.jpg"
    ],
    "title": "Reliable Four-Pole Type A Residual Current Protection for Critical Electrical Systems",
    "description": "High-sensitivity four-pole Type A RCCB offering 63 A current and 30 mA residual current protection at 400 V AC — optimal for advanced safety & fault prevention.",
    "specs": {
      "Type": "RCBO",
      "Use Case": "Installed in data centres to protect sensitive equipment from leakage faults.",
      "Key Feature": "High sensitivity; critical protection"
    },
    "price": ""
  },
  {
    "parent_category": "Switchgear",
    "category": "Switchgear",
    "product_name": "Isolators",
    "brand": "Siemens",
    "page_url": "https://in.rsdelivers.com/product/siemens/3va1110-1aa36-0aa0/siemens-3p-pole-isolator-switch-100a-maximum-68kw/8744149",
    "image_url": [
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R8744149-01"
    ],
    "title": "High-Performance 3-Pole Isolator Switch | 100A Industrial Power Control",
    "description": "Reliable 3-pole isolator switch with 100A capacity for safe, efficient industrial power distribution and protection.",
    "specs": {
      "Type": "Isolator Switch",
      "Use Case": "Ensures safe disconnection of heavy-duty machinery during maintenance.",
      "Key Feature": "Heavy-duty; safe power disconnection"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Track Light",
    "product_name": "Philips Stanchion Track Light",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-stanchion-track-light?variant=43078557335742&country=IN&currency=INR",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsStanchionTracklight.png?v=1747311872",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsStanchionTracklight1.png?v=1747311873"
    ],
    "title": "Philips Stanchion Track Light – Sleek, Adjustable, and Energy-Efficient",
    "description": "Discover the Philips Stanchion Track Light: a versatile lighting solution with adjustable wattage (10W–30W), multiple color temperatures (Warm, Natural, Cool White), and robust metal construction. Ideal for retail, hospitality, and residential spaces seeking modern, energy-efficient illumination.",
    "specs": {
      "Type": "Track Light",
      "Use Case": "Retail displays, hospitality ambience, residential living/dining with adjustable lighting.",
      "Key Feature": "Adjustable wattage and CCT; metal housing"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Track Light",
    "product_name": "Webber Track Spot",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-webber-track-spot?variant=45097625092286",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsWebberTrackSpot.png?v=1747311447"
    ],
    "title": "Philips Webber Track Spot",
    "description": "The Philips Webber Track Spot — high efficiency LED track lighting for homes, shops, galleries. Available in 6W, 12W, 18W, warm & natural white.",
    "specs": {
      "Type": "Track Light",
      "Use Case": "Retail/product highlighting and gallery artwork accenting.",
      "Key Feature": "Multiple wattages; warm/natural white options"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Duraslim",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-dura-slim-led-downlight?variant=43095412277438",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsDuraSlimLEDDownlight22W.png?v=1747311822",
      "https://in.shop.lighting.philips.com/cdn/shop/files/DuraSlim-3.png?v=1747311822",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsDuraSlimLEDDownlight.png?v=1747311822",
      "https://in.shop.lighting.philips.com/cdn/shop/files/DuraSlim-Squarefeatures.png?v=1747311823",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Duraslim-dimensions.png?v=1747311823"
    ],
    "title": "Philips Dura Slim LED Downlight",
    "description": "Durable slim LED downlight by Philips with long lifetime and sleek design.",
    "specs": {
      "Type": "Panel Downlight",
      "Use Case": "Low-ceiling living rooms or hallways for ambient lighting with minimal profile.",
      "Key Feature": "Slim design; long lifetime"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Ultra Glow",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-ultraglow-downlight?variant=43087120007358",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsUltraGlowLEDDownlight_0bf4781a-be5f-422d-b259-622765a83679.png?v=1747311835",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PrimePlusDownlight_dc281493-37e8-48dd-bfe4-376eb429db33.png?v=1747311835",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsUltraGlowLEDDownlight.png?v=1747311835",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsUltraGlowLEDDownlight1.png?v=1747311835"
    ],
    "title": "Philips Ultra Glow LED Downlight",
    "description": "Slim, energy-efficient Philips Ultra Glow LED Downlight with EyeComfort technology and long life.",
    "specs": {
      "Type": "Panel Downlight",
      "Use Case": "Recessed lighting in living rooms, halls, or offices with low ceilings.",
      "Key Feature": "EyeComfort; slim form factor"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Fullglow",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-fullglow-led-surface-light?variant=43087045591230",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsFullGlowLEDSurfacelight12W.png?v=1747311845",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard2_7db8e91c-1f85-4ec3-a753-998c3f6c598c.jpg?v=1747311845"
    ],
    "title": "Philips FullGlow LED Surface Light",
    "description": "The Philips FullGlow LED Surface Light in India – rimless, slim profile, superior light uniformity, EyeComfort, ideal for rooms without false ceiling.",
    "specs": {
      "Type": "Surface Panel",
      "Use Case": "Small rooms, balconies, corridors, kitchens where false ceiling isn’t possible.",
      "Key Feature": "Rimless slim design; uniform light"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panal",
    "product_name": "Fullglow Striker",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-fullglow-striker-surface-light?variant=43087123710142",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsFullGlowStrikerLEDSurfacelight.png?v=1747311830",
      "https://in.shop.lighting.philips.com/cdn/shop/files/2_860fcd7b-54a3-4c2-93da-9a3d2428c5f3.jpg?v=1747311830"
    ],
    "title": "Philips FullGlow Striker LED Surface Light",
    "description": "Philips FullGlow Striker LED Surface Light — slim 5W surface LED light in Warm / Cool / Natural white, perfect for modern interiors.",
    "specs": {
      "Type": "Surface Panel",
      "Use Case": "Kitchen cabinets, display shelves, corridor ceilings, closets for soft efficient lighting.",
      "Key Feature": "Slim 5W profile; multiple CCTs"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Deco Plus",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-deco-led-cob?variant=43095416242366",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsDecoLEDCOBlight_fe0d0c64-5e99-48f4-8c9f-783fa0bc8c09.png?v=1747311812",
      "https://in.shop.lighting.philips.com/cdn/shop/files/DecoCOB-dimensions.png?v=1747311812"
    ],
    "title": "Premium Recessed LED COB Light",
    "description": "Premium Recessed LED COB Light from Philips — durable aluminum housing, multiple color options.",
    "specs": {
      "Type": "COB Spotlight",
      "Use Case": "Accent downlighting in hotel lobbies or galleries.",
      "Key Feature": "Aluminium housing; color options"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Astraspot",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-astraspot-3in1-cob?variant=44317229056190",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsAstraspot3in1COBLight.png?v=1747311560",
      "https://in.shop.lighting.philips.com/cdn/shop/files/2_2fea34cd-9e5b-4e46-9503-487c20b11a6e.jpg?v=1747311560",
      "https://in.shop.lighting.philips.com/cdn/shop/files/08.jpg?v=1747311560"
    ],
    "title": "Philips AstraSpot 3-in-1 COB Spotlight – Versatile Lighting for Modern Spaces",
    "description": "Enhance your interiors with Philips AstraSpot 3-in-1 COB spotlight. Adjustable design, energy-efficient LED, and premium illumination for homes, offices, and retail spaces.",
    "specs": {
      "Type": "COB Spotlight",
      "Use Case": "Highlight artwork, accent architectural features, create ambient retail lighting.",
      "Key Feature": "3-in-1 adjustable design; efficient LED"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Astraspot Tiltable",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-astraspot-tiltable-led-cob?variant=43087045001406",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsAstraSpotTiltableLEDCOBlight.png?v=1747311853",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsAstraSpotTiltableLEDCOBlight1.png?v=1747311853",
      "https://in.shop.lighting.philips.com/cdn/shop/files/AstraSpottilt-features.png?v=1747311853"
    ],
    "title": "Philips AstraSpot Tiltable LED COB – Precision Lighting with Flexibility",
    "description": "Discover Philips AstraSpot Tiltable LED COB, a versatile spotlight delivering bright, focused light with adjustable tilt for modern interiors.",
    "specs": {
      "Type": "Tiltable COB Spotlight",
      "Use Case": "Highlight artwork, accent corners, set mood lighting in living rooms/showrooms/offices.",
      "Key Feature": "Adjustable tilt; focused illumination"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "COBPro",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-led-cob-pro?variant=43095415324862",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsLEDCOBProCOBlight.png?v=1747311815",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsLEDCOBProCOBlight1.png?v=1747311816",
      "https://in.shop.lighting.philips.com/cdn/shop/files/LEDCOBPro.png?v=1747311816",
      "https://in.shop.lighting.philips.com/cdn/shop/files/COBPro-higherwattages-featurees.png?v=1747311816"
    ],
    "title": "Philips LED COB Pro Recessed Spotlight",
    "description": "A premium directable recessed LED spotlight with EyeComfort technology, ideal for low ceilings and accent lighting.",
    "specs": {
      "Type": "Directable COB Spotlight",
      "Use Case": "Highlight artwork or architectural features while preserving ambient glow.",
      "Key Feature": "EyeComfort; directable head"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Thin TRIM Deep",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-thin-trim-deep-led-cob?variant=44121767411902",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsThinTrimDeepLEDCOBlight.png?v=1747311593",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsThinTrimDeepLEDCOBlight.png?v=1747311593"
    ],
    "title": "Philips Thin Trim Deep LED COB – 7 W Non-dimmable",
    "description": "Thin Trim Deep LED COB from Philips, high efficiency deep recessed lighting for modern interiors.",
    "specs": {
      "Type": "Deep Recessed COB",
      "Use Case": "Dining rooms or bedrooms for adjustable ambient lighting.",
      "Key Feature": "Deep anti-glare design; efficient LED"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Evenglow",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-evenglow-led-strip-light?variant=43156199145662",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsEvenGlowLEDStriplightcopy3.png?v=1747311686",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsEvenGlowLEDStriplightcopy.png?v=1747311686",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard_2_0f03a8ff-69cf-422f-b052-f1c054d2c13e.png?v=1747311686"
    ],
    "title": "Philips EvenGlow LED Strip Light",
    "description": "Illuminate your space evenly with the Philips EvenGlow LED Strip Light, offering flexible lighting in warm, natural, or cool tones for indoor settings.",
    "specs": {
      "Type": "LED Strip",
      "Use Case": "Ambient lighting under kitchen cabinets.",
      "Key Feature": "Uniform illumination; multiple CCTs"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Proglow Next",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-proglow-nxt-led-strip-light?variant=45237851914430",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/IMG-20250728-WA0004.jpg?v=1753688053",
      "https://in.shop.lighting.philips.com/cdn/shop/files/IMG-20250728-WA0005.jpg?v=1753688053",
      "https://in.shop.lighting.philips.com/cdn/shop/files/IMG-20250728-WA0006.jpg?v=1753688053",
      "https://in.shop.lighting.philips.com/cdn/shop/files/IMG-20250728-WA0007.jpg?v=1753688053",
      "https://in.shop.lighting.philips.com/cdn/shop/files/IMG-20250728-WA0008.jpg?v=1753688053"
    ],
    "title": "Philips ProGlow Nxt LED Strip Light",
    "description": "High-efficiency RGB + White LED strip offering customizable lighting ambiance for homes and commercial spaces.",
    "specs": {
      "Type": "RGBW LED Strip",
      "Use Case": "TV backlight, under-cabinet accents, mood lighting in living rooms.",
      "Key Feature": "RGB + White; customizable ambience"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Slim Edge",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-slim-edge-led-profile-strip-light?variant=43156200227006",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsSlimEdgeLEDProfileStriplight.png?v=1747311675",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsSlimEdgeLEDProfileStriplightcopy.png?v=1747311675",
      "https://in.shop.lighting.philips.com/cdn/shop/files/SlimEdge-3.png?v=1747311675"
    ],
    "title": "Philips Slim Edge LED Strip for Cove Lighting",
    "description": "Discreet LED profile strip ideal for cove & wall highlight installations.",
    "specs": {
      "Type": "LED Profile Strip",
      "Use Case": "Ceiling coves to highlight wall texture.",
      "Key Feature": "Slim profile; clean linear effect"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Coverglow",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-cove-glow-led-strip-light?variant=43156198457534",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsCoveGlowLEDStriplight.png?v=1747311690",
      "https://in.shop.lighting.philips.com/cdn/shop/files/CoveGlow-2.png?v=1747311690",
      "https://in.shop.lighting.philips.com/cdn/shop/files/CoveGlow-3.png?v=1747311690"
    ],
    "title": "Philips Cove Glow LED Strip Light",
    "description": "Illuminate ceilings, shelves & coves with the Philips Cove Glow LED Strip Light — soft ambient lighting for modern interiors.",
    "specs": {
      "Type": "LED Strip",
      "Use Case": "Behind false ceilings to create soft indirect lighting.",
      "Key Feature": "Soft ambient glow; easy install"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Marathon",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-marathon-led-rope-light?variant=43156199506110",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsMarathonLEDRopelight.png?v=1749526952",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard_2_60aad2f4-6d45-43b1-a6c2-f6cd98803b4a.png?v=1749526952",
      "https://in.shop.lighting.philips.com/cdn/shop/files/PhilipsMarathonLEDRopelightcopy.png?v=1749526952"
    ],
    "title": "Philips Marathon LED Rope Light",
    "description": "High-quality LED rope light by Philips — reliable and flexible lighting for architectural and decorative use.",
    "specs": {
      "Type": "LED Rope Light",
      "Use Case": "Edge walkways, outline facades, frame gardens.",
      "Key Feature": "Flexible; long-lasting"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Ledstrip",
    "product_name": "Profile Shine",
    "brand": "Philips",
    "page_url": "https://in.shop.lighting.philips.com/products/philips-led-strip-profile-shine-with-driver?variant=45239899652286",
    "image_url": [
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard1_3b2d261a-4a56-4b1c-a154-dd38b6d93d37.png?v=1753343665",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard2_1d12cd8f-d454-46a8-9e12-a855468444a5.png?v=1753343665",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard3_68ebb831-deb7-41e5-b4e3-9adec415e37b.png?v=1753343665",
      "https://in.shop.lighting.philips.com/cdn/shop/files/Artboard4_50a44e0e-d862-4ab8-96e5-286f2d90d54c.png?v=1753343665"
    ],
    "title": "Philips LED Strip Profile Shine",
    "description": "Philips LED strip profile solution with integrated driver for seamless lighting transitions.",
    "specs": {
      "Type": "LED Strip Profile (with driver)",
      "Use Case": "Under-cabinet lighting for consistent linear illumination without glare.",
      "Key Feature": "Integrated driver; seamless look"
    },
    "price": ""
  },

  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Glow series",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2024/4/411082157/EV/GX/PZ/108015669/deep-cob-light-500x500.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/4/411082157/EV/GX/PZ/108015669/deep-cob-light-500x500.jpg"
    ],
    "title": "Energy-Efficient Deep COB Light for Modern Interiors",
    "description": "Enhance interiors with high-lumen Deep COB Lights that provide focused illumination and long-lasting performance. Perfect for residential and commercial spaces.",
    "specs": {
      "Type": "COB Spotlight",
      "Use Case": "Living rooms, retail showrooms, office ceilings for premium spotlighting.",
      "Key Feature": "High lumen output; long life"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Grace CR",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2024/12/476371098/FG/PO/IJ/2380641/neptune-grace-cr-series.jpeg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476371098/FG/PO/IJ/2380641/neptune-grace-cr-series.jpeg"
    ],
    "title": "Deep COB Light for Modern Interior & Architectural Lighting",
    "description": "Energy-efficient deep COB light ideal for offices, retail spaces, and homes. Designed for focused illumination, glare reduction, and long-lasting performance.",
    "specs": {
      "Type": "Deep COB Spotlight",
      "Use Case": "Highlight artwork, create ambient lighting, provide uniform workspace brightness.",
      "Key Feature": "Glare reduction; durable performance"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Grace DR",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2024/9/447701470/KW/CA/DZ/212848094/whatsapp-image-2024-09-02-at-15-52-55-b9796a29-500x500.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/9/447701470/KW/CA/DZ/212848094/whatsapp-image-2024-09-02-at-15-52-55-b9796a29-500x500.jpg"
    ],
    "title": "High-Quality Industrial Conveyor Belt",
    "description": "Durable and efficient industrial conveyor belt designed for smooth material handling across various industries.",
    "specs": {
      "Type": "COB",
      "Use Case": "Transporting raw materials and finished goods in manufacturing plants.",
      "Key Feature": "Durable; smooth handling"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Grace Surface Cylinder Light",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2022/3/HP/QB/OH/2380641/img-20220226-wa0003-250x250.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2022/3/HP/QB/OH/2380641/img-20220226-wa0003-250x250.jpg"
    ],
    "title": "High-Performance Industrial Web Line Machine",
    "description": "Discover a durable and efficient web line machine designed for precision, reliability, and smooth operations across industrial applications.",
    "specs": {
      "Type": "COB",
      "Use Case": "Continuous web processing in packaging, printing, textiles, material handling.",
      "Key Feature": "Precision processing; reduced downtime"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Round Grace CR",
    "brand": "Neptune",
    "page_url": "https://www.matemart.in/Assets/images/products/medium/aa265bc6ad44d540c269b9eb85028dbf.png",
    "image_url": [
      "https://www.matemart.in/Assets/images/products/medium/aa265bc6ad44d540c269b9eb85028dbf.png"
    ],
    "title": "Durable Geometry Box with Compass, Divider, and Essential Math Tools",
    "description": "A complete geometry box set with compass, divider, protractor, ruler, and set squares. Ideal for students, classrooms, and technical drawing tasks.",
    "specs": {
      "Type": "COB",
      "Use Case": "School mathematics, engineering drawing, architectural sketches, exam preparation.",
      "Key Feature": "Precision instruments; student-friendly"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Beat Series",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2024/5/415546554/EX/CK/MY/11084189/beat-cob-500x500.png",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/5/415546554/EX/CK/MY/11084189/beat-cob-500x500.png"
    ],
    "title": "High-Performance BEAT COB LED Light for Efficient Illumination",
    "description": "Discover the BEAT COB LED Light designed for powerful brightness, long-lasting durability, and energy efficiency. Ideal for indoor and outdoor lighting applications.",
    "specs": {
      "Type": "COB LED Light",
      "Use Case": "Commercial spaces, studios, workshops, showrooms, residential interiors.",
      "Key Feature": "High lumen; energy efficient"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "COB",
    "product_name": "Round Triton COB Series",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2023/1/EG/OC/MJ/2380641/triton-cob-series-500x500.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2023/1/EG/OC/MJ/2380641/triton-cob-series-500x500.jpg"
    ],
    "title": "Triton COB Series LED Floodlight — High Efficiency Outdoor Lighting",
    "description": "Explore the Triton COB Series LED Floodlight — engineered for durability, energy efficiency, and superior illumination in industrial, commercial, and residential settings.",
    "specs": {
      "Type": "COB Floodlight",
      "Use Case": "Perimeter/warehouse lighting, high bay, security, outdoor area illumination.",
      "Key Feature": "Durable build; high lumen output"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Neo Led Panal Light",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2023/1/KG/LA/KZ/2380641/neptune-neo-led-panel-light.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2023/1/KG/LA/KZ/2380641/neptune-neo-led-panel-light.jpg"
    ],
    "title": "Neo LED Panel Light — Ultra Slim Ceiling Downlight",
    "description": "Discover the Neo LED panel light — an ultra slim, back-lit ceiling downlight offering uniform illumination, energy efficiency, and minimalist design for modern spaces.",
    "specs": {
      "Type": "Panel Downlight",
      "Use Case": "Uniform, glare-free illumination in offices, living rooms, conference rooms.",
      "Key Feature": "Ultra-slim back-lit design"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Joy Trimless Panel Ceiling Light",
    "brand": "Neptune",
    "page_url": "https://www.matemart.in/Assets/images/products/medium/8e9240a9f16db317677aa70bfeb6f560.jpg",
    "image_url": [
      "https://www.matemart.in/Assets/images/products/medium/8e9240a9f16db317677aa70bfeb6f560.jpg"
    ],
    "title": "Ergonomic Fine-Lead Mechanical Pencil for Precision Drawing",
    "description": "A sleek mechanical pencil with 0.5 mm fine lead and soft grip, ideal for architects, designers, and students seeking accurate, comfortable writing.",
    "specs": {
      "Type": "Panel",
      "Use Case": "Draft precise architectural lines, annotate plans, sketch diagrams.",
      "Key Feature": "0.5 mm fine lead; soft grip"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Aqua Series Downlight",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2024/12/477059215/AE/VF/CH/2380641/neptune-aqua-series-led-downlight.jpg",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/477059215/AE/VF/CH/2380641/neptune-aqua-series-led-downlight.jpg"
    ],
    "title": "Neptune Aqua Series LED Downlight — Sleek, Efficient Illumination",
    "description": "Premium Neptune Aqua Series LED Downlight offering energy-efficient, low-maintenance lighting ideal for modern interiors. Waterproof, long life, and exceptional brightness for residential and commercial settings.",
    "specs": {
      "Type": "Panel Downlight",
      "Use Case": "Moisture-prone zones like bathrooms, kitchens, coastal cafés; IP-rated ambient lighting.",
      "Key Feature": "Water-resistant enclosure; long lifespan"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Jazz Round Deep Down Panel",
    "brand": "Neptune",
    "page_url": "https://www.matemart.in/Assets/images/products/medium/1d72310edc006dadf2190caad5802983.png",
    "image_url": [
      "https://www.matemart.in/Assets/images/products/medium/1d72310edc006dadf2190caad5802983.png"
    ],
    "title": "Durable Mathematics Geometry Compass for Precision Drawing",
    "description": "High-quality geometry compass designed for accurate circles, angles, and technical drawings. Ideal for students, engineers, and architects seeking precision and reliability in mathematics tools.",
    "specs": {
      "Type": "Panel",
      "Use Case": "Draw precise arcs and circles for classes and technical diagrams.",
      "Key Feature": "Sturdy build; steady lines"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "ABS Neptune Iris Surface Light",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/ANDROID/Default/2020/9/MI/JI/LV/2380641/prod-20200913-2108298698645773976141648-jpg.jpg",
    "image_url": [
      "https://5.imimg.com/data5/ANDROID/Default/2020/9/MI/JI/LV/2380641/prod-20200913-2108298698645773976141648-jpg.jpg"
    ],
    "title": "Neptune Iris Surface Light — Elegant Ceiling / Wall Fixture",
    "description": "A refined surface-mounted lighting fixture offering soft, ambient illumination for indoor spaces. Ideal for living rooms, corridors, or lobby areas.",
    "specs": {
      "Type": "Surface Panel",
      "Use Case": "Ambient lighting for living rooms, hallways, lobbies; ceiling/wall mount.",
      "Key Feature": "Soft diffused glow; clean design"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Panel",
    "product_name": "Neptune Iris Surface Mount Light",
    "brand": "Neptune",
    "page_url": "https://www.matemart.in/Assets/images/products/medium/c5e1db6784a5ef78d239037b5896e305.png",
    "image_url": [
      "https://www.matemart.in/Assets/images/products/medium/c5e1db6784a5ef78d239037b5896e305.png"
    ],
    "title": "Neptune Iris Round LED Ceiling Panel Light (8 W / 15 W / 22 W) — Surface Mounted",
    "description": "Discover Neptune Iris Round LED ceiling panel light, available in 8W, 15W, 22W. Perfect surface-mounted fixture for modern interiors.",
    "specs": {
      "Type": "Surface Panel",
      "Use Case": "Homes, offices, hospitals, showrooms; uniform ambient light with 3K/4K/6K options.",
      "Key Feature": "Energy-efficient; multiple wattages"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Track Light",
    "product_name": "Cannon Track Light",
    "brand": "Neptune",
    "page_url": "https://www.racknsell.com/public/thumbs/products/120984/xQS1lmR0YGZUJaM8_500_500.png",
    "image_url": [
      "https://www.racknsell.com/public/thumbs/products/120984/xQS1lmR0YGZUJaM8_500_500.png"
    ],
    "title": "NEPTUNE CANNON Cylindrical LED COB Track Spotlight – 12W / 20W / 30W",
    "description": "Illuminate interiors with the NEPTUNE CANNON cylindrical LED COB track spotlight in 12W, 20W, and 30W. Ideal for galleries, retail displays, and modern homes.",
    "specs": {
      "Type": "COB Track Spotlight",
      "Use Case": "Accent artwork or architectural details; directional lighting over shelves or feature walls.",
      "Key Feature": "Multiple wattages; adjustable beam"
    },
    "price": ""
  },
  {
    "parent_category": "Architecture Lighing",
    "category": "Track Light",
    "product_name": "Magnetic Track Light",
    "brand": "Neptune",
    "page_url": "https://5.imimg.com/data5/SELLER/Default/2025/1/484006231/LM/KR/AA/22763441/25-mm-neptune-magnetic-track-light.png",
    "image_url": [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/484006231/LM/KR/AA/22763441/25-mm-neptune-magnetic-track-light.png"
    ],
    "title": "Neptune Micro Magnetic Track Light – 10 mm Ultra-Slim Lighting Solution",
    "description": "Discover the Neptune Micro Magnetic Track Light 10 mm — a sleek, ultra-slim lighting system ideal for modern interiors, accent lighting, and design projects.",
    "specs": {
      "Type": "Magnetic Track Light",
      "Use Case": "Retail showrooms, commercial displays, exhibitions; flexible magnetic positioning.",
      "Key Feature": "Ultra-slim 10 mm; efficient"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Air Circulators",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=air-circulators-1",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/9qWpJsBIu1YP6zihkWBSY5PhEoSCHE1ef5DCDeY1.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/qqjpQ02pvdAJ6TPl251VbrWaikGcQJREYrgWpBbj.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/1ibXQ1sCE45iqoqJzg64KWsu1unpzcdgMReQLOIx.png"
    ],
    "title": "Wall Air Circulators",
    "description": "Perfect for spaces requiring robust, efficient, and safe air management solutions. They are particularly suited for factories, warehouses, and large commercial areas where air circulation is essential for comfort and safety.",
    "specs": {
      "Type": "Industrial Wall Air Circulator",
      "Use Case": "Factories, warehouses, large commercial areas needing high airflow and safety.",
      "Key Feature": "3-speed control; adjustable tilt; heavy-duty aluminium blades; double ball-bearing motor; closed mesh guard; built for durability"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Air Circulators",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=air-circulators-11",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/U65rTi9xDxtC8va2HNX0B7QaDeRROC62mK3YeDOD.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/1ibXQ1sCE45iqoqJzg64KWsu1unpzcdgMReQLOIx.png"
    ],
    "title": "Pedestal Air Circulators",
    "description": "Perfect for spaces requiring robust, efficient, and safe air management solutions. They are particularly suited for factories, warehouses, and large commercial areas where air circulation is essential for comfort and safety.",
    "specs": {
      "Type": "Industrial Pedestal Air Circulator",
      "Use Case": "Portable, high-velocity airflow in industrial and commercial spaces.",
      "Key Feature": "3-speed control; adjustable height & tilt; heavy-duty blades; double ball-bearing motor; closed mesh guard; stable pedestal base"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Heavy Duty Exhaust Fans",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=heavy-duty-exhaust-fan",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/4Lr1MPpxbjj1cU5SvatDHJUS3elE36UK210pLzvm.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/bk2RUO KOp4mxeg8TKGLQPH55JAYeKiaFfrIqB98k.png".replace(" ", ""),
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/6VzHUOGrRKviCdHo3V2GnWcwFKsWZ3i7FA9w8Rh6.png"
    ],
    "title": "Heavy Duty Exhaust Fans",
    "description": "Removing hot air, fumes, and pollutants in factories, warehouses, auto repair shops, and other industrial facilities requiring powerful exhaust ventilation.",
    "specs": {
      "Type": "Industrial Exhaust Fan",
      "Use Case": "Ventilation and pollution control in harsh industrial environments.",
      "Key Feature": "Capacitor start & run motors; pre-lubricated double ball bearings; dynamically balanced impellers; rugged build; low operating costs"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Domestic Fans",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=wall-mark-ii",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/6r1FkVesUbSGa4KuIdrN2zWtC1kWcfgroF1mfaFw.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/Fs4R0rqmqpVaA7hiiWV1Njun3azXIV6pWRJwpuAA.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/cTCB4cj9UiY0gKW8zAUaRoYNSTuI3fWMg9xMWbnV.png"
    ],
    "title": "Wall Mark-II",
    "description": "Warehouses, factory machine shops, offices, shops, and other indoor spaces—any area needing a portable, high-velocity air cooling solution.",
    "specs": {
      "Type": "High-Velocity Wall Fan",
      "Use Case": "Commercial workspaces that need strong, targeted airflow.",
      "Key Feature": "Powder-coated guard; aluminium die-cast blade; adjustable height & tilt; sturdy base; column-mounted 3-speed controls"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Domestic Fans",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=pedestal-mark-ii",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/t6vh81FngAS3lGik4zoH14OfMsRYlFRuiKPRf3bX.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/MjDhSnR4MrR8WvJQhxMerHwtZQMZ8UMFHOAizq3b.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/aHrzjAVHAyonec5LxgOVcludCFNxVxN9G9e0WKp5.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/NbDLCCammFZKs7eptPlZGp0htQBfkT5W77UBJOyk.png"
    ],
    "title": "Pedestal Air Circulators",
    "description": "Warehouses, factory machine shops, offices, shops, and other indoor spaces—any area needing a portable, high-velocity air cooling solution.",
    "specs": {
      "Type": "High-Velocity Pedestal Fan",
      "Use Case": "Portable cooling across varied indoor commercial spaces.",
      "Key Feature": "Powder-coated guard; aluminium die-cast blade; adjustable height & tilt; sturdy pedestal; 3-speed column controls"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Pollution Control Equipments",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=wall-mounted-mancooler",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/VODQnn0hfxinxD2Uw7w92YNfnvbc2oQxC0SN7p3O.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/UrYiZAddC1sDQDPjMpgOgxBtAensop27bpFFA4VV.png"
    ],
    "title": "Wall-mounted Mancooler",
    "description": "The wall-mounting man coolers are suitable for mounting at higher elevations to avoid occupying floor space. Fans are mounted on steel pipe with base plates for heavy-duty motors.",
    "specs": {
      "Type": "Wall-Mounted Mancooler",
      "Use Case": "High-elevation spot cooling without using floor space.",
      "Key Feature": "Dynamically balanced impeller; sturdy guards; heavy-duty totally enclosed squirrel-cage motor; durability-focused"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Pollution Control Equipments",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=pedestal-mancooler",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/E5duboqAK4cBVNJKOkHaK6FhuGqlPaZF76yoHydZ.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/TErAc9zNNmK9g2kMXblIuvpWs6mq2eYTbxHGSsx8.png"
    ],
    "title": "Pedestal Mancooler",
    "description": "Pedestal mancoolers are designed to stand on the shop floor. A cast-iron solid base holds the assembly, free from vibration. Air throw can be adjusted vertically.",
    "specs": {
      "Type": "Pedestal Mancooler",
      "Use Case": "Movable spot cooling across shop floors with vertical throw adjustment.",
      "Key Feature": "Balanced impeller; sturdy guards; heavy-duty TEFC motor; vibration-resistant base; longevity-first design"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Pollution Control Equipments",
    "brand": "ALMONARD",
    "page_url": "https://www.almonard.co.in/productn?slug=tubular-mancooler",
    "image_url": [
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/eJZgDktwuf6Qa3SkLuI2jOPfoYxRu14rtzAKWBYi.png",
      "https://site91188-9e4hjg.scloudsite101.com/storage/uploads/fM5gx4afgspin2unsNZdNTJoMXLn4eUpSUvMQi9B.png"
    ],
    "title": "Tubular Mancooler",
    "description": "In these mancoolers, the impeller and motor are mounted in a circular casing with a stand. Easy to move from place to place, even on rough floors.",
    "specs": {
      "Type": "Tubular Mancooler",
      "Use Case": "Mobile spot cooling with robust casing for rough floor movement.",
      "Key Feature": "Balanced impeller; protective guards; heavy-duty TEFC motor; portability; built for durability"
    },
    "price": ""
  },
  {
    "parent_category": "Fan",
    "category": "Ind Fan",
    "product_name": "Air Curtains",
    "brand": "ALMONARD",
    "page_url": "https://vashiisl.com/products/almonard-aircurtains-model-ahv-2-mtr-watts-150-2-high-velocity-1-phase-effective-air-throw-2-mtrs",
    "image_url": [
      "https://vashiisl.com/cdn/shop/products/Standard_model_241ec724-53a6-4cbd-a634-015679e0223a_592x592.jpg?v=1742453901"
    ],
    "title": "Almonard Aircurtains Model",
    "description": "Robust casing, forward-curved aluminium impellers for low noise, easy wall-mount frame, adjustable louvers, sturdy motors, vibration-free operation, and prelubricated/self-lubricated bearings for smooth running.",
    "specs": {
      "Type": "Air Curtain",
      "Use Case": "Prevent air exchange, improve hygiene, cut HVAC load, and block dust/insects at doors in retail, hotels, warehouses, and cold storage.",
      "Key Feature": "Energy-efficient; quiet; adjustable louvers; durable construction; bearings for smooth, continuous duty"
    },
    "price": ""
  },
{
  "parent_category": "Cables & Wires",
  "category": "Instrumentation Cable",
  "product_name": "RE-Y(St)Y Single & Multi-Pair Cable",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/re-ysty-single-and-multi-pair/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-2-4.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-2-3.svg"
  ],
  "title": "RR Kabel RE-Y(St)Y Single & Multi-Pair Instrumentation Cable – Reliable Signal Transmission",
  "description": "High quality twisted single and multi-pair instrumentation cable with PVC insulation, aluminium/PETP collective screen, and excellent flame resistance. Designed for secure and accurate signal transmission in industrial environments.",
  "specs": {
    "Standard": "EN 50288-7",
    "Conductor": "Annealed copper wires according to BS EN 60228",
    "Insulation": "Polyvinyl chloride (PVC)",
    "Pairs": "Twisted",
    "Identification of Pairs": "Black & white, continuously numbered on white core (1, 2, 3...) for multi-element",
    "Wrapping": "1 layer of PETP tape",
    "Collective Screen": "Aluminium / PETP tape over tinned copper drain wire",
    "Cable Sheath": "Polyvinyl Chloride (PVC)",
    "Colour": "Black. Blue for intrinsically safe system",
    "Flame Propagation": "EN 60332-1-2",
    "Operating Temperature Range": "-30°C to +70°C",
    "Bending Radius": "7.5 × cable diameter",
    "Operating Voltage": "500V (also available in 300V variant on request)",
    "Marking": "RR KABEL RE-Y(St)Y nxmxa 500V EN50288-7 CE + 0001m"
  },
  "price": ""
},{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Single Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 1.png",
  "title": "Havells XLPE Insulated Armoured Single Core HT Cable – Durable Power Transmission",
  "description": "High-performance single core HT cable with XLPE insulation and aluminium/copper conductor. Provides reliable electric power circuit transmission.",
  "specs": {
    "Type of Cable": "N2XHSYRaY/NA2XHSYRaY",
    "Rated Voltage": "3.6/6.0 (7.2) kV",
    "Size Range": "25 to 1000 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Natural",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Separation Sheath": "PVC",
      "Armour": "Aluminium Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Three Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 2.png",
  "title": "Havells XLPE Insulated Armoured Three Core HT Cable – Safe & Efficient Power Distribution",
  "description": "Reliable three core HT cable designed with XLPE insulation, copper/aluminium conductor, and galvanized steel wire armour. Ensures safe electric power circuit use.",
  "specs": {
    "Type of Cable": "N2XSEYRY/NA2XSEYRY",
    "Rated Voltage": "3.6/6.0 (7.2) kV",
    "Size Range": "25 to 400 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Red, Yellow & Blue",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Filler": "Yes",
      "Inner Covering": "Yes",
      "Armour": "Galvanized Steel Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Single Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 3.png",
  "title": "Havells XLPE Insulated Armoured Single Core HT Cable – High Voltage Performance",
  "description": "Durable single core XLPE insulated HT cable with metallic screen and aluminium/copper conductor. Ideal for electric power circuits at 6/10 kV.",
  "specs": {
    "Type of Cable": "N2XHSYRaY/NA2XHSYRaY",
    "Rated Voltage": "6/10 (12) kV",
    "Size Range": "25 to 1000 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Natural",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Separation Sheath": "PVC",
      "Armour": "Round Aluminium Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Three Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 4.png",
  "title": "Havells XLPE Insulated Armoured Three Core HT Cable – Reliable Multi-Core Power",
  "description": "Three core HT cable with XLPE insulation, copper/aluminium conductor, and galvanized steel round wire armour. Provides safe and efficient power distribution.",
  "specs": {
    "Type of Cable": "N2XSEYRY/NA2XSEYRY",
    "Rated Voltage": "6/10 (12) kV",
    "Size Range": "25 to 400 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Red, Yellow & Blue",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Filler": "Yes",
      "Inner Covering": "Yes",
      "Armour": "Galvanized Steel Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Single Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 5.png",
  "title": "Havells XLPE Insulated Armoured Single Core HT Cable – High Voltage Power Transmission",
  "description": "High-quality XLPE insulated single core HT cable designed with aluminium/copper conductor and PVC sheathing. Ensures long-lasting power performance at 8.7/15 kV.",
  "specs": {
    "Type of Cable": "N2XHSYRaY/NA2XHSYRaY",
    "Rated Voltage": "8.7/15 (17.5) kV",
    "Size Range": "25 to 1000 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Natural",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Separation Sheath": "PVC",
      "Armour": "Round Aluminium Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Three Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 6.png",
  "title": "Havells XLPE Insulated Armoured Three Core HT Cable – Secure Multi-Core Power Distribution",
  "description": "Three core XLPE insulated HT cable for electric power circuits, designed with copper/aluminium conductor and galvanized steel armour for reliability at 8.7/15 kV.",
  "specs": {
    "Type of Cable": "N2XSEYRY/NA2XSEYRY",
    "Rated Voltage": "8.7/15 (17.5) kV",
    "Size Range": "25 to 300 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Red, Yellow & Blue",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Filler": "Yes",
      "Inner Covering": "Yes",
      "Armour": "Galvanized Steel Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Single Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 7.png",
  "title": "Havells XLPE Insulated Armoured Single Core HT Cable – Robust High Voltage Cable",
  "description": "Durable single core XLPE insulated HT cable engineered for 12/20 (24) kV applications. Built with aluminium/copper conductor, metallic screen, and PVC sheath.",
  "specs": {
    "Type of Cable": "N2XHSYRaY/NA2XHSYRaY",
    "Rated Voltage": "12/20 (24) kV",
    "Size Range": "25 to 1000 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Natural",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Separation Sheath": "PVC",
      "Armour": "Round Aluminium Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Three Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 8.png",
  "title": "Havells XLPE Insulated Armoured Three Core HT Cable – Efficient Multi-Core Transmission",
  "description": "High-performance three core HT cable built with XLPE insulation, copper/aluminium conductor, and galvanized steel wire armour. Designed for 12/20 (24) kV systems.",
  "specs": {
    "Type of Cable": "N2XSEYRY/NA2XSEYRY",
    "Rated Voltage": "12/20 (24) kV",
    "Size Range": "35 to 300 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Red, Yellow & Blue",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Filler": "Yes",
      "Inner Covering": "Yes",
      "Armour": "Galvanized Steel Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Single Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 9.png",
  "title": "Havells XLPE Insulated Armoured Single Core HT Cable – Extra High Voltage Durability",
  "description": "Premium XLPE insulated single core HT cable for 18/30 (36) kV systems. Built for robust power transmission with aluminium/copper conductor and PVC protection.",
  "specs": {
    "Type of Cable": "N2XHSYRaY/NA2XHSYRaY",
    "Rated Voltage": "18/30 (36) kV",
    "Size Range": "50 to 1000 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Natural",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Separation Sheath": "PVC",
      "Armour": "Round Aluminium Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "High Tension Cables",
  "product_name": "XLPE Insulated Armoured Three Core HT Cable",
  "brand": "Havells",
  "page_url": "",
  "image_url": "/1/High Tension Cables 10.png",
  "title": "Havells XLPE Insulated Armoured Three Core HT Cable – High Voltage Multi-Core Solution",
  "description": "Three core XLPE insulated HT cable built with metallic screen, galvanized steel wire armour, and copper/aluminium conductor. Supports reliable transmission at 18/30 (36) kV.",
  "specs": {
    "Type of Cable": "N2XSEYRY/NA2XSEYRY",
    "Rated Voltage": "18/30 (36) kV",
    "Size Range": "50 to 300 mm²",
    "Specification": "IEC-60502-2",
    "Application": "For Electric Power Circuit",
    "Identification of Core": "Red, Yellow & Blue",
    "Type of Packing": "Wooden Drum",
    "Construction": {
      "Conductor": "Copper/Aluminium",
      "Semi Conducting Conductor Screen": "Yes",
      "Insulation": "XLPE",
      "Semi-Conducting Insulation Screen": "Yes",
      "Metallic Screen": "Yes",
      "Filler": "Yes",
      "Inner Covering": "Yes",
      "Armour": "Galvanized Steel Round Wire",
      "Outer Sheath": "PVC"
    }
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "FIREX LSOH-EBXL",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/firex-lsoh-ebxl/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/06/firex-ls0h-new.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/06/firex-ls0h-new-12.svg"
  ],
  "title": "RR Kabel FIREX LSOH-EBXL – Halogen Free Flame Retardant Cable for Critical Safety Applications",
  "description": "FIREX LSOH-EBXL is designed for critical circuits in high-traffic public and commercial spaces requiring enhanced fire safety, low smoke and zero halogen emissions. With high-performance insulation and durability, it is ideal for airports, hospitals, malls, schools, and other densely occupied establishments.",
  "application": "Designed for critical circuits in environments where enhanced fire safety, low smoke and zero halogen emissions are essential. Best suited for airports, auditoriums, hospitals, hotels, schools, malls, and retail outlets.",
  "statutory_requirements": "The Central Electricity Authority (CEA) Regulation 2023 mandates the use of Halogen Free Flame Retardant cables in public infrastructures (airports, hospitals, hotels) irrespective of height.",
  "specs": {
    "Approvals": "IS 17048 marked, FIA/TAC",
    "Cable Code": "XZ",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Strands of electrolytic annealed plain copper are multi-drawn for uniformity of resistance, dimension and flexibility.",
    "Insulation": "E-Beam Crosslinked HFI-Xl 90 Halogen Free Flame Retardant (HFFR)",
    "Colours": "Green, Black, Red, Yellow, Blue, Grey, White",
    "Marking": "The cables are marked 'FIREX LSOH-EBXL'",
    "Packing": "90 meter coils packed in protective cartons."
  },
  "properties": [
    "Does not melt up to 900°C",
    "Temperature range: -25°C to +110°C",
    "Max. short circuit temperature rating: 300°C",
    "Chlorine free: Non-toxic & Non-corrosive",
    "Negligible smoke emission & transparent",
    "Excellent water resistance",
    "Abrasion resistant",
    "Weather resistant",
    "Anti-Rodent & Anti-Termite",
    "Extended service life",
    "Trapped fire victims do not suffocate, aiding firefighting",
    "Self-extinguishing and flame retardant to IS 10810 P – 61"
  ],
  "price": ""
},
{
  "parent_category": "Fixed Wiring Cable",
  "category": "Housewire",
  "product_name": "UNILAY HR FR",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/unilay-hr-fr/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-1-1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-Section-1.svg",
  "title": "RR Kabel UNILAY HR FR – Heat Resistant & Flame Retardant Cable",
  "description": "India’s 1st Heat Resistant and Flame Retardant REACH Compliant Cable with Unilay Conductor. No loose contacts, no broken ends, no sparking, and no overheating. Designed for safe and durable high-density wiring in conduit and fixed installations.",
  "specs": {
    "Approvals": "IS 694 marked, FIA / TAC",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension, and flexibility. The drawn strands are uni-laid with high precision and compacted, forming a circular conductor for reduced overall diameter in high density wiring.",
    "Conductor Speciality": "The strands do not get cut when stripping insulation; provide perfect contact at pins, terminals, and sockets; eliminate spot heating and sparking.",
    "Insulation": "Specially formulated heat resistant & flame retardant PVC insulation",
    "Insulation Conformity": "IS 5831, Type C – HR 85°C + FR"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "HALOGEN-FREE H07Z-R-6491B",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/halogen-free-h07z-r-6491b/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire_1-2.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-6.svg",
  "title": "RR Kabel Halogen-Free H07Z-R-6491B – Low Smoke Zero Halogen Cable",
  "description": "The Halogen-Free H07Z-R-6491B cable is designed for conduit wiring in areas where fire, smoke, and toxic fumes create a potential threat. With LSZH insulation, it ensures maximum safety, reduced smoke emission, and compliance with international standards.",
  "application": "Suitable for conduit wiring, especially in installations where fire, smoke, and toxic fumes create potential threat.",
  "standard": "BS EN 50525-3-41",
  "specs": {
    "Voltage Rating": "U₀ / U – 450 / 750V",
    "Harmonised Designation": "1.5 mm² to 630 mm² stranded class 2 – H07Z-R",
    "Temperature Range": "-15°C to 90°C",
    "Minimum Bending Radius": "Upto 10 mm²: 3 x Overall Diameter. 16 & 25 mm²: 4 x Overall Diameter. Above 25 mm²: 5 x Overall Diameter"
  },
  "construction": {
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded Cl. 2 complying with EN 60228",
    "Insulation": "LSZH (Low Smoke Zero Halogen) Type EI5 according to BS EN 50363-5"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "PVC Insulated Building Wire (H07V-R) - 6491X",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/pvc-insulated-building-wire-h07v-r-6491x/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-2-1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-1.svg",
  "title": "RR Kabel PVC Insulated Building Wire H07V-R – 6491X",
  "description": "The PVC Insulated Building Wire (H07V-R) is designed for power and lighting circuits, suitable for use in semi-flush exposed conduits, embedded conduits, and closed installation ducts. With high-quality PVC insulation, it ensures safe and efficient electrical performance.",
  "application": "Suitable for power and lighting circuits and building wiring in semi-flush exposed conduits, embedded conduits, and closed installation ducts.",
  "standard": "BS EN 50525-2-31, SABS 1507-2, SS 358 Part-3",
  "specs": {
    "Voltage Rating": "U₀ / U – 450 / 750V",
    "Harmonised Designation": "1.5 mm² to 630 mm² stranded class 2 – H07V-R",
    "Temperature Range": "-15°C to 70°C",
    "Minimum Bending Radius": "Upto 10 mm²: 3 x Overall Diameter, 16 & 25 mm²: 4 x Overall Diameter, Above 25 mm²: 5 x Overall Diameter"
  },
  "construction": {
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded class 2 complying with BS EN 60228, HD 383, IEC 60228",
    "Insulation": "PVC (Polyvinyl Chloride) compound type TI 1 complying with EN 50363-3, HD 21.1, IEC 60227-1, SABS 1411-2"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "6181Y – BS 6004",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/6181y-bs-6004/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire_1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-1-2.svg",
  "title": "RR Kabel 6181Y – BS 6004",
  "description": "The 6181Y – BS 6004 cables are designed for power and lighting circuits in semi-flush exposed conduits, embedded conduits, and closed installation ducts. They are also ideal for the internal wiring of appliances, ensuring safe and durable electrical performance.",
  "application": "Suitable for power and lighting circuits and building wiring in semi-flush exposed conduits, embedded conduits, closed ducts, and internal wiring of appliances.",
  "standard": "BS 6004:2012, EN 50363-3 with BS 7655-4.2 (Only for sheath)",
  "specs": {
    "Voltage Rating": "1.5 mm² to 35 mm² – 300 / 500V",
    "Harmonised Designation": "-15°C to 70°C",
    "Minimum Bending Radius": "Upto 10 mm²: 10 x Overall Diameter, 16 & 35 mm²: 12 x Overall Diameter",
    "Test Voltage": "2 kV for 15 min"
  },
  "construction": {
    "Conductor": "Plain annealed copper conductor 1.5 & 2.5 mm² Class-1, 4.0 to 35 mm² stranded Class 2 complying with BS EN 60228, HD 383, IEC 60228",
    "Insulation": "PVC (Polyvinyl Chloride) compound type TI1 complying with EN 50363-3",
    "Sheath": "PVC (Polyvinyl Chloride) compound type Type 6 complying with BS 7655-4.2",
    "Insulation Colours": "Blue and brown",
    "Sheath Colour": "Grey RAL 7001"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "6181XY – BS 7889",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/6181xy-bs-7889/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-3-1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-2-1.svg",
  "title": "RR Kabel 6181XY – BS 7889",
  "description": "The 6181XY – BS 7889 cables are designed for power and lighting circuits and building wiring suitable for use in semi flush exposed conduits, embedded conduits, and closed installation ducts. They are also ideal for the internal wiring of appliances.",
  "application": "Suitable for power and lighting circuits and building wiring in semi flush exposed conduits, embedded conduits, closed ducts, and internal wiring of appliances.",
  "standard": "BS 7889",
  "specs": {
    "Voltage Rating": "1.5 mm² to 630 mm² – 600 / 1000V",
    "Harmonised Designation": "-15°C to 90°C",
    "Minimum Bending Radius": "4.0 to 50 mm²: 10 x Overall Diameter, 70 & 630 mm²: 12 x Overall Diameter",
    "Test Voltage": "2 kV 15 min"
  },
  "construction": {
    "Conductor": "Plain annealed copper conductor complying with BS EN 60228",
    "Insulation": "PVC (Polyvinyl Chloride) compound type TI1 complying with EN 50363-3",
    "Sheath": "PVC (Polyvinyl Chloride) compound type 6 complying with BS 7655-4.2",
    "Insulation Colours": "Black outer sheath"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "FLAMEX HR+FR",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/flamex-hrfr/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/Flamex-HR-FR-2.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/Flamex-HR-FR.jpg",
  "title": "RR Kabel Flamex HR+FR",
  "description": "Flamex HR+FR is designed for modern infrastructure requiring flexible wiring in homes, offices, and commercial spaces. It provides enhanced bending radius, quick installation, and reliable fire-safe performance.",
  "application": "Suitable for modern infrastructure requiring flexible wiring in homes, offices, and commercial spaces, where enhanced bending radius, quick installations, and fire-safe performance are critical.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility.",
    "Insulation": "High-grade Heat Resistant and Flame Retardant (HR FR) PVC insulation. Specially engineered to withstand elevated temperatures while effectively retarding flame propagation, ensuring enhanced safety and long-term performance.",
    "Insulation Conformity": "IS 5831 Type C – HR 85°C + FR",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with the marking ‘FLAMEX HR+FR’",
    "Packing": "90 meter coils packed in protective cartons"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "Q1 Flame Retardant",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/q1-flame-retardant/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/q1-wire-preview-img.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/Q1-FR-CROSS.png",
  "title": "RR Kabel Q1 Flame Retardant Cable",
  "description": "Q1 FR is a lead and mercury-free flame retardant cable designed for safe and flexible wiring in spaces where high flexibility and safe performance are essential. It is eco-friendly and ensures reliable wiring for lighting circuits, switches, and outlets.",
  "application": "Q1 FR is ideal for wiring in spaces where high flexibility and safe performance are essential. Suitable for powering lighting circuits, switches, and electrical outlets, it is designed to meet everyday wiring needs with flame-retardant insulation and eco-conscious construction.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100 V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility.",
    "Insulation": "Specially formulated FR (Flame Retardant) PVC insulation with anti-rodent and anti-termite properties.",
    "Insulation Conformity": "IS 5831, Type D FR 70°C",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with marking of ‘Q1 FR’",
    "Packing": "90 meter coil is packed in protective cartons"
  },
  "properties": [
    "Self extinguishing and Flame Retardant",
    "Temperature Range: -15°C to +70°C",
    "Excellent flexibility and ease of installation",
    "Anti-Rodent & Anti-Termite",
    "100% Electrolytic Grade Pure Copper",
    "Lead and Mercury Free"
  ],
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "Superex Green HR + FR",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/superex-green-hr-fr/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/wire-1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2025/08/Cross-Section-1-1.png",
  "title": "RR Kabel Superex Green HR + FR Cable",
  "description": "Superex Green HR+FR is India's 1st REACH and RoHS compliant cable designed for fixed wiring installations with enhanced mechanical strength, thermal endurance, and fire safety. With heat-resistant and flame-retardant insulation, it ensures reliable performance even under high temperatures. Its distinctive green identity reflects a step toward safer, stronger, and responsible wiring solutions.",
  "application": "Designed for fixed wiring installations in modern residential and commercial spaces where enhanced mechanical strength, thermal endurance, and fire safety are critical.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility.",
    "Insulation": "High-grade Heat Resistant and Flame Retardant (HR FR) PVC insulation. Specially engineered to withstand elevated temperatures while effectively retarding flame propagation.",
    "Insulation Conformity": "IS 5831, Type C – HR 85°C + FR",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with marking of ‘SUPEREX GREEN’",
    "Packing": "90 meter coil is packed in protective cartons"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Fixed Wiring Cable",
  "product_name": "Superex FR",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/superex-fr/",
  "image_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/wire-1.png",
  "cross_section_url": "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-Section-1-1.svg",
  "title": "RR Kabel Superex FR Cable",
  "description": "Superex FR is India's 1st REACH and RoHS compliant flame retardant cable designed for reliable residential and commercial wiring applications. It offers high fire safety performance with specially formulated insulation that ensures durability, flexibility, and flame retardant properties.",
  "application": "Suitable for wiring in all types of residential and commercial infrastructure, where fire and electrical safety are utmost important.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility. The strands are twisted with high precision to impart circularity for the conductor.",
    "Insulation": "Specially formulated flame retardant PVC insulation. The FR property retards the propagation of flame without compromising safety.",
    "Insulation Conformity": "IS 5831, Type A/D FR 70°C",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with marking of ‘SUPEREX FR’",
    "Packing": "90 mtr. coil is packed in protective cartons. Project packing of 180 mtr. also available."
  },
  "price": ""
},

  {
    "parent_category": "Cables & Wires",
    "category": "Housewire",
    "product_name": "FIREX LSOH-EBXL Cable",
    "brand": "RR Kabel",
    "page_url": "https://www.rrkabel.com/products/firex-lsoh-ebxl/",
    "image_url": [
      "https://www.rrkabel.com/wp-content/uploads/2023/06/firex-ls0h-new.png",
      "https://www.rrkabel.com/wp-content/uploads/2023/06/firex-ls0h-new-12.svg"
    ],
    "title": "RR Kabel FIREX LSOH-EBXL Cable – Halogen Free, Flame Retardant & Durable",
    "description": "FIREX LSOH-EBXL cables are designed for critical circuits in environments where enhanced fire safety, low smoke, and zero halogen emissions are essential. Suitable for airports, hospitals, hotels, malls, and other high-traffic infrastructures. These cables provide high durability, excellent resistance, and reliable fire performance.",
    "application": "Firex LSOH-EBXL is designed for critical circuits in environments where enhanced fire safety, low smoke and zero halogen emissions are essential. It is best suited for high-traffic public and commercial spaces such as airports, auditoriums, hospitals, hotels, schools, malls, and retail outlets. Its high-performance insulation, durability, and reliability make it an ideal choice for modern infrastructure with demanding safety and longevity expectations, including high-rise and densely occupied establishments.",
    "statutory_requirements": "The Central Electricity Authority (CEA) Regulation 2023 has made it mandatory to use Halogen Free Flame Retardant cables in public infrastructures (airports, hospitals, hotels) irrespective of height.",
    "specs": {
      "Approvals": "IS 17048 marked, FIA/TAC",
      "Cable Code": "XZ",
      "Voltage Grade": "Up to and including 1100V",
      "Conductor": "Strands of electrolytic annealed plain copper, multi-drawn for uniformity of resistance, dimension, and flexibility",
      "Insulation": "E-Beam Crosslinked HFI-XL 90 Halogen Free Flame Retardant (HFFR)",
      "Colours": "Green, Black, Red, Yellow, Blue, Grey, White",
      "Marking": "The cables are marked 'FIREX LSOH-EBXL'",
      "Packing": "90 meter coils packed in protective cartons"
    },
    "properties": [
      "Does not melt up to 900°C",
      "Temperature range: -25°C to +110°C",
      "Max short circuit temperature rating: 300°C",
      "Chlorine Free: Non-toxic & Non-corrosive",
      "Negligible smoke emission",
      "Excellent water resistance",
      "Abrasion resistant",
      "Weather resistant",
      "Anti-Rodent & Anti-Termite",
      "Extended service life",
      "Trapped fire victims not suffocated due to low smoke",
      "Self-extinguishing and flame retardant (IS 10810P – 61)"
    ],
    "price": ""
  },
  {
    "parent_category": "Cables & Wires",
    "category": "Housewire",
    "product_name": "SUPEREX GREEN HR + FR Cable",
    "brand": "RR Kabel",
    "page_url": "https://www.rrkabel.com/products/superex-green-hr-fr/",
    "image_url": [
      "https://www.rrkabel.com/wp-content/uploads/2025/08/wire-1.png",
      "https://www.rrkabel.com/wp-content/uploads/2025/08/Cross-Section-1-1.png"
    ],
    "title": "RR Kabel SUPEREX GREEN HR + FR Cable – Heat Resistant & Flame Retardant",
    "description": "Superex Green HR+FR cable is India’s 1st REACH and RoHS compliant cable. With heat resistant and flame retardant insulation, it ensures mechanical strength, thermal endurance, and fire safety. Designed for fixed wiring in residential and commercial spaces, it provides long-term performance under high temperatures.",
    "application": "Superex Green HR+FR is designed for fixed wiring installations where enhanced mechanical strength, thermal endurance, and fire safety are critical. With Heat Resistant and Flame Retardant insulation, it ensures safe and reliable performance even under high temperatures. Its special conductor construction makes it ideal for fixed wiring in modern residential and commercial spaces. The distinctive green identity reflects a conscious step toward safer, stronger, and more responsible wiring solutions.",
    "specs": {
      "Approvals": "IS 694 marked, FIA/TAC",
      "Voltage Grade": "Up to and including 1100V",
      "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension, and flexibility",
      "Insulation": "High-grade Heat Resistant and Flame Retardant (HR FR) PVC insulation",
      "Insulation Conformity": "IS 5831, Type C – HR 85°C + FR",
      "Colours": "Red, yellow, blue, black, green, grey & white",
      "Marking": "The cables are printed with marking of 'SUPEREX GREEN'",
      "Packing": "90 meter coil is packed in protective cartons"
    },
    "price": ""
  },
  {
    "parent_category": "Cables & Wires",
    "category": "Housewire",
    "product_name": "FLAMEX HR + FR Cable",
    "brand": "RR Kabel",
    "page_url": "https://www.rrkabel.com/products/flamex-hr-fr/",
    "image_url": [
      "https://www.rrkabel.com/wp-content/uploads/2025/08/Flamex-HR-FR-2.png",
      "https://www.rrkabel.com/wp-content/uploads/2025/08/Flamex-HR-FR.jpg"
    ],
    "title": "RR Kabel FLAMEX HR + FR Cable – Heat Resistant & Flame Retardant",
    "description": "Flamex HR+FR is India’s 1st REACH and RoHS compliant cable designed for flexible wiring in homes, offices, and commercial spaces. With heat resistant and flame retardant insulation, it ensures durability, safe installations, and fire-safe performance under elevated temperatures.",
    "application": "Suitable for modern infrastructure requiring flexible wiring in homes, offices, and commercial spaces, where enhanced bending radius, quick installations, and fire-safe performance are critical.",
    "specs": {
      "Approvals": "IS 694 marked, FIA/TAC",
      "Voltage Grade": "Up to and including 1100V",
      "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility",
      "Insulation": "High-grade Heat Resistant and Flame Retardant (HR FR) PVC insulation",
      "Insulation Conformity": "IS 5831 Type C – HR 85°C + FR",
      "Colours": "Red, yellow, blue, black, green, grey & white",
      "Marking": "The cables are printed with the marking ‘FLAMEX HR+FR’",
      "Packing": "90 meter coils packed in protective cartons"
    },
    "price": ""
  },
  {
    "parent_category": "Cables & Wires",
    "category": "Housewire",
    "product_name": "UNILAY HR FR Cable",
    "brand": "RR Kabel",
    "page_url": "https://www.rrkabel.com/products/unilay-hr-fr/",
    "image_url": [
      "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-1-1.png",
      "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-Section-1.svg"
    ],
    "title": "RR Kabel UNILAY HR FR Cable – Heat Resistant & Flame Retardant",
    "description": "Unilay HR FR is India’s 1st heat resistant and flame retardant REACH compliant cable with Unilay conductor technology. It ensures no loose contacts, no broken ends, no sparking, and no overheating. Designed for safe and reliable high-density wiring applications.",
    "application": "Suitable for use in conduit and for fixed, protected installation, ideal for high density wiring.",
    "specs": {
      "Approvals": "IS 694 marked, FIA/TAC",
      "Voltage Grade": "Up to and including 1100V",
      "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility. The drawn strands are uni-laid with high precision and compacted, forming a perfectly circular conductor which enables reduction in overall diameter for space saving in high density wiring.",
      "Conductor Speciality": "The strands do not get cut when stripping the insulation. The conductor offers perfect contact at pins, terminals and sockets. Thus, eliminating spot heating and sparking.",
      "Insulation": "Specially formulated heat resistant & flame retardant PVC insulation is used. The HR FR property retards the propagation of flame without compromising safety.",
      "Insulation Conformity": "IS 5831, Type C – HR 85°C + FR"
    },
    "price": ""
  },
{
  "parent_category": "Cables & Wires",
  "category": "Housewire",
  "product_name": "Q1 Flame Retardant Cable",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/q1-flame-retardant/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2025/08/q1-wire-preview-img.png",
    "https://www.rrkabel.com/wp-content/uploads/2025/08/Q1-FR-CROSS.png"
  ],
  "title": "RR Kabel Q1 Flame Retardant Cable – Lead & Mercury Free, Super Flexible & Safe",
  "description": "Q1 FR is a flame retardant, lead and mercury free cable designed for safe wiring where high flexibility and fire resistance are critical. Ideal for lighting circuits, switches, and outlets, it combines eco-conscious construction with long-term reliability.",
  "application": "Q1 FR is ideal for wiring in spaces where high flexibility and safe performance are essential. Suitable for powering lighting circuits, switches, and electrical outlets, it is designed to meet everyday wiring needs with flame-retardant insulation and eco-conscious construction.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100 V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility",
    "Insulation": "Specially formulated FR (Flame Retardant) PVC insulation with anti-rodent and anti-termite properties",
    "Insulation Conformity": "IS 5831, Type D FR 70°C",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with marking of 'Q1 FR'",
    "Packing": "90 meter coil is packed in protective cartons"
  },
  "properties": [
    "Self extinguishing and Flame Retardant",
    "Temperature Range: -15°C to +70°C",
    "Excellent flexibility and ease of installation",
    "Anti-Rodent & Anti-Termite",
    "100% Electrolytic Grade Pure Copper",
    "Lead and Mercury Free"
  ],
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Housewire",
  "product_name": "SUPEREX FR Cable",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/superex-fr/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/07/wire-1.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-Section-1-1.svg"
  ],
  "title": "RR Kabel SUPEREX FR Cable – Flame Retardant & Safe Wiring Solution",
  "description": "Superex FR is India’s 1st REACH and RoHS compliant flame retardant cable, designed for safety in residential and commercial infrastructure. It provides flame retardant insulation with high precision copper conductors, ensuring durability and uncompromised safety.",
  "application": "Suitable for wiring in all types of residential and commercial infrastructure, where fire and electrical safety is utmost important.",
  "specs": {
    "Approvals": "IS 694 marked, FIA/TAC",
    "Voltage Grade": "Up to and including 1100V",
    "Conductor": "Thin strands of electrolytic copper are multi-drawn for uniformity of resistance, dimension and flexibility. The strands are twisted with high precision to impart circularity for the conductor.",
    "Insulation": "Specially formulated flame retardant PVC insulation is used. The FR property retards the propagation of flame without compromising safety.",
    "Insulation Conformity": "IS 5831, Type A/D FR 70°C",
    "Colours": "Red, yellow, blue, black, green, grey & white",
    "Marking": "The cables are printed with marking of ‘SUPEREX FR’",
    "Packing": "90 mtr. coil is packed in protective cartons. Project packing of 180 mtr. also available."
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Housewire",
  "product_name": "Halogen-Free H07Z-R-6491B Cable",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/halogen-free-h07z-r-6491b/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire_1-2.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-6.svg"
  ],
  "title": "RR Kabel Halogen-Free H07Z-R-6491B – LSZH Cable for Safer Installations",
  "description": "Halogen-Free H07Z-R-6491B cable is designed for conduit wiring where fire, smoke, and toxic fumes pose risks. With LSZH insulation and compliance to international standards, it ensures enhanced safety and eco-friendly performance in modern infrastructure.",
  "application": "The cables are suitable for conduit wiring, especially in installations where fire, smoke and toxic fumes create potential threat.",
  "standard": "BS EN 50525-3-41",
  "specs": {
    "Voltage Rating": "U₀ / U – 450 / 750V",
    "Harmonised Designation": "1.5 mm² to 630 mm² stranded class 2 – H07Z-R",
    "Temperature Range": "-15°C to 90°C",
    "Minimum Bending Radius": "Up to 10 mm²: 3 × Overall Diameter. 16 & 25 mm²: 4 × Overall Diameter. Above 25 mm²: 5 × Overall Diameter.",
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded Cl. 2 complying with EN 60228",
    "Insulation": "LSZH (Low Smoke Zero Halogen) Type EI5 according to BS EN 50363-5"
  },
  "cable_construction": {
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded Cl. 2 complying with EN 60228",
    "Insulation": "LSZH (Low Smoke Zero Halogen) Type EI5 according to BS EN 50363-5"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Housewire",
  "product_name": "PVC Insulated Building Wire (H07V-R) - 6491X",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/pvc-insulated-building-wire-h07v-r-6491x/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-2-1.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-1.svg"
  ],
  "title": "RR Kabel PVC Insulated Building Wire (H07V-R) - 6491X – Reliable Wiring for Lighting & Power Circuits",
  "description": "The H07V-R 6491X PVC insulated building wire is designed for power and lighting circuits. It is suitable for semi-exposed conduits, embedded conduits, and closed installation ducts, ensuring durability, safety, and compliance with international standards.",
  "application": "The cables are suitable for power and lighting circuits and building wiring suitable for use in semi flush exposed conduits, embedded conduits and in closed installation ducts.",
  "standard": "BS EN 50525-2-31. SABS 1507-2, SS 358 Part-3.",
  "specs": {
    "Voltage Rating": "U₀ / U – 450 / 750V",
    "Harmonised Designation": "1.5 mm² to 630 mm² stranded class 2 – H07V-R",
    "Temperature Range": "-15°C to 70°C",
    "Minimum Bending Radius": "Up to 10 mm²: 3 × Overall Diameter. 16 & 25 mm²: 4 × Overall Diameter. Above 25 mm²: 5 × Overall Diameter.",
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded class 2 complying with BS EN 60228, HD 383, IEC 60228",
    "Insulation": "PVC (Polyvinyl Chloride) compound type TI 1 complying with EN 50363-3, HD 21.1, IEC 60227-1, SABS 1411-2"
  },
  "cable_construction": {
    "Conductor": "Plain annealed copper conductor 1.5 mm² to 630 mm² stranded class 2 complying with BS EN 60228, HD 383, IEC 60228",
    "Insulation": "PVC (Polyvinyl Chloride) compound type TI 1 complying with EN 50363-3, HD 21.1, IEC 60227-1, SABS 1411-2"
  },
  "price": ""
},
{
  "parent_category": "Cables & Wires",
  "category": "Instrumentation Cable",
  "product_name": "RE-Y(St)Y Single & Multi-Pair Cable",
  "brand": "RR Kabel",
  "page_url": "https://www.rrkabel.com/products/re-ysty-single-and-multi-pair/",
  "image_url": [
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Wire-2-4.png",
    "https://www.rrkabel.com/wp-content/uploads/2023/07/Cross-2-3.svg"
  ],
  "title": "RR Kabel RE-Y(St)Y Single & Multi-Pair Instrumentation Cable – Reliable Signal Transmission",
  "description": "High quality twisted single and multi-pair instrumentation cable with PVC insulation, aluminium/PETP collective screen, and excellent flame resistance. Designed for secure and accurate signal transmission in industrial environments.",
  "specs": {
    "Standard": "EN 50288-7",
    "Conductor": "Annealed copper wires according to BS EN 60228",
    "Insulation": "Polyvinyl chloride (PVC)",
    "Pairs": "Twisted",
    "Identification of Pairs": "Black & white, continuously numbered on white core (1, 2, 3...) for multi-element",
    "Wrapping": "1 layer of PETP tape",
    "Collective Screen": "Aluminium / PETP tape over tinned copper drain wire",
    "Cable Sheath": "Polyvinyl Chloride (PVC)",
    "Colour": "Black. Blue for intrinsically safe system",
    "Flame Propagation": "EN 60332-1-2",
    "Operating Temperature Range": "-30°C to +70°C",
    "Bending Radius": "7.5 × cable diameter",
    "Operating Voltage": "500V (also available in 300V variant on request)",
    "Marking": "RR KABEL RE-Y(St)Y nxmxa 500V EN50288-7 CE + 0001m"
  },
  "price": ""
}
]

// ---- helpers ----
const slug = (s: string) =>
  s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

const normalizeImages = (image_url: string | string[] | undefined | null) => {
  if (!image_url) return [];
  if (Array.isArray(image_url)) {
    return image_url.filter((u) => typeof u === "string" && u.trim().length > 0);
  }
  if (typeof image_url === "string" && image_url.trim().length > 0) {
    return [image_url];
  }
  return [];
};

// ---- Transformer: Flat → Nested (supports both image_url shapes) ----
function transformData(raw: RawItem[]): Parent[] {
  const parentMap: Record<string, Parent> = {};

  for (const item of raw) {
    const parentId = slug(item.parent_category);
    if (!parentMap[parentId]) {
      parentMap[parentId] = {
        parentCategory: item.parent_category,
        id: parentId,
        categories: [],
      };
    }

    const parent = parentMap[parentId];
    let category = parent.categories.find((c) => c.category === item.category);
    if (!category) {
      category = {
        category: item.category,
        id: slug(item.category),
        products: [],
      };
      parent.categories.push(category);
    }

    // normalize images from either string or string[]
    const images = normalizeImages((item as any).image_url);

    category.products.push({
      id: slug(item.title),
      name: item.product_name,
      brand: item.brand,
      images,                  // <- now correct for both shapes
      pageUrl: item.page_url,
      title: item.title,
      description: item.description,
      specs: Object.fromEntries(
        Object.entries(item.specs ?? {}).filter(
          ([, v]) => typeof v === "string" && v !== undefined
        ) as [string, string][]
      ),
      price: item.price ?? "",
    });
  }

  return Object.values(parentMap);
}

export const DATA: Parent[] = transformData(
  RAW_DATA.map((item) => ({
    ...item,
    specs: item.specs
      ? Object.fromEntries(
          Object.entries(item.specs).filter(
            ([, v]) => typeof v === "string" && v !== undefined
          )
        )
      : undefined,
  }))
);

// ---- Indexing (unchanged) ----
type Index = {
  parentById: Record<string, Parent>;
  categoryById: Record<string, Category>;
  productById: Record<string, Product>;
  categoryToParent: Record<string, string>;
  productToCategory: Record<string, string>;
  productFullById: Record<
    string,
    {
      product: Product;
      category: { id: string; name: string };
      parent: { id: string; name: string };
    }
  >;
};

function buildIndex(data: Parent[]): Index {
  const parentById: Index["parentById"] = {};
  const categoryById: Index["categoryById"] = {};
  const productById: Index["productById"] = {};
  const categoryToParent: Index["categoryToParent"] = {};
  const productToCategory: Index["productToCategory"] = {};
  const productFullById: Index["productFullById"] = {};

  for (const p of data) {
    parentById[p.id] = p;

    for (const c of p.categories) {
      categoryById[c.id] = c;
      categoryToParent[c.id] = p.id;

      for (const pr of c.products) {
        productById[pr.id] = pr;
        productToCategory[pr.id] = c.id;

        productFullById[pr.id] = {
          product: pr,
          category: { id: c.id, name: c.category },
          parent: { id: p.id, name: p.parentCategory },
        };
      }
    }
  }

  return {
    parentById,
    categoryById,
    productById,
    categoryToParent,
    productToCategory,
    productFullById,
  };
}

export const IDX = Object.freeze(buildIndex(DATA));

// ---- selectors.ts (unchanged) ----
export const getParentName = (id: string) =>
  IDX.parentById[id]?.parentCategory ?? null;

export const getCategoryName = (id: string) =>
  IDX.categoryById[id]?.category ?? null;

export const getProductName = (id: string) =>
  IDX.productById[id]?.name ?? null;

export const getProductSpecs = (id: string) =>
  IDX.productById[id]?.specs ?? null;

export const getProductPrice = (id: string) =>
  IDX.productById[id]?.price ?? null;

export const getBreadcrumbByProductId = (pid: string) =>
  IDX.productFullById[pid] ?? null;

export const resolveByPath = (
  parentId?: string,
  categoryId?: string,
  productId?: string
) => ({
  parent: parentId ? IDX.parentById[parentId] ?? null : null,
  category: categoryId ? IDX.categoryById[categoryId] ?? null : null,
  product: productId ? IDX.productById[productId] ?? null : null,
});

export function getCategoriesDropdownData() {
  return DATA.map((parent) => ({
    id: parent.id,
    name: parent.parentCategory,
    categories: parent.categories.map((category) => ({
      id: category.id,
      name: category.category,
    })),
  }));
}

export function getDataByParentAndCategory(
  parentId: string,
  categoryId?: string
) {
  const parent = IDX.parentById[parentId];
  if (!parent) return null;
  if (!categoryId) return parent;
  const category = parent.categories.find((c) => c.id === categoryId);
  return category ?? null;
}