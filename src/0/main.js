window.addEventListener('load', (event) => {
    const KEY = 'test-key';
    const VALUE = 'test-value';
//    Cookies.get(); // {k:v, k:v, ...}
    let v = Cookies.get(KEY);
    if (!v) { Cookies.set(KEY, VALUE); }
//    Cookies.set(KEY, VALUE, {expires: 1, path: ''}); // expires: 保存期間（日）、path: 有効にするパス
//    Cookies.remove(KEY); // undefined
    console.log(KEY, v);
    alert(`${KEY}=${v}`);
});
