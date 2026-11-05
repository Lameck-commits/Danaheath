export type Slot = "hair" | "top" | "bottom" | "shoes" | "extra";
export type Vibe = "glam" | "cute" | "sport" | "night" | "pastel";

export type Item = {
  id: string;
  slot: Slot;
  name: string;
  color: string;
  vibe: Vibe;
};

export const THEMES: { id: Vibe; label: string; hint: string }[] = [
  { id: "glam", label: "Gold Glam", hint: "Shine, heels, long hair" },
  { id: "cute", label: "Soft Cute", hint: "Pastel bows and skirts" },
  { id: "sport", label: "Street Sport", hint: "Sneakers and easy layers" },
  { id: "night", label: "After Dark", hint: "Ink, boots, sharp lines" },
  { id: "pastel", label: "Cloud Pastel", hint: "Light colors, gentle shapes" },
];

export const ITEMS: Item[] = [
  { id: "hair-long", slot: "hair", name: "Long waves", color: "#1b1216", vibe: "glam" },
  { id: "hair-pony", slot: "hair", name: "High pony", color: "#2a1a16", vibe: "sport" },
  { id: "hair-bob", slot: "hair", name: "Soft bob", color: "#3a241c", vibe: "cute" },
  { id: "hair-buns", slot: "hair", name: "Space buns", color: "#4a2c55", vibe: "pastel" },
  { id: "top-tank", slot: "top", name: "Rib tank", color: "#f4d7c5", vibe: "cute" },
  { id: "top-jacket", slot: "top", name: "Crop jacket", color: "#1e2433", vibe: "night" },
  { id: "top-hoodie", slot: "top", name: "Hoodie", color: "#e7b7c8", vibe: "sport" },
  { id: "top-spark", slot: "top", name: "Sequin bodice", color: "#d4a017", vibe: "glam" },
  { id: "bot-skirt", slot: "bottom", name: "Pleat skirt", color: "#f2c1d1", vibe: "cute" },
  { id: "bot-jeans", slot: "bottom", name: "Wide jeans", color: "#3d5270", vibe: "sport" },
  { id: "bot-shorts", slot: "bottom", name: "City shorts", color: "#efe6d6", vibe: "pastel" },
  { id: "bot-dress", slot: "bottom", name: "Column skirt", color: "#111318", vibe: "night" },
  { id: "shoe-sneak", slot: "shoes", name: "Sneakers", color: "#f7f4ef", vibe: "sport" },
  { id: "shoe-heel", slot: "shoes", name: "Heels", color: "#c9a15b", vibe: "glam" },
  { id: "shoe-boot", slot: "shoes", name: "Boots", color: "#241c1a", vibe: "night" },
  { id: "shoe-mary", slot: "shoes", name: "Mary Janes", color: "#e8a0b8", vibe: "pastel" },
  { id: "ex-none", slot: "extra", name: "Bare", color: "#c48a5a", vibe: "sport" },
  { id: "ex-hoops", slot: "extra", name: "Hoops", color: "#e8d7a2", vibe: "glam" },
  { id: "ex-choker", slot: "extra", name: "Ribbon", color: "#d4537e", vibe: "cute" },
  { id: "ex-chain", slot: "extra", name: "Chain", color: "#c5ccd6", vibe: "night" },
];

export type Look = Record<Slot, string>;

export const DEFAULT_LOOK: Look = {
  hair: "hair-long",
  top: "top-tank",
  bottom: "bot-skirt",
  shoes: "shoe-sneak",
  extra: "ex-choker",
};

export function itemById(id: string): Item {
  return ITEMS.find((i) => i.id === id) ?? ITEMS[0]!;
}

export function scoreLook(look: Look, theme: Vibe): number {
  const slots: Slot[] = ["hair", "top", "bottom", "shoes", "extra"];
  let hits = 0;
  for (const s of slots) if (itemById(look[s]).vibe === theme) hits += 1;
  return hits * 20;
}
