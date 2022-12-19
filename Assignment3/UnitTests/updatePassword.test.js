const { handleChangePassword } = require('../../client/src/components/shop/dashboardUser/Action');

test('Update Password Failure Test', async() => {
    var mockFData = {};

    var mockSetFData = (data) => {
        expect(data.error).toBe('Please provide your all password and a new password');
    };

    var mockDispatch = () => {};

    await handleChangePassword(mockFData, mockSetFData, mockDispatch);

    mockFData = {
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
    };

    var mockSetFData = (data) => {
        expect(data.error).toBe('Please provide your all password and a new password');
    };

    await handleChangePassword(mockFData, mockSetFData, mockDispatch);

    mockFData = {
        newPassword: 'hashir',
        oldPassword: 'hashir',
        confirmPassword: 'sss',
    };

    var mockSetFData = (data) => {
        expect(data.error).toBe("Password does't match");
    };

    await handleChangePassword(mockFData, mockSetFData, mockDispatch);

    mockFData = {
        newPassword: 'hashir',
        oldPassword: 'hashirs',
        confirmPassword: 'hashir',
    };

    var mockSetFData = (data) => {
        expect(data.error).toBe("Password does't match");
    };
});