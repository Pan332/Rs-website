let properties = [
    {
        id: 1,
        title: "Property 1",
        price: "$500,000",
        bedrooms: 3,
        bathrooms: 2,
        img: "property1.jpg"
    },
    {
        id: 2,
        title: "Property 2",
        price: "$300,000",
        bedrooms: 2,
        bathrooms: 1,
        img: "property2.jpg"
    }
];

function displayProperties() {
    let featuredProperties = document.getElementById("featured-properties");
    let propertiesHTML = "";
    properties.forEach(property => {
        propertiesHTML += `
        <li>
            <h3>${property.title}</h3>
            <img src="${property.img}" alt="${property.title}">
            <p>${property.price}</p>
            <p>${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms</p>
            <a href="#" onclick="displayPropertyDetail(${property.id})">View Details</a>
        </li>
        `;
    });
    featuredProperties.innerHTML = propertiesHTML;
}

function displayPropertyDetail(id) {
    let property = properties.find(property => property.id === id);
    let propertyDetail = document.getElementById("property-detail");
    propertyDetail.innerHTML = `
    <h2>${property.title}</h2>
    <img src="${property.img}" alt="${property.title}">
    <p>${property.price}</p>
    <p>${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms</p>
    `;
}

displayProperties();

