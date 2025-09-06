const {test, expect} = require('@playwright/test')
// abre la pagina example.com
test('valida el titulo exacto', async({page})=>{
    await page.goto('https://example.com/')
    await sleep(5000)

    //Verificacion de titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test('valida titulo con regex (contiene palabra)', async({page})=>{
    //Abre la pagina example.com
    await page.goto('https://example.com/')
    await sleep(5000)

    //Verificamos palabra
    await expect(page).toHaveTitle(/Example/);
})

function sleep (time){
    return new Promise((resolve)=> setTimeout(resolve, time));
}