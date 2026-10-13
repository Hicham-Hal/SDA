const map = new Map()


map.set('js', 3)
map.set('py', 2)


console.log(map.get('js'))
map.get('py')

map.delete('js')

console.log(map.size)


for(const [key, value] of map){
    console.log(key, value)
}