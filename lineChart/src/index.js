import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Obtener el contexto del canvas donde se renderizará el gráfico
const ctx = document.getElementById('line-dev').getContext('2d');

//Opciones
const options = {
    type: 'pie',  // Tipo de gráfico ('bar', 'line', 'pie', etc.)
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],  // Etiquetas del eje X
        datasets: [{
            label: 'Ventas',
            data: [6, 4, 3, 5, 2, 3],  // Datos del gráfico
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1  // Grosor del borde de las barras
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  // Inicia el eje Y en 0
            }
        }
    }
}

// Crear el gráfico
const myChart = new Chart(ctx, options);


