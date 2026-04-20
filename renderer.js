let tabs = [];
let active = -1;

const view = document.getElementById("view");
const start = document.getElementById("start");
const browser = document.getElementById("browser");
const tabsDiv = document.getElementById("tabs");
const input = document.getElementById("url");

function newTab(url = "") {
  const tab = { history: [], index: -1, title: "New Tab" };
  tabs.push(tab);
  active = tabs.length - 1;

  if (url) loadTab(active, url);
  renderTabs();
}

function loadTab(i, url) {
  const t = tabs[i];
  t.history.push(url);
  t.index++;

  view.src = url;
  start.style.display = "none";
  browser.style.display = "block";
}

function goStart() {
  let v = document.getElementById("startInput").value;
  if (!v) return;

  v = "https://duckduckgo.com/?q=" + encodeURIComponent(v);
  newTab(v);
}

function renderTabs() {
  tabsDiv.innerHTML = "";

  tabs.forEach((t, i) => {
    const el = document.createElement("div");
    el.className = "tab " + (i === active ? "active" : "");

    const title = document.createElement("span");
    title.textContent = t.title;

    const close = document.createElement("span");
    close.textContent = " ✕";

    close.onclick = (e) => {
      e.stopPropagation();
      tabs.splice(i, 1);
      active = 0;
      renderTabs();
    };

    el.onclick = () => switchTab(i);

    el.appendChild(title);
    el.appendChild(close);
    tabsDiv.appendChild(el);
  });
}

function switchTab(i) {
  active = i;
  view.src = tabs[i].history[tabs[i].index];
}

function back() {
  const t = tabs[active];
  if (t.index > 0) {
    t.index--;
    view.src = t.history[t.index];
  }
}

function forward() {
  const t = tabs[active];
  if (t.index < t.history.length - 1) {
    t.index++;
    view.src = t.history[t.index];
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

view.addEventListener("page-title-updated", (e) => {
  if (active === -1) return;
  tabs[active].title = e.title;
  renderTabs();
});
