#!/bin/bash

# Check if a project name is provided
if [ -z "$1" ]; then
  echo "Please provide a new project's name."
  exit 1
fi

# Get the highest-numbered project
last_project=$(ls | grep -E '^[0-9]+' | sort -r | head -n1)

# Extract the number and increment it
last_num=$(echo $last_project | grep -o -E '^[0-9]+')
next_num=$((last_num + 1))

# Create a new project folder
new_project_name=$(printf "%02d-%s" "$next_num" "$1")
mkdir "$new_project_name"

# Copy the contents from the template boilerplate folder
cp -r "00-project-starter/." "$new_project_name/"

echo "New project '$new_project_name' created successfully."
