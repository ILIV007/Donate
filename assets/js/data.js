/* Donate data — the only file that changes when a payment method is added.
   To add a future section (non-crypto): append an entry to PAYMENT_SECTIONS
   with kind "links" and methods shaped { id, icon, title, text, url, cta }.
   Addresses below are live donation wallets — change only with the owner's say-so. */
const enData = {
      title: "Support ILIVIR3",
      subtitle: "Your support fuels open-source work and free tools for everyone. Thank you for being part of this. 🌀",
      accTitle: "How to donate",
      accDesc: [
        { subtitle: "1. Pick a coin & copy the address", text: "Choose your preferred cryptocurrency below. Click 'Copy' to grab the exact address, or tap 'Show QR Code' to scan it with your mobile wallet." },
        { subtitle: "2. Match the network", text: "Make sure your withdrawal network matches the network on the card — TRC20 for USDT and TRX, BSC (BEP20) for BNB. A wrong network causes irreversible loss of funds." },
        { subtitle: "3. Send & wait for confirmation", text: "Once sent, confirmation usually takes 1 to 3 minutes. Everything is peer-to-peer and decentralized — no signup, no personal details tracked." },
        { subtitle: "4. Mind exchange fees", text: "If you send from an exchange (Binance, KuCoin, Coinbase and others), check its minimum transfer limit and fees so the amount you send arrives in full." }
      ],
      fundsTitle: "What your support funds",
      fundsItems: [
        { icon: "🤖", title: "Open-source Telegram bots", text: "TradeAgent, IVAI and Fredy-admin — built in the open, free to use." },
        { icon: "🪼", title: "Proxiv3 free proxies", text: "Verified MTProto proxies, checked and published for everyone." },
        { icon: "✦", title: "Prime Skill", text: "A curated library of genuinely useful agent skills." }
      ],
      warnTitle: "Check the network before you send",
      warnText: "Sending on the wrong network causes irreversible loss of funds. USDT and TRX use TRC20; BNB uses BSC (BEP20).",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      showQr: "Show QR Code",
      hideQr: "Close",
      networkLabel: "Network",
      addressLabel: "Wallet Address",
      scanPrompt: "Scan this QR with your crypto wallet to send support safely.",
      footerText: "Decentralized Personal Support Portal",
      madeWithLove: "Designed with gratitude & respect for supporters",
      explorerLink: "Verify on Explorer",
      toastSuccess: "Address copied successfully!"
    };

    const faData = {
      title: "حمایت از ILIVIR3",
      subtitle: "حمایت شما سوخت کار متن‌باز و ابزارهای رایگان برای همه است. ممنون که همراهی. 🌀",
      accTitle: "چطور حمایت کنم؟",
      accDesc: [
        { subtitle: "۱. ارز را انتخاب و آدرس را کپی کنید", text: "ارز مورد نظر را از پایین انتخاب کنید، روی «کپی آدرس» بزنید یا با «نمایش کد QR» مستقیم با کیف پول موبایل اسکن کنید." },
        { subtitle: "۲. شبکه را درست تنظیم کنید", text: "شبکهٔ برداشت را دقیقاً مطابق کارت تنظیم کنید — TRC20 برای تتر و ترون، BSC (BEP20) برای بایننس‌کوین. شبکهٔ اشتباه باعث از دست رفتن همیشگی دارایی می‌شود." },
        { subtitle: "۳. ارسال و انتظار تایید", text: "بعد از ارسال معمولاً ۱ تا ۳ دقیقه طول می‌کشد تا در بلاکچین تایید شود. همه‌چیز همتابه‌همتا و غیرمتمرکز است — بدون ثبت‌نام و بدون ردیابی اطلاعات شخصی." },
        { subtitle: "۴. کارمزد صرافی را در نظر بگیرید", text: "اگر از صرافی ارسال می‌کنید (بایننس، کوکوین، کوین‌بیس و...)، حداقل مبلغ و کارمزد انتقال را چک کنید تا مبلغ کامل برسد." }
      ],
      fundsTitle: "حمایت شما چه چیزی را ممکن می‌کند",
      fundsItems: [
        { icon: "🤖", title: "بات‌های تلگرامی متن‌باز", text: "تریدایجنت، IVAI و فردی‌ادمین — ساخته‌شده در فضای باز، رایگان برای همه." },
        { icon: "🪼", title: "پروکسی‌های رایگان پروکسی‌وی‌تری", text: "پروکسی‌های MTProto تاییدشده که برای همه بررسی و منتشر می‌شوند." },
        { icon: "✦", title: "پرایم اسکیل", text: "مجموعه‌ای منتخب از مهارت‌های واقعاً کاربردی ایجنت‌ها." }
      ],
      warnTitle: "قبل از ارسال، شبکه را چک کنید",
      warnText: "ارسال با شبکهٔ اشتباه باعث از دست رفتن همیشگی دارایی می‌شود. تتر و ترون روی TRC20 و بایننس‌کوین روی BSC (BEP20) هستند.",
      copyBtn: "کپی آدرس",
      copiedBtn: "کپی شد !",
      showQr: "نمایش کد QR",
      hideQr: "بستن",
      networkLabel: "شبکه بلاکچین",
      addressLabel: "آدرس کیف پول",
      scanPrompt: "این کد QR را اسکن کنید تا آدرس مستقیماً فراخوانی شود.",
      footerText: "درگاه غیرمتمرکز حمایت‌های صمیمانه",
      madeWithLove: "طراحی شده با نهایت احترام و قدردانی برای حامیان عزیز",
      explorerLink: "مشاهده در بلاکچین",
      toastSuccess: "آدرس کیف پول با موفقیت کپی شد!"
    };

    const coins = [
      {
        id: "btc", name: "Bitcoin", symbol: "BTC", network: "Native SegWit",
        address: "bc1qu280unm2432jxhufgekg88hu62pyg28dpfhw4m",
        explorerUrl: "https://blockstream.info/address/bc1qu280unm2432jxhufgekg88hu62pyg28dpfhw4m",
        themeColor: "#f7931a", mark: "₿"
      },
      {
        id: "bnb", name: "BNB", symbol: "BNB", network: "BSC (BEP20)",
        address: "0xe4f0c80ab473ef3680cee8b78b8f7bfc071fb6dd",
        explorerUrl: "https://bscscan.com/address/0xe4f0c80ab473ef3680cee8b78b8f7bfc071fb6dd",
        themeColor: "#f3ba2f", mark: "◆"
      },
      {
        id: "usdt", name: "Tether", symbol: "USDT", network: "TRC20",
        address: "TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s",
        explorerUrl: "https://tronscan.org/#/address/TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s",
        themeColor: "#26a17b", mark: "₮"
      },
      {
        id: "trx", name: "TRON", symbol: "TRX", network: "TRC20",
        address: "TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s",
        explorerUrl: "https://tronscan.org/#/address/TCYgEojrmu5qvvHoFxEi21g8g7ZVtuC28s",
        themeColor: "#ef0027", mark: "▲"
      }
    ];
enData.sections = { crypto: "Cryptocurrency" };
faData.sections = { crypto: "ارز دیجیتال" };

/* Payment sections, rendered in order. Each section picks a renderer by kind:
   "wallets" -> copyable address + QR modal; "links" -> outbound link card. */
const PAYMENT_SECTIONS = [
  { id: "crypto", kind: "wallets", methods: coins }
];
