const { logout } = require('../../client/src/components/shop/dashboardUser/Action');
const { LocalStorageMock } = require('./Mocks/LocalStorageMock');

test('Logout User Test', () => {
    global.localStorage = new LocalStorageMock;

    var obj = {
        user: {
            _id: '273he239fj'
        }
    };

    localStorage.setItem("jwt", JSON.stringify(obj));
    localStorage.setItem("cart", JSON.stringify(obj));
    localStorage.setItem("wishList", JSON.stringify(obj));

    logout();

    expect(localStorage.getItem('jwt')).toBe(null);
    expect(localStorage.getItem('cart')).toBe(null);
    expect(localStorage.getItem('wishList')).toBe(null);
    expect(window.location.href).toBe('http://localhost/');
});