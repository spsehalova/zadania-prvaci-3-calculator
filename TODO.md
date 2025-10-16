# TODO - Calculator

## Povinne ulohy

### 1. Implementovať výpočtovú logiku
- [ ] Dokončiť funkciu `calculate()` v `script.js`
- [ ] Implementovať switch/if-else pre všetky operácie (add, sub, mul, div)
- [ ] Konvertovať string hodnoty z formulára na čísla (Number() alebo parseFloat())
- [ ] Zobraziť výsledok v elemente `#result`

### 2. Implementovať funkciu render()
- [ ] Vyčistiť aktuálnu históriu v HTML (odstrániť hardcoded príklady)
- [ ] Iterovať cez pole `history`
- [ ] Pre každý záznam v histórii vytvoriť nový element pomocou template
- [ ] Vložiť správne hodnoty (number1, operator, number2, result)
- [ ] Pridať nové elementy do `.history` sekcie

### 3. Uložiť výpočty do histórie
- [ ] Po výpočte pridať nový objekt do poľa `history`
- [ ] Objekt musí obsahovať: number1, operator (symbol), number2, result
- [ ] Zavolať `render()` po pridaní do histórie

### 4. Validácia vstupov (optional)
- [ ] Skontrolovať, či sú vstupy platné čísla
- [ ] Zobraziť chybovú hlášku pri neplatných vstupoch
- [ ] Ošetriť delenie nulou (number2 === 0 pre operáciu div)

### 5. Mapovanie operátorov
- [ ] Vytvoriť mapovanie z hodnôt selectu (add, sub, mul, div) na matematické symboly (+, -, *, /)
- [ ] Použiť správne symboly pri zobrazení v histórii

## Nepovinne ulohy

### 6. Resetovanie formulára
- [ ] Po výpočte automaticky vyčistiť formulár (form.reset())

### 7. Vymazanie histórie
- [ ] Pridať tlačidlo "Vymazať históriu"
- [ ] Implementovať funkciu na vyčistenie poľa `history`
- [ ] Aktualizovať zobrazenie po vymazaní

### 8. Rozšírené operácie
- [ ] Pridať mocninu (power)
- [ ] Pridať odmocninu (square root)
- [ ] Pridať modulo (%)

### 9. LocalStorage
- [ ] Uložiť históriu do localStorage
- [ ] Načítať históriu pri načítaní stránky
- [ ] Umožniť trvalé uloženie výpočtov
