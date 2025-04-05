import os
from PIL import Image

# Configuration
input_folder = "."  # Current folder
output_folder = "./output"
target_size = (2000, 1333)
webp_quality = 80  # You can change this if you want more/less compression

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(".jpg"):
        input_path = os.path.join(input_folder, filename)
        base_name = os.path.splitext(filename)[0]
        output_path = os.path.join(output_folder, base_name + ".jpg")  # Keep .jpg extension

        with Image.open(input_path) as img:
            img = img.convert("RGB")
            img = img.resize(target_size, Image.LANCZOS)
            img.save(output_path, format="WEBP", quality=webp_quality)

print("Done! Compressed images saved in ./output folder.")
