document.addEventListener('DOMContentLoaded', function () {
    const props = [
        { name: 'CONTROL', icono: 'path/to/control.png', ruta: '/control' },
        { name: 'ADMIN', icono: 'path/to/admin.png', ruta: '/admin' },
        { name: 'VACACIONES', icono: 'path/to/vacaciones.png', ruta: '/vacaciones' },
        { name: 'CIBER', icono: 'path/to/ciber.png', ruta: '/ciber' },
        { name: 'TECNICO', icono: 'path/to/tecnico.png', ruta: '/tecnico' }
    ];

    const angle = 360 / props.length;
    let rotOffset = 0;

    if (props.length % 2 !== 0) {
        switch (props.length) {
            case 3: rotOffset = -30; break;
            case 5: rotOffset = -17.5; break;
            case 7: rotOffset = -13; break;
            case 9: rotOffset = -9.5; break;
            case 11: rotOffset = -7.75; break;
        }
    }

    const ulElement = document.querySelector('.innerwrapper ul');
    props.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.transform = `rotate(${(angle * index) + rotOffset}deg) skew(${90 - angle}deg)`;

        const a = document.createElement('a');
        a.href = item.ruta;
        a.style.transform = `skew(${(90 - angle) < 0 ? Math.abs(90 - angle) : -(90 - angle)}deg) rotate(-${90 - angle / 2}deg)`;

        const span = document.createElement('span');
        span.textContent = item.name;
        if ((angle * index) >= 180) {
            span.style.transform = 'rotate(180deg)';
        }

        const img = document.createElement('img');
        img.src = item.icono;
        img.alt = item.name;
        if ((angle * index) >= 180) {
            img.style.transform = 'rotate(180deg)';
        }

        a.appendChild(span);
        a.appendChild(img);
        li.appendChild(a);
        ulElement.appendChild(li);
    });

    document.querySelector('.botonFichaje').addEventListener('click', function () {
        // Implement your fichar logic here
        console.log('Fichar button clicked');
    });
});
