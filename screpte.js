function changeNbrPersonne(selectElement, inputId) {
    const input = document.getElementById(inputId);
    if (selectElement.value !== "aucun" && input.value == "0") {
      input.value = 1;
    } else if (selectElement.value === "aucun") {
      input.value = 0;
    }
    calculerTotal();
  }
  
  function calculerTotal() {
    let total = 0;
  
    const sections = ["entree", "plat", "dessert","boisson"];
    sections.forEach((section) => {
      const select = document.getElementById(section);
      const input = document.getElementById(section + "Nbr");
      const prix = parseFloat(select.options[select.selectedIndex].getAttribute("data-prix")) || 0;
      total += prix * parseInt(input.value || 0);
    });
  
    const totalField = document.getElementById("total");
    totalField.value = total + "dh";

}

function genererFacture() {
  const factureField = document.getElementById("facture");
  const sections = ["entree", "plat", "dessert","boisson"];
  let facture = "Facture :\n";
  
    sections.forEach((section) => {
      const select = document.getElementById(section);
      const input = document.getElementById(section + "Nbr");
      const prix = parseFloat(select.options[select.selectedIndex].getAttribute("data-prix")) || 0;
      const quantite = parseInt(input.value || 0);
  
      if (prix > 0 && quantite > 0) {
        facture += `${quantite} x ${select.options[select.selectedIndex].text} = ${prix * quantite}dh\n`;
      }
    });
  
    facture += `\nTotal : ${document.getElementById("total").value}`;
    factureField.value = facture;
  }