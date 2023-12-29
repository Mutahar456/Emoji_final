import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../Store/Slices/slice';

function DetailsPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const category = useSelector((state) =>
    state.categories.categories.find((cat) => cat.id === categoryId)
  );

  useEffect(() => {
    console.log('Category ID from URL:', categoryId);
    console.log('Category from Redux store:', category);

    if (!category) {
      dispatch(setError('Category details not found.'));
    }
  }, [categoryId, category, dispatch]);

  if (!category) {
    console.log('Category not found in Redux store for ID:', categoryId);
    return <div>Loading or Error: Category details not found.</div>;
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <p>{category.details}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default DetailsPage;
