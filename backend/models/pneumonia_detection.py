import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np

# Configuración de parámetros
IMG_SIZE = 224  # Tamaño estándar para las imágenes
BATCH_SIZE = 32
EPOCHS = 20

def create_data_generators():
    # Configurar el aumento de datos y normalización
    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=20,
        width_shift_range=0.2,
        height_shift_range=0.2,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True,
        fill_mode='nearest'
    )

    # Para validación y test solo necesitamos rescalar
    val_test_datagen = ImageDataGenerator(rescale=1./255)

    return train_datagen, val_test_datagen

def create_model():
    model = models.Sequential([
        # Capa de entrada
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)),
        layers.MaxPooling2D((2, 2)),
        
        # Capas convolucionales
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Capas densas
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dropout(0.5),
        layers.Dense(1, activation='sigmoid')  # 1 unidad para clasificación binaria
    ])
    
    # Compilar el modelo
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    
    return model

def load_and_preprocess_image(image_path):
    # Cargar y preprocesar una sola imagen
    img = tf.keras.preprocessing.image.load_img(
        image_path, 
        target_size=(IMG_SIZE, IMG_SIZE)
    )
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)  # Crear un batch
    return img_array / 255.0  # Normalizar

def train_model(train_dir, val_dir):
    # Crear generadores de datos
    train_datagen, val_datagen = create_data_generators()
    
    # Crear generadores de entrenamiento y validación
    train_generator = train_datagen.flow_from_directory(
        train_dir,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode='binary'
    )
    
    validation_generator = val_datagen.flow_from_directory(
        val_dir,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode='binary'
    )
    
    # Crear y entrenar el modelo
    model = create_model()
    
    history = model.fit(
        train_generator,
        validation_data=validation_generator,
        epochs=EPOCHS,
        callbacks=[
            tf.keras.callbacks.EarlyStopping(
                monitor='val_loss',
                patience=3,
                restore_best_weights=True
            )
        ]
    )
    
    return model, history

def evaluate_model(model, test_dir):
    # Crear generador para el conjunto de prueba
    _, test_datagen = create_data_generators()
    
    test_generator = test_datagen.flow_from_directory(
        test_dir,
        target_size=(IMG_SIZE, IMG_SIZE),
        batch_size=BATCH_SIZE,
        class_mode='binary'
    )
    
    # Evaluar el modelo
    test_loss, test_accuracy = model.evaluate(test_generator)
    return test_loss, test_accuracy
