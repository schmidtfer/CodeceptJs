Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', 'fernanda@bol.com.br')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)
}).tag('sucesso');

//posso não passar o email que ele tmb da como erro.
Scenario('login com email inválido',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
});

Scenario('login com senha inválida',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user', 'fernanda@bol.com.br')
    I.fillField('#password', ' ')
    I.click('#btnLogin')
    I.waitForText('Senha inválida',5)
}).tag('@senhaInvalida');

