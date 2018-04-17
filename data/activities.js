import transformBrewery from './transformBrewery';

const breweries = [
  {
    "id": 1,
    "type":"brewery",
    "title":"Cody the Genius @ Bonnie",
    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/1.jpg'),
    "banner":require('../assets/images/1.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/1.jpg'),
    "logo_150":require('../assets/images/1.jpg'),
    "logo_350":require('../assets/images/1.jpg'),
    "banner_thumb":require('../assets/images/1.jpg'),
    "banner_medium":require('../assets/images/1.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 2,
    "type":"brewery",
    title:'Tyler Clayton',
    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Meet Tyler Clayton Appel. We were compelled to bring his tone on board for our first event after we heard him playing the streets of Astoria. His music is beautiful and he is a determined advocate for the paid artist. We definitely stand behind and support that mood. Hear him for yourself, he'll be playing the streets of Astoria this Sunday.",
    "description":"Stay a while, he's worth every second. Shoot a video or picture, don't forget to tip",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/2.jpg'),
    "banner":require('../assets/images/2.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/2.jpg'),
    "logo_150":require('../assets/images/2.jpg'),
    "logo_350":require('../assets/images/2.jpg'),
    "banner_thumb":require('../assets/images/2.jpg'),
    "banner_medium":require('../assets/images/2.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 3,
    "type":"brewery",
    title:'Ed the Genius @ Bonnie',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/3.jpg'),
    "banner":require('../assets/images/3.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/3.jpg'),
    "logo_150":require('../assets/images/3.jpg'),
    "logo_350":require('../assets/images/3.jpg'),
    "banner_thumb":require('../assets/images/3.jpg'),
    "banner_medium":require('../assets/images/3.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 4,
    "type":"brewery",
    title:'Bob the fitness genius @ Versa-Fit',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "We're thrilled to welcome a vetted personable and skilled fitness extraordinaire to our growing team of vetted tone setters",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/4.jpg'),
    "banner":require('../assets/images/4.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/4.jpg'),
    "logo_150":require('../assets/images/4.jpg'),
    "logo_350":require('../assets/images/4.jpg'),
    "banner_thumb":require('../assets/images/4.jpg'),
    "banner_medium":require('../assets/images/4.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 5,
    "type":"brewery",
    title:'Kaylyn Marie',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Meet the magical and talented Kaylyn Marie. Her music is moving and her passion is obvious. Her tone is spreading love and we're fortunate and honored to have her playing for us on the day of our first event. Eat a delicious free lunch and be blown away by her performance as you do.",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/5.jpg'),
    "banner":require('../assets/images/5.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/5.jpg'),
    "logo_150":require('../assets/images/5.jpg'),
    "logo_350":require('../assets/images/5.jpg'),
    "banner_thumb":require('../assets/images/5.jpg'),
    "banner_medium":require('../assets/images/5.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },

  {
    "id": 7,
    "type":"brewery",
    title:'Braylon the mixologist @ Mosaic Craft Beer and Cocktail Lounge',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/7.jpg'),
    "banner":require('../assets/images/7.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/7.jpg'),
    "logo_150":require('../assets/images/7.jpg'),
    "logo_350":require('../assets/images/7.jpg'),
    "banner_thumb":require('../assets/images/7.jpg'),
    "banner_medium":require('../assets/images/7.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 8,
    "type":"brewery",
    title:'Draven the genious barista @ Cafe 23',
    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/8.jpg'),
    "banner":require('../assets/images/8.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/8.jpg'),
    "logo_150":require('../assets/images/8.jpg'),
    "logo_350":require('../assets/images/8.jpg'),
    "banner_thumb":require('../assets/images/8.jpg'),
    "banner_medium":require('../assets/images/8.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 9,
    "type":"brewery",
    title:'Rose flaurist extraordinaire @ Ditmars Flowers and Gifts',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/9.jpg'),
    "banner":require('../assets/images/9.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/9.jpg'),
    "logo_150":require('../assets/images/9.jpg'),
    "logo_350":require('../assets/images/9.jpg'),
    "banner_thumb":require('../assets/images/9.jpg'),
    "banner_medium":require('../assets/images/9.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 10,
    "type":"brewery",
    title:'Jamarion the genius @ Flattopps',
    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/10.jpg'),
    "banner":require('../assets/images/10.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/10.jpg'),
    "logo_150":require('../assets/images/10.jpg'),
    "logo_350":require('../assets/images/10.jpg'),
    "banner_thumb":require('../assets/images/10.jpg'),
    "banner_medium":require('../assets/images/10.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 11,
    "type":"brewery",
    title:'The Little Soap Shop',
    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/11.jpg'),
    "banner":require('../assets/images/11.jpg'),
    "cost_average_64":"11.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/11.jpg'),
    "logo_150":require('../assets/images/11.jpg'),
    "logo_350":require('../assets/images/11.jpg'),
    "banner_thumb":require('../assets/images/11.jpg'),
    "banner_medium":require('../assets/images/11.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 12,
    "type":"brewery",
    "color": "#fff",
    title:'Nevaeh @ The Brass Owl',

    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/12.jpg'),
    "banner":require('../assets/images/12.jpg'),
    "cost_average_64":"112.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/12.jpg'),
    "logo_150":require('../assets/images/12.jpg'),
    "logo_350":require('../assets/images/12.jpg'),
    "banner_thumb":require('../assets/images/12.jpg'),
    "banner_medium":require('../assets/images/12.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 13,
    "type":"brewery",
    "color": "#fff",
    title:'Zhicay @ Zhicay Shoe Repair',

    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/13.jpg'),
    "banner":require('../assets/images/13.jpg'),
    "cost_average_64":"113.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/13.jpg'),
    "logo_150":require('../assets/images/13.jpg'),
    "logo_350":require('../assets/images/13.jpg'),
    "banner_thumb":require('../assets/images/13.jpg'),
    "banner_medium":require('../assets/images/13.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 14,
    "type":"brewery",
    "color": "#fff",
    title:'Kelsey',

    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/14.jpg'),
    "banner":require('../assets/images/14.jpg'),
    "cost_average_64":"114.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2014-09-20 17:32:07",
    "logo_full":require('../assets/images/14.jpg'),
    "logo_140":require('../assets/images/14.jpg'),
    "logo_350":require('../assets/images/14.jpg'),
    "banner_thumb":require('../assets/images/14.jpg'),
    "banner_medium":require('../assets/images/14.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 15,
    "type":"brewery",
    title:'Luludi',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/15.jpg'),
    "banner":require('../assets/images/15.jpg'),
    "cost_average_64":"115.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/15.jpg'),
    "logo_150":require('../assets/images/15.jpg'),
    "logo_350":require('../assets/images/15.jpg'),
    "banner_thumb":require('../assets/images/15.jpg'),
    "banner_medium":require('../assets/images/15.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 16,
    "type":"brewery",
    "color": "#fff",
    title:'Phoenix @ Oak Point Health and Vitality Centre',

    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/16.jpg'),
    "banner":require('../assets/images/16.jpg'),
    "cost_average_64":"116.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/16.jpg'),
    "logo_150":require('../assets/images/16.jpg'),
    "logo_350":require('../assets/images/16.jpg'),
    "banner_thumb":require('../assets/images/16.jpg'),
    "banner_medium":require('../assets/images/16.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },
  {
    "id": 17,
    "type":"brewery",
    title:'Xander @ Bagel House',

    "color": "#fff",
    "accentColor": "#000",
    "address":"29-12 23rd Ave",
    "city":"Astoria",
    "province":"NY",
    "postal_code":"11106",
    "country":"USA",
    "latitude":"40.7746737",
    "longitude":"-73.91360029999998",
    "summary": "Our current mood. All day music festival at The Bonnie, one of our favorites and definite tone setters. Notice the artist drawing the singer in the lower corner..",
    "description":"Welcome to the Bonnie. You have important task at hand. Find Lillian and capture her tattoo. Take a picture in the back yard, the Bonnie will reward you.",
    "phone":16043367711,
    "email":"info@thebonnie.com",
    "website":"http://www.thebonnie.com/",
    "social_instagram":"mainstreetbeer",
    "social_facebook":"MainStreetBeer",
    "social_twitter":"mainstreetbeer",
    "social_untappd":"8418",
    "logo":require('../assets/images/17.jpg'),
    "banner":require('../assets/images/17.jpg'),
    "cost_average_64":"117.00",
    "cost_average_32":"6.50",
    "instagram_location_id":null,
    "contact_email":null,
    "contact_lastname":null,
    "contact_firstname":null,
    "created_at":"-0001-11-30 00:00:00",
    "updated_at":"2015-09-20 17:32:07",
    "logo_full":require('../assets/images/17.jpg'),
    "logo_150":require('../assets/images/17.jpg'),
    "logo_350":require('../assets/images/17.jpg'),
    "banner_thumb":require('../assets/images/17.jpg'),
    "banner_medium":require('../assets/images/17.jpg'),
    "hours":{
      "timezone":"America/Vancouver",
      "brewery_id":2,
      "monday_open":"13:00:00",
      "monday_close":"23:00:00",
      "tuesday_open":"13:00:00",
      "tuesday_close":"23:00:00",
      "wednesday_open":"13:00:00",
      "wednesday_close":"23:00:00",
      "thursday_open":"13:00:00",
      "thursday_close":"23:00:00",
      "friday_open":"12:00:00",
      "friday_close":"23:00:00",
      "saturday_open":"12:00:00",
      "saturday_close":"23:00:00",
      "sunday_open":"12:00:00",
      "sunday_close":"23:00:00",
      "created_at":"-0001-11-30 00:00:00",
      "updated_at":"-0001-11-30 00:00:00",
      "status":"open"
    },
    "beers":[

    ],
    "rating":"?"
  },


];

export default breweries.map(b => transformBrewery(b, new Date()));
