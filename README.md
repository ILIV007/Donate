# Donate — Support ILIVIR3

A single-page crypto donation hub for **ILIVIR3**: pick a coin, copy the wallet address (or scan its QR code), and send — peer-to-peer, no signup, no tracking.

- **Live site:** connect this repo to Cloudflare Pages (static, no build step). The `iliv007-donate.pages.dev` address did not resolve on 2026-11-12 — verify the Pages project name before sharing the link.
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

## Files

```
index.html   The whole site — markup, Tailwind via CDN, and all logic in one file
LICENSE      MIT
```

## Deploy

Static only: serve `index.html` from any static host (Cloudflare Pages, GitHub Pages, Vercel). No build, no secrets, no backend. Wallet addresses live in the `coins` array at the top of the `<script>` block in `index.html` — if an address ever changes, update it there (and in the table above).

## License

MIT
