import {
  getSiteSettings,
  getServicePages,
  getProducts,
  getBlogPosts,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

export const revalidate = 60;

export async function GET() {
  const [settings, servicePages, products, posts] = await Promise.all([
    getSiteSettings(),
    getServicePages(),
    getProducts(),
    getBlogPosts(),
  ]);

  const lines: string[] = [];

  lines.push(`# ${settings.title}`);
  lines.push("");
  lines.push(
    `> ${settings.tagline ?? `Servis, montaža i prodaja klima uređaja u ${settings.city}u`}. Radimo u: ${settings.serviceAreas.join(", ")}. Telefon: ${settings.phone}.`,
  );
  lines.push("");
  lines.push(
    `Radno vreme: ${settings.workingHours ?? "kontaktirajte za informacije"}.`,
  );
  lines.push("");

  lines.push("## Usluge");
  for (const page of servicePages) {
    const desc = page.heroSubtitle ? `: ${page.heroSubtitle}` : "";
    lines.push(`- [${page.title}](${SITE_URL}/usluge/${page.slug})${desc}`);
  }
  lines.push("");

  lines.push(
    `## Cenovnik\n- [Kompletan cenovnik usluga](${SITE_URL}/cenovnik)`,
  );
  lines.push("");

  lines.push("## Lokacije");
  lines.push(
    `- [Servis klime Novi Beograd](${SITE_URL}/servis-klime-novi-beograd): blokovi, soliteri i novogradnja, montaža i servis prilagođen visokoj gradnji`,
  );
  lines.push(
    `- [Servis klime Zemun](${SITE_URL}/servis-klime-zemun): kuće, starija gradnja od pune opeke i stambene zgrade, od Gardoša do Batajnice`,
  );
  lines.push(
    `- [Servis klime Voždovac](${SITE_URL}/servis-klime-vozdovac): starija gradnja oko Vojvode Stepe, novogradnja na Medakoviću i Stepi Stepanoviću, kuće na kosinama ka Avali`,
  );
  lines.push("");

  if (products.length > 0) {
    lines.push("## Prodaja klima uređaja");
    lines.push(
      `- [Svi modeli u ponudi](${SITE_URL}/shop): ${products.length} klima uređaja, brendovi: ${[...new Set(products.map((p) => p.brand))].join(", ")}`,
    );
    lines.push("");
  }

  if (posts.length > 0) {
    lines.push("## Blog");
    for (const post of posts) {
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`);
    }
    lines.push("");
  }

  lines.push("## Kontakt");
  lines.push(`- [Kontakt stranica](${SITE_URL}/kontakt)`);
  if (settings.address) lines.push(`- Adresa: ${settings.address}`);
  lines.push(`- Telefon: ${settings.phone}`);
  if (settings.email) lines.push(`- Email: ${settings.email}`);

  const body = lines.join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
