from pneumonia_detection import train_model, evaluate_model
import os

# Configura las rutas a los diferentes conjuntos de datos
BASE_PATH = ".\data\chest_xray"  # Actualiza esta ruta base
TRAIN_DIR = os.path.join(BASE_PATH, "train")
VAL_DIR = os.path.join(BASE_PATH, "val")
TEST_DIR = os.path.join(BASE_PATH, "test")

if __name__ == "__main__":
    # Verifica que los directorios existen
    for dir_path in [TRAIN_DIR, VAL_DIR, TEST_DIR]:
        if not os.path.exists(dir_path):
            raise FileNotFoundError(f"Directory not found: {dir_path}")
    
    # Entrena el modelo
    print("Starting model training...")
    model, history = train_model(TRAIN_DIR, VAL_DIR)
    
    # Evalúa el modelo con el conjunto de prueba
    print("\nEvaluating model on test set...")
    test_loss, test_accuracy = evaluate_model(model, TEST_DIR)
    print(f"Test accuracy: {test_accuracy:.4f}")
    print(f"Test loss: {test_loss:.4f}")
    
    # Guarda el modelo entrenado
    model.save("pneumonia_model.h5")
    print("\nModel trained and saved successfully!")
