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
  var index = -1;
  for (var i = 0; i < cityCodes.length; i++) {
    if (cityCodes[i].cityName === city) index = i;
  }
  if (index === -1)
    document.getElementById("result").innerHTML = "Такого мітса немає у базі";
  else
    document.getElementById(
      "result"
    ).innerHTML = `${cityCodes[index].cityCode}${phone}`;
}
