
export interface Pokedex {
  data: Pokemon[];
  page: number;
  count: number;
  totalCount: number;
}

export interface SinglePokedex {
  data: Pokemon;
}


export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: number;
  types: string[];
  evolvesTo: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
  resistances: Resistance[];
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

export interface Weakness {
    type: string;
    value: string;
}

export interface Legalities {
    unlimited: string;
    expanded: string;
}

export interface Images {
    symbol: string;
    logo: string;
}

export interface Set {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: Images;
    _self: string;
}

export interface Legalities2 {
    unlimited: string;
    expanded: string;
}

export interface Images2 {
    small: string;
    large: string;
}

export interface Holofoil {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
}

export interface Price {
    holofoil: Holofoil;
}

export interface Tcgplayer {
    url: string;
    prices: Price[];
}
