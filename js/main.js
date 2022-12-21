var gaenabled = window.localStorage.getItem("ga");
if (gaenabled == "false") {
  script("Skipped GA injection because it is disabled by the user.");
} else {
  const gascript = document.createElement("script");
  gascript.setAttribute("async", "");
  gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-TREXYT1HKX");
  const inlinegascript = document.createElement("script");
  inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TREXYT1HKX');`;
  document.head.append(gascript, inlinegascript);
}


function addCss(){
  const e = document.createElement('style');
  e.innerHTML = `.back-home {
    width: 50px;
    height: 50px;
    text-align: center;
    background: #fff;
    box-shadow: 0px 1px 0px 1px #cadbfb;
    border-radius: 12px;
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 99999;
    border: 1px solid #CADBFB;
    cursor: pointer;
    opacity: .7;
}`;  
  document.getElementsByTagName('head')[0].appendChild(e);
}

function addBtnHome(){
  var e = document.createElement('div');
  e.innerHTML = `<div class="back-home" title="BackHome"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icon_home">
<path id="Vector" d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.27"></path>
<g id="Union">
<path d="M9.78945 14.2254C8.99705 14.2254 8.35468 14.8677 8.35468 15.6601C8.35468 16.4525 8.99705 17.0949 9.78945 17.0949H13.6062C14.3986 17.0949 15.041 16.4525 15.041 15.6601C15.041 14.8677 14.3986 14.2254 13.6062 14.2254H9.78945Z" fill="#FF73A9"></path>
<path d="M11.1037 2.3144C11.6277 1.8952 12.3723 1.8952 12.8963 2.3144L22.4615 9.96654C23.0802 10.4616 23.1806 11.3644 22.6855 11.9832C22.1905 12.602 21.2876 12.7023 20.6689 12.2073L20.6087 12.1591V20.6152C20.609 20.6275 20.6091 20.6398 20.6091 20.6521C20.6091 21.4445 19.9667 22.0869 19.1743 22.0869H4.82659C4.03418 22.0869 3.39135 21.4445 3.39135 20.6521V12.1591L3.33113 12.2073C2.71236 12.7023 1.80947 12.602 1.31446 11.9832C0.819446 11.3644 0.919767 10.4616 1.53853 9.96654L11.1037 2.3144ZM17.7391 9.86347L12 5.27218L6.2609 9.86347V19.2173H17.7391V9.86347Z" fill="#FF73A9"></path>
</g>
</g>
</svg>`;
  document.getElementsByTagName('body')[0].appendChild(e);
}

window.addEventListener('load', function() {
  addCss();
  addBtnHome();
  var btn = document.getElementById("back-home");
  btn.addEventListener("click", returnHome);    
});

function returnHome(){
  if(window.hold == true){
    return;
  }
  location.href = "https://ubg247.github.io";
}