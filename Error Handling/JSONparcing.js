let jsonString = "{'name': 'John', 'age': 30}";

try {
    let parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
} catch (error) {
    console.log("Error: Invalid JSON string!");
}
