$(document).ready(function () {
    let arr = [
        {
            temperature: "29 F",
            wind: "17 mph",
            directiondegree: "314",
            name: "The Hamptons, New York",
            name2: "The Hills",
            location: "40.847787° N / -72.589811° W",
            img: "https://www.datocms-assets.com/128889/1745433311-25718_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "34 F",
            wind: "20 mph",
            directiondegree: "316",
            name: "Fajardo, Puerto Rico",
            name2: "Moncayo Golf & Ocean Club",
            location: "18.23515367212566° N / -66.42840537985397° W",
            img: "https://www.datocms-assets.com/128889/1726232913-paesaggio_tappainer_2022-copy.jpeg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "35 F",
            wind: "10 mph",
            directiondegree: "218",
            name: "Flathead Lake, Montana",
            name2: "Territory 1889 Golf Club",
            location: "47.90667629161947° N / -114.1315530874691° W",
            img: "https://www.datocms-assets.com/128889/1749834672-binyan_hhc3121_wardvillageblocke_s020_ext_superman_final5000.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "28 F",
            wind: "30 mph",
            directiondegree: "114",
            name: "Tuscany, Italy",
            name2: "Tenuta Toscana",
            location: "43.5482° N / 10.8596° W",
            img: "https://www.datocms-assets.com/128889/1742426220-horseback.jpg?fit=max&h=1200&w=1000"
        },
        {
            temperature: "38 F",
            wind: "70 mph",
            directiondegree: "144",
            name: "Honolulu, Hawaii",
            name2: "Mohala",
            location: "21.3069° N / -157.8583° W",
            img: "https://www.datocms-assets.com/128889/1721142462-15507_large-1500-x-1500.jpg?fit=max&h=1200&w=1000"
        }
    ];

    let i = 0;
    function updateUI() {
        $("#card_temp").text(arr[i].temperature);
        $("#card_text1").text(arr[i].name);
        $("#card_text2").text(arr[i].name2);
        $("#card_wind").text(arr[i].wind);
        $("#card_compass").text(arr[i].directiondegree + "°");
        $("#card_coords").text(arr[i].location);
        $("#lod-image").attr("src", arr[i].img);
    }

    /* initial load */
    updateUI();

    $("#card_rightArrow").on("click", function () {
        i = (i + 1) % arr.length;
        updateUI();
    });

    $("#card_leftArrow").on("click", function () {
        i = (i - 1 + arr.length) % arr.length;
        updateUI();
    });
});
