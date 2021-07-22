<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Guía ambiental para el subsector avícola, FENAVI 2014

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema7.jpg", alt="Guía ambiental para el subsector avícola, FENAVI 2014")  

    p(data-aos="fade") Las guías ambientales se enmarcan dentro de la estrategia de generación de cultura de autogestión y autorregulación de la Política Nacional de Producción y Consumo Sostenible emitida en el año 2010, la cual, integra: la Política Nacional de Producción más Limpia y el Plan Nacional de Mercados Verdes.

    p.mb-4(data-aos="fade") Para profundizar en el aprendizaje puede acceder al siguiente documento

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema7-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Política Nacional de Producción y Consumo Sostenible
                  p.mb-0.text-small Es una estrategia del estado colombiano para promover el mejoramiento ambiental, la transformación productiva y la competitividad empresarial.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/Programa_y_consumo_sostenible/polit_nal_produccion_consumo_sostenible.pdf&sa=D&source=editors&ust=1626806256161000&usg=AOvVaw3YcS0dtqtE-Ot1r6PsmTaY')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p(data-aos="fade") Lo anterior, permite contribuir al mejoramiento productivo y ambiental de las granjas, incubadoras y plantas de beneficio del subsector avícola colombiano y ofrecer una herramienta de consulta permanente para este, a través de la adopción de medidas de prevención y control que ayuden a prevenir, mitigar, controlar y compensar el impacto ambiental que la producción avícola causa en el ambiente producto de sus actividades.

    Separador


    // 7.1
    #t_7_1.titulo-segundo(data-aos="fade-right")
      .h2 7.1. Medidas de prevención, mitigación, control y compensación

    p.mb-4(data-aos="fade") Las medidas de mitigación ambiental tienen por finalidad evitar o disminuir los efectos adversos de un proyecto o actividad, cualquiera sea su fase de ejecución. Estas se expresarán en un plan, el cual deberá considerar, por lo menos, una de las siguientes medidas:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.pasos-custom(tipo="n")
          .row
            .col-md-11.mb-4.mb-md-0
              p
                strong.etiqueta Las que impidan o eviten completamente el efecto adverso significativo, 
                | mediante la no ejecución de una obra o acción, o de alguna de sus partes.
          .row
            .col-md-11.mb-4.mb-md-0
              p
                strong.etiqueta Las que minimizan o disminuyen el efecto adverso significativo,
                | mediante una adecuada limitación o reducción de la magnitud o duración de la obra o acción, o de alguna de sus partes, o a través de la implementación de medidas específicas.
          .row
            .col-md-11.mb-4.mb-md-0
              p
                strong.etiqueta Las medidas de reparación y/o restauración 
                | tienen por finalidad reponer uno o más de los componentes o elementos del medio ambiente a una calidad similar a la que tenían con anterioridad al daño causado o, en caso de no ser ello posible, restablecer sus propiedades básicas. Dichas medidas se expresarán en un Plan de Medidas de Reparación y/o Restauración.
          .row
            .col-md-11.mb-5.mb-md-0
              p
                strong.etiqueta Las medidas de compensación ambiental 
                | tienen por finalidad producir o generar un efecto positivo alternativo y equivalente a un efecto adverso identificado. Dichas medidas se expresarán en un Plan de Medidas de Compensación, el que incluirá el reemplazo o sustitución de los recursos naturales o elementos del medio ambiente afectados, por otros de similares características, clase, naturaleza y calidad.

    p(data-aos="fade") Las dos últimas, sólo se llevarán a cabo en las áreas o lugares en que se presenten efectos adversos significativos que resulten de la ejecución o modificación de los planes de mitigación ambientales originales.

    p(data-aos="fade") Por otro lado, las medidas de mitigación están hechas para disminuir y soportar los efectos e impactos en el ambiente productos de la actividad avícola y todo lo que ella conlleva, es decir, el uso del suelo, el agua, el aire, ya sea en la elaboración o adecuación de la infraestructura, el transporte, la generación de residuos y disposición de los mismos, y como tal el manejo de la producción por parte de administrativos, operarios, profesionales y demás personal que interactúa en el proceso.

    p.mb-5(data-aos="fade") Si la aplicación y evaluación del impacto ambiental del proyecto o actividad se deduce en eventuales situaciones de riesgo al medio ambiente, el titular del proyecto o actividad deberá proponer medidas de prevención de riesgos y de control de accidentes, las cuales se mencionan en la siguiente figura:

    .row.justify-content-center.mb-5.text-center
      .col-lg-4
        .tarjeta.color-primario.p-4.h-100.text-noir
          figure
            img.h150.mb-5(src='@/assets/curso/tema7-1-tarjeta1.svg', alt='Medidas de prevención de riesgo')
          h4 Medidas de prevención de riesgo
          p Tienen por finalidad evitar que aparezcan efectos desfavorables en la población o en el medio ambiente.         

      .col-lg-4
        .tarjeta.color-acento-botones.p-4.h-100
          figure
            img.h150.mb-5(src='@/assets/curso/tema7-1-tarjeta2.svg', alt='Medidas de control de accidentes')
          h4 Medidas de control de accidentes
          p Tienen por finalidad permitir la intervención eficaz en los sucesos que alteren el desarrollo normal de un proyecto o actividad, en tanto puedan causar daños a la vida, a la salud humana o al medio ambiente.




    p(data-aos="fade") Desde este punto de vista está considerado el tema de salud y seguridad en el trabajo, pero además el de las poblaciones aledañas a las producciones, las cuales pueden ser impactadas por las actividades de producción en las granjas avícolas, demostrando que no sólo es importante el factor ambiental en terreno y recursos aprovechables, sino también en las poblaciones, ya sean estas internas o externas.

    p(data-aos="fade") En este orden de ideas, entre los factores o recursos que se deben tener en cuenta cuando se habla de la parte ambiental de todo tipo de actividad, proyecto o producción, están: el recurso del suelo, el agua y el aire, principalmente, porque son los que, de acuerdo a su manejo pueden derivar en impactos ambientales significativos y por eso los abordaremos más detalladamente a continuación.


    Separador

    // 7.2
    #t_7_2.titulo-segundo(data-aos="fade-right")
      .h2 7.2. Recurso suelo

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Para el recurso suelo, la mayoría de contaminación producida se da por el inadecuado manejo de la pollinaza y gallinaza, ósea cuando son utilizadas como productos de abono y no se les ha realizado ningún tipo de proceso que cumpla con los parámetros que se establecen para los abonos o fertilizantes orgánicos (véase la Norma Técnica Colombiana para Productos Orgánicos Usados como Abonos o Fertilizantes: NTC 5167 / ICONTEC y las Resoluciones ICA 150 de 2003 y 0968 de 2010).
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-2.png", alt="Recurso suelo")

    p.mb-5(data-aos="fade") Aplicar erróneamente abonos o fertilizantes orgánicos en el suelo pueden causar graves problemas a corto, mediano o largo plazo, como se menciona a continuación:


    h3 Recurso suelo

    p.mb-4(data-aos="fade") La aplicación inadecuada de productos químicos en el suelo puede producir cambios que alteran el balance de la tierra, estos pueden presentarse:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Acción mecánica del estiércol")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema7-2-tab1.jpg', alt='Acción mecánica del estiércol')
          .col-md-1
          .col-md-5
            h4 Acción mecánica del estiércol
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-atom
                | Consiste en el taponamiento de los poros del suelo colmatándolo y limitando la capacidad de drenaje de las aguas lluvias, causando con frecuencia inundaciones.
              li 
                i.fas.fa-atom
                | En un suelo anegado, el agua se convierte en un obstáculo para su oxigenación y da paso a la formación de zonas anaeróbicas donde prosperan microorganismos que producen gases como: el metano, el amoniaco y el gas sulfhídrico, alterando por completo la bioquímica del suelo.

      .py-3.py-md-4(titulo="El exceso de nutrientes")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema7-2-tab2.jpg', alt='El exceso de nutrientes')
          .col-md-1
          .col-md-5
            h4 El exceso de nutrientes
            p Los microorganismos a través de su acción química en el suelo convierte los componentes nitrogenados que se encuentran en la gallinaza o pollinaza en nitratos y nitritos, que normalmente ayudan a crecer el material vegetal, por lo que estos subproductos son utilizados con frecuencia para abonar, sin embargo, en concentraciones altas se convierten en componentes tóxicos afectando los suelos y aguas subterráneas.

      .py-3.py-md-4(titulo="La acción biológica")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema7-2-tab3.jpg', alt='La acción biológica')
          .col-md-1
          .col-md-5
            h4 La acción biológica
            p A causa de las acciones anteriores, se puede presentar la diseminación de patógenos procedentes de la gallinaza o pollinaza, que se propaguen debido a un ambiente propicio (por ejemplo E.coli).
                      
    p.mb-4(data-aos="fade") Adicionalmente hay que tener otras consideraciones, no menos importantes, tales como: si se trata de un residuo estabilizado y saneado, o no, revise la siguiente figura para conocer la diferencia de cada uno.

    .row.justify-content-center.mb-4
      .col-lg-9
        .row
          .col-lg-6
            .nav-holder2.align-items-center
              img(src="@/assets/curso/tema7-2-hover1.svg", alt="residuo fresco")
              .text.p-lg-3.p-4
                .row.px-lg-3.mb-lg-2
                  p.text-center Si es un 
                    strong residuo fresco 
                    | la generación de olores puede presentarse como un problema debido a que se incrementa la actividad microbiológica y con ella la rápida descomposición en el suelo, generando sustancias fito-tóxicas que elevan los contenidos de nitratos en material vegetal y origina lixiviados.
          .col-lg-6
            .nav-holder2.align-items-center(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src="@/assets/curso/tema7-2-hover2.svg", alt="residuo fresco")
              .text.p-lg-3.p-4
                .row.px-lg-3.mb-lg-2
                  p.text-center Si el 
                    strong residuo no ha sido previamente saneado
                    | , se favorecerá la diseminación de elementos patógenos propios de las producciones avícolas y que pueden estar presentes en las deyecciones de las aves, residuos de cascaras y otros residuos.

    p.mb-4(data-aos="fade") Por lo anterior, se debe llevar un adecuado plan de fertilización o acondicionamiento de suelos, el cual deberá contemplar las características fisicoquímicas y grado de estabilidad del producto que se piensa aplicar, así como las características del suelo (capacidad de drenaje, tipo de suelo, presencia de elementos mayores y menores) y las necesidades nutritivas de los cultivos a fertilizar.

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema7-2-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Política Nacional para la Gestión Integral Ambiental del Suelo
                  p.mb-0.text-small Para profundizar en el manejo de los recursos del suelo puede revisar el documento: Política Nacional para la gestión integral ambiental del suelo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://www.minambiente.gov.co/images/Atencion_y_particpacion_al_ciudadano/Consulta_Publica/Politica-de-gestion-integral-del-suelo.pdf&sa=D&source=editors&ust=1626811818406000&usg=AOvVaw3WD9Gyb8RPEwhfv8GQwPdZ')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download    

    p.mb-4(data-aos="fade") A continuación, se definen cuáles son las medidas de prevención, mitigación y/o control para el uso del suelo:

    SlyderF.bg-verde2.py-lg-5.px-lg-0.p-4(:datos="datosSlyder")

    Separador


    // 7.3
    #t_7_3.titulo-segundo(data-aos="fade-right")
      .h2 7.3. Recurso agua 

    .row.mb-5
      .col-lg-7.mb-4(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p El agua es el recurso básico para garantizar la vida de todos los seres vivos del planeta, solo superado por el oxígeno. Se necesita el agua para cualquier actividad metabólica o fisiológica en el cuerpo o función de las hormonas y enzimas, ayuda a transportar los nutrientes y los desechos en el cuerpo y significativamente reduce la temperatura corporal especialmente en climas cálidos. 
            p Es un nutriente relativamente barato, muy disponible y de fácil acceso, al cual a veces no se le da la importancia que realmente tiene. Por eso, cualquier disminución en la disponibilidad, calidad o temperatura del agua, definitivamente afecta al desempeño de las aves y afecta los procedimientos productivos en la industria.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-3.png", alt="Recurso agua")

    
    h3(data-aos="fade-right") Propiedades físico - químicas del agua

    .row.mb-5
      .col-lg-7.mb-4(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Desde el punto de vista físico, las propiedades o características del agua son: su densidad  que  es de 1g/cm3, amplio margen de temperaturas en fase líquida (0-100º C) ya que su punto de ebullición es a 100 °C a nivel del mar  y el de congelamiento es a 0ºC, constante dieléctrica elevada que permite que las disoluciones puedan conducir la electricidad y permite la disociación de la mayoría de las sales inorgánicas; elevado calor específico y calor de vaporización lo que causa que el calor liberado en reacciones bioquímicas exotérmicas sea fácilmente absorbido y/o eliminado con pequeña variación de la temperatura del individuo; y tensión superficial muy elevada que la hace pegajosa y elástica. 
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-3-imagen1.png", alt="Agua") 

    .row.mb-5
      .col-lg-5.mb-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema7-3-imagen2.png", alt="h20") 
      .col-lg-7.mb-4(data-aos="fade-left")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p En cuanto a las 
              strong propiedades químicas del agua
              | , las principales son: 
              strong un átomo de oxígeno ligado a dos de hidrógeno 
              | lo cual es su fórmula química es H₂O, la molécula del agua tiene carga eléctrica positiva en un lado y negativa en el otro, propiedad que ocasiona que sus moléculas se unan entre sí; es dipolar, o sea,  las moléculas de agua se orientan en torno a las partículas polares o iónicas, formando una envoltura de solvatación lo que se traduce en una modificación de las propiedades de estas partículas; contiene minerales y nutrientes de gran valor; en su estado puro es de pH neutro (7) esto significa que no es ácida ni básica; reacciona con los óxidos ácidos, los óxidos básicos y el metal; forma hidratos al unirse con las sales.
                  

    h3.mb-4(data-aos="fade-right") Métodos de tratamiento del agua

    .row.mb-5
      .col-lg-7.mb-4(data-aos="fade-right")
        p En muchos lugares del mundo, el agua antes de llegar a los hogares y empresas donde se usa, recibe un tratamiento con diferentes métodos depurativos o de eliminación de algunos o todos los contaminantes que se encuentran en las aguas residuales, para que posteriormente, pueda ser utilizada.
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Este proceso puede usar operaciones de distintos tipos (físico, químico, físico-químico o biológico) cuyo objetivo es la eliminación y/o reducción de la contaminación o de las características no deseables de las aguas.
            p Las que reciben tratamiento pueden ser de origen industrial, urbano e incluso de la misma naturaleza, ya que, ésta puede contener compuestos químicos no aptos para la salud. Además, el agua residual que se trata puede ser usada para el consumo humano, regar cultivos, en la industria como: agua virtual o simplemente para reinsertar a corrientes de agua sin contaminar, teniendo así, un reciclaje constante.
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-3-imagen3.png", alt="Métodos de tratamiento del agua")

    p.mb-4(data-aos="fade") El tratamiento de agua es cada vez más necesario debido a la escasez de este elemento de la naturaleza potable y a la creciente población mundial. Del total que hay en el planeta, tan solo un 2,5 % es agua dulce, y de esa cantidad tan solo el 0,4 % es apta para el consumo. El tratamiento de esta posee diferentes métodos que son empleados dependiendo de la utilización que se le quiera dar, los cuales se verán a continuación:

    .row.bg-secundario.p-4.mb-5
      .col-lg-6.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema7-3-imagen4.jpg", alt="Métodos de tratamiento del agua")
      .col-lg-6
        ul.lista-ul--color.color-naranja.mb-0
          li.mb-0 
            i.fas.fa-chevron-right
            | Método de desbaste primario.
          li.mb-0 
            i.fas.fa-chevron-right
            | Filtrados por membranas (microfiltración, ultrafiltración, nanofiltración, ósmosis inversa).
          li.mb-0  
            i.fas.fa-chevron-right
            | Acción del carbón activado.
          li.mb-0  
            i.fas.fa-chevron-right
            | Método de descalcificación. 
          li.mb-0  
            i.fas.fa-chevron-right
            | Tratamiento con cloro.
          li.mb-0  
            i.fas.fa-chevron-right
            | Tratamiento con ozono.
          li.mb-0  
            i.fas.fa-chevron-right
            | Tratamiento de agua por medio de la luz ultravioleta.
          li.mb-0  
            i.fas.fa-chevron-right
            | Método de desalinización. 
          li.mb-0  
            i.fas.fa-chevron-right
            | Destilación de agua. 
          li.mb-0  
            i.fas.fa-chevron-right
            | Planta macrófitas. 
          li.mb-0  
            i.fas.fa-chevron-right
            | Aplicación de electricidad al agua residual. 
              

    h3.mb-4(data-aos="fade-right") Control ambiental del recurso hídrico en la industria avícola

    p(data-aos="fade") En cualquier unidad productiva, el consumo y manejo del recurso hídrico es uno de los puntos críticos. Porque las fuentes hídricas (superficiales y subterráneas) son afectadas principalmente por el vertimiento de aguas residuales provenientes de unidades productivas, en el caso de las granjas, esta situación se da por el uso ineficiente del agua en operaciones de lavado o por vertimiento directo, sin ningún tratamiento a las fuentes hídricas, así como, por arrastre de la gallinaza o pollinaza, si ésta se encuentra almacenada inadecuadamente.
    p.mb-4(data-aos="fade") A continuación, se mencionan las medidas de prevención, mitigación y/o control para el uso agua:

    .row.justify-content-center.mb-4
      .col-lg-11
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-atom
            | Es aconsejable el diseño y evaluación periódica de indicadores de consumo de agua para hacer seguimiento, control y generar alternativas de mejora. 
          li 
            i.fas.fa-atom
            | Para la limpieza del galpón se recomienda realizar barridos en seco y lavados a presión.
          li 
            i.fas.fa-atom
            | Instalar dispositivos ahorradores en bebederos, sanitarios, zonas de aspersión, lavamanos y duchas. 
          li 
            i.fas.fa-atom
            | Las tuberías y equipos deberán estar en buen estado para garantizar el uso eficiente del agua. 
          li 
            i.fas.fa-atom
            | Los equipos y dispositivos (tuberías, grifos, bebederos) deberán tener una hoja de vida, donde se registren: lugar y fecha de compra, reparaciones, empresa prestadora del servicio técnico, entre otros. 
          li 
            i.fas.fa-atom
            | La limpieza de los tanques de almacenamiento y las tuberías debe realizarse mínimo cada 2 meses (dependiendo de la dureza del agua), esto evitará que ocurran obstrucciones en los bebederos automáticos y reducirá la aparición de infecciones; la manera correcta de realizar la limpieza de los tanques es con agua a presión, cepillando sus paredes y aplicando desinfectante. En todo caso se debe evitar el desperdicio de agua, por lo que la limpieza debe hacerse cuando esté desocupado. 
          li 
            i.fas.fa-atom
            | Para hacer un mejor control estadístico del consumo se recomienda hacer uso de los medidores. Se sugiere registrar dicho consumo al menos una vez por semana y considerar el número de aves, edad, actividad y operaciones de limpieza, entre otros. Adicionalmente, es importante contar con medidores exclusivos para el consumo doméstico, que registren no solamente el consumo de las familias que viven en las granjas, sino también el consumo que realizan los trabajadores en sus actividades.
          li 
            i.fas.fa-atom
            | Vincular al personal en los programas de capacitación y entrenamiento en la aplicación de prácticas, reforestación y conservación de cuencas hidrográficas. 
          li 
            i.fas.fa-atom
            | Construcción de un comité para el seguimiento y control del recurso hídrico, el cual verificará la tendencia del consumo y el estado de las tuberías y los equipos.             

    p.mb-4(data-aos="fade") Teniendo en cuenta lo anterior, y en adición pueden surgir otras prácticas que causen un uso ineficiente del recurso hídrico, esto puede deberse en la siguiente lista:

    .row.justify-content-center.mb-4
      .col-lg-11
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-atom
            | No se registran ni controlan los consumos hídricos (auditoría al consumo y auditoría de seguimiento); poco empleo de medidores de consumo.
          li 
            i.fas.fa-atom
            | En las operaciones de limpieza durante y después de la finalización del periodo no se hace barrido en seco o se hace mal, lo que causa incremento en el consumo de agua para las actividades de limpieza y lavado.
          li 
            i.fas.fa-atom
            | El lavado de los galpones se realiza con mangueras sin dispositivos que aumenten la presión del agua.
          li 
            i.fas.fa-atom
            | Las mangueras de lavado no cuentan con un dispositivo de cierre (pistola) que permita controlar la salida de agua. 
          li 
            i.fas.fa-atom
            | Los sistemas que llevan el agua hacia las áreas operativas, administrativas y domésticas no se encuentran separadas. No se tienen separadas las redes de aguas lluvias y residuales lo que causa limitaciones en el aprovechamiento y uso de estas dentro del proceso productivo. 
          li 
            i.fas.fa-atom
            | Tuberías de conducción de agua y sistemas de almacenamiento alteradas y con presentación de fugas.
          li 
            i.fas.fa-atom
            | Ausencia de programas de mantenimiento preventivo.

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema7-3-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Control ambiental del recurso hídrico
                  p.mb-0.text-small Para profundizar en el tema sobre el cuidado del recurso hídrico puede revisar el documento adjunto.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Presentaci%25C3%25B3n_Pol%25C3%25ADtica_Nacional_-_Gesti%25C3%25B3n_/libro_pol_nal_rec_hidrico.pdf&sa=D&source=editors&ust=1626817371105000&usg=AOvVaw0Kw0_esi9lvQYpuE5MBHbm')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p(data-aos="fade") En la gestión avícola se debe tener en cuenta otro recurso, en este caso corresponde al aire en el plan de mitigación.

    Separador


    // 7.4
    #t_7_4.titulo-segundo(data-aos="fade-right")
      .h2 7.4. Recurso aire 

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p La calidad del aire puede verse afectada por emisiones y olores ofensivos generados por la gallinaza o pollinaza, por los agentes en los productos utilizados para la limpieza y desinfección, por una mala disposición de residuos, y el aumento del CO y CO2 producido por los vehículos de transporte ya sea de insumos y/o animales, huevos u otros producidos de las granjas avícolas.
            p La gallinaza y la pollinaza inician su proceso de descomposición inmediatamente después de ser excretada por las aves produciendo distintos gases, algunos de los cuales afectan el entorno y la salud de los trabajadores, causan molestias a los vecinos e impactos en la atmósfera, principalmente cuando los galpones están mal diseñados (pobre ventilación) y no se respeta la densidad de aves recomendada por los expertos o las operaciones de manejo no son las mejores. 
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-4.png", alt="Recurso aire")

    p.mb-4(data-aos="fade") A continuación, se mencionan los gases de mayor impacto emitidos durante la descomposición de estos residuos:

    TabsB.color-acento-contenido.tabs-custom.mb-5
      .py-4.py-md-5(titulo="Ácidos orgánicos volátiles" :icono="require('@/assets/curso/tema7-4-ico-tabs1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ácidos orgánicos volátiles
            p Estos compuestos son generados durante la hidrólisis de los ácidos grasos presentes en el estiércol; se destacan los 
              strong ácidos acéticos, propiónico, butírico, valérico y capróico
              | , que se caracterizan por su volatilidad y olor penetrante. 
            p Por su carácter ácido, en condiciones ambientales adversas (p.ej. ventilación pobre  versus exposición prolongada) causan irritaciones en las mucosas del sistema respiratorio de aves y humanos. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen1.jpg', alt='Ácidos orgánicos volátiles')
      .py-4.py-md-5(titulo="Amoniaco" :icono="require('@/assets/curso/tema7-4-ico-tabs2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Amoniaco
            p Se forma por la descomposición de la urea presente en la gallinaza y la pollinaza. Este es un gas alcalino irritante y de olor penetrante, que cuando se concentra en un espacio cerrado no sólo causa irritación del sistema respiratorio, sino que también afecta los ojos. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen2.jpg', alt='Amoniaco')
      .py-4.py-md-5(titulo="Metano" :icono="require('@/assets/curso/tema7-4-ico-tabs3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Metano
            p Es un gas combustible producido en condiciones anaeróbicas, es decir, cuando la gallinaza y la pollinaza superan el 80% de humedad. El metano (CH4), tiene la capacidad de absorber radiación infrarroja propiciando el calentamiento gradual de la atmósfera, lo que se conoce como efecto invernadero. El índice de absorción de radiación infrarroja del metano es de 58 en una escala en la cual el valor de referencia de uno, corresponde al dióxido de carbono (CO2).
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen3.jpg', alt='Metano')  
      .py-4.py-md-5(titulo="Dióxido de carbono" :icono="require('@/assets/curso/tema7-4-ico-tabs4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Dióxido de carbono
            p  Es producto tanto de la descomposición aeróbica como anaeróbica de los estiércoles. Es un gas inerte y tiene efectos tóxicos en elevadas concentraciones; es el principal agente causante del efecto invernadero por su capacidad de absorber radiación infrarroja y por ser una de las mayores emisiones atmosféricas antropogénicas, debido a que también se genera como resultado de la combustión. 
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen4.jpg', alt='Dióxido de carbono')        
      .py-4.py-md-5(titulo="Gas sulfhídrico, H2S" :icono="require('@/assets/curso/tema7-4-ico-tabs5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Gas sulfhídrico, H2S
            p Se produce por la degradación biológica en condiciones anaerobias de los compuestos azufrados. El gas sulfhídrico o sulfuro de hidrógeno tiene el olor característico del «huevo podrido» perceptible a concentraciones muy bajas (2 ppm). 
            p Es el principal agente aromático de las emisiones provenientes de la descomposición del estiércol y es un gas altamente corrosivo, que afecta principalmente los metales ferrosos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen5.jpg', alt='Gas sulfhídrico, H2S')  
      .py-4.py-md-5(titulo="Partículas respirables" :icono="require('@/assets/curso/tema7-4-ico-tabs6.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Partículas respirables
            p La caspa que emiten las aves y el polvo proveniente de las camas y del alimento concentrado, se suspenden fácilmente en el aire dentro de los galpones donde los trabajadores se exponen a inhalar estas partículas que, con el tiempo, pueden causar una afección crónica denominada asma ocupacional, principalmente en aquellos mal diseñados o en explotaciones con densidades inadecuadas de aves.
          .col-md-6
            figure
              img(src='@/assets/curso/tema7-4-tabs-imagen6.jpg', alt='Partículas respirables')        

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p Como parte de las medidas de prevención, mitigación y/o control del uso del aire, se deben tener en cuenta las siguientes pautas: 
        p.mx-lg-4 Mantenimiento preventivo de equipos (calderas, hornos).
        p.mx-lg-4 Monitoreo de la calidad de los combustibles (ACPM, carbón).
        p.mx-lg-4 Los equipos deben tener la capacidad necesaria y suficiente para satisfacer las demandas energéticas de la empresa; no contar con equipos sobredimensionados, con mayor capacidad de generación que la requerida por la planta.
        p.mx-lg-4 Se debe contar con equipos que cumplan con las especificaciones técnicas que garanticen el cumplimiento de la normativa vigente (Resolución 909 de 2008, MAVDT).
        p.mx-lg-4 Realizar análisis periódicos de la calidad de emisiones. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-4-imagen2.png", alt="Recurso aire")

    .row.justify-content-center.mb-5(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema7-4-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso aire
                  p.mb-0.text-small Para profundizar el conocimiento sobre el recurso aire puede revisar la “Guía ambiental para el subsector avícola’’ de la Federación Nacional de Avicultores de Colombia – FENAVI.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf&sa=D&source=editors&ust=1626817371108000&usg=AOvVaw1gj6GcHU_FZquzXbtwKctN')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h3.mb-4(data-aos="fade-right") Olores ofensivos

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        p De acuerdo a la resolución 1541 del 2013, un olor ofensivo es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. Estos deben ser controlados a través de un plan de contingencia para reducir su impacto conocido como PRIO por sus siglas.
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p De acuerdo a la resolución 1541 del 2013, un olor ofensivo es el olor generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. Estos deben ser controlados a través de un plan de contingencia para reducir su impacto conocido como PRIO por sus siglas.
            p Los olores ofensivos provenientes de instalaciones avícolas son producidos por una mezcla de gases y vapores, muchos de los cuales se generan por la descomposición anaerobia de la gallinaza o pollinaza, la mortalidad, alimentos y otras materias orgánicas.
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-4-imagen3.png", alt="Olores ofensivos")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 
            strong Figura 1. 
            | Propagación de olores y sus mecanismos
        figure
          img.mb-2(src='@/assets/curso/tema7-4-figura1.svg', alt='Propagación de olores y sus mecanismos')
          figcaption Nota: tomada del Manual de buenas prácticas disponibles para la mitigación de olores en la industria avícola, Federación Nacional de Avicultores de Colombia FENAVI – FONAV   


    h3.mb-4(data-aos="fade-right") Control de olores ofensivos

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Los olores se generan inevitablemente en donde hay producciones pecuarias, pero la prevención y el manejo pueden hacerse teniendo en cuenta las acciones para el manejo de control de olores desde el lugar donde se originan, es decir desde la fuente, ya que estas son más efectivas y más fácil de implementar que las medidas orientadas al medio o al receptor, que requieren de mayor inversión y tiempo, y en la mayoría de los casos su adopción es impráctica y poco efectiva. 
            p Desde este punto de vista las buenas prácticas en las granjas avícolas son la mejor manera de aplicar las medidas de prevención y control de la emisión de gases y malos olores generados por el proceso productivo.
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema7-4-imagen4.png", alt="Olores ofensivos")


    h3.mb-4(data-aos="fade-right") Autodiagnóstico de emisión de olores ofensivos 

    p(data-aos="fade") El autodiagnóstico se practica en lugares aledaños como casas vecinas o puntos ubicados alrededor de la producción, los cuales han sido escogidos previamente. La recomendación es que se realice con regularidad sobre todo cuando el viento se dirige en dirección a los puntos seleccionados, con el fin de que se obtenga una mejor concentración de olores ofensivos provenientes de la producción.  Esta actividad puede medir el impacto de actividades como la remoción de camas o el paleo de pilas de compost, las cuales pueden causar altos picos de emisión de olores.
    p.mb-4(data-aos="fade") Para guiar el autodiagnóstico el operario debe hacer las siguientes preguntas:

    .slide-bg.mb-5
      .row.justify-content-center
        .col-lg-8
          .wrap-content.p-5
            .boxt-title.text-center
              .h2 Sector Avícola Colombiano
              p.mb-3 Buenas prácticas
              p <b>Objetivo:</b> Identificar malas prácticas en el manejo de olores en las empresas del sector...
            SlyderA
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario 
                    p ¿En qué medida aumenta la emisión de olores cuando se realizan operaciones críticas como las ya mencionadas?
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario
                    p ¿Aumenta la recepción de quejas en esas ocasiones?
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario
                    p ¿Existen pilas de materia orgánica?
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario
                    p ¿En qué condiciones está almacenada?
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario
                    p ¿Está cubierta? 
              .row.justify-content-center
                .col-lg-10
                  .wrap.color-primario
                    p ¿Dónde están ubicados los puntos de almacenamiento de materia orgánica con respecto a las casas vecinas?                 
                                                   

    p.mb-5  La siguiente escala es sugerida para el registro de la emisión de olores en el autodiagnóstico:
    .row.justify-content-center.mb-5
      .col-lg-10
        .box.color-soft-lime.p-4
          figure
            img(src="@/assets/curso/t7-i1.svg", alt="Olores ofensivos")

    p.mb-5  La persona que realiza el diagnóstico debe tomarse al menos tres minutos en los puntos de monitoreo fijados previamente, y si el olor es detectado, se debe valorar su extensión de acuerdo con la siguiente escala:
    .row.justify-content-center.mb-5
      .col-lg-10
        .box.color-soft-lime.p-4
          figure
            img(src="@/assets/curso/t7-i2.svg", alt="Olores ofensivos")





    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario2.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.mx-lg-3.my-3
                h4 Los resultados de las apreciaciones de intensidad y extensión de la emisión de olores deben ser registrados de la siguiente forma:
            .col-lg-4
              img(src="@/assets/curso/tema7-4-icono1.svg", alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/olor.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Autodiagnóstico para el control de olores ofensivos
                  p.mb-0.text-small Para conocer más sobre el control de olores ofensivos en la industria avícola se puede consultar el “Manual de buenas prácticas disponibles para la mitigación de olores en la industria avícola” 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://fenavi.org/wp-content/uploads/2018/05/Cartilla_Digital_PRIO_FINAL.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
import SlyderF from '../components/SlyderF'
export default {
  name: 'Tema7',
  components: {
    SlyderF,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Recurso suelo',
        texto:
          '<b>Medidas preventivas, de mitigación y de control del suelo.</b><br><br><ul class="lista-ul--color"><li><i class="fas fa-atom"></i> Implementación de prácticas de producción más limpia orientadas a la separación en la fuente y minimización de residuos sólidos.</li><li><i class="fas fa-atom"></i> Capacitación y entrenamiento en la aplicación de Buenas Prácticas de Operación para el manejo de residuos sólidos y peligrosos.</li><li><i class="fas fa-atom"></i> Cumplir con las normas ambientales en lo referente al manejo y disposición final de residuos peligrosos.</li></ul>',
        imagen: require('@/assets/curso/tema7-2-slyder1.jpg'),
      },
      {
        texto:
          'En cuanto a los residuos peligrosos resultantes de la labor en las incubadoras tales como frascos plásticos o de vidrio, los cuales han estado en contacto directo o parcialmente con residuos biológicos, se les debe dar el siguiente tratamiento:<br><br> <ol class="lista-ol--cuadro"><li><div class="lista-ol--cuadro__vineta"><span>1</span></div>Sumergir en una solución de hipoclorito al 5% durante 30 a 60 minutos.</li><li><div class="lista-ol--cuadro__vineta"><span>2</span></div>Quebrar o despicar (vidrío) o cortar y rajar (pastico) según sea el caso, para evitar el uso ilegal o inadecuado de los envases.</li></ol>',
        imagen: require('@/assets/curso/tema7-2-slyder2.jpg'),
      },
      {
        texto:
          '<b>Almacenar residuos</b><br><br> Es aconsejable almacenar los residuos sistemáticamente hasta lograr una cantidad considerable para ser recolectada por la empresa prestadora del servicio. No debe hacerse disposición final a través de la quema en ningún lugar de la producción.<br><br><b>Seguridad</b><br><br>Las agujas de las jeringas y hojas de bisturí se deben almacenar en recipientes rígidos a prueba de perforaciones (guardianes), marcados con símbolo rojo que señale que contienen elementos corto-punzantes.',
        imagen: require('@/assets/curso/tema7-2-slyder3.jpg'),
      },
      {
        texto:
          'Así mismo, debe dárseles el tratamiento de residuos peligrosos de conformidad con lo dispuesto en el Decreto 4741 de 2005 y en consecuencia se debe realizar su disposición a través de un «gestor de residuos» autorizado.',
        imagen: require('@/assets/curso/tema7-2-slyder4.jpg'),
      },
      {
        texto:
          'En caso de presentarse derrames de combustible en las instalaciones de las incubadoras o plantas de beneficio, debe hacerse limpieza lo más pronto posible para facilitar la recuperación del combustible y minimizar los impactos al medio ambiente.',
        texto2:
          'Como medida de seguridad los tanques de almacenamiento deben contar con diques para la retención del combustible en caso de derrames; así mismo, se aconseja como parte de las medidas de seguridad contar con extintores para el control de incendios.',
        imagen: require('@/assets/curso/tema7-2-slyder5.jpg'),
      },
      {
        texto:
          'Los aceites usados se deben manejar de acuerdo a las recomendaciones suministradas por el fabricante o importador del lubricante, hasta finalizar su vida útil.',
        texto2:
          'Se debe realizar el cambio del aceite lubricante de los vehículos en establecimientos que cumplan con los requisitos de acopiador, establecidos en el Manual Técnico para el manejo de aceites lubricantes usados, expedido por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial y las normas establecidas por la autoridad ambiental de la jurisdicción.',
        imagen: require('@/assets/curso/tema7-2-slyder6.jpg'),
      },
      {
        texto:
          'Las baterías usadas se consideran residuos post consumo de acuerdo a lo establecido en el Decreto 4741 de 2005, por lo que deben ser retornadas al mecanismo de recolección que el fabricante o importador haya establecido, de acuerdo a la Resolución 372 de 2009, modificada por la Resolución No. 361 de 2011 del Ministerio de Ambiente, Vivienda y Desarrollo Territorial.',
        imagen: require('@/assets/curso/tema7-2-slyder7.jpg'),
      },
      {
        texto:
          'En el uso de los plaguicidas se deben seguir las instrucciones de manejo seguro suministradas en la etiqueta del producto. Cuando se termina el producto, se debe realizar la práctica de triple lavado a los envases e inutilizarlos sin destruir la información de las etiquetas.',
        texto2:
          'Estos son considerados residuos post consumo de acuerdo al Decreto 4741 de 2005 y por lo tanto deben retornarse al mecanismo de devolución que el fabricante o importador haya establecido, de acuerdo con lo previsto en la Resolución 0693 de 2007.',
        imagen: require('@/assets/curso/tema7-2-slyder8.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.h150
  max-height: 150px
.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)
  border-radius: 15px
  background-color: #E2F6C6

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 15px

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #17C878
  opacity: 1
  z-index: 888
  border-radius: 15px
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)
  border-radius: 15px

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-radius: 15px

.nav-holder2
  .text
    position: absolute
    top: 100%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder2:hover
  .text
    top: 0
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p, i, li, ul
    z-index: 999
    opacity: 1
    -webkit-transition-delay: 0.2s
    transition-delay: 0.2s
</style>
