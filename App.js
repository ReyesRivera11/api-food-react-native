import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Category from './src/components/Category/Category';
import Header from './src/components/Header/Header';
import CardMeal from './src/components/Meal/CardMeal';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [canadianFood, setCanadianFood] = useState([]);
  const [mexicanFood, setMexicanFood] = useState([]);
  const [mealByCategory, setMealByCategory] = useState([]);
  const [category, setCategory] = useState("Seafood");
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => setCategories(data.categories))
      .catch(err => console.log(err));
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then(res => res.json())
      .then(data => setCanadianFood(data.meals))
      .catch(err => console.log(err));
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican")
      .then(res => res.json())
      .then(data => setMexicanFood(data.meals))
      .catch(err => console.log(err));
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => setMealByCategory(data.meals))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => setMealByCategory(data.meals))
      .catch(err => console.log(err));
  }, [category]);
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <View>
        <Text style={styles.text}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}>

          {categories?.map(categoryFood => (
            <Category
              key={categoryFood.idCategory}
              name={categoryFood.strCategory}
              img={categoryFood.strCategoryThumb}
              category={category}
              fun={setCategory}
            />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.subTitle}>{category} Food</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainerMeal}>

          {mealByCategory?.map(meal => (
            <CardMeal
              key={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
            />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.subTitle}>Canadian food</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainerMeal}>

          {canadianFood?.map(meal => (
            <CardMeal
              key={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
            />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.subTitle}>Mexican food</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainerMeal}>

          {mexicanFood?.map(meal => (
            <CardMeal
              key={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
            />
          ))}
        </ScrollView>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    padding:10,
    backgroundColor:"white",
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    gap: 8
  },
  subTitle: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "400",
    fontSize: 20
  },
  scrollViewContainerMeal: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }
});
