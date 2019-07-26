// const {Builder, By, Key, until} = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
 
// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
  
//     await driver.get('https://www.facebook.com/anh.do.9440234');
//     // await driver.findElement(By.name('email')).sendKeys('mediancom126@gmail.com', Key.RETURN);
//     // await driver.findElement(By.name('pass')).sendKeys('@nhlatoihihi123456789101113', Key.RETURN);
//     await driver.wait(until.titleIs('Facebook'));
//     await driver.findElement(By.name("mercurymessages")).click();
//     await driver.findElement(By.id("u_0_f")).click();
//     // await driver.wait(until.titleIs('Messenger'));
//     // var name = await driver.findElement(By.css("._58al ._7tpc")).sendKeys('linh nguyen');
//     // name.sendKeys(Key.ENTER)
//    //await driver.findElement(By.css("._58al")).sendKeys(Key.ENTER);
//     //await driver.findElement(By.css("div._5rpb:nth-child(2) > div:nth-child(1)")).sendKeys('hello huuu', Key.RETURN);
//     await driver.findElement(By.css(".hiddenInput")).sendKeys('linh nguyen',Key.RETURN);

// })();

const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'));
  } finally {
    await driver
  }
})();
 
