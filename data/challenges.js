import transformBrewery from './transformBrewery';

const challenges = [
  { name: 'High five 5 strangers in one day   ', points:'75 points'},
  { name: 'Buy a coffee or tea for a stranger  ', points:'75 points'},
  { name: 'Help someone carry their bag up or down the subway steps ', points:'150 points'},
  { name: 'Sit with a homeless person and have a meaningful conversation ', points:'250 points'},
  { name: 'Help a stranger in need (directions, buy them a meal, etc.) ', points:'50 points'},
  { name: 'Engage in a conversation beyond the basic “how are you?” with an employee of a store you frequent 75'},
  { name: 'Pick up enough garbage in your neighborhood to be able to fill a plastic grocery store bag ', points:'250 points'},
  { name: 'Play music on the street ', points:'200 points'},
  { name: 'Hug 10 people in one day ', points:'75 points'},
  { name: 'Hug 25 people in one day  ', points:'300 points'},
  { name: 'Hug 50 people in one day  ', points:'750 points'},
  { name: 'Tell 5 people something that you are grateful for about them ', points:'50 points'},
  { name: 'Cook or make all of your meals in one day ', points:'50 points'},
  { name: 'Support a local business you have never gone to before ', points:'60 points'},
  { name: 'Say happy birthday to everyone that facebook notifies you about today ', points:'25 points'},
  { name: 'Stop and talk with a street canvasser  ', points:'75 points'},
  { name: 'Post a positive personal story on Social media ', points:'60 points'},
  { name: 'Put two people you know that could benefit from meeting each other in touch ', points:'75 points'},
  { name: 'Give away all of the clothing you don’t need ', points:'100 points'},
  { name: 'Handwrite a full page letter to a loved one ', points:'75 points'},
  { name: 'Smile at 10 strangers ', points:'75 points'},
  { name: 'Make eye contact with 15 strangers ', points:'75 points'},
  { name: 'Reach out to someone whose facebook posts you regularly like but never talk to ', points:'75 points'},
  { name: 'Walk or drive an alternate route to work or in your neighborhood ', points:'50 points'},
  { name: 'Baby sit or animal sit for one of your friends ', points:'100 points'},
  { name: 'Take a class in a discipline you have never experienced before ', points:'75 points'},
  { name: 'Start a personal journal and write one page a day for at least 5 days ', points:'75 points'},
  { name: 'Make a note of every time in the day that you judged someone and keep a tally ', points:'50 points'},
  { name: 'Make 5 meaningful observations in a day about how your experiences made you feel and write them down ', points:'60 points'},
  { name: 'Go for a 3 mile walk ', points:'50 points'},
  { name: ' Hug 5 trees in a day ', points:'100 points'},
  { name: 'Call two friends and have a meaningful discussion about how they are actually doing ', points:'75 points'},
  { name: ' Draw or paint a picture for a friend ', points:'75 points'},
  { name: ' Pay for a stranger’s parking ', points:'75 points'},
  { name: ' Have a positive discussion with a stranger at a local coffee shop ', points:'75 points'},
  { name: ' High five 3 people on the Subway in one day ', points:'75 points'},
  { name: ' Order something different at your local coffee shop or bar ', points:'25 points'},
  { name: ' Make 5 strangers smile ', points:'75 points'},
  { name: 'Ask someone what they really need and do something to help them get it ', points:'100 points'},
  { name: 'Give a gift to someone when it isn’t a holiday ', points:'100 points'},
  { name: 'Clean an area of your apt or house that you’ve been putting off  ', points:'50 points'},
  { name: 'If you don’t know your neighbor’s name, learn it ', points:'75 points'},
  { name: 'Compliment someone’s jewelry and learn the story behind it ', points:'50 points'},
  { name: 'Spend an afternoon or an evening getting to know a Veteran ', points:'200 points'},
  { name: 'Hug Leo, Ed, or Ashley ', points:'100 points'},
  { name: 'Find someone else using the WtM app and hug them ', points:'100 points'},
  { name: 'Give 10 minutes to really listen to someone ', points:'100 points'},
  { name: 'If over 21, go three days without drinking alcohol ', points:'150 points'},
  { name: 'Go 24 hours without using/looking at your cell phone ', points:'500 points (funny how this has to have such a high point value)'},
  { name: 'Research charities and pick one to donate or volunteer for on a monthly basis ', points:'800 points'},
  { name: 'Give up your seat on the subway for anyone that may seem like they need it more than you ', points:'50 points'},
  { name: 'Go see a local performing arts or visual arts show ', points:'100 points'},];

export default challenges.map((b, i) => 

    ({...b, id: i})

);
