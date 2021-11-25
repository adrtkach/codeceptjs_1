Feature('Login');

Scenario('Login success2fully', ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'standard_user')
    I.fillField('Password', 'secret_sauce')
    I.click('Login')
    I.see('PRODUCTS', '.header_secondary_container')


});
