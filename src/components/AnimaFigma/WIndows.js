import React from "react";
import "./anima.css";

export const WIndows = ({
  window,
  className,
  divClassName,
  macbookProClassName,
  activeTab,
}) => {
  const specificationContent = (
    <>
      MacBook Pro 14&#34; M4 Pro 12-CPU/16-GPU/24GB/512GB/SB
      <br />
      Inovativní čip generace Apple M4 &amp; hardwarová akcelerace sledování
      paprsků
      <br />
      Strhující Liquid Retina XDR displej s extrémním dynamickým rozsahem
      <br />
      Limitní jas 1 600 nitů, technologie True Tone &amp; více než miliarda
      barev
      <br />
      ProMotion s adaptivní obnovovací frekvencí až 120 Hz
      <br />
      Apple Inteligence* – průlomový systém osobní inteligence
      <br />
      Hi-fi soustava šesti reproduktorů s prostorovým zvukem a podporou
      Dolby Atmos
      <br />
      Soustava tří mikrofonů studiové kvality pro profesionální snímání
      hlasu
      <br />
      Superrychlé SSD úložiště &amp; mimořádně odolný hliníkový plášť
      <br />
      Podsvícená Magic Keyboard s Touch ID &amp; 12Mpx Center
      <br />
      Stage kamera s funkcí Pohled na stůl
      <br />
      Lithium‑polymerová baterie s velkolepou výdrží &amp; podpora rychlého
      nabíjení
      <br />
      Špičková portová výbava &amp; prémiová konektivita Wi‑Fi 6E a
      Bluetooth 5.3
      <br />
      Vyspělý, intuitivní operační systém macOS Sequoia
      <br />
      Environmentálně odpovědná konstrukce
    </>
  );

  const reviewsContent = (
    <>
      ⭐⭐⭐⭐⭐ "Výjimečný výkon a kvalita!"
      <br />
      Jan Novák - Ověřený zákazník
      <br />
      <br />
      "MacBook Pro M4 Pro je absolutně úžasný. Výkon je neuvěřitelný a baterie vydrží celý den intenzivní práce. Displej je krásný a zvuk je skvělý."
      <br />
      <br />
      ⭐⭐⭐⭐⭐ "Nejlepší investice do práce"
      <br />
      Marie Svobodová - Grafická designérka
      <br />
      <br />
      "Jako grafická designérka potřebuji spolehlivý a výkonný stroj. Tento MacBook splňuje všechna má očekávání. Rendering je rychlý a práce s velkými soubory je hladká."
      <br />
      <br />
      ⭐⭐⭐⭐⭐ "Skvělý pro programování"
      <br />
      Tomáš Dvořák - Software Developer
      <br />
      <br />
      "Kompilace je bleskurychlá, multitasking funguje perfektně. Klávesnice je pohodlná i při dlouhém psaní kódu. Rozhodně doporučuji!"
      <br />
      <br />
      ⭐⭐⭐⭐ "Kvalita za svou cenu"
      <br />
      Petra Nováková - Studentka
      <br />
      <br />
      "I když je to investice, kvalita a výkon za to stojí. Perfektní pro studium i zábavu. Jediné minus je vyšší cena, ale kvalita je na špičkové úrovni."
    </>
  );

  return (
    <div className={`w-indows ${className}`}>
      <div className="product-long">
        <div className={`text-wrapper ${divClassName}`}>
          {activeTab === "spec" ? "Popis produktu" : "Recenze zákazníků"}
        </div>

        <p className={`macbook-pro ${macbookProClassName}`}>
          {activeTab === "spec" ? specificationContent : reviewsContent}
        </p>
      </div>
    </div>
  );
};