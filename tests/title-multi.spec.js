const {test, expect} = require('@playwright/test')

const casos=[
    {name:"Caso 1",url:'https://example.com', esperado:"Example Domain"},
    {name:"Caso 2",url:'https://example.com', esperado: /Example/},
    {name:"Caso 3",url:'https://www.google.com', esperado:"Google"}
];

for(const {name,url,esperado} of casos){
    test(`valida el titulo correcto en ${name}`, async({page}) => {

        await page.goto(url);
        await sleep(3000)
        await expect(page).toHaveTitle(esperado);
    }); 


}
function sleep (time){
    return new Promise((resolve)=> setTimeout(resolve, time));
    }