import { Testimonial } from '../models/Testimoniales.js';


const guardarTestimonial = async (req, res) => {

    // Validar

    const { nombre, correo, mensaje } = req.body;

    console.log(req.body)

    // Creamos un arreglo para validar todos los campos

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'})
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    // Comprobamos que al menos haya un mensaj 
    if (errores.length > 0) {

        // Consultar testimoniales existentes en la db

        const testimoniales = await Testimonial.findAll();

        // mostrar la vista con erroes
        res.render('testimoniales', {
            pagina: 'Testimoniales', //Nuevamente el nombre de pagina 
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }
    
    else {
        // Almacenarlo en la base de datos
        await Testimonial.create({
            nombre,
            correo,
            mensaje
            //id: Date.now()
        });

        res.redirect('/testimoniales');
        try {
            
        } catch (error) {
            console.log(error)
            console.log('error')
        }

    }


}

export {
    guardarTestimonial
}