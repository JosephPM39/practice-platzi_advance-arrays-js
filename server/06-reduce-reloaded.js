const data = [1,3,2,3];

const res = data.reduce((sum, current) => {
    //Verificamos si el objeto contiene ya la propiedad que corresponda al elemento de esta iteración
    if(!sum[current]){
        //Si no lo posee, lo agregamos y lo inicializamos como primera aparición
        //Hacemos return para terminar esta iteración acá mismo regresando el resultado
        return {
            //Acá concatenamos el objecto anterios con el nuevo elemento
            ...sum,
            //Se pueden usar propiedades dinámicas para nombrarlas en objetos usando [`${value}`]
            [`${current}`]: 1
        }
    }
    //Si en caso la iteración no ha terminado porque la propiedad si existe en el objeto,
    //se considera que es duplicado, y simplemente le sumamos una aparición más
    sum[current] += 1
    //Retornamos el resultado
    return sum
}, {})

console.log('Resultado: ', res)