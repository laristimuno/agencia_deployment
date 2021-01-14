import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDetalleViajes } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimonios);
router.post('/testimoniales', guardarTestimonial);

export default router;