
# LaNueva Clasificados Scaper

Este repositorio contiene un script que utiliza [Playwright](https://playwright.dev/) en **Node.js** para extraer información de la página [Clasificados de LaNueva](https://www.lanueva.com/servicios/clasificados)

## Requisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-repositorio.git
   ```
   
2. Navega al directorio del proyecto:
   ```bash
   cd lanueva-scraper
   ```

3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Uso

Para ejecutar el script de scraping, utiliza el siguiente comando:

```bash
node index.js
```

El script comenzará a navegar por el sitio web objetivo y extraerá la información especificada.

### Configuración

Podés modificar la categoría o el archivo donde se guarda la información en el archivo ```index.js```

## Dependencias

- [Playwright](https://playwright.dev/) - Herramienta para la automatización de navegadores.
- [dotenv](https://www.npmjs.com/package/dotenv) - Para cargar variables de entorno desde un archivo `.env` (opcional si se utilizan credenciales o configuraciones específicas).

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el código, por favor abre un **Pull Request** o reporta un problema en la sección de **Issues**.
