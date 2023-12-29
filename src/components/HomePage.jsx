import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setError } from '../Store/Slices/slice';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoryEndpoints = [
      'smileys-and-people',
      'animals-and-nature',
      'food-and-drink',
      'travel-and-places',
      'activities',
      'objects',
      'symbols',
      'flags',
    ];

    const fetchData = async () => {
      try {
        const categoryData = await Promise.all(
          categoryEndpoints.map(async (endpoint) => {
            const response = await fetch(`https://emojihub.yurace.pro/api/random/category/${endpoint}`);
            if (!response.ok) {
              throw new Error('Failed to fetch.');
            }
            return response.json();
          })
        );

        const mergedCategories = categoryData.flat(); // Flatten the array

        dispatch(setCategories(mergedCategories));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  return (
    <div>
      <h1>Emoji Metrics</h1>
      {categories.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <Link to={`/details/${category.id}`}>
                {category.name} - {category.metric}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
