# EverQuest Legends Race Unlock Companion

**Plan faction grinds, track race unlocks, and manage your progress in one browser-based companion.**

[Launch the companion](https://lachadan.github.io/everquest-legends-race-unlock-companion/) · [User guide](docs/USER_GUIDE.md) · [Changelog](CHANGELOG.md) · [Roadmap](ROADMAP.md)

## Features

- Expandable race requirement checklists and manual achievement confirmation.
- Faction TXT import, quick wins and documented alternative grinding methods.
- Suggested unlock route, faction-loss warnings, quest calculator and shopping list.
- Browser-local progress, JSON backups and recovery snapshots.

## Getting started

Open the live companion, choose your faction export, and click **Read File**. Expand race confirmation counts, verify achievements in game, and consult the suggested route. See the [user guide](docs/USER_GUIDE.md) for the expected import format and detailed instructions. Alternatively download `index.html` and open it locally; no build step is required.

## Privacy and limitations

Version 3.0 starts without personal standings. Progress is stored locally in the browser, not synchronized between devices. Export JSON backups regularly. The route is a heuristic, not a guaranteed fastest solution; game updates may change faction rewards. Verify actual achievements and quest access before acting. Do not post personal exports or backups in public issues.

## Development and feedback

The app is standalone HTML, CSS and JavaScript. `main` is the production branch; use `develop` for changes and pull requests for review. Update the changelog for user-facing changes. Report bugs or propose features through [Issues](https://github.com/lachadan/everquest-legends-race-unlock-companion/issues/new/choose).

## Credits and license

Faction unlock reference: [Alanna's Race Unlock Guide](https://eqlwiki.com/User:Alanna/Alanna%27s_Race_Unlock_Guide). This is an unofficial community utility, not affiliated with the game's publisher. See [LICENSE](LICENSE) for repository licensing.
