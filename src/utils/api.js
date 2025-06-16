function GetWeatherData(climate, errorHandler) {
  // Manejo de errores de geolocalización
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=' +
          pos.coords.latitude +
          '&longitude=' +
          pos.coords.longitude +
          '&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
      )
        .then((res) => {
          // Verifica si la respuesta de la API fue exitosa
          if (!res.ok) {
            // Si la respuesta no es OK (ej. estado 404, 500), lanza un error
            throw new Error(`Error HTTP: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => {
          climate(res);
        })
        .catch((error) => {
          // Captura errores durante la solicitud fetch o el procesamiento de la respuesta JSON
          console.error('Error al obtener datos del clima:', error);
          if (errorHandler) {
            errorHandler(
              'No se pudieron cargar los datos del clima. Por favor, inténtalo de nuevo más tarde.'
            );
          }
        });
    },
    (error) => {
      // Función de callback para errores de geolocalización
      console.error('Error de geolocalización:', error);
      let errorMessage = 'No se pudo obtener tu ubicación.';
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage =
            'Permiso de ubicación denegado. Por favor, habilita los servicios de ubicación para usar esta función.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Información de ubicación no disponible.';
          break;
        case error.TIMEOUT:
          errorMessage =
            'Tiempo de espera agotado al intentar obtener la ubicación.';
          break;
        case error.UNKNOWN_ERROR:
          errorMessage =
            'Ocurrió un error desconocido al obtener la ubicación.';
          break;
      }
      if (errorHandler) {
        errorHandler(errorMessage);
      }
    }
  );
}

export default GetWeatherData;
