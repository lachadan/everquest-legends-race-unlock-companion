# Development roadmap

## v3.0 foundation

- [x] General-purpose application without bundled player standings.
- [x] Documentation and contribution templates.
- [ ] Verify browser behavior with synthetic exports and backup restores.
- [ ] Publish GitHub release.

## v3.1 proposed: public usability

- Logo and favicon; onboarding and in-app help.
- Example faction export and clearer missing-data indicators.
- Feedback links and accessible mobile layout.
- Version notification with graceful offline behavior.

## Later candidates

- Multiple character profiles with isolated achievements and backups.
- Configurable route priorities and alternative-method selection.
- Automated tests for faction calculations, import validation and persistence.
- Optional light theme.

Priorities and versions are proposals, not delivery commitments. Use GitHub issues to discuss changes. Develop on `develop`, review via pull request into `main`, and update CHANGELOG.md with every user-facing change. Validate fresh start, import errors, faction loss warnings, manual completion, backup/restore and deployment before tagging a release.
