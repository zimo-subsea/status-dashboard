# Arkitektur

```mermaid
flowchart LR
  A["Undervannskamera"] --> B["Kabel"]
  B --> C["Topside gateway"]
  C --> D["Live view"]
  C --> E["Opptak"]
  C --> F["Status og support"]
```

## Prinsipp

Hold kameraet under vann så enkelt som mulig. Flytt kompleksitet, serviceverdi og fremtidig abonnementslogikk til gateway og software.

## V0-retning

- Kamera under vann.
- Gateway over vann.
- Ingen full subsea gateway i første versjon.
- Unngå custom PCB tidlig hvis eksisterende moduler kan brukes.
- La første pilot påvirke nøyaktig produktpakke.
