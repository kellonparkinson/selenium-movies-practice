// import By
const {By} = require('selenium-webdriver')

// create the function
const addMovie = async (driver) => {
    // first, select the input field
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    // select the 'add' button
    await driver.findElement(By.xpath('//button')).click()

    // find the new <li> element because we want to check if the user-input was added to the list
    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    // expect this to be true
    expect(displayed).toBeTruthy()
}

module.exports = {
    addMovie
}