# MindCheck - Głosowy AI-coach dobrostanu

Nowoczesna aplikacja webowa oferująca 3-minutowe check-iny głosowe z AI, które pomagają w codziennej refleksji i budowaniu spokoju.

## 🌟 Funkcjonalności

- **Landing page** z kompletną prezentacją produktu
- **Responsive design** - działa na wszystkich urządzeniach
- **Dark/Light mode** - przełączanie motywu
- **Accessibility (a11y)** - optymalizacja dla wszystkich użytkowników
- **SEO-friendly** - zoptymalizowane pod wyszukiwarki
- **3 dodatkowe strony**: Polityka prywatności, Zastrzeżenia, Wsparcie kryzysowe
- **Animacje** - delikatne przejścia z Framer Motion
- **Cookie banner** - zgodność z RODO

## 🛠️ Technologie

- **React 18** + **TypeScript**
- **Vite** - szybkie budowanie
- **Tailwind CSS** - stylowanie
- **shadcn/ui** - komponenty UI
- **Framer Motion** - animacje
- **React Router** - routing
- **Lucide React** - ikony

## 🚀 Szybki start

### 1. Klonowanie repozytorium
```bash
git clone <URL_REPOZYTORIUM>
cd mindcheck
```

### 2. Instalacja zależności
```bash
npm install
```

### 3. Konfiguracja zmiennych środowiskowych
```bash
# Skopiuj plik przykładowy
cp .env.example .env

# Edytuj plik .env i dodaj URL swojego formularza
VITE_FORM_URL=https://your-form-provider.com/your-form-id
```

### 4. Uruchomienie w trybie deweloperskim
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

## 📦 Budowanie dla produkcji

```bash
# Build dla produkcji
npm run build

# Podgląd buildu
npm run preview
```

## 🌐 Deploy na Vercel

1. **Połącz z GitHubem** - wypchnij kod do repozytorium GitHub
2. **Import w Vercel** - zaimportuj projekt w panelu Vercel
3. **Ustaw zmienne środowiskowe** w ustawieniach projektu Vercel:
   - `VITE_FORM_URL` - URL do formularza (Tally, Typeform, etc.)
4. **Deploy** - Vercel automatycznie zbuduje i wdroży aplikację

### Automatyczne deploymenty
Każdy push do gałęzi `main` automatycznie uruchamia nowy deployment.

## ⚙️ Konfiguracja

### Zmienne środowiskowe

- `VITE_FORM_URL` - URL do zewnętrznego formularza check-in (wymagane)
- `VITE_PLAUSIBLE_DOMAIN` - domena dla analityki Plausible (opcjonalne)

### Personalizacja

#### Zmiana kolorów
Edytuj plik `src/index.css` - sekcja `:root` i `.dark`:
```css
:root {
  --primary: 195 100% 45%; /* Główny kolor - teal */
  --accent: 142 76% 73%;   /* Akcent - sage green */
  /* ... inne kolory */
}
```

#### Zawartość
- **Teksty**: Edytuj komponenty w folderze `src/components/`
- **Strony prawne**: Zaktualizuj `src/pages/Privacy.tsx`, `Disclaimer.tsx`, `Support.tsx`
- **Kontakt**: Zmień adresy email w `Footer.tsx` i stronach prawnych

#### SEO
- **Meta tagi**: `index.html` i `src/pages/Index.tsx`
- **Canonical URL**: Zaktualizuj w `index.html`
- **OG image**: Dodaj `public/og-image.jpg`

## 📄 Struktura projektu

```
src/
├── components/           # Komponenty aplikacji
│   ├── ui/              # Komponenty UI (shadcn)
│   ├── Header.tsx       # Nagłówek z nawigacją
│   ├── Hero.tsx         # Sekcja hero
│   ├── HowItWorks.tsx   # Jak to działa
│   └── ...              # Inne sekcje
├── pages/               # Strony aplikacji
│   ├── Index.tsx        # Strona główna
│   ├── Privacy.tsx      # Polityka prywatności
│   ├── Disclaimer.tsx   # Zastrzeżenia
│   └── Support.tsx      # Wsparcie kryzysowe
├── hooks/               # Custom hooks
└── lib/                 # Utilities
```

## 🎨 Design System

Aplikacja używa spójnego design systemu zdefiniowanego w `src/index.css`:

- **Kolory**: Spokojne odcienie teal i sage green
- **Typografia**: System font + Tailwind typography
- **Shadows**: Miękkie cienie dla głębi
- **Animations**: Subtelne animacje entrance
- **Border radius**: Duże zaokrąglenia dla przyjaznego wyglądu

## 🔒 Bezpieczeństwo i prywatność

- **RODO compliance** - polityka prywatności i cookie banner
- **Bezpieczne linki** - `rel="noopener noreferrer"` dla zewnętrznych linków
- **Accessibility** - aria-labels, semantic HTML, keyboard navigation
- **No tracking** - brak domyślnej analityki (opcjonalny Plausible)

## 📱 Responsive Design

- **Mobile-first** - optymalizacja dla urządzeń mobilnych
- **Tablet-friendly** - adaptation dla tabletów
- **Desktop optimized** - pełne wykorzystanie dużych ekranów
- **Touch-friendly** - odpowiednie rozmiary przycisków i obszarów klikalnych

## 🚨 Wsparcie kryzysowe

Aplikacja zawiera dedykowaną stronę `/support` z:
- Numerami alarmowymi (112, 800 70 2222, 116 111)
- Zasobami online dla osób w kryzysie
- Wskazówkami jak rozpoznać potrzebę pomocy
- Informacjami jak wspierać innych

## 📈 SEO i wydajność

- **Meta tagi** - title, description, keywords, OG tags
- **Semantic HTML** - proper HTML5 structure
- **Fast loading** - Vite + optimized assets
- **Accessible** - WCAG guidelines compliance
- **Mobile optimized** - responsive images and layout

## 🤝 Wsparcie

Jeśli potrzebujesz pomocy:
1. Sprawdź dokumentację powyżej
2. Otwórz issue na GitHubie
3. Skontaktuj się mailowo: kontakt@mindcheck.pl

## 📄 Licencja

Wszystkie prawa zastrzeżone © 2024 MindCheck
# echo
# echo
# echoapp
