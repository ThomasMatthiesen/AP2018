<h1>Planet Position API Project</h1>

![ScreenShot](https://github.com/ThomasMatthiesen/AP2018/blob/master/mini_ex8/Screenshot.png)

[Try the program here!](https://cdn.rawgit.com/ThomasMatthiesen/AP2018/87abe12f/mini_ex8/mini_ex8/files/index.html)
(The program may ask your browser to open unsafe script, because of some trouble with our code)

In making this program I worked together with Mark Nielsen and Jesper Vendelbo. We worked out the idea and design of the program together and wrote fragments of the code individually - where my focus was on creating the slider bar that would adjust the time and date of our program. Lastly we joined our codes and adapted them to each other. Overall it was a really great groupwork experience.

Out program shows the positions of some of the planets in our solar system in a 3D visualisation. We chose this because we wanted to work with a simple form of API, so that we would really get an idea of what's possible with an API and understand the basics of it. We used an API available at http://www.astro-phys.com/api, that is based on data from the ephemerides project (https://ssd.jpl.nasa.gov/?ephemerides) and provides data about the positions of the planets in our solar system at a given date. 


<h3>How our program uses the API</h3>

When requesting the API with a set of data-inquiries it provides us with a JSON-file, wherein a list of the planets are listed and their individual x-, y- and z-position (in a requested measurement-unit) will be provided.

![ScreenShot](https://github.com/ThomasMatthiesen/AP2018/blob/master/mini_ex8/JSONfile.png)

The data is passed on in our 'GotData'-function 

![ScreenShot](https://github.com/ThomasMatthiesen/AP2018/blob/master/mini_ex8/GotData.png)

and set as a parameter in the loadJSON-function, where the request for the planets, year, month and measurement-unit is declared.

![ScreenShot](https://github.com/ThomasMatthiesen/AP2018/blob/master/mini_ex8/JSONURL.png)

![ScreenShot](https://github.com/ThomasMatthiesen/AP2018/blob/master/mini_ex8/URL.png)

This data is provided in a very neat (parsed) JSON-file, where it is easy for people to analyse and decipher it. The computer doesn't work any faster due to this parsing, but could just as well read it as a long line.


(individual)Try to formulate a question in relation to web APIs or querying processes that you want to investigate further when you have more time.


<h3>Further work</h3>
I think our API is a great example of how much data you can store and distribute with an API - even though the data is actually quite limited and simple, it has to do with our solar system and the movement of planets. I see our API as a quite scientific and positive available storage of data, but what if the data wasn't about planets in our solar system, but rather about people?

"Facebook’s Graph API was a revolution in large-scale data provision. It converted people and their likes, connections, locations, updates, networks, histories, and extended social networks into — quite literally — “objects.” It made the company’s offerings and the data its users generated more economically viable." (Albright 2018)

I find the objectification of people by the use of APIs on social networks quite scary. It's easy to tell that the reason for this is only to make it easier for companies to exploit these data to make their advertisement, sales and branding more effective. I think this is clearly seen in the example Albright mentions about how Facebook through its API turns people into objects, and how even though people have expressed worries for earlier API version, they manage to continue distributing data  with their launch of 'Facebook for Business'.

Most of the handling of the data used in APIs is hidden, like the authors of Critical Software Thing (Draft) express: 
"Today, many APIs are free to use but feature certain practical and epistemological restrictions. Most platforms focus on technical and prescriptive usage of their APIs, but do not expose how data is actually being queried within their private guarded databases." (Gauthier et. al 2017).

I think if I had to work further on a project with APIs, I would dig into another API that would distribute and handle data about people - this could be Twitter, Facebook or something like that. And then I would try to expose the sheer amount of data, like many others have done, to get a visual or sensual result of the data.


<h3>References</h3>

Albright, J. "The Graph API: Key Points in the Facebook and Cambridge Analytica Debacle". Medium, 2018. 

Gauthier, D., Samson, A., Snodgrass, E., Soon, W. & Tyzlik-Carver, M. Critical Software Thing. Executing. Draft. 2017. 
