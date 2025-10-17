const poemas = {
  domingo: [
    "Hoy no le pido nada a Dios, solo le agradezco por ti.",
    "Tu risa es mi bendición dominical.",
    "Si el amor tiene rostro, el tuyo es mi fe.",
    "Hoy el cielo se parece a ti: suave, brillante, eterno.",
    "Eres mi paz, incluso cuando el mundo no lo es.",
    "Contigo, cada domingo es sagrado.",
    "Tu amor es mi descanso favorito.",
    "Hoy quiero que el tiempo se detenga contigo.",
    "Eres mi domingo perfecto, sin planes, solo tú.",
    "Mi fe tiene tu nombre."
  ],
  lunes: [
    "Hoy el sol no brilla solo, brilla contigo.",
    "Tu fuerza me inspira a empezar de nuevo.",
    "Eres mi razón para creer que los lunes pueden ser dulces.",
    "Si el día pesa, tu amor lo aligera.",
    "Contigo, hasta el lunes tiene magia.",
    "Tu voz es mi café emocional.",
    "Eres mi inicio favorito.",
    "Hoy quiero comenzar contigo.",
    "Tu amor es mi agenda secreta.",
    "Mi lunes empieza cuando tú apareces."
  ],
  martes: [
    "Tu mirada me reinicia el alma.",
    "Hoy no quiero correr, quiero caminar contigo.",
    "Eres mi calma en medio del ruido.",
    "Si el mundo se detiene, que sea en tu sonrisa.",
    "Tu amor es mi brújula, incluso en martes.",
    "Contigo, cada martes tiene sentido.",
    "Tu ternura me da dirección.",
    "Hoy quiero que el tiempo se rinda ante ti.",
    "Eres mi martes favorito.",
    "Tu amor hace que todo valga la pena."
  ],
  miércoles: [
    "Hoy no empezó con el sol, empezó contigo.",
    "Tu voz me acompaña como canción suave.",
    "Eres mi mitad favorita de la semana.",
    "Si hay rutina, tú la haces poesía.",
    "Mi miércoles tiene nombre: tú.",
    "Tu amor es mi pausa perfecta.",
    "Hoy quiero que el mundo se detenga en tu abrazo.",
    "Eres mi miércoles sin prisa.",
    "Tu ternura es mi descanso semanal.",
    "Contigo, hasta el miércoles se siente como domingo."
  ],
  jueves: [
    "No descanso porque sea jueves, descanso porque tú existes.",
    "Tu amor me reinicia mejor que cualquier café.",
    "Eres mi promesa de que todo va a estar bien.",
    "Hoy te pienso como sol de jueves.",
    "Si el tiempo corre, que corra hacia ti.",
    "Tu voz es mi refugio semanal.",
    "Eres mi jueves con propósito.",
    "Hoy quiero que el amor se quede a vivir.",
    "Tu ternura es mi mejor rutina.",
    "Contigo, cada jueves es bendición."
  ],
  viernes: [
    "Si me ves sonriendo sin motivo, es mentira. El motivo eres tú.",
    "Tu amor es mi fin de semana anticipado.",
    "Eres mi alegría sin horario.",
    "Hoy quiero bailar contigo, aunque sea en mi mente.",
    "Mi viernes empieza cuando tú apareces.",
    "Tu ternura es mi descanso emocional.",
    "Eres mi viernes favorito.",
    "Hoy quiero que el mundo se rinda ante tu risa.",
    "Tu amor es mi mejor plan.",
    "Contigo, cada viernes es celebración."
  ],
  sábado: [
    "Hoy no te escribo con tinta, te escribo con ganas.",
    "Tu amor es mi descanso favorito.",
    "Eres mi sábado perfecto, sin planes, solo tú.",
    "Si el mundo se apaga, tú me enciendes.",
    "Hoy quiero que el tiempo se detenga contigo.",
    "Tu ternura es mi mejor sábado.",
    "Eres mi plan sin agenda.",
    "Hoy quiero que el amor sea eterno.",
    "Contigo, cada sábado es poesía.",
    "Tu risa es mi mejor descanso."
  ]
};

const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const hoy = new Date();
const diaNombre = dias[hoy.getDay()];

// Recuperar progreso desde localStorage
let progreso = JSON.parse(localStorage.getItem("progresoPoemas")) || {
  domingo: [],
  lunes: [],
  martes: [],
  miércoles: [],
  jueves: [],
  viernes: [],
  sábado: []
};

// Obtener lista de poemas disponibles para hoy
const disponibles = poemas[diaNombre].filter((_, i) => !progreso[diaNombre].includes(i));

// Si ya se mostraron todos, reiniciar
if (disponibles.length === 0) {
  progreso[diaNombre] = [];
}

// Elegir poema al azar entre los disponibles
const nuevosDisponibles = poemas[diaNombre].filter((_, i) => !progreso[diaNombre].includes(i));
const indiceAleatorio = Math.floor(Math.random() * nuevosDisponibles.length);
const poemaElegido = nuevosDisponibles[indiceAleatorio];

// Obtener índice real del poema elegido
const indiceReal = poemas[diaNombre].indexOf(poemaElegido);

// Mostrar poema
document.getElementById("fecha").innerText = `Poema para el ${diaNombre}`;
document.getElementById("poema-dia").innerText = poemaElegido;

// Guardar progreso
progreso[diaNombre].push(indiceReal);
localStorage.setItem("progresoPoemas", JSON.stringify(progreso));
