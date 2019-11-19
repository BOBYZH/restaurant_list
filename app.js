const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

mongoose.connect('mongodb://localhost/restaurantInfo', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

const RestaurantInfo = require('./models/restaurant_info')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  RestaurantInfo.find((err, restaurantinfos) => {
    if (err) return console.error(err)
    return res.render('index', {restaurantinfos})
  })
})

app.get('/restaurants', (req, res) => {
  return res.redirect('/')
})

app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurantInfo = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurantInfo })
})

app.post('/restaurants', (req, res) => {
  const restaurantinfo = new RestaurantInfo({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
  })
  
  restaurantinfo.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

app.get('/restaurants/:restaurant_id/edit', (req, res) => {
  res.send('Show page of editing a restaurant info')
})

app.post('/restaurants/:restaurant_id/edit', (req, res) => {
  res.send('Edit a restaurant info')
})

app.post('/restaurants/:restaurant_id/delete', (req, res) => {
  res.send('Delete a restaurant info')
})


app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

app.use(express.static('public'))

app.listen(3000, () => {
  console.log(`Express app is listening!`)
})