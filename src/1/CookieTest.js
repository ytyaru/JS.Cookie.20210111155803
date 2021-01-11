export default class CookieTest {
    constructor() {
        this.KEY = 'test-key';
        this.VALUE = 'test-value';
        this.logs = [];
    }
    get Key() { return this.KEY; }
    get Value() { return Cookies.get(this.KEY); }
    get Logs() { return this.logs; }
    gets() {
        this.#logging('Gets the all Cookies.');
        const cookies = Cookies.get();
        for (const key in cookies) {
            this.#logging(`  ${key}=${cookies[key]}`);
        }
    }
    get() {
        const v = Cookies.get(this.KEY); // 指定したキーが未定義のときはundefined
        this.#logging(`Get the Cookie: ${this.KEY}=${v}`);
    }
    set() {
        const v = this.Value;
        if (undefined != v && v != this.VALUE) { // キーが存在し、かつ値が既存Cookie値と異なるなら保存する
            Cookies.set(this.KEY, this.VALUE, {expires: 7}); // Cookies.set(KEY, VALUE, {expires: 1, path: ''}); // expires: 保存期間（日）、path: 有効にするパス
            this.#logging('Set!!');
        }
        this.#logging(`Set the Cookie: ${this.KEY}=${this.VALUE}`);
    }
    remove() {
        if (this.Value) { Cookies.remove(this.KEY); }
        this.#logging(`Remove the Cookie: ${KEY}`);
    }
    #logging(msg) {
        console.log(msg);
        this.logs.push(msg);
    }
}
