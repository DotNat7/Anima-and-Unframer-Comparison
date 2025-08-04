# 🧩 Srovnání nástrojů Figma+Anima a Framer+Unframer

## 📌 Popis projektu
Tento projekt doprovází bakalářskou práci, která se zabývá porovnáním interaktivních nástrojů pro tvorbu komponent v knihovně React. 
Cílem bylo vytvořit sadu běžně používaných komponent pomocí dvou různých nástrojů – Figma s pluginem Anima a Framer s pluginem React Exporter (Unframer) – 
a následně je integrovat do ukázkové React aplikace.

## 🧪 Použité nástroje
- React v19 + Node.js 20
- Figma + plugin Anima
- Framer + plugin React Exporter (Unframer)
- Anima Playground (pro AI úpravy kódu)

## 🧱 Struktura projektu

```
📁 src/
 ├─ 📁 components/
 │   ├─ 📁 animaFigma/
 │   │    └─ Button.js, ProductCard.js, ...
 │   ├─ 📁 framer/
 │   │    └─ Button.js, ProductCard.js, ...
 ├─ 📁 pages/
 │   ├─ Anima.js
 │   └─ Framer.js
     └─ FramerCELEK.js

 └─ App.jsx
```

Každý nástroj má vlastní složku s exportovanými komponentami. Součástí projektu jsou i samostatné testovací stránky pro každou sadu.

## ⚙️ Jak spustit projekt

```bash
git clone https://github.com/DotNat7/BenkovaBakalarka.git
cd bakalarka
npm install
npm install unframer
npm start
```

Aplikace se spustí např. na `http://localhost:3000`. 
Výsledná aplikace je také na doméně benkovanatalie.cz

## 🖼️ Ukázky komponent
Všechny komponenty byly vytvořeny v návrhovém prostředí (Figma/Framer) a exportovány do React kódu.  
Např. ProductCard, LoginForm, Tabs, Footer, Header, Button.

Každá komponenta má zajištěnou základní responzivitu a využívá props.

## 🔍 Další poznámky
- Některé komponenty byly upraveny v **Anima Playground**, který umožňuje přidat logiku nebo interaktivitu (např. Tabs, Login Form).
- Framer byl rozdělen na 2 stránky - Framer.js obsahuje jednotlivě generované komponenty a FramerCELEK obsahuj stránku vygenerovanou jako celek.

## 📄 Licence
Tento projekt slouží pro studijní a výzkumné účely (bakalářská práce).
