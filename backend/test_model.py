from tensorflow.keras.models import load_model
import tensorflow as tf

IMG_SIZE = 224  # Debe coincidir con el tamaño usado en el entrenamiento

def load_and_preprocess(image_path):
    # Cargar la imagen y preprocesarla
    img = tf.keras.preprocessing.image.load_img(image_path, target_size=(IMG_SIZE, IMG_SIZE))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, axis=0) / 255.0  # Normalización
    return img_array

if __name__ == "__main__":
    # Cargar el modelo entrenado
    model = load_model("pneumonia_model.h5")
    # Solicitar a usuario la ruta de la imagen
    image_path = input("Ingresa la ruta completa de la imagen a evaluar: ")
    img_processed = load_and_preprocess(image_path)
    # Realizar la predicción
    prediction = model.predict(img_processed)
    print("Predicción (probabilidad):", prediction)
