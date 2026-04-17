let tabs = [];
let activeTab = 0;

const tabsDiv = document.getElementById('tabs');
const viewsDiv = document.getElementById('views');
const input = document.getElementById('url');

function newTab(url = "https://duckduckgo.com") {
  tabs.push(url);
  activeTab = tabs.length - 1;
  render();
}

function go() {
  let value = input.value.trim();

  if (!value.startsWith('http')) {
    value = 'https://duckduckgo.com/?q=' + encodeURIComponent(value);
  }

  tabs[activeTab] = value;
  render();
}

function render() {
  tabsDiv.innerHTML = '';
  viewsDiv.innerHTML = '';

  tabs.forEach((url, i) => {
    const tab = document.createElement('div');
    tab.className = 'tab ' + (i === activeTab ? 'active' : '');
    tab.innerText = 'Tab ' + (i + 1);

    tab.onclick = () => {
      activeTab = i;
      render();
    };

    tabsDiv.appendChild(tab);

    const view = document.createElement('webview');
    view.src = url;
    view.style.display = i === activeTab ? 'flex' : 'none';

    viewsDiv.appendChild(view);
  });

  input.value = tabs[activeTab] || '';
}

newTab();
