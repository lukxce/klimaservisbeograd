#!/usr/bin/env node
/**
 * One-shot script: patches heroTitle + SEO fields on all 4 servicePage
 * documents in the Sanity dataset.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<token> node scripts/patch-hero-titles.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({
  projectId: "n4uj9jkb",
  dataset: "production",
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const patches = [
  {
    id: "servicePage-servis",
    heroTitle: "Servis klima uređaja u Beogradu",
    seo: {
      title: "Servis klime u Beogradu | čišćenje, održavanje, cene",
      description:
        "Profesionalni servis i čišćenje klima uređaja u Beogradu. Redovno održavanje, dopuna freona, dezinfekcija. Pozovite 064 133 7373.",
    },
  },
  {
    id: "servicePage-montaza",
    heroTitle: "Montaža i ugradnja klime u Beogradu",
    seo: {
      title: "Montaža klime u Beogradu | ugradnja klime, cene",
      description:
        "Profesionalna montaža i ugradnja klima uređaja u Beogradu. Vakumiranje, uredna trasa, poštovanje pravila zgrade. Pozovite 064 133 7373.",
    },
  },
  {
    id: "servicePage-popravka",
    heroTitle: "Popravka klima uređaja u Beogradu",
    seo: {
      title: "Popravka klime u Beogradu | kvar na klimi, hitne intervencije",
      description:
        "Brza popravka klima uređaja u Beogradu. Dijagnostika i otklanjanje kvarova na licu mesta, procena isplativosti. Pozovite 064 133 7373.",
    },
  },
  {
    id: "servicePage-dijagnostika",
    heroTitle: "Dijagnostika kvara na klimi u Beogradu",
    seo: {
      title: "Dijagnostika kvara na klimi u Beogradu | pregled, error kodovi",
      description:
        "Stručna dijagnostika kvarova na klima uređajima u Beogradu. Merenje pritiska, provera elektronike, pisani nalaz. Pozovite 064 133 7373.",
    },
  },
];

console.log("Patching 4 servicePage documents in project n4uj9jkb...\n");

let ok = 0;
let fail = 0;

for (const { id, heroTitle, seo } of patches) {
  try {
    const doc = await client.getDocument(id);
    if (!doc) {
      console.log(`  ⚠  ${id} — document not found, skipping`);
      fail++;
      continue;
    }
    await client.patch(id).set({ heroTitle, seo }).commit();
    console.log(`  ✓  ${id} → heroTitle: "${heroTitle}"`);
    ok++;
  } catch (err) {
    console.error(`  ✗  ${id} — ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} patched, ${fail} failed.`);
if (fail > 0) process.exit(1);
