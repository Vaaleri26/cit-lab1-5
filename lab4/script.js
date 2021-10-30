const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");

const sex = {
  male: "Мужской",
  female: "Женский"
};

const getData = async () => {
  const repsonse = await fetch("https://randomuser.me/api/?results=10", {
    method: "GET"
  });

  const data = await repsonse.json();

  preloader.style.display = "none";

  data.results.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
                <div class="form">
                <p class="inf">Имя и фамилия:<span class="polzt">${
                  el.name.title
                } ${el.name.first} ${el.name.last}</span></p>
              
                    <p class="inf">Пол: <span class="polzt">${
                      el.gender === "male" ? sex.male : sex.female
                    }</span></p>
                    <p class="inf">Адрес: <span class="polz">${
                      el.location.country
                    } ${el.location.state} ${el.location.city} ${
      el.location.street.name
    }, ${el.location.street.number}</span></p>
                    <p class="inf">Email: <span class="polz">${
                      el.email
                    }</span></p>
                    <p class="inf">Дата рождения: <span class="polz">${el.dob.date
                      .substring(0, 10)
                      .split("-")
                      .join("-")}</span></p>
                    <p class="inf">Возраст: <span class="polz">${
                      el.dob.age
                    }</span></p>
                    <p class="inf">Телефон: <span class="polz">${
                      el.phone
                    }</span></p>
                    <img src=${el.picture.medium} alt="">
                    </div>
                    `;

    container.appendChild(card);
  });
};

window.onload = () => getData();
