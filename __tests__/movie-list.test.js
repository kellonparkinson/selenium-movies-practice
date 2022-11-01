// start with the boiler plate code

const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// input the function(s) you want to test
const {addMovie} = require('../functions/addMovie')

// add the beforeAll and afterAll
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// test
test('add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(5000)
})