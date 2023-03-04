1.	¿Por qué usar Bootstrap?

Porque Bootstrap es una herramienta muy útil para desarrollar páginas web responsivas, lo que permite que los sitios se vean bien y funcionen correctamente en diferentes dispositivos y pantallas. Además, ofrece una amplia variedad de herramientas y componentes para que los desarrolladores puedan crear sitios web atractivos y funcionales con mayor facilidad y eficiencia.


2.	Características de Bootstrap

las principales características de Bootstrap son las siguientes:

Interactividad: Bootstrap proporciona una gran interactividad en la página mediante una serie de componentes que facilitan la interacción con el usuario, como menús de navegación, barras de progreso y controles de página.

Diseño responsive: El objetivo principal de Bootstrap es construir sitios web responsivos para dispositivos móviles. De una forma muy sencilla y organizada, permite diseñar páginas especialmente adaptadas para funcionar en smartphones, tablets y desktop.

Biblioteca de componentes: Bootstrap ofrece una gran cantidad de componentes para mejorar la comunicación con el usuario, como diferentes tipos de alertas, un carrusel de diapositivas para facilitar la visualización de imágenes y una barra de navegación que permite múltiples configuraciones.

3.	Ventajas y desventajas de usar bootstrap

Ventajas y desventajas de Bootstrap separadas:

Ventajas:

*** Easy to use and saves time, responsive, mobile-first approach 

Permite diseñar una web utilizando diferentes combinaciones de HTML, CSS y JavaScript.
Utiliza tecnologías modernas como HTML5, CSS3 y jQuery, y se integra con librerías JavaScript.
Incluye un sistema de rejilla útil para maquetar por columnas.
Sus plantillas son fácilmente adaptables y responsivas.
Cuenta con una documentación completa y una plantilla optimizada por defecto.
Facilita enormemente el diseño de interfaces.
Desventajas:

Se recomienda trabajar con Bootstrap desde el inicio del proyecto para evitar problemas de compatibilidad.
Cambiar de versión puede ser complicado si se han realizado modificaciones profundas.
No es un framework ligero y algunas funcionalidades requieren el uso de JavaScript y jQuery.
Es necesario adaptar el diseño a un sistema de rejilla de 12 columnas, lo que puede requerir cambios específicos en los estilos predeterminados de Bootstrap.

4.	Como instalar o implementar bootstrap en mi proyecto

Bootstrap se puede instalar fácilmente visitando la página oficial (https://getbootstrap.com/) y descargando el paquete de archivos. Los archivos de instalación incluyen hojas de estilo CSS, archivos JavaScript y fuentes, y se pueden adaptar a cualquier tipo de proyecto para la web. Para trabajar con Bootstrap, simplemente se deben agregar las hojas de estilo y el archivo JavaScript en la cabecera o antes de la etiqueta de cierre del archivo HTML.

***Los archivos Bootstrap tienen que estar incluidos en el proyecto

*** También se puede utilizar un CDN (content delivery network)
CSS - añade a head
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
JS(Bootstrap 5) - añade al final de body
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


5.	¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar como funciona y poner un ejemplo

Bootstrap está diseñado específicamente para crear sitios web responsive, lo que significa que los sitios creados con Bootstrap se ajustarán automáticamente al tamaño de la pantalla en la que se visualicen. Esto es posible gracias a la inclusión del sistema de rejilla (Grid system) de Bootstrap.

El sistema de rejilla divide la pantalla en doce columnas virtuales y permite a los desarrolladores especificar cómo se deben mostrar los elementos en cada tamaño de pantalla. Por ejemplo, en una pantalla pequeña, se pueden especificar que ciertos elementos se apilen verticalmente para que sean más fáciles de leer y navegar en dispositivos móviles.

Para implementar un diseño responsive en Bootstrap, se pueden utilizar las clases de tamaño de columna, como "col-sm" para pantallas pequeñas, "col-md" para pantallas medianas y "col-lg" para pantallas grandes. Estas clases se pueden aplicar a cualquier elemento HTML, como un div o una imagen, para definir cómo se mostrará en diferentes tamaños de pantalla.

Un ejemplo de uso de las clases de tamaño de columna en Bootstrap podría ser:

html
<div class="container">
  <div class="row">
    <div class="col-sm-

6.	¿Que es un componente de bootstrap?Pon un ejemplo

Bootstrap ofrece una gran cantidad de componentes predefinidos que los desarrolladores web pueden utilizar en sus proyectos. Estos componentes incluyen menús de navegación, carousels, tablas de precios y muchos otros. En su página oficial, Bootstrap ofrece ejemplos de estos componentes, lo que facilita su implementación. Algunos de los componentes más utilizados son:

El carousel 
Las navs 
El navbar
El jumbotron 
Las breadcrumbs, 
La pagination 
Los tooltips 
Los formularios 
Las cards.

Este es un ejemplo del componente "Navbar":

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mi Sitio Web</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
    </ul>
  </div>
</nav>

El código anterior es un ejemplo de cómo utilizar uno de los componentes de Bootstrap, en este caso el navbar, que permite crear una barra de navegación responsive con diferentes elementos como enlaces y dropdowns. La estructura del código consiste en un contenedor principal de clase "navbar", dentro del cual se crean los elementos de la barra de navegación utilizando listas HTML y clases específicas de Bootstrap. Además, se utiliza JavaScript para activar la funcionalidad de dropdown en la barra de navegación.


7.	¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos

There are two major layouts for Bootstrap:

-Fixed Layout. 
    This uses the bootstrap .container class for the layout. The fixed-layout has specific pixel width values that change with the help of media queries, which makes the site responsive. Fixed layout resizes at intervals following the specified pixel values.

-Fluid Layout:
    This uses the bootstrap .container-fluid class for the layout. This layout uses proportional values such as percentages for blocks of content, images, or any other item. Fluid layout continuously resizes as you change the width of your browser by any amount, leaving no extra empty space on the sides ever Hence it is named “fluid layout”.



Containers are the most basic layout element in Bootstrap and are required when using our default grid system. 
Bootstrap comes with three different containers:

Fixed layout containers:

    .container, which sets a max-width at each responsive breakpoint
    .container-{breakpoint}, which is width: 100% until the specified breakpoint. The breakpoint can be (sm/md/lg/xl) https://getbootstrap.com/docs/4.4/layout/overview/

Fluid layout container
    .container-fluid, which is width: 100% at all breakpoints





8.	¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.

Bootstrap includes predefined button styles, each with its own style and/or semantic purpose:

 -Primary  provide more visual weight to a button while representing a primary action for visitors to take on the page. E.g. homepage.
 -Secondary  
 -Success  to indicate a successful or positive action. For example, at the end of a form
 -Danger  
 -Warning 
 -Info an informational alert. For example, on an account registration form, an info button might indicate that a user can click to edit their profile.
 -Light 
 -Dark  




9.	¿Que es un Carousel de bootstrap? Pon un ejemplo

a slideshow for cycling through a series of content. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators, as well as captions.
For example, a sliding image gallery.


10.	¿Que es un spinner de bootstrap? Pon un ejemplo
An animated icon that shows the loading state in your projects. Can be used to show a page or an element is loading.


11.	¿Que es un navBar de bootstrap? Pon un ejemplo
A navigation header that is placed at the top of the page. Has different styles and can also include elements like forms (for example search field).


12.	¿Que es un modal de bootstrap? Pon un ejemplo
Modal plugin is used to add a dialog box/pop-up window to show notifications, etc. For example, It can be used to ask user subsribe to a newsletter. 



13.	¿Existen inputs para subir archivos en Bootstrap? Pon un ejemplo

File input element. Supports common files such as jpg, pdf. Could be used, for example, to ask user to upload a photo of their ID.


14.	¿Qué es un plugin scrollspy en Bootstrap? Pon un ejemplo
Automatically updates Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.





Bibliografía

<!-- https://getbootstrap.com -->
<!-- https://immune.institute/blog/razones-usar-bootstrap-web/#:~:text=Esta%20herramienta%20permite%20crear%20una,tanto%2C%20la%20experiencia%20de%20usuario. -->
<!-- https://soyhorizonte.com/blog/ventajas-y-desventajas-de-usar-bootstrap/ -->
<!-- https://www.jose-aguilar.com/blog/como-instalar-y-usar-bootstrap/#:~:text=Una%20forma%20sencilla%20de%20hacerlo,el%20directorio%20que%20tu%20quieras. -->
<!-- https://programarfacil.com/blog/crear-una-web-responsive-con-bootstrap/ -->
<!-- https://www.eniun.com/componentes-utiles-bootstrap/ -->
<!--https://blog.hubspot.com/website/bootstrap-button -->
<!-- https://www.geeksforgeeks.org/how-many-types-of-layouts-are-there-in-bootstrap/ -->