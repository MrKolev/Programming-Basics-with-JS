function animalType(input) {
  const animal = input[0];
  switch (animal.toLowerCase()) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      console.log("reptile"); break;
    default: console.log("unknown");

  }
  
}
animalType(["dosg"])