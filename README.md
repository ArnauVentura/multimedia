# Galàxia Interactiva

Aquest projecte és una animació interactiva en què els usuaris poden generar planetes de diferents colors en fer clic a la pantalla. A més, es reproduirà un so amb cada interacció.

## Característiques
- **Animació visual:** Un fons estrellat en moviment i planetes generats dinàmicament.
- **Suport d'àudio:** Es reprodueix un so amb cada clic o toc.
- **Interacció tàctil o amb ratolí:** Els planetes apareixen on l'usuari faci clic o toqui la pantalla.

## Tecnologies utilitzades
- **HTML:** Estructura de la pàgina.
- **CSS:** Estils i animacions.
- **JavaScript:** Lògica d'interacció i generació dinàmica d'elements.

## Explicació del codi

### 1. **Estructura bàsica (HTML)**
- Es defineix un contenidor `<body>` on es generaran les estrelles i els planetes.
- S'inclou un element `<audio>` per reproduir so.

### 2. **Estils (CSS)**
- Es configura el fons negre amb estrelles en moviment.
- Els planetes es dissenyen com a cercles de diferents colors amb un efecte de brillantor.

### 3. **Lògica interactiva (JavaScript)**
- **`crearEstrellas()`**: Genera 100 estrelles aleatòries en diferents posicions amb animació.
- **`crearPlaneta(x, y)`**: Crea un planeta en la posició del clic/toc amb un color aleatori i reprodueix so.
- **Esdeveniments d'interacció:**
  - `touchstart`: Detecta tocs en dispositius tàctils.
  - `click`: Detecta clics en ordinadors.

## Com utilitzar
1. Obre el fitxer HTML en un navegador.
2. Fes clic en qualsevol part de la pantalla per generar un planeta.
3. Gaudeix de l'animació i el so.

Gaudeix explorant la galàxia interactiva! 🚀

