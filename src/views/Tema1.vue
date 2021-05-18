<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1 
      .h3 Generalidades - Breve historia de la tecnología X-Road
      

    .titulo-segundo
      #t_1_1.h4 1.1 ¿Qué es X-Road?

    p.mb-3 X-Road es una capa de intercambio de datos distribuidos que proporciona una forma estandarizada y segura de producir y consumir servicios.

    p.mb-5 Adicionalmente, garantiza la confidencialidad, integridad e interoperabilidad entre las partes de intercambio de datos.

    .card_colo1.p-4.mb-5
      img.img-a(src="@/assets/curso/tema_1/img_2.png")


    .row.justify-content-center
      .col-12      
        div.img-c
          img.mt-4.img-a(src="@/assets/curso/tema_1/img_1.png")

    p.mb-5 #[strong X-Road] se lanza bajo licencia de código abierto del MIT y está disponible de forma gratuita.

    .titulo-segundo
      #t_1_2.h4 1.2 Un poco de historia

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        img.img-a(src="@/assets/curso/tema_1/img_3.png")
      .col-lg-6
        LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")

    .titulo-segundo.mb-5
      #t_1_3.h4 1.3 ¿Cómo funciona X-Road?

    .row
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.mb-3(src='@/assets/curso/tema_1/img_5.svg' alt='AvatarTop')
          .tarjeta.color-secundario.p-4
            .h4.text-center Capa intermedia
            p Funciona como una #[strong capa intermedia] entre los sistemas de información que intercambian información (proveedores y consumidores).

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.mb-3(src='@/assets/curso/tema_1/img_4.svg' alt='AvatarTop')
          .tarjeta.color-secundario.p-4
            .h4.text-center Confianza
            p La comunicación dentro de X-Road se basa en la #[strong Confianza:] las entidades con certificados digitales válidos pueden intercambiar datos.

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.mb-3(src='@/assets/curso/tema_1/img_6.svg' alt='AvatarTop')
          .tarjeta.color-secundario.p-4
            .h4.text-center Acceso a los servicios
            p Las entidades involucradas en el intercambio de información, definen las #[strong restricciones de acceso] a sus datos.
    
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosLineaTiempoA: [
      {
        ano: '1997',
        texto: 'Primer lanzamiento de X-Road en Estonia.',
      },
      {
        ano: '2015',
        texto: 'Utilizado en Finlandia.',
      },
      {
        ano: '2016',
        texto: 'Código fuente completo publicado.',
      },
      {
        ano: '2018',
        texto:
          'Las instancias nacionales de X-Road de Estonia y Finlandia se unieron para permitir servicios transfronterizos.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
