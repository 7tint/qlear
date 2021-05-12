# Qlear
Tags For a Qlearer Future.

### 2021 TO Hacks.
#### :star2: Best Use of Datastax Astra
&nbsp;

## Background
**How can we effectively promote product transparency for conscious consumers?**

As the second largest polluter in the world, the Fashion industry is rapidly adapting production methods to be more sustainable. Consumers are reacting in the same way – according to the 2017 Cone Generation Z Corporate Social Responsibility (CSR) study, 89% of Gen Z consumers would purchase from a company supporting social and environmental issues over one that does not. However, only 65% actually pay attention to companies’ CSR efforts when deciding what to buy. These numbers don’t match.

Evidently, a large portion of consumers fall into the category of “wanting to shop sustainably, but not at the cost of convenience.” Even if some companies work cleanly, their initiatives are rendered meaningless if customers are never exposed to them (current promotion and packaging methods are extremely harmful to the environment – packaging makes up more than a third of global plastic waste). We want to help consumers see the impact behind their purchases with Qlear, a product paired with an application that represents the union of product transparency, ease of access, and condensed packaging.


## What is Qlear?
Qlear as a project encompasses our clothing tag products, ‘Qleartags,’ and our web application that provides the meaning behind each Qleartag. A Qleartag is a small tag with a corresponding QR code printed on it: ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840850794639392768/image_15.png)

The concept is simple – price tags are seldom overlooked by the average clothing shopper. A strategically placed QR code on a Qleartag would be scanned at the cost of all but less than 3 seconds with modern mobile phones. Our web app takes it away from there.


**Company interface:**
1. Companies fill out a comprehensive form for new product lines.
2. Companies print Qleartags for completed products.
3. Companies can view and track statistics on product scans.


**User interface:**
1. Users scan a Qleartag with their mobile device.
2. Users are brought to a page with all the information filled out by the company.
3. Users can view previously scanned items and add items to their wishlist, as well as interact with a chatbot powered by Ada.


## Design
The design of Qleartags followed an accelerated version of IDEO’s **human-centered design process**. This approach began with discovering and defining the problem space through some light user research and synthesis, followed by using these insights to inform our  prototyping the solution in lo-fi and hi-fi formats.

**User Research and Synthesis**

To initialize our goals for this product, we conducted **secondary research** and extracted insights from articles surrounding sustainability and packaging in the fashion industry, as well as readings that analyze the trend of QR codes in apparel brands. We then created an **affinity map** to identify the key pain points and insights facing our target users.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840846798037319680/yay_research.png)

Using our research, we identified two primary user groups and created **proto-personas** to empathize with their pain points and motivations, in order to design with a human perspective in mind.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840846889124888637/Slide_16_9_-_1.png)

**Prototyping**

Before creating any prototypes, we made a concise **user flow** to better visualize the actions used by a store owner looking to create Qleartags, and a consumer looking to scan or save items from Qleartags to a wishlist.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840847442915360808/Screen_Shot_2021-05-09_at_12.07.28_AM.png)

**Low fidelity sketches** were drawn to rapidly mock-up the core structure of the product, before designing in higher fidelity.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840847674114310155/Screen_Shot_2021-05-09_at_12.08.24_AM.png)

Our **design language and UI kit** prioritizes readability and usability. **Krona One** was used for most headings and our logo, while **Gotham** was used for most body and subheading text. Our color palette incorporates dark turquoise, green, and beige tones to convey an atmosphere of tranquility and the natural world, as well as trust and security to drive our message of living sustainably through smart fashion choices.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840847700890091560/Screen_Shot_2021-05-09_at_12.08.30_AM.png)

Using the above assets, we built out our **high-fidelity mock-ups** in Figma to create the final prototype. With the user interface design finalized, we were able to move forward with implementation and engineering.

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840849415978614784/dfull.png)

##Engineering

**Frontend**

Our frontend is developed using React and Typescript, with ada bot integrations. We used the goqr.me API for creating the QR code images.

**Backend**

Since the theme of the hackathon is "Spring into Action," we felt that it was the perfect decision to learn Spring Boot for our backend API. Our backend is built using Spring Boot with an Apache Cassandra database connected with Datastax Astra via the connection API. We deployed our project using AWS.

**System Architecture**

 ![image of tag](https://cdn.discordapp.com/attachments/836015586613395516/840999595201921044/unknown.png)

##Takeaways
**Challenges we faced / What we learned**

Building Qlear came with a lot of challenges and was learning experiences for us. Developing a complete web app with interfaces for both users and companies all while learning Typescript proved to be very time-consuming. A large reason we were able to finish in time was through leveraging new design techniques, streamlining the UI/UX process. We also encountered issues in outdated documentation as we tried to learn Spring Boot, but once we got it hooked up to DataStax’s Cassandra (which we also used for the first time), we thankfully found many reusable parts of code, shortening our process.

**Accomplishments**

There were multiple new technologies we learned and implemented during the short time frame. We’re proud of completing such a large web app in such a short time – we had to implement far more front-end components than expected, all while learning on the go. We’re also happy that we were able to implement an Ada bot in order to flush out the UX.

**What’s Next**

In brainstorming, we wanted to implement a map with nearby stores using Qleartags, but we decided against it part way through the project due to time constraints. We’d like to implement this as an immediate next step, as well as begin partnering with local sustainability-focused store owners.



(Project link may not work on deployed site due to CORS, which we did not have time to fix)
