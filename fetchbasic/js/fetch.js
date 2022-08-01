const loadCountries =  () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHtml(country));
    const countryData = document.getElementById('country-data');
    countryData.innerHTML = countriesHTML.join('');
}
// one option 1 distructing the object
// const getCountryHtmlOption1 = (country) => {
//     const { name, flags } = country;
//     return `
//         <div class="col-4 mb-2 mt-2">
//             <div class="card">
//                 <div class="card-body">
//                     <h2>${name.common}</h2>
//                     <img src="${flags.png}" alt="" />
//                 </div>
//             </div>
//         </div>
//     `
// }
// one option distructing the object
// one option 2 distructing the object
const getCountryHtml = ({name,flags,area,region}) => {
    return `
        <div class="col-2 mb-2 mt-2">
            <div class="card">
                <div class="card-body">
                    <h2>${name.common}</h2>
                    <p class="mb-0">Area: ${area}</p>
                    <p >Region: ${region}</p>
                    <img class='w-100' src="${flags.png}" alt="" />
                </div>
            </div>
        </div>
    `
}
// one option 2 distructing the object
// original code
// const getCountryHtml = (country) => {
//     const { name, flags } = country;
//     return `
//         <div class="col-4 mb-2 mt-2">
//             <div class="card">
//                 <div class="card-body">
//                     <h2>${country.name.common}</h2>
//                     <img src="${country.flags.png}" alt="" />
//                 </div>
//             </div>
//         </div>
//     `
// }
// original code
loadCountries()