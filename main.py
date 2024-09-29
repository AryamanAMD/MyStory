import os

def list_files_in_directory(directory):
    file_paths = []
    
    # Traverse the directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Create full file path
            file_path = os.path.join(root, file)
            file_paths.append(file_path)
    
    return file_paths

# Specify the directory you want to list files from
directory = 'D:\PROJECTS\portfolio - Copy'  # Replace with your folder path

# Call the function and print the file paths
all_file_paths = list_files_in_directory(directory)
for path in all_file_paths:
    print(path)
