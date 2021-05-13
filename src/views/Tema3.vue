<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 3 
      .h3 Estructura
    
    .titulo-segundo.mb-5
      #t_3_1.h4 3.1 Modelo organizacional

    img.mb-5.img-a(src="@/assets/curso/tema_3/img_1.svg")

    .h4.text-center.mb-5 X-ROAD ECOSYSTEM

    .row.justify-content-center
      .col-lg-4
        ol.lista-ol
          li 
            span.h4.span.list_1.m-top  1 
            .h4 Servicios de Confianza
        p.mb-3 Un ecosistema de X-Road en funcionamiento requiere dos tipos de servicios de confianza: 1) #[strong autoridad de estampado de tiempo] (TSA) y 2) #[strong autoridad de certificación] (CA).

        p.mb-3 Los proveedores de servicios de confianza son organizaciones que brindan estos servicios.

        p.mb-5 Los proveedores de servicios de confianza son #[strong entidades acreditadas] (terceros comerciales): para ambientes de producción; o el mismo Operador X-Road: para ambientes QA o pre-producción.

        img.img-a(src="@/assets/curso/tema_3/img_2.png")

      .col-lg-4
        ol.lista-ol
          li 
            span.h4.span.list_2.m-top  2 
            .h4 Operador X-Road

        p.mb-3 Como #[strong propietario] del ecosistema X-Road, el operador es responsable de todos los aspectos relacionados con las #[strong operaciones]. Las responsabilidades incluyen:

        ol.lista-ol.mb-3
          li 
            span.text-bold 1- 
            | Definir regulaciones y prácticas.
          li 
            span.text-bold 2- 
            | Aceptar nuevos miembros.
          li 
            span.text-bold 3- 
            | Brindar apoyo a los miembros.
          li 
            span.text-bold 4- 
            | Operar los componentes centrales del software X-Road.

        p En Colombia el propietario es el Ministerio de Tecnologías de la Información y las Comunicaciones - #[strong MinTIC], quien a través de la Agencia Nacional Digital - #[strong AND], realiza las labores de #[strong Articulador] del ecosistema.

      .col-lg-4
        ol.lista-ol
          li 
            span.h4.span.list_3.m-top 3 
            .h4 Miembros de  X-Road

        p.mb-3 Los #[strong miembros] de X-Road son #[strong organizaciones] (#[strong entidades públicas] o #[strong entidades privadas con funciones públicas]) que se han unido al ecosistema y #[strong producen] y/o #[strong consumen] servicios con otros miembros.

        p.mb-3 Una organización miembro puede ser un #[strong proveedor de servicios], un #[strong consumidor de servicios o ambos].

        p.mb-3 Las organizaciones pueden convertirse en miembros de un ecosistema completando el #[strong proceso de incorporación] definido por el #[strong articulador].

        p.mb-3 Además, los miembros deben tener #[strong acceso al componente técnico] que se requiere para intercambiar mensajes a través de X-Road, el servidor de seguridad.

    


    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
