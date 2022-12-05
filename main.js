const cityCodes = [
  {
    cityName: "Київ",
    cityCode: "044",
  },
  {
    cityName: "Львів",
    cityCode: "032",
  },
  {
    cityName: "Дніпро",
    cityCode: "056",
  },
];

function result() {
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  cityCodes.forEach((element) => {
    if (element.cityName === city)
      document.getElementById(
        "result"
      ).innerHTML = `${element.cityCode}  ${phone}`;
  });

  document.getElementById("result").innerHTML = "Такого мітса немає у базі";
}
