"use strict";

// Espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la referencia al elemento de cuenta regresiva
    var countdownElement = document.getElementById('cuenta');

    // Configura la cuenta regresiva con las opciones optimizadas
    simplyCountdown(countdownElement, {
        year: 2024,
        month: 1,
        day: 30,
        hours: 8,
        minutes: 2,
        seconds: 50,
        words: {
            days: { singular: 'Día', plural: 'Días' },
            hours: { singular: 'Hora', plural: 'Horas' },
            minutes: { singular: 'Minuto', plural: 'Minutos' },
            seconds: { singular: 'Segundo', plural: 'Segundos' }
        },
        plural: true,
        inline: false,
        inlineClass: 'simply-countdown-inline',
        enableUtc: false,
        // Callback al finalizar la cuenta regresiva
        onEnd: function() {
            // Oculta el elemento con el ID 'portada'
            document.getElementById('portada').classList.add('oculta');
        },
        refresh: 5000, // Actualiza cada 5 segundos en lugar de cada segundo
        sectionClass: 'simply-section',
        amountClass: 'simply-amount',
        wordClass: 'simply-word',
        zeroPad: false,
        countUp: false
    });
});
