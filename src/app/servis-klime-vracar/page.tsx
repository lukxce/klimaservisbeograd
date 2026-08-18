import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/servis-klime-vracar";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Servis klime Vračar | montaža, čišćenje i popravka";
  const description = `Servis klima uređaja na Vračaru: stara gradnja oko Hrama Svetog Save, Neimara i Kalenić pijace. Montaža, dubinsko pranje i popravke. Pozovite ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const services = [
  {
    title: "Servis i dubinsko pranje klime",
    text: "Uređaji u starim vračarskim zgradama, posebno u ulicama oko Njegoševe i Maksima Gorkog, često su postavljeni pre petnaest i više godina i rade u stanovima sa visokim plafonima gde se prašina duže zadržava u vazduhu. Isparivač i turbinu peremo temeljno, sa dezinfekcijom i proverom da odvod kondenzata nije oštećen starenjem creva.",
    href: "/usluge/servis",
  },
  {
    title: "Montaža u staroj zgradi bez lifta",
    text: "Kod zgrada iz perioda između dva rata i posleratne gradnje, uobičajene u ulicama oko Kalenić pijace i Neimara, lift često ne postoji ili je previše uzak za veću spoljnu jedinicu. Opremu i uređaj tada nosimo stepenicama, a montažu planiramo tako da broj polazaka gore-dole bude što manji.",
    href: "/usluge/montaza",
  },
  {
    title: "Popravka i nadogradnja strujnog ormana",
    text: "Deo starih vračarskih instalacija ima osigurače dimenzionisane za potrošnju iz vremena kada u stanu nije bilo klime, veš mašine i bojlera istovremeno. Pre montaže jačeg uređaja proveravamo strujni ormar i, po potrebi, predlažemo poseban vod ili nadogradnju automatskog osigurača da pokretanje kompresora ne izbacuje struju.",
    href: "/usluge/popravka",
  },
  {
    title: "Dijagnostika zatečene instalacije",
    text: "Kupili ste stan u staroj zgradi na Vračaru sa klimom nepoznate starosti i nejasno izvedenom trasom. Izlazimo, merimo pritisak, proveravamo elektroniku, trasu i strujni ormar, i dajemo pisanu konstataciju sa procenom da li se uređaj isplati servisirati ili je pametnije zameniti ga.",
    href: "/usluge/dijagnostika",
  },
];

const faq = [
  {
    question: "Koje delove Vračara pokrivate?",
    answer:
      "Ceo Vračar: zonu oko Hrama Svetog Save i Kalenić pijace, Neimar, potez Njegoševe, Maksima Gorkog i Molerove, deo oko Slavije i Vojislava Ilića prema granici sa Zvezdarom. Za sve ove delove uglavnom nudimo termin isti ili sledeći radni dan, jer je Vračar teren na kom radimo redovno.",
  },
  {
    question: "Zašto pitate da li zgrada ima lift pre nego što zakažete termin?",
    answer:
      "Zato što to direktno određuje koliko dugo posao traje i koliko ljudi dolazi na intervenciju. Stara zgrada na četvrtom spratu bez lifta znači da se spoljna jedinica, boce sa gasom i alat nose stepenicama, što je fizički zahtevniji i sporiji posao od iste montaže u zgradi sa liftom. Bolje je to znati unapred nego kad ekipa stoji u prizemlju sa opremom.",
  },
  {
    question: "Kako rešavate pristup kada je ulica preuska za kamion sa platformom?",
    answer:
      "Uske ulice oko Njegoševe, Molerove i dela Neimara često ne dozvoljavaju da vozilo sa hidrauličnom platformom priđe do same fasade ili se uopšte parkira u blizini. U tim slučajevima radimo sa opremom za rad na visini koja se nosi ručno, sa osiguranjem sa krova ili terase, umesto da računamo na platformu. To se dogovara unapred, čim znamo tačnu adresu i raspored ulice.",
  },
  {
    question: "Da li stari strujni ormar mora da se menja pre ugradnje klime?",
    answer:
      "Ne mora uvek, ali kod jačih uređaja, 18 ili 24 BTU, u zgradama sa instalacijom starijom od tridesetak godina, vredi proveriti da li postojeći osigurač izdržava struju pri pokretanju kompresora. Ako ne izdržava, rešenje je poseban vod sa sopstvenim osiguračem za klimu, što je jednokratan trošak koji sprečava da vam klima redovno izbacuje struju u celom stanu.",
  },
  {
    question: "Koliko brzo možete da izađete na Vračar?",
    answer:
      "Za centralni Vračar, Neimar i zonu oko Kalenić pijace, najčešće isti ili sledeći radni dan. U julu i avgustu se rokovi produžavaju kao i svuda u gradu, pa se redovan servis stare klime isplati zakazati u proleće, pre nego što počne sezona.",
  },
  {
    question: "Radite li montažu u zgradama blizu Hrama Svetog Save koje su pod nekom vrstom zaštite?",
    answer:
      "Da, ali kod zgrada u delovima Vračara koji imaju status kulturno-istorijske celine intervencija na uličnoj fasadi po pravilu nije moguća bez posebne saglasnosti. U tim slučajevima jedinicu vodimo na dvorišnu stranu ili predlažemo poziciju koja ne menja izgled fasade prema ulici, a to je najbolje razjasniti pre kupovine uređaja, ne posle.",
  },
  {
    question: "Zašto mi je montaža u staroj zgradi na Vračaru skuplja od procene koju sam čuo za Novi Beograd?",
    answer:
      "Najčešće zbog kombinacije tri stvari koje se ređe javljaju u novogradnji: nošenje opreme stepenicama kad nema lifta, deblji zidovi od pune opeke koji traže duže bušenje, i povremena potreba za dodatnim vodom u strujnom ormanu. Osnovna cena montaže je ista za ceo grad, ali se ove stavke dodaju kao doplata i uvek se najavljuju pre početka rada.",
  },
];

export default async function ServisKlimeVracarPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Servis klime Vračar", item: `${SITE_URL}${PATH}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servis i montaža klima uređaja",
    provider: { "@type": "HVACBusiness", name: settings.title, telephone: settings.phone },
    areaServed: { "@type": "Place", name: "Vračar, Beograd" },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        eyebrow="Vračar"
        title="Servis klime Vračar: stara gradnja, uske ulice i zgrade bez lifta"
        subtitle="Od Hrama Svetog Save do Neimara i Kalenić pijace, Vračar je pretežno stara gradnja sa visokim plafonima, debelim zidovima i zgradama bez lifta. Radimo montažu, servis i popravku prilagođenu upravo takvim uslovima, ne generičkoj novogradnji."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zakažite termin", href: "/kontakt" }}
        stats={[
          { value: "Ceo Vračar", label: "od Slavije do Neimara" },
          { value: "Stara gradnja", label: "iskustvo sa zgradama bez lifta" },
          { value: "Garancija", label: "na sve izvedene radove" },
        ]}
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Zašto je Vračar poseban teren
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Opština u kojoj gradnja diktira svaku montažu
          </h2>
          <p className="mt-4 text-muted">
            Vračar je jedna od retkih beogradskih opština u kojoj novogradnja čini manjinu.
            Najveći deo stambenog fonda su zgrade iz perioda između dva rata i iz prvih decenija
            posle Drugog svetskog rata, sa visokim plafonima, debelim zidovima od pune opeke i
            stepeništima projektovanim za sasvim drugačije potrebe od današnjih. Manji broj
            zgrada ima lift, a tamo gde postoji, često je uzak kabinasti model kroz koji ne prođe
            veća spoljna jedinica ni deo alata.
          </p>
          <p className="mt-4 text-muted">
            Ulice oko Njegoševe, Molerove, Maksima Gorkog i dela Neimara su uske, sa gustim
            parkiranjem i ograničenim prostorom za vozilo sa hidrauličnom platformom. To znači da
            standardna oprema za rad na visini, koja bez problema priđe zgradi na Novom Beogradu
            ili u Zemunu, na Vračaru često nije primenljiva, pa se posao izvodi ručno, sa
            osiguranjem sa krova, terase ili susednog prozora.
          </p>
          <p className="mt-4 text-muted">
            Treći faktor koji Vračar razlikuje od novijih delova grada je strujna instalacija.
            Deo zgrada ima ormane koji nisu menjani decenijama, dimenzionisane za potrošnju iz
            vremena kada klima nije bila standardni kućni uređaj. Zato pitanja o zgradi, spratu i
            starosti instalacije pre izlaska nisu formalnost, nego osnov na kom planiramo ceo
            posao.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Šta radimo na Vračaru</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-navy/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-accent-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.text}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-dark">
                  Saznajte više →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Sprat bez lifta i uska ulica
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Kada standardna oprema nije rešenje
          </h2>
          <p className="mt-4 text-muted">
            Montaža u zgradi bez lifta na trećem ili četvrtom spratu nije samo pitanje truda, nego
            i planiranja. Spoljna jedinica, boce sa gasom, vakum pumpa i alat nose se stepenicama,
            a raspored posla se prilagođava tako da broj polazaka gore i dole bude što manji.
            Ovakva montaža po pravilu traje duže od iste montaže u zgradi sa liftom, i to unapred
            saopštavamo, umesto da se posao neplanirano oduži na licu mesta.
          </p>
          <p className="mt-4 text-muted">
            Kada je ulica preuska za kamion sa hidrauličnom platformom, alternativa je rad sa
            opremom koja se nosi ručno i osigurava sa krova, terase ili prozora sprata iznad
            pozicije. Ovo zahteva iskusnu ekipu i drugačiji pristup od standardne montaže, i
            naplaćuje se posebno od osnovne cene, uvek sa iznosom saopštenim pre dolaska.
          </p>
          <p className="mt-4 text-muted">
            Debljina zida je poslednji faktor. Puna opeka od četrdeset i više centimetara, česta u
            zgradama iz tog perioda, traži dužu krunu za prodor i više vremena za bušenje nego
            tanak beton u novogradnji. To ne menja cenu montaže kao takvu, ali produžava vreme
            koje ekipa provede na terenu.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Strujni ormani i stara instalacija
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Zašto proveravamo osigurače pre montaže jačeg uređaja
          </h2>
          <p className="mt-4 text-muted">
            Kod uređaja od 9 ili 12 BTU stara instalacija retko pravi problem. Kod jačih uređaja,
            18 ili 24 BTU, situacija je drugačija: pokretanje kompresora kratko povlači znatno
            veću struju od one koju uređaj troši dok već radi, i stari automatski osigurač,
            dimenzionisan za potrošnju bez klime, tu struju ne izdrži i izbaci se.
          </p>
          <p className="mt-4 text-muted">
            Rešenje nije uvek zamena celog strujnog ormana. Najčešće je dovoljan poseban vod sa
            sopstvenim osiguračem isključivo za klimu, odvojen od ostatka stana. Ovo proveravamo
            pre montaže i, ako je potrebno, predlažemo kao dodatnu stavku pre nego što uređaj
            uopšte stigne na adresu, jer je neprijatnije otkriti problem posle montaže nego pre
            nje.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/usluge/popravka"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Sve o popravkama i instalaciji
            </Link>
            <Link
              href="/blog/da-li-smete-da-postavite-klimu-na-fasadu-zgrade"
              className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Pravila za postavljanje klime na fasadu
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Cene</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Okvirne cene za Vračar</h2>
          <p className="mt-4 text-muted">
            Montaža uređaja od 9 ili 12 BTU kreće od 12000 dinara, 18 BTU od 15000 dinara, a 24 BTU
            od 18000 dinara, sa standardnom trasom do tri metra. Redovan servis je od 5000 dinara
            za 9 i 12 BTU, odnosno od 5500 dinara za 18 i 24 BTU. Demontaža stare klime kreće od
            3500 dinara, a dopuna i provera gasa od 7000 dinara.
          </p>
          <p className="mt-4 text-muted">
            Na Vračaru se, češće nego u novijim delovima grada, pojave tri doplate: nošenje opreme
            stepenicama u zgradi bez lifta, rad na visini bez mogućnosti prilaska platformom u
            uskim ulicama, i poseban vod u strujnom ormanu za jače uređaje. Sve tri se procenjuju
            unapred, na osnovu adrese i sprata, i saopštavaju pre nego što se dogovori termin.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pogledajte ceo cenovnik
          </Link>
        </Container>
      </section>

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Česta pitanja
          </span>
          <h2 className="mt-2 text-3xl font-bold text-navy">
            Pitanja koja najčešće dobijamo sa Vračara
          </h2>
          <div className="mt-8 space-y-6">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
