
import os

# Directorio donde se encuentran los archivos
directorio = 'C:/Users/nicol/Desktop/imagenes t4'

# Obtener la lista de archivos en el directorio
archivos = os.listdir(directorio)

# Contador para enumerar los archivos
contador = 1

# Iterar sobre los archivos y renombrarlos en la misma carpeta
for archivo in archivos:
    # Construir el nuevo nombre de archivo (imagen1, imagen2, ...)
    nuevo_nombre = f'imagen{contador}.jpg'  # Cambia la extensión según el tipo de archivo
    
    # Ruta completa del archivo de origen
    ruta_origen = os.path.join(directorio, archivo)
    
    # Ruta completa del archivo de destino (mismo directorio)
    ruta_destino = os.path.join(directorio, nuevo_nombre)
    
    # Renombrar el archivo
    os.rename(ruta_origen, ruta_destino)
    
    # Incrementar el contador
    contador += 1