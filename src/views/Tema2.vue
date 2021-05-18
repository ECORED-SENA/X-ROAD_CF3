<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2 
      .h3 Generalidades de la tecnología X-Road
    
    .titulo-segundo
      #t_2_1.h4 2.1 Características de X-Road
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6
        .list.mb-5
          .list__item
              .list__item__bulletNumber
          .list__txt    
            p.mb-2.m-top Instituto Nórdico para Soluciones de Interoperabilidad – NIIS

            | Tecnología central desarrollada por el Instituto Nórdico para soluciones de Interoperabilidad – NIIS (Nordic Institute for Interoperability Solutions).

        .list
          .list__item
              .list__item__bulletNumber
          .list__txt    
            p.mb-2.m-top Seguridad, confidencialidad, integridad y autenticidad.
            | X-Road garantiza a #[strong confidencialidad] e #[strong integridad] de los datos intercambiados.

      .col-lg-4
        img.img-a(src="@/assets/curso/tema_2/img_1.png")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6
        .list.mb-3
          .list__item
              .list__item__bulletNumber
          .list__txt    
            p.mb-2.m-top Más Características  

        ol.lista-ol.ms-4
          li 
            span.text-bold 1. 
            | Arquitectura distribuida.
          li 
            span.text-bold 2. 
            | Gestión de direcciones y enrutamiento.
          li 
            span.text-bold 3. 
            | Gestión de derechos de acceso.
          li 
            span.text-bold 4. 
            | Cifrado
          li 
            span.text-bold 5. 
            | Registros de mensajes.
          li 
            span.text-bold 6. 
            | Balanceo de Carga.
          li 
            span.text-bold 7. 
            | Federación de confianza. 

      .col-lg-4
        img.img-a(src="@/assets/curso/tema_2/img_2.png")

    .titulo-segundo.mb-5
      #t_2_2.h4 2.2 Ecosistema X-Road

    img.img-a(src="@/assets/curso/tema_2/img_3.svg")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
