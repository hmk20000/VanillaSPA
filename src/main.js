import Component from './core/Components.js';
import MainPage from './page/mainPage.jsx';
import LoginPage from './page/loginPage.jsx';
import ProfilePage from './page/profilePage.jsx';
import ErrorPage from './page/ErrorPage.jsx';
import ErrorBoundary from './page/ErrorBoundary.jsx';

class App extends Component {
  setup(){
    localStorage.clear();
    window.addEventListener('popstate', this.mounted);
    window.addEventListener('error', (e)=>{
      this.$target.innerHTML = '';
      new ErrorBoundary(this.$target, {error: e.error});
    });
    document.addEventListener('click', (e)=>{
      if(e.target.tagName === 'A'){
        e.preventDefault();
        window.history.pushState({}, '', e.target.href);
        this.mounted();
      }
    });
  }
  
  template() {
    return `<div id="main"></div>`;
  }

  mounted() {
    const path = window.location.pathname;
    const user = localStorage.getItem('user');
    switch(path){
      case '/':
      case '/main':
        new MainPage(this.$target);
        break;
      case '/login':
        if(!user){
          new LoginPage(this.$target);
          break;
        }
        window.history.replaceState({}, '', '/main');
        window.dispatchEvent(new PopStateEvent('popstate'));
        break;
      case '/logout':
        localStorage.removeItem('user');
        window.history.replaceState({}, '', '/main');
        window.dispatchEvent(new PopStateEvent('popstate'));
        break;
      case '/profile':
        if(!user){
          window.history.replaceState({}, '', '/login');
          window.dispatchEvent(new PopStateEvent('popstate'));
          break;
        }
        new ProfilePage(this.$target);
        break;
      default:
        new ErrorPage(this.$target);
    };
  }
}


new App();


// // 문자열을 Virtual DOM 노드로 변환하는 함수
// function parseToVNode(htmlString) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, "text/html");
//   return convertElementToVNode(doc.body);
// }

// // DOM Element를 재귀적으로 Virtual DOM으로 변환하는 함수
// function convertElementToVNode(element) {
//   if (element.nodeType === Node.TEXT_NODE) {
//     return element.textContent.trim() ? element.textContent : null;
//   }

//   const vnode = {
//     type: element.tagName.toLowerCase(),
//     props: {},
//     children: []
//   };

//   // 속성 추가
//   Array.from(element.attributes).forEach(attr => {
//     vnode.props[attr.name] = attr.value;
//   });

//   // 자식 요소 처리
//   Array.from(element.childNodes).forEach(child => {
//     const childVNode = convertElementToVNode(child);
//     if (childVNode) vnode.children.push(childVNode);
//   });

//   return vnode;
// }

// // Virtual DOM을 실제 DOM으로 렌더링하는 함수
// function render(vnode) {
//   if (typeof vnode === "string") {
//     return document.createTextNode(vnode);
//   }

//   const element = document.createElement(vnode.type);
//   for (const [key, value] of Object.entries(vnode.props)) {
//     element.setAttribute(key, value);
//   }

//   vnode.children.forEach(childVNode => {
//     element.appendChild(render(childVNode));
//   });

//   return element;
// }

// document.addEventListener('click', (e)=>{
//   e.preventDefault();
//   window.history.pushState({}, '', e.target.href);
//   renderPage();
// });

// const renderPage = ()=>{
//   const vnode = parseToVNode(selectPage());
//   const root = document.querySelector('#root');
//   root.innerHTML = '';
//   root.appendChild(render(vnode));
// }



// window.addEventListener('popstate', renderPage);
// // window.addEventListener('DOMContentLoaded', renderPage);
// window.addEventListener('load', renderPage);
