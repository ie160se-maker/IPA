const sectionsRoot = document.getElementById('sectionsRoot');
const quickNav = document.getElementById('quickNav');
const audioStatus = document.getElementById('audioStatus');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildSection(section) {
  const cards = section.itemIds
    .map((id, index) => buildCard(IPA_ITEMS[id], section.badgeClass, `${section.id}-${index}`))
    .join('');

  return `
    <section class="section-block" id="${section.id}">
      <div class="section-head">
        <span class="badge ${section.badgeClass}">${escapeHtml(section.badge)}</span>
        <h2 class="section-title">${escapeHtml(section.title)}</h2>
        <span class="section-subtitle">${escapeHtml(section.subtitle)}</span>
      </div>
      <div class="ipa-grid">${cards}</div>
    </section>
  `;
}

function buildCard(item, badgeClass, domId) {
  const words = item.words.map((word, index) => `
    <button
      class="word-chip"
      type="button"
      data-audio-path="${getWordAudioPath(item, word, index)}"
      data-label="${escapeHtml(word.word)}"
    >
      <span class="word-text">${escapeHtml(word.word)}</span>
      <span class="word-ipa">${escapeHtml(word.ipa)}</span>
      <span class="word-meaning">${escapeHtml(word.meaning)}</span>
    </button>
  `).join('');

  return `
    <article class="ipa-card ${badgeClass}" id="${domId}" tabindex="0" role="button" aria-expanded="false">
      <div class="card-head">
        <div>
          <div class="symbol">${item.symbol}</div>
          <div class="reading">${escapeHtml(item.reading)}</div>
          <div class="hint">${escapeHtml(item.hint)}</div>
        </div>
        <button
          class="play-btn"
          type="button"
          aria-label="${escapeHtml(item.symbol)} の単音再生"
          data-audio-path="${getIpaAudioPath(item)}"
          data-label="${escapeHtml(item.symbol)}"
        >▶</button>
      </div>
      <div class="expand">
        <div class="tip-box">
          <div class="tip-label">Pronunciation Tip</div>
          <p class="tip-text">${escapeHtml(item.tip)}</p>
        </div>
        <div class="words-label">例単語（クリックで再生）</div>
        <div class="word-list">${words}</div>
      </div>
    </article>
  `;
}

function renderQuickNav() {
  quickNav.innerHTML = IPA_SECTIONS.map(section => `
    <a class="nav-link" href="#${section.id}">${escapeHtml(section.title)}</a>
  `).join('');
}

function renderSections() {
  sectionsRoot.innerHTML = IPA_SECTIONS.map(buildSection).join('');
}

function bindCardEvents() {
  document.querySelectorAll('.ipa-card').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('.play-btn') || event.target.closest('.word-chip')) return;
      toggleCard(card);
    });

    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard(card);
      }
    });
  });

  document.querySelectorAll('.play-btn, .word-chip').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      playAudio(button.dataset.audioPath, button.dataset.label);
    });
  });
}

function toggleCard(card) {
  const isOpening = !card.classList.contains('expanded');
  card.classList.toggle('expanded', isOpening);
  card.setAttribute('aria-expanded', String(isOpening));

  if (isOpening) {
    const playBtn = card.querySelector('.play-btn');
    if (playBtn) {
      playAudio(playBtn.dataset.audioPath, playBtn.dataset.label);
    }
  }
}

function getIpaAudioPath(item) {
  return `assets/audio/ipa/${item.audioId}/ipa-single.mp3`;
}

function getWordAudioPath(item, word, index) {
  const order = String(index + 1).padStart(2, '0');
  return `assets/audio/ipa/${item.audioId}/word-${order}-${word.slug}.mp3`;
}

function playAudio(path, label) {
  const audio = new Audio(path);

  audio.addEventListener('canplaythrough', () => {
    setAudioStatus(`再生: ${label} → ${path}`);
  }, { once: true });

  audio.addEventListener('error', () => {
    const message = `音声ファイル未設定: ${path}`;
    console.warn(message);
    setAudioStatus(`未設定: ${label} → ${path}`);
  }, { once: true });

  audio.play().catch(() => {
    const message = `再生できませんでした。音声を配置してください: ${path}`;
    console.warn(message);
    setAudioStatus(`未設定: ${label} → ${path}`);
  });
}

function setAudioStatus(message) {
  if (audioStatus) audioStatus.textContent = message;
}

function init() {
  renderQuickNav();
  renderSections();
  bindCardEvents();
}

init();