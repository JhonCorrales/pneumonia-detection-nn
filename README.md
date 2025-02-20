# Sistema de Detección de Neumonía

Este proyecto implementa un sistema de detección de neumonía utilizando deep learning y radiografías de tórax. El sistema está construido con:

- Frontend: React + TypeScript + Vite
- Backend: FastAPI + Python
- Modelo: CNN entrenada con PyTorch

## Características
- Interfaz web para subir imágenes de rayos X
- Análisis en tiempo real de radiografías
- Visualización de resultados y predicciones
- API REST para integración con otros sistemas

## Dataset
Para obtener el dataset, sigue estos pasos:
1. Descarga el dataset de [Kaggle](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia).
2. Extrae el archivo ZIP en la carpeta `backend/data/`.

La estructura del directorio después de extraer debería verse así:
```
backend/
  data/
    chest_xray/
      train/
      test/
      val/
```
