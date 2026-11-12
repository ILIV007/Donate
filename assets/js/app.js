/* Donate app — rendering + interactions. No payment data lives here;
   everything comes from data.js (PAYMENT_SECTIONS / i18n dicts). */

let currentLanguage = 'en';
let currentModalCoinId = null;

function renderWalletCard(coin, dict) {
  return `
        <div class="coin-card relative overflow-hidden rounded-2xl bg-[#0a1526]/50 backdrop-blur-md border border-slate-800/90 p-5 flex flex-col justify-between" style="border-top: 2px solid ${coin.themeColor};">
          <div>
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold shrink-0" style="color: ${coin.themeColor}; background-color: ${coin.themeColor}14; border: 1px solid ${coin.themeColor}33;">${coin.mark}</div>
              <div>
                <h3 class="font-bold text-white text-base tracking-wide leading-none">${coin.name} <span class="text-xs text-slate-500 font-normal">(${coin.symbol})</span></h3>
                <div class="flex items-center gap-1.5 mt-1.5">
                  <span class="text-[10px] text-slate-400 font-medium">${dict.networkLabel}:</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-bold" style="color: ${coin.themeColor}; background-color: ${coin.themeColor}14; border: 1px solid ${coin.themeColor}33;">${coin.network}</span>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <span class="block text-[11px] text-slate-500 mb-1.5 font-medium">${dict.addressLabel}:</span>
              <div class="bg-black/40 rounded-xl p-2.5 flex items-center justify-between gap-2 border border-slate-900/60">
                <span class="text-xs font-mono text-slate-300 truncate tracking-wider select-all">${coin.address}</span>
                <button onclick="copyAddress('${coin.address}')" class="text-[11px] px-3 py-1.5 rounded-lg border font-semibold cursor-pointer text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border-slate-700 hover:border-slate-600 shrink-0 transition-all">${dict.copyBtn}</button>
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <button onclick="openQrModal('${coin.id}')" class="flex-1 py-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-950 text-xs text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
              <span>${dict.showQr}</span>
            </button>
            <a href="${coin.explorerUrl}" target="_blank" rel="noopener" class="flex-1 py-2.5 rounded-xl bg-slate-950/50 hover:bg-slate-950 text-xs text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2">
              <span>${dict.explorerLink}</span>
              <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      `;
}
function renderLinkCard(method, dict) {
  return `
    <a href="${method.url}" target="_blank" rel="noopener" class="coin-card rounded-2xl bg-[#0a1526]/50 backdrop-blur-md border border-slate-800/90 p-5 flex gap-4 items-start">
      <div class="text-2xl shrink-0">${method.icon || "↗"}</div>
      <div>
        <h3 class="font-bold text-white text-base mb-1">${method.title}</h3>
        <p class="text-xs text-slate-400 leading-relaxed mb-3">${method.text}</p>
        <span class="text-xs font-semibold text-indigo-300">${method.cta || "Open ↗"}</span>
      </div>
    </a>
  `;
}

const SECTION_RENDERERS = { wallets: renderWalletCard, links: renderLinkCard };

function findMethod(id) {
  for (const section of PAYMENT_SECTIONS) {
    const found = section.methods.find(m => m.id === id);
    if (found) return found;
  }
  return null;
}


    function updateDOM() {
      const isFa = currentLanguage === 'fa';
      const dict = isFa ? faData : enData;

      document.documentElement.dir = isFa ? 'rtl' : 'ltr';
      document.documentElement.lang = currentLanguage;
      document.body.classList.toggle('farsi-mode', isFa);

      document.getElementById('app-title').textContent = dict.title;
      document.getElementById('app-subtitle').textContent = dict.subtitle;
      document.getElementById('lang-btn-text').textContent = isFa ? "English / EN" : "فارسی / FA";

      document.getElementById('funds-title').textContent = dict.fundsTitle;
      document.getElementById('funds-list').innerHTML = dict.fundsItems.map(item => `
        <div class="rounded-2xl bg-white/[0.03] border border-slate-800/80 p-5">
          <div class="text-2xl mb-3">${item.icon}</div>
          <h3 class="font-bold text-white text-sm mb-1.5">${item.title}</h3>
          <p class="text-xs text-slate-400 leading-relaxed">${item.text}</p>
        </div>
      `).join('');

      document.getElementById('warn-title').textContent = dict.warnTitle;
      document.getElementById('warn-text').textContent = dict.warnText;

      document.getElementById('accordion-title').textContent = dict.accTitle;
      document.getElementById('accordion-list').innerHTML = dict.accDesc.map((desc, i) => `
        <div class="rounded-2xl bg-white/[0.03] border border-slate-800/80 p-5">
          <h4 class="font-bold text-slate-100 text-sm flex items-center gap-2.5 mb-2">
            <span class="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[11px] font-extrabold flex items-center justify-center shrink-0">${i + 1}</span>
            <span>${desc.subtitle}</span>
          </h4>
          <p class="text-slate-400 text-xs leading-relaxed ps-8">${desc.text}</p>
        </div>
      `).join('');

      document.getElementById('payment-sections').innerHTML = PAYMENT_SECTIONS.map(section => {
        const renderer = SECTION_RENDERERS[section.kind];
        if (!renderer) return '';
        return `
        <section class="mb-12" data-section="${section.id}">
          <h3 class="text-sm font-bold tracking-wide text-slate-200 mb-4">${(dict.sections && dict.sections[section.id]) || section.id}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">${section.methods.map(m => renderer(m, dict)).join('')}</div>
        </section>`;
      }).join('');

      document.getElementById('footer-portal-text').textContent = `// ${dict.footerText} — ILIVIR3`;
      document.getElementById('footer-made-text').firstElementChild.textContent = dict.madeWithLove;

      if (currentModalCoinId) updateModalStrings();
    }

    function toggleLanguage() {
      currentLanguage = (currentLanguage === 'en') ? 'fa' : 'en';
      updateDOM();
    }

    function openQrModal(id) {
      currentModalCoinId = id;
      const coin = findMethod(id);
      if (!coin) return;
      const logo = document.getElementById('modal-coin-logo');
      logo.textContent = coin.mark;
      logo.style.color = coin.themeColor;
      document.getElementById('modal-coin-title').innerHTML = `${coin.name} <span class="text-[10px] text-slate-500 font-normal">(${coin.symbol})</span>`;
      document.getElementById('modal-coin-network').textContent = coin.network;
      document.getElementById('modal-wallet-address').textContent = coin.address;
      document.getElementById('modal-qr-image').src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${coin.address}&color=020617&bgcolor=ffffff`;
      document.getElementById('modal-explorer-link').href = coin.explorerUrl;
      updateModalStrings();
      document.getElementById('qr-modal').classList.remove('hidden');
    }

    function updateModalStrings() {
      const isFa = currentLanguage === 'fa';
      const dict = isFa ? faData : enData;
      document.getElementById('modal-scan-prompt').textContent = dict.scanPrompt;
      document.getElementById('modal-explorer-link').lastElementChild.textContent = dict.explorerLink;
      document.getElementById('modal-close-btn').textContent = dict.hideQr;
      document.getElementById('modal-copy-btn').textContent = dict.copyBtn;
    }

    function closeQrModal() {
      currentModalCoinId = null;
      document.getElementById('qr-modal').classList.add('hidden');
    }

    function copyAddress(address) {
      navigator.clipboard.writeText(address).then(showToast);
    }

    function copyModalAddress() {
      const address = document.getElementById('modal-wallet-address').textContent;
      navigator.clipboard.writeText(address).then(() => {
        const btn = document.getElementById('modal-copy-btn');
        const isFa = currentLanguage === 'fa';
        btn.textContent = isFa ? "کپی شد !" : "Copied!";
        btn.style.color = "#10b981";
        btn.style.borderColor = "rgba(16, 185, 129, 0.3)";
        setTimeout(() => {
          btn.textContent = isFa ? "کپی آدرس" : "Copy";
          btn.style.color = "";
          btn.style.borderColor = "";
        }, 1500);
        showToast();
      });
    }

    function showToast() {
      const toast = document.getElementById('toast');
      const isFa = currentLanguage === 'fa';
      document.getElementById('toast-text').textContent = isFa ? "آدرس با موفقیت کپی شد!" : "Wallet address copied successfully!";
      toast.classList.remove('translate-y-12', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.add('translate-y-12', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 2500);
    }

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeQrModal(); });
    updateDOM();
  