# Alternativ 1, server fra filsystemet

## 1 Last ned node (current) og installer node
https://nodejs.org/en/

## 2 Installer bibliotek for å kjøre lokal server
Naviger til folder i et terminal og kjør:
```bash
npm install -g reload
```

## 3 Start server og lytt etter endringer
```bash
reload -b -v
```

## 4 Åpne http://localhost:8080

# Alternativ 2, express-static fileserver

## 1 Installer dependencies
```bash
npm install
```

## 2 Start server
```bash
npm start
```

## 3 Åpne http://localhost:3000/

# Legge inn ny ansatt - for dummies
* Opprett mappe under /ansatte
* Kopier `/ansatte/herman/index.html` og lim inn under den nye mappen
* Oppdater index.html med riktig innhold for den ansatte
* Logg inn på http://scelto.cvpartner.no og hent siste versjon av cv for ansatte
* Legg cv under samme mappe og oppdater `index.html` med link til cv-filen
* Kutt bilde av den ansatte til å være akkurat `1335x2000px`(WIDTHxHEIGHT)
* Legg bilde i mappen `/images/mugshots` og navngi filen med fornavnet til den ansatte
* Åpne siden i en browser og se hvordan det ser ut :)

# Deploy til Heroku

## 1 Installer heroku toolbelt
https://devcenter.heroku.com/articles/heroku-cli

## 2 Set opp git remote
```bash
heroku create <navn>
```
eller om du vil pushe til en eksisterende server
```bash
heroku git:remote -a <navn>
```

## 3 Push master branch
```bash
git push heroku
```

## 4 Åpne nettsiden
```bash
heroku open
```
