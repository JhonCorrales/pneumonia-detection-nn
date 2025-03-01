from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = FastAPI()

# Configurar CORS correctamente
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL de tu frontend
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Cargar el modelo
try:
    model = tf.keras.models.load_model("pneumonia_model.h5")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

def preprocess_image(image_bytes):
    try:
        # Convertir bytes a imagen
        image = Image.open(io.BytesIO(image_bytes))
        # Convertir a RGB si es necesario
        if image.mode != 'RGB':
            image = image.convert('RGB')
        # Redimensionar
        image = image.resize((224, 224))
        # Convertir a array y normalizar
        image_array = np.array(image) / 255.0
        # Añadir dimensión de batch
        return np.expand_dims(image_array, axis=0)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing image: {str(e)}")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not model:
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    try:
        # Verificar el tipo de archivo
        if not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Leer la imagen
        contents = await file.read()
        
        # Preprocesar la imagen
        image = preprocess_image(contents)
        
        # Realizar predicción
        prediction = model.predict(image)
        
        # Obtener resultado
        probability = float(prediction[0][0])
        diagnosis = "PNEUMONIA" if probability > 0.5 else "NORMAL"
        
        return {
            "diagnosis": diagnosis,
            "probability": probability,
            "timestamp": str(tf.timestamp())
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Agregar una ruta de prueba
@app.get("/")
async def root():
    return {"message": "API is running"}
