Password Auditor

Aplicación web que audita la seguridad de contraseñas en tiempo real: evalúa su fortaleza, genera contraseñas seguras y verifica si han sido expuestas en filtraciones de datos conocidas — sin enviar nunca la contraseña real a ningún servidor.

Demo

🔗 Link a la demo en vivo (https://password-auditor-mauve.vercel.app)

Características


Evaluador de fortaleza: analiza longitud, variedad de caracteres y coincidencia con contraseñas comunes filtradas, mostrando una barra visual con clasificación (Débil / Regular / Fuerte).
Generador de contraseñas: crea contraseñas aleatorias seguras de 16 caracteres, combinando mayúsculas, minúsculas, números y símbolos.
Verificador de filtraciones: consulta la API de Have I Been Pwned para saber si una contraseña ha sido expuesta en brechas de seguridad reales, y cuántas veces.


Enfoque de seguridad: k-Anonymity

La contraseña nunca se envía a ningún servidor, ni siquiera en forma de hash completo:


La contraseña se convierte a un hash SHA-1 mediante la Web Crypto API del navegador.
El hash se divide en dos partes: los primeros 5 caracteres (prefix) y el resto (suffix).
Solo el prefix se envía a la API de HIBP.
La API responde con todos los hashes que comparten ese prefix (cientos de resultados).
La comparación del suffix ocurre localmente, en el navegador del usuario.


Este modelo (k-Anonymity) permite verificar una contraseña contra una base de datos de filtraciones sin que el servidor consultado pueda conocer la contraseña original en ningún momento.

Stack técnico

React (hooks: useState)
Vite como bundler y entorno de desarrollo
Web Crypto API (crypto.subtle.digest) para hashing SHA-1, sin librerías externas
Have I Been Pwned API (Pwned Passwords, modelo k-Anonymity)
CSS puro para estilos

Arquitectura

src/
  components/
    PasswordInput.jsx      # Input controlado de la contraseña
    StrengthMeter.jsx      # Evaluación visual de fortaleza
    PasswordGenerator.jsx  # Generador de contraseñas seguras
    BreachChecker.jsx      # Verificación contra la API de HIBP
  utils/
    strengthCalculator.js  # Lógica pura de puntaje de fortaleza
    passwordGenerator.js   # Lógica pura de generación aleatoria
    hashPassword.js        # Hashing SHA-1 con Web Crypto API
    checkPasswordBreach.js # Consulta a la API de HIBP (k-Anonymity)
  App.jsx                  # Estado central (lifting state up) y composición de componentes

La lógica de negocio (utils/) está separada de los componentes de presentación (components/), y el estado de la contraseña vive en App.jsx, compartido entre componentes mediante props (lifting state up).

Correr el proyecto localmente

bashgit clone https://github.com/Joesttar/password-auditor.git
cd password-auditor
npm install
npm run dev

Autor

Joe García — LinkedIn · GitHub