# A STUDIO – strona siłowni (demo)

Landing page dla siłowni A STUDIO w Mosinie (Główna 59 C/D). Strona jest statyczna (Astro + Tailwind), więc można ją za darmo hostować na Vercelu albo GitHub Pages.

## Uruchomienie lokalnie

Wymagany Node.js 22.23+.

```bash
npm install
npm run dev      # podgląd na http://localhost:4417
npm run build    # gotowa strona w folderze dist/
```

## Gdzie co zmienić

Prawie wszystko jest w jednym pliku: **`src/data/site.ts`**.

| Co | Pole w `site.ts` |
| --- | --- |
| Telefon, mail, Instagram, Facebook | `phone`, `email`, `instagram`, `facebook` |
| Godziny otwarcia | `openingHours` |
| Grafik zajęć | `schedule` (albo arkusz Google, patrz niżej) |
| Cennik | `prices`; po wpisaniu prawdziwych cen ustaw `pricesArePlaceholder: false` |
| Opinie, oferta, FAQ | `reviews`, `offer`, `faq` |
| Żółty pasek „wersja demonstracyjna” | `demoBanner: false` po akceptacji klienta |

Zdjęcia leżą w `src/assets/`. Podmień pliki na lepsze zdjęcia od siłowni (te same nazwy), a Astro samo je zoptymalizuje.

## Grafik edytowany przez właścicielkę (arkusz Google)

Dzięki temu właścicielka zmienia grafik w tabelce na telefonie, bez dotykania kodu i bez ponownego wdrażania strony.

1. Utwórz arkusz Google i zaimportuj `public/grafik-przyklad.csv` (Plik → Importuj). Kolumny: `dzien`, `godzina`, `zajecia`, `opis`.
2. Plik → Udostępnij → **Opublikuj w internecie** → wybierz arkusz i format **CSV** → Opublikuj.
3. Skopiuj link i wklej go do `scheduleSheetCsvUrl` w `src/data/site.ts`.
4. Udostępnij arkusz właścicielce do edycji.

Zmiany w arkuszu pojawiają się na stronie po kilku minutach (Google odświeża opublikowany CSV z opóźnieniem). Jeśli arkusz będzie niedostępny, strona pokaże grafik zapisany w `site.ts`.

## Publikacja

### Vercel (najprościej)

1. Wrzuć repozytorium na GitHuba.
2. Na [vercel.com](https://vercel.com) kliknij **Add New → Project** i wybierz repozytorium. Vercel sam wykryje Astro, nic nie trzeba ustawiać.
3. Każdy `git push` automatycznie aktualizuje stronę.
4. Domena: w projekcie **Settings → Domains** dodaj kupioną domenę i ustaw u rejestratora rekordy DNS, które pokaże Vercel.

### GitHub Pages

1. W repozytorium: **Settings → Pages → Source: GitHub Actions**.
2. Po `git push` na `main` workflow `.github/workflows/deploy.yml` zbuduje i opublikuje stronę pod `https://<login>.github.io/<nazwa-repo>/`.
3. Z własną domeną (albo dla repozytorium `<login>.github.io`) usuń linię `BASE_PATH` z workflow i dodaj domenę w **Settings → Pages → Custom domain**.

## Struktura

```
src/
  data/site.ts        wszystkie treści
  components/         sekcje strony (Hero, Grafik, Cennik, Opinie, Kontakt…)
  layouts/Layout.astro  <head>, SEO i dane strukturalne dla Google
  assets/             zdjęcia
public/               favicon i przykładowy CSV grafiku
```
