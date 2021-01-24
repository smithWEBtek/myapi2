
---
# agenda
### * MVC restaurant analogy
### * demo Rails API
### * access external API's
### * view JSON data via Rails API endpoints
<p>&nbsp;</p>

---

# MVC restaurant analogy

Model | View | Controller
| :---: | :---: | :---: |
Chef | Menu | Waiter   
<p>&nbsp;</p>

---

# Model
### * analagous to the database table
### * cooks dishes as directed by the `Controller(waiter)`
### * doesn't like it when you try to ask for things not on the menu
### * might accept suggestions from the waiter
### * might throw something if a customer barges into the kitchen demanding a special dish
 
| `Model(chef)` | `in Rails` |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611429996/myapi2/chef.jpg) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432225/myapi2/rails-models.png)
<p>&nbsp;</p>

---

# `View(menu)` 
- is a UI for ordering dishes
- analagous to the browser View pages
- Rails views in `app/views`, implicitly named after controllers
<p>&nbsp;</p>
 
| View(menu) | in Rails |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611430895/myapi2/menu.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432716/myapi2/rails-views.png)

<p>&nbsp;</p>

---

## `Controller(waiter)`
- takes user orders from the `View:menu`
- has defined actions that correspond to menu items
- handles incoming orders and routes and redirects requests 
- controls access to the kitchen

| The Controller(waiter) | in Rails |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611429996/myapi2/waiter.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611434275/myapi2/rails-controllers.png)
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


---
# yes you could bypass the waiter and ask the chef for a sandwich, but ...

![](https://res.cloudinary.com/smithwebtek/image/upload/c_scale,h_227/v1611438194/myapi2/angry-chef.jpg)
### - the waiter might not be aware of **one-off creative orders**
### - restaurant owner wants menu be served with **stocked resources**
### - the **pricing** of 1-off creative dishes might not be correct
### - **not scalable** if the system is not followed
### - Rails devs try to first think about **where a thing should exist in the code**, even though it 'could' be in many places and formations
<p>&nbsp;</p>

--- 
## **Rails approach is `convention over configuration`**
 - order from the **menu(VIEW)** with the **waiter(CONTROLLER)**
 - **waiter(CONTROLLER)** directs the **chef(MODEL)** to cook dish
<p>&nbsp;</p>

---
## if you want takeout, ask for **JSON data**
<p>&nbsp;</p>

---
## demo api context

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
  - rails g resource Cat name:text breed:text user_id:integer image:text
- relationships
  - belongs_to :user, optional: true

## dog
- columns
  - name, breed, user_id
- migration
  - rails g resource Dog name:text breed:text user_id:integer image:text
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