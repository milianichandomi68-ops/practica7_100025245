/* ============================================================
   Práctica 7 — Introducción a JavaScript
   Programación de Aplicaciones Web · LSC · UNACH
   ============================================================ */

/* — a) Variables y salida — */
document.getElementById('btnDatos').addEventListener('click', function () {
  const nombre   = 'Miliani Karley Chandomi Palacios';
  const matricula = '100025245';
  const carrera  = 'Licenciatura en Sistemas Computacionales';
  const semestre = 5;

  const parDatos = document.getElementById('parDatos');
  parDatos.textContent = `Alumno: ${nombre} — Matrícula: ${matricula} — Carrera: ${carrera} — Semestre: ${semestre}`;

  console.log('Datos mostrados:', { nombre, matricula, carrera, semestre });
});

/* — b) Calculadora de calificaciones — */
document.getElementById('btnCalc').addEventListener('click', function () {
  const p1 = parseFloat(document.getElementById('p1').value);
  const p2 = parseFloat(document.getElementById('p2').value);
  const p3 = parseFloat(document.getElementById('p3').value);

  if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
    alert('Por favor ingresa los tres parciales.');
    return;
  }

  const promedio = (p1 + p2 + p3) / 3;
  const parCalc  = document.getElementById('parCalc');

  console.log('Promedio calculado:', promedio.toFixed(2));

  if (promedio >= 70) {
    parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Aprobado ✓`;
    parCalc.style.color = '#198754';
  } else {
    parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado ✗`;
    parCalc.style.color = '#DC3545';
  }
});

/* — c) Lista dinámica — */
document.getElementById('btnAgregar').addEventListener('click', function () {
  const valor = document.getElementById('inputItem').value.trim();
  if (valor === '') return;

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = valor;
  document.getElementById('miLista').appendChild(li);
  document.getElementById('inputItem').value = '';
  console.log('Elemento agregado:', valor);
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
  document.getElementById('miLista').innerHTML = '';
  console.log('Lista limpiada');
});

/* — d) Cambio de estilos — */
const botonesColor = document.querySelectorAll('.btn-color');
const seccionEstilos = document.getElementById('sec-estilos');

botonesColor.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const color = btn.dataset.color;
    seccionEstilos.style.backgroundColor = '#' + color;
  });
});

document.getElementById('btnReset').addEventListener('click', function () {
  seccionEstilos.style.backgroundColor = '';
});
