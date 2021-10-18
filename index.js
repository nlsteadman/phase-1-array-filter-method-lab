function findMatching (drivers, driver){
    return drivers.filter(function(el){
        return el.toLowerCase() === driver.toLowerCase();
    })
}

function fuzzyMatch (drivers, driver){
    return drivers.filter(function(letter){
        return letter.toLowerCase().startsWith(driver.toLowerCase())
    })
}

function matchName (drivers, driver){
    return drivers.filter(function(hometown){
        return hometown.name === driver
        })
}