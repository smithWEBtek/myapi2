# agenda
- overview MVC
- demo Rails API
- access external API's
- provide analyzed data at API endpoints in JSON format

# MVC restaurant analogy
- Model:Chef cooks dishes as directed by the waiter
  - analagous to the database table, a Rails database semantic layer
- View:Menu is a user interface for ordering dishes
  - analagous to the browser View pages
- Controller:Waiter takes orders from customers who are looking at a menu
  - has a group of "actions" that are based on typical orders 

### yes you could directly ask the chef for a sandwich, but ...
- the restaurant MVC system works best if you place an order from the menu, with the waiter
- the chef does not just spin up orders outside of the system
  - the waiter might not be aware of it
  - the owner of the restaurant might prefer that the main menu be served with whatever resources are in stock
  - the pricing of 1-off creative dishes might not be correct
  - not scalable if the system is not followed
- Rails approach is `convention over configuration`
  - so as Rails devs, we try to first think about where a thing should exist in the code, even though you could 
```
pull a sandwich straight from the database kitchen, without following the menu, or the waiter"
```
# context
[About Pets & People](https://www.cdc.gov/healthypets/health-benefits/index.html#:~:text=There%20are%20many%20health%20benefits,depression%20by%20giving%20us%20companionship.)

There are many health benefits of owning a pet. Studies have shown that the bond between people and their pets can increase fitness, lower stress, and bring happiness to their owners. Some of the health benefits of having a pet include:

* Decreased blood pressure, cholesterol and triglyceride levels
* Decreased feelings of loneliness
* Increased opportunities for exercise, outdoor activities and socialization

# problem
 We have a group of users who are adopting pets to promote a well-being after traumatic life events. We want to track the adoption metrics and glean insights based on:
 - type of pet adopted
 - day of adoption
 - weather on the day of adoption

# business logic
- Which users have adopted which kinds of pets on which days?
- Show correlation of the weather on pet adoption.
- CRUD users, pets, weather
- Chart pet adoption by users on a weekly basis 
- Provide basic views of all data
- Provide API endpoints for all data in JSON format, as requested

# api data sources
- cat api
  - get request for random cat pic
- dog api
  - get request for random dog pic
- weather api
  - get request for daily weather stats

# data model
- user(s)
- cat(s)
- dog(s)
- weather

## user
- columns
  - username, zipcode
- migration (a recipe Rails uses to create the database table)
  - rails g resource User username:text zipcode:text
- relationships
  - has_many :cats
  - has_many :dogs

## cat
- columns
  - name, breed, user_id
- migration
  - rails g resource Cat name:text breed:text user_id:integer
- relationships
  - belongs_to :user, optional: true

## dog
- columns
  - name, breed, user_id
- migration
  - rails g resource Dog name:text breed:text user_id:integer
- relationships
  - belongs_to :user, optional: true

## forecast  
- columns
  - event_datetime, lat, lng
- migration
- relationships

## examples
- Rails in normal mode
- Rails in API mode
- Spring Boot comparison
- MERN stack version
- MEAN stack version
- LEMP stack version