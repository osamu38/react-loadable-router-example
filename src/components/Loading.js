import React from 'react';

export default function Loading(props) {
  const {
    isLoading,
    pastDelay,
    error,
  } = props;

  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
}
