# On-demand ISR revalidacija (Sanity webhook)

Ovaj sajt (i sestrinski sajtovi klimaservisnis, moler-nis, elektroservis-nis)
je prebačen sa vremenske ISR revalidacije (fiksni tajmer, npr. svakih 60s) na
**on-demand** revalidaciju: stranica ostaje statična i keširana dok se
eksplicitno ne pozove `revalidateTag()`, umesto da se regeneriše na fiksnom
intervalu bez obzira da li se sadržaj promenio.

## Da li ti ovo uopšte treba?

**Ne, ako sadržaj i dalje menjaš kroz kod** (`src/lib/placeholder-data.ts` +
`git push`). Svaki push pokreće novi deploy, koji ionako iznova generiše sve
stranice od nule - `revalidate: false` sam po sebi već rešava problem (nema
više nepotrebnih regeneracija na tajmeru), bez ikakvog dodatnog podešavanja.

**Da, samo ako** ti ili neko drugi počne da menja sadržaj direktno kroz
Sanity Studio (`/studio`) i želiš da se ta izmena pojavi na sajtu odmah, bez
čekanja na sledeći deploy. Bez ovog podešavanja, Sanity izmene ostaju
nevidljive na sajtu dok se ne uradi novi deploy.

## Kako radi

1. Svaki `client.fetch()` poziv u `src/lib/data.ts` je označen tagom po tipu
   Sanity dokumenta (`siteSettings`, `service`, `servicePage`, `product`,
   `blogPost`, u zavisnosti od sajta).
2. `src/app/api/revalidate/route.ts` prima POST zahtev od Sanity webhook-a,
   proverava potpis, i zove `revalidateTag(_type, "max")` za taj tip.
3. Sledeći put kad neko poseti stranicu koja koristi taj tag, Next.js je
   regeneriše sa svežim podacima (stale-while-revalidate - stari sadržaj se
   i dalje servira dok se novi ne spremi u pozadini).

## Podešavanje (uradi jednom, po sajtu)

### 1. Napravi secret

```bash
openssl rand -hex 32
```

Bilo koji dovoljno dugačak nasumičan string radi - ovo je samo da webhook
zahtevi mogu da se provere kao autentični (da neko nasumičan sa interneta ne
može da okine revalidaciju).

### 2. Dodaj env var u Vercel

Vercel projekat -> Settings -> Environment Variables:

- Key: `SANITY_REVALIDATE_SECRET`
- Value: string iz koraka 1
- Environments: Production (i Preview ako želiš da radi i tamo)

Posle dodavanja env var-a, uradi redeploy da se promena primeni.

### 3. Napravi webhook u Sanity

[sanity.io/manage](https://sanity.io/manage) -> izaberi projekat -> API ->
Webhooks -> Create webhook:

| Polje | Vrednost |
|---|---|
| Name | proizvoljno, npr. "Vercel revalidate" |
| URL | `https://<domen-sajta>/api/revalidate` |
| Dataset | `production` |
| Trigger on | Create, Update, Delete |
| Filter | ostavi prazno (filtriranje po tipu se radi u kodu) |
| Projection | `{ "_type": _type, "slug": slug.current }` |
| HTTP method | POST |
| HTTP Headers | ostavi prazno |
| Secret | ista vrednost kao `SANITY_REVALIDATE_SECRET` iz koraka 1 |

Sačuvaj.

### 4. Testiraj

Objavi (publish) neku izmenu u Sanity Studio-u i proveri:

- Sanity manage -> ovaj webhook -> Attempt log: treba da vidiš 200 OK odgovor
  oblika `{"revalidated": true, "tag": "<tip>", ...}`
- Osveži stranicu na sajtu (može biti keširana na CDN-u par sekundi/minuta
  dok se ne osveži i taj sloj) i proveri da se izmena pojavila.

Ako webhook vraća 401: secret u Vercel-u i secret u Sanity webhook-u se ne
poklapaju. Ako vraća 500: `SANITY_REVALIDATE_SECRET` nije postavljen u
Vercel-u (ili nije redeploy-ovano posle dodavanja).

## Ponavljanje na ostala 3 sajta

Isti koraci (1-4), samo drugi projekat u Sanity manage i drugi Vercel projekat
po sajtu:

- klimaservisnis
- moler-nis
- elektroservis-nis

Svaki sajt ima svoj `/api/revalidate` i svoj set tagova (proveri
`src/lib/data.ts` u tom repou za tačan spisak - moler-nis i elektroservis-nis
nemaju `product` tip, na primer).
