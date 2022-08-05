obj1 = {a:12, b:new Date()};
console.log(obj1)
obj2 = obj1
console.log(obj2)
obj2.b = 72
console.log(obj1, obj2)

obj1 = {a:12}
console.log(obj1['a'])

console.log(JSON.stringify(obj1))

cadena = '{"a":12}'
console.log(JSON.parse(cadena), cadena)

console.log(JSON.stringify(obj1))