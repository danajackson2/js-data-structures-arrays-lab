let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}

function appendDriver(name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    let newArr = drivers.slice(0, drivers.length-1);
    return newArr
}

function removeFirstDriver(){
    let newArr = drivers.slice(1);
    return newArr
}