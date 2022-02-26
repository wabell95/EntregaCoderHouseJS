
 const btn = document.getElementById("boton-comprar");

 btn.addEventListener('click', () => {
     swal({
         title: 'Genial',
         text: 'Tu producto se ha añadido al carrito',
         icon: 'success',
         confirm: 'Ok',
         timer: 1000
     })
 })


 const btn2 = document.getElementById("boton-eliminar");

 btn2.addEventListener('click', () => {
     swal({
         title: '¿Esta seguro de eliminar el producto?',
         icon: 'warning',
         buttons: true,
         dangerMode: true,
     }).then((result) => {
         if (result) {
             swal({
                 title: 'Borrado',
                 icon: 'success',
                 text: 'El producto ha sido borrado con éxito'
             })
         }
     })
 })




 const btn3 = document.getElementById("boton-click");

 btn3.addEventListener('click', () => {

     Toastify({
         text: "Probando toast!",
         duration: 3000
     }).showToast();
 })

 btn3.addEventListener('click', () => {

     Toastify({
         text: "Probando toast!",
         duration: 3000,
         gravity: 'top',
         position: 'left',
         style: {
             background: 'linear-gradient(to right, #00b09b, #96c92d)'
         }
     }).showToast();
 })


 btn3.addEventListener('click', () => {

     Toastify({
         text: "Probando toast!",
         duration: 3000,
         onClick: () => {

             Toastify({
                 text: "Probando toast!",
                 duration: 3000,
                 position: 'left'
             }).showToast();
         }
     }).showToast();
 })


 btn3.addEventListener('click', () => {

     Toastify({
         text: "Cliack para ir a coder!",
         duration: 3000,
         destination: 'https://www.coderhouse.com/'
     }).showToast();
 })

 const DateTime = luxon.DateTime;

 const dt = DateTime.now()

 console.log(dt.zoneName)
 console.log(dt.daysInMonth)
 console.log(dt.year)
 console.log(dt.day)
 console.log(dt.second)
 console.log(dt.weekday)