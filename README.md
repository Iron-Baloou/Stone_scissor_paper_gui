# Schere Stein Papier 

Ein Spieler spielt gegen Computer im klassischen Schere Stein Papier Format.
Es gilt:
- Schere schlägt Papier
- Papier schlägt Stein
- Stein schlägt Schere
Gespielt wird solange bis 3 Runden gewonnen wurden.

Zum Spielen im Browser muss die Console(F12) geöffnet werden.
Eingabe erfolgt über Textfenster.


 
```
function game()
```
überprüft Win Bedingung, zählt Punkte, gib Sieger an, initiiert playRound()

```
function playRound()
```
Eingabe Spieler(falsche Inputs werden geprüft), Rundengewinner wird festgestellt, computerPlay() wird gestartet und übernommen

```
function computerPlay()
```
randomgeneriert Auswahl von Computer

