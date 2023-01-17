import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../Assets/17.jpg"
import Trip2 from "../Assets/46.jpg"
import Trip3 from "../Assets/19.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google maps.</p>
            <div className="tripCard">
            <TripData
                image={Trip1}
                heading="God's own country - Kerala -"
                text="Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers"
            />
            <TripData
                image={Trip2}
                heading="Land of the Gods - Bali - "
                text="Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers’ paradise! Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples."
            />
            <TripData
                image={Trip3}
                heading="Dubai - A Megacity That Never Stops Growing -"
                text="A city of many faces, Dubai is one of the most popular tourist destinations in the world. Home to the tallest tower in the world, the Burj Khalifa, this global city is known for its lavish architecture, incredible skylines and a plethora of tourist attractions that break records to be the tallest, longest and biggest. Dubai has abundant opportunities when it comes to adventure activities like Desert Safaris through golden Arabian Dunes, Skydiving over the beautiful Palm Islands, Reef and wreck diving, kite surfing, wakeboarding, etc."
            />

            </div>

        </div>
    );
}
export default Trip;