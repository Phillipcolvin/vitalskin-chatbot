
// Flujo base para chatbot dermatológico Vital Skin (JavaScript pseudoestructura - adaptado para imitar un dermatólogo estético + cosmetólogo clínico)

const VISION_API_KEY = "AIzaSyCHw2RtvXDVJs5sQogK3ZeYis_Mgauy0Sg";
const visionEndpoint = "https://vision.googleapis.com/v1/images:annotate?key=" + VISION_API_KEY;

const conocimientoClinico = {
  ingredientes: {
    niacinamida: {
      propiedades: ["antiinflamatorio", "regulador de sebo", "refuerza barrera cutánea"],
      contraindicaciones: ["uso combinado con ácido ascórbico en pieles sensibles"],
      uso: "2 veces al día en rostro limpio antes de la crema hidratante"
    },
    retinol: {
      propiedades: ["antienvejecimiento", "renovador celular"],
      contraindicaciones: ["embarazo", "rosácea activa", "piel muy sensibilizada"],
      uso: "solo noche, con piel seca post limpieza, seguido de crema hidratante"
    }
  },
  condiciones: {
    acne: {
      preguntasClave: [
        "¿Tienes lesiones activas inflamadas o sólo comedones?",
        "¿Has usado productos con ácido salicílico antes?",
        "¿Estás bajo tratamiento médico dermatológico?"
      ],
      enfoque: "Controlar sebo, reducir inflamación y prevenir marcas."
    },
    rosacea: {
      preguntasClave: [
        "¿Sientes ardor, picor o enrojecimiento constante?",
        "¿Usas productos para piel sensible actualmente?"
      ],
      enfoque: "Minimizar la irritación, fortalecer la barrera y evitar factores agresivos."
    }
  }
};

async function buscarProductoDisponible(nombreProducto) {
  const response = await fetch(`https://vitalskin.cl/api/products?title=${encodeURIComponent(nombreProducto)}`);
  const data = await response.json();
  const disponibles = data.products.filter(p => p.available === true);
  return disponibles.length > 0 ? disponibles[0] : null;
}

async function analizarImagen(base64Image) {
  const response = await fetch(visionEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      requests: [
        {
          image: { content: base64Image },
          features: [
            { type: "LABEL_DETECTION", maxResults: 5 },
            { type: "FACE_DETECTION" }
          ]
        }
      ]
    })
  });
  const result = await response.json();
  return result.responses[0];
}

function guardarFeedback(valoracion, comentario) {
  const payload = {
    rating: valoracion,
    feedback: comentario,
    fecha: new Date().toISOString()
  };
  fetch("https://api.vitalskin.cl/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

const nodoSatisfaccion = {
  mensaje: "¿Te resultó útil mi ayuda? Valórame de 1 a 5 ⭐ y deja un comentario si deseas.",
  accion: guardarFeedback
};

const flujoChatbot = {
  sugerirProducto: {
    mensaje: "Estoy revisando si tenemos disponible ese producto...",
    accion: async (contexto) => {
      const producto = await buscarProductoDisponible(contexto.nombre);
      return producto
        ? { mensaje: `Sí, está disponible: ${producto.title} - ${producto.price} CLP. Puedes comprarlo aquí: ${producto.url}` }
        : { mensaje: "Actualmente no tenemos stock disponible, pero puedo sugerirte una alternativa. ¿Deseas verla?" };
    }
  },
  satisfaccion: nodoSatisfaccion
};

module.exports = { flujoChatbot, conocimientoClinico, buscarProductoDisponible, guardarFeedback, analizarImagen };
