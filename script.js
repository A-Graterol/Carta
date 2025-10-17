<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cartas para Ti 💌</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="manifest" href="manifest.json" />
  <script>
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js");
    }
  </script>
</head>
<body>
  <h1>🌸 Cartas para Ti 🌸</h1>

  <div class="cita">
    <p>“Que te llame esposo, significa para mí eres algo más que lo que nadie ha sido en mi vida. Eres la única persona que he llamado así en lo que llevo de vida. Realmente te amo, te respeto y te daré tu lugar. Quiero algo bien contigo y quiero formar un hogar contigo con el favor de Dios. Te quiero para bien.”</p>
    <p class="voz">— “Usted va a ser mi esposo, dígalo y escríbalo, espero así sea.”</p>
  </div>

  <div class="poema">
    <div class="fecha">Carta desde mi corazón</div>
    <div class="contenido-carta">
      Hoy quiero escribirte no solo como quien ama, sino como quien admira.  
      Porque tú, amor mío, eres belleza viva.  
      Tus tatuajes son arte sobre piel,  
      cada uno cuenta una historia que quiero aprender con los dedos.  

      Y tus ojos… tus ojos son la perla más hermosa que he visto,  
      brillan como si el universo se hubiera escondido en ellos.  
      Me pierdo en su luz,  
      y me encuentro en tu mirada.  

      No hay día que no agradezca por ti,  
      por tu forma de ser, por tu fuerza, por tu ternura.  
      Eres mi poema favorito,  
      y esta página, mi forma de recordártelo cada día.
    </div>
  </div>

  <div class="poema">
    <div class="fecha" id="fecha"></div>
    <div id="poema-dia"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
