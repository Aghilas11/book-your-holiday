// convertir today à la date d'aujourdhui
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today; // ne plus revenir en arrière du jour

// faire un date++ (en cliquant sur la date de départ ca nous rajoute automatiquement un jour de plus pour la fin de séjour )
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// la date de retour dois etre obligatoirement supérieur d'un jour à la date de départ
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    let tomorrowFormat = day.toISOString().split("T")[0];
    end_date.value = tomorrowFormat;
  }
});

// la date de retour dois pas etre inférieur à la date d'aller(donc on met toujours date de depart= date de retour+1)
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// calculer les prix du booking
const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  total.textContent = diffDays * nightPrice.textContent;
};
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();

console.log(new Date(end_date) - new Date(start_date));
