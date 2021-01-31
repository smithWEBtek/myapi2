# agenda
## - MVC restaurant analogy
## - access external APIs
## - view JSON data via Rails API endpoints
## - demo build a Rails app
## - demo build a Rails API

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


---

# MVC restaurant analogy

Model | View | Controller
| :---: | :---: | :---: |
Chef | Menu | Waiter |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611712988/myapi2/chef2.jpg) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611430895/myapi2/menu.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611429996/myapi2/waiter.png)
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432225/myapi2/rails-models.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432716/myapi2/rails-views.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611434275/myapi2/rails-controllers.png)


<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


# `Model(chef)`
## - analagous to the database table
## - cooks dishes as directed by the `Controller(waiter)`
## - doesn't like it when you try to ask for things not on the menu
## - might accept suggestions from the waiter
## - might throw something if a customer barges into the kitchen demanding a special dish
 
| `Model(chef)` | `in Rails` |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611712988/myapi2/chef2.jpg) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432225/myapi2/rails-models.png)

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
---

# `View(menu)` 
## - is a UI for ordering dishes
## - analagous to the browser View pages
## - Rails views in `app/views`, implicitly named after controllers
<p>&nbsp;</p>
 
| `View(menu)` | `in Rails` |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611430895/myapi2/menu.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611432716/myapi2/rails-views.png)

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

---

# `Controller(waiter)`

## - takes user orders from the `View:menu`
## - has defined actions that correspond to menu items
## - handles incoming orders and routes and redirects requests 
## - controls access to the kitchen

| `Controller(waiter)` | `in Rails` |
| :---: | :---: |
![](https://res.cloudinary.com/smithwebtek/image/upload/v1611429996/myapi2/waiter.png) | ![](https://res.cloudinary.com/smithwebtek/image/upload/v1611434275/myapi2/rails-controllers.png)
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


















---
# directly asking the chef for a sandwich ...

![](https://res.cloudinary.com/smithwebtek/image/upload/c_scale,h_227/v1611438194/myapi2/angry-chef.jpg)
## - the waiter might not be aware of **one-off creative orders**
## - restaurant owner wants menu be served with **stocked resources**
## - the **pricing** of 1-off creative dishes might not be correct
## - **not scalable** if the system is not followed
## - Rails devs try to first think about **where a thing should exist in the code**, even though it 'could' be in many places and formations
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

--- 
# **Rails approach is `convention over configuration`**
 ### - order from the **menu(VIEW)** with the **waiter(CONTROLLER)**
 ### - **waiter(CONTROLLER)** directs the **chef(MODEL)** to cook dish

![](https://res.cloudinary.com/smithwebtek/image/upload/v1611712988/myapi2/chef2.jpg) 

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

---
# if you want takeout, 
# ask for **JSON data**

![](https://res.cloudinary.com/smithwebtek/image/upload/v1611711467/myapi2/drive-thru.png)
## - Rails in API mode, serving JSON
## - Rails getting JSON data from external APIs
## - Transformed JSON data served at Rails controller endpoints
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

---
# demos and walkthrus

## misc examples of Rails getting API data
## pull from the Weather API
## pull from the Github API



## Rails app with views and JSON data
## build a simple Cats and Dogs Rails app with JSON data endpoints
## pull from the Cat API
## pull from the Dog API
## serve the results from Rails API endpoints

[About Pets & People](https://www.cdc.gov/healthypets/health-benefits/index.html#:~:text=There%20are%20many%20health%20benefits,depression%20by%20giving%20us%20companionship.)
There are many health benefits of owning a pet. Studies have shown that the bond between people and their pets can increase fitness, lower stress, and bring happiness to their owners. Some of the health benefits of having a pet include:

* Decreased blood pressure, cholesterol and triglyceride levels
* Decreased feelings of loneliness
* Increased opportunities for exercise, outdoor activities and socialization

# problem
 A group of users are adopting pets. 
 - We want to see who owns which pets.
 - We want to provide the same information via JSON data at api endpoints.

# business logic
- Which users have adopted which pets?
- Show a Highchart of users and pet counts
- Show Rails views of all Users, Dogs, Cats, Reports, if requesting HTML
- Provide API endpoints for all data in JSON format, if requesting JSON

# api data sources
- cat api
  - get request for random cat pic
- dog api
  - get request for random dog pic

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


# demo projects
## voter api and client
[voter api](https://voter-api.smithwebtek.com)

[voter client](https://voter.smithwebtek.com)

    - Rails in API mode serves JSON voter data, and database CRUD
    - Vanilla javascript front end for voting via map or address form
    - no Rails views
    - all the action happens in the controller(s)
    - database migrations
    - seed file: sample csv data built with Mockaroo: https://mockaroo.com
    - MVC ? more like MC
    - routes
    - serializers, make custom methods available to API endpoints

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

---

## autism-tools api and client

[autism-tools api](https://api.autism-tools.org)

[autism-tools client](https://autism-tools.org)

    - app for life management of an Autistic person
    - Rails in API mode serves JSON data, and database CRUD
    - React front end
    - no Rails views in the API
    - design doc: how the business logic turns into code
    - database migrations
    - seed file

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

---
