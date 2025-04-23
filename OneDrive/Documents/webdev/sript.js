document.getElementById("change-text-btn").addEventListener("click", function () {
    const desc = document.getElementById("description");
  
    // Add some variety and drama
    desc.textContent = "🌟 Your destiny has changed — a new path unfolds!";
    desc.style.color = "#ff5722";
    desc.style.fontWeight = "bold";
    desc.style.fontSize = "1.4em";
    desc.style.transition = "all 0.3s ease-in";
  });
  
  
  document.getElementById("toggle-style-btn").addEventListener("click", function () {
    const heading = document.getElementById("main-heading");
    heading.style.color = heading.style.color === "gold" ? "#6a1b9a" : "gold";
    heading.style.transform = heading.style.transform === "rotate(2deg)" ? "rotate(0)" : "rotate(2deg)";
  });
  
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const newPara = document.createElement("p");
    newPara.textContent = "✨ A hidden scroll appears: 'Believe in your magic!'";
    newPara.id = "dynamic-para";
    document.getElementById("dynamic-container").appendChild(newPara);
  });
  
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    const element = document.getElementById("dynamic-para");
    if (element) {
      element.remove();
    }
  });
  