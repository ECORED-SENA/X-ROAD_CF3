<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4 
      .h3 Para potenciar los Servicios Ciudadanos Digitales.
    
    .titulo-segundo.mb-5
      #t_4_1.h4 4.1 Implementación de X-Road a Nivel Mundial a 2020

    .row.mb-5
      .col-lg-8
        img.mb-5.img-a(src="@/assets/curso/tema_4/img_1.png")
        .tarjeta.tarjeta.morada.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Mapa interactivo
            .col-auto
              a.boton.boton--b(:href="obtenerLink('https://x-road.global/xroad-world-map')" target="_blank")
                span Enlace Web
                i.fas.fa-link
      .col-lg-4
        .list.mb-3
          .list__item.h4
            .list__item.fas.fa-star.span.list_1
          .list__txt    
            h5.my-0.txt_color_1.p-2 Azul Oscuro
            p.txt_color_1 X-Road implementado 
            p.txt_color_1 (miembro del NIIS).
        .list.mb-3
          .list__item.h4
            .list__item.fas.fa-star.span.list_4
          .list__txt    
            h5.my-0.txt_color_2.p-2 Azul Claro
            p X-Road implementado  
            p (socio del NIIS).
        .list.mb-3
          .list__item.h3
            .list__item.fas.fa-map-marker-alt.span.list_5
          .list__txt    
            h5.my-0.txt_color_3.p-2 Verde
            p X-Road implementado.
        .list.mb-3
          .list__item.h3
            .list__item.fas.fa-map-marker-alt.span.list_6
          .list__txt    
            h5.my-0.txt_color_4.p-2 Amarillo
            p Fase de consulta o planificación.
            
    .titulo-segundo.mb-5
      #t_4_2.h4 4.2 Implementación en Colombia

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        img.img-a(src="@/assets/curso/tema_4/img_2.png")
      .col-lg-6
        LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")

    
    .titulo-segundo.mb-5
      #t_4_3.h4 4.3  Plataforma de Interoperabilidad - PDI

    p.mb-5
      strong La Plataforma de Interoperabilidad – PDI es un conjunto de herramientas, que permiten que los sistemas de información del Estado, interactúen entre sí mediante interfaces estándar de comunicación, entre procesos y sistemas de información.

    .row.justify-content-center
      .col-lg-5.mb-3
        p.mb-3.txt_color_5
          strong Componente 3
        p.mb-3
          strong Directorio de Servicios
        p Herramienta que permite la #[strong publicación de la información general, semántica y técnica] de servicios de intercambio de información dispuestos por las autoridades y disponibles en la PDI que cumplen con los lineamientos del Marco de Interoperabilidad para Gobierno Digital.
        img.d-none.d-lg-block.img-a(src="@/assets/curso/tema_4/img_3.png")

    .row.justify-content-center
      .col-lg-3.td_color_2.p-4.mb-3
        p.mb-3.txt_color_5
          strong Componente 2

        p.mb-3
          strong Adaptador

        p Componente opcional que las entidades pueden utilizar de manera independiente con el propósito de servir como intermediario en la exposición y consumo de servicios entre los sistemas de información de las entidades y el servidor X-Road instalado.
          

      .col-lg-6.mb-3
        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            img.img-a(src="@/assets/curso/tema_4/img_7.png")
          .col-lg-8
            .tabla-b__header.td_color_1
              .h6.mb-0 DIRECTORIO DE SERVICIOS
            table.td_color_2
              tr.text-center
                td 
                  img.img-a(src="@/assets/curso/tema_4/img_4.png")
                  | Adaptador para el 
                  br
                  | consumo y exposición 
                  br
                  | de servicios web: 
                  br
                  | REST - SOAP
                td
                  img.img-a(src="@/assets/curso/tema_4/img_5.png")
                  | Lenguaje común de 
                  br
                  |intercambio de 
                  br
                  |información
            .tabla-b__header.td_color_1
              .h6.mb-0
                img.img-a(src="@/assets/curso/tema_4/img_6.png")
          .col-lg-2.d-none.d-lg-block
            img.img-a(src="@/assets/curso/tema_4/img_7.png")
      .col-lg-3.td_color_2.p-4.mb-3
        p.mb-3.txt_color_5
          strong Componente 4
        p.mb-3
          strong Lenguaje Común de Intercambio de Información.
        p #[strong Estándar nacional] definido y administrado por #[strong MinTIC] en el cual se describen los conceptos y sintaxis de los elementos de datos que componen el conjunto de datos a intercambiar entre las autoridades.
    
    .row.justify-content-center.mb-5
      .col-lg-5.mb-3
        img.mb-2.d-none.d-lg-block.img-a(src="@/assets/curso/tema_4/img_9.png")
        p.mb-3.txt_color_5
          strong Componente 1
        p.mb-3
          strong X-Road.
        p Componente base de la plataforma que se encarga de habilitar las capacidades para realizar el #[strong intercambio seguro de datos], de manera distribuida, con un tráfico de datos cifrados con estampa cronológica de tiempo.    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosLineaTiempoA: [
      {
        ano: '2019',
        titulo: 'Publicación',
        texto:
          '​Publicación de la nueva versión de la guía para la construcción del <strong>Plan Estratégico de Tecnologías</strong> de la Información en las entidades públicas <strong>(PETI)</strong>.',
      },
      {
        ano: '2019',
        titulo: 'Colombia',
        texto:
          'Elección de <strong>X-Road</strong> como plataforma de Interoperabilidad para los <strong>Servicios Ciudadanos Digitales</strong>.',
      },
      {
        ano: '2019, 2020',
        titulo: 'Inicio en Colombia',
        texto: 'Primeras implementaciones en el país.',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
