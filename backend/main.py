import numpy as np
import tensorflow as tf
import uvicorn
from api.predict import app

print(tf.__version__)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)