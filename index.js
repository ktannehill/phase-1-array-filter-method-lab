const findMatching = function(driversArr, str) {
    let driversMatch = driversArr.filter(driver => {
        return driver.toLowerCase().indexOf(str.toLowerCase()) > -1
    })
    return driversMatch
}

// const redToys = toys.filter(function (toy) { 
    // 	return toy.toLowerCase().indexOf('red')  
    // 		> -1; 
    // }); 
    
const fuzzyMatch = function(driversArr, subStr) {
    let driversMatch = driversArr.filter(driver => {
        return driver.toLowerCase().indexOf(subStr.toLowerCase()) === 0
    })
    return driversMatch
}

const matchName = function(driversArr, str) {
    let driversMatch = driversArr.filter(driver => {
        return driver["name"] === str
    })
    return driversMatch
}



