# User guide

## Start

Open the [live companion](https://lachadan.github.io/everquest-legends-race-unlock-companion/) or download `index.html` and open it in a modern browser. No installation or account is required. A new profile starts empty.

## Import faction standings

1. Obtain your game's faction TXT export.
2. Select the file using Import latest faction TXT.
3. Click Read File and wait for success feedback.

The file must be tab-separated with header `ID`, `Name`, `StandingValue`, `PointsToMax` in that order. Standings must be integers from -2000 to 2000; points to max must equal 2000 minus standing. Duplicate IDs are rejected. Missing factions are shown as unknown; a partial import cannot produce a complete plan. Reimport replaces standings, not confirmed achievements.

## Track unlocks

In Race dashboard, expand the Confirmed count to see required factions or quest steps. Verify achievements in game before checking them off. Mark a race unlocked separately. Race names link to Alanna's guide. A maximum standing is not itself proof that an achievement has been claimed.

## Plan grinding

Quick wins ranks known unconfirmed requirements by points or documented cycles. Alternative methods compares documented options for a selected faction; selection does not change the default route. The suggested route is a heuristic simulation, not a guaranteed fastest route. Read faction losses carefully, and bank actual achievements before damaging a required faction. The shopping list reflects the simulated route; enter owned quantities to calculate remaining items. Quest calculator shows independent requirements, not a combined plan. Confirm quest availability and game mechanics before spending resources.

## Save and restore

Progress is stored in your browser. Export backup downloads JSON; Restore backup loads a prior export (including compatible v2.4 exports). Recovery snapshots are stored locally before imports and restores. Export a separate backup before switching devices, browser profiles, URLs, or clearing site data. Do not publish your backup or personal faction export. Multiple characters are not supported in v3.0; importing another character into the same profile can retain the first character's confirmations.

## Troubleshoot

If a file is rejected, check the header, tabs, integer standings and duplicate IDs. If values are missing, reimport a complete export. If progress disappears, restore a previously downloaded backup. Report reproducible problems using the repository issue templates, with synthetic or redacted data only.
