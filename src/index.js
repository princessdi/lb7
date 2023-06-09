import "./scss/main.scss";

const tripOffres = [
  {
    name: "ALBANIA",
    date: "10.06",
  },
  {
    name: "BARCELONA",
    date: "13.06",
  },
  {
    name: "AMSTERDAM",
    date: "12.06",
  },
  {
    name: "CROATIA",
    date: "10.06",
  },
  {
    name: "FRANCE",
    date: "21.07",
  },
  {
    name: "CYPRUS",
    date: "07.08",
  },
];

const tripOptions = document.getElementById("tropOptions");
const tripOffers = document.getElementById("tripOffers");
const date = document.getElementById("date");
const place = document.getElementById("place");
const searchBy = document.getElementById("searchBy");

tripOptions.addEventListener("submit", onSumbit);

tripOffres.forEach((trip, i) => {
  const optionDate = document.createElement("option");
  optionDate.value = trip.date;
  optionDate.text = trip.date;
  date.add(optionDate);

  const optionPlace = document.createElement("option");
  optionPlace.value = trip.name;
  optionPlace.text = trip.name;
  place.add(optionPlace);
});

function onSumbit(e) {
  e.preventDefault();
  const date = e.currentTarget.elements.date.value;
  const place = e.currentTarget.elements.place.value;
  searchTrip(date, place);
  e.currentTarget.reset();
}

function searchTrip(date, place) {
  const trips = tripOffres.filter(
    (el) => el.date === date && el.name === place
  );
  searchBy.textContent = ` ${place} - ${date} Found ${trips.length} results`;
  tripOffers.innerHTML = "";

  const fragment = document.createDocumentFragment();

  trips.forEach((trip) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = require(`./images/${trip.name}.png`);
    img.alt = trip.name;
    p.textContent = `${trip.name} - ${trip.date}`;
    div.className = "trip-offer-item";
    div.appendChild(img);
    div.appendChild(p);
    fragment.appendChild(div);
  });

  tripOffers.appendChild(fragment);
}
