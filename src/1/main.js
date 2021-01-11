import CookieTest from './CookieTest.js';
window.addEventListener('load', (event) => {
    let cookieTest = new CookieTest();
    cookieTest.gets();
    cookieTest.get();
    cookieTest.set();
//    cookieTest.remove();

    // ログの内容をulタグに出力する
    const ul = document.createElement('ul');
    for (const log of cookieTest.logs) {
        const li = document.createElement('li');
        li.innerHTML = log;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    
});
