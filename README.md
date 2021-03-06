# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

### Ontwerper:
Chantal Valk

#### Je startniveau:
Mijn startniveau is: Rood





# Je plan

<details open>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

  ### De eerste versie/schets:
  <img src="readme-images/Plan.png" width="375px" alt="eerste versie/schets">
  <img src="readme-images/feedbackPlan.png" width="375px" alt="eerste versie/schets">

  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - animatie
  - layout
  - sound
  - kleur
 
</details>




## Voortgang/Feedback 1

<details open>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).
  Layout animatie problemen:
  Aan de slag geweest met translateY op de poster image om zo de achtergrond te bewegen. Hier ben ik van afgestapt omdat dit een hele lap met animatie's en delay's zou opleveren die ik later slecht zou kunnen aanpassen / begrijpen omdat alles door elkaar heen zou werken. (omhoog, omlaag, links rechts en stops inbouwen waarin link stilstaat.) Ik durfde dus niet verder te bouwen aan deze oplossing en kreeg ook de tips om dat niet zo te doen.
  Lang nagedacht over een andere manier om het aan te pakken of een hele andere oplossing te maken.
  Zie image: <img src="readme-images/animatie.png" width="375px" alt="eerste animatie">


  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).
  Geen oplossing kunnen vinden.


  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).
  Layout animatie problemen:
  Vervolgens heb ik om hulp gevraagd bij Aanne en die kwam met de volgende oplossing:
  <img src="readme-images/sanne.png" width="375px" alt="eerste animatie">
  Hier lukte het helaas niet om het scherm te bewegen, na een aantal keer proberen kreeg ik nogsteeds na de #id te selecteren een lege pagina te zien omdat de browser aangaf de pagina niet te kunnen vinden. Terwijl een leeg #id altijd op dezelfde pagina hoort te blijven als linkje en je niet hoort weg te sturen. ik kon helaas dit niet meer uitvragen aan sanne omdat ik erg ziek ben geworden diezelfde middag.

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).
  Uiteindelijk heb ik hulp gevraagd bij een studiegenoot die mij javascript aanraden. Dit heb ik gebruikt om de layout te bewegen met een forloop. Door middel van een timeOut kan de animatie gekoppeld worden met tijd. Elke iteratie is een aantal milliseconden. Tussen de 1-100 iteraties kan link naar links lopen, tussen de 101-200 naar beneden enzovoort. Ook is het mogelijk om de image van link te vervangen na een aantal iteraties.



  ### Bevinding 3:
  Besloten om niet verder te gaan met de javascript oplossing, geprobeerd om met behulp van grids een oplossing te maken door de li's een achtergrond te geven en de kaartjes er laten in te plaatsen. dit lukte niet omdat het niet lukte om de kaartjes geen hoogte te en breedte mee te geven binnen het grid.:
  <img src="readme-images/kaartje.png" width="375px" alt="oplossing1">
  <img src="readme-images/kaartje2.png" width="375px" alt="oplossing2">



</details>




## Voortgang/Feedback 2

<details open>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).
  
  Het is mij niet gelukt om zonder Javascript interactie te krijgen met animaties. Ik kan met css de achterground van de kaart verplaatsen en ik kan de kaartjes naar links en rechts bewegen, maar om de animatie pas te activeren als er op een item geklikt wordt lukt niet. De animatie kan namelijk alleen een starten met javascript

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).
  Op dit moment gewerkt met een animatie voor de kaartjes en voor de achtergrond. de snelheid is nog niet correct op elkaar afgestemd maar dit is de oplossing waar ik mee ga werken.


  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  De animatie van lopen gaat nu enkel nog naar rechts. Om te kisten ook tegelijk met de background naar beneden te laten beneden is lastig.


  #### oplossing:
 Oplossing gemaakt voor het aanbrengen van een tekstborder, webkit-text-border werdt niet ondersteunt dus werd het een text schaduw: https://stackoverflow.com/questions/2570972/css-font-border



  ### Bevinding 3:
  Oplossing gemaakt voor het scrollen van de lange tekstlappen door deze scrollend te maken.

</details>







## Reflectie

<details open>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  Mijn eindresultaat bestaat uit 9 verschillende kaartjes met uitleg over de 9 zelda games op chronologische volgorde.
  <img src="readme-images/uitkomst.png" width="375px" alt="final ontwerp">


  ### Dit ging goed/Heb ik geleerd: 
  Het vormgeven van de teksten en het plaatsen hiervan ging erg goed en heb ik veel plezier ook bij gehad.

  <img src="readme-images/ging goed.png" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Ik vond het maken van de bewegende layout heel erg moeilijk, uiteindelijk heb ik hulp gehad van sanne.

  <img src="readme-images/moeilijk.png" width="375px" alt="bummer">
</details>


<a href="readme-images/feedback.pdf">pdf feedback job</a>
<a href="readme-images/feedback2.pdf">pdf feedback suus</a>
<a href="readme-images/feedback3.pdf">pdf feedback noa</a>


## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://stackoverflow.com/questions/29464671/how-to-make-an-item-fall-down-with-css3-animation
animatie voor het uitvallen van het kaartje, aangepast naar mijn benodigdheden maar dit als startpunt gekozen.
2. https://stackoverflow.com/questions/22168506/double-text-shadow-on-p-element-in-css3
3. https://stackoverflow.com/questions/6780614/css-how-to-position-two-elements-on-top-of-each-other-without-specifying-a-hei
4. https://css-tricks.com/almanac/properties/t/text-shadow/
5. https://stackoverflow.com/questions/2883373/simple-css-text-wont-center-in-a-button
6. https://www.w3schools.com/cssref/css3_pr_background-size.asp
7. Sanne voor de layout.
8. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Link%27s_Awakening
9. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past
10. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda_(computerspel)
11. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time
12. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Majora%27s_Mask
13. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_The_Wind_Waker
14. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Twilight_Princess
15. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Skyward_Sword
16. https://nl.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild

</details>