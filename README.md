# Donate — Support ILIVIR3

A single-page donation hub for **ILIVIR3**: pick a payment method, copy the wallet address (or scan its QR code), and send — peer-to-peer, no signup, no tracking.

- **Live site:** https://donate-iv.pages.dev/
- **Languages:** English + Persian, with an in-page toggle (full RTL support).

## Coins

| Coin | Network | Address |
|---|---|---|
| Bitcoin (BTC) | Native SegWit | `bc1qu280unm2432jxhufgekg88hu62pyg28dpfhw4m` |
| BNB | BSC (BEP20) | `0xe4f0c80ab473ef3680cee8b78b8f7bfc071fb6dd` |
| Tether (USDT) | TRC20 | `TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s` |
| TRON (TRX) | TRC20 | `TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s` |

⚠️ **Always match the network on the card.** Sending on the wrong network causes irreversible loss of funds.

## Features

- Copy-to-clipboard wallet addresses with toast confirmation
- QR code modal per coin (via api.qrserver.com), with an explorer link to verify the address
- Always-visible network warning + a 4-step how-to guide
- "What your support funds" section: open-source Telegram bots, Proxiv3 free proxies, Prime Skill
- Responsive, dark cosmic theme, `prefers-reduced-motion` respected, Escape closes the modal

## Architecture

The site is static (no build step, no backend), but split so new donation methods can be added without touching the page shell:

```
index.html              Page shell: nav, hero, section containers, footer
assets/css/style.css    Theme + component styles (fonts, cards, modal, toast)
assets/js/data.js       ALL content: i18n strings, coins, PAYMENT_SECTIONS registry
assets/js/app.js        Rendering + interactions only (no payment data)
LICENSE                 MIT
```

- **Data lives in one place** (`assets/js/data.js`): the `coins` array, the `enData` / `faData` language dicts, and the `PAYMENT_SECTIONS` registry that lists every donation section in display order.
- **Sections are rendered by kind.** Each entry in `PAYMENT_SECTIONS` has an `id`, a `kind`, and `methods`. `app.js` picks a renderer per kind:
  - `wallets` — copyable address + QR modal (used by the crypto section today)
  - `links` — outbound link card: title, text, button (for future non-crypto methods)
- **Adding a section never means editing `index.html`**: add the section's data + strings in `data.js`, and add a renderer in `app.js` only if the new kind needs one. Existing sections are never removed to add a new one.

## Adding a new donation method

1. **A new coin (crypto):** add one entry to the `coins` array in `assets/js/data.js` (`id`, `name`, `symbol`, `network`, `address`, `explorerUrl`, colors). Nothing else changes.
2. **A new non-crypto section:** add its title strings to `enData.sections` / `faData.sections`, add its methods to `data.js`, and append one entry to `PAYMENT_SECTIONS`, e.g. `{ id: "cards", kind: "links", methods: [...] }` with methods shaped `{ id, icon, title, text, url, cta }`.
3. **A brand-new kind:** add a `renderXxx` function in `assets/js/app.js` and register it in `SECTION_RENDERERS`. Keep the card look consistent with the existing ones.
4. Check the page locally (open `index.html`), verify the new section renders in both languages, then commit.

⚠️ **Wallet addresses change only with the owner's say-so** — they are live donation wallets. If one ever changes, update it in `assets/js/data.js` and in the table above, in the same commit.

## Deploy

Static only: serve the repo root from any static host (Cloudflare Pages, GitHub Pages, Vercel). No build, no secrets, no backend. The live site is served from this repo's `main` branch.

## License

MIT
