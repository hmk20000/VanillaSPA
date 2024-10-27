import Component from './core/Components.js';
// import MainPage from './page/mainPage.jsx';
class App extends Component {
  
  template() {
    return `
    <div id="root">dd</div>    
    `;
  }

  setEvent() {

  }
}

function createElement(node){
  if(typeof node === 'string'){
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.type);
  node.children.forEach(child => {
    $el.appendChild(createElement(child));
  });
  return $el;
}

document.querySelector('#root').appendChild(createElement(<div id="app"><App/></div>));

// import dom,{notexist} from './dom.js';

// const selectPage = ()=>{
//   const path = window.location.pathname;  
//   switch(path){
//     case '/':
//     case '/main.html':      
//       return dom.main;
//     case '/login':
//       return dom.login;
//     case '/profile.html':
//     case '/profile':
//       const user = localStorage.getItem('user');
//       if(!user){
//         return dom.profile;
//       } 
//       window.history.pushState({}, '', '/login');
//       return dom.login;
//     default:
//       return notexist;
//   }
// }

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
