import { Viaje } from "../models/Viaje.js";
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = async (req, res) => { // req - lo que envimaos : res - lo que express nos responde
    //res.json({id: 1});
    //res.render();
    //res.send('Hola Mundo! Inicio');


    // Consultar 3 viajes del modelo viaje 

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push( Testimonial.findAll({ limit: 3}) )

    try {
        // Si es una sola una consulta base de datos se puede utilizar de esta manera
        // pero no se recomienda utilizar dos await ya que el utlimo await tendria que esperar el resultado
        // del primero por lo tanto el performance baja

        /* 
        const viajes = await Viaje.findAll({ limit: 3 });
        const testimoniales = await Testimonial.findAll({ limit: 3}) */

        // OPCION CORRETA PARA DOS AWAIT: 
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio', // creamos una objeto donde lo utilizaremos en nuestra principal
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
        
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res)=> { // req - lo que envimaos : res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { // req - lo que envimaos : res - lo que express nos responde
    
    // Consultar BD

    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

const paginaTestimonios = async (req, res)=> { // req - lo que envimaos : res - lo que express nos responde
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

// Muestra un viaje por su slug

const paginaDetalleViajes = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViajes
}