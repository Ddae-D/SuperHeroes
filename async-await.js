//practica superheroes
const heroe = [
    {
        id:1,
        nombre:'Superman',
        edad:25
    },
    {
        id:2,
        nombre:'Batman',
        edad:35
    },
    {
        id:3,
        nombre:'Spiderman',
        edad:19
    },
    {
        id:4,
        nombre:'Chapulin colorado',
        edad:'desconocido'
    }
];
const habilidades = [
    {
        id:1,
        habilidad:
        {
            habilidad1:'Fuerza', 
            habilidad2:'velocidad',
            habilidad3:'rayos x',
            habilidad4:'volar',
            habilidad5:'vision de calor'
        }
    },
    {
        id:2,
        habilidad:
        {
            habilidad1:'Millonario', 
            habilidad2:'Fuerza hidraulica',
            habilidad3:'Batimovil',
            habilidad4:'Honor',
        }
    },
    {
        id:3,
        habilidad:
        {
            habilidad1:'Fuerza', 
            habilidad2:'velocidad',
            habilidad3:'telarania',
            habilidad4:'audaz'        }
    }
]

const getHeroe = ( id ) =>{
    return new Promise((resolve, reject)=>{
        const nameHeroe = heroe.find((h)=>h.id=== id);
        (nameHeroe)?resolve(nameHeroe.nombre):reject(`Superheroe no encontrado con id ${id}`);
    });
}
const getHabilidad = ( id )=>{
    return new Promise((resolve, reject)=>{
        const habilidad = habilidades.find((h) => h.id === id);
        (habilidad)?resolve(habilidad.habilidad):reject(`Habilidades no encontradas para el usuario con id ${id}`);
    });
}

const id = 1;

const getInfoSuperHeroe = async () =>{
    try {
        const heroe = await getHeroe (id);
        const habilidad = await getHabilidad (id);
        const arrayHabilidad = new Array();
        for(let hab in habilidad){
            arrayHabilidad.push(`${habilidad[hab]}`);
        }
        arrayHabilidad.join(',');
        return `El superheroe ${heroe} tiene las siguientes habilidades: ${arrayHabilidad}`;
    } catch (error) {
        throw error;
    }
}
getInfoSuperHeroe(id)
.then( info =>{
    //console.log('Todo bien');Ya no llevaria cuerpo nuestra info, ejemplo en except
    console.log(info);
}).catch(except =>console.log(except));
