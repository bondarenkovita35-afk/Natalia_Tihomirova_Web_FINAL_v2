
const i18n = {
  sv: {
    role: "Teamledare",
    subtitle: "Teamledare / Lager & Logistik · Kandidat till Team Manager",
    nav_letter: "Personligt brev",
    nav_cv: "CV",
    download_cv: "Ladda ner CV (PDF)",
    open_letter: "Öppna personligt brev",
    sections: "Sektioner",
    back: "← Tillbaka",
    letter_title: "Personligt brev",
    letter_sub: "Egen sida (inte under CV). Växla språk med SV/EN.",
    download_letter: "Ladda ner brev (PDF)",
    studio_line: "Skapad professionellt av VS LiteCode Studio — klicka för att besöka."
  },
  en: {
    role: "Teamleader",
    subtitle: "Team Leader / Warehouse & Logistics · Team Manager candidate",
    nav_letter: "Personal Letter",
    nav_cv: "CV",
    download_cv: "Download CV (PDF)",
    open_letter: "Open personal letter",
    sections: "Sections",
    back: "← Back",
    letter_title: "Personal Letter",
    letter_sub: "Separate page (not under CV). Switch language with SV/EN.",
    download_letter: "Download letter (PDF)",
    studio_line: "Professionally created by VS LiteCode Studio — click to visit."
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll('[data-langblock]').forEach(block=>{
    block.classList.toggle('is-hidden', block.getAttribute('data-langblock') !== lang);
  });

  document.querySelectorAll('[data-set-lang]').forEach(btn=>{
    btn.classList.toggle('is-active', btn.getAttribute('data-set-lang') === lang);
  });

  localStorage.setItem('lang', lang);
}

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-set-lang]');
  if(!btn) return;
  setLang(btn.getAttribute('data-set-lang'));
});

setLang(localStorage.getItem('lang') || 'sv');
