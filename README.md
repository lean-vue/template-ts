# Project: TypeScript Template

> Opinionated Lean TypeScript Vue App Template

## Projekt-Konfiguration

- Build- und Dev-Server-Toolchain: [Vite](https://vitejs.dev/) mit Vue-Plugin
- Code-Style und Formatting: Prettier/EditorConfig
- Code-Quality-Analyse: [ESLint](https://eslint.org/) mit entsprechenden Tools/Konfigurationen
- TypeScript-Konfiguration: Minimal und dokumentiert

## NPM-Scripte

- `typecheck`: Überprüft formal die Typisierungen (über `vue-tsc` - der original `tsc` versteht die SFC Syntax nicht).

## Clean Up

Um mit dem Template ein neues Projekt zu beginnen, muss vom bereitgestellten
Projekt lediglich der Import der `&ltTemplateInfo />`-Komponente in der
`App.vue` entfernt werden. Die beiden Komponenten im `components`-Ordner
können dann problemlos zusätzlich gelöscht werden.

## VS Code

### Extensions

Zwingend für Vue-Projekte mit TypeScript:

Die Volar-Extension stellt Support für `*.vue`-Dateien bereit. Dabei stellt sie einen _Language-Server_ für bereit.
Daneben existiert in VS Code noch ein normaler Language-Server für TypeScript-Dateien. Damit dieser auch
`*.vue`-Dateien importieren kann (bzw. sowohl Vorschläge machen kann für solche Dateien und die exportierten
Komponenten und außerdem einen solchen Import fehlerfrei durchgehen lässt), muss er mit einem Plugin erweitert
werden: das [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

Alternativ und zur Zeit [empfohlen](https://github.com/vuejs/language-tools/discussions/471) ist es aber
den _Take Over Mode_ einzuschalten. Damit übernimmt Volar auch die Rolle des _normalen_ Language-Server für
TypeScript-Dateien - was zusätzlich VS Code entwas entschlackt.

Ein dritter Weg `*.vue`-Dateien _importierbar_ zu machen, wäre ein [TypeScript-Shim](https://github.com/Code-Pop/Real-World-Vue-3-TypeScript/blob/main/src/shims-vue.d.ts).
Das ist heutzutage aber eher _ungewöhnlich_.

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - zusätzlich den Takeover-Mode aktivieren

Optional falls die Kombination Editorconfig/Prettier als Formatter eingesetzt werden soll

- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Optional falls Linting-Fehler schon im Editor markiert werden sollen

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Settings

- Default Formatter: Prettier
- Format on Save: true

## IntelliJ IDEA

### Plugins

- EditorConfig (Bundled in IntelliJ IDEA Ultimate)
- Prettier (Marketplace)
- ESLint (built-in)

### Settings

- Languages & Frameworks &rarr; JavaScript &rarr; Prettier

  - Check: _On 'Reformat Code' action_
  - Check: _On save_

- Languages & Frameworks &rarr; JavaScript &rarr; Code Quality Tools &rarr; ESLint

  - Stay with default settings
  - Optionally check: _Run eslint --fix on save_
