const harry = {
  name: "Harry Potter",
  hairColor: "black",
}

const hermione = {
  name: "Hermione Granger",
  hairColor: "brown",
}

const ron = {
  name: "Ron Weasley",
  hairColor: "red",
}

const wizzards = [{ ...harry }, { ...hermione }, { ...ron }]

const unorderedList = document.getElementById("ul")

wizzards.forEach((item, index) => {
  const listItem = document.createElement("li")
  listItem.textContent = item.name
  listItem.style.cssText = `color: ${item.hairColor}`
  unorderedList.appendChild(listItem)
})
