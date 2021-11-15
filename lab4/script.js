const getData = async () => {
  let repsonse = await fetch("https://randomuser.me/api/?results=10", {
    method: "GET"
  });
  const data = await repsonse.json();

  let container = document.querySelector(".container");
  let preloader = document.querySelector(".preloader");

  preloader.style.display = "none";
  const gender = {
    male: "Мужской",
    female: "Женский"
  };
  data.results.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
 <div class="form">
<p>Имя и фамилия:${el.name.title} ${el.name.first} ${el.name.last}</p>
<p>Пол: ${el.gender === "male" ? gender.male : gender.female}</p>
<p>Адрес: ${el.location.country} ${el.location.state} ${el.location.city} ${
      el.location.street.name
    }, ${el.location.street.number}</p>
                    <p>Email:${el.email}</p>
                    <p>Дата рождения: ${el.dob.date
                      .substring(0, 10)}</p>
                    <p>Возраст:${el.dob.age}</p>
                    <p >Телефон:${el.phone}</p>
                    <img src=${el.picture.medium} alt="">
                    </div>
                    `;

    container.appendChild(card);
  });
};

window.onload = () => getData();
